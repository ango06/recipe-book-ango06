import { useState } from 'react';

import recipesData from "../recipes.json";
import { Recipe } from "../types/recipe.ts";
import Page from "../components/Page.tsx";
import NewRecipe from "./NewRecipe.tsx";

import {Box, Button, FormControlLabel, Modal, Switch } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const RecipeBook = () => {

    const recipes = recipesData.recipes;

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    /*
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/new-recipe");
    };
    */
    
    return (
        <>
            <h1 className="text-center top-space">Cookbook</h1>

            {/* do I need justify content or keep float right */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignSelf: 'center', justifySelf: 'center', width: '70%', margin: '20px 10px'}}>
                <FormControlLabel control={<Switch />} label="Favorites only" /> {/* ADD onChange to Switch */}
                <Button style={{ float: 'right', borderRadius: '20px', backgroundColor: 'darkblue'}} variant="contained" endIcon={<AddIcon />} onClick={handleOpen}>New Recipe</Button>
            </div>

            <Modal open={open} onClose={handleClose}>
                <Box>
                    <NewRecipe handleClose={handleClose} />
                </Box>
            </Modal>

            <div id="book" className="flexbox">
                    {<Page recipes={recipes as Recipe[]} />}
            </div>
        
            <div className="page-button">
                <button>L</button>
                <button>R</button>
            </div>
        </>
    );
};

export default RecipeBook;

/* 
            <div id="book" className="flexbox">
                <div id="page">
                    <h2>Dish Name</h2>
                    <img src={empty} style={{width: '100%', height: '50%'}}></img>
                    <p className="text-center">Description</p>
                    <p>Cuisine: </p>
                    <p>Time required: </p>
                    <p>Skill level: </p>
                    <p>Ingredients:</p>
                    <ul>
                        <ol>First </ol>
                    </ul>
                </div>
                <div id="divider" />
                <div id="page">
                    <h2 className="text-center">Steps</h2>
                    <p>Steps, steps, steps, Steps, steps, steps, Steps, steps, steps, Steps, steps, steps, pSteps, steps, steps</p>
                </div>
            </div>
*/