import '../../recipes_style.css';
import '../../bulma.css';
import { Link } from 'react-router-dom';

const MilkCookiePie = () => {
    return (
        <div className="pt-6 section recipe">
            {/* Intro */}
            <div className="has-text-centered section pt-0">
                <h1 className="has-text-weight-bold is-size-3">Milk & Cookie Pie</h1>
                <p className="subtitle">It's milk. And cookie. In a pie.</p>
                <p className="subtitle has-text-danger">WORK IN PROGRESS - RECIPE INCOMPLETE</p>
            </div>
           
            <div className="columns mb-6 has-background-light">
                {/* Instructions */}
                <div className="column">
                <h4 className="subtitle has-text-centered-mobile">Instructions</h4>
                <div className="content">
                <ol>
                    <li>Follow my <Link to={'/piecrust'} className='is-underlined'>Pie Crust Recipe</Link>, but fold in chocolate chips after step 3</li>
                    <li>Heat up milk in a saucepan, then whisk in the milk powder and a pinch of salt</li>
                    <li>Whisk eggs, flour, cornstarch, and sugar until a paste forms</li>
                    <li>Temper the egg mixture with half the milk, then add it back to the saucepan, whisking constantly until thickened</li>
                    <li>Pour filling into blind baked crust and let set in the fridge for 4 hours or overnight</li>
                </ol>
                </div>
                </div>

                {/* Ingredients */}
                <div className="column is-4-desktop has-background-grey-lighter">
                <h4 className="subtitle has-text-centered-mobile">Ingredients</h4>
                <div className="content">
                <p>For the Crust:</p>
                <ul>
                    <li>2.5 cups all-purpose flour, chilled</li>
                    <li>1 tsp salt</li>
                    <li>1 cup butter, cold, cubed</li>
                    <li>0.33 cups ice-cold water</li>
                    <li>Chocolate chips</li>
                </ul>
                <p>For the Filling:</p>
                <ul>
                    <li>2.5 cups whole milk</li>
                    <li>2 eggs</li>
                    <li>2 tbsp AP flour</li>
                    <li>2 tbsp cornstarch</li>
                    <li>0.5 cups sugar</li>
                    <li>0.5 cup milk powder</li>
                    <li>Pinch salt</li>
                </ul>
                </div>
                </div>
            </div>
            
            {/* About the recipe */}
            <h4 className="subtitle has-text-centered is-4">Story Time</h4>
            <p className="story">
            I don't remember what inspired this idea, but I wanted to bake a pie that resembled the classic combo of a glass of milk and a chocolate chip cookie. After doing some 
            digging, I found that a milk and cookies pie already exists (in fact, there are several interpretations of the idea online), but I couldn't find one that matched the 
            idea I had in my head: a classic, flaky pie crust witch chocolate chunks throughout and a rich, milky filling. Most of the ideas out there use cookie dough crusts, are 
            cookies 'n' cream flavored pies, or are basically just deep-dish pizookies. On the scale between cookie and pie, I wanted a recipe that leans very clearly as pie, but 
            reminds one of that nostalgic childhood feeling of eating milk and cookies. 
            </p>
            <p className="story">
            The crust is easy enough, just fold chocolate chunks or chips into a pâte brisée and bake. Should result in something light, flaky, and buttery with chocolate strewn 
            throughout, which is what I pictured. For the filling, I did some digging to see if a "milk pie" already exists, and turns out there's a South African delicacy called 
            melktert ("milk tart") which has a custard filling made with lots of milk. I decided to make some modifications to add more milk flavor to the custard by mixing powdered 
            milk into the milk to get more milk per milk. I don't want it to taste like a custard pie, I want it to taste as much like milk as possible. Never tried this before, but 
            we'll see how it goes.
            </p>
        </div>
    );
}

export default MilkCookiePie;
