import '../../recipes_style.css';
import '../../bulma.css';

const BurgerMeatballs = () => {
    return (
        <div className="pt-6 section recipe">
            {/* Intro */}
            <div className="has-text-centered section pt-0">
                <h1 className="has-text-weight-bold is-size-3">Burger Meatballs</h1>
                <p className="subtitle">Like a burger but in meatball form</p>
                <p className="subtitle has-text-danger">WORK IN PROGRESS - RECIPE INCOMPLETE</p>
            </div>
           
            <div className="columns mb-6 has-background-light">
                {/* Instructions */}
                <div className="column">
                <h4 className="subtitle has-text-centered-mobile">Instructions</h4>
                <div className="content">
                <ol>
                    <li>Chop up cheese into 1 cm pieces. Colder cheese will slice better</li>
                    <li>Mix meat, breadcrumbs, seasonings, tomato paste, and cheese in a mixing bowl until all ingredients are fully incorporated</li>
                    <li>Form into balls of relatively equal size, a bit bigger than a golf ball (about 12 total)</li>
                    <li>Allow stainless steel pan to come up to high temp and add the oil to the pan</li>
                    <li>Sear no more than 6 balls at a time, ensuring a brown crust forms on all sides</li>
                    <li>Once all the meatballs are seared, place them all back in the pan over medium high heat</li>
                    <li>Let the temperature of the pan drop slightly before adding the butter</li>
                    <li>Let the butter melt and mix with the oil and tallow and baste the meatballs until they reach 160F internal</li>
                    <li>Separate the leaves from the lettuce, then wash and dry thoroughly</li>
                    <li>Place a square of lettuce on the burger and secure it with a toothpick</li>
                    <li>Serve with burger sauce</li>
                </ol>
                </div>
                </div>

                {/* Ingredients */}
                <div className="column is-4-desktop has-background-grey-lighter">
                <h4 className="subtitle has-text-centered-mobile">Ingredients</h4>
                <div className="content">
                <ul>
                    <li>1 lb 80/20 ground beef</li>
                    <li>0.5 cup plain breadcrumbs</li>
                    <li>1 tbsp tomato paste</li>
                    <li>2 slices (56g) American cheese</li>
                    <li>1.5 tsp salt</li>
                    <li>Pepper</li>
                    <li>Onion powder</li>
                    <li>Mustard powder</li>
                    <li>0.5 tbsp vegetable oil</li>
                    <li>2 tbsp butter</li>
                    <li>Chopped lettuce</li>
                    <li>Burger sauce</li>
                </ul>
                </div>
                </div>
            </div>
            
            {/* About the recipe */}
            <h4 className="subtitle has-text-centered is-4">Story Time</h4>
            <p className="story">
            This recipe came about when I thought about how ground beef and bread are the main components of both burgers and meatballs. Although combined in different ways, they 
            still share many of the same components. So, what if I turned a burger into a one-bite experience, in the convenient shape of a meatball?
            </p>
            <p className='story'>
            The process of making meatballs is pretty simple: combine beef with a little salt and a bunch of other stuff to keep it tender. In our case, we're using plain breadcrumbs 
            to represent the buns, tomato paste for the tomatoes, small pieces of American cheese to represent, well, the cheese, onion powder for the onion, mustard powder for the 
            mustard, and a little salt and pepper for seasoning. The only parts of a burger we're missing are pickles and lettuce. I decided not to add them here, as I felt the watery 
            crunch might mess with the texture. However, they can always be added later.
            </p>
            <p className='story'>
            Put all the ingredients for the meatballs in a mixing bowl. For the cheese, I like to chop it into 1 cm pieces beforehand. I find that these pieces are small enough to 
            incorporate well, but big enough to not fully blend in. Cold cheese will work better here, as this type of cheese melts super easily when you try and work with it at 
            room temp. If you want, you can even chop it up ahead of time, separate the pieces so they don't stick, and leave them in the freezer while you prep the other stuff. 
            Many people turn their nose up at American (or processed) cheese, because it "isn't real cheese" and it's "made of plastic". The first claim is true, but that doesn't 
            make it unhealthy unless you are desperately trying to reduce sodium and saturated fat intake (in which case maybe just don't eat burgers). Also, just because it isn't 
            legally cheese doesn't mean it isn't made with real cheese, nor does it mean you shouldn't use it as a cheese substitute in situations where you want to melt cheese while 
            maintaining its emulsion (e.g., burgers, grilled cheese, queso). Obviously you wouldn't put it on a charcuterie board or pair it with a nice wine, but it has its place in 
            the kitchen and is designed to do things that real cheeses can't. Also, despite what some health influencers tell you, it isn't made of plastic, it <em>is</em> plastic. 
            The difference is that many people confuse the noun "plastic" (synthetic polymer materials) with the adjective "plastic" (easily molded or shaped). American cheese is 
            plastic not because it's made of crude oil products, but because it has the property of being easily shaped and even liquefied without ripping apart or breaking its 
            emulsion. Like any other food, it's fine in moderation despite having some ingredients on the label that you may not recognize.
            </p>
            <p className='story'>
            With the cheese rant over, let's get back to the meatballs. Using your hands, mush the ingredients together until they form a homogenous paste with a few solid chunks of 
            cheese. Roll into evenly sized balls a little bigger than a golf ball. I usually get about 12 balls out of this recipe, but you can resize to whichever size and quantity 
            you like. Make sure to roll each ball well so it doesn't fall apart and holds its shape when cooked. Next, get a stainless steel or cast iron pan up to ripping heat, 
            then add a little oil. It may not be necessary because of all the fat in the meatballs, but I add it to ensure no sticking. Get a hard sear on all sides of the meatballs, 
            cooking in batches to ensure you don't overcrowd the pan. Adding too many meatballs at once can drop the temperature of the pan too much at first and release too much 
            water at once, preventing a quick and hard sear. We're not looking to cook them all the way through just yet, but just to brown the surface.
            </p>
            <p className='story'>
            Turn the pan to medium-low and add all the balls into the pan. Once it has the chance to cool slightly, add a few tablespoons of butter. The butter will brown because of 
            the high heat, which will mimic the toastiness of buttered buns. Baste the butter over all the meatballs as they cook for a few more minutes, until the internal temp 
            registers 160F internal. Serve the meatballs with burger sauce mixed with minced pickles. I like to skewer each meatball with a piece of lettuce to help add some crunch 
            and contrast. 
            </p>
            <p className='story'>
            This is a very strange recipe overall. It looks and feels like you're eating meatballs, but when you chew them, it basically just turns into a chewed-up burger in your 
            mouth. It's like a magic trick: you put a meatball in your mouth and it turns into a burger by the time you swallow. I think this recipe would be a fun little twist at 
            a barbecue or cookout to serve as appetizers or as a side dish. I'm thinking of changing up the recipe to have a little better plating by using the lettuce as ssam, 
            which is a Korean food where you take lettuce and wrap some meat and other ingredients and eat it in a single bite. Maybe reducing the size of the meatballs and slicing 
            the pickles into matchsticks would be ideal for this. In this way, you could get a really interesting Korean-American fusion and eat a burger like a ssam. I'll have to 
            make it this way and try it out, see what happens.
            </p>
        </div>
    );
}

export default BurgerMeatballs;
