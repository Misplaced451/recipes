import '../../recipes_style.css';
import '../../bulma.css';

const Arayes = () => {
    return (
        <div className="pt-6 section recipe">
            {/* Intro */}
            <div className="has-text-centered section pt-0">
                <h1 className="has-text-weight-bold is-size-3">Beef Arayes</h1>
                <p className="subtitle">Macro-friendly, easy to meal prep</p>
            </div>
            
            <div className="columns mb-6 has-background-light">
                {/* Instructions */}
                <div className="column">
                <h4 className="subtitle has-text-centered-mobile">Instructions</h4>
                <div className="content">
                <ol>
                    <li>Grate onion and jalapeno, place in a paper towel, and squeeze out as much water as possible</li>
                    <li>Add beef, onion, jalapeno, grated garlic, parsley, salt, pepper, cumin, and paprika to a mixing bowl</li>
                    <li>Mix together until homogenous, then divide into 16 equal pieces</li>
                    <li>Cut each pita into quarters and stuff each with a piece of the beef mix</li>
                    <li>Brush down with a touch of olive oil on either side</li>
                    <li>Cook in a pan over medium heat until the pita is crispy and the beef is cooked through</li>
                    <li>Serve with yogurt or dipping sauce of choice</li>
                </ol>
                </div>
                </div>
                
                {/* Ingredients */}
                <div className="column is-4-desktop has-background-grey-lighter">
                <h4 className="subtitle has-text-centered-mobile">Ingredients</h4>
                <div className="content">
                <ul>
                    <li>1 lb lean ground beef (97% lean)</li>
                    <li>0.5 yellow onion</li>
                    <li>4 cloves garlic</li>
                    <li>1 jalapeno</li>
                    <li>0.25 cup chopped fresh parsley</li>
                    <li>1 tbsp paprika</li>
                    <li>1 tbsp ground cumin</li>
                    <li>Salt</li>
                    <li>Black pepper</li>
                    <li>4 pitas</li>
                    <li>Olive oil</li>
                </ul>
                </div>
                </div>
            </div>

            <div className='container mb-6 has-text-centered'>
                <button className="button is-info" onClick={() => window.print()}>
                    Download/Print Recipe
                </button>
            </div>
            
            {/* About the recipe */}
            <h4 className="subtitle has-text-centered is-4">Story Time</h4>
            <p className="story">
            I'm not sure where exactly this Middle Eastern street food originated from, but I saw so many recipes for it online that I had to try it out. I was able to make a recipe that 
            was both simple and great for helping me get in shape. I don't have time to cook lunch during the work day, so having a dish I can meal prep for several days is a lifesaver for 
            nutrition. Not only are these arayes high in protein with minimal fat, they are delicious enough to help kick cravings to the curb, yielding 40g protein for only 430 calories per 
            serving.
            </p>
            <p className='story'>
            To start, finely grate half an onion and a jalapeno. If you can't handle spice, remove the pith and seeds from the jalapeno. If you want more spice, add a little aleppo pepper or 
            cayenne when spicing the beef later on. Place the grated vegetables in a paper towel and squeeze out as much water as possible over the sink. Adding too much moisture to the beef 
            could risk the pita getting soggy and falling apart on you, especially if you plan on eating some the next day. Be warned, if you think chopping onions makes you cry, shredding it 
            up and squeezing the heck out of it is going to squeeze as much water from your eyes as you are from the onion. Once the vegetables are ready, dump them into a bowl with your ground 
            beef. I like using the leanest beef I can find (usually around 97%) to keep the protein high and calories low, but you can use what you like. Some people also like using ground lamb 
            or a mix of lamb and beef for that gamey flavor. Next, add in 4 cloves of garlic, grated, and some fresh parsley, about a quarter cup choppped finely. The spices are really up to you, 
            but I like to add a hefty amount of paprika and ground cumin along with salt and pepper to taste. Very simple seasonings, but they work well together. Mix everything together until 
            homogenous, then divide the mixture into 16 pieces of approximately equal weight.
            </p>
            <p className='story'>
            For the assembly, cut each pita into quarters so you get 16 triangles. Take one piece of the beef mix and stuff it into each pita, pressing down gently with your fingers to ensure complete 
            coverage without breaking or smushing the pita. These will be rather flat. If you want a meatier portions, use half the amount of pita and stuff each with 2 pieces of beef instead of one. 
            I like the smaller portions because it stretches out the recipe for longer and ensures that the beef cooks quickly without risking any raw meat in the middle by the time the pita gets crispy. 
            Once all the pitas are stuffed, use a pastry brush to lightly coat both sides with olive oil. This will ensure the pita crisps up well and adds subtle flavor without too many extra calories.
            </p>
            <p className='story'>
            In a pan over medium heat, cook each pita for a few minutes on each side until the pita is golden-brown and the beef appears to be cooked through. If using the double-stuffed pitas, it may be 
            best to lower the heat a bit and cook for a few minutes longer, ensuring you also sear the exposed beef on the open sides of the pita. Let your arayes cool on a wire rack for a minute before 
            serving or packing into an airtight container in the fridge. I like serving these with some nonfat Greek yogurt for the added protein and flavor, and some rice or quinoa on the side to help 
            fill me up. It's the perfect lunch for a busy work day, and it helped me get in shape without feeling overwhelmed about cooking or skimping on flavor.
            </p>
        </div>    
    );
}

export default Arayes;
