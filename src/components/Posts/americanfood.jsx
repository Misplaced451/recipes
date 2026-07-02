import '../../recipes_style.css';
import '../../bulma.css';

const AmericanFood = () => {
    return (
        <div className="pt-6 tabcontent recipe section">
            {/* Intro */}
            <div className="has-text-centered section pt-0">
                <h1 className="has-text-weight-bold is-size-3">A Defense of American Food</h1>
            </div>

            <div className="section pt-0 columns">
            <div className="column is-2-desktop"></div>
            <div className='column is-8-desktop content story'>
            <p className='has-text-centered subtitle is-4 mt-6 no-indent'>Americans Apparently Can't Invent Food</p>
            <p>
            I once saw an interview with Tom Holland where he said that English food was better than American food. His issue was that it's difficult to even identify truly "American" 
            foods in the first place. Hamburgers come from Hamburg steaks made in Germany. French fries are... well, they're actually Belgian, not French, but they're certainly not as 
            American as apple pie. Although, apple pie was invented in England. Huh, maybe Tom Holland was right. I looked in the comments of that video and saw so many people bashing 
            on American cuisine, or evidently the lack thereof. Apparently, all American foods are just dishes we stole from others and passed off as our own...
            </p>
            <p>
            ...Or are they?
            </p>
            <p className='has-text-centered subtitle is-4 mt-6 no-indent'>On the Origins of Food</p>
            <p>
            How do we decide which country a food should call home? If more people eat it there? If it originated there? If it took on its modern, recognizable form there? What if 
            two languages in two different countries have two different words for a practically identical dish? Does food belong to culture, region, ethnicity, or country? What about 
            a diaspora that transforms over time into distinct cultures or countries? Let me put it like this: I am a Canadian immigrant in the United States from an Indian family. 
            If I make my own version of a pizza recipe, is that pizza Italian, Canadian, American, or Indian food? The question of a dish's origin isn't a well-formulated question. To 
            quote my discrete math professor, "A good definition is worth its weight in gold." So, let's define a food's origin as follows: the extant nation presiding over the region in 
            which the first documented creation of a dish originates in its modern, recognizable form. In cases for which the legitimacy of a nation is not universally recognized, the 
            correct answer depends on the political stance of the speaker. Unfortunately, this isn't a perfect definition, but it's the best start we've got.
            </p>
            <p>
            With this in mind, let's take a look at vadapav, a classic street food from Mumbai. It's a spiced potato patty covered in chickpea batter and deep-fried, then served on a roll 
            with some garlic chutney and a whole green chili. This is a pretty uniquely Indian dish. However, let's investigate further. Why don't other places in India use dinner rolls 
            in their food? It seems like Mumbai is a hotspot for foods that use this type of bread called "pav" (e.g., misal pav, pav bhaji, etc.), a word which doesn't appear to have roots in 
            Sanskrit. That's because Mumbai was at one point a Portuguese colony (Bombay), and colonists would eat bread as a staple food (the word for "bread" in Portuguese is "pão"). 
            And prior to the Columbian Exchange, potatoes and chili peppers did not exist in Asia. Also, archeological reports indicate that chickpeas were domesticated in the Middle 
            East thousands of years ago, and didn't make an appearance in India until the Bronze Age. Realistically, the only Indian parts of this dish are some of the spices. No other part 
            of the cooking process was invented in India. Is it fair to say vadapav is entirely an Indian dish? Or is it an Indian spin on Portuguese-Peruvian-Syrian fusion cuisine? The 
            invention of this dish appears to have been a collaborative effort built from cultural exchanges spanning across millennia, so it seems strange for one country to get all the 
            credit.
            </p>
            <p>
            And yet, is the history of exchange not the history of a people? Let's take a look at another dish, but keep it a mystery for now. It's a tomato-beef sauce with warm spices like 
            cinnamon, clove, coriander, turmeric, cardamom, and black pepper served over spaghetti. It is often served with cilantro on top and a banana on the side as well. What on Earth is 
            going on here? It feels like the clues are pulling us in all different directions. The spaghetti indicates Italy, but Italian recipes are never this complex in their spice profile. 
            The use of a complex, warm spice blend like this appears to be from the Indian subcontinent. But it's probably not India, as most people don't eat beef. Maybe Pakistan or 
            Bangladesh? But we're still at a loss for the spaghetti. Okay, let's take a step back and do some detective work. Based on the spaghetti, it's most likely from a current or 
            former Italian territory. We also know it's not Italy itself, so it has to be from one of its former colonies or occupied nations. The banana on the side indicates this is 
            south of Europe, which basically narrows it down to Libya, Eritrea, Somalia, or Ethiopia. Because of the spice blend, the country probably has a strong history of spice trade 
            overseas with the Indian subcontinent. Our best option here is Somalia, which has a rich maritime history of trade and seafaring across the Indian Ocean spanning millennia. 
            The mystery dish is suugo suqaar, which is indeed Somali! Isn't that a beautiful thing? We think of food as just the stuff we put in our mouths, but we were able to identify 
            the culture and country that produced this dish by reconstructing its economic, political, and geographical history from its ingredients alone. This one dish tells the story 
            of a nation over thousands of years: a tale of tradition, prosperity, oppression, resistance, and freedom. The rise and fall of empires and nations. Even if certain ingredients 
            and techniques aren't indigenous to some region, their usage and interpretation creates a unique historical and cultural context that allows a nation or culture to speak with us 
            through its cuisine.
            </p>
            <p>
            What about a dish that's common everywhere, yet similar nowhere? Pilaf is rice cooked with vegetables and sometimes meat in a way where the grains don't stick together. The 
            first recipe that we have on record appears to be in a 13th century cookbook from Syria. However, it's such a simple concept that it has spread everywhere and taken on its own 
            identity everywhere it goes. Whether it's a Japanese pilaf, Uzbek plov, Indian pulav, Kabuli pulao, Greek piláfi, Trinidadian pelau, etc., you have a pretty decent 
            chance of finding a variant of pilaf or a similarly made rice dish anywhere in the world. Where does pilaf really come from then? Everybody's got their own version of it with 
            unique cultural significance, and yet the core elements of the dish remain so similar. Maybe it's a dish that belongs to everybody and yet nobody in particular. Divided by 
            borders, united by rice.
            </p>
            <p>
            So what's the point of all this? What I'm trying to say is that the central question of whether American food exists at all is an absurd one. The idea that food should retain 
            its origin despite moving and transforming over time is ridiculous. Was the hamburger really invented in Germany? Some people say yes, but it's equally plausible that with a 
            high number of German immigrants in the U.S., Hamburg steaks were eaten in the U.S. enough that Americans could have also invented the hamburger. It's even possible that the 
            hamburger was invented in both countries independently around the same time. Believe it or not, putting meat in bread is not a revolutionary concept. There are a dozen origin 
            stories for who "definitively" invented the burger, but all of them are apocryphal at best. Based on that, I would consider the hamburger to be American food as well as German 
            food, in the way that pilaf is also from multiple countries (not because it was definitively invented in both places, but because both places have their own stylistic 
            interpretations and cultural histories that have developed around it).
            </p>
            <p>
            For the people who still insist that hamburgers CANNOT be American because it's based on the Hamburg steak (the ground beef patty), which is a German invention, riddle me this: 
            is the bun also a German invention? I don't think so. Leavened wheat bread was around in ancient Egypt, so its production is well-documented there, but we don't know if they were 
            the first to ever do it. In any case, it appears that Germanic tribes relied more on rye and barley, because wheat wasn't as readily available up north. So leavened wheat bread is 
            decisively not German, and yet people insist Germans have the absolute claim over the hamburger with that type of bread as one of the fundamental ingredients. Germany also isn't 
            credited with the domestication of cattle either, so they didn't invent cooked beef. If you want to claim that America "stole" the burger from Germany because one of the key 
            ingredients was invented there, are you ready to admit that Germans "stole" all the techniques and ingredients to make the burger too? This game of kicking the culinary can could 
            be played forever and we will never get anywhere with any productive discussion. To give any sense of meaning to the idea that food is "from" somewhere, we have to interpret the 
            origin of a food not by its predecessors, but by where it takes its modern form and the cultural relevance it has in that area. That's why you can say pilaf is from Afghanistan or 
            Uzbekistan and be equally correct. That's why you can say suugo suqaar is Somali and vadapav is Indian even though the ingredients aren't indigenous to those regions.
            </p>
            <p className='has-text-centered subtitle is-4 mt-6 no-indent'>A Buffet of Food As A Nation of Immigrants</p>
            <p>
            The history of American cuisine is a complex subject, but I'm going to do my best to go over the most relevant bits for this topic. Let's start with the first people to settle 
            the Americas. Unfortunately, Native American cuisines aren't really commonly known in the United States due to centuries of eradication and assimilation. Indigenous people all 
            over America continue to do their best to conserve and revive their cultures, but their food still lacks visibility in the popular sphere for the average American. For example, 
            I grew up near Seattle, and not once have I ever seen a Duwamish restaurant near my hometown, though I do hope that changes. Still, many recipes and foods we have today were 
            derived from Indigenous dishes and agricultural practices. Maple syrup, cornbread, succotash, and hominy (which is used in grits and hushpuppies) are all as American 
            as can be. There are so many more dishes from all over America like akutaq, pemmican, acorn bread, etc. that still exist, but are not as widely known. Of course, I also have 
            to mention frybread because of its importance in history, but I do so tentatively for a couple reasons. The concept of frying bread is not native to the Americas, but after 
            the massacres and displacements of their people, many Native American communities had to rely on cheap government staples like flour, lard, and salt to prevent themselves 
            from starving. Frybread is a cultural touchstone that unites a lot of Native tribes and represents not only the history of their struggles, but also their perseverance through 
            it. Still, because it's calorically dense with little nutritive value, having to rely on foods like frybread to get by for so long is one of the many reasons Native American 
            populations are still at a disproportionately high risk of health issues like obesity and diabetes even to this day. It's a food with a brutal history, and although it is 
            indeed American food, I didn't want to mention it without discussing the nuance and controversy behind its development and prevalence.
            </p>
            <p>
            Another major contribution to American cuisine is soul food. When slaves were brought to the Americas from West Africa, their language, customs, and identity sort of blended 
            together over the years, making it difficult for Black Americans to identify with their specific ancestral lineage from Africa. This, combined with a century of segregation 
            even after emancipation, forced them to develop their own cultural identities as Black Americans. Part of that was building off of vestigial influences from their West/Central 
            African heritage, part of that was making the best of what they had in the American South. Foods like Southern fried chicken, jambalaya, gumbo, Hoppin' John, collard greens, 
            red beans and rice, and sweet potato pie are all great examples. You may notice an intersection between some of these foods with Cajun and Creole cuisines from Louisiana, 
            and there is a lot of mutual influence and overlap between various Southern American and Black American cultures. 
            </p>
            <p>
            Thankfully, the entire culinary history of the United States isn't all stained with the blood of marginalized peoples. There are so many foods that have been brought 
            by immigrants and taken on a unique style to fit American tastes. I mentioned the hamburger before, but there's variations like the smashburger, cheeseburger, etc. that are 
            undisputably American. Regional variants of the hot dog like the Coney dog, Chicago dog, Seattle dog, etc. are also American (even though we got the frankfurter from German 
            immigrants). Italian immigrants have also played a big role in shaping American cuisine with spaghetti and meatballs, pizza, and chicken parmesan amongst other 
            things. Although spaghetti al pomodoro (spaghetti with tomato sauce) and polpette (Italian meatballs) are an Italian dishes, they are served as different courses entirely in 
            Italy. It's distinctly American to toss the spaghetti with the meatballs in sauce and serve it all together. Similarly, pizza is an Italian invention, but 
            American pizza has significant differences in crust, sauce, cheese, and toppings. Cities with a large Italian-American population also tend to have their own regional styles. 
            Whether it's the Chicago deep-dish, the New York slice, Detroit-style pizza, New Haven pizza, etc., there are so many unique styles of pizza that mean so much to the communities 
            that make them. There's also foods from American Chinese restaurants (e.g., orange chicken and crab rangoons) and Japanese-American restaurants (e.g., Western-style sushi) 
            that have also become popular in the U.S. but are distinctly different from the dishes that inspired them in China and Japan respectively.
            </p>
            <p>
            You can't bring up influences on American cuisine without also mentioning Mexico. Much of Southwestern cuisine (including Tex-Mex and New Mexican cuisine) borrows strongly 
            from Mexican and Native American influences, to the point where it's unclear where most foods originated. Turns out, if you have people of similar lifestyles, ancestries, 
            tastes, and environments on both sides of the border for centuries, eventually it's not going to be clear which side of the line invented things like fajitas or queso dip. 
            Especially since the American Southwest belonged to Mexico until the Mexican-American War in the mid-1800s. Still, Mexican food has made a life of its own here, diverging 
            from its roots especially amongst big chain and fast food restaurants.
            </p>
            <p>
            One of the most distinct examples of American regional cuisine is from Hawaii. Because it's an island, Hawaii doesn't have nearly as much North American influence on its 
            cuisine as other states and has a strong connection to Polynesian and East Asian cuisines. Foods like spam musubi, mocoloco, and poke demonstrate this clearly. Hawaii may 
            be the only state that is entirely insular (even Rhode Island is mostly connected to the mainland), but we also have other territories under U.S. federal jurisdiction 
            that are separated from the mainland as well. I hesitate to include cuisines from Puerto Rico, American Samoa, Guam, the Northern Mariana Islands, and the U.S. Virgin 
            Islands in this discussion because it feels weird to claim the food and culture from these places as American when a large portion of their populations don't identify 
            with American culture as a whole despite technically being citizens. For the purposes of this discussion, I want to stick to the 50 states to try and simplify the definition 
            of where American food begins and ends, but I couldn't move on without at least acknowledging the existence and importance of the many distinct cultural cuisines in U.S. 
            territories as well.
            </p>
            <p className='has-text-centered subtitle is-4 mt-6 no-indent'>The American Classics</p>
            <p>
            Despite how many foods I've named that are American, it doesn't do a lot to debunk the stereotype that American food is only stuff that's appropriated, stolen, or made by 
            people who were brought here against their will. Much of the previous section had to be handled delicately, and I did my best in that regard (though I'm still unsure of 
            whether I handled the topics appropriately). Still, even setting the previously mentioned foods aside, there's plenty of American food out there, you just need to know 
            where to look. Here's a list of some of the most popular foods and drinks invented in the United States. Not born as a direct result of human rights violations or credited 
            to the diaspora of foreign cultures, just a list of American food in no particular order.
            </p>
            <ul>
                <li>Clam chowder</li>
                <li>Eggs benedict</li>
                <li>Tomato ketchup</li>
                <li>Waldorf salad</li>
                <li>Cobb salad</li>
                <li>Ranch dressing</li>
                <li>Taffy</li>
                <li>Chocolate chip cookies</li>
                <li>Po' boys</li>
                <li>Muffulettas</li>
                <li>Cream cheese</li>
                <li>Buffalo wings</li>
                <li>Cheesesteaks</li>
                <li>Meatball subs</li>
                <li>Pecan pie</li>
                <li>Root beer</li>
                <li>Coca-Cola</li>
                <li>Alligator bites</li>
                <li>Key lime pie</li>
                <li>Milkshakes</li>
                <li>S'mores</li>
                <li>Biscuits and gravy</li>
                <li>Bananas foster</li>
                <li>Étouffée</li>
                <li>French dip (not French, but named after their use of baguettes)</li>
                <li>Banana bread</li>
                <li>Muffins (specifically quickbread/"American" muffins)</li>
                <li>Cupcakes</li>
                <li>American cheese</li>
                <li>Fried green tomatoes</li>
                <li>Pineapple upside-down cake</li>
                <li>BLTs</li>
                <li>Cranberry sauce</li>
                <li>Hashbrowns</li>
                <li>Chicken-fried steak</li>
                <li>Colby cheese</li>
                <li>Monterey jack (and pepper jack) cheese</li>
                <li>Lobster rolls</li>
                <li>Peanut butter & jelly sandwiches</li>
                <li>Fluffernutters</li>
                <li>Green bean casserole</li>
            </ul>
            <p>
            If you still want to say there's "no such thing" as American food, not only are you erasing the culinary history and tradition of the Indigenous populations that have been 
            here for millennia, but also diminishing the rich histories of Black American cultures and various diasporas of immigrants. Even beyond that, the deliberate choice to outright 
            dismiss the work of American chefs, families, and innovators over centuries and the lack of curiosity to learn about regional cuisine that makes every community unique is 
            absolutely reprehensible. It's true that I may not know a lot about some other cuisines around the world. Ask me anything about Hungarian cuisine and I'm at a loss. However, 
            I would never assert that Hungarians just steal their foods from Slavic and Balkan countries without any evidence to support such an absurd claim. I would instead 
            try and dig a little deeper than my basic assumptions and do the due diligence to learn more before I bandy around dismissive statements like that. I know that Americans 
            are loud, ignorant, and annoying at times, but that's no reason not to give credit where credit's due. As a side note, after doing a bit of reading, I just found out that 
            chicken paprikash is Hungarian, and paprika is a quintessential spice to much of Hungarian cuisine. I love paprika! Maybe if I experiment with some Hungarian recipes and 
            learn a bit more about their history, I can learn how to use that spice better and gain a new appreciation for a different culture.
            </p>
            <p>
            The final word on the existence/originality of American food is this: culture talks. We draw borders through lines in the sand, but that doesn't stop people from exchanging 
            words, foods, feuds, and ideas with one another. Even if you think your culture is something you keep for yourself, your embodiment of your culture automatically communicates 
            it to any cultural outgroup that interacts with you. Voluntarily or not, what we see is all there is, so we will be influenced by others around us in some way and vice versa. 
            A culture that proudly expresses itself, even without attempting to dominate another, will undoubtedly see its neighbors adopting similar traits. It's no surprise that the concept 
            of "American food" seems like it only takes from others because all cuisines do that, that's just how cultures work. Nothing is ever truly original, everything had to come from 
            somewhere, someone, or something else. To quote Carl Sagan, "If you wish to make an apple pie from scratch, you must first invent the universe". There's nothing wrong with sharing 
            and transforming your culture over time, and that doesn't make it any less your own. For this reason, I urge the person reading this to be curious, not judgemental, when it comes 
            to someone else's culinary customs and history.
            </p>
            <p className='has-text-centered subtitle is-4 mt-6 no-indent'>Tangent: On the Quality of American Food</p>
            <p>
            "Okay," I hear you say, "America does <em>have</em> food, but it's all processed poison and nutritionless garbage." I'm not sure why people think this. And yes, I have heard this 
            opinion echoed several times online by both Americans and non-Americans alike. Yes, we do have processed food, but processing food isn't inherently bad (another rant entirely). 
            According to the GFSI (Global Food Score Index) that scores countries based on a plethora of factors including nutritional standards, food safety, agricultural R&D funding, protein 
            quality, food loss, GDP per capita, diet diversification, etc. The United States ranks 13th in the world overall. Our affordability and availability subscores aren't great, but 
            we're 12th in the world for sustainability & adaptation and 3rd in the world for quality & safety (close behind Canada and Denmark). Granted, we have no excuse not to be higher on 
            the list (especially in the affordability and availability subscores), and I'm not going to shy away from the fact that the U.S. has a myriad of political issues that are making it 
            harder for people to access nutrient-dense foods. But to say things like, "American food is garbage because their bread is so artificial that it doesn't rot within a week," (yes, 
            this is an unironic take I've heard before) is just silly. American wheat was bred to survive a different range of climates, leading to a higher gluten content, and we tend to use a 
            faster fermentation process for bread dough than traditional methods in Europe. The result is bread that is a lot less delicate in texture and harder to digest than most bread across 
            the EU, (which makes it look and taste "fake" to people that aren't used to it) but it's still nutritious food. The fact that a small amount of preservatives help increase the shelf 
            life doesn't change that either. American bread isn't inherently bad, it was just developed differently than other styles due to consumer demand. Speaking of additives, I've also 
            heard the take that U.S. regulatory agencies let you put any amount of scary artificial food additives in everything, so the food quality must be worse. Again, this commits the 
            logical sin of making an appeal to nature as the basis of the argument. It also commits the logical sin of being wrong. The FDA approves food-safe additives after thorough testing 
            of its potential harmful effects, then sets the maximum allowed amount per serving to be way lower than that threshold (often 1% or less of the amount it would take to see any 
            significant effect on you). There's also plenty of food additives banned in the U.S. that the EU considers perfectly fine. All this to say, I'm not sure where we got the stereotype 
            that all our food is unhealthy and unsafe, but it clearly isn't true. I'll never say American food is the best in the world, we certainly have our fair share of problems, but I 
            think we can leave some of these misconceptions and misunderstandings in the past.
            </p>
            </div>
            </div>
        </div>
    );
}

export default AmericanFood;
