import '../../recipes_style.css';
import '../../bulma.css';

const Links = () => {
    const handleLinks = function(site) {
        if (site === 'foodwishes') {
            window.open("https://www.youtube.com/@foodwishes", "_blank");
        } else if (site === 'babish') {
            window.open("https://www.youtube.com/@babishculinaryuniverse", "_blank");
        } else if (site === 'notanother') {
            window.open("https://www.youtube.com/@NOTANOTHERCOOKINGSHOW", "_blank");
        } else if (site === 'ramsay') {
            window.open("https://www.youtube.com/playlist?list=PLTzMGnJjrsSyDJU9XClzZtuJ6GAIsvRk7", "_blank");
        } else if (site === 'ysac') {
            window.open("https://www.youtube.com/@yousuckatcooking", "_blank");
        } else if (site === 'benthebaker') {
            window.open("https://www.youtube.com/@benjaminthebaker", "_blank");
        } else if (site === 'saffitz') {
            window.open("https://www.youtube.com/@CSaffitz", "_blank");
        } else if (site === 'matty') {
            window.open("https://www.youtube.com/@mattymatheson", "_blank");
        } else if (site === 'chlebowski') {
            window.open("https://www.youtube.com/@EthanChlebowski", "_blank");
        } else if (site === 'kenji') {
            window.open("https://www.youtube.com/@JKenjiLopezAlt", "_blank");
        } else if (site === 'alexfrench') {
            window.open("https://www.youtube.com/@FrenchGuyCooking", "_blank");
        } else if (site === "halfbaked") {
            window.open("https://www.halfbakedharvest.com/", "_blank");
        } else if (site === "pickuplimes") {
            window.open("https://www.youtube.com/@PickUpLimes", "_blank");
        } 
    };

    return (
        <div className="pt-6 tabcontent recipe section">
            <div className="has-text-centered section pt-0">
                <h1 className="has-text-weight-bold is-size-3">Links</h1>
                <p className="subtitle">Links to my favorite cooking sites and videos</p>
            </div>

            <div className="columns is-centered section pt-0 card">
            <div className='column py-5'>
                <div className="has-text-centered">
                    <h1 className="has-text-weight-bold is-size-4">Introductory</h1>
                    <p className="subtitle">Good for beginners to learn</p>
                </div>
                <div className='py-4'>
                <div className='card'>
                    <header className='card-header'>
                        <p class="card-header-title">Gordon Ramsay's Cookery Course</p>
                    </header>
                    <div className='card-content'>
                        <p>
                        The perfect starting point for someone new to cooking.
                        </p>
                    </div>
                    <footer className='card-footer'>
                        <a href="#!" className='card-footer-item has-text-link' onClick={() => handleLinks('ramsay')}>
                        Go To Site
                        </a>
                    </footer>
                </div>
                <div className='card'>
                    <header className='card-header'>
                        <p class="card-header-title">Food Wishes</p>
                    </header>
                    <div className='card-content'>
                        <p>
                        Chef John of Food Wishes is an excellent and hilarious chef who isn't afraid to show his mistakes in the kitchen.
                        </p>
                    </div>
                    <footer className='card-footer'>
                        <a href="#!" className='card-footer-item has-text-link' onClick={() => handleLinks('foodwishes')}>
                        Go To Site
                        </a>
                    </footer>
                </div>
                <div className='card'>
                    <header className='card-header'>
                        <p class="card-header-title">You Suck At Cooking</p>
                    </header>
                    <div className='card-content'>
                        <p>
                        Short videos, funny jokes, tasty food, accessible recipes.
                        </p>
                    </div>
                    <footer className='card-footer'>
                        <a href="#!" className='card-footer-item has-text-link' onClick={() => handleLinks('ysac')}>
                        Go To Site
                        </a>
                    </footer>
                </div>
                <div className='card'>
                    <header className='card-header'>
                        <p class="card-header-title">Pick Up Limes</p>
                    </header>
                    <div className='card-content'>
                        <p>
                        Who says a plant-based diet has to be difficult? Even if you aren't vegan, this is still a great place to expand your horizons and learn 
                        more about meal prep and vegan options.
                        </p>
                    </div>
                    <footer className='card-footer'>
                        <a href="#!" className='card-footer-item has-text-link' onClick={() => handleLinks('pickuplimes')}>
                        Go To Site
                        </a>
                    </footer>
                </div>
                </div>
            </div>
            <div className='column has-background-light py-5'>
                <div className="has-text-centered">
                    <h1 className="has-text-weight-bold is-size-4">Intermediate</h1>
                    <p className="subtitle">More advanced and impressive recipes</p>
                </div>
                <div className='pt-4'>
                <div className='card'>
                    <header className='card-header'>
                        <p class="card-header-title">Babish Culinary Universe</p>
                    </header>
                    <div className='card-content'>
                        <p>
                        Andrew Rea, aka Binging With Babish, is best known for making recipes from your favorite tv shows and movies.
                        </p>
                    </div>
                    <footer className='card-footer'>
                        <a href="#!" className='card-footer-item has-text-link' onClick={() => handleLinks('babish')}>
                        Go To Site
                        </a>
                    </footer>
                </div>
                <div className='card'>
                    <header className='card-header'>
                        <p class="card-header-title">Claire Saffitz</p>
                    </header>
                    <div className='card-content'>
                        <p>
                        Claire Saffitz is the go-to person for showstopping sweet treats. She is, after all, a dessert person.
                        </p>
                    </div>
                    <footer className='card-footer'>
                        <a href="#!" className='card-footer-item has-text-link' onClick={() => handleLinks('saffitz')}>
                        Go To Site
                        </a>
                    </footer>
                </div>
                <div className='card'>
                    <header className='card-header'>
                        <p class="card-header-title">Matty Matheson</p>
                    </header>
                    <div className='card-content'>
                        <p>
                        Matty Matheson is a Canadian chef with the most eccentric and energetic personality I've ever seen.
                        </p>
                    </div>
                    <footer className='card-footer'>
                        <a href="#!" className='card-footer-item has-text-link' onClick={() => handleLinks('matty')}>
                        Go To Site
                        </a>
                    </footer>
                </div>
                <div className='card'>
                    <header className='card-header'>
                        <p class="card-header-title">Not Another Cooking Show</p>
                    </header>
                    <div className='card-content'>
                        <p>
                        In my opinion, this is the best channel for learning Italian recipes (in English, that is).
                        </p>
                    </div>
                    <footer className='card-footer'>
                        <a href="#!" className='card-footer-item has-text-link' onClick={() => handleLinks('notanother')}>
                        Go To Site
                        </a>
                    </footer>
                </div>
                <div className='card'>
                    <header className='card-header'>
                        <p class="card-header-title">Half-Baked Harvest</p>
                    </header>
                    <div className='card-content'>
                        <p>
                        Tieghan Gerard's blog is an absolute staple in finding wholesome recipes that are guaranteed to impress at any family reunion.
                        </p>
                    </div>
                    <footer className='card-footer'>
                        <a href="#!" className='card-footer-item has-text-link' onClick={() => handleLinks('halfbaked')}>
                        Go To Site
                        </a>
                    </footer>
                </div>
                </div>
            </div>
            <div className='column py-5'>
                <div className="has-text-centered">
                    <h1 className="has-text-weight-bold is-size-4">Informational</h1>
                    <p className="subtitle">A lot of technical and scientific info</p>
                </div>
                <div className='pt-4'>
                <div className='card'>
                    <header className='card-header'>
                        <p class="card-header-title">J. Kenji López-Alt</p>
                    </header>
                    <div className='card-content'>
                        <p>
                        Food God J. Kenji López-Alt is a chef and food author who breaks down the science of why cooking works the way it does.
                        </p>
                    </div>
                    <footer className='card-footer'>
                        <a href="#!" className='card-footer-item has-text-link' onClick={() => handleLinks('kenji')}>
                        Go To Site
                        </a>
                    </footer>
                </div>
                <div className='card'>
                    <header className='card-header'>
                        <p class="card-header-title">Ethan Chlebowski</p>
                    </header>
                    <div className='card-content'>
                        <p>
                        Ethan Chlebowski deep-dives into certain ingredients or cooking methods. He has plenty of easy recipes, but also can 
                        get very technical with the science behind his culinary choices.
                        </p>
                    </div>
                    <footer className='card-footer'>
                        <a href="#!" className='card-footer-item has-text-link' onClick={() => handleLinks('chlebowski')}>
                        Go To Site
                        </a>
                    </footer>
                </div>
                <div className='card'>
                    <header className='card-header'>
                        <p class="card-header-title">Alex French Guy Cooking</p>
                    </header>
                    <div className='card-content'>
                        <p>
                        A French guy who likes to cook. His boundless dedication, curiosity, and willingness to experiment make him an inspiration to watch.
                        </p>
                    </div>
                    <footer className='card-footer'>
                        <a href="#!" className='card-footer-item has-text-link' onClick={() => handleLinks('alexfrench')}>
                        Go To Site
                        </a>
                    </footer>
                </div>
                <div className='card'>
                    <header className='card-header'>
                        <p class="card-header-title">Benjamin the Baker</p>
                    </header>
                    <div className='card-content'>
                        <p>
                        Desserts are tough, since a slight change can make a big difference. Benjamin's short-form videos explain these changes and how you can vary your 
                        dessert recipes to get your desired results.
                        </p>
                    </div>
                    <footer className='card-footer'>
                        <a href="#!" className='card-footer-item has-text-link' onClick={() => handleLinks('benthebaker')}>
                        Go To Site
                        </a>
                    </footer>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Links;
