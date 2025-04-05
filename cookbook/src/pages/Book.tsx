const RecipeBook = () => {

    return (
        <>
            <h1 className="text-center top-space">Cookbook</h1>

            <input type="checkbox" id="myCheckbox" />
            <label htmlFor="myCheckbox">Favorites only</label>
            <button style={{float: 'right'}}>New Recipe</button>

            <br />

            <div className="flexbox">
                <div>
                    <h2>Dish Name</h2>
                </div>
                <div>
                    <h2>Steps</h2>
                </div>
            </div>

            <button>L</button>
            <button>R</button>
        </>
    );
};

export default RecipeBook;