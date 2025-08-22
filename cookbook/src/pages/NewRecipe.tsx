import { useState } from 'react';

import { getFirestore } from "firebase/firestore";

import { addRecipe } from "../handleRecipes.ts";
import { Recipe } from "../types/recipe.ts";
import { Ingredient } from "../types/ingredient.ts";

import { NewRecipeOverlayProps } from "../types/recipe.ts";

// Material UI
import { Box, Button, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';

const initialState: Recipe = {
    id: "",
    name: "",
    isFavorite: false,
    imageURL: "",
    timeNeeded: "",
    ingredients: [],
    description: "",
    steps: "",
  };

const NewRecipe: React.FC<NewRecipeOverlayProps> = ({ handleClose }) => {
    const db = getFirestore();
    const [newRecipeData, setNewRecipeData] = useState<Recipe>(initialState);
    const [ingredient, setIngredient] = useState<Ingredient>({ quantity: "", name: "" });
    // const [ingredients, setIngredients] = useState<Ingredient[]>([]);

    // handle ingredients array
    const handleIngredientAdd = () => {
        const { name, quantity } = ingredient;

        if (!name.trim() || !quantity.trim()){
            return;
        }

        setNewRecipeData((prev) => ({
            ...prev,
            ingredients: [...prev.ingredients, { name, quantity }],
        }));

        // clear input fields
        setIngredient({ name: "", quantity: "" });
    };

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target; // each needs a name and value
        setNewRecipeData(data => ({ ...data, [name]: value }));
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
          await addRecipe(db, newRecipeData as Recipe);
          alert("Recipe added successfully!");
          handleClose?.();
          setNewRecipeData(initialState);
        } catch (error) {
          console.error("Error adding recipe:", error);
        }
      };


    return (
        <div className="top-space overlay scroll" style={{ height: '36rem'}}>
            <div style={{ display: 'flex', justifyContent: 'center', position: 'relative'}}>
                <CloseIcon style={{ position: 'absolute', left: 0, margin: 0, fontSize: '40px', cursor: 'pointer'}} onClick={handleClose} />
                <h2 className="text-center">New Dish</h2>
            </div>
           
            <form onSubmit={handleSubmit}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                <TextField name="name" value={newRecipeData.name}
                    onChange={handleFormChange}
                    label="Dish name" required variant="filled"
                />
                <TextField name="imageURL" value={newRecipeData.imageURL}
                    onChange={handleFormChange}
                    label="Image URL" required variant="filled"
                />
                <TextField name="timeNeeded" value={newRecipeData.timeNeeded}
                    onChange={handleFormChange}
                    label="Time needed" variant="filled"
                />

                <h3>Ingredients</h3>
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: 5 }}>
                    <Button onClick={handleIngredientAdd}><AddIcon/></Button>
                    <TextField
                        onChange={(e) => setIngredient((prev) => ({ ...prev, name: e.target.value }))}
                        label="name" required variant="filled"
                    />
                    <TextField
                        onChange={(e) => setIngredient((prev) => ({ ...prev, quantity: e.target.value }))}
                        label="quantity" variant="filled"
                    />
                </Box>

                <TextField
                    name="description"
                    value={newRecipeData.description}
                    onChange={handleFormChange}
                    label="Dish description"
                    variant="filled"
                    multiline
                    rows={4}
                />
                <TextField
                    name="steps"
                    value={newRecipeData.steps}
                    onChange={handleFormChange}    
                    label="Steps"
                    variant="filled"
                    multiline
                    rows={4}
                />

                <Button type="submit" style={{ backgroundColor: '#264653', color: 'white' }}>SUBMIT</Button>
            </Box>
            </form>
        </div>
    )
};

export default NewRecipe;

// put in component folder?