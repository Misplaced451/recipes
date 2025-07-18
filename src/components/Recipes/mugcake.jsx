import '../../recipes_style.css';
import '../../bulma.css';

const MugCake = () => {
    return (
        <div className="pt-6 section recipe">
            {/* Intro */}
            <div className="has-text-centered section pt-0">
                <h1 className="has-text-weight-bold is-size-3">Chocolate Mug Cake</h1>
                <p className="subtitle">A fun, easy movie night dessert</p>
            </div>
            
            <div className="columns mb-6 has-background-light">
                {/* Instructions */}
                <div className="column">
                <h4 className="subtitle has-text-centered-mobile">Instructions</h4>
                <div className="content">
                <ol>
                    <li>Combine flour, sugar, salt, cocoa powder, and baking powder in a microwave-safe mug</li>
                    <li>Combine thoroughly with oil until the dry mix is fully coated in fat</li>
                    <li>Add milk and vanilla, then gently fold together until just combined</li>
                    <li>Microwave for 1 minute.</li>
                    <li>Serve with a scoop of ice cream</li>
                </ol>
                </div>
                </div>
                
                {/* Ingredients */}
                <div className="column is-4-desktop has-background-grey-lighter">
                <h4 className="subtitle has-text-centered-mobile">Ingredients</h4>
                <div className="content">
                <ul>
                    <li>5 tbsp flour</li>
                    <li>3 tbsp sugar</li>
                    <li>2 tbsp vegetable oil</li>
                    <li>3 tbsp whole milk</li>
                    <li>1 tbsp cocoa powder</li>
                    <li>0.25 tsp baking powder</li>
                    <li>1/2 tsp vanilla extract</li>
                    <li>Pinch salt</li>
                    <li>1 scoop ice cream (your choice of flavor)</li>
                </ul>
                </div>
                </div>
            </div>
            
            {/* About the recipe */}
            <h4 className="subtitle has-text-centered is-4">Story Time</h4>
            <p className="story">
            This recipe was a challenge and a half. Typically, when it comes to cooking, there is a tradeoff between convenience and quality. If you cook something readymade from frozen, 
            it will be easy, but will lack freshness and you have limited control of flavor and texture. If you try and bake a cake in a microwave, it's by nature going to be worse than 
            if you put hours into making it from scratch in the oven. Even boxed cake mixes are better than mug cakes. Of course, the inversely proportional relationship between convenience 
            and quality is more correlation than causation, and may not apply for all recipes and techniques, but it certainly applies here. This was the challenge of making this recipe: 
            the starting point took about 2 mins, was extremely easy, and tasted like a hot chunk of coal. I wanted it to be moist, sweet, and fluffy, but anything you do to improve on 
            those aspects increases the time, effort, and dishes to clean. The goal was to make a recipe that took no longer than 5 minutes, required no more than a mug, a spoon, and 
            common household ingredients, and tasted good enough to be worth making at all.
            </p>
            <p className="story">
            Combine flour, sugar, cocoa powder, baking powder, and a small pinch of salt in a microwave-safe mug. Once all your dry ingredients are together, add the oil and mix thoroughly 
            until fully incorporated. Don't try and dissolve it, as there's no water, but the point of this step is to ensure that every bit of flour is coated in fat. This will inhibit 
            gluten formation, which will help keep the cake soft and tender and not chewy or tough. The gluten in the flour would normally form a complex network of proteins when mixed with 
            water, which is great for something with more structure and spring like bread, but in situations where you want something like a flaky crust or a soft cake, you want to prevent 
            the gluten from tightening up the batter too much. This is a rather simple step, but it makes a world of a difference. Next, add the remaining wet ingredients and fold together
            until fully homogenous, taking care to both get all the dry bits in the corners and edges while being gentle enough not to work the gluten too much. It should look and feel like 
            cake batter when you're done because, well, that's exactly what it is. If you have some time and willingness, you should dissolve the sugar and salt with the milk and vanilla in 
            a separate cup before adding it to the mug, rather than mixing them with the flour at the beginning. This will prevent any undissolved grains from remaining in the final product, 
            resulting in a more balanced flavor. However, I chose not to go that route for this recipe for the sake of simplicity. Once your batter is ready, take 1/2 tsp of water and pour 
            it over the top to get a thin surface of water all along the top of the batter. This will turn to steam and prevent the cake from losing too much moisture. Microwave the cake 
            for one minute.
            </p>
            <p className="story">
            This may seem like a very short baking time, and the top of the cake may look a little wet or spongy, but it will be enough. Cakes are typically done when they reach an internal 
            temperature of 200°F (93°C). I've tested this recipe several times with both small mugs the size of my fist to large mugs at least twice that size, and every time the cake comes 
            out above 200°F after one minute. This is enough to fully set the cake and kill any bacteria that would be present in raw flour. Of course, your microwave may be different, so feel 
            free to test the recipe yourself and adjust the timing as needed. Serve with a scoop of your ice cream of choice. I like mint chocolate chip or vanilla with this recipe. I consider 
            this step essential, as although the cake can be eaten plain, it isn't good enough to be as enjoyable as one would expect from a dessert. Think of this like frosting on a cake. 
            You could just eat a cake without any frosting, but the additional sweetness and contrast in texture makes it more enjoyable. Is it the most delicious cake? No. Is it the prettiest 
            cake? Not in the slightest. But it's fun, easy, and for the level of convenience, this is about as good as it gets. I wouldn't make this for someone's birthday, but it would be 
            the perfect dessert for a cozy movie night at home or a quick snack when you're craving something sweet.
            </p>
        </div>    
    );
}

export default MugCake;
