import { useState } from 'react';

import { Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { NewRecipeOverlayProps } from "../types/recipe.ts";

const NewRecipe: React.FC<NewRecipeOverlayProps> = ({ handleClose }) => {

    const [formData, setFormData] = useState({
        dishName: "",
        imageURL: "",
        skillLevel: "", 
        timeNeeded: "",
        cuisine: "",
        description: "",
        steps: ""
    });

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target; // each needs a name and value
        setFormData(data => ({ ...data, [name]: value }));
    }
    
    // do ingredients
    // handle submit

    return (
        <div className="top-space overlay scroll" style={{ height: '48rem'}}>
            <div style={{ display: 'flex', justifyContent: 'center', position: 'relative'}}>
                <CloseIcon style={{ position: 'absolute', left: 0, margin: 0, fontSize: '40px', cursor: 'pointer'}} onClick={handleClose} />
                <h2 className="text-center">New Dish</h2>
            </div>
           
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                <TextField
                    name="dishName"
                    value={formData.dishName}
                    onChange={handleFormChange}
                    required
                    label="Dish name"
                    variant="filled"
                />
                <TextField
                    name="imageURL"
                    value={formData.imageURL}
                    onChange={handleFormChange}
                    required
                    label="Image URL"
                    variant="filled"
                />

                {/* remove demo tag? */}
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">Skill level</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label" 
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="beginner" control={<Radio />} label="Beginner" />
                        <FormControlLabel value="medium" control={<Radio />} label="Medium" />
                        <FormControlLabel value="advanced" control={<Radio />} label="Advanced" />
                    </RadioGroup>
                </FormControl>

                <TextField
                    name="timeNeeded"
                    value={formData.timeNeeded}
                    onChange={handleFormChange}
                    label="Time needed"
                    type="number"
                    variant="filled"
                    slotProps={{
                        inputLabel: {
                        shrink: true,
                        },
                    }}
                />

                <FormControl>
                    <FormLabel>Cuisine</FormLabel>
                    <RadioGroup>
                        <FormControlLabel value="italian" control={<Radio />} label="Italian" />
                        <FormControlLabel value="indian" control={<Radio />} label="Indian" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </FormControl>

                <h3>Ingredients</h3>
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: 5 }}>
                    <Button variant="contained">+</Button>
                    <TextField
                        label="Quantity"
                        type="number"
                        variant="filled"
                        slotProps={{
                            inputLabel: {
                            shrink: true,
                            },
                        }}
                    />
                    <TextField
                        required
                        label="Name"
                        variant="filled"
                    />
                </Box>

                <TextField
                    name="description"
                    value={formData.description}
                    onChange={handleFormChange}
                    label="Dish description"
                    variant="filled"
                    multiline
                    rows={4}
                />
                <TextField
                    name="steps"
                    value={formData.steps}
                    onChange={handleFormChange}    
                    label="Steps"
                    variant="filled"
                    multiline
                    rows={4}
                />

                <form>
                    <Button>SUBMIT</Button>
                </form>

                <form>
                    <label>
                    <input type="submit" />
                    </label>
                </form>
            </Box>

            {/*
            <h6>Dish Name</h6>
            <input type="text" id="dishName" />
            <label htmlFor="dishName">Dish Name</label>
            <br />

            <h6>Image URL</h6>
            <input type="image" id="dishIMG" />
            <label htmlFor="dishIMG">Image URL</label>
            <input type="url" id="dishIMG" />
            <label htmlFor="dishIMG">Image URL</label>
            <br />

            <h6>Skill level</h6>
            <input type="radio" id="b" />
            <label htmlFor="skill">Beginner</label>
            <input type="radio" id="m" />
            <label htmlFor="m">Medium</label>
            <input type="radio" id="a" />
            <label htmlFor="a">Advanced</label>
            <br />

            <h6>Time needed</h6>
            <input type="number" id="time" />
            <label htmlFor="time">Time needed</label>
            <br />

            <h6>Cuisine</h6>
            <input type="radio" id="b" />
            <label htmlFor="skill">Italian</label>
            <input type="radio" id="m" />
            <label htmlFor="m">Indian</label>
            <input type="radio" id="a" />
            <label htmlFor="a">Continental</label>
            <br />

            <h6>Ingredients</h6>
            <input type="button" id="addIngredient" />
            <input type="number" id="quantityIngredient" />
            <label htmlFor="quantityIngredient">Quantity</label>
            <input type="text" id="nameIngredient" />
            <label htmlFor="nameIngredient">Name</label>
            <br />

            <h6>Dish description</h6>
            <input type="text" id="dishDescription" />
            <label htmlFor="dishDescription">Dish description</label>
            <br />

            <h6>Steps</h6>
            <input type="text" id="dishSteps" />
            <label htmlFor="dishSteps">Steps</label>
            <br />

            <h6>Submit button</h6>
            <input type="submit" id="submit" />
            <label htmlFor="submit">Submit</label>
            <br />
            */}
        </div>
    )
};

export default NewRecipe;

// put in component folder?