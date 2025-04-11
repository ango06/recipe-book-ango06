/*
import recipesData from "../recipes.json";
import Dish from "../components/Dish.tsx";
import { Recipe } from "../types/recipe.ts";

const DishOverlay = () => {

    return (
        <div className="top-space overlay">
            {<Dish recipes={recipesData.recipes as Recipe[]} />}
        </div>
    )
};

export default DishOverlay;
*/

/*
import * as React from 'react';
import { Box, Button, Modal } from '@mui/material';

import recipesData from "../recipes.json";
import Dish from "../components/DishOverlayInfo.tsx";
import { Recipe } from "../types/recipe.ts";


const DishOverlay = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
        <Button onClick={handleOpen} style={{ alignSelf: 'center', justifySelf: 'center', marginTop: '100px'}}>CLICK RECIPE</Button>
        <Modal open={open} onClose={handleClose}>
            <Box>
                <div className="top-space overlay scroll" style={{ height: '48rem'}}>
                    {<Dish recipes={recipesData.recipes as Recipe[]} handleClose={handleClose} />}
                </div>
            </Box>
        </Modal>
        </div>
    );
}

export default DishOverlay;
*/