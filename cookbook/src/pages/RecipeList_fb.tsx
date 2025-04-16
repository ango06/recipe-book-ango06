import { useState } from 'react';

import {  } from 'firebase/firestore';

// import { getRecipe, changeFavorite } from "../handleRecipes.ts";

import recipesData from "../recipes.json";
import { Recipe } from "../types/recipe.ts";
import RecipeRow from "../components/RecipeRow.tsx";
import NewRecipe from "./NewRecipe.tsx";

import { Button, Box, FormControlLabel, Modal, Switch } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const RecipeList2 = () => {

    // New Recipe pop up
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    /*
    // Favorite and unfavorite button
    const changeFavorite = async () => {
        // get reference to current recipe
        const currentRecipeReference = await getRecipe(db, currentRecipe.name);

        if (!currentRecipe || !currentRecipeReference){
            return;
        }

        try {
            await toggleFavorite(currentRecipeReference, currentRecipe.isFavorite);
    
            // Update the local state so the UI can update immediately
            const updatedRecipes = recipes.map(recipe =>
                recipe.id === currentRecipe.id ? { ...recipe, isFavorite: !recipe.isFavorite } : recipe
            );
            setRecipes(updatedRecipes);
        } catch (err) {
            console.error("Failed to toggle favorite:", err);
        }
    };
    */

    return (
        <>
            <h1 className="text-center top-space">Chef's List</h1>

            <div style={{ margin: '1rem 8.5rem'}}>
                <FormControlLabel control={<Switch />} label="Favorites only" />
                <Button style={{ float: 'right', borderRadius: '20px', backgroundColor: 'darkblue'}} variant="contained" endIcon={<AddIcon />} onClick={handleOpen}>New Recipe</Button>
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
                        {<RecipeRow recipes={recipesData.recipes as Recipe[]} />}
                    </tbody>
                </table>
            </section>
        </>
    );
};

export default RecipeList2;


// FIREBASE VERSION

/*
ARRAY ACCESS

import { query, collection, orderBy, getDocs } from "firebase/firestore";

const q = query(collection(db, "recipes"), orderBy("createdAt"));
const snapshot = await getDocs(q);

// now you can use the results like an array
const docs = snapshot.docs;
console.log(docs[0].data()); // first document
console.log(docs[1].data()); // second document

*/