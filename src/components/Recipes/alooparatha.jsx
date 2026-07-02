import '../../recipes_style.css';
import '../../bulma.css';
import RecipeLayout from './recipelayout';

const AlooParatha = () => {
    return (
        <RecipeLayout 
        name={'Aloo Paratha'}
        description={'The potato-stuffed flatbread that I grew up eating.'}
        instructions={
        <div className="content">
        <ol>
            <li>Boil potatoes until fork-tender</li>
            <li>Mix flour, big pinch salt, and water until a hydrated dough comes together</li>
            <li>Add oil and and work until slightly tacky but not sticky</li>
            <li>Let rest covered for 10 mins</li>
            <li>Peel and grate potatoes</li>
            <li>Toast cumin seeds in a dry pan over medium heat</li>
            <li>Grate the ginger and chop the chilies and cilantro while the cumin develops some color</li>
            <li>Once the cumin seeds are darkened (not burnt), take them out and crush with a rolling pin</li>
            <li>Add chilies, cilantro, ginger, salt, cumin, and chaat masala to the potato</li>
            <li>Mash until similar in consistency to the dough</li>
            <li>Break off a lime-sized ball of dough and roll into a palm-sized disc that's a bit thinner in the middle than on the rim</li>
            <li>Add an equally large amount of the potato mixture into the disc, then wrap the dough around to seal it shut</li>
            <li>Dust in flour and roll out in a circle until the dough is thin enough to see some of the masala, even at the edges *</li>
            <li>On a pan over high heat, cook until translucent on the top</li>
            <li>Flip the paratha and brush the other side with oil until the bottom gets a few white spots on it</li>
            <li>Flip again and oil the other side, this time cooking until the bottom gets some brown spots</li>
            <li>Flip one last time and cook until both sides have brown spots</li>
            <li>Repeat steps 11-17 until all the dough and potato have been used up</li>
        </ol>
        </div>
        }
        ingredients={
        <div className="content">
        <ul>
            <li>1.5 cups whole wheat flour</li>
            <li>1 glass full of water, heated to 110F</li>
            <li>2 tbsp vegetable oil</li>
            <li>3 russet potatoes</li>
            <li>2 Thai chilies</li>
            <li>1 tbsp fresh ginger</li>
            <li>1 tsp chaat masala</li>
            <li>1.5 tsp cumin seeds</li>
            <li>Salt</li>
            <li>1 handful cilantro, chopped</li>
        </ul>
        <p>* The dough should not tear, so roll gently. If it does tear a little, cover it up with a bit of flour</p>
        </div>
        }
        story={
        <div className="story">
            <p>
            This dish is a classic in northern India, and although my family isn't from that region, my mom has a great recipe for it. I used to eat this a lot growing up, and I 
            feel that although naan and roti are the most commonly known Indian breads, paratha is so unique in all of its flavor and texture options that I think it deserves more 
            love around the world. The key element of a paratha is its layers. Certain parathas use ghee to create a flaky texture, but many parathas have a filling separating the 
            layers, made of things like paneer or potato. This recipe is for aloo (potato) paratha, which is a whole wheat flatbread dough stuffed with spiced mashed potatoes.
            </p>
            <p>
            The recipe starts with the longest step, which is boiling the potatoes until fork tender. It helps to cut the potatoes into large, even chunks first so it heats faster. 
            Remember, things are only done cooking through when the inside is done. Because the inside is the last place the heat reaches, it helps if the distance from the surface 
            to the center is as short as possible. You would think that mincing the potato would be the fastest option then (and it is), but the problem is that smaller pieces of 
            food will absorb water faster, which could impact the resulting flavor and texture. Ideally, you want the russets to be cut into 1 inch chunks to optimize cooking time 
            while still leaving the potatoes nice and tender.
            </p>
            <p>
            While that boils, we can make the dough. Heat up some water to 110F. You don't need a thermometer, it should feel slightly warm to the touch. Hot water will hydrate the 
            flour more efficiently, which will make this process go a lot faster. Mix the flour with some salt and just enough water to form a hydrated dough. Whole wheat flour is 
            the only option here, substituting with all-purpose flour will eliminate the wheaty flavor and make the texture a little too soft. Add the oil and knead into the dough 
            until it forms a soft ball that's tacky to the touch but doesn't stick to your hands. If it looks like it's dry, add a little more water. There's no exact amount, you 
            just have to go by feel.
            </p>
            <p>
            While we let the dough rest for 10 minutes to let the gluten relax and the flour finish hydrating, we can finish the potato filling. By now the potatoes should be done, 
            so peel and grate them into a mixing bowl. I like peeling my potatoes after boiling because the skin comes off much easier without extra waste. While the potato cools 
            enough to work with, we can toast the cumin seeds in a dry pan over medium heat. Do not skip this step, do not use ground cumin. The flavor of whole cumin seeds is a 
            lot more complex, and by toasting them, we can wake up some of those flavors and allow them to get a little more mellow and nutty. This part of the recipe involves a 
            lot of multitasking, so let's add a little more on the pile. While the cumin is toasting, grate the ginger and finely chop the chilies and cilantro. If you can't find 
            Thai chilies, you can substitute with a single serrano pepper. Once the cumin seeds get a little fragrant and darken in color (if they are blackened they are burnt), 
            take them out and crush them with a rolling pin. It shouldn't be ground to a fine powder, some small pieces are okay. Add the cumin, ginger, chilies, cilantro, salt, 
            and chaat masala to the potato and mash until it is similar in consistency to the dough. For the chaat masala mix, a lot of people are tempted to make their own spice 
            blends for quality control, but nobody really does that at home with Indian recipes. The variety of spices in masala mixes like garam masala, chaat masala, kitchen king 
            masala, etc. is so great that it would be way too difficult and expensive to track down every obscure ingredient. And even if you did, the result wouldn't be worth the 
            hassle. Instead, get some good quality masala from your local Indian store or from online, and it will be perfect. My family typically uses Everest brand spices (not 
            sponsored) but you can use what you like or what you can find.
            </p>
            <p>
            Now that we have the dough and filling, we can begin the cooking process. Break off a lime-sized ball of dough and roll it into a palm-sized disc that's a bit thinner in 
            the middle than on the rim. A thicker rim will allow you to more easily stretch the dough up and around the filling. Add an amount of the potato that's the same size as 
            our dough ball into the middle of the disc, then gently wrap the dough around and seal the top. It should basically be a little stuffed ball of dough. Dust it in flour 
            and roll out gently into a circle until the dough is thin enough to see some of the potato filling underneath. Sometimes the dough tears a little, which isn't ideal, but 
            that's okay. You can fix it by covering it up with some flour. That'll prevent the potato from sticking to the pan and you'll barely notice anything different when it's 
            done cooking.
            </p>
            <p>
            Preheat your pan on high and place your paratha on it. Cook until the top is translucent, then flip to the other side and brush with vegetable oil. This will help the 
            browning process. You'll know it's ready to flip again when you peek at the bottom and you can see some white spots forming. After the second flip, brush the other side 
            with a little more oil and cook until the bottom gets some brown spots. Flip one last time and cook until both sides have brown spots. Get it off the heat and onto a 
            plate, and congratulations! You just made your first paratha. You should still have a bunch of dough and potato mix left, so repeat the process to make more parathas 
            until you run out of ingredients. What you're left with is a stack of the most delicious aloo parathas west of the Indus River. And probably east of the Indus River too, 
            in my opinion. Although, the world is spherical, so if you go far enough west, you'll reach the eastern bank of the river anyway... but I'm overthinking this. Just enjoy 
            the parathas with some yogurt and some pickle (NOT pickled cucumbers, I'm talking about Indian pickles made with mango, lime, chili, etc.). I also sometimes eat them with 
            ketchup (you could use Maggi ketchup for a bit more flavor) and Amul butter, which is a brand of Indian salted butter made with both cow and buffalo milk and it's the best 
            butter in the world. Regardless of what you eat it with, give this recipe a try if you want a traditional Indian meal that's easy to prep on a weeknight.
            </p>
        </div>
        }
        />
    );
}

export default AlooParatha;
