import { useEffect, useState } from 'react';

import { getFirestore } from "firebase/firestore";

import { getRecipes } from "../handleRecipes.ts";
import { Recipe } from "../types/recipe.ts";

import RecipeRow from "../components/RecipeRow.tsx";
import NewRecipe from "./NewRecipe.tsx";

import { Button, Box, FormControlLabel, Modal, Switch } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const RecipeList2 = () => {
    const db = getFirestore();
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [allRecipes, setAllRecipes] = useState<Recipe[]>([]);
    const [showFavorites, setShowFavorites] = useState(false);

    // upon mount or db change
    useEffect(() => {
        async function fetchData() {
            const recipeList = await getRecipes(db);
            setRecipes(recipeList);
            setAllRecipes(recipeList);
        }
        fetchData();
    }, [db]);

    // New Recipe pop up
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleShowFavorites = () => {
        setShowFavorites(showFavorites => { // doesn't have to be showFavorites
            const newState = !showFavorites;
            const visibleRecipes = newState ? recipes.filter(recipe => recipe.isFavorite) : allRecipes;
            setRecipes(visibleRecipes);
            return newState;
        });
    };

    const recipeList = recipes; // or just pass in recipes prop itself

    return (
        <>
            <h1 className="text-center top-space">Chef's List</h1>

            <div style={{ margin: '1rem 8.5rem'}}>
                <FormControlLabel control={<Switch />} label="Favorites only" checked={showFavorites} onChange={handleShowFavorites} />
                <Button style={{ float: 'right', borderRadius: '20px', backgroundColor: '#264653'}} variant="contained" endIcon={<AddIcon />} onClick={handleOpen}>New Recipe</Button>
            </div>

            <Modal open={open} onClose={handleClose}>
                <Box>
                    <NewRecipe handleClose={handleClose} />
                </Box>
            </Modal>

            <section style={{ justifySelf: 'center', width: '90rem'}}>
                <table id="recipes">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Dish</th>
                            <th>Cuisine</th>
                            <th>Time</th>
                            <th>Skill Level</th>
                            <th>Description</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {<RecipeRow recipes={recipeList} />}
                    </tbody>
                </table>
            </section>
        </>
    );
};

export default RecipeList2;

// FIREBASE VERSION