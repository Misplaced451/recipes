import '../../recipes_style.css';
import '../../bulma.css';
import RecipeLayout from './recipelayout';

const SeedCake = () => {
    return (
        <RecipeLayout 
        name={'Seed Cake'}
        description={'A wonderful snack with tea, adapted from FiveEuroFood'}
        instructions={
        <div className="content">
        <ol>
            <li>Preheat oven to 350F</li>
            <li>Cream butter and sugar in a large bowl</li>
            <li>Slowly add beaten eggs to the butter while beating together</li>
            <li>Sift in flour, salt, and baking powder, then fold until combined</li>
            <li>Fold in caraway seeds until evenly distributed</li>
            <li>Pour into a greased and floured loaf pan, then bake for 30 mins</li>
            <li>Let cool for 10 mins before removing from the pan</li>
        </ol>
        </div>
        }
        ingredients={
        <div className="content">
        <ul>
            <li>180g all-purpose flour</li>
            <li>180g butter, softened</li>
            <li>180g sugar</li>
            <li>3 eggs, beaten</li>
            <li>25g caraway seeds (can use fennel)</li>
            <li>4 tsp baking powder</li>
            <li>Pinch salt</li>
        </ul>
        </div>
        }
        story={
        <div className="story">
            <p>
            Inspired by the seed cakes Bilbo made at the beginning of <em>The Hobbit</em>, I found a recipe for traditional seed cakes from the FiveEuroFood YouTube channel. I'm not 
            sure if this is the best or most authentic recipe, but it has incredibly simple ingredient ratios and was very easy to make. To start, preheat the oven to 350F and beat 
            the butter and sugar together in a process called "creaming". By beating them together on medium speed with an electric beater, you incorporate lots of air into the 
            mixture, yielding a fluffy, light cake. To properly cream the ingredients, you want the end product to be fluffy and very pale in color. Although electric mixers are the 
            fastest way to do it, I like whisking by hand as I find that the butter doesn't get stuck in the whisk as much. Although it seems easy to just whisk butter ang sugar, it's 
            a rather delicate process that's easy to mess up. For starters, keep the butter at room temp, around 65 degrees Fahrenheit. You want to beat on medium speed until it 
            becomes pale and fluffy. If it looks like wet sand, the sugar isn't fully incorporated yet. If it looks oily, the butter is too warm.
            </p>
            <p>
            Next, add the beaten eggs gently while beating to incorporate into the butter and sugar mixture. This will ensure that the mixture is homogenous and still has enough air 
            to rise properly. Sift in flour, baking powder, and salt, then fold with a rubber spatula until just combined. Mixing too vigorously will knock too much air out, but make 
            sure there are no dry pockets of flour left. Generally I don't really care to sift my dry ingredients, but I do it here to ensure that the dry ingredients are mixed in as 
            smoothly as possible. Finally, fold in the caraway seeds until evenly distributed. I don't have caraway seeds at my local grocery store, but I find that fennel seeds are 
            an accessible, delicious substitute, though not exactly authentic.
            </p>
            <p>
            To ensure that the cake doesn't stick to the pan, do the butter and flour method that I always recommend when baking. First, you grease the insides of the pan with butter, 
            then sprinke a light dusting of flour and shake the pan to coat all the sides evenly. Tap out any excess flour that doesn't stick. You should be left with a loaf pan that 
            has a very thin, even layer of flour all around the insides. The butter allows the flour to stick and also lubricates the sides of the pan. The flour creates a dry barrier 
            between the batter and the metal, preventing any sticking that may occur. This is the failsafe method I use for pies, breads, cakes, deep-dish pizzas, etc., and I've never 
            once had it fail. Easy removal, every time.
            </p>
            <p>
            Pour the batter into the prepared pan and bake in the center of an oven at 350F for 30 minutes, or until a toothpick inserted in the center comes out clean. Let cool for 10 
            minutes before removing from the pan, then slice and enjoy! The cake is rather dry and crumbly on its own, but I love the way this cake tastes with a cup of tea and some 
            fresh fruit. The seeds give it a very unique flavor, and the butter gives a nice richness. I highly recommend giving this simple recipe a try for your next afternoon cup of tea.
            </p>
        </div>
        }
        />
    );
}

export default SeedCake;
