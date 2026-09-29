import '../../recipes_style.css';
import '../../bulma.css';
import RecipeLayout from './recipelayout';

const Chimichurri = () => {
    return (
        <RecipeLayout 
        name={'Chimichurri'}
        description={'An Argentinian sauce made with oil and herbs'}
        instructions={
        <div className="content">
        <ol>
            <li>Add dried oregano and red pepper flakes to a bowl and mix with 1 tbsp water to rehydrate</li>
            <li>Mince and crush garlic into a paste using a bit of salt</li>
            <li>Pick off parsley leaves and mince</li>
            <li>If using fresh chilies, de-vein and deseed them, then mince</li>
            <li>Add the garlic and parsley, along with minced chili and black pepper if using, to the bowl with vinegar</li>
            <li>Mix well and add the oil, add a little more salt if needed</li>
            <li>Cover and let sit in the fridge for at least an hour or until ready for use</li>
        </ol>
        </div>
        }
        ingredients={
        <div className="content">
        <ul>
            <li>Bunch parsley leaves</li>
            <li>2 cloves garlic</li>
            <li>1/4 Fresno chili or other red chili (optional)</li>
            <li>1 tbsp red wine vinegar</li>
            <li>1 tbsp water</li>
            <li>2 tbsp extra virgin olive oil or sunflower oil</li>
            <li>Dried oregano</li>
            <li>Red pepper flakes</li>
            <li>Salt</li>
            <li>Black pepper (optional)</li>
        </ul>
        </div>
        }
        story={
        <div className="story">
            <p>
            This is one of the simplest, yet most flavorful sauces I've ever had. I think technically it's a vinaigrette, since it's a blend of oil and vinegar, but normally people 
            think of vinaigrettes as being salad dressing. Chimichurri, on the other hand, is typically used in Argentina as a condiment for grilled meat. The word most likely comes 
            from the Basque word "tximitxurri", meaning "hodgepodge", though there is a fun folk etymology that says it's named after an Irish immigrant named Jimmy McCurry whose name 
            was mispronounced by Spanish speakers.
            </p>
            <p>
            To start, add a few shakes of red pepper flakes and a small heap of dried oregano (about 1 or 2 tablespoon's worth) to a bowl. I like to mix this in a small tupperware as 
            that makes storage easier for later. Add a tablespoon of water to help rehydrate the dried ingredients. A lot of recipes will use hot water to help express the flavors 
            better, but I don't think it's worth it for a small amount of sauce like this. If you're making a batch 4 times this size for a party or something, then heating up a 1/4 
            cup of water makes sense. But going out of your way to warm up a singular tablespoon of water is a bit much in my opinion. Mix well and allow to soak at room temp while 
            preparing the other ingredients. Some people leave this to soak for hours at this step, but again, I find it unnecessary since it's going to be resting for a while after 
            we add the the other ingredients anyway.
            </p>
            <p>
            For the garlic, I recommend mincing fresh garlic, then sprinkling on a pinch of salt. Using the flat of the knife, crush the garlic into a paste. The salt will help 
            chemically and mechanically break it down, making your job much easier. Garlic's signature pungent flavor comes from a compound called allicin, which is formed as a defense 
            mechanism when the garlic is broken down. The more you cut up garlic, the more allicin you get. In addition, smaller pieces of garlic have a higher surface area to volume 
            ratio, maximizing the efficiency of flavor infusion into your food. Therefore, the more we chop and crush it up, the more flavor we get out of our garlic. For the parsley, 
            some people use dried, but dried parsley has absolutely no flavor. You get a better look and taste from getting fresh parsley, picking off the leaves, and finely mincing 
            the leaves for your sauce. Make sure you use flat-leaf parsley, the curly stuff just looks worse and tastes like nothing.
            </p>
            <p>
            At this stage, you can really start making things your own. Though it's not traditional, I've seen some recipes that add a few cranks of black pepper. I don't typically do 
            that since I season my meat directly with pepper anyway, so I feel that it would be redundant. Another optional addition is a fresh red chili. Chimichurri isn't supposed to 
            be very spicy, so traditional recipes don't have this, but I see it in a lot of recipes and I find that it adds a brighter pop of color to the sauce and a little extra heat 
            without being overbearing. I find that Fresno chilies have a noticeable (but not unbearable) heat, a pleasant fruity aroma, and a brilliant red color that works perfectly 
            for this recipe. If you're going to add it, make sure to take out the vein and seeds from the chili to avoid excessive spiciness and mince finely (not into a paste, you still 
            want to see small, bright red pieces in the sauce for that color contrast). You won't need the entire pepper, just 1/4 of a Fresno chili is plenty. 
            </p>
            <p>
            Once your garlic and parsley (and maybe peppers) are added to the soaked seasonings in the bowl, add in a tablespoon of red wine vinegar and mix thoroughly. I find that red 
            wine vinegar has a fruitiness to it similar to balsamic vinegar, but is less sweet and much brighter. This is not only going to cut through the fattiness of the oil, but also 
            give us that mouth-watering effect that acids tend to do. Finally, add in the oil. I personally like extra-virgin olive oil, but a lot of purists will stick to neutral oils 
            like sunflower oil to avoid overpowering the herbs with olive flavor. Personally, I find that because this recipe is lower in oil than most (only 1:2 ratio of vinegar to oil), 
            it still maintains the herbs as the star of the show. Plus, the flavor of olive oil pairs brilliantly with literally everything else we've added which makes it ideal in my 
            opinion.
            </p>
            <p>
            After mixing in the oil, season to taste with a pinch of salt. At this point, the sauce is technically ready, but everyone who has eaten chimichurri knows it's better after 
            it's been given a chance to rest. I keep it in the fridge for freshness for a few hours, but even having it the next day is amazing. This gives time for all the ingredients 
            to mingle and work together, giving you a smoother flavor and texture. Besides, you don't want the smoothness of the sauce to be ruined by dry flakes of oregano. The dried 
            seasonings need time to absorb some liquid and soften up nicely. Although it's designed to be used with grilled meat, it really could go with almost anything, even tofu 
            or a nice roll of bread. A little tip I use to punch up the flavor is to mix in some of the meat drippings right before serving. For instance, if I had baked some chicken breast 
            and some of the juices were left in the pan, I would mix a couple spoonfuls of that to the chimi right before serving. Similarly, if I were pan-searing a steak, I might do the 
            same but with some of the rendered beef fat left behind in the pan. Again, totally optional, but it's just a few of the many ways you can make this incredibly versatile sauce 
            work best for you.
            </p>
        </div>
        }
        />
    );
}

export default Chimichurri;