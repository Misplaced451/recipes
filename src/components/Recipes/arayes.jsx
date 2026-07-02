import '../../recipes_style.css';
import '../../bulma.css';
import RecipeLayout from './recipelayout';

const Arayes = () => {
    return (
        <RecipeLayout
        name={'Beef Arayes'}
        description={"Macro-friendly, easy to meal prep"}
        instructions={
            <div className="content">
            <ol>
                <li>Grate onion and jalapeno, place in a paper towel, and squeeze out as much water as possible</li>
                <li>Add beef, onion, jalapeno, grated garlic, parsley, salt, pepper, cumin, paprika, and baharat to a mixing bowl</li>
                <li>Mix together until homogenous, then divide into 16 equal pieces</li>
                <li>Cut each pita into quarters and stuff each with a piece of the beef mix</li>
                <li>Brush down with a touch of olive oil on either side</li>
                <li>Cook in a pan over medium heat until the pita is crispy and the beef is cooked through</li>
                <li>Serve with yogurt or dipping sauce of choice</li>
            </ol>
            </div>
        }
        ingredients={
            <div className="content">
            <ul>
                <li>1 lb lean ground beef (97% lean)</li>
                <li>0.5 yellow onion</li>
                <li>4 cloves garlic</li>
                <li>1 jalapeno</li>
                <li>0.25 cup chopped fresh parsley</li>
                <li>1 tbsp paprika</li>
                <li>1 tbsp ground cumin</li>
                <li>1 tbsp baharat or 7-spice mix*</li>
                <li>Salt</li>
                <li>Black pepper</li>
                <li>4 pitas</li>
                <li>Olive oil</li>
            </ul>
            <p>* If you don't have baharat, you can substitute with 0.5 tsp each cinnamon, clove, and nutmeg and 1 tsp each coriander and allspice.</p>
            </div>
        }
        story={
            <div className="story">
            <p>
            I'm not sure where exactly this Middle Eastern street food originated from, but I saw so many recipes for it online that I had to try it out. I was able to make a recipe that 
            was both simple and great for helping me get in shape. I don't have time to cook lunch during the work day, so having a dish I can meal prep for several days is a lifesaver for 
            nutrition. Not only are these arayes high in protein with minimal fat, they are delicious enough to help kick cravings to the curb, yielding 40g protein for only 430 calories per 
            serving.
            </p>
            <p>
            To start, finely grate half an onion and a jalapeno. If you can't handle spice, remove the pith and seeds from the jalapeno. If you want more spice, add a little aleppo pepper or 
            cayenne when spicing the beef later on. Place the grated vegetables in a paper towel and squeeze out as much water as possible over the sink. Adding too much moisture to the beef 
            could risk the pita getting soggy and falling apart on you, especially if you plan on eating some the next day. Be warned, if you think chopping onions makes you cry, shredding it 
            up and squeezing the heck out of it is going to squeeze as much water from your eyes as you are from the onion. Once the vegetables are ready, dump them into a bowl with your ground 
            beef. I like using the leanest beef I can find (usually around 97%) to keep the protein high and calories low, but you can use what you like (85% lean will work fine). Some people 
            also like using a 50/50 mix of lamb and beef for that gamey flavor. Next, add in 4 cloves of garlic, grated, and some fresh parsley leaves, about a quarter cup choppped finely. 
            The spices are really up to you, but I like to add a hefty amount of paprika and ground cumin along with salt and pepper to taste. That's the bare minimum, but I also add some baharat 
            spice mix as well to add a more complex flavor. If you can't find baharat (or "seven spice" as it's sometimes called) at your local grocery store, add a half tsp each of cinnamon, 
            nutmeg, and cloves, plus 1 tsp each of allspice and coriander powder. The other two spices in the seven spice mix are cumin and black pepper, which we've already added plenty of anyway. 
            Mix everything together until homogenous, then divide the mixture into 16 pieces of approximately equal weight.
            </p>
            <p>
            For the assembly, cut each pita into quarters so you get 16 triangles. Take one piece of the beef mix and stuff it into each pita, pressing down gently with your fingers to ensure complete 
            coverage without breaking or smushing the pita. These will be rather flat. If you want a meatier portions, use half the amount of pita and stuff each with 2 pieces of beef instead of one. 
            I like the smaller portions because it stretches out the recipe for longer and ensures that the beef cooks quickly without risking any raw meat in the middle by the time the pita gets crispy. 
            Once all the pitas are stuffed, use a pastry brush to lightly coat both sides with olive oil. This will ensure the pita crisps up well and adds subtle flavor without too many extra calories.
            </p>
            <p>
            In a pan over medium heat, cook each pita for a few minutes on each side until the pita is golden-brown and the beef appears to be cooked through. If using the double-stuffed pitas, it may be 
            best to lower the heat a bit and cook for a few minutes longer, ensuring you also sear the exposed beef on the open sides of the pita. Let your arayes cool on a wire rack for a minute before 
            serving or packing into an airtight container in the fridge. I like serving these with some nonfat Greek yogurt for the added protein and flavor, and some rice or quinoa on the side to help 
            fill me up. It's the perfect mealprep lunch for a busy work day, and it helped me get in shape without feeling overwhelmed about cooking or skimping on flavor.
            </p>
            </div>
        }
        />
    );
}

export default Arayes;
