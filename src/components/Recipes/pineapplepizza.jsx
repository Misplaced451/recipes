import '../../recipes_style.css';
import '../../bulma.css';

const PineapplePizza = () => {
    return (
        <div className="pt-6 section recipe">
            {/* Intro */}
            <div className="has-text-centered section pt-0">
                <h1 className="has-text-weight-bold is-size-3">Pineapple Upside-Down Deep-Dish Pizza</h1>
                <p className="subtitle">Don't let Italy find out about this one.</p>
            </div>
            
            <div className="columns mb-6 has-background-light">
                {/* Instructions */}
                <div className="column">
                <h4 className="subtitle has-text-centered-mobile">Instructions</h4>
                <div className="content">
                <ol>
                    <li>Mix flour, cornmeal, yeast, and salt in a large bowl.</li>
                    <li>Mix in olive oil until crumbly texture forms.</li>
                    <li>Add warm water until shaggy dough forms.</li>
                    <li>Cover w plastic wrap in bowl and let rest for 20 mins.</li>
                    <li>Knead until a smoother dough forms in 4 min intervals, resting between each interval for 4 mins (should take about 2 intervals, i.e. 12 mins).</li>
                    <li>Turn into a ball, return to bowl and cover. Let rest for 2 hrs.</li>
                    <li>Chop up any vegetables you want to add as toppings and set aside.</li>
                    <li>Grease pie dish liberally with butter and sprinkle parmesan on the bottom and sides.</li>
                    <li>Add melted butter to the bottom with pineapple rings, making sure the distribution of butter and parmesan is even on the bottom.</li>
                    <li>Slice sausage into coins and fit them in the pineapple rings to mimic the maraschino cherries on a pineapple upside-down cake. If using olives instead, leave them whole.</li>
                    <li>Once dough is done resting and has doubled in volume, press out on a countertop until about 2 in wider than the top of the pie dish.</li>
                    <li>Cut off any excess dough outside the pie dish and use the excess dough to form a ring around the inner wall of the pie dish.</li>
                    <li>Fill with sauce until you can't see the pineapple or sausage anymore, and then add the toppings.</li>
                    <li>Add at least 0.5 lb mozzarella and top with slices of provolone cheese, taking care to make sure the final product is relatively flat (not domed) on top.</li>
                    <li>Put remaining circle of crust dough on top of the cheese and pinch it to the dough on the walls to properly attach it.</li>
                    <li>Sprinkle some extra parmesan on top and cut a few slits to vent steam.</li>
                    <li>Bake at 425F for 30 mins.</li>
                    <li>Let rest outside of the oven for 10 minutes.</li>
                    <li>Invert onto a cutting board, cake stand, or whatever heat-safe platform you want.</li>
                </ol>
                </div>
                </div>
                
                {/* Ingredients */}
                <div className="column is-4-desktop has-background-grey-lighter">
                <h4 className="subtitle has-text-centered-mobile">Ingredients</h4>
                <div className="content">
                    <p>For the Crust:</p>
                    <ul>
                        <li>250g bread flour (or AP)</li>
                        <li>25g cornmeal</li>
                        <li>75g olive oil</li>
                        <li>100g warm water</li>
                        <li>3g instant yeast</li>
                        <li>5g salt</li>
                    </ul>
                    <p>For the Rest:</p>
                    <ul>
                        <li>Tomato sauce</li>
                        <li>Provolone cheese slices</li>
                        <li>Shredded low-moisture mozzarella</li>
                        <li>Parmesan</li>
                        <li>0.25 cups unsalted butter (melted)</li>
                        <li>Pineapple rings</li>
                        <li>Italian sausage *</li>
                    </ul>
                </div>
                <p>* Can substitute with whole black olives or cherry tomatoes</p>
                </div>
            </div>
            
            {/* About the recipe */}
            <h4 className="subtitle has-text-centered is-4">Story Time</h4>
            <p className="story">
            One time, I was asking my friends their opinion about pineapple on pizza. But in a weird game of word association, my brain combined the words “pineapple upside-down cake” with 
            “pineapple on pizza” and I ended up saying, “What do you think about pineapple upside-down pizza?” My friends were confused by this, but it got me thinking. What is an 
            upside-down pizza? If you think about it, pizza normally has sauce with cheese and toppings above it, whereas in deep-dish pizza, the cheese and toppings are under the sauce. 
            Even though the crust is always on the bottom, deep-dish pie is really the closest mainstream variant of pizza that could be considered “upside-down”. So what if you made a 
            pineapple upside-down cake, but instead of cake it was a deep-dish pizza? After hours of research, diagramming, and writing, I settled on a recipe for the first ever 
            Pineapple Upside-Down Deep-Dish Pizza. I'm proud to say, this is not only an original recipe, but also the first recipe for pineapple upside-down deep dish pizza ever made. I've 
            checked on Google, I've asked ChatGPT, there's nothing. I've seen pineapple on pizza, I've seen pineapple in deep-dish pizza, I've even seen a pineapple upside-down pizza! 
            But I've never seen pineapple upside-down deep dish pizza. This is the only place you can find it. Enjoy!
            </p>
            <p className="story">
            Here's how it works: you take a pie dish and put down some pineapple rings in some melted butter with round slices of Italian sausage in the holes. Take deep-dish crust dough and 
            line the edges, then fill up the pie dish with tomato sauce, then a layer of toppings, and cheese on top. Cover the pie with a circle of dough and crimp the dough onto the dough 
            around the sides to seal it. Create a couple steam vents on the top and bake it in the oven. The best part is, while in the oven, because there's crust on the top and sides of a 
            pie dish, it looks like an ordinary pie to the casual observer. Wouldn't they be shocked to see that when you take it out of the oven and invert it, it was a deep-dish pizza all 
            along! I know you're asking, why even bake it upside down at all? It seems much simpler to do it right side up. You're right, but where's the fun in that? Where's the adventure? 
            The childlike whimsy that comes with making a cake that's actually a pizza that's actually a pie?
            </p>
            <p className="story">
            I already described more or less how to make it, but let's get more into specifics. Start by making the dough. Special thanks to Omnivorous Adam for his deep-dish pizza crust 
            recipe. Mix the dry ingredients in a large bowl. Then mix in the olive oil until it becomes crumbly. Similar to a pie crust, it's important to add the moisture last in as small 
            a quantity as possible. Add warm water (about body temperature) into the dough little by little until a shaggy dough forms. Cover the bowl with plastic wrap and let rest for 
            20 minutes. The yeast will begin feeding on the sugars in the flour and start farting up a storm of carbon dioxide, which will cause the dough to rise. Knead the dough for 4 mins, 
            rest for 4 mins, then knead for another 4. By the end of those 12 minutes, you should have a smooth, supple dough. Turn it into a ball, return it to the bowl and let it rest for 
            another 2 hours. Cover the top of the bowl with plastic wrap to prevent the dough from drying out.
            </p>
            <p className="story">
            While that's rising, chop up your vegetables. I used onion, green bell pepper, and baby bella mushrooms. You can use more vegetables or none at all, it's up to you. 
            Then grease the pie dish liberally with butter and sprinkle parmesan on the bottom and sides. Add melted butter to the bottom with some canned pineapple rings. Cut some 
            Italian sausage into coins and fit them into the pineapple rings to mimic the maraschino cherries on a pineapple upside-down cake. If you're vegetarian, use whole black olives 
            instead, and if you're vegan, don't make this recipe. 
            </p>
            <p className="story">
            Once the dough has finished resting, it should have doubled in volume. Press it out (don't roll it) on a clean countertop until about 2 inches wider than the outer rim of the 
            pie dish. Cut off any excess dough that would hang over the pie dish and use the excess dough to form a ring that goes around the inner walls of the pie dish. Fill up with 
            tomato sauce until you no longer see any pineapple or sausage, then add the toppings of your choice. If you want a recipe for homemade tomato sauce, I have one on this site. 
            The advantage to homemade is that you can control the moisture level. When I made this recipe, I reduced the sauce until most of the moisture was evaporated out to avoid steam 
            buildup in the pie. After putting in the sauce, add at least half a pound of low-moisture mozzarella (yes, that sounds like a lot. No, it is not too much cheese) and then a 
            layer of provolone slices. Make sure the cheese is flat on top, and not domed in the middle. Put the remaining circle of dough on top of the cheese and pinch it to the walls of 
            dough to attach them together. Sprinkle some extra parmesan on top and cut some vents in the top crust to let out steam. I'm not sure if that actually helps, considering the 
            cheese would probably just seal it back up when it melts, but there's no harm in doing it. Bake at 425F for 30 minutes. Keep a baking tray in the rack below in case any juice 
            drips out. Once the top crust is browned nicely, it should be about done. Let rest outside the oven for at least 10 minutes before inverting onto a cutting board.
            </p>
        </div>    
    );
}

export default PineapplePizza;
