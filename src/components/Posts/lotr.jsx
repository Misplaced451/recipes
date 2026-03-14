import '../../recipes_style.css';
import '../../bulma.css';

import { Link } from 'react-router-dom';

const Lotr = () => {
    return (
        <div className="pt-6 tabcontent recipe section">
            {/* Intro */}
            <div className="has-text-centered section pt-0">
                <h1 className="has-text-weight-bold is-size-3">The LOTR Movie Marathon Feast</h1>
            </div>

            <div className="section pt-0 columns">
            <div className="column is-2-desktop"></div>
            <div className='column is-8-desktop content'>
            <p className='has-text-centered subtitle is-4'>My Introduction to Middle Earth</p>
            <p className='story'>
            I have a distinct memory of watching <em>The Fellowship of the Ring</em> for the first time at my friend's house as a kid. I remember how beautiful the Shire looked, and 
            how much I wanted to live in a Hobbit hole someday if I could. I remember feeling afraid of the ringwraiths as they surrounded the Hobbits in the dark at Weathertop. 
            I remember thinking how cool Aragorn looked while fighting wraiths and orcs. I remember how much I loved the dialogues between Sam and Frodo. The elves felt breathlessly 
            ethereal and magical, and the dwarves impressed their pride and power on me through their awesome feats of engineering. For three hours, I wasn't a kid watching a movie. 
            I was living in Middle Earth. It wasn't my first exposure to the fantasy genre, but it felt meaningful in developing the sense of love and wonder I have for mythical and 
            magical worlds. I was much older, well into adulthood, when I finished watching the trilogy, but it occurred to me that despite how much I loved reading, fantasy, and specifically 
            the world of Middle Earth, I had never read the books. For my birthday, I decided to treat myself to a high-quality hardcover box set 
            of <em>The Hobbit</em> and <em>The Lord of the Rings</em>. It was a labor of over a year to finish all of the books (as I took hiatuses between some of the books to read 
            others), but I enjoyed every page.
            </p>
            <p className='story'>
            As a home cook, one thing always fascinated me about Tolkien's legends. Food is described in detail in so many different places, and I found myself wanting to eat alongside 
            the Fellowship on their travels. It makes sense, since the stories are told from the perspective of Hobbits, who apparently eat six or seven meals a day. Although I myself 
            am relatively tall, I sometimes wonder if I'm a Hobbit at heart. I love to live simply, laugh and sing carefree, I have an affinity for the cozy things in life, and I 
            absolutely love food. As I began reading <em>The Hobbit</em>, I had an idea. Once I finished the books, I would go back and marathon the entire <em>Lord of the Rings</em> trilogy 
            (extended editions, of course), and feast like a Hobbit throughout the process. I'm talking seven whole meals throughout the day: Breakfast, Second Breakfast, Elevenses, 
            Luncheon, Afternoon Tea, Dinner, and Supper. It was an unforgettable experience (and an egregious amount of food), and I highly recommend trying it sometime, especially with 
            friends or family.
            </p>
            <p className='has-text-centered subtitle is-4 mt-6'>An Expected Party</p>
            <p className='story'>
            So, you want to plan a <em>Lord of the Rings</em> movie marathon (or any movie marathon, for that matter). You think you can just invite people over and turn on the TV? No, 
            proper marathoning requires good hosting, good timing, prep work, and to some degree, even contingency planning. It's a logistical puzzle, and I'm here to let you know how 
            it's done. Here's the most important things to remember:
            </p>
            <ol>
                <li className='has-text-weight-bold'>Establish the list, runtime, and services you need</li>
                <p>
                Come up with the list of things to watch. For instance, if you're doing an LOTR marathon, are you including the <em>Hobbit</em> trilogy? Are you doing theatrical or extended 
                editions? Next, find what streaming services have them available and make sure you have working access before the marathon starts. Then, calculate the runtime for all the movies 
                and add them all up to get the total amount of viewing time. Do not include the end credits, unless you plan on watching them. For this marathon, the runtime was about 11 hours, 
                57 mins. This establishes the bare minimum to have a functional watch party.
                </p>
                <li className='has-text-weight-bold'>Include bio breaks every couple of hours, get your schedule sorted</li>
                <p>
                People are going to have to pee and poop. Hey, that's life. Be a considerate host and factor that in by including scheduled breaks. Breaks can be around 10 minutes, but can go 
                as long as 30 minutes if you're in the back half of the marathon and people need more of a break. This reduces fatigue, keeps people engaged, and prevents constant pausing for 
                folks to go to the bathroom at random intervals. They may still do that, and as a host you must accomodate them. Let them know ahead of time when the breaks are scheduled, but if they 
                need to pause for something in a hurry, accomodate their request even if your schedule is now delayed. The best way to do this is at the end of every movie, but for longer films you may 
                want a little break in the middle of the film as well. This doesn't have to be boring downtime or mandatory bathroom time. You can have certain light and fun activities or conversation 
                topics planned, go for a little stroll, have a dance break, meditate, it's all up to you. It can also be a great time to get things organized if you need to get food on the table, 
                either for serving meals or replenishing snacks. With this marathon, I found that I could time the breaks such that they would coincide with my meals. My break would be getting up, 
                stretching, going to the bathroom (if needed) and plating up my next meal before returning to my room. With your runtime and bio breaks planned, you should have a full schedule 
                for how the day will look. Here was my schedule for this marathon:
                </p>
                <table className="table is-bordered">
                    <tbody>
                        <tr>
                            <th>06:30</th>
                            <td>Set up computer, make Breakfast</td>
                        </tr>
                        <tr>
                            <th>07:00</th>
                            <td>Start <em>Fellowship of the Ring</em></td>
                        </tr>
                        <tr>
                            <th>08:30</th>
                            <td>Pause when Frodo wakes up in Rivendell, make Second Breakfast</td>
                        </tr>
                        <tr>
                            <th>09:00</th>
                            <td>Resume <em>Fellowship of the Ring</em></td>
                        </tr>
                        <tr>
                            <th>11:00</th>
                            <td>End <em>Fellowship of the Ring</em>, make Elevenses</td>
                        </tr>
                        <tr>
                            <th>11:30</th>
                            <td>Start <em>Two Towers</em></td>
                        </tr>
                        <tr>
                            <th>13:00</th>
                            <td>Pause when Gandalf leaves Rohan, make Luncheon</td>
                        </tr>
                        <tr>
                            <th>13:30</th>
                            <td>Resume <em>Two Towers</em></td>
                        </tr>
                        <tr>
                            <th>15:30</th>
                            <td>End <em>Two Towers</em>, make Afternoon Tea, clean kitchen</td>
                        </tr>
                        <tr>
                            <th>16:00</th>
                            <td>Start <em>Return of the King</em></td>
                        </tr>
                        <tr>
                            <th>17:30</th>
                            <td>Pause after Pippin's song, take a short walk, make Dinner</td>
                        </tr>
                        <tr>
                            <th>18:00</th>
                            <td>Resume <em>Return of the King</em></td>
                        </tr>
                        <tr>
                            <th>19:30</th>
                            <td>Pause after the Battle of the Pelennor Fields, make Supper</td>
                        </tr>
                        <tr>
                            <th>20:00</th>
                            <td>Resume <em>Return of the King</em></td>
                        </tr>
                        <tr>
                            <th>21:00</th>
                            <td>End <em>Return of the King</em>, rest eyes and stretch, drink water</td>
                        </tr>
                    </tbody>
                </table>
                <p>
                As you can see, the number of breaks made the marathon last from 6:30 am to 9 pm. However, without the breaks, I wouldn't have been able to sit still for that long or get my 
                meals plated up in time. Having breaks every hour and a half or so was crucial in making sure that I wasn't even that tired by the end of it, just stuffed. I also made sure 
                to have time to set up the movie beforehand to make sure there were no issues, and gave myself a bit of rest at the end, making sure I was hydrated and could decompress a little 
                before calling it a night.
                </p>
                <li className='has-text-weight-bold'>Plan out the food, keep it prepared ahead of time whenever possible</li>
                <p>
                Almost as important as the movies are the foodstuffs and beverages available to munch and sip on while watching. Make sure if you're hosting others that you're accomodating for 
                everyone's dietary needs. If it's a potluck, collaborate to decide what each person is bringing. If you're the only one in charge of food, communicate your menu clearly with 
                your guests. For snacks, variety is key. Keep a combination of sweet things (baked goods, candy, ice cream, dried fruit, kettle corn), salty things (chips, popcorn, pretzels), fresh 
                things (charcuterie, fruits and veggies with appropriate seasonings/dips), and drinks (water [mandatory], alcohol, soda, juice, punch). You don't need all of these, but make sure to 
                have at least one item from each category. An easy snack spread would be to bake chocolate-chip cookies, make movie-theater popcorn, prep some freshly diced watermelon and mango with 
                Tajin, and have Diet Coke in the fridge. It's the little details like the Tajin on the fruit and the homemade chocolate chip cookies that really stand out with your guests and make 
                the experience better. If your marathon lasts several hours and encompasses a meal or two, you want to have those meals prepared. If you want to take the stress out of it, ordering 
                in a pizza isn't a bad idea. However, I recommend making food that fits the theme of what you're watching. For a <em>Psych</em> marathon, have something with pineapple on the menu. For 
                an <em>Avengers</em> marathon, try making some shawarma. Binging with Babish is a great resource on YouTube for finding recipes from shows or movies if you're out of ideas. Regardless, 
                it's best to do all the food prep in advance, so you're not scrambling on the day of the party. Cookies can be made ahead. Lasagna can be reheated without losing quality. Plan out all 
                the things you can make ahead of time to reduce the headache and to give you enough time to course correct if something goes wrong. For my marathon, I read the books and wrote down 
                every single food they mentioned, and created a menu of seven meals based on that. But more on that later.
                </p>
                <li className='has-text-weight-bold'>Keep your space clean, accomodate your guests</li>
                <p>
                If I haven't stressed it enough, the most important thing you can do as a host is accomodate the needs of your guests. Keep your entire home neat and tidy, even the places you don't 
                plan for people to go. Nobody wants to sit on the couch for hours with you when you have a bunch of crumbs between the cushions, dust on every surface, junk on the floor and tables, pee 
                stains on your toilet, hair all over your sink, dishes piled up in the kitchen, and a funky smell permeating everywhere. You're in charge, it's your responsibility to take care of it. Make 
                sure there are enough seats, cushions, blankets, utensils, napkins, toilet paper, water, etc. for everyone. If there need to be sleeping arrangments, get those sorted as well. 
                </p>
            </ol>
            <p className='has-text-centered subtitle is-4 mt-6'>The Seven Hobbit Meals</p>
            <p className='story'>
            By now you've got the gist of how the day went. But this isn't a movie blog or a party tips blog, it's a cooking blog. So what did I eat for each of the seven Hobbit meals and how did I come 
            up with them? While I read <em>The Hobbit</em> and <em>The Lord of the Rings</em>, I made sure to jot down every mention of any food I could find. I didn't count mentions of food in the movies, as 
            I wanted to be as accurate to the source material as possible. I'm sure I missed a couple here and there, but I'll include the list here to give you some suggestions if you want to try out a feast 
            like this and put your own spin on it.
            </p>
            <ul>
                <li>Cold Chicken and Pickles</li>
                <li>Mince Pie with Cheese</li>
                <li>Pork Pie with Salad</li>
                <li>Fried Eggs and Ham</li>
                <li>Bacon and Eggs</li>
                <li>Mutton</li>
                <li>Nuts</li>
                <li>Cram (fictional: similar in description to hardtack)</li>
                <li>Mushrooms</li>
                <li>Beans (most likely scarlet runner beans, but it's unspecified)</li>
                <li>Hot Soup and Cold Meat</li>
                <li>Loaves with Butter and Ripe Cheese</li>
                <li>Lembas (fictional: a wafer-like bread, very filling, long shelf-life)</li>
                <li>Rabbit Stew</li>
                <li>Fish and Chips (by mention only)</li>
                <li>Salted Meat</li>
                <li>Seed Cakes</li>
                <li>
                Raspberry Jam and Apple Tart (not sure if Tolkien meant a tart with both raspberry jam and apples in it, or raspberry jam served alongside an 
                apple tart. Interpret as you wish)
                </li>
                <li>Buttered Scones (note: This refers to English scones, which are different from American scones)</li>
                <li>Bread with Honey, Butter, and Clotted Cream</li>
                <li>Dried Fruits</li>
                <li>Honey Cakes</li>
                <li>Blackberry Tart</li>
                <li>White Cakes</li>
                <li>Apples</li>
                <li>Tea</li>
                <li>Beer/Porter/Ale</li>
                <li>Coffee</li>
                <li>Wine</li>
                <li>Mead</li>
                <li>Miruvor (fictional: a medicinal alcoholic drink made from honey. As it is a cordial, it might be steeped with medicinal herbs/spices)</li>
                <li>
                Ent-Draught (fictional: a refreshing drink that smells like a distant wood in the night breeze. Could be replicated by making pine needle 
                tea with a hint of peppermint/maple syrup and serving cold)
                </li>
                <li>Thin Milk (I think this is just skim milk)</li>
            </ul>
            <p className='story'>
            At first, I was frustrated at how vague the descriptions were. What does he mean "white cakes"? Like pound cake, tea cake, sponge cake? How do I interpret that? Of course, it's a ridiculous frustration to 
            say the least. Tolkien did a fantastic job fleshing out the world to the point where it feels so real, and there's so much information available on the lives, preferences, and foods available to the 
            people of Middle Earth. There is plenty here to carve out your own seven-meal menu or LOTR-inspired feast. Even if you don't copy the dishes 1 for 1, you can still use this as a jumping-off point for your 
            own interpretations to fit the right aesthetic. Here's how I approacched each meal.
            </p>
            <p className='has-text-weight-bold'>Breakfast ("Breakfast at Bag End")</p>
            <p className='story'>
            The first and most important meal of the day. So important, in fact, that this is merely one of two breakfasts! Throughout <em>The Hobbit</em>, I remember at least three instances of Bilbo waking up on the 
            road and wishing he had a nice breakfast like he had back home. The exact specifications of his cravings vary, but they seem to revolve around the classic combination of tea, buttered toast, bacon, and fried 
            eggs. A hearty (or perhaps heart-clogging) breakfast to say the least. I first toasted the bread and spread softened butter on top. Meanwhile, I started cooking a couple strips of bacon in a cold pan. 
            As the pan came up to temperature over medium heat, the fat rendered out from the bacon, allowing the bacon to practically shallow-fry in its own fat and become crisp, but not brittle. While the bacon cooled on 
            some paper towels to absorb the residual grease, I made sure to leave most of the fat in the pan to fry the eggs. If you've never had eggs fried in bacon fat, get ready to have your mind blown. I salted gently to 
            help the whites set, but didn't add too much since bacon fat is salty enough. Then I took a spoon I started basting the yolk in the grease to help it cook without fully setting it. In order to make a fried egg, you 
            should instead flip the egg over and let it go for a couple minutes, but I didn't want to risk bursting the yolk for the sake of presentation, so these eggs were made more like a sunny-side-up. To tie the whole meal 
            together, I made a little mug of Earl Grey tea. I think a regular English breakfast tea would've made more sense, but I happened to have Earl Grey on hand.
            </p>
            <p className='has-text-weight-bold'>Second Breakfast ("Crickhollow Cravings")</p>
            <p className='story'>
            When it comes to delineating first vs second breakfast, there are a few different approaches. Turns out, second breakfast is a thing in some parts of Central Europe, usually eaten around 10 am. They 
            may consist of coffee, sausage, and a pretzel with mustard, or perhaps some kind of sandwich, pastry, or light pudding. In some rural areas, farmers may begin the morning with a small simple breakfast to get 
            something in their system (like toast and coffee) before the early morning chores and then move onto a second, bigger breakfast after some of the chores are done and they have a bit more time. I chose the rural 
            approach based on the agrarian culture and environment of the Shire. Though there was nothing "light" about the first breakfast I made, I felt that my second breakfast needed more substance to it. 
            </p>
            <p className='story'>
            In <em>The Fellowship of the Ring</em>, it's mentioned in no uncertain terms that Hobbits LOVE mushrooms. In the book, they are gifted a heap of mushrooms by Farmer Maggot and eat them at Crickhollow, Frodo's new 
            home by the eastern border of the Shire. It's not quite clear how they're prepared, but they're often eaten as part of an English breakfast, so I figured I had to include them somewhere. I know British people also 
            commonly eat beans for breakfast, so I decided to make baked beans with sauteed mushrooms on the side. Surprisingly, there was only one mention of beans in the entirety of <em>The Lord of the Rings</em>. Outside of 
            Tom Bombadil's house, Frodo sees sunlight coming in from the window, passing through the pole beans growing outside. It's not mentioned what kind of beans they are, but all we know based on the plant's description 
            is that they're pole beans with red flowers. Most of the beans we eat commonly produce white, yellow, or lavender flowers, but after doing some digging, I found that scarlet runner beans grow on climbing vines requiring 
            poles for support and have uniquely bright red flowers. Perfect! These beans are a mottled black, pink, and red color and are large, savory, creamy, and robust in flavor. Their size, texture, and flavor makes them 
            great for soups, stews, and salads. You can't get these from your local grocery store, I had to order a pound of dry beans from an heirloom bean farm. I decided to make a recipe 
            for <Link to={'/bakedbeans'} className='is-underlined'>Baked Beans</Link> with them, and the scarlet runners were well worth the price. Although the sauce ended up being much thicker than I had anticipated, one could 
            easily add water to get their desired consistency. 
            </p>
            <p className='story'>
            For the mushrooms, I sliced them up and sauteed them in olive oil without 
            any other ingredients at first to let them develop nice color and flavor. Salting mushrooms too early can ruin their texture, so it's better to wait until they're fully cooked. Once they shrank and got some good color 
            on them, I added the garlic, let it get fragrant, then added a splash of vinegar for a pop of acidity and a couple dashes of Worcestershire sauce for flavor. Once the bite from the vinegar fumes had dissipated, I added 
            some chopped parsley and seasoned to taste with salt and pepper. It was a light, yet substantial preparation that contrasted nicely with the sweet heat of the hearty beans. Though a chunk of beans reheated from the night 
            before next to a pile of mushrooms wasn't the most picturesque breakfast, it was very balanced, the flavors went well, and it was one of my favorite meals of the day! I called this meal "Crickhollow Cravings" because the 
            combination of mushrooms and scarlet runner beans represent a halfway point between Bamfurlong and Tom Bombadil's house just like Crickhollow. It's where our heroes go from being a cheery bunch of friends to 
            a proper band of adventurers. I felt it was best to honor this foyer to their quest with a special meal of its own.
            </p>
            <p className='has-text-weight-bold'>Elevenses ("Morning in Minas Tirith")</p>
            <p className='story'>
            I have never once heard of elevenses outside of the books, but apparently it's a British term for some light refreshments, usually eaten around 11 am. This is basically a mid-morning tea/coffee/snack break taken a couple 
            hours into the work day. For this meal, I decided to replicate what Pippin has when Denethor calls him for tea to discuss Boromir's fate in <em>The Return of the King</em>. While they talk, they have tea and white cakes. 
            It's not clear what kind of cakes, as there are many small, white cakes that can be eaten with tea, and the word "cake" is fairly vague as well. I decided to interpret this as a couple slices of an iced vanilla loaf, which I 
            bought from the store as I absolutely could not be bothered to make them myself. I'm not much of a baker and I already had too much to cook by myself. I know store-bought cake isn't quite up to the standards of a cooking blog, 
            but hey, there's seven meals. They're not all going to be winners. For the tea, I had a second cup of Earl Grey, but I added some milk to make it a London Fog. You could say I made it this way to represent Denethor's foggy 
            state of mind, but really I just wanted some variety. A real London Fog has a touch of vanilla extract, is often sweetened with a bit of syrup or honey, and uses steamed milk, but I just used hot milk for convenience and I didn't 
            add any flavorings as I felt that it would've been too sweet when paired with the vanilla cake. You could say I cut corners throughout making this meal as a metaphor for Denethor cutting corners in his parenting, but really 
            I was just lazy.
            </p>
            <p className='has-text-weight-bold'>Luncheon ("A Dwarven Feast")</p>
            <p className='story'>
            About half the food mentioned in Tolkien's books come from the first chapter in <em>The Hobbit</em> where Gandalf shows up at Bilbo's door with 13 dwarves, each of whom requests a different meal from his pantry. One of the foods 
            was "pork pie with salad" and one of the drinks requested was ale, which together sounded pretty good to me. I think technically they eat this meal at teatime, but I think it makes for a good lunch as well. For the pork pies, I 
            used <Link to={'/porkpie'} className='is-underlined'>this recipe</Link> for mini pork pies which I adapted from John Kirkwood's recipe website. These were so delicious and paired nicely with the salad and the ale (I used Blue Moon 
            as the citrus and coriander flavor complemented the pork well). For the salad, I kept it simple by buying some mixed greens from the store, washing them, and tossing them with my homemade <Link to={'/vinaigrette'} className='is-underlined'>Lemon Vinaigrette</Link>.
            </p>
            <p className='has-text-weight-bold'>Afternoon Tea ("An Unexpected Par-Tea")</p>
            <p className='story'>
            Afternoon Tea is a common light meal or snack in many tea-drinking cultures. <em>The Hobbit</em> actually begins with Bilbo inviting Gandalf to tea, for which he prepares some seed cakes. Unbeknownst to him, a band of dwarves would 
            show up and not only eat all his seed cake, but practically raid his pantry by requesting an impossibly vast variety of food. Seed cakes are a traditional British cake often had with tea and is made with caraway seeds interspersed 
            throughout it, hence the name. I couldn't find caraway, but I was informed that fennel seed could be an acceptable substitute in some cases. I followed <Link to={'/seedcake'} className='is-underlined'>this recipe</Link>, which I got 
            from FiveEuroFood's YouTube channel. For the tea, I used a spiced rooibos, which is an herbal tea that I quite enjoy. It's not at all traditional in Britain, and has nothing to do with Bilbo, but I wanted some more variety, this being 
            my third cup of tea for the day. They also mention this nowhere in the books, but I also paired this snack with some fresh blackberries which I garnished with a couple mint leaves. I felt that this would keep it fresh, add a new food 
            group to the meal, and help differentiate it further from the meal I had for Elevenses.
            </p>
            <p className='has-text-weight-bold'>Dinner ("The Prancing Pony Special")</p>
            <p className='story'>
            When the hobbits meet Aragorn at the Prancing Pony Inn in Bree, Barliman brings them all a very hearty meal for the night. It consists of bread with butter and soft, ripe cheese, hot soup, cold meat, blackberry tart, and beer. I'm not going to 
            lie, having had about 5 meals already I was pretty full, but this meal was easily one of the best so I didn't even mind. For the bread, I got a nice French bread roll and spread some softened, salted butter. Although it isn't specified what the 
            soft, ripe cheese was, I went with brie as it fits the description and they eat the meal in the town of Bree which I felt was fitting. As for the hot soup, I didn't know what to do, so I pulled a recipe for Potato and Garlic Soup from the 
            cookbook <em>Recipes from the World of Tolkien</em>, as it mentions the Prancing Pony by name. I'll be honest, I didn't like the soup very much. It came out like soupy mashed potato and you could barely taste the garlic. It wasn't bad, but if 
            I were to do it again, I think I would try to find a recipe for something like an Irish vegetable soup or maybe cream of mushroom. I think it would be more flavorful and it would go better with the other parts of the dish. For the cold meat, I just got 
            roast beef from the deli aisle, and for the blackberry tart I used <Link to={'/blackberrytart'} className='is-underlined'>this recipe</Link>, also from the World of Tolkien cookbook. I think almost any beer would've been fine, maybe a porter would 
            have gone well with the blackberries and roast beef, but I had a few bottles of Blue Moon left over from lunch so I just had that instead. The meal worked really well together, especially when piling the meat and cheese on the buttered bread, and 
            washing it down with a bite of blackberry tart and a gulp of beer. Hats off to Barliman, he may not know how to deliver a letter on time, but he knows how to treat his guests right.
            </p>
            <p className='has-text-weight-bold'>Supper ("Supper with Samwise")</p>
            <p className='story'>
            Many people don't differentiate much between dinner and supper, making it difficult to find what a suitable meal would be for each. After doing some digging, I found that the difference (if you really had to nitpick) is that dinner is meant to be 
            the main meal of the day (more hearty, heavy, and formal), while supper is a smaller meal in the evening time (more simple, light, and relaxed). Common items for supper are soups (the words are etymologically related), stews, salads, sandwiches, 
            vegetables with dips, bread with olive oil, etc. My choice to differentiate the definitions more clearly was purely to guide my thought process in creating the menu. If you find that it's too restrictive, feel free to just treat this meal as a second 
            dinner. Still, this meal should be the lighter of the two evening meals, as your capacity to have a big plate of hearty food for your seventh meal of the day is pretty limited. 
            </p>
            <p className='story'>
            For this meal, I chose to make Sam's classic rabbit stew from <em>The Two Towers</em>. After all, no Tolkien-inspired menu would ever be complete without it. Not only is the scene iconic in the movie, but Sam goes into great detail about all the 
            ingredients he needs in the book. Obviously the stew is made with rabbits and water, but Sam asks Gollum to fetch him some root veggies like turnips and carrots as well as herbs like bay leaf, sage, and thyme. Unfortunately, they only manage to 
            get the herbs, and Sam laments that he couldn't make it the right way, complete with turnips, carrots, onions, stock, and taters. But worry no more, Sam! I did have those things on hand and I made sure to do justice to this recipe to the best of 
            my ability. You can find my recreation of the stew <Link to={'/coneystew'} className='is-underlined'>here</Link>. I tried to stay as faithful to the books as possible, but I took a couple creative liberties here and there. For instance, I added 
            butter and flour to make a roux for thickening, I garnished with olive oil at the end, I used chicken thigh instead of rabbit since I didn't have any and didn't want to eat one, I threw in a splash of red wine for flavor, acidity, and deglazing, 
            and I seasoned with salt and pepper. Some of these are optional, like the olive oil and wine, but the other stuff is pretty necessary to get a good texture and flavor with accessible ingredients. As for the taters, he famously educates Gollum on 
            the delicacy of po-ta-toes (yes, he pronounces it like this in the book too), and in the movie specifically, he tells Gollum that you can "boil 'em, mash 'em, stick 'em in a stew!" So that's exactly what I did. I boiled and mashed the potatoes, 
            then plated them in my stew. I think it provided some incredible mouthfeel and flavor, and with a nice glass of red wine it was a very cozy, wholesome meal to end the day.
            </p>
            <p className='has-text-centered subtitle is-4 mt-6'>The Scouring of the Dishes</p>
            <p>Just to recap, here's the full menu I had that day:</p>
            <ul>
                <li><span className='has-text-weight-bold'>Breakfast:</span> Fried eggs, bacon, buttered toast, and tea</li>
                <li><span className='has-text-weight-bold'>Second Breakfast:</span> Baked beans and sauteed mushrooms</li>
                <li><span className='has-text-weight-bold'>Elevenses:</span> Tea and white cakes</li>
                <li><span className='has-text-weight-bold'>Luncheon:</span> Pork pies with salad and ale</li>
                <li><span className='has-text-weight-bold'>Afternoon Tea:</span> Tea, seed cake, and blackberries</li>
                <li><span className='has-text-weight-bold'>Dinner:</span> Potato garlic soup, roast beef, blackberry tart, bread, butter, brie, and beer</li>
                <li><span className='has-text-weight-bold'>Supper:</span> Coney stew and red wine</li>
            </ul>
            <p className='story'>
            I had so much fun with this little project, and it was probably the hardest I've ever worked on any food-related endeavor. Not only did I have to keep track of every food in every book, I also had to write and test many of the recipes months in 
            advance to finalize the menu before I finished <em>The Return of the King</em>. I created a full chart of logistical plans including the necessary groceries, utensils, and the order in which I would have to cook the meals. Most were cooked the 
            day before, leaving me exhausted with a burnt hand and aching feet after an entire day spent in the kitchen. After the marathon, I had enough food for the entire week and a mountain of dishes to clean. And while I loved chowing down on the 
            leftovers, perhaps I would control the portions better if I were ever to do this again. And to be honest, I probably would do this again, maybe with a whole different menu, though this one was perfect in my opinion. I spent so long going back 
            and forth with different ideas and second-guessing myself, and I was so happy that everything went off without a hitch. It was such a relief after such a long wait, and it was just as fun as I had imagined.
            </p>
            <p className='story'>
            For reference, because it took me so long to finally finish all the books, I had been looking forward to this day for almost a year (I started reading <em>The Hobbit</em> on 7/17/24 and I made this feast on 7/5/25). These books were incredible, and 
            I made so many good memories while reading them. I remember my excitement at being able to read the Dwarvish runes on the map in <em>The Hobbit</em>. I remember finishing <em>The Fellowship of the Ring</em> in my grandpa's apartment in India, 
            then staying up late in the Dubai airport on the way home reading about Merry and Pippin's adventures in the Fangorn forest in <em>The Two Towers</em>. I remember smiling with pride at the part in <em>The Return of the King</em> where the Hobbits 
            return home as seasoned and capable adventurers to set things right with their own hands. I am constantly blown away at Tolkien's ability to make life feel so memorable, meaningful, and magical through his prose. Whether it's through books, movies, 
            or even food, the magic of Middle Earth is alive and well all around us.
            </p>
            </div>
            </div>
        </div>
    );
}

export default Lotr;
