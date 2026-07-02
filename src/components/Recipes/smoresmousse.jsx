import '../../recipes_style.css';
import '../../bulma.css';
import RecipeLayout from './recipelayout';

const SmoresMousse = () => {
    return (
        <RecipeLayout 
        name={'S\'mores Mousse'}
        description={'Chocolate mousse fused with a campfire classic'}
        instructions={
        <div className="content">
        <ol>
            <li>Separate whites and yolks of eggs, leave whites in a clean bowl at room temp</li>
            <li>Whisk yolks and 0.25 cups sugar over a double-boiler until smooth and pale</li>
            <li>Melt in chocolate, using a couple tbsp of cream to loosen, mix until incorporated</li>
            <li>Stir in a pinch of salt, take off the heat, and stir until cooled slightly</li>
            <li>Whip the cream until stiff peaks, then fold into the chocolate mixture</li>
            <li>Fill ramekins about 1/3 of the way with mousse, let set in the fridge for 2 hrs</li>
            <li>Add 1/4 cup cold water to a bowl, and sprinkle in the gelatin powder, let it bloom for 10 mins</li>
            <li>Melt gelatin over a double-boiler until no solid particles of gelatin remain</li>
            <li>Take off the heat, mix in a pinch of salt, 0.75 cups sugar, and corn syrup</li>
            <li>Once combined, add the egg whites and a splash of vinegar, stir to combine</li>
            <li>Whisk over a double-boiler until the sugar fully dissolves and the temperature reads 160F</li>
            <li>Take off the heat and beat until almost at soft peaks (10-15 mins on high)</li>
            <li>Add vanilla extract and whip until fully combined</li>
            <li>Crumble graham cracker over mousse</li>
            <li>Gently top the mousse with marshmallow and let set in the fridge for 30 mins</li>
            <li>Torch or broil the tops of the mousse until desired toastiness is achieved. If broiling, let the ramekins cool for a few mins before serving</li>
        </ol>
        </div>
        }
        ingredients={
        <div className="content">
        <ul>
            <li>6 graham crackers</li>
            <li>3 large eggs</li>
            <li>4 oz semi-sweet chocolate</li>
            <li>1 cup heavy cream</li>
            <li>1 cup sugar</li>
            <li>1 tsp vanilla extract</li>
            <li>1 tsp vinegar</li>
            <li>0.25 cups light corn syrup</li>
            <li>2.5 tsp unflavored gelatin powder</li>
            <li>Pinch salt</li>
        </ul>
        </div>
        }
        story={
        <div className="story">
            <p>
            Chocolate mousse is one of the simplest, most luxurious desserts in history. Mousse literally means "foam" in French, so the dessert could be anything that involves whipping air into 
            something that can hold its shape. Although you could flavor a mousse with anything, chocolate is one of the most popular, and for good reason. On its own, chocolate is rich and dense, 
            so having melted chocolate for dessert would be too much for most palates. By incorporating air, however, you create an incredibly fluffy, delicate mouthfeel that then melts into pure 
            chocolate flavor. The contrast between light, airy texture and dark, rich flavor is the core of this amazing dessert. Naturally, I wanted to learn how to make one myself, and I found 
            all kinds of methods, involving whipped cream, egg whites, or both. I even found one by Herve This that's just chocolate and hot water! I ended up making a recipe using a common technique 
            that involves mixing egg yolks into the chocolate then folding it into whipped cream, but that left behind a bunch of egg whites. I didn't want to waste them, so I thought about how I 
            could make something with them that would pair with chocolate. Once I saw someone pair chocolate mousse with graham crackers, I thought to myself "Hey, that's just one marshmallow short 
            of a s'more!" And then I had an idea. I remembered from my lemon meringue pie recipe that meringues aren't that much different than marshmallows in terms of ingredients, so I figured 
            if I made marshmallow fluff out of the leftover egg whites, I could put every component of a s'more into a ramekin. A smooth layer of chocolate mousse on the bottom, a layer of crumbled 
            graham cracker in the middle, and a toasted layer of gooey marshmallow fluff on top. 
            </p>
            <p>
            Start by making the mousse. Separate the yolks and whites of the eggs, leaving the whites in a clean, dry bowl at room temperature. Meringues are usually very finicky with me, 
            so I take every step possible to ensure the egg whites are not contaminated with any yolk or grease. A little white in the yolk is okay, a little yolk in the white is catastrophic. 
            Any surface or utenstil that touches the egg white should be cleaned and dried thoroughly, then wiped down with a bit of vinegar to neutralize any residual grease. Add a quarter cup of 
            sugar to the yolks and whisk over a double-boiler until creamy and pale. A double boiler is just a fancy way of saying to put a little water in a pot over high heat, then place a 
            heat-safe mixing bowl on top. The bottom of the bowl should not touch the water, but the steam from the boiling water should gently heat the bowl and its contents. The reason why we do 
            this is to warm things up as gently as possible to avoid curdling any delicate ingredients or splitting an emulsion. When your yolk mixture has no grains of undissolved sugar and appears 
            to have increased in volume, add in the chocolate one piece at a time, stirring to incorporate. Once the chocolate melts, you may notice it becoming very difficult to stir. Add a quarter 
            cup of cream and fold in a little at a time until the mixture is homogenous and smooth. Add a pinch of salt, take off the heat, and let cool on the counter.
            </p>
            <p>
            Now that the chocolate part is done, we need the actual mousse part of it, for which we need to make our own whipped cream. The reason we do the chocolate base first is because 
            if you fold whipped cream into hot chocolate, it will instantly melt the whipped cream and all that precious air will be gone. Whip the cream until it turns into, well, whipped cream. 
            You can use beaters if you like, but I prefer keeping them clean for the meringue later to avoid washing them in between steps. Besides, whipping cream by hand isn't that time-consuming, 
            and it makes a nice forearm workout. Be careful not to whip too much, or you might end up with butter. Fresh whipped cream will look just like the canned stuff from the store, but a bit 
            softer-looking and less dry. Once the whipped cream is ready, fold it gently into the chocolate mixture until fully incorporated. I like to add about half of the cream first and folding 
            quickly just to lighten up the mixture, making it easier to fold in the rest. If I were to add it all at once, the heavy chocolate and the light cream would be harder to mix together, 
            and I'd end up deflating more whipped cream than needed in the folding process. Once the mixture is smooth and uniform, fill your ramekins about 1/3 of the way. This recipe is good for 6 
            ramekins. We need a lot of space for the crackers and marshmallow fluff, so don't fill them up too much. Besides, the chocolate is the strongest flavor here, so having too much of the 
            ramekin be chocolate would prevent you from tasting any of the other components. The mousse is done, but it needs time to set into a solid dessert, about 2 hours in the fridge should do.
            </p>
            <p>
            While the mousse sets, we can prep the graham cracker crumble. I thought about making my own crackers for extra fancy points, but I think the flavor would be too hard to replicate, 
            especially since the concept of this dish is abstracted enough from a regular s'more. In other words, there's no need to complicate it further, or else we might lose the essence of that 
            classic s'more taste we want in this dish. Also I was lazy. Regardless, take 6 graham crackers and crumble them up. You can put these in a bag and crush them with a rolling pin, but I 
            like breaking them by hand to get more control over the texture. It's important to get a little variety in there. Too small, and it becomes very sandy. Too big, and you don't get even 
            coverage. you want small shards a bit bigger than a pea with a few smaller pieces as well to help fill in the gaps. Once your crackers are crumbled, set them aside until the mousse is 
            ready. I don't crumble them on right away, as the moisture from the mousse will render them soggy too fast. It's a bit easier to get the assembly done after the mousse has had a chance 
            to set a bit.
            </p>
            <p>
            The only part remaining now is the marshmallow. Marshmallows were originally medicinal confections from Ancient Egypt made from the marsh-mallow plant, but since then, they've evolved 
            into a dessert using sugar, water, air, and protein. When certain proteins are dissolved in water with sugar, it allows them to form stable structures that trap air when whipped. The 
            most common proteins used are gelatin (which replaced the marsh-mallow root, I think mainly due to availability/cost reasons) and albumen (egg whites). Many modern recipes will forgo 
            the albumen altogether, as gelatin works just fine, but this recipe is meant to use leftover egg whites, so we're going to go with both. For this recipe, I wanted a Swiss meringue. 
            Generally, pies are topped with French meringues (whip egg whites and steadily stream in sugar until stiff), but Italian meringues (whip egg whites and stream in boiling sugar syrup 
            until stiff) create a much more smooth and stable texture, which is why it's often used in marshmallow recipes. However, I'm going a middle route with a Swiss meringue (dissolve egg 
            whites and sugar over a double-boiler, then whip until stiff). It's simpler than an Italian meringue (and doesn't involve pouring boiling hot syrup, a nightmare for someone as clumsy as 
            me), and it provides better texture and stability than a French meringue.
            </p>
            <p>
            To make the marshmallow fluff, start by blooming the gelatin. This means taking a quarter cup of cold water and sprinkling the gelatin powder evenly on top. The granules will absorb water 
            and set into a solid gel. They call it "blooming" because of the way the proteins swell up to take on water. Once the gelatin is ready (after about 10 mins), melt it over a double-boiler 
            until there are no solid particles left. Take it off the heat and mix in a pinch of salt, the corn syrup, and the remaining 3/4 cups of sugar. The corn syrup is important here, as it 
            prevents the sugar from crystallizing and gives the marshmallow a more soft, gooey texture. Once everything is combined, add in the egg whites and a splash of vinegar (the acid helps 
            stabilize the meringue). Whisk this mixture over a double-boiler until the sugar is fully dissolved and the temperature reaches 160F. Once it's at temperature, take it off the heat and 
            beat on high until you reach floppy peaks (about 10-15 mins). Add in the vanilla extract and whip until fully combined. I got the method for making marshmallow fluff like this from Claire 
            Saffitz, but I adjusted the amount of sugar and corn syrup to get more volume and a texture better suited for this recipe. When you finish the marshmallow, you'll have to work quickly, 
            as the marshmallow will set surprisingly fast as it cools, making it harder to spread. For this reason, I like to start blooming the gelatin about 30 mins before the mousse is done setting, 
            to give me just enough time to get the marshmallow done while reducing as much downtime as possible.
            </p>
            <p>
            Get the mousse out of the fridge and sprinkle the graham crackers over the top. They will take on some moisture and become a bit more like ladyfingers in a tiramisu than crackers in a 
            s'more, but the texture will be enough to provide some contrast to the smooth mousse and meringue. Once your crackers are on, gently top it with your meringue. I find it hard to top this 
            without the sticky fluff picking up bits of graham cracker, so technique is key here. We want the layers to remain separated. I like to use a spatula with a bunch of marshmallow on it and 
            scrape it across the rim of the ramekin, leaving behind a big chunk of the topping to cover some of the mousse. I repeat this process all around the rim until the entire top is covered, 
            then I gently smooth out the very top, making sure not to press down too hard and squish the mousse. If you have a piping bag and prefer to do it that way, that could work too, but I find 
            that this method is quick enough.
            </p>
            <p>
            You might notice the gelatin beginning to turn the marshmallow from a soft meringue to a jiggly marshmallow as you work, but the setting process will still require a bit more time. Place 
            the finished mousse back in the fridge for about 30 mins. To complete the recipe, we need to toast the top of the meringue. If you have a pastry torch, use it. If not, I like using a broiler. 
            Ensure that the rack in your oven is set as high as it can go without risking the marshmallow touching the top coils. Place your ramekins on a baking sheet and broil for about 60-90 seconds, 
            checking in every 30 seconds to ensure it doesn't burn. If it gets a little charred, that's even better, as it adds to that toasty campfire flavor. Once the mousse is out of the oven, take 
            it off the baking sheet and let it cool for a few minutes. You want to make sure the ramekins rest on a cool surface (not cold, as the temperature shock might crack the ramekin) as quickly 
            as possible, as the residual heat might melt the mousse. Once the ramekins feel safe to the touch, you can put them back in the fridge until ready to eat, or just eat them right away if you 
            can't wait. I like plunging my spoon all the way down to the bottom of the ramekin and pulling up a bit of everything in one bite. Chocolate mousse on its own is fancy enough, but once you 
            add a little novelty and a fun topping, it immediately becomes a showstopping dessert perfect for any special occasion.
            </p>
        </div>
        }
        />
    );
}

export default SmoresMousse;
