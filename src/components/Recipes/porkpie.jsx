import '../../recipes_style.css';
import '../../bulma.css';

const PorkPie = () => {
    return (
        <div className="pt-6 section recipe">
            {/* Intro */}
            <div className="has-text-centered section pt-0">
                <h1 className="has-text-weight-bold is-size-3">Mini Pork Pies</h1>
                <p className="subtitle">Recipe adapted from John Kirkwood</p>
            </div>
            
            <div className="columns mb-6 has-background-light">
                {/* Instructions */}
                <div className="column">
                <h4 className="subtitle has-text-centered-mobile">Instructions</h4>
                <div className="content">
                <ol>
                    <li>Bring water to a simmer in a pot</li>
                    <li>In a mixing bowl, combine flour with a tsp of salt</li>
                    <li>Add fats to the hot water and stir until it's all melted</li>
                    <li>Make a well in the flour and add the hot liquid</li>
                    <li>Fold together with a spatula until a smooth ball forms, but don't over-mix</li>
                    <li>Cut dough ball in half, wrap both halves in cling film, and let sit in the fridge for 2 hrs</li>
                    <li>Mix pork and spices in a separate bowl until fully combined, then roll them into 8 even chunks</li>
                    <li>Take one half of the dough and roll it out on a flat surface until about 1/8 inch thick</li>
                    <li>Cut out 8 rounds, wach with about a 5 in diameter (or just 2 in longer than the diameter of the tops of the muffin holes)</li>
                    <li>For the pie lids, roll the other half of the dough to a similar thickness and cut out 2.5 in rounds (or about the size of the muffin hole's top)</li>
                    <li>Grease muffin tin with butter and flour, then place crust bases in them. There should be some overhang of extra dough around the rim of the holes</li>
                    <li>Ensure the dough makes full contact with the tin by pushing out any air pockets at the bottom</li>
                    <li>Place a portion of meat into each of the 8 crust bases, gently pressing to ensure no air pockets between the crust and filling</li>
                    <li>Brush some beaten egg onto the overhang of the dough</li>
                    <li>Add the pie lids on top and crimp the egg-washed overhang together with the pie lids to seal them</li>
                    <li>Preheat the oven to 350F and cut two slits at the top of each pie, then brush the tops down with some more egg wash</li>
                    <li>Bake for 40 mins until golden-brown and let cool for 5 mins before serving</li>
                </ol>
                </div>
                </div>
                
                {/* Ingredients */}
                <div className="column is-4-desktop has-background-grey-lighter">
                <h4 className="subtitle has-text-centered-mobile">Ingredients</h4>
                <div className="content">
                <p>For the filling:</p>
                <ul>
                    <li>1 lb ground pork</li>
                    <li>0.5 tsp salt</li>
                    <li>0.5 tsp white pepper</li>
                    <li>2 tsp sage</li>
                    <li>1 tsp thyme</li>
                    <li>0.5 tsp nutmeg</li>
                    <li>Black pepper</li>
                </ul>
                <p>For the hot water crust:</p>
                <ul>
                    <li>14 oz all-purpose flour</li>
                    <li>6 oz water</li>
                    <li>3.25 oz butter</li>
                    <li>3.25 oz lard (or vegetable oil)</li>
                    <li>1 tsp salt</li>
                    <li>1 egg, beaten</li>
                </ul>
                </div>
                </div>
            </div>
            
            {/* About the recipe */}
            <h4 className="subtitle has-text-centered is-4">Story Time</h4>
            <p className="story">
            Pork pies have been a delicacy in Britain for centuries, but sometimes making an entire pie can be a bit much. I found a recipe, which I got from John Kirkwood's YouTube 
            channel, for mini pork pies. I find that these are much better than traditional pork pies, as they're easier to share, portion, and eat. It also has more versatility, 
            having the option to have them as adorable appetizers, portable snacks, or even a filling lunch. The recipe used here isn't a 1-to-1 copy of the original, as I made a few 
            minor tweaks to add a little more spice and make the measurements a bit easier to follow for those using the Imperial measurement system.
            </p>
            <p className="story">
            To start, this recipe uses a hot water crust. Unlike most pie crusts, for which you want the butter to be as cold as possible, a hot water crust uses melted fats 
            (traditionally lard), and hot water to make the dough easier to work with, yielding a crust that's both pliable and sturdy. For this recipe, heat up some water in a saucepan 
            and melt in the butter and lard. I don't have lard on hand, but I find that vegetable oil is a solid substitute. While that heats up to a simmer, mix flour and salt in a 
            mixing bowl. Once the liquid is simmering hot, make a well in the flour and pour in the liquid. Fold together until a smooth ball forms. If you over-mix or mix too vigorously, 
            the gluten in the dough will develop too much, making it tough rather than tender, which is not ideal. Split the dough in half, wrap both halves with cling film, and let them 
            rest in the fridge for 2 hours to give the gluten a chance to relax and for the flour to fully hydrate.
            </p>
            <p className="story">
            Meanwhile, mix the pork and spices in a separate bowl. You want a sort of meatball consistency. I doubled the amount of sage and white pepper from the original recipe, but even 
            then I feel that it's a bit under-spiced for my palate. Still, this blend of spices is very typical for old British dishes, and the British aren't known for overly-seasoned food. 
            I find that the increased sage and pepper reaches a nice compromise: not too complex or intense, but still enough to notice what's going on. Sage pairs beautifully with pork, 
            and I find that the mellow, earthy, slightly fermented flavor of white pepper makes any meat-based dish taste so much more savory. Divide into 8 even pieces and set aside.
            </p>
            <p className="story">
            After the dough has rested, roll out half of it on a flat, floured surface until about 1/8 inch thick. Cut out 8 rounds, about 5 inches in diameter. These will be the bases of the 
            crust. Dust them with a little extra flour on both sides to prevent stickage. For the pie lids, roll out the other half of the dough to a similar thickness and cut out 2.5 inch 
            rounds. These should be about the size of the top of the muffin holes. Grease a muffin tin with some butter, then sprinkle in some flour. Shake the flour around to create a thin, 
            even coating, then dump out the excess. The butter-flour method for greasing tins is the best way I've found to ensure easy removal of almost any baked good. Place the crust bases 
            in the greased tins. There should be some overhang of extra dough around the rim of the holes. Make sure the dough makes full contact with the tin by pushing out any air pockets 
            at the bottom. Be gentle here, as you don't want to tear the dough. If you want to be extra safe, use a little ball of leftover dough to gently press down the base. Then, place a 
            portion of the meat you divided earlier into each base, again gently pressing to ensure there are no air pockets inside of the pie. The reason air pockets are undesirable is that 
            air expands when it's hot, and too much air can lead to a pie that cracks or bursts in the oven, which is no good.
            </p>
            <p className="story">
            Beat an egg in a small bowl until it's no longer stringy or goopy. This will be your egg wash. Egg washes are often added to pastries to give them a crisp, golden-brown top. Many 
            egg washes include a splash of milk, water, or a different ratio of white and yolk, but for this recipe, just one beaten egg will do. Brush the egg wash onto the overhag of the 
            pies and then place the lids on top of the meat. Crimp the overhang onto the pie lid, using the egg washed side, to seal the pieces of dough together. If there's too much excess 
            coming over the sides, you can fold it back over onto the top of the pie and crimp it down.
            </p>
            <p className="story">
            Once all the pies are sealed properly, preheat the oven to 350F. Cut a couple slits at the top of each pie to allow steam to vent out of the pie when baking. Much like the air 
            pockets, steam will also expand very quickly, and if it's fully sealed in by crust, it will pop it right open. I sometimes do four slits in a cross pattern, but I also like doing 
            two parallel slits, as it looks a bit more like a pig snout. Brush the tops of the pies with a little more egg wash and bake for 40 minutes until golden-brown. This is a good time 
            to clean up your floury kitchen and decide what to do with your scraps. You can fry the dough in little strips in a pan if you don't want to wast those, and scramble the leftover 
            egg as well to make a little snack while you wait. Once the pies are out, let them sit for 5 minutes before serving. They taste great warm, but are okay to be eaten cold too. 
            Still, they're best eaten fresh on the first day, when the crust is at its most crisp. I like to eat these with a bit of Dijon mustard on the side, and maybe a salad as well to add 
            a break from the richness of the savory pork and buttery pastry.
            </p>
        </div>    
    );
}

export default PorkPie;
