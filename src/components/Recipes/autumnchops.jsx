import '../../recipes_style.css';
import '../../bulma.css';

const AutumnPorkChops = () => {
    return (
        <div className="pt-6 section recipe">
            {/* Intro */}
            <div className="has-text-centered section pt-0">
                <h1 className="has-text-weight-bold is-size-3">Autumn Pork Chops</h1>
                <p className="subtitle">Sweet and savory pork chops with classic Fall flavors</p>
            </div>
            
            <div className="columns mb-6 has-background-light">
                {/* Instructions */}
                <div className="column">
                <h4 className="subtitle has-text-centered-mobile">Instructions</h4>
                <div className="content">
                <ol>
                    <li>Heat the cream and milk until at 200°F, stirring occasionally</li>
                    <li>Salt pork chops and set aside for an hour</li>
                    <li>Blend ginger with a splash of water and a pinch of salt</li>
                    <li>Cover pork with ginger marinade, let sit 3 hrs</li>
                    <li>Clean off ginger and pat completely dry</li>
                    <li>Place a few incisions along the fat cap and season with black pepper</li>
                    <li>Cook on high heat with a bit of oil until seared and it reaches an internal temp of 145F</li>
                    <li>Set chops aside to rest, turn the heat down, and add butter with a whacked garlic clove</li>
                    <li>Once the butter browns, remove the garlic and add the sage</li>
                    <li>When the sage begins to crisp, remove it and deglaze with brandy and apple cider vinegar, scraping the fond as you go</li>
                    <li>Reduce the vinegar to minimize the pungent fumes, then add maple syrup, paprika, red pepper flake, and a hint of cinnamon</li>
                    <li>Add Dijon to a small bowl, add a bit of sauce to it and mix to temper before adding it back to the pan</li>
                    <li>Cook until a cohesive sauce forms that coats the back of a spoon</li>
                    <li>Serve with pork chops sliced against the grain and garnish with chopped crispy sage</li>
                </ol>
                </div>
                </div>
                
                {/* Ingredients */}
                <div className="column is-4-desktop has-background-grey-lighter">
                <h4 className="subtitle has-text-centered-mobile">Ingredients</h4>
                <div className="content">
                <ul>
                    <li>2 thick-cut pork chops</li>
                    <li>0.25 cups apple cider vinegar</li>
                    <li>0.25 cups brandy (optional)</li>
                    <li>1 tbsp maple syrup</li>
                    <li>3 tbsp butter</li>
                    <li>1 clove garlic</li>
                    <li>1 tbsp Dijon mustard</li>
                    <li>Ginger</li>
                    <li>Smoked paprika</li>
                    <li>Fresh sage</li>
                    <li>Cinnamon</li>
                    <li>Salt</li>
                    <li>Pepper</li>
                    <li>Red pepper flakes</li>
                    <li>Vegetable oil</li>
                </ul>
                </div>
                </div>
            </div>
            
            {/* About the recipe */}
            <h4 className="subtitle has-text-centered is-4">Story Time</h4>
            <p className="story">
            The first time I cooked pork chops, they were dry and tough. Part of it was because I was too scared to cook them below well-done, but also because pork chops are fairly 
            lean, and are therefore prone to drying out. Unlike steaks, however, pork has a very unique flavor profile that lends itself well to everything from sweet and sour sauce 
            to barbecue to fruits like apples and oranges. I tried my hand at making an orange sauce pork chop, but I wasn't impressed with the results, so I went with a different 
            approach. I find that because pork plays nicely with a lot of warm, earthy flavors and apples, it would be perfect for a Fall-themed dish. The recipe you see here is the 
            result of that idea, combining a ginger marinade with an Autumn-inspired sauce that's equal parts sweet, acidic, savory, spicy, and unctuous. 
            </p>
            <p classname="story">
            First we start with preparing our pork. You want to get thick cut chops, the thin ones will cook too fast and dry out. It doesn't matter what kind you get, whether center 
            cut or loin chops, but I prefer any boneless chop with the fat cap still on. Because of the health risks of undercooked pork, it's important to cook these to an internal 
            temp around 145F before resting, which is about 15 degrees hotter than the standard for medium-rare steak. This means we need to ensure that we tenderize the meat as much 
            as possible before cooking, to ensure it stays soft and juicy. I use a combination of two factors: dry brining and zingibain tenderization. That's just a fancy way of saying 
            that I salt the pork chops for an hour in the fridge to let it season the meat down to the center (and denature the proteins on the surface a bit), and I blend up some fresh 
            ginger with a bit of water and a small pinch of salt to make a slurry to leave the chops in for another 2-3 hours in the fridge. When salting, always season both sides, and 
            ensure that the ginger slurry makes full contact with every inch of the pork's surface. Ginger contains an enzyme called zingibain that breaks down proteins, turning the 
            toughest cuts of meat tender with prolonged contact. Plus, ginger has a warm, earthy flavor and a pungency that increases saliva production. Believe it or not, a noticeable 
            amount of the juiciness from meat actually comes from saliva, which is where the myth of searing "sealing in the juices" comes from. It doesn't do that. What it does do is 
            create complex savory flavors and a more appetizing look, making your mouth juicier when the bite goes in. It's kind of a gustatory illusion, but it works wonders.
            </p>
            <p classname="story">
            Once your pork is done tenderizing, wipe off all the ginger with a wet paper towel and pat the chops completely dry. Surface moisture is the enemy of a good sear. Make 
            about 3 incisions along the fat cap ( perpendicular to the direction of the fat cap, distributed evenly across the entire cap, cutting all the way through it) to prevent 
            the classic pork chop curl when cooking. Season with some black pepper to taste and get a stainless steel pan ripping hot over high heat. You'll know it's ready when some 
            water flicked onto the pan begins to bead up and skitter around the pan while evaporating. Coat the pan with a thin layer of vegetable oil and add in the chops. Sear both 
            sides, flipping every 30 seconds or so, until you get a good crust. Make sure to sear the fat cap as well. Using an instant-read thermometer, check the internal temp and 
            pull at 145F. I pull my chops around 140F, because the carryover cooking is long enough to minimize safety risk without risking overcooking.
            </p>
            <p className="story">
            Everything we've done up until this point is the prelude to the real recipe. Anyone can sear up pork chops in any number of ways and get fairly similar results. The pan sauce 
            is what makes it special. Once your pork is out, turn down the heat to medium and let the pan cool down a bit so it's not smoking hot. Then add butter into the pan, letting it 
            emulsify with the rendered pork fat. Whack a clove of garlic with your knife and add it into the butter to perfume the oils. It's okay to leave the skin on the garlic, as 
            that will make it easier to pull it out after we're done with it. Cook the butter until it starts to brown (the pan should still be quite hot, so this shouldn't take long) 
            and fish out the garlic. Add in a handful of fresh sage leaves and let them crisp up and release their aromas into the pan as well. Once they look a bit spent, fish them out 
            as well, chop them up, and save them for the garnish. With our butter perfumed and browned, we're ready for the liquid. Turn OFF the heat and add some brandy before turning 
            the heat back on (if you accidentally spill a bit of liquor on an open flame, you're not going to like what happens next). Let the fumes of the alcohol dissipate for a bit 
            and scrape off the fond that had developed on the bottom of the pan from the pork chops. Once the initial pungency of the alcohol evaporates, add the apple cider vinegar. I 
            don't like adding both at once, because the fumes of liquor and vinegar are a surprisingly good imitation of the reek of a drunk person vomiting. Let the fumes evaporate as the 
            liquids reduce. I find that the brightness and vanilla-oaky taste of brandy rounds out the sauce nicely, but if you want to omit the alcohol altogether, that's fine, just replace 
            it with water and add the vinegar right away. Replacing the brandy with chicken stock would be a great non-alcoholic option that focuses more on savoriness and body as well. You 
            don't need to let the sauce reduce too much, as we're also adding syrup and mustard, so just reduce it down until it's slightly thickened and the alcohol fumes are cooked out. 
            Next, add maple syrup, smoked paprika, red pepper flakes, and a hint of cinnamon, mixing until homogenous. A little cinammon goes a long way, so do use it sparingly. Between the 
            nutty, earthy sweetness of the brown butter, maple syrup, and cinammon, the warmth of the brandy, apple cider vinegar, black pepper, red pepper flakes, cinnamon, and smoked paprika, 
            and the savory aromas of the pork, garlic, smoked paprika and sage, you can't help but think of crisp autumn air and colorful falling leaves. 
            </p>
            <p className='story'>
            To finish the sauce, squirt a tablespoon of Dijon mustard into a bowl. Once the spices in your sauce get a chance to develop a bit, turn off the heat, then mix a little bit of sauce 
            into the mustard and stir. This tempers the mustard, ensuring that it mixes smoothly with the sauce. Whenever I mixed mustard into a sauce, the mustard was too cold and the pan too 
            hot, causing the mustard to split, clump up, and look grainy and weird. This trick of tempering the mustard, which I picked up from Fallow (their chefs have an incredible YouTube 
            channel), has never let me down in getting a smooth emulsion. The mustard will thicken the sauce, add a bit more of a pungent pop, and help stabilize the emulsion of water and fat. 
            Add the tempered mustard-sauce mixture back into the pan and cook until reduced to your desired thickness. Remember, sauces thicken as they cool, so you may want to shoot a bit under 
            the mark. Slice up your pork chops against the grain for max tenderness and serve with your sauce and chopped sage. Although this is meant to be a seasonal dish, there's no law against 
            enjoying it at any time of year. Even if there was such a law, this dish is so good it's worth breaking the rules from time to time.
            </p>
        </div>    
    );
}

export default AutumnPorkChops;
