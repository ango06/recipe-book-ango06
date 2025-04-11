import { useState } from 'react';

import recipesData from "../recipes.json";
import { Recipe } from "../types/recipe.ts";
import RecipeRow from "../components/RecipeRow.tsx";
import NewRecipe from "./NewRecipe.tsx";

import { Button, Box, FormControlLabel, Modal, Switch } from '@mui/material';
import { createSvgIcon, Table, TableContainer, TableBody, TableHead, TableRow, TableCell } from '@mui/material';

const RecipeList = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // const navigate = useNavigate();

    // const handleClick = () => {
    //     navigate("/new-recipe");
    // };

    {/* if I don't import from the icon thing */}
    const PlusIcon = createSvgIcon(
        // credit: plus icon from https://heroicons.com
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>,
        'Plus',
        );

    return (
        <>
            <h1 className="text-center top-space">Chef's List</h1>

            <div style={{ margin: '20px'}}>
                <FormControlLabel control={<Switch />} label="Favorites only" /> {/* ADD onChange to Switch */}
                <Button style={{ float: 'right', borderRadius: '20px', backgroundColor: 'darkblue'}} variant="contained" endIcon={<PlusIcon />} onClick={handleOpen}>New Recipe</Button>
            </div>

            <Modal open={open} onClose={handleClose}>
                <Box>
                    <NewRecipe handleClose={handleClose} />
                </Box>
            </Modal>

            <TableContainer>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Dish</TableCell>
                        <TableCell align="right">Cuisine</TableCell>
                        <TableCell align="right">Time</TableCell>
                        <TableCell align="right">Skill Level</TableCell>
                        <TableCell align="right">Description</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
     
                    </TableBody>
                </Table>
            </TableContainer>

            <hr></hr>

            <section>
                <table id="recipes">
                    <thead>
                        <tr>
                            <th>Dish</th>
                            <th>Cuisine</th>
                            <th>Time</th>
                            <th>Skill Level</th>
                            <th>Description</th>
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

export default RecipeList;