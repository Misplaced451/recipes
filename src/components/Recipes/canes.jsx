import '../../recipes_style.css';
import '../../bulma.css';
import Recipelayout from './recipelayout';

const Canes = () => {
    return (
        <RecipeLayout 
        name={'Cane\'s Sauce'}
        description={'The sauce from Raising Cane\'s. I don\'t think it\'s the exact recipe, but this circulated on the internet a little while ago.'}
        instructions={
            <div className="content">
            <ol>
                <li>Mix ingredients and adjust to taste.</li>
                <li>Let rest refrigerated and covered for 24 hours for best results (optional).</li>
            </ol>
            </div>
        }
        ingredients={
            <div className="content">
            <ul>
                <li>0.5 cups mayo</li>
                <li>0.25 cup ketchup</li>
                <li>0.5 tsp garlic powder</li>
                <li>0.25 tsp worcestershire sauce</li>
                <li>0.5 tsp black pepper</li>
            </ul>
            </div>
            }
        story={
            <div className="story">
            <p>
            Despite how much I love to cook, I sometimes give in to the easy way of making dinner by throwing a tray of chicken nuggets in the oven. But even a simple comfort meal can be 
            enhanced greatly through something like making your own version of Raising Cane's signature sauce right at home. I found this recipe online, and while it isn't an exact match, 
            it's still just as tangy, creamy, and every bit as rich as the real thing.
            </p>
            <p>
            Mix half a cup of mayo, a quarter cup of ketchup, half a teaspoon of garlic powder, half a teaspoon of black pepper, and a quarter teaspoon of Worcestershire sauce in a bowl. 
            I like going a little heavy on the garlic and adding a pinch of cayenne. That's the advantage of making it at home: you get to customize it to your liking. If you want to add 
            a splash of pickle juice, some hot sauce, mustard, barbecue sauce or anything else you want to experiment with, go for it! Make it your own. For best results, let it sit covered 
            in the fridge for up to 24 hours to let the flavors meld together. I can never wait that long, so I usually make it an hour before dinner and that works just fine.
            </p>
            <p>
            If you want a healthier version, you can swap out the mayo for a 0.25 cups nonfat Greek yogurt and 0.25 cups light mayo. Replace the ketchup with a sugar-free version and only 
            add 3 tbsp instead of a quarter cup to account for the added acidity from the yogurt. The end result is about 1/3 of the total calories, 1/4 the total fat, and nearly 4x the 
            protein of the original recipe. Does it taste exactly the same? No, of course not! We swapped half the ingredients, of course it's going to be discernibly different. But it does 
            taste really similar. It's still really good and it satisfies that same craving so well that I only make it this way now.
            </p>
            </div>
        }
        />
    );
}

export default Canes;
