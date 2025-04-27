import { useState } from 'react';

import recipesData from "../recipes.json";
import { Recipe } from "../types/recipe.ts";

import Page from "../components/Page.tsx";
import NewRecipe from "./NewRecipe.tsx";

// Material UI imports
import {Box, Button, FormControlLabel, Modal, Switch } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const RecipeBook = () => {

    // const recipes = recipesData.recipes;
    // ???
    const recipes = recipesData.recipes as Recipe[];
    const numRecipes = recipes.length;

    // New Recipe pop up
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // Turning pages
    const [index, setIndex] = useState(1);
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

    // Turning on favorites only
    const [showFavorites, setFavoritesOnly] = useState(false);
    const handleShowFavorite = () => setFavoritesOnly(!showFavorites);

    const currentRecipe = recipes[index - 1];

    return (
        <>
            <h1 className="text-center top-space">Cookbook</h1>

            {/* should I justify content or keep float right */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignSelf: 'center', justifySelf: 'center', width: '68rem', margin: '20px 10px'}}>
                <FormControlLabel control={<Switch />} label="Favorites only" onChange={handleShowFavorite} />
                <Button onClick={handleOpen} style={{ float: 'right', borderRadius: '20px', backgroundColor: 'darkblue'}} variant="contained" endIcon={<AddIcon />}>New Recipe</Button>
            </div>

            {/* New recipe pop up, consider adding transitions? */}
            <Modal open={open} onClose={handleClose}>
                <Box>
                    <NewRecipe handleClose={handleClose} />
                </Box>
            </Modal>

            <div id="book" className="flexbox">
                    {<Page recipe={currentRecipe} />}
            </div>
        
            <div style={{ alignItems: 'center', justifyItems: 'center', margin: '20px'}}>
                <Button onClick={handleLeft} style={{ borderRadius: '20px', backgroundColor: 'darkblue'}}><ArrowBackIcon /></Button>
                <Button onClick={handleRight} style={{ borderRadius: '20px', backgroundColor: 'darkblue'}}><ArrowForwardIcon /></Button>
                <h4>Recipe {index} of {numRecipes}</h4>
                <h4>Show favorites: {showFavorites}</h4>
            </div>
        </>
    );
};

export default RecipeBook;

// JSON VERSION