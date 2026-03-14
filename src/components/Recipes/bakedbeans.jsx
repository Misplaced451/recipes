import '../../recipes_style.css';
import '../../bulma.css';

const BakedBeans = () => {
    return (
        <div className="pt-6 section recipe">
            {/* Intro */}
            <div className="has-text-centered section pt-0">
                <h1 className="has-text-weight-bold is-size-3">Baked Beans</h1>
                <p className="subtitle">The best baked beans you'll ever have</p>
            </div>
            
            <div className="columns mb-6 has-background-light">
                {/* Instructions */}
                <div className="column">
                <h4 className="subtitle has-text-centered-mobile">Instructions</h4>
                <div className="content">
                <ol>
                    <li>Soak beans for 12 hours, then pressure cook until tender.</li>
                    <li>Place chopped bacon in a cold, oven-safe pot over medium heat to render out the fat as the pot comes up to temperature.</li>
                    <li>Remove bacon once it's cooked and sweat diced onion and minced garlic in bacon fat until softened.</li>
                    <li>Add smoked paprika, chili powder, garlic powder, mustard powder, salt, pepper, brown sugar, tomato paste, ketchup, and hot sauce, then mix together.</li>
                    <li>Mix in beans and crumble in the cooked bacon, stirring to combine.</li>
                    <li>Bake covered at 375F for 45 mins and let cool for 10 mins before serving.</li>
                </ol>
                </div>
                </div>

                {/* Ingredients */}
                <div className="column is-4-desktop has-background-grey-lighter">
                <h4 className="subtitle has-text-centered-mobile">Ingredients</h4>
                <div className="content">
                <ul>
                    <li>8 oz dry scarlet runner beans (or kidney beans)</li>
                    <li>4 slices thick-cut bacon</li>
                    <li>2 cloves garlic</li>
                    <li>0.5 yellow onion</li>
                    <li>1 tbsp smoked paprika</li>
                    <li>1 tbsp brown sugar</li>
                    <li>0.5 tbsp mustard powder</li>
                    <li>1/4 cup ketchup</li>
                    <li>Hot sauce</li>
                    <li>Red chili powder</li>
                    <li>Garlic powder</li>
                    <li>Salt</li>
                    <li>Pepper</li>
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
            This recipe is unlike any you've ever had, and it all comes down to the beans. For this recipe, I use scarlet runner beans, which are similar to kidney beans, but have 
            a darker color, bigger size, richer flavor, and much creamier texture. Some people use canned beans for their baked beans, and they get no flavor. Some people soak their 
            own beans and they get good results. But these heirloom beans make such a massive difference, I highly recommend seeking them out. Most grocery stores don't carry them, 
            but you can find high-quality retailers online that deliver them. The only problem is, this can get rather expensive. I think they're worth the price, but if you want a 
            cheaper alternative, go for dry kidney beans instead.
            </p>
            <p className="story">
            To start, soak your beans in cold water for 10-12 hours, this will reduce the cooking time and make the beans swell in size. Drain the liquid, then cook in a pressure cooker 
            or instant pot until tender. Different cookers will recommend different times, so refer to your manual or online for the minimum time to cook kidney beans for your cooker. 
            You could also boil them with a lid on, but this will take much longer. Once the beans are cooked, drain again and set aside.
            </p>
            <p className="story">
            With the beans prepped, it's bacon time. Cut the bacon into small pieces, I like to do about 1/2 inch squares, then place in a cold pot over medium heat. The reason we start 
            the bacon on a cold surface is because fat melts at a lower temperature than meat cooks. By the time the pot heats up, some of the fat will have already rendered out, saving you 
            some time. Also, make sure that you are using an oven-safe pot like an enamel pot, dutch oven, or a high-walled, stainless-steel pan. This will make it easier to transfer to 
            the oven for baking. As the bacon cooks, dice the onion and mince the garlic. Once the bacon gets crispy and has given up most of its fat, remove it from the pan and set 
            aside, leaving the bacon grease behind in the pan. Add the onions and garlic to the pan and sweat until slightly softened, or the onions begin turning a bit translucent.
            </p>
            <p className="story">
            There are a lot of spices and flavorings that go into this recipe, so it's helpful to have them all out and nearby before you start. Smoked paprika will add a bit of gentle 
            sweetness and smokiness, brown sugar will add thickness and a complex, molasses-like sweetness, chili powder and freshly cracked black pepper will add some heat, mustard 
            powder will add some earthiness and complexity in aroma, and garlic powder will add another dimension to the flavors from the fresh garlic. Tomato paste and ketchup will both 
            add savory tomato flavor, thickness, sweetness, and umami, but the ketchup especially will add acidity to balance out the 3 or 4 sweet ingredients we've added thus far. Hot 
            sauce also helps add a nice vinegary tang for balance and also adds some heat as well, which is easy to adjust to taste. I like using Frank's Red Hot or Cholula, but you can 
            use whatever vinegar-based hot sauce you like. Salt is also important to help break down the onions and flavor the beans, but be careful how much you add, since bacon, ketchup, 
            and hot sauce are all pre-salted. I recommend starting with a small amount and adjusting to taste at the end.
            </p>
            <p>
            Add your spices into the pot and stir to combine to let the flavors meld together. Some people like adding beer or bourbon to their baked beans. I think it's a good idea, but I 
            didn't bother to try when making this recipe. If you want to add it, now would be the time to add a 1/4 cup of bourbon or flavorful beer and let it reduce for a few minutes to 
            get rid of the alcoholic fumes. I always recommend temporarily turning off the heat when adding alcohol to a hot pan, just in case of flare-ups. After your spices have had some time 
            to incorporate (and the alcohol has reduced, if you added any), add in the tomato paste, hot sauce, and ketchup. I like adding them later, as it gives time for the spices to mix with 
            the fat more easily, and I prefer reducing alcohol before adding vinegary ingredients to the pot. I find that the combined fumes of vinegar and alcohol are a surprisingly accurate 
            replica for the smell of drunken vomit, and the very thought makes me nauseous.
            </p>
            <p className='story'>
            Once the flavorings are all combined and the vinegar has had time to cook down a bit, add in the beans and crumble in the bacon. If you want to reserve some bacon to crumble on top 
            as a garnish, feel free to do so. Stir to combine everything evenly, then taste and adjust seasoning as needed. If you feel that you're not getting the desired effects of any of the 
            flavorings listed above, feel free to add more as you see fit. The one thing you don't want to change yet is the salt. The beans still need time to absorb the flavors, so the saltiness 
            of the beans and sauce will balance out as they bake. This is why I recommend adjusting salt only at the end: it's easy to add more salt later, it's impossible to take it back out.
            </p>
            <p className='story'>
            Bake in the oven at 375F for 45 minutes with a lid on. This will allow the beans to absorb the flavors of the sauce and thicken up. After 45 minutes, remove from the oven, give 
            it a stir, adjust for salt and pepper to taste, and let cool for 10 mins before serving. If you like your baked beans to be coated in more of a gravy rather than a thick paste, 
            feel free to add a little water, adjusting until you get your desired texture. Be very careful when handling the pot, as it will be extremely hot. The food will look hot, but the 
            pot will look the same, so it's easy to forget that you've just taken it out of a hot oven. Use oven mitts to be safe until the pot has had time to cool down. When I first made this 
            recipe, I forgot that I had just removed it from the oven when going to stir it, and I grabbed the handle with by bare hand, getting first-degree burns on three fingers. Always 
            remember, safety first!
            </p>
            <p className='story'>
            These beans are perfect for a nice summer cookout or a hearty breakfast. The beans are melt-in-your-mouth creamy, and endlessly rich in flavor. The sauce is sweet, savory, salty, 
            tangy, smoky and spicy all at once, achieving a perfect balance of flavors. A lot of people like adding ground beef and use a combination of different beans, but I disagree with this 
            approach. The beans should take center stage, and the little bits of onion and bacon should be there to complement them for a bit of textural contrast here and there. In addition, by 
            omitting ground meat, it's very easy to make this recipe vegan: use a couple tablespoons of neutral oil instead of bacon, a few sliced shiitake mushrooms, and maybe a little liquid smoke 
            when adding the sauces as well. Also, using navy beans, great northern beans, etc. will not give you the same size or robustness in color and flavor compared to scarlet runner or kidney 
            beans. If you use a good variety that stands out, you don't need meat to bulk up the dish or multiple types of beans to make it more interesting. Let the beans speak for themselves, 
            and let the chorus of flavorings sing in harmony with them.
            </p>
        </div>    
    );
}

export default BakedBeans;
