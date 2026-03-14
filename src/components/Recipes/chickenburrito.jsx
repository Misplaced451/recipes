import '../../recipes_style.css';
import '../../bulma.css';

const ChickenBurrito = () => {
    return (
        <div className="pt-6 section recipe">
            {/* Intro */}
            <div className="has-text-centered section pt-0">
                <h1 className="has-text-weight-bold is-size-3">Chicken Burritos</h1>
                <p className="subtitle">One of my favorite meals for bulking</p>
            </div>
            
            <div className="columns mb-6 has-background-light">
                {/* Instructions */}
                <div className="column">
                <h4 className="subtitle has-text-centered-mobile">Instructions</h4>
                <div className="content">
                <ol>
                    <li>Slice chicken breast thinly against the grain</li>
                    <li>Season to taste with salt, pepper, smoked paprika, onion powder, garlic powder, cumin, cayenne, and oregano</li>
                    <li>Rub the seasoning into each piece so they're evenly coated</li>
                    <li>Get a tsp of oil hot over medium-high heat in a nonstick pan</li>
                    <li>Pan-fry the chicken until cooked thoroughly and set aside</li>
                    <li>Turn the heat to medium-low and use the tortillas to mop up any residual flavored oil</li>
                    <li>Place one of the tortillas in the pan to get it warm on one side, then flip over and add 0.25 cups cheese</li>
                    <li>Cover with a lid and let the cheese melt through steaming</li>
                    <li>Meanwhile, mix the yogurt with a squeeze of lime and a pinch of salt in a bowl. If the mixture is too thick, add water until slightly runny</li>
                    <li>Uncover the pan and place the tortilla on a plate, then add 1/4 of the chicken, a couple dashes of hot sauce and spoonfuls of yogurt sauce, and wrap it up</li>
                    <li>Repeat the process for the other 3 tortillas to make 4 burritos total</li>
                    <li>Cook the burritos over medium-high heat, seam-side-down to seal them, then flip over and brown slightly on the other side</li>
                </ol>
                </div>
                </div>
                
                {/* Ingredients */}
                <div className="column is-4-desktop has-background-grey-lighter">
                <h4 className="subtitle has-text-centered-mobile">Ingredients</h4>
                <div className="content">
                <ul>
                    <li>8 oz chicken breast</li>
                    <li>4 large tortillas</li>
                    <li>1 cup low-moisture, part-skim shredded mozzarella</li>
                    <li>1 tsp vegetable oil</li>
                    <li>Smoked paprika</li>
                    <li>Onion powder</li>
                    <li>Garlic powder</li>
                    <li>Ground cumin</li>
                    <li>Cayenne powder</li>
                    <li>Mexican oregano</li>
                    <li>Salt</li>
                    <li>Pepper</li>
                    <li>0.25 cups nonfat Greek yogurt</li>
                    <li>Lime</li>
                    <li>Hot sauce</li>
                </ul>
                </div>
                </div>
            </div>

            <div className='container mb-6 has-text-centered'>
                <button className="button is-info" onClick={() => window.print()}>
                    Download/Print Recipe
                </button>
            </div>
            
            {/* About the recipe */}
            <h4 className="subtitle has-text-centered is-4">Story Time</h4>
            <p className="story">
            Whenever I'm bulking, I need to find ways to eat a ton of protein in a delicious way. These burritos are the perfect solution for that. Normally, a cheesy chicken 
            burrito would probably not be seen as very healthy, but the common approach of eating boiled chicken breast and plain salads in order to be healthy just isn't sustainable. 
            One of the best ways I've found to stick to my diet and hit my macros is to use a system of "smart swaps". We live in a time where we can process foods to be higher in 
            protein, lower in fat or sugar, etc. with marginal impacts on taste and texture. Although many people shy away from processed foods, there isn't much evidence to show 
            that they're bad for you if you consume them in moderation. Oftentimes, hyper-processed foods are designed to be higher in salt, sugar, and fat and lower in water, fiber, 
            and protein in order to get you to eat more. Who in their right mind stops eating chips after just one recommended serving? It's the absurd quantity of these foods without 
            much nutrient density that lead to most of the problems you hear people talk about online. This is why smart swapping can be very healthy. Rather than drink a soda, drink 
            a diet soda. Sure, it's probably not great for your teeth or digestion when consumed regularly, so you shouldn't replace water with it, but it can be extremely effective 
            in curbing cravings without spiking your blood sugar or increasing your caloric intake. You can apply this approach to many aspects in cooking to create healthy recipes 
            while still getting to eat your favorite foods. Will they taste exactly the same? Of course not, they're likely going to be much lower in fat and sugar. But they're close 
            enough to curb the cravings and keep you on track, and that's what counts.
            </p>
            <p className="story">
            To start, take half a pound of chicken breast and slice thinly against the grain. The thin slices will give more surface area for the seasoning to hold on to, and cutting 
            against the grain (perpendicular to the direction of the muscle fibers in the meat) allows each bite to be much more tender, since your teeth won't have to cut apart the 
            muscle fibers, only separate them from one another. I like cutting them in this way since chicken breast needs all the flavor and tenderizing that we can give it, but if 
            you want to just quickly chop it into 1-inch cubes for the sake of time, that will work too. Season to taste with salt, pepper, and all the herbs and spices listed in the 
            ingredients above. None of them are optional. Smoked paprika will give it a little sweetness and smokiness. Not enough to be overpowering, but just enough to make it pop. 
            Out of all the spices, use the biggest amount of this one. Onion powder and garlic powder help add savory aromas and flavors, while cumin adds earthiness and warmth, and 
            the cayenne adds a smidge of heat. Mexican oregano adds a sweet and flowery aroma that's unmistakable. It tends to be pretty strong, so add it sparingly. If you don't have 
            access to Mexican oregano, regular oregano will be okay, but the difference in flavor and potency is well worth springing for the good stuff. Rub down the seasoning into 
            the chicken so every piece gets coated nicely.
            </p>
            <p className="story">
            In a skillet over medium-high heat, get one teaspoon of oil very hot. More oil will make it taste better, but I wanted to limit the amount of fat I added at this stage 
            based on my dietary needs. Fry up the chicken until all sides get cooked through. If you cut your chicken into bigger chunks, you may need to wait a bit longer for the 
            pieces to fully cook through. Set the chicken aside on a heat-safe cutting board. Turn the heat to medium-low and use the tortillas to mop up any residual flavored oil
            in the pan. This will help the tortillas pick up some of the flavor from the spices and chicken juices left behind. Place one of the tortillas in the pan to get it warm 
            on one side, then flip over and add 1/4 cup of cheese. I like using carb-balance tortillas for the high fiber. Cover with a lid and let the cheese melt through steaming.
            </p>
            <p className="story">
            This will take a couple minutes, which will give you plenty of time to make the yogurt sauce. The only problem with this recipe is that the chicken and tortillas can get 
            quite dry, so the sauce is essential for adding some moisture as well as acidity, creaminess, and freshness. I modeled this sauce after a Mexican crema, but with a few 
            swaps to make it simpler and higher in protein. Mix some nonfat Greek yogurt with a squeeze of lime and a pinch of salt in a bowl. I usually use about a quarter of a lime 
            for this. If the mixture is too thick, add a little water. It should be thick enough to be creamy, but runny enough to drizzle easily. By now, the cheese should be melted, 
            and you don't want to leave it too long, or else the tortilla will become too crispy and brittle. Uncover the pan and place the tortilla on a plate, then add 1/4 of the 
            chicken, a couple dashes of hot sauce (I like using Cholula or Frank's Red Hot, depending on what I have in the fridge), and a couple spoonfuls of the yogurt sauce. Wrap 
            the burrito. I've tried explaining how, but it's very difficult to understand over text, so just look up a 1 minute YouTube tutorial if you don't know how. 
            </p>
            <p className="story">
            For the final step, it's important to seal the burritos so they stay together. The easiest way is to get your pan up to medium-high and set the burritos seam-side-down on the 
            hot surface. Once they become golden-brown, the tortilla should be sealed. I like to flip the burritos over and get them a little golden on the top side as well, just to get 
            some color and ensure the center of the burrito receives warmth from both sides. This will keep the cheese melty, the chicken warm, the tortilla slightly crispy, and make sure 
            the sauce isn't cold. I typically eat these burritos on their own, but you can use ketchup, hot sauce, or leftover yogurt sauce as a dip if you want.
            </p>
        </div>    
    );
}

export default ChickenBurrito;
