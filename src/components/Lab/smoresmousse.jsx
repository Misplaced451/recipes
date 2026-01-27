import '../../recipes_style.css';
import '../../bulma.css';

const SmoresMousse = () => {
    return (
        <div className="pt-6 section recipe">
            {/* Intro */}
            <div className="has-text-centered section pt-0">
                <h1 className="has-text-weight-bold is-size-3">S'mores Mousse</h1>
                <p className="subtitle">Chocolate mousse fused with a campfire classic</p>
                <p className="subtitle has-text-danger">WORK IN PROGRESS - RECIPE INCOMPLETE</p>
            </div>
           
            <div className="columns mb-6 has-background-light">
                {/* Instructions */}
                <div className="column">
                <h4 className="subtitle has-text-centered-mobile">Instructions</h4>
                <div className="content">
                <ol>
                    <li>Separate whites and yolks of eggs, leave whites in a clean bowl at room temp</li>
                    <li>Whisk yolks and 0.25 cups sugar over a double-boiler until smooth and pale</li>
                    <li>Melt in chocolate, using a couple tbsp of cream to loosen, mix until incorporated</li>
                    <li>Stir in a pinch of salt, take off the heat, and stir until cooled slightly</li>
                    <li>Whip the cream until stiff peaks, then fold into the chocolate mixture</li>
                    <li>Fill ramekins about 1/3 of the way with mousse, let set in the fridge for 3 hrs</li>
                    <li>To the egg whites, add 1 cup sugar, cream of tartar, and a pinch of salt</li>
                    <li>Whisk over a double-boiler until the sugar is dissolved and the temperature reads 160F</li>
                    <li>Take off the heat and beat until soft peaks form</li>
                    <li>Crumble graham cracker over mousse</li>
                    <li>Gently top the mousse with meringue and torch (or broil) the tops until browned</li>
                </ol>
                </div>
                </div>

                {/* Ingredients */}
                <div className="column is-4-desktop has-background-grey-lighter">
                <h4 className="subtitle has-text-centered-mobile">Ingredients</h4>
                <div className="content">
                <ul>
                    <li>6 graham crackers</li>
                    <li>3 large eggs</li>
                    <li>4 oz semi-sweet chocolate</li>
                    <li>1 cup heavy cream</li>
                    <li>1.25 cups sugar</li>
                    <li>1 tsp vanilla extract</li>
                    <li>0.25 tsp cream of tartar or vinegar</li>
                    <li>Pinch salt</li>
                </ul>
                </div>
                </div>
            </div>
            
            {/* About the recipe */}
            <h4 className="subtitle has-text-centered is-4">Story Time</h4>
            <p className="story">
            When looking for a chocolate mousse recipe, I found one that used whipped cream instead of whipped egg white to add air. If you're familiar with my lemon meringue pie 
            recipe, you know I don't like wasting egg whites/yolks. If there's a recipe that only uses one of the two, I like to find a complementary recipe that uses the other to 
            avoid waste. For lemon meringue pie, I used the leftover yolks from the meringue for the lemon curd and worked out the ratios to avoid any leftover egg. For this recipe, 
            I thought about how much meringue tastes like marshmallows and how classic of a pairing graham crackers are with chocolate mousse. Thus, the idea for s'mores mousse was 
            born. It's a regular chocolate mousse, but with a graham cracker crumble for texture and a toasty swiss meringue topping to create a deconstructed, fancy s'more.
            </p>
            <p className="story">
            Start by making the mousse. Separate the yolks and whites of the eggs, leaving the whites in a clean, dry bowl at room temperature. Meringues are usually very finicky with me, 
            so I take every step possible to ensure the egg whites are not contaminated with any yolk or grease. A little white in the yolk is okay, a little yolk in the white is catastrophic. 
            Any surface or utenstil that touches the egg white should be cleaned and dried thoroughly, then wiped down with a bit of vinegar to neutralize any residual grease. Add some sugar 
            to the yolks and whisk over a double-boiler until creamy and pale. This dissolves the sugar early and helps avoid turning the yolk into scrambled eggs when it gets hot. Next, melt 
            in the chocolate one piece at a time, stirring to incorporate. The mixture will seize up rather quickly, but a couple tablespoons of cream should loosen it up enough to stir. Once 
            everything is melted and smooth, add a pinch of salt, take off the heat, stir to dissolve it, and let cool.
            </p>
            <p className="story">
            The mousse exists in two parts: the chocolate base, which we just made, and the whipped cream that adds the signature airy texture. The reason we do the chocolate base first is because 
            if you add whipped cream to hot chocolate, it will instantly melt the whipped cream and all that air will be gone. Whip the cream until it turns into, well, whipped cream. You can use 
            beaters if you like, but I prefer keeping them clean for the meringue later to avoid washing them in between steps. Besides, whipping cream by hand isn't that time-consuming, and it makes 
            a nice forearm workout. Once the whipped cream is ready, fold it gently into the chocolate mixture until fully incorporated. I like to add about 1/3 of the cream first and folding quickly 
            just to lighten up the mixture, making it easier to fold in the rest. If I were to add it all at once, the heavy chocolate and the light cream would be harder to mix together, and I'd end up 
            deflating more whipped cream than needed in the folding process. Once the mixture is smooth and uniform, fill your ramekins about 1/3 of the way. We need a lot of space for the crackers and 
            marshmallow fluff, so don't fill them up too much. Besides, the chocolate is the strongest flavor here, so having too much of the ramekin be chocolate would prevent you from tasting any of the 
            other components. The mousse is done, but it needs time to set into a solid dessert, about 3 hours in the fridge should do.
            </p>
            <p className="story">
            While the mousse sets, we can make the marshmallow topping. Marshmallows were originally medicinal confections from Ancient Egypt made from the marsh-mallow plant, but since then, they've 
            evolved into a dessert using sugar, water, air, and protein. When certain proteins are dissolved in water with sugar, it allows them to form stable structures that trap air when whipped. The 
            most common proteins used are gelatin (which replaced the marsh-mallow root, I think mainly due to availability/cost reasons) and albumen (egg whites). Many modern recipes will forgo the albumen 
            altogether, as gelatin works just fine, but this recipe is meant to use leftover egg whites, so we're going to use those instead. For this recipe, I wanted a Swiss meringue. Generally, pies are 
            topped with French meringues (whip egg whites and steadily stream in sugar until stiff), but Italian meringues (whip egg whites and stream in boiling sugar syrup until stiff) create a much more 
            smooth and stable texture, which is why it's often used in marshmallow recipes. However, I'm going a middle route with a Swiss meringue (dissolve egg whites and sugar over a double-boiler, then whip 
            until stiff). It's simpler than an Italian meringue (and doesn't involve pouring boiling hot syrup, a nightmare for someone as clumsy as me), but it provides better texture and stability than a 
            French meringue.
            </p>
            <p className="story">
            For this meringue, take the egg whites you saved from earlier and add a cup of sugar, a pinch of salt, and a bit of some acid. Cream of tartar is typically used, but a capful of white vinegar should 
            do the trick as well. Whisk over a double-boiler until the sugar is fully dissolved. To ensure the safety of your meringue, I like to use an instant-read thermometer. Once it hits 160F, it's good to 
            go. Take it off the heat and beat until soft peaks form. Add the vanilla and continue beating until nearly at stiff peaks. If the meringue doesn't whip up all the way, that's fine, as long as you're 
            able to add a considerable amount of volume and it can hold its shape to some extent. After all, s'mores aren't s'mores without the gooey marshmallow texture, so it doesn't need to be perfectly stiff.
            </p>
            <p className="story">
            Get the mousse out of the fridge and crumble the graham crackers over the top. They will take on some moisture and become a bit more like ladyfingers in a tiramisu than crackers in a s'more, but the 
            texture will be enough to provide some contrast to the smooth mousse and meringue. Still, you want to make sure you're not crumbling this into a powder, as we do want some bite from them. break them up 
            into small enough pieces to get an even distribution, but big enough to still add contrast to the mouthfeel of the dish. Once your crackers are on, gently top it with your meringue. I find it hard to 
            top this without the sticky meringue picking up bits of graham cracker, so technique is key here. We want the layers to remain separated. I like to use a spatula with a bunch of meringue on it and scrape 
            it across the rim of the ramekin, leaving a big chunk of meringue behind on one side of the ramekin. I repeat this process all around the rim until the entire top is covered, then I gently smooth out the 
            very top, making sure not to press down too hard and squish the mousse. If you have a piping bag and prefer to do it that way, even better.
            </p>
            <p className="story">
            To finish the recipe, we need to toast the top of the meringue. If you have a pastry torch, use it. If not, I like using a broiler. Ensure that the rack in your oven is set as high as it can go without 
            risking the meringe touching the top coils. Place your ramekins on a baking sheet and broil for about 60-90 seconds, checking in every 30 seconds to ensure it doesn't burn. If it gets a little charred, that's 
            even better, as it adds to that toasty campfire flavor. Once the mousse is out of the oven, let it cool for a few minutes, then serve. I like plunging my spoon all the way down to the bottom of the ramekin and 
            pulling up a bit of everything in one bite. Chocolate mousse on its own is fancy enough, but once you add a little novelty and a fun topping, it immediately becomes a showstopping dessert perfect for any 
            special occasion.
            </p>
            <p className="story">
            I've tried two iterations of this recipe so far, but I feel like it's not done. The first version was way too chocolate-heavy, so I reduced the amount of mousse in each ramekin and added more graham crackers. The 
            second version was better, but the marshmallow wasn't quite hitting. I think adding gelatin and corn syrup will add some more volume and chewiness to the marshmallow, making it a lot more distinct. Right now, it's 
            just getting lost in the sauce. It just tastes like sugar on top of sugar and isn't bringing its own thing to the table. Another experimental add could be just a hint of liquid smoke to give it more of a campfire 
            feel. It's a risk, but I think it's worth a try, at least in one batch. 2.5 tsp gelatin, 0.25 cup cold water, 0.5 cups sugar, 0.25 cups light corn syrup, rest the same.
            </p>
        </div>
    );
}

export default SmoresMousse;
