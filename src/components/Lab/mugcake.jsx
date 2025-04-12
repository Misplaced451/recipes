import '../../recipes_style.css';
import '../../bulma.css';

const MugCake = () => {
    return (
        <div className="pt-6 section recipe">
            {/* Intro */}
            <div className="has-text-centered section pt-0">
                <h1 className="has-text-weight-bold is-size-3">Mug Cake</h1>
                <p className="subtitle has-text-danger">WORK IN PROGRESS - RECIPE INCOMPLETE</p>
            </div>
            
            <div className="columns is-variable mb-6 has-background-light mx-5">
                {/* Instructions */}
                <div className="column">
                <h4 className="subtitle has-text-centered-mobile">Instructions</h4>
                <div className="content">
                <ol>
                    <li>Combine flour, sugar, salt, cocoa powder, and baking powder in a microwave-safe mug.</li>
                    <li>Combine with all the other ingrediends and mix until smooth.</li>
                    <li>Microwave for 1 minute.</li>
                    <li>Serve with a scoop of ice cream</li>
                </ol>
                </div>
                </div>
                
                {/* Ingredients */}
                <div className="column is-4-desktop has-background-grey-lighter">
                <h4 className="subtitle has-text-centered-mobile">Ingredients</h4>
                <div className="content">
                <ul>
                    <li>3 tbsp flour</li>
                    <li>2 tbsp sugar</li>
                    <li>2 tbsp vegetable oil</li>
                    <li>3 tbsp milk</li>
                    <li>2 tbsp cocoa powder</li>
                    <li>0.25 tsp baking powder</li>
                    <li>1/2 tsp vanilla extract</li>
                    <li>Pinch salt</li>
                    <li>1 scoop ice cream (your choice of flavor)</li>
                </ul>
                </div>
                </div>
            </div>
            
            {/* About the recipe */}
            <h4 className="subtitle has-text-centered is-4">Story Time</h4>
            <p className="story">
            I'm gonna be completely honest. This recipe is garbage. If you want a chocolate cake, make a chocolate cake. This is far more dry, lacking in both flavor and texture. 
            It needs a scoop of ice cream to even be palatable. Someday I will make this recipe better, I just need to figure it out. But for now, I'm stuck with this. In any case, 
            nobody makes mug cakes for taste, it's all for convenience.
            </p>
            <p className="story">
            Combine flour, sugar, salt, cocoa powder, and baking powder in a microwave-safe mug. Once all your dry ingredients are together, add the milk, oil, and vanilla. 
            Mix well until smooth, then microwave for a minute. Serve with a scoop of your ice cream of choice. I like mint chocolate chip or vanilla with this recipe. I can promise it'll be 
            fast, but as of right now, I can't promise it'll be any good.
            </p>
        </div>    
    );
}

export default MugCake;
