import React, { useEffect, useState } from 'react';

const Recipe = () => {
    const [recipes, setRecipes] = useState([])
    useEffect(() => {
        fetch('recipes.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
            .catch(err => console.log(err))
    }, [])
    return (
        <div className='lg:my-12'>
            <div className='text-center space-y-4'>
                <h2 className='text-3xl font-medium'>Our Recipes</h2>
                <p> Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque</p>
            </div>
            <div className='grid grid-cols-6 gap-x-12'>
                <div className='grid col-span-4 grid-cols-2 gap-6'>
                    {
                        recipes.map(recipe => 
                            <div className="card w-96 bg-base-100 shadow-xl space-y-2" key={recipe.recipe_id}>
                                <figure>
                                    <img src={recipe.recipe_image_url} alt="Shoes" className="rounded-xl w-full" />
                                </figure>
                                <div className="card-body p-0">
                                    <h2 className="card-title"> {recipe.recipe_name} </h2>
                                    <p className='text-zinc-500 font-medium'> {recipe.short_description} </p>
                                    <hr />
                                    <p className='font-medium'>Ingredients : {recipe.ingredients.length} {
                                        recipe.ingredients.map(item => <li className='text-xs text-zinc-600' key={recipe.ingredients.indexOf(item)}> {item} </li> )
                                        } </p>
                                    <div className="card-actions">
                                        <button className="btn btn-success text-white"> Want To Cook </button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className='grid col-span-2'>
                    {/* cart  */}
                    <h2>Cart Seummery</h2>
                </div>
            </div>
        </div>
    );
};

export default Recipe;