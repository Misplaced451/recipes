import '../../recipes_style.css';
import '../../bulma.css';

const Cranberry = () => {
    return (
        <div className="pt-6 section recipe">
            {/* Intro */}
            <div className="has-text-centered section pt-0">
                <h1 className="has-text-weight-bold is-size-3">Cranberry Sauce</h1>
                <p className="subtitle">Perfect for Thanksgiving, but still good anywhere else.</p>
            </div>
            
            <div className="columns is-variable mb-6 has-background-light">
                {/* Instructions */}
                <div className="column">
                <h4 className="subtitle has-text-centered-mobile">Instructions</h4>
                <div className="content">
                <ol>
                    <li>Put the cranberries, sugar, and cinnamon into a saucepan</li>
                    <li>Zest and juice the orange into the pan</li>
                    <li>Wash and peel a piece of ginger (about an inch in length) and whack it with the flat of a knife before adding to the pan</li>
                    <li>Add the water and stir occasionally over medium-high heat until it comes to a boil</li>
                    <li>Simmer on low heat for 15 minutes or until thickened. Make sure to burst the cooked cranberries</li>
                    <li>Let cool and serve.</li>
                </ol>
                </div>
                </div>
                
                {/* Ingredients */}
                <div className="column is-4-desktop has-background-grey-lighter">
                <h4 className="subtitle has-text-centered-mobile">Ingredients</h4>
                <div className="content">
                <ul>
                    <li>12 oz cranberries</li>
                    <li>1 cup sugar</li>
                    <li>1/2 cup water</li>
                    <li>1 navel orange</li>
                    <li>Cinnamon stick</li>
                    <li>Fresh ginger</li>
                </ul>
                </div>
                </div>
            </div>
            
            {/* About the recipe */}
            <h4 className="subtitle has-text-centered is-4">Story Time</h4>
            <p className="story">
            My family has made cranberry sauce on Thanksgiving many times, but it has a savory, spicy kick. I love it, but I prefer the traditional sweet and sour flavor, so when I was put 
            in charge of making it, I found a recipe that was more my taste and could appeal to a wider audience. Full disclosure, I don't remember where I got this recipe from, but I 
            definitely stole it off the internet somewhere for your enjoyment and made a couple minor modifications regarding the spices.
            </p>
            <p className="story">
            The best advice I can give is to listen to the Cranberries while making cranberry sauce. I swear it makes the flavor ten times better. Once your playlist is on, put all the 
            ingredients in a saucepan, except the orange, ginger, and water. For the orange, you'll want to zest it and then squeeze out all the juice into the saucepan. Take care not to grate the 
            white pith in there while zesting, as that can impart bitter flavors. Next, take a small piece of ginger, about the size of the upper part of your thumb (between the nail and first 
            joint), wash and peel it, then whack it with the flat of a knife to crack it up a bit while keeping it in one piece. This will help release some flavor while maintaining a big enough 
            piece to fish out at the end. Then add the ginger and the water to the pot and turn the heat up to medium high, stirring occasionally until it begins to boil. Then simmer on low for 
            15 minutes. You'll know when the cranberries are cooked because they will swell and burst when pressed with your trusty wooden spoon.
            </p>
            <p className="story">
            Once it cools, serve it with whatever you like. The reason we used whole spices is so that the infusion of flavor is gentle enough not to overpower the dish, and the pieces are big 
            enough to see so you don't accidentally serve someone a spoonful of sauce with tiny chips of cinnamon bark or tough strands of ginger in it. Whether it's Thanksgiving or National 
            Eat A Cranberry Day (November 23) or you just wanted a nice sweet and sour sauce that could go with anything from sandwiches to pork chops, this recipe is sure to put a smile 
            on your face.
            </p>
        </div>
    );
}

export default Cranberry;
