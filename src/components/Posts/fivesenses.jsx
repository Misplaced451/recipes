import '../../recipes_style.css';
import '../../bulma.css';

import { Link } from 'react-router-dom';

const FiveSenses = () => {
    return (
        <div className="pt-6 tabcontent recipe section">
            {/* Intro */}
            <div className="has-text-centered section pt-0">
                <h1 className="has-text-weight-bold is-size-3">Cooking With The Five Senses</h1>
            </div>

            <div className="section pt-0 columns">
            <div className="column is-2-desktop"></div>
            <div className='column is-8-desktop content story'>
            <p className='has-text-centered subtitle is-4 no-indent'>Cooking: A Multisensory Experience</p>
            <p>
            I always say cooking is the best hobby, because it's the only one you're allowed to eat. But the thing is, you don't really smell or touch a lot of artworks either. 
            Cooking is a multisensory art form, and there are strong evolutionary reasons as to why. Unlike other hobbies or art forms, the procurement of food is integral to 
            basic survival. Every sense we have is doing its best to try and figure out what's safe to eat, and more importantly, what isn't. Because of how intertwined the 
            experience of food is with survival, it's also a deeply emotional process. Sometimes just mentioning food, like a tea-soaked madeleine, the smell of a backyard 
            barbecue, or the crisp crunch of a juicy Honeycrisp apple, can elicit potent associations with emotionally-charged memories or reactions. Maybe the madeleines made 
            you remember a passage from a book you loved. Maybe the barbecue made you recall the smell of smoke at your friend's cookout last summer. Maybe your mouth subconsciously 
            began salivating at the thought of crunching into a fresh, sweet, bright red apple. People often associate food with taste alone, sometimes smell, but it's so much broader 
            than that. Cooking with only taste and aroma in mind is like painting only in red and yellow. And you can make wonderful artwork like that, but you could do so much more. 
            The best way to cook is to not only master the art of cultivating taste, but smell, sight, sound, and touch too.
            </p>
            <p>
            The five senses aren't just important for eating, they're important for cooking too. Gauging the doneness of food, the rate at which it's cooking, the seasonings and 
            other ingredients needed to enhance the dish. By playing around with the five senses and learning how the perception of food changes in various ways as it's prepared, you 
            can become a better cook.
            </p>
            <p className='has-text-centered subtitle is-4 mt-6 no-indent'>The Taste of Food</p>
            <p>
            Tasting food as you cook is one of the most underrated tips that a home cook or chef must know. A lot of food is seasoned "to taste" with salt, herbs, and spices. 
            Tasting your food at different parts of the process lets you know what to adjust, and helps refine your ability to taste when something's off. Managing taste is often 
            a balancing act, and knowing instinctively to add a little squeeze of lemon for brightness or a carrot to bring out a gentle sweetness can add a lot of 
            dimension to your food. Taste has five dimensions that we know of: sweet, salty, sour, bitter, and umami.
            </p>
            <p>
            Sweet is our body's response to detecting sugar. The reason why we like sweetness is because the implication that a food contains sugar means that it has simple 
            carbohydrates that can be used for energy very quickly. A very useful resource for our ancestors who foraged for their meals. It's most commonly associated with desserts 
            and snacks, and isn't often welcome in main meals as it can easily overpower the more complex flavors of a dish. However, that's not to say that you can't use sugars at 
            all in savory meals. Like I said before, managing taste is a balancing act. A lot of foods naturally contain bitter or sour compounds that could be very unpleasant in 
            excess. How do you get the same amount of flavors from these ingredients without making your dish too bitter or too sour? A spoonful of sugar helps the medicine go down, 
            as they say. Certain vegetables (like carrots, as mentioned earlier) have natural sugars but aren't cloyingly sweet, making them perfect for this application. Some people 
            even go so far as to develop the sugars in these vegetables, like with the caramelized onions of a French onion soup. Fruit can also be a good source of sweetness but 
            should be used mindfully. Pineapple on pizza is the most famous (and controversial) application. Some people enjoy the sweet-salty contrast, and some people abhor it. 
            There are more sensible applications and traditional applications of fruit, like a duck l'orange or a porkchop with applesauce, but they're not as common. The contrast 
            that sugar provides to savory dishes doesn't stop there. There's a Korean phrase, "danjjan danjjan" (lit. "sweet-salty, sweet-salty") that refers to the intentional 
            contrast between these two dimensions in savory meals and snacks. Honey garlic fried chicken is the most notable example I've seen in Korean restaurants. Needless to 
            say, the applications of sweetness go far beyond sugary snacks and decadent desserts.
            </p>
            <p>
            Salty is our body's response to detecting, well, salt. Sodium, to be specific. Much like sugar, it's a highly palatable taste that makes it very enjoyable. This is 
            because salt contains both sodium and chloride, both of which are electrolytes critical to maintianing fluid balance, especially in our foraging ancestors who led much 
            more active lives than we do. That being said, too much salt in food can be a problem, not just for health, but for flavor. For most foods, you should add salt until 
            it's flavorful, not until it tastes like salt. Salt has a lot of chemical properties that help it enhance the natural flavors of your food. The trick is to add enough 
            to maximize that flavor-boosting effect, but if you add too much and the dish becomes noticeably salty, it starts to get unpleasant. Of course, things like chips, salted 
            nuts, etc. are specifically designed to be salty, but you don't want your stew being as salty as a bag of Fritos.
            </p>
            <p>
            Sour is our body's response to acid. Acid produces a mouthwatering effect (we need the extra saliva to balance pH levels in our mouths), but salivation helps break down 
            food and often makes it more enjoyable. Acids in moderation can be quite pleasant, and sometimes even healthy. Nutrients like vitamin C, for example, are highly acidic. 
            However, acidity can also be caused by spoilage or can directly damage your teeth and digestive system, which is likely why super sour foods can taste really off-putting. 
            Sour is a sharp taste that's best balanced with something that tastes more "round", like sweetness or fat. The opposite is also true: if your sauce is too sweet, maybe a 
            little splash of vinegar will do the trick. Eating a particularly greasy meal like fish and chips? There's a reason why they give you a slice of lemon with it. The bright, 
            fresh flavors of the lemon and its citric acid will cut right through the heaviness of the grease and give you a much more delicate and flavorful bite. The chemical way 
            to balance out acid is to add a base. In the kitchen, this is typically done by adding baking soda. However, most people don't add baking soda to acidic food to augment 
            the sourness, but to create air bubbles or manipulate the rate at which food caramelizes. 
            </p>
            <p>
            Bitter is our body's response to certain alkaloids. The reason why bitterness doesn't taste good is because many common toxins in nature contain these bitter compounds. 
            Strychnine, cyanide, atropine, etc. Because vomiting, blurry vision, muscle spasms, heart attacks, and painful death are all unpleasant, it's no wonder we despise bitterness 
            so much. However, not all bitter compounds are bad for you. Some of them found in plants are actually healthy, but taste bitter because it's the plant's way of encouraging 
            you not to eat it. That's why people don't like broccoli, kale, and other greens and cruciferous vegetables. But did you know that by blanching your greens (boiling in very 
            salty water for about 1 minute and letting cool in a bowl of ice-water to prevent overcooking), you can actually neutralize the bitterness and improve the color? The bitterness 
            of these vegetables is caused by glucosinates which can be leached out into the water pretty quickly. Cooking briefly like this also deactivates enzymes that cause vegetables 
            to look pale, so your greens will develop a vibrant, lush, emerald color. Because blanching uses very salty water, it also seasons your greens slightly, bringing out the 
            sweetness and natural flavors. Dropping them in the ice bath after blanching is done to ensure that they don't get mushy and lose their greenness through overcooking. All this 
            advice is about reducing bitterness, but there are <em>some</em> bitter foods we like, right? I'm not so sure. The most common examples of enjoyable bitterness are coffee, 
            tea, chocolate, and beer. All of which contain either caffeine or alcohol, which are habit-forming substances. So is it the bitterness we enjoy? Or the fact that our pattern-seeking 
            brains taste the bitterness and jump for joy because they know the drugs are about to hit? Either way, bitterness is certainly an acquired taste, and when used in moderation, 
            it can help offset sweetness or saltiness and add some complexity to your food.
            </p>
            <p>
            Umami is our body's response to amino acids called glutamates. "Umami" is a Japanese word that means something like "savoriness" or "tastiness", and it most certainly is. 
            Glutamates are typically a sign that a food has a decent amount of protein, which is why meat tastes so good. Foods like aged cheeses, meats, mushrooms, soy sauce, miso, 
            and even tomatoes are all very high in umami. The best way to add more umami to your food is by using monosodium glutamate (MSG). A lot of people are scared of MSG, and 
            some often claim to have an allergy or sensitivity to it. However, there's no medical or scientific evidence to support this outside of anecdotal experience (which can be 
            chalked up to either the placebo effect or correlation, not causation). I'm not denying the possibility that such a sensitivity exists, but it would be a devastating condition 
            if it did. When MSG is dissolved in water, it immediately breaks down into glutamate and a sodium ion (MSG can also add a bit of saltiness to food for this reason). Because 
            glutamate is a naturally occurring amino acid in so many foods (as mentioned above), the question you need to ask yourself is this: if you have an allergic reaction to MSG, 
            do you have the same reaction to chicken? How about mushrooms or tomatoes? You like parmesan cheese? If so, then you're not allergic to MSG. Your reaction is probably 
            triggered by high sodium levels in your diet or an allergy to something else like soy. That being said, MSG is incredibly potent in flavor, so a little pinch goes a long way. 
            Use it to enhance food, not to overpower it.
            </p>
            <p>
            As a side note, people sometimes consider spiciness to be a taste, but it's actually a somatosensation. Capsaicin, the spiciness molecule, sends heat and pain signals to the 
            brain, causing a burning sensation. But "fire" is not really a taste, it's a feeling. The opposite is true for menthol, which causes a cooling sensation responsible for the 
            cooling feeling when we eat mint. It's important to note that although spiciness and mintiness are hot and cold respectively, they're NOT mutually exclusive. These sensations 
            are processed in two different ways on the tongue and in the brain, so you can't make a spicy dish less spicy by throwing some mint leaves in there.  
            </p>
            <p>
            Learning to play the balancing act of taste is so important to adding dimension to your food. Learning how some tastes enhance or counterbalance others is so critical in taking 
            your recipes to the next level. Tired of boring old tomatoes in your sandwich? Season with a little salt to enhance the natural sweetness, sourness, and umami and of course add 
            a little saltiness into the mix. All of a sudden, the tomatoes become a welcome addition to the party. Want to make a dessert but afraid it's too sweet? Maybe some dark chocolate 
            shavings, espresso powder, or lemon juice will add some contrast, depending on the dish.
            </p>
            <p className='has-text-centered subtitle is-4 mt-6 no-indent'>The Smell of Food</p>
            <p>
            There's a saying that "half the taste is in the smell". Actually, 100% of taste is in the taste. But the majority of the <em>flavor</em> (close to 90%) comes from smell. Taste 
            will only tell you how sweet, salty, sour, bitter, or savory something is. But there are hundreds of aromatic compounds that can be combined in different amounts, permutations, 
            and combinations that let you specifically identify food. If you had no sense of smell, you wouldn't be able to taste the difference between apple juice and sugar water. Smell 
            your food as you cook. Don't get right in there with your nose and snort it, practice the safe method of using your hand to waft the aroma towards you. You'll notice that when 
            food is hot, the volatile aromatic compounds come off the food more easily, making the aroma stronger. Smells may also change over time, like how caramel has a scent, but sugar 
            doesn't. Notice the way certain smells interact. The aromas of coffee and cheddar would probably smell discordant, like someone's playing a melody out of tune in your nose. 
            However, if you put butter, thyme, onion, and garlic in a pot and cook them together, the resultant smell is absolutely heavenly. Let your nose guide you and help you figure out 
            what's going right, what's going wrong, and what's missing.
            </p>
            <p className='has-text-centered subtitle is-4 mt-6 no-indent'>The Texture of Food</p>
            <p>
            The sense of touch plays a key role in the way we experience food, and not just in our mouths. There's something to be said about food that drips down your chin and leaves grease 
            behind on your hands as you eat it. I don't know why, but that part of the experience just makes it better. Maybe it's the feeling of casting one's inhibitions aside and just digging 
            right in that feels somewhat gleeful, but I'm sure it's different for everyone. To be sure, it isn't appropriate in every context. Maybe you're in a fancy place, 
            or you're trying to make a good impression with someone. Messy food is fun, but it can change the ambiance of the eating experience in a way that may be undesirable.
            </p>
            <p>
            When food enters our mouths, texture makes up so much of the experience it might be equally important to flavor. A steak can taste delicious, sure, but if it's tough and dry, it's 
            immediately ruined. When you have soup, there's a clear difference in mouthfeel between a thin consomme and a thick stew. One is delicate and elegant, and the other is hearty and 
            filling. Neither is better than the other, both have their place depending on the intention of the meal. Texture, like all the other senses, is a tool to communicate with the people 
            eating your food. What are you trying to convey? Are you trying to communicate that something is meant to be lightly sipped and savored, or are you communicating a sense of robustness 
            by giving some real substance to it?
            </p>
            <p>
            Textures can and should be contrasted as well. Fried tofu with a crispy outside and a soft, melt-in-your-mouth inside is the perfect duality in a single ingredient. Maybe you have some 
            ultra-creamy mashed potatoes here, but what if you added some sauteed brussel sprouts on the side? The eating experience fundamentally changes with the addition of that side. It goes from 
            just a sea of puree to something like: creamy, creamy, crunchy, creamy, crunchy, crunchy, creamy, creamy, creamy. When you switch to the crunchy thing every once in a while, that makes 
            it hard for your mind to get too used to the creamy thing. So every time you follow up the crunchy food with the creamy one, you're just as pleased as you were with the first bite. 
            </p>
            <p>
            Another big factor in texture and touch is temperature. Hot liquids are thinner and looser, while colder liquids are more thick and coat the tongue more easily. When making a sauce, 
            keep that in mind. It looks a bit thin on the stovetop, but typically if you can draw a line through it, it will gain a lot of viscosity as it cools. Even while still warm, it will be 
            luxuriously unctuous and coat whatever you put it on beautifully. As a side note, "unctuous" refers to a rich, fatty, indulgent texture that pretentious food writers and cooks (like me) 
            use to pretend that they know more than they do. Returning to the topic of temperature, think about the difference between scrambled eggs that are still hot versus ones that have gone 
            cold. It's a much bigger difference than the disparity in quality between hot and cool toast. So, if I were making scrambled eggs on toast, it would behoove me to get the bread toasted 
            first. I suppose you could just have your toaster running while cooking the eggs, but I don't have a toaster, so I have to use this method to get both done with one skillet. Regardless, 
            by applying this principle, you can use ideal serving temperature as a guide for timing the cooking process, especially when cooking multiple dishes together. 
            </p>
            <p className='has-text-centered subtitle is-4 mt-6 no-indent'>The Sight of Food</p>
            <p>
            Before anything else, you eat with your eyes. When we see our favorite food, we naturally begin to salivate. It's a Pavlovian response that anticipates the taste of food before it hits 
            our tongues. Some people say that warm colors (e.g., red, orange, yellow) foods are inherently more appetizing than other foods, and there is some evidence to suggest that. However, 
            context is important too. In one experiment, when presented with pictures of chocolate chip cookies that were in full color, greyscale, tinted red, or tinted blue, subjects tended to 
            rate the the red-tinted cookies as more appetizing than blue-tinted ones. However, there was no color filter that made cookies more appetizing than their original color. This indicates 
            that while warm-colored foods may be more appetizing than cool-colored ones, it's less important than what we expect food to look like.
            </p>
            <p>
            What this means for you as a cook is to think about how your food is perceived in terms of other people's expectations. If a steak looks grey and soggy, it doesn't matter how well-seasoned 
            it is, people will desire it less and that will negatively impact their eating experience. Compare that to a steak with a solid, golden-brown crust and a rich, pink interior, and I'm salivating 
            just thinking about it. We always say not to judge a book by its cover, but the color, shape, and plating of our food plays a big role in tempering expectations. And when we expect good food, 
            we often look for good things about it. If it looks bad, we're ready to criticize it off the bat. Use the look of food as it cooks to gauge doneness, texture, and flavor as you cook. Do the 
            onions look soft and translucent? Have the mushrooms reduced in size and deepened in color? When the dish is ready, pay attention to how you plate your food, taking care to give some shape 
            to the presentation, and to show color and texture contrast to keep things fresh. If you need help or inspiration, look at how chefs and food photographers present food. The internet is rife 
            with photos of food on social media. Try and learn some principles of what makes that presentation look visually interesting and attempt to replicate that at home.
            </p>
            <p className='has-text-centered subtitle is-4 mt-6 no-indent'>The Sound of Food</p>
            <p>
            You wouldn't think we eat with our ears, and often we don't, but hearing does play a role in cooking and eating. The snap, the crunch, the crackle, and pop of food as we eat are all part of 
            what makes eating food feel satisfying. Don't believe me? Try going to Chili's and order the fajitas. What's the first thing you notice? The sizzle as it comes by. To be clear, the fajitas 
            themselves aren't sizzling-hot. This effect is actually an illusion. What they do is they heat up the plate, then squirt lime juice and oil on it once the fajitas are plated up. The hot plate 
            causes the liquid to sizzle and steam as it evaporates. If they didn't do that right before bringing the plate to your table, there would be no signature sizzle. So why go through the trouble 
            of doing all of that? Because sizzling is an indicator of both freshness and juiciness. They're communicating to you that this is hot off the grill just for you, which makes you want to eat it. 
            It also communicates the same signal to everyone else within earshot, encouraging more people to order the fajitas. It's a brilliant technique that makes use of an unexpected facet of our sensory 
            experience with food.
            </p>
            <p>
            You can apply this to the cooking process too. If you add onions to oil in a warm pan and they don't sizzle, you know the pan isn't hot enough yet. If you're making stovetop popcorn and the kernels stop 
            popping, that's your cue to take it off the heat. Food will speak to you as it cooks. Listen and respond accordingly.
            </p>
            <p className='has-text-centered subtitle is-4 mt-6 no-indent'>A Sensible Approach to Cooking</p>
            <p>
            So what happens if you're missing one or more of the five senses, am I saying you can't be a good cook? Quite the opposite. For example, if you lack a sense of smell, that would indeed make 
            it a challenge to adjust the flavor of your food. However, you can still compensate for that by focusing on what you <em>can</em> sense. Food isn't just about flavor. Learn to plate your food 
            nicely and focus on creating a satisfying mouthfeel, and you'll still be able to cook pretty well. The point is, cooking and eating should never be limited to just one or two senses, it should be 
            a symphony of experiences. The next time you're cooking, and the next time you're eating, pay attention to all five senses and what they're all telling you. You will gain a new appreciation for the 
            culinary arts, I guarantee it.
            </p>
            </div>
            </div>
        </div>
    );
}

export default FiveSenses;
