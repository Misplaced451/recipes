import '../../recipes_style.css';
import '../../bulma.css';

import {Link} from 'react-router-dom';

const ConeyStew = () => {
    return (
        <div className="pt-6 section recipe">
            {/* Intro */}
            <div className="has-text-centered section pt-0">
                <h1 className="has-text-weight-bold is-size-3">Sam Gamgee's Coney Stew</h1>
                <p className="subtitle">A faithful(ish) recreation of Sam's stew from Lord of the Rings</p>
            </div>
            
            <div className="columns mb-6 has-background-light">
                {/* Instructions */}
                <div className="column">
                <h4 className="subtitle has-text-centered-mobile">Instructions</h4>
                <div className="content">
                <ol>
                    <li>Chop turnips into 1 inch pieces, and dice the onion and carrot</li>
                    <li>Salt and pepper the meat and sear in a pot with a bit of olive oil</li>
                    <li>Once a crust forms on both sides, take out meat and add 2 tbsp butter and flour</li>
                    <li>Make into a roux, let it turn blond in color, then add bay leaves, onions, carrots, and turnips</li>
                    <li>Mix until roux coats the vegetables and the onions just start turning translucent, then deglaze with a splash of wine if available</li>
                    <li>Chop up meat (optional), and add it to the pot</li>
                    <li>Pour in stock until just covered. Add water if needed</li>
                    <li>Season with rosemary and thyme, then bring to a simmer</li>
                    <li>Cover with a lid and simmer on low for 60 mins</li>
                    <li>Meanwhile, wash, peel, and roughly chop potatoes, then boil in salted water until fork tender</li>
                    <li>Drain, let dry for a couple mins, then push potatoes through a sieve into a bowl</li>
                    <li>In the empty pot, melt the butter and heat up the milk</li>
                    <li>Once the dairy is warm, add the potatoes and fold gently to combine, seasoning to taste with salt</li>
                    <li>When the stew is done simmering, serve on top of mashed potatoes in a bowl with a drizzle of olive oil on top</li>
                </ol>
                </div>
                </div>
                
                {/* Ingredients */}
                <div className="column is-4-desktop has-background-grey-lighter">
                <h4 className="subtitle has-text-centered-mobile">Ingredients</h4>
                <div className="content">
                <ul>
                    <li>1 lb rabbit meat (or chicken thighs)</li>
                    <li>2 cups <Link to={'/chickenstock'} className='is-underlined'>chicken stock</Link></li>
                    <li>0.5 turnips</li>
                    <li>0.5 onions</li>
                    <li>1 carrot</li>
                    <li>4 Russet Potatoes</li>
                    <li>Olive oil</li>
                    <li>6 tbsp butter</li>
                    <li>2 tbsp AP flour</li>
                    <li>4 tbsp whole milk</li>
                    <li>Salt</li>
                    <li>2 bay leaves</li>
                    <li>Dried sage</li>
                    <li>Thyme</li>
                    <li>Pinot Noir (optional)</li>
                </ul>
                </div>
                </div>
            </div>
            
            {/* About the recipe */}
            <h4 className="subtitle has-text-centered is-4">Story Time</h4>
            <p className="story">
            This recipe is based on the rabbit stew that Sam makes in <em>The Two Towers</em>, the second volume of <em>The Lord of the Rings</em> trilogy. In the book, Sam makes a stew 
            for Frodo, ordering Gollum to help him gather ingredients. He prepares the rabbit along with some root vegetables and fresh herbs, namely turnips, carrots, bay leaf, rosemary, 
            and thyme. Although he doesn't add anything more, he expresses his wish that he had some onions and stock on hand to make the stew better, along with a craving for some nice 
            taters from back home. In the movies, Sam explains taters to Gollum with the iconic quote, "Po-ta-toes! Boil 'em, mash 'em, stick 'em in a stew!" So for this recipe, I decided 
            to include some taters by boiling them, mashing them, and sticking them in the stew. I noticed that Sam never mentioned any salt, pepper, or fat, which are essential to a good 
            stew. I took the liberty of adding olive oil to help sear the meat, some salt to make it edible, roux for thickening, some butter and milk to give creaminess to the mashed 
            potatoes, and an optional splash of wine for deglazing, acidity, and depth. I also subbed chicken thighs for rabbit, since I didn't konw where to get rabbit meat, and I wasn't 
            keen to find out. Outside of those additions, everything is as faithful to the book as possible. No garlic, no celery, no peas, no pepper, paprika, cayenne, or parsley. Although 
            I would've added all those things, maybe more, I decided to trust Sam and keep it simple.
            </p>
            <p className="story">
            To start, get an enameled or stainless steel pot over high heat. I find that a high-walled stainless steel pan works well too. While the pot comes up to temp, chop the vegetables. 
            Peel the turnip and onion, and rough chop the turnip 1 inch cubes. Dice the onion and carrot. The smaller pieces will lend more flavor to the stew, while the larger chunks of turnip 
            will become soft and flavorful, adding a nice variety in texture. You don't need to be too precise here, in fact, a little unevenness gives it a more rustic feel. Once your veg is 
            prepped, season the meat liberally with salt and pepper. Ideally you want to do this a few hours ahead of time, but it'll still taste good as long as you season before cooking.
            </p>
            <p className="story">
            Add a touch of olive oil to the pot, just enough to coat the bottom. Once the oil is shimmering, add the meat and sear on all sides until a nice brown crust forms. 
            This should take about a couple minutes per side. The goal isn't to cook the meat through, but to sear it for flavor and texture, and to develop some delicious fond on the bottom 
            of the pot. Once the meat is done, set the meat aside, turn the heat to medium, and make a roux with 2 tbsp each of butter and flour. It might be good to let the pan cool down a bit 
            first so the butter doesn't burn. Melt the butter and whisk in the flour until homogenous, and cook until the flour begins to turn blond in color.
            </p>
            <p className="story">
            Next, add the bay leaves and the chopped vegetables. Stir to coat the vegetables in the roux, and cook until the onions just start turning translucent. If you have some wine on hand, 
            add a splash and deglaze the pot by scraping up the fond on the bottom and stirring until the alcohol vapors dissipate after a few minutes. I prefer Pinot Noir for its acidity, color, 
            light body, and delicate aromas. The wine adds some brightness and complex flavors to the stew, but it isn't necessary, especially since Sam didn't use it in the book. Once the wine has 
            picked up the fond and has mixed well with the roux, add the meat back into the pot. You can rough chop it to make it easier to fit, but if it fits in comfortably, you can add it whole. 
            Pour in stock slowly, stirring as you go, until the meat and vegetables are just covered. If you don't have enough stock, add water to make up the difference. Season to taste with 
            rosemary and thyme.
            </p>
            <p className="story">
            Bring to a simmer, then cover with a lid and simmer on low for a full hour. You can go longer if you want (I think 2 hours is a good sweet spot), but 1 hour is the minimum to activate the 
            roux and tenderize the meat. The good thing about the wait time is that you can use it to prep the mashed potatoes and clean the kitchen. I find that 4 russet potatoes is plenty enough to 
            go with the amount of stew for this recipe. You may end up with extra, but in my opinion, having too little mashed potato is a problem, but having too much is a blessing. Peel the potatoes, 
            chop them into 1 inch cubes, and set aside. Boil a pot of water, enough to cover the potatoes, and salt it generously. Once the water is boiling, add the potatoes and boil with the lid on until 
            fork tender, about 15-20 minutes. Drain the water and let the steam escape from the potatoes for a couple minutes to reduce the moisture. Then push the potatoes through a sieve witha spatula into 
            a mixing bowl. Although cleaning potato out of a sieve is tricky, this is the best way to ensure super smooth mash with zero lumps without overworking the potatoes. Once your potatoes are 
            mashed up, melt 4 tbsp butter in the empty pot you used to boil the potatoes and add 4 tbsp of whole milk, heating on medium-low until warm, but not steaming hot. Add the potatoes back 
            to the pot and fold gently until combined. Season to taste with salt.
            </p>
            <p className="story">
            When the stew is done, take the lid off and salt to taste. Break up the meat into small pieces to make it manageable for plating. To serve it, load up some mashed potatoes on the side of a bowl 
            and ladle the stew on the other side. This will allow you to scrape up some potato and pick up some stew with it in one smooth motion. Drizzle with a bit of olive oil on top for extra flavor and 
            richness. I also like to garnish with a bit of freshly cracked black pepper, chopped parsley and chives, but that's just my take on it. Even without the extra garnish, I was surprised at how good 
            this stew was. The ingredients are simple, affordable (if you're using chicken in place of rabbit), and easy to find. The spice profile isn't complex (there isn't even any pepper!), but the 
            tenderness and savoriness of the meat, the richness of the potato and turnip, the subtle sweetness of the root vegetables, and the aroma of the herbs all create such a comforting and hearty feeling. 
            This is the kind of stew that kicks the cold out of a winter night. The kind of food that conveys the warmth of friendship and comforts of home. I salute you, Samwise Gamgee, and everything you stand for.
            </p>
        </div>    
    );
}

export default ConeyStew;
