import { DishOverlayProps } from "../types/recipe.ts";
import CloseIcon from '@mui/icons-material/Close';

const DishOverlay: React.FC<DishOverlayProps> = ({ recipe, handleClose }) => {
    
    return (
        <>
                <div style={{ display: 'flex', justifyContent: 'center', position: 'relative'}}>
                    <CloseIcon style={{ position: 'absolute', left: 0, margin: 0, fontSize: '40px', cursor: 'pointer'}} onClick={handleClose} />
                    <h2 className="text-center">New Dish</h2>
                </div>
                <h2 className="text-center">{recipe.name}</h2>
                <img src={recipe.imageURL} style={{width: '100%', height: '50%'}}></img>
                <p className="text-center">{recipe.description}</p>
                <p><b>Cuisine:</b> {recipe.cuisine}</p>
                <p><b>Time required:</b> {recipe.timeNeeded}</p>
                <p><b>Skill level:</b> {recipe.skillLevel}</p>
                <p><b>Ingredients:</b> </p>
                <ul>
                    {recipe.ingredients.map(ingredient => <li>{ingredient.name} - {ingredient.quantity}</li>)}
                </ul>
                <h2 className="text-center">Steps</h2>
                <p>{recipe.steps}</p>
        </>
    )
};

export default DishOverlay;