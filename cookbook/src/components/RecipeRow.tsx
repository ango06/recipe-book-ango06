import { RecipeInfoProps } from "../types/recipe.ts";

import { useState } from 'react';
import { Box, Modal } from '@mui/material';
import recipesData from "../recipes.json";
import DishOverlayInfo from "../components/DishOverlayInfo.tsx";
import { Recipe } from "../types/recipe.ts";

const RecipeRow: React.FC<RecipeInfoProps> = ({ recipes }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            {recipes.map(recipe => (
                <tr onClick={handleOpen} style={{ cursor: 'pointer'}}>
                    <td>{recipe.name}</td>
                    <td className="text-center">{recipe.cuisine}</td>
                    <td className="text-center">{recipe.timeNeeded}</td>
                    <td className="text-center">{recipe.skillLevel}</td>
                    <td>{recipe.description}</td>
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