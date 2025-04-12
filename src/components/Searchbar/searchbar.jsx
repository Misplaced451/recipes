import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import '../../recipes_style.css';
import '../../bulma.css';
import RecipeData from '../../recipe-data';

// get recipe names that contain query
const getFilteredItems = (query, recipes) => {
    if (!query) {
        // if blank, return nothing
        return [];
    }
    // if query contains a recipe name, return all recipes that contain that name
    return recipes.filter(recipe => recipe.name.toLowerCase().includes(query.toLowerCase()));
};

const Searchbar = () => {
    // useState hook to get query
    const [query, setQuery] = useState("");
    // get an array of recipes from RecipeData
    const {recipes} = RecipeData;

    // get filtered recipes based on query
    const filteredItems = getFilteredItems(query, recipes);

    return(
        <div className="section has-text-centered tabcontent">
            <div className="has-text-centered section pt-0">
                <h1 className="has-text-weight-bold is-size-3">Search</h1>
                <p className="subtitle">Note: Results are listed in alphabetical order</p>
            </div>
            
            <input className="is-large" type="text" onChange={event => setQuery(event.target.value)} />
            <div className="columns is-centered mt-4">
                <div className="column is-4">
                    {filteredItems.map(value => <div className='box button my-2'><Link to={value.path} className="has-text-dark is-size-4">{value.name}</Link></div>)}
                </div>
            </div>
        </div>
    );
}

export default Searchbar;
