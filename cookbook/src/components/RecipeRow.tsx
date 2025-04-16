import { useEffect, useState } from 'react';

import { getFirestore } from "firebase/firestore";
import { getRecipe, changeFavorite } from "../handleRecipes.ts";
import { removeRecipe } from "../handleRecipes.ts";

import { RecipeInfoProps } from "../types/recipe.ts";

import DishOverlayInfo from "../components/DishOverlayInfo.tsx";
import { Recipe } from "../types/recipe.ts";

import { Box, Modal } from '@mui/material';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import CloseIcon from '@mui/icons-material/Close';

const RecipeRow: React.FC<RecipeInfoProps> = ({ recipes }) => {
    const db = getFirestore();

    // local copy of recipe list
    const [localRecipes, setLocalRecipes] = useState<Recipe[]>(recipes); 
    // recipe that's clicked on to pass to Dish Overlay component
    const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

    // upon mount or db change
    useEffect(() => {
        setLocalRecipes(recipes);
    }, [recipes]);

    // Dish overlay pop up
    const [open, setOpen] = useState(false);
    const handleOpen = (recipe: Recipe) => {
        setOpen(true);
        setSelectedRecipe(recipe);
    };
    const handleClose = () => setOpen(false);

    const handleRemove = async (recipe: Recipe) => {
        const selectedRecipe = recipe; // different than the state variable 
        try {
            const currentRecipeReference = await getRecipe(db, selectedRecipe.name);
            if (currentRecipeReference) {
                removeRecipe(currentRecipeReference);
            }
        } catch (err) {
            console.error("Failed to remove recipe:", err);
        }
    };

    // Favorite and unfavorite button
    const toggleFavorite = async (recipe: Recipe) => {
        const selectedRecipe = recipe; // different than the state variable 

        try {
            const currentRecipeReference = await getRecipe(db, selectedRecipe.name);
            if (!currentRecipeReference){
                console.warn("Recipe reference not found.");
                return;
            }

            await changeFavorite(currentRecipeReference, selectedRecipe.isFavorite);
    
            // Update the local state so the UI can update immediately
            const updatedRecipes = localRecipes.map(recipe =>
                recipe.id === selectedRecipe.id ? { ...recipe, isFavorite: !recipe.isFavorite } : recipe
            );
            setLocalRecipes(updatedRecipes);
            console.log("FAVORITE UPDATED")
        } catch (err) {
            console.error("Failed to toggle favorite:", err);
        }
    };

    return (
        <>
            {localRecipes.map(recipe => (
                <tr key={recipe.id}>
                    <td ><CloseIcon onClick={() => handleRemove(recipe)} style={{ cursor: 'pointer' }} /></td>
                    <td onClick={() => handleOpen(recipe)} style={{ cursor: 'pointer' }}>{recipe.name}</td>
                    <td className="text-center">{recipe.cuisine}</td>
                    <td className="text-center">{recipe.timeNeeded}</td>
                    <td className="text-center">{recipe.skillLevel}</td>
                    <td>{recipe.description}</td>
                    <td onClick={() => toggleFavorite(recipe)} style={{ cursor: 'pointer' }}>
                        {recipe.isFavorite ? <BookmarkIcon style={{ cursor: 'pointer' }} /> : <BookmarkBorderIcon style={{ cursor: 'pointer'}} />}
                    </td>
                </tr>
            ))}

            <Modal open={open} onClose={handleClose}>
                <Box>
                    <div className="top-space overlay scroll" style={{ height: '48rem' }}>
                        {<DishOverlayInfo recipe={selectedRecipe as Recipe} handleClose={handleClose} />}
                    </div>
                </Box>
            </Modal>
        </>
    )
}

export default RecipeRow;

/**
    Toggle by clicking on icon, not td
    <td>
    {recipe.isFavorite ? (
        <BookmarkIcon
        onClick={(e) => {
            e.stopPropagation(); // Prevent row click
            toggleFavorite(recipe.id, recipe.isFavorite);
        }}
        style={{ cursor: 'pointer' }}
        />
    ) : (
        <BookmarkBorderIcon
        onClick={(e) => {
            e.stopPropagation(); // Prevent row click
            toggleFavorite(recipe.id, recipe.isFavorite);
        }}
        style={{ cursor: 'pointer' }}
        />
    )}
    </td>
*/