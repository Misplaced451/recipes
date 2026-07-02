import '../../recipes_style.css';
import '../../bulma.css';
import RecipeLayout from './recipelayout';

const MexicanRice = () => {
    return (
        <div className="pt-6 section recipe">
            {/* Intro */}
            <div className="has-text-centered section pt-0">
                <h1 className="has-text-weight-bold is-size-3">Mexican Rice</h1>
                <p className="subtitle">Also known as "Arroz Rojo"</p>
            </div>
            
            <div className="columns mb-6 has-background-light">
                {/* Instructions */}
                <div className="column">
                <h4 className="subtitle has-text-centered-mobile">Instructions</h4>
                <div className="content">
                <ol>
                    <li>Blend vegetables with stock until smooth</li>
                    <li>Add enough oil in a pot to coat the bottom, then fry the uncooked rice until slightly golden</li>
                    <li>Pour in the blended mixture and stir</li>
                    <li>Season to taste with salt, garlic powder, onion powder, and cumin powder and mix until fully combined</li>
                    <li>Let it come up to a boil, then put the lid on and cook on low for 15-20 mins or until the rice fully absorbs the liquid and cooks through</li>
                    <li>Fluff the rice with a fork and let sit covered for 5 mins off the heat before serving</li>
                </ol>
                </div>
                </div>
                
                {/* Ingredients */}
                <div className="column is-4-desktop has-background-grey-lighter">
                <h4 className="subtitle has-text-centered-mobile">Ingredients</h4>
                <div className="content">
                <ul>
                    <li>2 tomatoes</li>
                    <li>0.25 yellow onion</li>
                    <li>2 cloves garlic</li>
                    <li>1 serrano pepper or jalapeno</li>
                    <li>1 cup chicken or vegetable stock</li>
                    <li>Salt</li>
                    <li>Garlic Powder</li>
                    <li>Onion Powder</li>
                    <li>Cumin powder</li>
                    <li>Vegetable oil</li>
                    <li>1 cup long grain rice, uncooked</li>
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
            Rice in Mexican restaurants hits different. It's rich in tomato-y, savory, warm flavors and goes perfectly in burritos, stuffed bell peppers, or as a side dish to pretty 
            much anything. I've seen dozens of recipes online, each one more different than the last, and I've reached the following conclusion: there is never any one "authentic" 
            way to make something. Restaurants may follow one method, families will use what's convenient or suits their individual tastes, different regions will have different 
            styles, etc. Essentially, the most authentic recipe you can find is the one that your grandma made for you growing up. Seeing as how my grandma was not Mexican, that makes 
            sourcing an authentic recipe a little more difficult for me. This recipe was made based on compiling a variety of ingredients and techniques found online that I then 
            condensed down based on trial and error to a recipe that tastes good and works well for me.
            </p>
            <p className='story'>
            Start by blending the vegetables in a blender with some chicken stock. You want it to blend until completely smooth, as we don't want big chunks of vegetables in our rice. 
            To make this process easier, give your vegetables a rough chop before adding them in. I'm a fan of spicy food, so I don't bother de-seeding and de-veining the serrano before 
            I add it in, but you should do so if you want to mitigate some of that heat. If you think that'll still be too spicy, use a milder pepper like a jalapeno instead. Also, if 
            you don't have chicken stock on hand, using a cup of water and a couple spoonfuls of Knorr tomato boullion with chicken flavor (caldo de tomate con sabor de pollo) will do. 
            In fact, most recipes I've seen do it the Knorr way, but I find that chicken stock is a more versatile ingredient to keep in the pantry, so I use that instead. If you're 
            making a vegan version of this, swapping for vegetable stock will taste great too.
            </p>
            <p className='story'>
            Next, fry the rice in some oil until it turns golden. We don't want too much oil and essentially shallow-fry the rice, but we want to add enough so that each grain can get 
            coated nicely and get sauteed properly. A couple tablespoons usually does the trick for me, but you can adjust based on your preferences and your rice. While your oil heats 
            up in the pan, wash and drain your rice before adding it to the pot. Trust me, there tends to be a lot of excess starch and dust on the rice that results in a gummier final 
            product rather than the fluffy grains we're looking for. Once the water you use to rinse the rise runs relatively clear, add it to the pot and fry while stirring regularly. 
            At first the grains will begin to turn opaque, but they will slowly develop a light golden color and a slightly nutty aroma. Continue to fry in this manner until all the 
            grains achieve this stage. If some end up getting a little darker that's okay, but if they turn brown or black, they are burnt. Par-frying the rice before boiling will help 
            get the desired texture and impart a hint of that nutty flavor which will greatly enhance the aroma. When your rice is ready, add your vegetable blend. Blenders tend to 
            incorporate a ton of air into their mixtures, so you'll likely have a ton of foam on the top. This will go away on its own as the liquid boils, but you can also pass it 
            through a strainer to get rid of those bubbles and some solids right away as well.
            </p>
            <p className='story'>
            Once you mix the rice and liquid, season to taste with salt, garlic powder, onion powder, and cumin powder. Although we already added garlic and onion, adding their powdered 
            forms will thicken the liquid slightly and enhance the flavor. While fresh garlic and onion tend to have a lot more bite and complex aromas to them, the powdered forms carry 
            the flavor more subtly and impart a little more natural sweetness. Adding a heavy amount of cumin will add warmth and earthy aromas which will round out the flavor of our rice. 
            I like to season at this stage rather than seasoning the liquid while blending because it's easier to visually gauge how much seasonning you need when you can see the amount of 
            rice and liquid together in the pot.
            </p>
            <p className='story'>
            Once the liquid comes to a boil, cover with a lid and simmer on low for about 15-20 mins before uncovering. If the rice looks a little sludgy and hasn't absorbed all the liquid yet, 
            put the lid back on and continue cooking until done. The end result should be tender (but not mushy) rice with a lovely red-orange color. Fluff the rice with a fork to help 
            separate the grains and cool it down a bit. Take it off the heat and let sit covered for about 5 mins before serving to let it cool slightly while still keeping it warm. 
            </p>
        </div>
    );
}

export default MexicanRice;
