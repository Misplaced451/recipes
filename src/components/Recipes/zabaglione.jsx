import '../../recipes_style.css';
import '../../bulma.css';
import RecipeLayout from './recipelayout';

const Zabaglione = () => {
    return (
        <RecipeLayout 
        name={'Orange Zabaglione'}
        description={'A non-alcoholic, citrusy take on this custardy Italian dish. Recipe adapted from Food Wishes.'}
        instructions={
        <div className="content">
        <ol>
            <li>Dice strawberries and toss with 0.5 tbsp of sugar. Let sit for 1 hour covered, tossing occasionally.</li>
            <li>Zest and juice the orange.</li>
            <li>Whisk yolk, sugar, and juice in a bowl.</li>
            <li>Set over double boiler and keep whisking until ribbony.</li>
            <li>Put fruit into a glass, then a bit of zest, then the custard, and more zest on top as a garnish.</li>
        </ol>
        </div>
        }
        ingredients={
        <div className="content">
        <ul>
            <li>3 egg yolks</li>
            <li>2 tbsp sugar</li>
            <li>1 large orange *</li>
            <li>2 strawberries</li>
            <li>0.25 tsp vanilla extract (optional)</li>
        </ul>
        <p>* You can replace the orange with 0.25 cups of marsala wine or moscato.</p>
        </div>
        }
        story={
        <div className="story">
            <p>
            I got this recipe while binging a bunch of Food Wishes videos on YouTube. I decided to make it, since it looked fancy, but I didn't have any marsala wine. At the time, I was 
            underage, so I had no way to buy a bottle anyway. Determined to make the dish regardless, I found that citrus juice could be an acceptable substitute. So I made this 
            non-alcoholic zabaglione, and it's as wonderful to eat as it is to say.
            </p>
            <p>
            First prepare the strawberries that will sit under your zabaglione by dicing them up and tossing them in a bowl with a bit of sugar. By tossing it in sugar and letting it sit, 
            you let the strawberries macerate, which means the sugar will break them down a little to release moisture and they will become nice and soft. This process will take an hour. 
            Just let it sit, but do give it a quick toss every once in a while.
            </p>
            <p>
            Next, zest and juice one whole orange. You'll need about a quarter cup of juice. Whisk the juice with the egg yolks and sugar in a bowl. Set over a double boiler and continue 
            to whisk until pale and thickened. Don't stop whisking, because if the eggs heat up too quick, you'll get scrambled egg. You know you're done when you hold up the whisk and the 
            custard drips down in ribbons.
            </p>
            <p>
            Use a whiskey glass or martini glass to serve. If you don't have one, a cup will do fine. Start by putting in the strawberries, add a small layer of zest, then the custard over 
            top. Garnish with the remaining zest and serve. There's so much sweetness in this dish that the bitterness of the zest does wonders for preventing your palate from being 
            bombarded with sugar. This dessert is the perfect blend of easy and fancy, and now you have a non-alcoholic version of the dish for those who can't consume it.
            </p>
        </div>
        }
        />
    );
}

export default Zabaglione;
