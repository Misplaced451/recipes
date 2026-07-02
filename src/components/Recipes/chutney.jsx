import '../../recipes_style.css';
import '../../bulma.css';
import RecipeLayout from './recipelayout';

const Chutney = () => {
    return (
        <RecipeLayout 
        name={'Green Chutney'}
        description={'A spicy sauce that goes with pretty much anything.'}
        instructions={
        <div className="content">
        <ol>
            <li>Add ingredients to a blender with just enough water to blend it all together.</li>
            <li>Blend it until smooth.</li>
        </ol>
        </div>
        }
        ingredients={
        <div className="content">
        <ul>
            <li>6-8 Thai chilis</li>
            <li>Big handful of cilantro</li>
            <li>1/4 yellow onion</li>
            <li>4 cloves garlic</li>
            <li>2 tsp salt</li>
            <li>Water</li>
        </ul>
        </div>
        }
        story={
        <div className="story">
            <p>
            This is my mom's green chutney recipe. If you are unfamiliar with chutney, just think of it like salsa or pesto, but Indian. There are hundreds of different chutneys, 
            but this one is very easy, versatile, and is packed with flavor.
            </p>
            <p>
            Put 6-8 Thai chilis (depending on how much spice you like) in a blender along with a big handful of cilantro (make sure to use the leaves and stems), a quarter of a 
            yellow onion, 4 cloves of garlic, and about 2 teaspoons of salt. Add just enough water to ensure the blender won't get stuck. Blend it until smooth. That's it. Easy. 
            The uses of chutney aren't limited to Indian food either. It goes great with hotdogs, sandwiches, French fries, nachos, tacos, etc.
            </p>
        </div>
        }
        />
    );
}

export default Chutney;
