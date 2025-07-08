import '../../recipes_style.css';
import '../../bulma.css';

const StirFry = () => {
    return (
        <div className="pt-6 section recipe">
            {/* Intro */}
            <div className="has-text-centered section pt-0">
                <h1 className="has-text-weight-bold is-size-3">Chicken Stir Fry</h1>
                <p className="subtitle">Chicken breast can taste good if you know how to cook it</p>
            </div>
            
            <div className="columns mb-6 has-background-light">
                {/* Instructions */}
                <div className="column">
                <h4 className="subtitle has-text-centered-mobile">Instructions</h4>
                <div className="content">
                <ol>
                    <li>Slice chicken against the grain into thin strips and put in a bowl</li>
                    <li>Add baking soda, soy sauce, MSG, cornstarch, salt to taste, and a splash of water. Massage into chicken until coated in a thick paste</li>
                    <li>Grate ginger and garlic onto chicken, add white pepper, oil, and vinegar, then massage thoroughly and let sit for 20 mins</li>
                    <li>Meanwhile, wash broccoli, dice carrots, mince remaining garlic, and thinly slice the onions, scallion whites, and bell pepper</li>
                    <li>Heat up a tbsp of oil in a wok. Once searing hot, add half the chicken and stir fry until golden on all sides</li>
                    <li>Remove the chicken for the time being, add another tbsp of oil to the wok and stir fry the rest of the chicken</li>
                    <li>Once all the chicken has developed color and has been set aside, heat up the last tbsp of oil</li>
                    <li>Stir fry the vegetables, adding onions first, then garlic, then bell peppers, then broccoli and scallion whites, then carrot</li>
                    <li>Season with MSG, black pepper, white pepper, and salt to taste. Cook until the vegetables get some color on them</li>
                    <li>When the vegetables are close to done, add the chicken back in and stir fry together until the flavors get to know each other</li>
                    <li>Add a tbsp of soy sauce around the outside so it caramelizes on the edges, and stir it into the mix</li>
                    <li>Deglaze with rice wine vinegar and take off the heat</li>
                    <li>Thinly slice scallion greens on a bias and use as a garnish when serving</li>
                </ol>
                </div>
                </div>
                
                {/* Ingredients */}
                <div className="column is-4-desktop has-background-grey-lighter">
                <h4 className="subtitle has-text-centered-mobile">Ingredients</h4>
                <div className="content">
                <p>Chicken marinade</p>
                <ul>
                    <li>1.5 lbs chicken breast</li>
                    <li>0.25 tsp MSG</li>
                    <li>0.5 tsp baking soda</li>
                    <li>0.25 cups corn starch</li>
                    <li>0.5 tbsp sugar</li>
                    <li>1 tbsp soy sauce</li>
                    <li>0.5 tbsp rice wine vinegar</li>
                    <li>1 tbsp oil</li>
                    <li>1 clove garlic</li>
                    <li>0.5 tbsp ginger</li>
                    <li>White pepper</li>
                    <li>Salt</li>
                </ul>
                <p></p>
                <ul>
                    <li>3 tbsp oil</li>
                    <li>0.5 yellow onion</li>
                    <li>1 red bell pepper</li>
                    <li>1.5 cups broccoli florets</li>
                    <li>2 carrots</li>
                    <li>2 scallions</li>
                    <li>2 cloves garlic</li>
                    <li>Black pepper</li>
                    <li>White pepper</li>
                    <li>1 tbsp soy sauce</li>
                    <li>0.5 tbsp or rice wine vinegar</li>
                </ul>
                </div>
                </div>
            </div>
            
            {/* About the recipe */}
            <h4 className="subtitle has-text-centered is-4">Story Time</h4>
            <p className="story">
            When I was cutting weight, I wanted to mealprep something that was high in protein and micronutrients with balanced macros. This recipe makes 3 servings of 
            delicious stir fry, coming out to just 563 calories (56g protein, 24g carbs, 25g fat). In order to make this more satiating and higher in complex carbs, I 
            usually have each serving over a cup of cooked brown rice, which increases the calorie count to 811 (61g protein, 72g carbs, 27g fat). Although I strongly 
            recommend variety in one's diet, this meal carried me through my cut and I ate it 6 days a week. The variety in vegetables, amount of lean protein and fiber, and 
            surprisingly low amount of fat for stir-fry make it very nutritious. It also has a taste that rivals takeout food to help curb the cravings. And the best part is, 
            it's super easy!
            </p>
            <p className="story">
            First, slice the chicken breast against the grain into thin slices. If you look closely, you'll see that the muscle fibers in the breast are aligned in a certain 
            direction. Your cuts should be perpendicular to these fibers. The reason why you want to go "against the grain" of the meat in this way is because muscle fibers are 
            easier to separate from one another than they are to break down. This means that when you chew, you want the muscle fibers to be as short as possible. A piece of 
            meat sliced with the grain will be tough and stringy, while one that's cut against the grain will be tender and break apart easily. This is the same hack that 
            restaurants use to make sure that their steaks are more tender as well: slicing against the grain of the muscle. This is also the reason we want the slices to be cut 
            as thin as possible, to shorten the length of the muscle fibers in each piece to make chewing easier. However, this method means the slices at the narrow end of the 
            breast will be way too small compared to the thicker end. To mitigate this, tilt your wrist to the side to get more of a diagonal slice in the narrower parts. Although 
            this will reduce the tenderness of those pieces to some extent, it will ensure that the slices are relatively similar in size, allowing them to cook at the same rate. 
            Don't worry though, the marinade will tenderize it even more, so you don't need to worry about those slices getting too tough to chew.
            </p>
            <p className="story">
            Add the chicken slices to a bowl, and sprinkle over the baking soda, sugar, and MSG. This isn't even half the ingredients of the marinade, but despite the high number 
            of ingredients, each one serves a purpose. Baking soda will help break down the meat fibers and tenderize them. The sugar adds a subtle sweetness and assists in the 
            caramelization of the crust when we fry the chicken. MSG adds an incredible umami (savory) flavor that is quintessential to East Asian cuisine, especially Chinese food. 
            Although many rumors of MSG toxicity and allergies have been thrown around for decades, recent research fails to support those claims. Oftentimes, an unnatural sounding 
            chemical can sound scary and unhealthy, so when we notice ill health effects from eating certain foods, we tend to point to the unknown substance first. So let's take the 
            mystery out of it. Monosodium Glutamate (MSG) is a chemical that, when dissolved in water, breaks down into sodium ions and glutamate. Sodium is a necessary nutrient for 
            us and glutamate is a naturally occurring substance found in many foods such as kelp, tomatoes, mushrooms, meat, aged cheeses, and nutritional yeast. Basically, if you 
            can eat parmesan cheese and not feel sick, you'll be fine to consume MSG. So what about the number of studies that claim that it's bad for you? A few people may notice 
            headaches after eating 3g of pure MSG without any food. Most foods with MSG (including a serving of this recipe) have less than 0.5g and it's diluted with so much other 
            food that it's not going to realistically affect you. Also, the studies linking it to obesity and heart disease fail to take into acccount that it's usually added to junk 
            food and fast food, which are designed for high palatability and overconsumption, which cause the aforementioned conditions. Besides, the low nutritional value and high 
            caloric density of those kinds of foods is what makes us feel ill after eating them, so it might not be the MSG that's causing people headaches. In other words, MSG's 
            only crime is that it's so delicious, you might accidentally eat too much of the other stuff that you're actually going to get sick from. In short, MSG is (like everything 
            else) perfectly safe in moderation, and the amount used in this recipe is plenty to improve the flavor and not nearly enough to cause any damage to your health.
            </p>
            <p className="story">
            Now that the MSG rant is over, let's finish the marinade. Add a tablespoon of soy sauce for flavor and saltiness, and season with a little extra salt to taste. Now add a 
            quarter cup of cornstarch to the mix. This will turn the marinade into almost a batter that will brown very nicely when fried. Mix with your hands, massaging the marinade 
            into the chicken until a homogenous liquid paste forms and coats every piece of chicken. You may need a couple tablespoons of water to dissolve all the cornstarch, but 
            don't add too much, as excess liquid will cling less to the chicken and crisp up slower. All this battering and seasoning is going to keep the chicken extremely tender 
            and prevent it from being dry and flavorless.
            </p>
            <p className="story">
            To finish the marinade, grate in a little garlic and ginger. In a pinch you can use powdered ginger and garlic, but the complexity and strength of the aromas from fresh 
            ingredients will serve you much better here. Add a splash of rice wine vinegar for a little acidity and flavor and a tablespoon of oil to allow the pieces to separate 
            more easily. Season generously with some white pepper. This is a staple spice in Chinese cooking and has a milder spiciness than black pepper, with some musty, earthy 
            characteristics that I think elevate meat-based dishes to another level. Massage the new ingredients into the marinade and let the mixture sit for 20 minutes. Unlike 
            other marinades which go for hours, the thin pieces mean we don't need much time at all for the flavors to do their work. Also, if meat is left in baking soda for too 
            long, it stops being tender and starts getting rubbery, so it's best not to go any longer than 20-30 minutes. This is the perfect time to chop up all your vegetables, 
            as stir-fry moves fast. The high heat means you won't have time to wash and slice each ingredient as you cook, so it's better to prep it all beforehand.
            </p>
            <p className="story">
            Once the chicken is done marinating, heat up 1 tbsp of oil in a wok or a pot on high heat. Once the oil starts to shimmer, add in half the chicken. Stir the pieces as 
            you fry to prevent anything from burning and to separate all the pieces. Cook just until a golden-brown crust forms on all sides of the pieces, then set aside in a bowl. 
            Add another tbsp of oil in the pot and fry the other half of the chicken the same way. The reason we fry it in batches is to avoid overcrowding the pot. By adding fewer 
            items in the pot at one time, we make it easier to get all the pieces separated and give them enough space for the water to be evaporated and the batter to brown. Also, 
            adding a bunch of cold chicken will immediately drop the temperature of the hot oil, so we mitigate the temperature drop by adding fewer cold things all at once, which 
            lets the chicken cook faster.
            </p>
            <p className="story"> 
            When all the chicken is fried and set aside, add one last tbsp of oil and begin stir frying the vegetables. Normally, restaurants would use a lot more oil, but I designed 
            this recipe to be a little more macro-friendly, so I kept it as low-fat as I could while still staying true to the techniques and flavors of stir fry. Start with the onion, 
            as we want it to soften as much as possible. Add the garlic right after. If we added the garlic first, it would be more likely to burn. Even with the onions releasing water 
            and cooling the pot enough to delay burning, the high heat still carries a risk of burning your ingredients if left unattended for even 30 seconds. This is why it's so 
            important to keep things moving constantly while stir frying: we want everything to cook fast, but not to be in contact with the hot surface long enough to burn. Nor do we 
            want all the ingredients to lie still in the middle of a large heap, because they'll just get steamed and won't develop the flavor and texture we want from stir frying. This 
            technique of hot-and-fast cooking is important to learn, especially since it's so opposed to the low-and-slow cooking that people in the West are accustomed to. The reason 
            for this technique is said to be that lumber, in the highly populated cities of China, was a more scarce resource compared to rural areas with less demand and more forests. 
            This meant that if you had less fuel for your fire, you needed to develop a cooking method that was as fast as possible so you could cook over a quick blaze in a few minutes 
            rather than over a prolonged flame for hours. This also had the added benefit of preparing food quickly to accomodate the bustling life of an urban area. This technique allows 
            food to cook quickly and develop a lot of great flavors without breaking down too much and becoming mushy. That's why it's important to pay attention when stir frying, not just 
            to how often you move the ingredients, but timing the addition of the next ones so that they all finish cooking in the pot around the same time.
            </p>
            <p className="story"> 
            Once the onion starts to turn translucent, add the bell pepper. Once the pepper and the onion start to develop a little color, add the scallion whites and broccoli. As the 
            broccoli cooks, its color will deepen. Once it goes from a pale green to a more intense green, add the carrots last. I don't like mushy carrots in my stir fry, so I always hold 
            off on adding them until close to the end. This way, they'll cook through but still have some texture to them. Season with salt to taste and a generous helping of white and black 
            pepper. Once all the flavors are combined, add the chicken and fry together until the chicken is heated through. Finally, take a tablespoon of soy sauce and drizzle in a ring 
            around the food, allowing it to caramelize slightly on the sides of the pot. Once combined, turn off the heat and finish with half a tablespoon of rice wine vinegar drizzled in 
            the same way to help get rid of those pungent vinegar fumes faster. The residual heat of the pot and the ingredients should be enough to take the edge off that vinegar and allow 
            it to combine nicely with the other flavors. Take off the heat and continue stir frying until the pot stops sizzling. Serve next to some brown rice and garnish with the scallion 
            greens. If you slice the greens thinly on a bias (at a steep diagonal angle), it will help the presentation look a little fancier. If you want to add or remove ingredients to this 
            recipe, go ahead. This is the method that works well for me, but you can adjust to your tastes and nutritional requirements as needed. 
            </p>
        </div>    
    );
}

export default StirFry;
