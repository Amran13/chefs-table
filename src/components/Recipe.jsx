import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';



const Recipe = () => {
    const [recipes, setRecipes] = useState([])
    const [cookItem, setCookItem] = useState([])
    const [cookingItem, setCookingItem] = useState([])

    useEffect(() => {
        fetch('recipes.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
            .catch(err => console.log(err))
    }, [])
    const handleCook = (id) => {
        const selected = recipes.find(recipe => recipe.recipe_id === id)
        if ((cookItem.find(item => item.recipe_id === id)) || (cookingItem.find(item => item.recipe_id === id))) {
            toast.error('Item already added')
        }
        else {
            setCookItem([...cookItem, selected])
        }
    }
    const handleCooking = (id) => {
        const selected = cookItem.find(item => item.recipe_id === id)
        setCookingItem([...cookingItem, selected])
        const remaining = cookItem.filter(item => item.recipe_id !== id)
        setCookItem(remaining)

    }
    // console.log('cook item :', cookItem)
    // console.log('cooking :', cookingItem)
    // console.log(isCookItemAvailable)
    return (
        <div className='lg:my-12'>
            <div className='text-center space-y-4'>
                <h2 className='text-3xl font-medium'>Our Recipes</h2>
                <p> Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque</p>
            </div>
            <div className='grid grid-cols-12 gap-x-6'>
                <div className='grid col-span-7 grid-cols-2 gap-3'>
                    {
                        recipes.map(recipe =>
                            <div className="card w-[330px] bg-base-100 shadow-xl space-y-2" key={recipe.recipe_id}>
                                <figure>
                                    <img src={recipe.recipe_image_url} alt="Shoes" className="rounded-xl w-full" />
                                </figure>
                                <div className="card-body p-0">
                                    <h2 className="card-title"> {recipe.recipe_name} </h2>
                                    <p className='text-zinc-500 font-medium'> {recipe.short_description} </p>
                                    <hr />
                                    <p className='font-medium'>Ingredients : {recipe.ingredients.length} {
                                        recipe.ingredients.map(item => <li className='text-xs text-zinc-600' key={recipe.ingredients.indexOf(item)}> {item} </li>)
                                    } </p>
                                    <div className="card-actions">
                                        <button onClick={() => handleCook(recipe.recipe_id)} className="btn btn-success text-white"> Want To Cook </button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className='grid col-span-5'>
                    <div className="overflow-x-auto space-y-4">
                        <Toaster />
                        <h2 className='text-center'>Want to cook : {cookItem.length} </h2>
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Time</th>
                                    <th>Calories</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cookItem.map(cook => <tr className='bg-base-100' key={cook.recipe_id}>
                                        <th> {cookItem.indexOf(cook) + 1} </th>
                                        <td> {cook.recipe_name} </td>
                                        <td> {cook.preparing_time} </td>
                                        <td>{cook.calories}</td>
                                        <td> <button onClick={() => handleCooking(cook.recipe_id)} className='btn btn-success'>Preparing</button> </td>
                                    </tr>)
                                }
                            </tbody>
                        </table>

                        <h2 className='text-center'>Currently Cooking : {cookingItem.length} </h2>
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Time</th>
                                    <th>Calories</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cookingItem.map(cooking => <tr key={cooking.recipe_id}>
                                        <th> {cookingItem.indexOf(cooking) + 1} </th>
                                        <td> {cooking.recipe_name} </td>
                                        <td> {cooking.preparing_time} </td>
                                        <td>{cooking.calories}</td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                        <h2>Total Calory : </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipe;