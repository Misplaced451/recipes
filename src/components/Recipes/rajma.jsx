import '../../recipes_style.css';
import '../../bulma.css';

const Rajma = () => {
    return (
        <div className="pt-6 section recipe">
            {/* Intro */}
            <div className="has-text-centered section pt-0">
                <h1 className="has-text-weight-bold is-size-3">Rajma</h1>
                <p className="subtitle">My personal favorite food.</p>
            </div>
            
            <div className="columns mb-6 has-background-light">
                {/* Instructions */}
                <div className="column">
                <h4 className="subtitle has-text-centered-mobile">Instructions</h4>
                <div className="content">
                <ol>
                    <li>Soak the kidney beans in water for 10 hours. Skip this step if using canned beans</li>
                    <li>Put bay leaves and cumin seeds in hot oil in a pressure cooker or instant pot</li>
                    <li>Finely dice onion and add it to the pot, then add ginger (slice into matchsticks if using fresh ginger)</li>
                    <li>Finely dice 2 tomatoes</li>
                    <li>When onion is sweated, add tomato, 3 tbsp coriander powder, 1 tbsp cumin powder, 1 tsp fennel, and salt</li>
                    <li>Add 1 tbsp tomato paste, turmeric, and cayenne once flavors are combined</li>
                    <li>Cook down until paste-like and shiny, making sure to break down the tomato</li>
                    <li>Add beans and half as much water. Add more water if necessary. Beans should be fully submerged</li>
                    <li>Put on the lid and cook until everything comes together, about 5-10 minutes for canned beans, 40-60 mins for pressure cooking soaked beans</li>
                    <li>Chop up cilantro and stir it in and season to taste</li>
                    <li>Serve over rice with ghee and garnish with cilantro leaves</li>
                </ol>
                </div>
                </div>
                
                {/* Ingredients */}
                <div className="column is-4-desktop has-background-grey-lighter">
                <h4 className="subtitle has-text-centered-mobile">Ingredients</h4>
                <div className="content">
                <ul>
                    <li>1.5 cup dry kidney beans (2 cups canned)</li>
                    <li>1 yellow onion</li>
                    <li>2 bay leaves</li>
                    <li>0.5 tbsp cumin seeds</li>
                    <li>3 tbsp vegetable oil</li>
                    <li>0.5 inch fresh ginger (or 1 tbsp ground ginger)</li>
                    <li>2 tomatoes</li>
                    <li>3 tbsp coriander powder</li>
                    <li>1 tbsp ground cumin</li>
                    <li>1 tsp ground fennel</li>
                    <li>1 tbsp tomato paste</li>
                    <li>0.5 tsp cayenne</li>
                    <li>0.5 tsp turmeric</li>
                    <li>Cilantro</li>
                    <li>Salt</li>
                </ul>
                </div>
                </div>
            </div>
            {/* About the recipe */}
            <h4 className="subtitle has-text-centered is-4">Story Time</h4>
            <p className="story">
            If you could choose your last meal, what would you have? I know mine would be my mom's rajma, no contest. Rich, spicy gravy with ruby-red kidney beans poured lovingly over a bed 
            of white rice. That's the good stuff. It's nutritious, delicious, and incredibly filling. If my mom makes it, I just know I'm going to be eating rajma and rice for lunch for 
            the next 3 days. I'm sorry to say that you'll never make it as good as my mom. I can't do it either, that's for sure. But that shouldn't stop you from trying, because even if 
            you mess it up, it's hard to beat a dish that's this good.
            </p>
            <p className="story">
            Start by preparing your kidney beans. After all, that's what “rajma” means in Hindi: kidney beans. If you're doing this the right way, you'll use a cup and a half of dry kidney 
            beans. You'll soak them in cold water overnight for about 10 hours before cooking with them. Of course, if you don't have time to soak the beans, you'll just use 2 cups of canned, 
            pre-cooked kidney beans. You will, of course, save hours of time, but the trade-off is a major reduction in the texture and quality of the flavor. Unless you're using canned beans, 
            the most reliable way to cook beans is in a pressure cooker of some kind. This can be an instant pot or a traditional cooker. The pressure increases the boiling point of water, 
            allowing the beans to simmer at a much higher temperature. When exposed to this high temperature for an extended period of time, it will neturalize the dangerous toxin present in 
            most beans. Regular boiling will work, but it'll take hours. The higher heat that the pressure cooker provides ensures that the toxin-destroying process only takes about 40 minutes.
            </p>
            <p className="story">
            But before adding the beans, we have to make the gravy to cook them in. Begin by heating up 3 tablespoons of vegetable oil on medium high heat in your cooker. When shimmering, 
            add bay leaves and half a tablespoon of cumin seeds. While that toasts, chop up 1 medium onion finely and add it to the pot along with the ginger. Let the onion sweat out 
            and move it occasionally. In the meantime, finely dice 2 tomatoes and add them once the onion is translucent along with 3 tablespoons coriander powder, 1 tablespoon cumin powder, 
            1 teaspoon of fennel, and a pinch of salt. Do not skip any of these spices, omitting a single one will change the flavor completely, trust me. You may think that adding cumin powder 
            is unnecessary because we already added whole cumin seed earlier, but the powdered form changes the texture and develops flavor differently through the cooking process compared to 
            whole seeds. Once all the spices get mixed together, add turmeric and cayenne powder along with a spoonful of tomato paste. This will add flavor, richness, and it'll speed up the 
            cooking process a bit, since you don't have to cook the tomatoes as much. Stir as you cook, mashing the tomatoes until a paste-like consistency is achieved. Once the paste begins 
            leaking a little oil around the edges, that means the spices are cooked through. This may take a while, but it's crucial. If you feel that the paste is too dry or getting burnt, 
            add a little splash of water and continue cooking. If it still isn't leaking its oil, you may need a little extra oil to help it along.
            </p>
            <p className="story">
            Next, add the beans to the mix and add enough water to just barely cover them. The canned beans are pre-cooked, so they'll only need another 10 minutes to assimilate with the 
            flavors of the dish. Cooking for much longer will make them too mushy, which is why the soaked-bean method is much better than canned. The 40+ minute pressure cooking time allows 
            the flavors to meld together much better, and yields tender, large, flavorful beans as opposed to mushier, smaller, and blander ones. At the end of the day, I won't knock you for 
            choosing one method over another, it all depends on your convenience, but each preparation has its own set of advantages and disadvantages. Once you add the beans and their water, 
            bring to a simmer, turn down the heat, cover with a lid and continue to let it simmer for 30 or 10 minutes, depending on whether you used soaked or canned beans respectively.
            </p>
            <p className="story">
            While the beans are cooking, separate the stems from the leaves of the cilantro and roughly chop them up. When the beans are done, depressurize the cooker, open the lid, and smash 
            at least a quarter of the beans against the sides of the pot. This will release the paste inside the beans which will add body and flavor to the gravy. Add the cilantro stems and 
            stir well. Many people throw out cilantro stems, but they contain a ton of the flavor and purported health benefits, so it's important to put them to good use like this. Cover 
            with the lid for another 5 minutes with the heat off and then taste for seasoning, adjusting salt as necessary.
            </p>
            <p className="story">
            Serve the rajma over rice and top with chopped cilantro leaves, ghee, and some slices of raw or pickled red onion if you're feeling fancy. The ghee really makes the biggest 
            difference here, it's just not the same without a spoonful of it melting over the top of the beans. You might notice that you've made way too much for one person, as it's a 
            very filling dish. That's okay, it's one of those special foods like lasagna that taste even better when reheated the next day. This meal was a staple for me when I was 
            meal-prepping during my bulking phase. Packed with iron, fiber, complex carbs, protein, and most of all, flavor, rajma is a wonderful weeknight meal to add to your repertoire.
            </p>
        </div>
    );
}

export default Rajma;
