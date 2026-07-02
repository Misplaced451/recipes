import '../../recipes_style.css';
import '../../bulma.css';
import RecipeLayout from './recipelayout';

const JerkChicken = () => {
    return (
        <RecipeLayout 
        name={'Jerk Chicken Wings'}
        description={'Jerk wings that you can make at home'}
        instructions={
        <div className="content">
        <ol>
            <li>Blend the garlic, ginger, onion, scallion, scotch bonnets, soy sauce, Worcestershire, oil, and the zest and juice of half the lime</li>
            <li>Once smooth, add the sugar, allspice, cinnamon, nutmeg, and thyme and blend. Adjust seasoning to taste</li>
            <li>Season chicken with salt and pepper to taste, then add to a sealable plastic bag</li>
            <li>Pour the marinade into the bag, seal, and massage to coat the chicken thoroughly</li>
            <li>Let rest in the fridge for 12 hours</li>
            <li>Bake in the center of your oven at 350F on a foil-lined baking sheet</li>
            <li>Cook for 15 minutes, flip over, then cook for another 15 on the other side</li>
            <li>While the wings cook, take the leftover marinade and cook it down in a skillet over medium heat</li>
            <li>Once the liquid is reduced and the paste is fully heated through, add the zest and juice of the other half of the lime</li>
            <li>Once combined, turn the heat off and melt in butter half a tablespoon at a time until combined to finish the sauce</li>
            <li>Remove wings from the oven when done and set the oven to broil</li>
            <li>Flip the wings back over and broil for 2 mins on the highest rack in the oven</li>
            <li>Once the wings come out of the broiler, add them to a large bowl and toss with the sauce made from the marinade</li>
        </ol>
        </div>
        }
        ingredients={
        <div className="content">
        <ul>
            <li>2 lbs chicken wings</li>
            <li>4 cloves garlic</li>
            <li>1 inch ginger</li>
            <li>0.5 yellow onion</li>
            <li>3 scallions</li>
            <li>2 scotch bonnet peppers (or habaneros)</li>
            <li>2 tbsp allspice</li>
            <li>1 tbsp soy sauce</li>
            <li>0.5 tsp Worcestershire sauce</li>
            <li>2 tbsp vegetable oil</li>
            <li>1 tsp cinnamon</li>
            <li>0.5 tsp nutmeg</li>
            <li>1 tbsp brown sugar</li>
            <li>1 tbsp thyme</li>
            <li>Salt</li>
            <li>Black pepper</li>
            <li>1 lime</li>
            <li>2 tbsp butter</li>
        </ul>
        </div>
        }
        story={
        <div className="story">
            <p>
            I'll be honest, I've never had jerk chicken before. I've heard so much about it, and I've had "jerk seasoning" on other things, but it's impossible to find authentic 
            Jamaican cuisine near me. The traditional jerk method involves marinating chicken and grilling it over a fire pit with pimento wood, but I don't have access to that.
            So after reading a wide variety of recipes, I found some common flavors and proportions and made my own version that would be easy to make at home. Originally this was 
            written to be made with chicken thighs, but I decided to try it with wings instead and they were so amazing I rewrote the recipe to be jerk wings instead. Although it's 
            not the most authentic by any means, it's a great way to get an ersatz version in your own home. Besides, they're the best chicken wings I've ever had, so do give them 
            a try!
            </p>
            <p>
            The marinade is a blend of garlic, ginger, onion, scallion, scotch bonnet peppers, soy sauce, Worcestershire sauce, oil, and lime zest and juice. Worcestershire isn't 
            used in a lot of recipes I've seen online, but I think it adds a nice umami flavor and some of the caramelized notes you'd get from adding browning sauce, which is 
            more common in Jamaican cooking. I substitute with Worcestershire because it's easier to find in most American supermarkets. Speaking of accessibility, I often use 
            habanero peppers instead of scotch bonnets. You could argue that without scotch bonnets it's not really jerk chicken, but I think the size and heat level are similar 
            enough to habaneros, and both share some fruity flavors, so if you can't find scotch bonnets, habaneros will have to do. I like to take out the seeds and membranes from 
            the peppers before adding them as habaneros can be extremely hot, and I'd like to have my lips intact after eating the first wing. Don't worry, they'll still be plenty 
            spicy, just not unbearably so. If you like less spice, just use one pepper instead. If you want even less spice, don't make this recipe. As an additional tip, because 
            this recipe uses an oven instead of a grill, you can add a couple drops of liquid smoke to stand-in for the natural smoke flavor, but I prefer not to. Most of the wood 
            vinegar sold here is either hickory or applewood, which will taste vastly different than the pimento wood it's supposed to be smoked on.
            </p>
            <p>
            Once your aromatics are blended, add in the brown sugar, allspice, cinnamon, nutmeg, and thyme. Bonus points if you use whole allspice (aka pimento) berries and fresh 
            thyme. Because both allspice and thyme retain a lot of their strength in ground or dried forms respectively, I still usually go with the easier option. Note that when 
            using fresh thyme, the stems are tough and woody, and won't blend very well, so you'll have to pick the thyme leaves yourself. Once the spices are blended in, taste to 
            check if the seasonings are to your liking. This marinade should be hot and sweet with an acidic tang, a mellow allium flavor, and strong notes of allspice and thyme. 
            If you find that the allspice or thyme are lacking in strength, add a little more to your preference.
            </p>
            <p>
            After the marinade is done, season the chicken wings generously with salt and pepper. I prefer adding these to the chicken rather than the marinade because when seasoning 
            to taste, it's easier to estimate how much salt you'll need when seasoning the food directly. I then add them to a resealable plastic bag and pour in the marinade. I get in 
            there with my hands and rub down the wings thoroughly, ensuring that any part that can be coated will be coated fully. Once the bag is sealed, it goes in the fridge for 12 
            hours. I know that's a long time to wait, but it's absolutely necessary for the chicken to absorb the flavor and to become tender. Once you see how juicy and soft the meat 
            becomes, you won't want to go any shorter. Waiting longer than 12 hours isn't really useful with pieces of meat this small, so I would cap it at 12 hours if possible.
            </p>
            <p>
            Now that the chicken is ready, preheat the oven to 350F and place your wings on a foil-lined baking sheet. Some of the marinade should still be coating the chicken, but most 
            of it should still be left in the bag. That's okay, we'll put it to good use. Bake the wings in the center of the oven for 15 minutes on either side. This will give you plenty 
            of time to turn the leftover marinade into sauce. In a skillet over medium heat, cook the marinade until most of the water evaporates out and some of the sugars begin to 
            caramelize slightly. Not only does cooking the marinade develop the flavors and take out some of that harsh bite, it also kills off any salmonella that may have come from the wings. 
            At the end of this process, you should be left with a delicious spice paste. Add in the zest and juice of the other half of the lime from before and mix until the mixture is a bit 
            looser. A taste test should reveal that this sauce is very bright and acidic from the extra lime. This will make the wings extra mouth-watering. Turn off the heat, season with black 
            pepper to taste, and melt in the butter half a tablespoon at a time, stirring to combine. Adding the butter slowly allows you to incorporate it a little more easily.
            </p>
            <p>
            Once the wings are done on both sides, they should have some wonderful color on them. Flip them back over and set your oven to broil. Put the wings in the top rack of the oven and 
            let it go for 2 minutes to develop a really nice char. This is meant to mimic the kind of char you'd get from grilling, but obviously it won't be the same. Take them out of the oven 
            and toss with the buttery jerk sauce in a large bowl. If you have an extra scallion, slice the greens thinly on a bias (at a steep diagonal angle) and use as a garnish when serving 
            your wings. The end result are wings that are spicy, sweet, bright, smoky, and crispy on the outside, but then juicy and buttery right down to the bone. What more could you ask for?
            </p>
        </div>
        }
        />
    );
}

export default JerkChicken;
