import { RecipeInfoProps } from "../types/recipe.ts";

import { useState } from 'react';
import { Box, Modal } from '@mui/material';
import recipesData from "../recipes.json";
import DishOverlayInfo from "../components/DishOverlayInfo.tsx";
import { Recipe } from "../types/recipe.ts";

// import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import CloseIcon from '@mui/icons-material/Close';

const RecipeRow: React.FC<RecipeInfoProps> = ({ recipes }) => {

    // Dish overlay pop up
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // Add to favorites
    const [favorite, setFavorite] = useState(false);
    // const handleFavorite = () => setFavorite(!favorite);
    const handleFavorite = () => {
        setFavorite(!favorite);
        // change with spread operator?
    };

    return (
        <>
            {recipes.map(recipe => (
                <tr onClick={handleOpen} style={{ cursor: 'pointer'}}>
                    <td><CloseIcon /></td>
                    <td>{recipe.name}</td>
                    <td className="text-center">{recipe.cuisine}</td>
                    <td className="text-center">{recipe.timeNeeded}</td>
                    <td className="text-center">{recipe.skillLevel}</td>
                    <td>{recipe.description}</td>
                    <td><BookmarkBorderIcon onClick={handleFavorite} /></td>
                </tr>
            ))}

            <Modal open={open} onClose={handleClose}>
                <Box>
                    <div className="top-space overlay scroll" style={{ height: '48rem'}}>
                        {<DishOverlayInfo recipes={recipesData.recipes as Recipe[]} handleClose={handleClose} />}
                    </div>
                </Box>
            </Modal>
        </>
    )
}

export default RecipeRow;