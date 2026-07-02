import '../../recipes_style.css';
import '../../bulma.css';
import RecipeLayout from './recipelayout';

const AppleFilling = () => {
    return (
        <RecipeLayout
        name={'Apple Filling'}
        description={"Applie pie filling without the pie."}
        instructions={
            <div className="content">
            <ol>
                <li>Peel, core, and cut apples into half-inch pieces.</li>
                <li>Melt butter in pan over medium heat.</li>
                <li>Add apples, sugar, and salt.</li>
                <li>Stir until sugar dissolves.</li>
                <li>Cook until butter and sugar start to caramelize.</li>
                <li>Add water and lemon juice.</li>
                <li>Cook until slightly thickened, then add vanilla and spices.</li>
                <li>Continue cooking until reduced to syrupy consistency and apples are soft.</li>
            </ol>
            </div>
        }
        ingredients={
            <div className="content">
            <ul>
                <li>2 apples (granny smith preferred)</li>
                <li>2 tbsp sugar</li>
                <li>2 tbsp butter</li>
                <li>1 tsp lemon juice</li>
                <li>0.25 cup water</li>
                <li>0.25 tsp vanilla extract</li>
                <li>1 tsp cinnamon</li>
                <li>0.5 tsp nutmeg</li>
                <li>0.5 tsp allspice</li>
                <li>1 tsp ground ginger</li>
                <li>Pinch salt</li>
            </ul>
            </div>
        }
        story={
            <div className="story">
            <p>
            I originally created this recipe as part of a recipe for mini apple turnovers to use leftover scrap dough from pies, but those turned out horrible. The filling was still good 
            though, so I reworked it to be a stovetop apple filling that would go great with vanilla ice cream, French toast, etc.
            </p>
            <p>
            Peel and core the apples, then cut them into half-inch cubes. I like using granny smith, as they cook without getting too mushy, but you can use honeycrisp if you prefer something 
            sweeter. Melt the butter in a pan over medium heat. Make sure to keep the butter moving as you melt it, so as to avoid breaking the natural emulsion of fat and water in the butter. 
            Add in your apple pieces along with some sugar and a pinch of salt. Stir until the sugar dissolves and continue to cook until the butter begins to brown and the sugar begins to 
            caramelize. If you want to go for a more warm, autumnal feel, substituting brown sugar or maple syrup would also work as sweeteners.
            </p>
            <p>
            Add the water along with a small squeeze of lemon juice. You can even add a bit of lemon zest if you like, but I find it unnecessary. The acidity of the lemon juice will help the 
            natural pectin in the apples thicken the liquid to make a gorgeous, gooey, golden-brown sauce. Once the water comes to a simmer and begins to thicken, add the vanilla extract and 
            the spices. Cinnamon and ginger, supplemented with a bit of nutmeg and allspice, will bring that classic, warm pumpkin-spice smell we all associate with autumn flavors. 
            Continue cooking until the sauce becomes syrupy and the apples are softened all the way through. Now you have the essence of an apple pie in your hands. Do with it 
            what you will, but remember: with great flavor comes great responsibility.
            </p>
            </div>
        }
        />
    );
}

export default AppleFilling;
