import { RecipeInfoProps } from "../types/recipe.ts";

const Page: React.FC<RecipeInfoProps> = ({ recipes }) => {

    return (
        <>
            <div className="page scroll">
                {recipes.map(recipe => (
                    <>
                        <h2>{recipe.name}</h2>
                        <img src={recipe.imageURL} style={{width: '100%', height: '50%'}}></img>
                        <p className="text-center">{recipe.description}</p>
                        <p><b>Cuisine:</b> {recipe.cuisine}</p>
                        <p><b>Time required:</b> {recipe.timeNeeded}</p>
                        <p><b>Skill level:</b> {recipe.skillLevel}</p>
                        <p><b>Ingredients:</b> </p>
                        <ul>
                            {recipe.ingredients.map(ingredient => <li>{ingredient.name} - {ingredient.quantity}</li>)}
                        </ul>
                    </>
                ))}
            </div>
            <div id="divider"></div>
            <div className="page scroll">
                {recipes.map(recipe => (
                    <>
                        <h2 className="text-center">Steps</h2>
                        <p>{recipe.steps}</p>
                    </>
                ))}
            </div>
        </>
    )
}

export default Page;
