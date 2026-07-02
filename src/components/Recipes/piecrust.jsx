import '../../recipes_style.css';
import '../../bulma.css';
import RecipeLayout from './recipelayout';

const PieCrust = () => {
    return (
        <RecipeLayout 
        name={'Perfect Pie Crust'}
        description={'Great for all your pie, tart, and quiche needs'}
        instructions={
        <div className="content">
        <ol>
            <li>Mix salt and flour in a large bowl and refrigerate</li>
            <li>Cut butter into flour until butter is in pea-sized, flour-coated chunks</li>
            <li>Add water little by little until the mixture can be clumped. Use as little water as possible</li>
            <li>Form into a ball of dough, wrap, and freeze overnight</li>
            <li>Take half of dough, roll out 2 inches wider than pie dish</li>
            <li>Butter and flour the pie dish and put in dough. Trim, crimp, dock, and refrigerate for at least 30 minutes</li>
            <li>Preheat oven to 350F</li>
            <li>Place in pie weights (you can use dry beans in aluminum foil instead)</li>
            <li>Bake at 350F for 20 minutes, remove pie weights, then put it back in oven until golden brown (15-30 mins)</li>
        </ol>
        </div>
        }
        ingredients={
        <div className="content">
        <ul>
            <li>2.5 cups all-purpose flour, chilled</li>
            <li>1 tsp salt</li>
            <li>1 cup butter, cold, cubed</li>
            <li>0.33 cups ice-cold water, add more if needed</li>
        </ul>
        </div>
        }
        story={
        <div className="story">
            <p>
            Think of a good pie dough as the opposite of a good friend: cold and dry from the beginning, then as flaky as possible in the end. By keeping the dough cold, the butter 
            won't fully incorporate, and the streaks of solid butter interspersed throughout the dough will melt in the oven. The water in the butter will turn to steam, creating 
            little air pockets in the dough, while the fat in the butter will keep the edges of these pockets dry and separated, resulting in layers of thin, crisp pastry stacked 
            on top of one another. This is effectively the same method that allows for the crispiness of a croissant or a puff pastry, but in a crust, the layers are in the form of 
            small, dispersed pockets rather than distinct sheets of pastry. If you want those little pockets to form, you need the dough to be kept as cold as possible until the 
            minute it hits the oven. The second thing to control is the moisture. More water equals more gluten development, resulting in a more chewy texture. We want to avoid adding 
            too much water or over-kneading our dough to ensure that the pastry remains tender and not chewy or gummy.
            </p>
            <p>
            When you begin mixing ingredients, everything must be cold: the flour, the salt, the butter, the water, the bowl and other utensils, and even your hands. I like to place 
            the flour, butter, and salt in the bowl and keep the bowl in the freezer for at least an hour or until I'm ready. The butter should be cut into small cubes and dispersed 
            into the flour, which will make it easier to work with. I like starting this process at night, because the temperature of the room tends to be cooler, and I'm going to have 
            to freeze the dough for a few hours anyway, so might as well make it an overnight wait. Get the cold bowl of ingredients out of the freezer once they're properly chilled 
            and the butter has hardened considerably. The next step is to "cut" the butter into the flour. In most doughs, we want the butter and flour to fully incorporate to get a 
            smooth texture, but that's not the goal here. Remember, we want to have those small pockets of undissolved butter in our dough. The process of cutting can be done using a 
            pastry cutter that will break up the hard pieces of butter, or you can just do it by hand as well. Take each piece of butter and break it up with your fingers into about 
            pea-sized chunks. Ensure each piece is thoroughly coated in flour throughout the process. This will allow the fat to incorporate somewhat while still leaving much of the 
            butter dispersed in the small pieces we need.
            </p>
            <p>
            Once the mixture looks crumbly and mealy, add ice water gently (don't add the ice, just the water), and mush it into the flour and butter until you get a big, shaggy lump 
            of dough. You may not need the entire 1/3 cup stated for this recipe, or you may need a bit more, depending on the weight of the flour, the humidity of your kitchen, etc. 
            Regardless, you want to stop adding water as soon as you get to the shaggy mass. Continue to gently knead the dough until you get a smooth ball of dough. It's okay if it's 
            slightly cracked. After all, there's a reason the French call this style of dough a <em>pâte brisée</em> (broken pastry). As long as it isn't falling apart, it's as moist 
            as we need. Once you've got your dough ball, cut it in half, wrap tightly in plastic wrap, then freeze for a couple hours, preferably overnight to help the butter solidify 
            properly. The reason we cut it in half is because this recipe is a double crust. Some pies need a crust on both the top and bottom, like most fruit pies. However, other 
            pies like pumpkin only have one crust (the bottom one), in which case this recipe will be good for two pies in a standard 9-in pie dish. The dough will last in the freezer 
            for at least a few months, so don't worry, you don't have to make two single-crust pies right away unless you need to. If you want a good logistical tip for the holiday 
            season, keep your pie dough ready ahead of time to take some of the stress out early.
            </p>
            <p>
            Once your dough is chilled, let it thaw on the counter until you can roll it out. Ensure your work surface and rolling pin have plenty of flour to prevent sticking. Don't 
            let the dough get too warm, as we still want the butter as cold as possible. Roll the dough out until its big enough for your pie dish. The easiest way to measure that is 
            to place the dish upside-down over the rolled dough. If the dough is about a couple inches wider than the radius of the dish. If you're measuring out the top crust, it only 
            needs to be a bit wider than the top of the dish. Once your dough is rolled out, it's time to butter and flour the pie dish. Of all the methods to ensure an easy release 
            from a pie dish, cake mold, or muffin tin, this method has never failed me. First, grease up the bottom and inner sides of the dish with butter. Once it's evenly greased up, 
            dust some flour in there, and shake the dish around to ensure the entire interior of the dish has a thin, even dusting of flour. Even if the dish is nonstick, you never want 
            to take chances. The butter and flour method creates a solid, thin barrier between the dough and the dish that provides some lubrication and moisture-absorption that gives 
            you an easy release from the dish every time.
            </p>
            <p>
            Use your rolling pin to help you place the bottom crust into the dish. Gently push the dough into the corners of the dish without squishing or pressing it too much. Trim off 
            any excess overhang to create an evenly round rim. Use your fingers to crimp the dough, so that it gets a nice wavy look around the edge. Not only does this make the pie more 
            aestheticlaly pleasing, it also lets the crust hang on the rim of the pie dish to prevent it from shrinking too much. Let it sit in the fridge for half an hour to relax the 
            gluten, inhibiting shrinking even further. At this point, the paths of the recipe diverge depending on the recipe you're making. If you're making a filling that bakes in the 
            oven, like pumpkin pie or most double-crust pies, you're pretty much done for now. Once you add your filling, you can place the top crust on and seal it onto the edge of the 
            bottom crust with your fingers. Cut some vents into the top to allow steam to escape. If you'd like to be a bit more artsy, try cutting your top crust into strips and placing 
            them on your pie in a lattice shape. The open sections of the weave will not only be aesthetically pleasing, but will also function as the vents. To finish, you can sprinkle 
            a garnish of large-grain sugar like sanding sugar to get that crystalline look that some pies have.
            </p>
            <p>
            But what about pies like a lemon meringue pie that don't bake their fillings in the oven? In this case, you'll need to do what's known as "blind baking" the crust. Using a 
            fork, poke holes all across the bottom and sides of the pie crust. This is called "docking", and it prevents any big air bubbles from forming. Although small air bubbles are 
            great for making a flaky crust, if we're baking without the filling weighing them down, the crust will puff up too much, making it hard to fill evenly. Docking the crust with 
            a fork like this will help with this process. Additionally, it's good to also use pie weights. Place a layer of aluminum foil on your dough and fill it with pie weights. These 
            are small, round, heavy, oven-safe balls that will help weigh down the crust while we blind bake it to prevent any errant bubbles from rising too much. If you're like me and 
            can't be bothered to buy pie weights, using dry beans are a cheap, effective alternative. Bake it at 350F for 20 minutes, then remove the pie weights and foil before continuing 
            to bake until light golden-brown. The exact timing will differ by oven, but start with 15 minutes and check in periodically. This final step will allow the surface of the crust 
            to develop not only a gorgeous color, but also crisp up nicely. Once ready, let the crust cool and fill with whatever your recipe calls for. 
            </p>
            <p>
            There are many variations to this recipe out there. Some people like to use an even mix of cold water and vodka instead of pure ice water, since the alcohol will add enough 
            liquid volume to help the dough come together without adding additional water. This further inhibits gluten development, theoretically improving the tenderness of the crust, 
            but I find that this is unecessary. All the other flavoring additions people make like vanilla extract, sugar, eggs, etc. are all completely unnecessary as well. I'm all for 
            experimentation and making things your own, and certain crusts like tart shells do require some sugar and eggs to get the desired flavor and texture. However, for most 
            applications of this recipe, why overcomplicate something that's literally four ingredients and specifically requests that you work it as little as possible? In my opinion, 
            simplicity is what makes a pie crust really good. It's like the drummer in a band. You don't want them to overplay or overshadow the other instrumentals and vocalists, you 
            need them to maintain a good rhythm and be on time no matter what. Reliability counts for a hell of a lot more than panache for a percussionist, as it does for a pie crust. 
            It's not flavorless and boring, but flavor isn't its biggest strength in the composition either. It provides solid support and textural contrast which helps the fillings and 
            toppings sing at their highest potential. The simplicity also yields versatility. I use this recipe for any pies (sweet and savory), quiches, and tarts. Once you try this 
            perfect pie crust, it will be a mainstay in your culinary arsenal forever.
            </p>
        </div>
        }
        />
    );
}

export default PieCrust;
