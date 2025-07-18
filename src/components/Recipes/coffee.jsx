import '../../recipes_style.css';
import '../../bulma.css';

const Coffee = () => {
    return (
        <div className="pt-6 section recipe">
            {/* Intro */}
            <div className="has-text-centered section pt-0">
                <h1 className="has-text-weight-bold is-size-3">Cold Brew Coffee</h1>
                <p className="subtitle">A standard recipe for cold brew concentrate</p>
            </div>
            
            <div className="columns mb-6 has-background-light">
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
                    <li>2 oz coarse ground coffee</li>
                    <li>2 cups water</li>
                </ul>
                </div>
                </div>
            </div>
            
            {/* About the recipe */}
            <h4 className="subtitle has-text-centered is-4">Story Time</h4>
            <p className="story">
            As someone who hates the taste of coffee, this is as palatable as black coffee gets. Gently steeping at room temperature over the course of hours prevents 
            many of the bitter, harsh flavors from being extracted from the beans. However, because of the massive amount of coffee used per cup, it's extremely strong, 
            so dilution is critical for a balanced flavor. The standard ratio for brewing concentrate is 1:8 coffee to water by weight, which is the ratio I've used 
            here. I didn't convert the coffee to a volume measurement because it varies so much based on grind size and roast level, so I recommend using a kitchen scale 
            if you have one, or estimating based on the weight per tablespoon based on what's written on your coffee bag. Because 1 oz of water is close to 1 fl oz, 
            and 8 fl oz is 1 cup, this means that the easiest way to estimate the 1:8 ratio is to just use 1 oz of coffee per cup of water. 
            </p>
            <p className="story">
            To start, I usually pour filtered water into a mason jar with the coffee grounds, give it a good stir, and let it sit on the counter with the lid screwed on for 12 
            hours. If you have a French press, you can make your life a lot easier by using that instead. I find it best to get the brew started after dinner so it's ready
            for breakfast the next day. After it's done, you'll notice a bit of crust on the top, and when you stir it, you'll hear some light fizzing. This is normal, as 
            the grounds float to the top and release CO2. After stirring, filter it out through a fine mesh strainer. If you really want to ensure as smooth of a cup as 
            possible, you can pass it through a coffee filter or cheesecloth as well. Alternatively, a French press will typically yield smooth enough coffee that you won't 
            need the strainer as long as you don't press down on the grounds too much while plunging. Personally, I don't mind a little sediment, so I usually just stick with
            the mesh strainer.
            </p>
            <p className="story">
            This recipe yields 16 fl oz of cold brew concentrate. This is meant to be diluted with an equal amount of water, milk, or your preferred milk alternative, meaning 
            that you can make two 16 fl oz servings of coffee overall. For reference, 16 fl oz is a small cold drink at Dunkin Donuts, a grande at Starbucks, a large at Peet's, 
            and a medium at Dutch Bros. This means that this recipe is enough for two people, or one person for two days. Whenever I make this, I reserve half the concentrate in 
            the fridge for the next day. It won't keep longer than a couple days though, so if you plan on meal-prepping in this way, I would either make this amount every other 
            day or make a larger batch and freeze it in ice cube trays to use throughout the week.
            </p>
            <p className="story">
            Although this recipe uses a ton of coffee grounds and takes a long time to brew, it's actually very efficient. I was able to make it regularly without any presses, 
            filters, grinders, etc. using just a mason jar, a strainer, and some coffee I found at the grocery store. The brewing process is very easy and hands-off, and almost 
            impossible to mess up. Honestly, the amount of time you actively need to make it is comparable to the amount of time it takes to stand in line and order at a coffee 
            shop. Also, I compared the cost of buying Starbucks grounds and making this at home versus buying the same amount of cold brew from Starbucks, and I found that you 
            can save as much as $3.72 per 16 fl oz serving. That means if you drink one of these every morning, you save $1,358.73 per year! If you put that money into a Roth IRA 
            with an average annual return of 6% adjusted for inflation, then over the course of a 40-year career, you could save up over $200,000 for your retirement! That won't 
            be enough to last through retirement on its own, but I wouldn't say no to having a fifth of a million dollars tax free. Of course, these calculations are based on 
            2025 prices in my area, so your mileage may vary. Also, just as a disclaimer, this isn't meant to be financial advice, I'm just giving this example to illustrate how 
            small savings from homemade recipes can compound over time with safe, long-term strategies. When every little bit helps, something as simple as your morning coffee 
            can go a long way.
            </p>
        </div>    
    );
}

export default Coffee;
