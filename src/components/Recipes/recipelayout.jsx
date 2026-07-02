import React from "react";

function RecipeLayout({ name, description, instructions, ingredients, story }) {
  return (
    <div className="pt-6 section recipe">
    {/* Intro */}
    <div className="has-text-centered section pt-0">
        <h1 className="has-text-weight-bold is-size-3">{name}</h1>
        <p className="subtitle">{description}</p>
    </div>
    
    <div className="columns mb-6 has-background-light">
        {/* Instructions */}
        <div className="column">
        <h4 className="subtitle has-text-centered-mobile">Instructions</h4>
        {instructions}
        </div>
        
        {/* Ingredients */}
        <div className="column is-4-desktop has-background-grey-lighter">
        <h4 className="subtitle has-text-centered-mobile">Ingredients</h4>
        {ingredients}
        </div>
    </div>

    <div className='container mb-6 has-text-centered'>
        <button className="button is-info" onClick={() => window.print()}>
            Download/Print Recipe
        </button>
    </div>
    
    {/* About the recipe */}
    <h4 className="subtitle has-text-centered is-4">Story Time</h4>
    {story}
</div>   
  );
}

/*
import '../../recipes_style.css';
import '../../bulma.css';
import RecipeLayout from './recipelayout';

const NewRecipe = () => {
    return (
        <RecipeLayout 
        name={''}
        description={''}
        instructions={
        <div className="content">
        <ol>
            
        </ol>
        </div>
        }
        ingredients={
        <div className="content">
        <ul>
            
        </ul>
        </div>
        }
        story={
        <div className="story">
            
        </div>
        }
        />
    );
}

export default NewRecipe;
*/

export default RecipeLayout;