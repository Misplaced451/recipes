import '../../recipes_style.css';
import '../../bulma.css';
import RecipeLayout from './recipelayout';

const Ricotta = () => {
    return (
        <RecipeLayout 
        name={'Ricotta'}
        description={'Recipe from Bon Apetit.'}
        instructions={
        <div className="content">
        <ol>
            <li>Heat the cream and milk until at 200°F, stirring occasionally.</li>
            <li>Stir in salt and vinegar when the liquid comes up to temp.</li>
            <li>Allow the curds to form off the heat for 15-20 mins then strain through a cheese cloth.</li>
            <li>Let it drain without squeezing through the cheese cloth for 30 mins.</li>
        </ol>
        </div>
        }
        ingredients={
        <div className="content">
        <ul>
            <li>7 cups whole milk</li>
            <li>1 cup heavy cream</li>
            <li>2 tsp salt</li>
            <li>5 tbsp white vinegar</li>
        </ul>
        </div>
        }
        story={
        <div className="story">
            <p>
            I've always thought it would be cool to make my own cheese. Usually you need some kind of enzyme like rennet to make cheese, but ricotta is a little different. As long as you 
            have a pot, some everyday ingredients, a food thermometer, and a cheesecloth, you can make this versatile cheese any time you want. Top your fresh ricotta with some salt, pepper,
            and olive oil, and you have a simple, delicious dip. Spread it on toast. Eat it with peaches. Add it to lasagna. The possibilities are endless.
            </p>
        </div>
        }
        />
    );
}

export default Ricotta;
