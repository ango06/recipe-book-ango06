
const NewRecipe = () => {


    return (
        <div className="top-space overlay">
            <h3>New Dish</h3>

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
        </div>
    )
};

export default NewRecipe;