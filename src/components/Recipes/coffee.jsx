import '../../recipes_style.css';
import '../../bulma.css';

const Coffee = () => {
    return (
        <div className="pt-6 section recipe">
            {/* Intro */}
            <div className="has-text-centered section pt-0">
                <h1 className="has-text-weight-bold is-size-3">Cold Brew Coffee</h1>
                <p className="subtitle">Recipe for cold brew from NYT Cooking.</p>
            </div>
            
            <div className="columns is-variable mb-6 has-background-light mx-5">
                {/* Instructions */}
                <div className="column">
                <h4 className="subtitle has-text-centered-mobile">Instructions</h4>
                <div className="content">
                <ol>
                    <li>Combine coffee and water.</li>
                    <li>Cover and let rest for 12 hours at room temperature.</li>
                    <li>Filter and serve with ice cubes.</li>
                </ol>
                </div>
                </div>
                
                {/* Ingredients */}
                <div className="column is-4-desktop has-background-grey-lighter">
                <h4 className="subtitle has-text-centered-mobile">Ingredients</h4>
                <div className="content">
                <ul>
                    <li>0.33 cups coarse ground coffee</li>
                    <li>2 cups water</li>
                </ul>
                </div>
                </div>
            </div>
            
            {/* About the recipe */}
            <h4 className="subtitle has-text-centered is-4">Story Time</h4>
            <p className="story">
            This recipe comes from NYT Cooking. I used to make this every night and drink it first thing the next morning, 30 minutes before my workout, and it really energized me quite a 
            bit. As someone who hates the taste of coffee, this is as palatable as black coffee gets. If you twist my arm, I might even admit that I enjoy it. When you filter the coffee, 
            be sure to use a coffee filter, as a mesh strainer will let a few errant grounds into the cup. Other than that, this recipe needs no further explanation.
            </p>
        </div>    
    );
}

export default Coffee;
