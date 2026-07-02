import '../../recipes_style.css';
import '../../bulma.css';
import RecipeLayout from './recipelayout';

const DeviledEggs = () => {
    return (
        <RecipeLayout 
        name={'Deviled Eggs'}
        description={'Recipe adapted from AllRecipes.'}
        instructions={
        <div className="content">
        <ol>
            <li>Bring a pot of water to a boil</li>
            <li>Carefully lower in 6 eggs and let them boil for 10-12 mins</li>
            <li>Remove eggs and let cool in ice water</li>
            <li>Peel eggs and cut lengthwise</li>
            <li>Remove yolks and mash them in a bowl</li>
            <li>Add mayo, mustard, salt, pepper, and hot sauce to the yolks and stir until smooth.</li>
            <li>Adjust seasoning as necessary and pipe yolk mixture back into egg whites</li>
            <li>Garnish each egg with cayenne and a sprig of parsley.</li>
        </ol>
        </div>
        }
        ingredients={
        <div className="content">
        <ul>
            <li>6 large eggs</li>
            <li>0.25 cups mayo</li>
            <li>2 tsp yellow mustard</li>
            <li>Salt</li>
            <li>Pepper</li>
            <li>Cayenne</li>
            <li>Parsley</li>
            <li>Smoked Paprika</li>
            <li>Hot sauce (optional)</li>
        </ul>
        </div>
        }
        story={
        <div className="story">
            <p>
            I remember when I was alone in my apartment one time for Thanksgiving break. Normally, spending Thanksgiving alone is sad, but for me, I got the chance to make a six course feast 
            all to myself. Deviled eggs, pasta aglio e olio, turkey and mashed potato sandwiches, fruit salad, tomato soup, and lemon meringue pie. The whole thing took me 24 hours and I 
            ate it all by myself in 3 days. The appetizers for this feast, deviled eggs, were something I'd never tried before. I got this recipe from AllRecipes and tried it out. In short, 
            I ended up wolfing down half a dozen eggs in one sitting because these little bites of pure richness were too good to put down.
            </p>
            <p>
            Start by putting 6 eggs in a pot of boiling water. Boil the eggs for 12 minutes, then remove the eggs and put them in a bowl of ice water to prevent them from overcooking and to 
            make peeling easier. Peel the eggs and cut lengthwise. If you were to stop the recipe here, that's how you make a perfect hard boiled egg. But in order to devil these eggs, the next 
            step is to remove the yolks and mash them in a bowl with a fork. Add mayo, mustard, salt, pepper, paprika, and a dash or two of hot sauce. Stir until smooth and creamy. Taste for 
            seasoning and adjust as necessary. Pipe the yolk mixture back into the egg whites. I like putting the mixture in a plastic bag, then cutting off a corner and using that as a makeshift 
            piping bag. Garnish each egg with a sprinkle of cayenne pepper and a leaf of parsley. This appetizer is the perfect hors d'oeuvre for any fancy party or feast of your choosing. 
            I'd have to say the hardest part of this recipe is resisting the urge to eat them all before someone else gets a chance to try.
            </p>
        </div>
        }
        />
    );
}

export default DeviledEggs;
