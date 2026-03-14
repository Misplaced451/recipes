import '../../recipes_style.css';
import '../../bulma.css';

const Vinaigrette = () => {
    return (
        <div className="pt-6 section recipe">
            {/* Intro */}
            <div className="has-text-centered section pt-0">
                <h1 className="has-text-weight-bold is-size-3">Lemon Vinaigrette</h1>
                <p className="subtitle">The world's easiest salad dressing</p>
            </div>
            
            <div className="columns mb-6 has-background-light">
                {/* Instructions */}
                <div className="column">
                <h4 className="subtitle has-text-centered-mobile">Instructions</h4>
                <div className="content">
                <ol>
                    <li>Crush garlic into a paste and finely mince a small handful of parsley leaves</li>
                    <li>Whisk together lemon juice and olive oil, adding the olive oil very slowly</li>
                    <li>Stabilize the emulsion by whisking in dijon mustard and garlic</li>
                    <li>Season to taste with salt, pepper, cayenne powder, and parsley</li>
                </ol>
                </div>
                </div>
                
                {/* Ingredients */}
                <div className="column is-4-desktop has-background-grey-lighter">
                <h4 className="subtitle has-text-centered-mobile">Ingredients</h4>
                <div className="content">
                <ul>
                    <li>3 tbsp olive oil</li>
                    <li>1 tbsp lemon juice</li>
                    <li>1.5 tbsp Dijon mustard</li>
                    <li>1 clove garlic</li>
                    <li>Pinch cayenne powder</li>
                    <li>Parsley</li>
                    <li>Salt</li>
                    <li>Pepper</li>
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
            Vinaigrette is a fancy-sounding French word for a mixture of oil and acid (traditionally vinegar), often used for salad dressing. I was inspired to make this recipe by a 
            creamy lemon vinaigrette I had in a restaurant. It's not quite the same, but it's very tasty and super easy to make. I find that leafy greens can often have a bitter taste, 
            and the lack of fat makes them less satisfying. That's what makes vinagrette the perfect salad dressing: the acid cuts right through that bitterness giving you a 
            mouthwatering effect, while the oil helps enhance any fat-soluble flavors and improves the mouthfeel. Salads aren't my favorite way to eat vegetables, but with this vinaigrette, 
            it's hard to go wrong.
            </p>
            <p className='story'>
            To start, mince a clove of garlic as finely as you can. Add a small pinch of salt, then use the flat side of your knife to crush the garlic into a paste. The salt will help to 
            mechanically and chemically break down the garlic, turning it from a mince to a more liquidy paste that will disperse more smoothly into the dressing. Next, pick a small handful 
            of parsley leaves and mince them finely. We want a couple flecks of fresh green in the dressing, but it shouldn't be the main flavor. 
            </p>
            <p className='story'>
            Now to create the emulsion. As I said before, vinaigrette is a mixture of oil (fat-based) and an acid (water-based). Oil and water don't mix, so we need to create a stable emulsion 
            capable of creaming the two together without them separating. There are two methods to do this: mechanical (whisking) and chemical (using an emulsifier like egg yolk, soy lecithin, 
            or mustard). Mechanical emulsification works by breaking up the oil into droplets so tiny that they get dispersed and suspended in the water. Unfortunately, this will not hold. The oil 
            will eventually rise to the top, coalesce, and fully separate within a few minutes. To stabilize this, we need a chemical emulsifier. These molecules have one hydrophilic and one 
            hydrophobic end. In other words, one side attaches to water, the other side attaches to oil. This makes a bridge between the two, allowing them to stay mixed. For this recipe, we're 
            using mustard. Mustard has a sharp, tangy flavor that goes great with the flavors in this vinaigrette without overpowering it. The emulsification properties of mustard come from 
            the mucilage that occurs naturally around the hull of the mustard seeds, so we want a mustard made from whole seeds. This means yellow mustard and mustard powder will not work. 
            Whole grain and Dijon mustard are your best bet, but nfortunately, Dijon won't hold the emulsion longer than a few hours, so it doesn't work as well as the whole grain stuff. 
            However, Dijon does have a more robust taste and smoother texture, making it the perfect balance between a flavoring agent and emulsifying agent. If you want the whole seeds in your 
            vinaigrette, whole grain mustard is fine, but I use Dijon for this recipe. Make sure to get good quality Dijon, as it can vary a lot in flavor.
            </p>
            <p className='story'>
            Let's start by using mechanical force to start off the emulsion. In a bowl, add 1 tbsp of lemon juice. Add 3 tbsp olive oil one teaspoon at a time (9 tsp total), whisking vigorously 
            until each teaspoon is fully incorporated before adding the next. Adding it slowly prevents the oil from coalescing too easily. Once you get a thickened, creamy mixture, whisk in 
            1.5 tbsp Dijon mustard and garlic paste to stabilize the emulsion. This ratio of 3:2:1 of oil:mustard:acid will guarantee a stable emulsion regardless of how much dressing you need to 
            make. Finally, season to taste with salt, pepper, cayenne powder, and parsley. It should taste bright and tangy with a bit of smoothness from the oil and some complexity from the 
            mustard and seasonings. Make sure you salt it a little more than you normally would. Remember, you don't drink this by itself, you're using it to season bland vegetables. 
            </p>
            <p className='story'>
            If you want to make the easiest side salad of your life, buy and wash some mixed greens, then toss them in a bowl with this vinaigrette. The freshness of this simple salad will pair 
            wonderfully with any meal, especially heavier dishes that need some contrast. You can also add to this salad to make a full meal with some grilled chicken, cherry tomatoes, and 
            thinly-sliced red onion and radishes. The possibilities are endless with a dressing as versatile as this one.
            </p>
        </div>    
    );
}

export default Vinaigrette;
