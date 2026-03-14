import '../../recipes_style.css';
import '../../bulma.css';

const MushroomParfait = () => {
    return (
        <div className="pt-6 section recipe">
            {/* Intro */}
            <div className="has-text-centered section pt-0">
                <h1 className="has-text-weight-bold is-size-3">Roasted Garlic Mushroom Parfait</h1>
                <p className="subtitle">The most luxurious umami spread</p>
            </div>
            
            <div className="columns mb-6 has-background-light">
                {/* Instructions */}
                <div className="column">
                <h4 className="subtitle has-text-centered-mobile">Instructions</h4>
                <div className="content">
                <ol>
                    <li>Slice off the top of the garlic head and peel off most of the loose, papery skin except the last layer</li>
                    <li>Drizzle with a bit of olive oil, ensuring that it soaks into every exposed clove</li>
                    <li>Wrap in aluminum foil and bake at 400F for 30 mins</li>
                    <li>Dice up mushroom and thinly slice shallot</li>
                    <li>Cook water out of mushrooms in a dry pot and saute shallots with 2 tbsp butter in a pan on the side</li>
                    <li>Once shallots are softened and get a bit of color, deglaze with brandy and reduce until the alcohol cooks off</li>
                    <li>When the mushrooms have given up most of their water and are getting lots of color on them, add the shallots, vinegar, soy sauce, Worcestershire, and stock</li>
                    <li>Reduce until the liquid becomes a glaze, then turn off the heat</li>
                    <li>Add cream and milk, then stir to combine</li>
                    <li>Add the mixture to a blender, squeeze in the roasted garlic, and add 2 more tbsp softened butter</li>
                    <li>Blend until everything's minced up finely</li>
                    <li>Add 2 more tbsp butter, blend to incorporate, then add the final 2 tbsp and blend until smooth</li>
                    <li>Blend on high for 1 minute. If the mixture is too tight to blend, add a little stock to loosen it</li>
                    <li>Season to taste, then pour into an airtight container and refrigerate for a few hours or until needed</li>
                </ol>
                </div>
                </div>
                
                {/* Ingredients */}
                <div className="column is-4-desktop has-background-grey-lighter">
                <h4 className="subtitle has-text-centered-mobile">Ingredients</h4>
                <div className="content">
                <ul>
                    <li>1 lb cremini mushrooms</li>
                    <li>1 head garlic</li>
                    <li>1 shallot</li>
                    <li>0.5 cups brandy</li>
                    <li>1 tbsp vinegar</li>
                    <li>1 tbsp soy sauce</li>
                    <li>1 tsp Worcestershire sauce</li>
                    <li>1 cup beef or vegetable stock</li>
                    <li>2 tbsp heavy cream</li>
                    <li>1 tbsp whole milk</li>
                    <li>8 tbsp butter, softened</li>
                    <li>Olive oil</li>
                    <li>Salt</li>
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
            "Parfait" is French for "perfect", but the definition is anything but. A traditional French parfait is a dessert made from frozen custard. An American parfait is a 
            layered dessert with ice cream, whipped cream, and fruit (or more often made from yogurt, granola, and fruit). In the UK, they usually use parfait to mean the French 
            version, but they also have a savory type of parfait that is similar to a pâté (usually made from liver) but has a smoother, softer texture. I have no idea why or 
            where these distinctions come from, nor could I find any reliable information on the histories of how this term has evolved in different ways. In fact, I only learned 
            about the savory parfaits in the UK after seeing a video from Fallow about how they make their mushroom parfait. Their process required various different alcohols like 
            port, madeira, and brandy (typical of pâtés/parfaits) and a lot of different steps, so I decided to make a simplified, at-home version and put my own spin on it by 
            adding in roasted garlic for the caramelized depth, extra umami, and subtle aroma.
            </p>
            <p className='story'>
            To start, make some roasted garlic. The easiest way to do this is to peel off the loose, papery skin, leaving just the last layer intact to protect the cloves. Slice off 
            the top so that the tops of all the cloves are exposed. Drizzle some olive oil over top, ensuring that it soaks into every single clove. Wrap it up in aluminum foil, place 
            it in a baking dish just in case any olive oil drips out, and bake at 400F for 30 minutes before taking out and letting rest. This is the lowest-effort step and involves a 
            lot of downtime, so it's best to start on this and prep the rest of the ingredients during the waiting periods.
            </p>
            <p className='story'>
            From here, there are two main components to the parfait: the mushroom base and the shallot reduction. Start by dicing up the mushrooms and thinly slicing the shallot. I like 
            using cremini mushrooms for their availability and color, but you can use a mix of whatever mushrooms you like. Having some shiitake in the mix would greatly enhance the umami 
            flavor, so if you have some on hand, feel free to incorporate that. The shallots will add a nice oniony flavor but will be much sweeter and gentler than any other kind of onion, 
            so they are perfect for an application like this. Place the mushrooms in a dry pot over medium-high heat to cook out all the water and get some browning. This will concentrate 
            and develop their flavor, making the final product much more potent. In a separate pan, saute the shallots with 2 tbsp of butter over medium heat until they soften and get a bit 
            of color on them. Deglaze the pan with brandy and let reduce until the alcohol fumes cook off. The liquid should reduce by about half and form a saucy consistency with the butter 
            as you stir. Once the mushrooms are browned and completely dehydrated, add in the shallots, vinegar, soy sauce, Worcestershire sauce, and stock. I like using a couple spoonfuls of 
            homemade demi-glace for the concentrated flavor and gelatinous body, but a cup of beef stock will do the job just fine. For a vegetarian version, vegetable stock will work as well, 
            but won't confer the same umami benefit. If you really don't want to miss out on any umami flavor with the veggie stock, experiment with adding a bit of miso paste, MSG, or whatever 
            vegetarian umami boosters you have on hand. Mix well so the mushrooms absorb all those flavors, then reduce until the liquid thickens into a glaze. A surefire way to test the thickness 
            of a sauce is to dip in a spoon and let it coat the back. If it all just runs off the spoon, it's too thin. Once it coats the back of the spoon, run your finger in a line across the 
            back of the spoon. If you're able to draw a clear line that doesn't fill back in from the sauce dripping down, it's thick enough. This is what's referred to as "nappe" consistency.
            </p>
            <p className='story'>
            Turn off the heat and stir in the cream and milk. This will add a little extra fat, but also loosen the mixture and lighten its color as well. Then, transfer the mix to a blender. 
            Unwrap the foil on your roasted garlic and squeeze out the softened cloves into the blender as well. It should come out like toothpaste. Add in 2 tbsp of softened butter to help the 
            blending process, then blend until everything gets minced up finely. Continue adding the rest of the butter 2 tbsp at a time and blending to incorporate, then blend on high for a full 
            minute to ensure maximum creaminess. If the mixture is too tight to blend and your blades aren't able to move the mixture, add a bit of stock to loosen it up. Not too much, as we want 
            it as thick as possible to set as a solid in the fridge, but just enough to get it blended to a very smooth consistency. Also, I am aware that this recipe involves an entire stick of 
            butter. This is actually necessary, as the fat cuts through the richness to help balance the flavor, smoothen the texture, and it helps the parfait set properly in the fridge as well. 
            Besides, you shouldn't be eating this whole thing yourself in one sitting, so the amount of butter per serving is actually quite normal. Once it gets as smooth as possible, season 
            to taste with salt, then pour into an airtight container. Refrigerate the parfait for a few hours or overnight to let it set. You should get a scoopable, spreadable, creamy spread with 
            a deeply rich umami flavor and creamy unctuousness. Serve it on crackers with some fresh chives and a shingle of aged cheese for a perfect gourmet appetizer, or use it as a spread 
            on toasts or sandwiches. It's a great way to add a lot of luxury into a little moment.
            </p>
        </div>    
    );
}

export default MushroomParfait;
