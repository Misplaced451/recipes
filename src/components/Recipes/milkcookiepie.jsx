import '../../recipes_style.css';
import '../../bulma.css';
import RecipeLayout from './recipelayout';

import { Link } from 'react-router-dom';

const MilkCookiePie = () => {
    return (
        <RecipeLayout 
        name={'Milk & Cookie Pie'}
        description={'It\'s milk. And cookies. In a pie.'}
        instructions={
        <div className="content">
        <ol>
            <li>Follow my <Link to={'/piecrust'} className='is-underlined'>Pie Crust Recipe</Link></li>
            <li>Before blind baking the crust, press the chocolate chips into the dough, evenly distributing on the bottom and sides</li>
            <li>Mix milk, sugar, and salt in a saucepan and leave over medium heat</li>
            <li>Whisk eggs and milk powder until smooth</li>
            <li>Whisk the cornstarch into the egg mixture one tablespoon at a time, ensuring there are no lumps</li>
            <li>Bring the milk mixture to a light simmer, stirring gently. Do not boil it</li>
            <li>Temper the egg mixture with a few ladlefuls of the hot milk, then add it back to the saucepan, whisking constantly until thickened</li>
            <li>Cook at a simmer for 2 mins, then take off the heat, continually stirring until thickened and smooth</li>
            <li>Pour filling into cooled crust and let set in the fridge for 4 hours or overnight</li>
            <li>Decorate with cookies and serve</li>
        </ol>
        </div>
        }
        ingredients={
        <div className="content">
        <p>For the Crust/Toppings:</p>
        <ul>
            <li>Pie crust dough</li>
            <li>0.33 cups semi-sweet chocolate chips</li>
            <li>8 chocolate chip cookies</li>
        </ul>
        <p>For the Filling:</p>
        <ul>
            <li>3 cups whole milk</li>
            <li>2 eggs</li>
            <li>3 tbsp cornstarch</li>
            <li>0.33 cups sugar</li>
            <li>0.5 cup milk powder</li>
            <li>Pinch salt</li>
        </ul>
        </div>
        }
        story={
        <div className="story">
            <p>
            I don't remember what inspired this idea, but I wanted to bake a pie that resembled the classic combo of a glass of milk and a chocolate chip cookie. After doing some 
            digging, I found that a milk and cookies pie already exists (in fact, there are several interpretations of the idea online), but I couldn't find one that matched the 
            idea I had in my head: a classic, flaky pie crust with chocolate chunks throughout and a rich, milky filling. Most of the ideas out there use cookie dough crusts, are 
            cookies 'n' cream flavored pies, or are basically just deep-dish pizookies. On the scale between cookie and pie, I wanted a recipe that leans very clearly as pie, but 
            reminds one of that nostalgic childhood feeling of eating milk and cookies. 
            </p>
            <p>
            The crust is easy enough, it's a regular pâte brisée with some chocolate chips pressed into the dough before chilling and blind baking. Because the crust is such a small 
            portion of the pie, you'll need more chocolate chips than you would normally see in a cookie to get a similar look. I think a third of a cup for a 9 inch pie dish is 
            reasonable. You could also use larger chocolate chunks instead of chips, but that might mess with the structural integrity of the crust. Keep in mind that even with chocolate 
            chips, the crust doesn't taste like a chocolate chip cookie. If you want more of that feeling, maybe try using brown butter to make the dough, adding a bit of vanilla extract.
            </p>
            <p>
            For the filling, I did some digging to see if a "milk pie" already exists, and turns out there's a South African delicacy called melktert ("milk tart") which has a custard 
            filling made with lots of milk. I decided to make some modifications to add more milk flavor to the custard by mixing powdered milk into the milk to get more milk per milk. 
            In addition, I removed the flour and omitted the vanilla extract and reworked the ratios of ingredients to ensure that the final product tasted less like a custard and more 
            like a slice of milk. If you want to add even more milk, you could try swapping the sugar for 0.75 cups of sweetened condensed milk (about a third of a can), but I've never 
            tried that myself. Besides, we're adding powdered milk and sugar to milk, which basically makes it a diluted sweetened condensed milk already.
            </p>
            <p>
            While your pie crust cools, the filling will come together quite quickly. Keep the milk in a pot over medium heat and add sugar and salt. In a bowl, whisk the eggs and 
            milk powder until a smooth paste forms. Then add the cornstarch one tablespoon at a time, whisking vigorously to prevent lumps. Because we're adding the cornstarch gradually, 
            it's easier to mix and it helps you find and break down lumps faster. When your egg mixture is fully homogenous, bring the milk mix to a gentle simmer. Do not boil it, as 
            it will bubble over and mess up your stove. Stir gently as it heats up to prevent a skin from forming. Once it begins to simmer, take a ladle and scoop some of the hot milk into 
            the egg mixture, whisking quickly. This will temper the egg mixture, or in other words, heat up the eggs gently while diluting them to prevent them from scrambling as we cook the 
            custard. Continue tempering until the egg mixture is fully dissolved and thin enough to pour easily. Add the egg mixture back to the pot gradually while whisking constantly to 
            ensure even dispersal of the cornstarch.
            </p>
            <p>
            Cook at a simmer while whisking vigorously for 2 minutes to activate the cornstarch and get rid of any chalky taste from it. You may notice some chunks forming on the bottom and 
            think you've messed up. Don't worry, just trust the process. I find that mixing with a whisk is great for slashing up bigger clumps, but a rubber spatula is better for quickly 
            folding the custard to mush everything together and ensure the bottom doesn't cook faster than the top. Take the pot off the heat and continue stirring until the filling is 
            smooth and thickened to a custardy consistency. Pour it into the pie crust and place some plastic wrap over the top, making sure it touches the surface of the filling to prevent 
            a skin from forming. Refrigerate for at least 4 hours or overnight to let the filling set. Before serving, unwrap the plastic and top the pie with chocolate chip cookies. You can 
            crumble them up, cover the top with a layer of whole cookies, or you can do the dipping method (my preferred look). To do this, take your cookies and dip them into the filling. 
            The pie should be shallow enough that half the cookie is still above the surface. I arrange them so that if the pie were sliced into 8 pieces, each slice would look like there's 
            a cookie being dunked into the milk.
            </p>
            <p>
            Now for the million-dollar question: does it taste like milk and cookies? Not exactly. The custard is sweet and milky and melts in your mouth, but because you're getting more 
            custard than cookie in each bite, it doesn't quite feel the same as a dunking a cookie in a glass of cold, fresh milk. Still, the aesthetic is on point, and the pie is delicious 
            and unique. Maybe next Christmas you leave a slice of this out for Santa, it might be nice to surprise him for a change.
            </p>
        </div>
        }
        />
    );
}

export default MilkCookiePie;
