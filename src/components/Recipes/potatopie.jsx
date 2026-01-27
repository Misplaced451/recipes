import '../../recipes_style.css';
import '../../bulma.css';

import { Link } from 'react-router-dom';

const PotatoPie = () => {
    return (
        <div className="pt-6 section recipe">
            {/* Intro */}
            <div className="has-text-centered section pt-0">
                <h1 className="has-text-weight-bold is-size-3">Sweet Potato Pie</h1>
                <p className="subtitle">Recipe courtesy of my friend's mom.</p>
            </div>
            
            <div className="columns mb-6 has-background-light">
                {/* Instructions */}
                <div className="column">
                <h4 className="subtitle has-text-centered-mobile">Instructions</h4>
                <div className="content">
                <ol>
                    <li>Follow my <Link to={'/piecrust'} className='is-underlined'>Pie Crust Recipe</Link>, stopping after Step 6. You don't need to dock the dough.</li>
                    <li>Boil sweet potato until tender and remove skin.</li>
                    <li>Add sweet potato to a bowl and mash slightly.</li>
                    <li>Add butter and mix well.</li>
                    <li>Stir in sugar, eggs, milk, nutmeg, cinnamon, and vanilla.</li>
                    <li>Beat on medium speed until smooth.</li>
                    <li>Pour into pie crust.</li>
                    <li>Bake at 350F for an hour or until set.</li>
                </ol>
                </div>
                </div>
                
                {/* Ingredients */}
                <div className="column is-4-desktop has-background-grey-lighter">
                <h4 className="subtitle has-text-centered-mobile">Ingredients</h4>
                <div className="content">
                <p>For the Crust:</p>
                <ul>
                    <li>2.5 cups all-purpose flour, chilled</li>
                    <li>1 tsp salt</li>
                    <li>1 cup butter, cold, cubed</li>
                    <li>0.33 cups ice-cold water</li>
                </ul>
                <p>For the Filling:</p>
                <ul>
                    <li>1 pound sweet potato</li>
                    <li>0.5 cup butter, softened</li>
                    <li>1 cup sugar</li>
                    <li>0.5 cup whole milk</li>
                    <li>2 eggs</li>
                    <li>0.5 tsp ground nutmeg</li>
                    <li>.5 tsp cinnamon</li>
                    <li>1 tsp vanilla extract</li>
                </ul>
                </div>
                </div>
            </div>
            
            {/* About the recipe */}
            <h4 className="subtitle has-text-centered is-4">Story Time</h4>
            <p className="story">
            I remember telling my friend about how I made a recipe for lemon meringue pie. He wanted to learn to make it, and in exchange for my recipe, he told me his mom's special recipe 
            for sweet potato pie. Thank you George, and many thanks to your mom as well for this delicious recipe.
            </p>
            <p>
            I like making the pie dough the night before to give it plenty of time to rest in the freezer before making the rest of the pie. Once you're ready to make the filling, thaw and roll 
            out the dough, place into a greased and floured pie dish, and refrigerate while you prepare the sweet potato filling. Add the sweet potatoes to a pot of cold water and bring up to a 
            boil. Starting them from cold and letting the temperature rise gradually ensures that the heat transfers to the center better and the potatoes cook more evenly. You can also cut the 
            potatoes into chunks to reduce cooking time, but if you cut them too small they will take on too much water. I find that about 2 inch chunks are ideal. You'll know when they're done 
            cooking because you'll be able to insert a fork or paring knife with no resistance.
            </p>
            <p className="story">
            Next, add the sweet potato to a bowl, remove the skins (if you didn't peel before boiling) and mash slightly. Then add butter and mix well. Once that all comes together, stir in the 
            rest of the ingredients and beat until smooth on medium speed. Pour it into your unbaked pie crust and bake at 350F in the center of an oven for an hour or until a toothpick comes out 
            mostly clean. Be careful not to overbake it, or it will end up dry. For custard pies like this, the jiggle will tell you everything you need to know. If you give the pie a gentle shake 
            and the whole thing moves, it's all liquid and needs more time in the oven. If nothing moves, it's overcooked and dry. The perfect pie will have a slight jiggle in the center, but the 
            edges will be set. Once the pie comes out of the oven, the center will gently set without overbaking, retaining a luxurious, moist filling throughout. Let the pie cool for at least 10 
            minutes before serving. Top with whipped cream or serve plain. A final piece of advice: don't just wait around for Thanksgiving to make this. Sweet potato pie is amazing and deserves 
            more love all year round. Besides, if you plan to have this on your holiday menu, you should probably practice it a few times before the big day.
            </p>
            <p className="story">
            
            </p>
        </div>    
    );
}

export default PotatoPie;
