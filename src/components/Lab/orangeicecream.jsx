import '../../recipes_style.css';
import '../../bulma.css';

const OrangeIceCream = () => {
    return (
        <div className="pt-6 section recipe">
            {/* Intro */}
            <div className="has-text-centered section pt-0">
                <h1 className="has-text-weight-bold is-size-3">Spiced Orange Ice Cream</h1>
                <p className="subtitle">Fresh citrus ice cream with no machine (yes, it is possible)</p>
                <p className="subtitle has-text-danger">WORK IN PROGRESS - RECIPE INCOMPLETE</p>
            </div>
            
            <div className="columns mb-6 has-background-light">
                {/* Instructions */}
                <div className="column">
                <h4 className="subtitle has-text-centered-mobile">Instructions</h4>
                <div className="content">
                <ol>
                    <li>Add cream, orange zest, cinnamon, and a small pinch of salt to a pot and heat until around 100F</li>
                    <li>Let it steep the flavor over low heat for about 10 mins before transferring to an airtight container</li>
                    <li>Refrigerate the infused cream while the other ingredients are being prepped</li>
                    <li>Juice the orange until you get about 0.5 cup orange juice. If it's not enough, use another orange until you get the right amount</li>
                    <li>Add the juice with 1/8 tsp baking soda to a small mixing bowl. Stir vigorously and wait for the wispiness on the top to dissipate</li>
                    <li>Meanwhile, disperse the xanthan gum in your sugar by mixing in a small bowl until there are no clumps of gum visible</li>
                    <li>Slowly add the sugar-gum mix to the juice, stirring until it forms a syrup</li>
                    <li>Stir in the evaporated milk and vanilla extract to get sweet orange milk</li>
                    <li>Leave the cream, orange milk, a very large mixing bowl, a medium mixing bowl, and an electric whisk attachment in the freezer for a couple hours</li>
                    <li>Fill the large bowl with ice, salt very heavily, then add some cold water to help create a cold bath. The ice water should be extremely salty</li>
                    <li>Immediately add the medium bowl in the ice bath and add the cream. Whip the cream until fluffy before slowly streaming in the milk mix</li>
                    <li>Whisk on low until homogenous and it doesn't appear to be getting any fluffier</li>
                    <li>Cover with plastic wrap and freeze overnight</li>
                    <li>The following morning, the cream should be solidified. Whisk again until the ice crystals are broken up and dispersed, but still present. It should look like soft serve</li>
                    <li>Immediately transfer to an airtight container and freeze for another 8 hours until fully set</li>
                </ol>
                </div>
                </div>
                
                {/* Ingredients */}
                <div className="column is-4-desktop has-background-grey-lighter">
                <h4 className="subtitle has-text-centered-mobile">Ingredients</h4>
                <div className="content">
                <ul>
                    <li>2 cups heavy cream</li>
                    <li>0.5 cups evaporated milk</li>
                    <li>125g brown sugar</li>
                    <li>0.5 tsp vanilla extract</li>
                    <li>0.5 tsp cinnamon</li>
                    <li>0.25 tsp clove</li>
                    <li>0.125 tsp baking soda</li>
                    <li>0.25 tsp xanthan gum</li>
                    <li>Salt</li>
                </ul>
                </div>
                </div>
            </div>
            
            {/* About the recipe */}
            <h4 className="subtitle has-text-centered is-4">Story Time</h4>
            <p className="story">
            I love orange flavored things. Every year for my birthday I have an orange cake. I'm not sure where that tradition started, especially since you hardly ever see orange 
            cakes in bakeries, but I love it. I think oranges are the best citrus fruit. Not quite as sour as lemons and limes, not as bitter as grapefruit, but a nice balance in 
            between with a lovely sweetness. I think we need more orange desserts, and I certainly think we need more orange ice cream. Citrus ice creams aren't traditional flavors, 
            since citric acid will curdle the milk and ruin the taste. But with modern chemistry, we have no excuse. I set out to make a recipe that would not only get the fresh 
            orange taste from every part of the orange, but also be guaranteed not to curdle. And I didn't bother buying an ice cream machine for this, so I had to churn it by hand. 
            This method takes a great deal of patience, so if you have a machine, feel free to use that instead.
            </p>
            <p className="story">
            The proportions for this recipe were based on Adam Ragusea's recipe for vanilla ice cream without a machine. This is a Philadelphia-style ice cream, so it doesn't use a 
            custard base. This means it's egg-free and saves you the step of tempering the custard before mixing. Instead, we start with 2 cups of heavy cream in a pot. Most of the 
            orange flavor is going to be stored in the essential oils of the peel, so the high fat content of the cream is going to be perfect to get those oils spread evenly through
            our base. Using a microplane, zest one full navel orange, taking care not to get any of the bitter white pith. The peel is already bitter enough and will balance the 
            sweetness nicely on its own, so adding the pith will make it overly bitter without contributing more flavor. Turn the stove to medium heat. The additional heat helps 
            extract the flavor more efficiently. At this stage, I like to add a little cinnamon and clove. Don't worry, as strong as they are, this isn't enough to overpower the orange. 
            They're just my secret ingredients that add a little warmth and earthiness that really complements the orange well. If you've ever had orange spice tea, you'll know what I 
            mean. It's a rather common herbal tea made from orange peel and warm winter spices, typically cinnamon and clove, which is why I've added them here. Get the cream up to 
            over 100F, or until it feels warm but not hot when you dip a finger in. Stir regularly as well with a rubber spatula to prevent the cream on the bottom from scalding while 
            the spices just float on top. Keep stirring over low heat, keeping the temperature under control for about 10 minutes. Add a little pinch of salt and dissolve. It might 
            smell pretty good at this stage, but on a taste test it'll seem like warm milk, fat, salt, and the slightest hint of the flavorings we've added. This isn't ideal, but 
            don't worry. Once this has some time to rest and we incorporate the sugar and other ingredients it'll taste a whole lot better. Transfer to an airtight container and cool 
            off in the fridge until ready to use.
            </p>
            <p className="story">
            Now for the impossible task of making orange milk. The thing that makes orange curdle dairy is citric acid. The acidity causes the proteins to coagulate, leading to the 
            curdled texture. It's not really harmful, but not what we want from our ice cream. So all we have to to fix it is... take the acid out. It sounds impossible to remove 
            citric acid from citrus fruit, but it's much easier than you think. Acid gets neutralized in the presence of a base, so all we need to do is add something with high 
            alkalinity and it should destroy the acid while leaving the rest of the flavor intact. In the kitchen, baking soda is typically what we add to increase the pH of 
            something. And if you mix baking soda (calcium carbonate) with citric acid, you get three byproducts: sodium citrate, water, and carbon dioxide. Sodium citrate is a 
            common food additive used for emulsification, pH buffering, and flavoring. I'm not sure if the amount generated in this recipe will be enough to affect our ice cream much, 
            but it certainly won't hurt it. The water that is generated will be fine, as it won't be enough to noticeably dilute the juice or affect the formation of the ice crystals. 
            The carbon dioxide is something we don't really want, but that'll get released in the form of gas anyway so it's not a problem. For half a cup of orange juice, 1/8 teaspoon 
            of baking soda will be enough to raise the pH. Stir vigorously to ensure all the base mixes with as much acid as possible and to release the tiny CO2 bubbles. It probably 
            won't bubble or fizz much, but you may notice some wisps of white foam trailing on the top. Wait a minute or so for the reaction to finish. If the wisps don't all disappear, 
            that's okay, they'll get released when we add the sugar.
            </p>
            <p className="story">
            Speaking of sugar, now is the time to prepare it. In a small bowl, add your sugar and a quarter teaspoon of xanthan gum. I use brown sugar in this recipe for flavor, color, 
            and to complement the warmth of the spices we added to the cream. Xanthan gum isn't a common household ingredient, but can be found online for relatively cheap prices. 
            Xanthan gum is basically sugar that's been fermented to have different chemical properties. It's perfectly food safe, and in fact, it's considered one of the greatest 
            inventions in modern food science history due to its ability to thicken liquids and stabilize emulsions at tiny concentrations without altering flavor or using any 
            animal-derived products. Salt & Straw, one of the most famous ice cream shops in the US, uses xanthan gum in every ice cream base because it turns the water into a gel and 
            inhibits the formation of large ice crystals resulting in a creamy, easily-scoopable texture, even with just a 1/4 teaspoon. It's especially good in this kind of recipe, 
            since Philadelphia-style ice creams aren't thickened with egg yolk and can be more prone to getting a little too icy. Besides, using half juice and half evaporated milk has 
            more water than just plain evaporated milk, so we need all the help we can get. I could have just used a full cup of evaporated milk instead of replacing half of it with juice, 
            but I figured it would help improve the flavor and color, as the orange is rather subtle even with the infused cream. Orange extract could have done the job, but I wanted the 
            ice cream to have the whole orange in it. Regardless, the xanthan gum can be hard to dissolve in water because of its tendency to clump up, so many people suggest dispersal. 
            You could use an immersion blender, but I find that to be a bit tedious. You could disperse it in a fat like oil or butter to help spread it out so it won't clump when you 
            add it to water. But in this recipe, we're going to disperse it in the sugar. Stir the gum into the sugar until you no longer see any clumps. This is another reason why brown 
            sugar is helpful; it's easier to see when the white gum is fully dispersed.
             
            </p>
            <p className="story">
            Once your sugar is ready, add it to the juice a little at a time. Stirring constantly, dissolve it gradually into the juice until it forms a syrup. You may hear a fizz at 
            first as the addition of the sugar helps release the rest of the CO2 gas. I'm not sure why this happens, but I think it may be that the sugar increases the weight of the liquid, 
            causing the gas to rise to the top faster. Or perhaps there's some chemistry at hand that I'm unaware of. Either way, get your sugar and gum dissolved as much as possible. 
            Now you can add the evaporated milk. Stream it in slowly and stir regularly as you did with the sugar to get it all incorporated. The additional liquid will also help dissolve 
            any errant bits of sugar. You can also add the vanilla extract at this stage. It's not enough to really stand out, but it does add a little extra something to round out the 
            flavors and aromas, which is why it's added to a lot of ice cream bases, even ones that aren't strictly vanilla-flavored. You could also add a splash of orange extract if you 
            really want to bolster that orange flavor, but I find it unnecessary.
            </p>
            <p className="story">
            Now that the cream and milk mixtures are ready, we can start making ice cream. But first, we need to make sure our ingredients are as cold as possible. I like to keep them 
            along with the bowls and whisk attachments in the freezer for 2 hours before starting to churn. However, if using an ice cream machine, just combine the milk and cream now and 
            follow the directions on the machine to finish the recipe. If you want, you can use this time to prepare your ice bowl as well. In a very large bowl, add a bunch of ice cubes 
            and cover them in salt. I like to also add some water in there as well so that the ice bath comes up the sides of the bowl more easily and provides more even cooling. If you're 
            going the water route, add some more salt. You want it to taste practically like seawater. The reason we add so much salt is to drop the temperature and depress the freezing 
            point of the water. This means that we can have slushy water below 30F which will be all the better for keeping our ice cream cool. Store in the freezer until ready, provided 
            you have the requisite freezer space. 
            </p>
            <p className="story">
            When everything has been cooled down nicely, it's time to get to work. It's important to work quickly to prevent things from heating up too much. Pour the cream into a medium 
            sized mixing bowl and nestle it in the ice bath made earlier. I don't bother straining out the zest as it will add a little more flavor, color, and visual contrast in the final 
            product. I think it's kind of cool to show off that your ice cream uses natural ingredients for its primary flavor. Using an electric mixer, whip it until it becomes fluffy. 
            You could go as far as soft peaks at this stage, but you don't need to. Once you've incorporated some air into the cream, stream in the orange milk mix, constantly whipping 
            until combined. You can theoretically do this by hand but it would take way too long. Don't be a hero, save yourself the time. At this stage, if you find that the pale brown 
            color isn't ideal, you can add food coloring as desired. I like the natural look better, as it feels a little more rustic and allows the zest to have a nice color contrast. 
            Continue whipping until it feels like you're unable to incorporate any more air. At this point it should have increased quite a bit in volume and have a very light texture. 
            Many people don't realize it, but air is one of the most important ingredients in ice cream. In fact, ice cream is often between 20-50% air by volume. Not only does it keep 
            the texture from getting too dense, having tiny air bubbles throughout the mix helps keep it soft. This is why churning is so important and is worth the patience. Components 
            in the ice cream like fat, sugar, and xanthan gum help increase the viscosity which help keep the air bubbles very small and very stable. Once the air has been incorporated, 
            cover with plastic wrap and let sit in the freezer until set. This will take several hours depending on the temp of your freezer, but I like to go overnight just to be safe.
            </p>
            <p className="story">
            The following morning, the ice crystals should have formed and the mix should be relatively solid, but still very soft and creamy. Working quickly to prevent the little crystals 
            from melting, get the bowl with the mixture back into the ice bath and whip again. This will break up any larger ice crystals and disperse them more evenly. After a couple minutes,
            once it looks like very soft soft-serve (but certainly not melted or very liquidy), immediately transfer to an airtight container, using a rubber spatula to scrape out every last 
            drop and to spread the ice cream evenly in its container. Seal and keep in the freezer until set again, at least 8 hours. Although it's an arduous process that requires a lot of 
            freezer space and time, it's pretty hard to get ice cream like this anywhere else. Seriously, more people need to realize how good orange ice cream is! In my research for this 
            recipe, I could hardly find anyone making ice cream out of oranges, just sorbets. I did however, find an ice cream called "tiger tail", which is a Canadian ice cream flavor that 
            was last popular in the 1970s. The name comes from the orange flavor of the ice cream and the black licorice swirl that runs through it, remniscient of the patterns on tiger fur. 
            That's the kind of creativity and fun that I want to see brought back into vogue at my local ice cream shop or in the freezer section of my grocery store. But until then, we'll 
            have to settle with experimenting with flavors of our own.
            </p>
            <p className="story">
            I liked the flavor, but I feel that it needs a blind taste test from someone who doesn't know what I've added. Is it too subtle? Does it need more spices? Is the texture off? How 
            does it hold up over extended periods in the freezer? I need a second opinion before I finalize the recipe. Also, since the ice cream is missing the orange's tang, I'm thinking 
            about using sour cream instead of evaporated milk to maybe add some acidity back in without risking the curdling.
            </p>
        </div>    
    );
}

export default OrangeIceCream;
