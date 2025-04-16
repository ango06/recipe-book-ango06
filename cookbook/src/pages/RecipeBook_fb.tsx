import { useEffect, useState } from 'react';

import { getFirestore } from "firebase/firestore";

// interface
import { Recipe } from "../types/recipe.ts";
import {  getRecipes } from "../handleRecipes.ts";

import Page from "../components/Page.tsx";
import NewRecipe from "./NewRecipe.tsx";

// Material UI imports
import {Box, Button, FormControlLabel, Modal, Switch } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const RecipeBook = () => {
    const db = getFirestore();
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [allRecipes, setAllRecipes] = useState<Recipe[]>([]);
    const [index, setIndex] = useState(1);
    const [numRecipes, setNumRecipes] = useState(0);
    const [showFavorites, setShowFavorites] = useState(false);

    // upon mount or db change
    useEffect(() => {
        console.log("useEffect is running");
        async function fetchData() {
            const recipeList = await getRecipes(db);
            setRecipes(recipeList);
            setAllRecipes(recipeList);
            setNumRecipes(recipeList.length);
        }
        fetchData();
        console.log("Fetch data ran");
    }, [db]);

    // Turning pages
    const handleLeft = () => {
        if (index > 1) {
            setIndex(index - 1);
        }
    };
    const handleRight = () => {
        if (index < numRecipes) {
            setIndex(index + 1);
        }
    };

    // New Recipe pop up
    // if it says hook is used conditionally, move the hooks to the top with the rest
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // current recipe 
    const currentRecipe = recipes[index - 1];
    console.log(currentRecipe);

    // show favorites or not
    // using showFavorites (prevState) bc the state doesn't update immediately
    // could rename showFavorites anything else
    // if I didnt use showFavorites in the Switch component then I'd get an error this var isn't actually used 
    const handleShowFavorites = () => {
        // Toggle the showFavorites state, and then filter recipes
        setShowFavorites(showFavorites => {
            const newState = !showFavorites; // toggle favorite or unfavorite
            const visibleRecipes = newState ? recipes.filter(recipe => recipe.isFavorite) : allRecipes;
            setRecipes(visibleRecipes);
            return newState;
        });
    };
    
    return (
        <>
            <h1 className="text-center top-space">Cookbook</h1>
            {/* if I ever add Tailwind, then use the spinning animation for loading circle thing */}
            {!currentRecipe && <p className="top-space" style={{ textAlign: 'center' }}>Recipe book is loading...</p>}

            {/* should I justify content or keep float right */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignSelf: 'center', justifySelf: 'center', width: '68rem', margin: '20px 10px'}}>
                <FormControlLabel control={<Switch />} label="Favorites only" checked={showFavorites} onChange={handleShowFavorites}/>
                <Button onClick={handleOpen} style={{ float: 'right', borderRadius: '20px', backgroundColor: 'darkblue'}} variant="contained" endIcon={<AddIcon />}>New Recipe</Button>
            </div>

            {/* New recipe pop up, consider adding transitions? */}
            <Modal open={open} onClose={handleClose}>
                <Box>
                    <NewRecipe handleClose={handleClose} />
                </Box>
            </Modal>

            <div id="book" className="flexbox">
                {/* if currentRecipe exists */}
                {currentRecipe && <Page recipe={currentRecipe} />}
            </div>
        
            <div style={{ alignItems: 'center', justifyItems: 'center', margin: '20px'}}>
                <Button onClick={handleLeft} style={{ borderRadius: '20px', backgroundColor: 'darkblue'}}><ArrowBackIcon /></Button>
                <Button onClick={handleRight} style={{ borderRadius: '20px', backgroundColor: 'darkblue'}}><ArrowForwardIcon /></Button>
                <h4>Recipe {index} of {numRecipes}</h4>
            </div>
        </>
    );
};

export default RecipeBook;

// FIREBASE VERSION