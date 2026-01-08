import '../../recipes_style.css';
import '../../bulma.css';

import { Link } from 'react-router-dom';

const BlackberryTart = () => {
    return (
        <div className="pt-6 section recipe">
            {/* Intro */}
            <div className="has-text-centered section pt-0">
                <h1 className="has-text-weight-bold is-size-3">Blackberry Tart</h1>
                <p className="subtitle">Adapted from <em>Recipes from the World of Tolkien</em>.</p>
            </div>
            
            <div className="columns mb-6 has-background-light">
                {/* Instructions */}
                <div className="column">
                <h4 className="subtitle has-text-centered-mobile">Instructions</h4>
                <div className="content">
                <ol>
                    <li>Follow my <Link to={'/piecrust'} className='is-underlined'>Pie Crust Recipe</Link>, stopping after Step 6. You don't need to crimp or dock the dough.</li>
                    <li>Press into pie tin and put into freezer</li>
                    <li>Use 200g blackberries, the juice and zest of the lemon, and the sugar to make a compote</li>
                    <li>When the blackberries start to soften add the cornstarch slurry</li>
                    <li>Once thickened, let cool, then pour into pie crust and add the rest of the blackberries on top</li>
                    <li>Add a bit of water to the edge of the crust and bake at 375F for 25 mins</li>
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
                    <li>500g blackberries</li>
                    <li>0.5 lemon</li>
                    <li>100g sugar</li>
                    <li>2 tbsp cornstarch</li>
                </ul>
                </div>
                </div>
            </div>
            
            {/* About the recipe */}
            <h4 className="subtitle has-text-centered is-4">Story Time</h4>
            <p className="story">
            What's the difference between a pie and a tart? A pie will sometimes have a top crust, while a tart always has an open face. A tart also usually has a more crumbly, 
            sweet crust while pie crusts are flakier and take fewer ingredients. This recipe was adapted from <em>Recipes from the World of Tolkien</em>, a cookbook that takes inspiration 
            from the food mentioned in Tolkien's books. However, where I've deviated is that rather than bothering to learn how to make a proper tart shell, I instead used the recipe for 
            pie crust that I made to use for lemon meringue pie. Although you can dispute whether this makes it a proper tart or not, I think it still tastes good, especially since 
            the delicate, buttery flakiness of the crust contrasts nicely with the tart, soft blackberries.
            </p>
            <p className="story">
            To start, make the pie crust and press it into a pie or tart tin. Normally with pies you would crimp the edges over the top, but tarts don't typically have that, so just cut 
            off the excess dough once it reaches the rim of the tin. Leave the crust in the freezer while you prepare the rest of the tart. A cold crust will shrink less while baking. 
            For the filling, start by making a sour blackberry compote. In a saucepan, combine 200g of blackberries, the juice and zest of half a lemon, and 100g of sugar over medium heat. 
            The sugar will draw out the liquid from the blackberries and thicken it into a viscous syrup. The lemon will add a lot of brightness and acidity to create the tartness we're 
            looking for in this dish. Once the blackberries are softened and mushed up by the heat and stirring, make a slurry with 2 tbsp cornstarch and an equal amount of water. Adding 
            cornstarch directly will cause it to clump, since the particles are so fine. In order to get a smooth texture, you place it in a small bowl, then mix in an equal amount of 
            water until smooth. The small amount of water makes it hard for clumps to separate in the liquid, ensuring you get a homogenous slurry. Add the slurry to the compote, stirring 
            to combine. As the starch begins to take on some of the liquid, the compote will thicken up nicely.
            </p>
            <p className='story'>
            Once it appears to have thickened somewhat, take off the heat and let it cool. It will continue to thicken as it does so, so don't worry if it still looks a bit runny. Once 
            it has cooled, pour the compote into the pie crust, then top with the remaining blackberries. You can arrange them in whatever pattern you like, but I prefer to have them 
            pointing upward in concentric circles. I start by making a ring around the edge, then working my way inward so that the blackberries don't fall over as I add more. Once your 
            tart is assembled, brush the exposed edge of the crust with a bit of water to prevent burning, then bake at 375F for 25 minutes. The crust will turn a nice golden brown, and 
            the blackberries will be soft, but not mushy. Let cool by the windowsill for at least 30 minutes before serving to make sure the filling sets up nicely. This is a great dessert 
            for any occassion, very easy to make, and tastes delicious!
            </p>
        </div>    
    );
}

export default BlackberryTart;
