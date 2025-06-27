// import Link to change path when recipe is clicked
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

// import CSS
import '../../recipes_style.css';
import '../../bulma.css';

// import recipes of this category to export to App.js in one line
import Pancakes from './pancakes';
import FrenchToast from './frenchtoast';
import TomatoSauce from './tomatosauce';
import Gumbo from './gumbo';
import Rajma from './rajma';
import NoodleSoup from './noodlesoup';
import Canes from './canes';
import Chutney from './chutney';
import Cranberry from './cranberry';
import Chana from './chana';
import TomatoMelt from './tomatomelt';
import EggSandwich from './eggsandwich';
import SPORice from './sporice';
import Gnocchi from './gnocchi';
import TurkeyRice from './turkeyrice';
import LemonMeringue from './lemonmeringue';
import AppleFilling from './applefilling';
import GajarHalwa from './gajarhalwa';
import Zabaglione from './zabaglione';
import Suzette from './suzette';
import PotatoPie from './potatopie';
import Cursed from './cursed';
import ThanksgivingPie from './thanksgivingpie';
import PineapplePizza from './pineapplepizza';
import Meatballs from './meatballs';
import DeviledEggs from './deviledeggs';
import Pizza from './pizza';
import Coffee from './coffee';
import Ricotta from './ricotta';
import PopcornChicken from './popcornchicken';
import MugCake from './mugcake';

import RecipeData from '../../recipe-data';

const Recipes = () => {
    const handlePizza = () => {
        window.open("https://www.dominos.com", "_blank");
    };

    const getFilteredItems = (query, recipes) => {
        if (!query) {
            // if blank, return all recipes
            return recipes;
        }

        // if query contains a recipe name, return all recipes that contain that name
        return recipes.filter(recipe => recipe.tags.includes(query));
    };

    

    // useState hook to get query
    const [query, setQuery] = useState("");
    // get an array of recipes from RecipeData
    const {recipes} = RecipeData;

    // get filtered recipes based on query
    const filteredItems = getFilteredItems(query, recipes);

    return (
        <div className="section has-text-centered">
            <div className="has-text-centered section pt-0">
                <h1 className="has-text-weight-bold is-size-3">Recipes</h1>
                <p className="subtitle">Look through the full list or browse by collection</p>
            </div>
            <div className='container pb-5'>
            <div className='grid is-centered is-two-thirds'>
                <div className={`cell button py-2 ${query ? '' : 'is-active'}`} onClick={() => setQuery("")}>
                    <h3>All</h3>
                </div>
                <div 
                    className={`cell button py-2 ${query === 'favorite' ? 'is-active' : ''}`} 
                    onClick={() => setQuery("favorite")}
                >
                    <h3>Mihir's Favorites</h3>
                </div>
                <div 
                    className={`cell button py-2 ${query === 'original' ? 'is-active' : ''}`} 
                    onClick={() => setQuery("original")}
                >
                    <h3>Originals</h3>
                </div>
                <div 
                    className={`cell button py-2 ${query === 'indian' ? 'is-active' : ''}`}
                    onClick={() => setQuery("indian")}
                >
                    <h3>Indian</h3>
                </div>
                <div
                    className={`cell button py-2 ${query === 'italian' ? 'is-active' : ''}`}
                    onClick={() => setQuery("italian")}
                >
                    <h3>Italian</h3>
                </div>
                <div 
                    className={`cell button py-2 ${query === 'beginner' ? 'is-active' : ''}`} 
                    onClick={() => setQuery("beginner")}
                >
                    <h3>Beginner Friendly</h3>
                </div>
                <div
                    className={`cell button py-2 ${query === 'weeknight' ? 'is-active' : ''}`} 
                    onClick={() => setQuery("weeknight")}
                >
                    <h3>Weeknight Meals</h3>
                </div>
                <div
                    className={`cell button py-2 ${query === 'fancy' ? 'is-active' : ''}`}
                    onClick={() => setQuery("fancy")}
                >
                    <h3>Fancy Meals</h3>
                </div>
                <div
                    className={`cell button py-2 ${query === 'breakfast' ? 'is-active' : ''}`}
                    onClick={() => setQuery("breakfast")}
                >
                    <h3>Breakfast</h3>
                </div>
                <div
                    className={`cell button py-2 ${query === 'dessert' ? 'is-active' : ''}`}
                    onClick={() => setQuery("dessert")}
                >
                    <h3>Desserts</h3>
                </div>
                <div 
                    className={`cell button py-2 ${query === 'thanksgiving' ? 'is-active' : ''}`}
                    onClick={() => setQuery("thanksgiving")}
                >
                    <h3>Thanksgiving Meals</h3>
                </div>
                <div 
                    className={`cell button py-2 ${query === 'vegetarian' ? 'is-active' : ''}`}
                    onClick={() => setQuery("vegetarian")}
                >
                    <h3>Vegetarian</h3>
                </div>
                <div 
                    className={`cell button py-2 ${query === 'vegan' ? 'is-active' : ''}`}
                    onClick={() => setQuery("vegan")}
                >
                    <h3>Vegan</h3>
                </div>
            </div>
            </div>

            <div className="columns is-mobile is-centered fixed-grid has-4-cols-desktop has-1-cols-mobile">
            <div className="column mt-5 is-two-thirds grid">
                {filteredItems.map(value => 
                    <Link to={value.path} className="card cell recipelink mx-2 mb-4">
                        <div className="card-image">
                            <img src={"placeholder.jpg"} alt={`${value.path}.jpg`} />
                        </div>
                        <div className="card-content">
                            <p className="has-text-weight-bold">{value.name}</p>
                        </div>
                    </Link>
                )}

                <div className={`card cell recipelink mx-2 mb-4 ${query ? "is-hidden" : ""}`} onClick={handlePizza}>
                    <div className="card-image">
                        <img src={"placeholder.jpg"} alt="nobake.jpg" />
                    </div>
                    <div className="card-content">
                        <p className="has-text-weight-bold">No-Bake Pizza</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}

// export category and recipes
export default Recipes;
export { 
    Pancakes, FrenchToast, TomatoSauce, Gumbo, Rajma, NoodleSoup, Canes,
    Chutney, Cranberry, Chana, TomatoMelt, EggSandwich, SPORice, Gnocchi, 
    TurkeyRice, LemonMeringue, AppleFilling, GajarHalwa, 
    Zabaglione, Suzette, PotatoPie, Cursed, ThanksgivingPie, PineapplePizza, 
    Meatballs, DeviledEggs, Pizza, Coffee, Ricotta, PopcornChicken, MugCake
};
