import '../../recipes_style.css';
import '../../bulma.css';

const SteakMyths = () => {
    return (
        <div className="pt-6 tabcontent recipe section">
            {/* Intro */}
            <div className="has-text-centered section pt-0">
                <h1 className="has-text-weight-bold is-size-3">The Mythology of Steaks</h1>
            </div>

            <div className="section pt-0 columns">
            <div className="column is-2-desktop"></div>
            <div className='column is-8-desktop content'>
            <p className='has-text-centered subtitle is-4'>The Quest for the Perfect Steak</p>
            <p className='story'>
            I can hardly think of a single dish that's more simple in composition and yet so endlessly complex in its process than steak. Everyone swears by some tradition 
            or another, often at odds with everyone else's. This made it very confusing for me to learn how to make them. I grew up in an Indian household, so steaks 
            were never on the menu at home. Even if I did want to go out for steak, it was way too expensive to get from any decent steakhouse. This meant that the first 
            steak I ever had was one that I cooked for myself when I was 19. I ended up getting a cheap, thin, tough cut of meat, I overcooked it, and even set off the 
            fire alarm twice! It was chewy, tough, and didn't taste at all like the legendary, succulent dish people had hyped it up to be. In my defense, it's impossible 
            to find one ideal method for making steak because of all the myths and traditions around it.
            </p>
            <p>
            Here are a few of the things I've heard over the years on how to cook the perfect steak:
            </p>
            <ul>
                <li>"Rest your steak as long as you cooked it."</li>
                <li>"Resting does nothing if cooked to the right temp."</li>
                <li>"Chill your steaks in the fridge for 30 mins before searing to prevent overcooking."</li>
                <li>"Let your steak come up to room temp before cooking."</li>
                <li>"Marinating for 24 hours will get you the most tender, flavorful steak possible."</li>
                <li>"If you season a steak with anything more than salt and pepper, you should be shot."</li>
                <li>"Season your cutting board, not your steak."</li>
                <li>"A steak cooked past rare is a crime."</li>
                <li>"If it ain't medium-rare, I don't even want it."</li>
                <li>"The USDA says it's not safe to eat beef that hasn't reached 145F internal."</li>
                <li>"I'm not taking chances, cook it well-done or don't bother serving it."</li>
                <li>"Sous-vide is the best way to make steaks. Expensive, but worth every penny."</li>
                <li>"There's no replacement for a charcoal grill for steaks."</li>
                <li>"Sear your steak first, then let it finish in the oven."</li>
                <li>"Reverse-searing is the best way to get a steak perfectly cooked."</li>
                <li>"Keep flipping your steaks to cook them evenly."</li>
                <li>"Never ever flip your steak more than once."</li>
            </ul>
            <p className='story'>
            The list goes on and on. Logically, there's no way these can all be true. In fact, I've come to understand that none of them are really true. At least, not always. 
            For instance, when deciding how long to rest a steak, the correct answer is entirely context-dependent. Chris Young, famous chef and co-author of <em>Modernist Cuisine</em>, 
            has a wonderful video showing why resting a steak doesn't "keep in the juices" like many people think. Rather than spending time on carryover cooking to bring your steak 
            up to the target temp, you can just as easily cook it directly to the right temp and slice into it right away. This could save you a lot of time. However, many people, 
            myself included, want to make pan sauces after cooking a steak so all the delicious fond doesn't go to waste. If you cut your steak before making the sauce, it'll cool down 
            too fast, so resting gives you just enough time. Although the reasoning behind resting may not be for the juices, it can still be very important if you need those few extra 
            minutes. 
            </p>
            <p className='story'>
            What I'm trying to say is this: steak tastes pretty good. If you get a fairly decent cut of meat, cook it by your preferred method to your preferred doneness with your 
            preferred seasonings and sauces, you will like it. One can debate the best methods for buying and cooking steaks 'til the cows come home (pun intended), but what about 
            the average home cook? Most people don't need Michelin-star quality food to feed themselves, wow their loved ones, or to get good at cooking. If you want the perfect 
            recipe for steak, keep looking and let me know if you ever find it. But if you're looking for the ability to pop over to the grocery store, pick up a steak and cook a 
            damn good meal without breaking the bank or compromising too much on quality, this is the guide for you.
            </p>
            <p className='has-text-centered subtitle is-4 mt-6'>The Right Cut for the Job</p>
            <p className='story'>
            A good steak begins at the store. If you have a local butcher shop, this is a great way to ensure freshness and quality, get advice from an expert on your steak needs, and 
            support a local business. I don't have access to one, so I just go to the meat aisle at the grocery store, which is fine too. Obviously, you should buy steaks that are sealed 
            in packages without any tears or cracks and are within the expiration date. Make sure they're still red in color (a little browning from oxidation here and there is fine). 
            Unless you're cooking steak for carne asada, cheesesteaks, or other applications that benefit from thinner cuts, try and get something around 1.5 inches thick, give or take 
            half an inch. For me, this is about the length of the joint at the tip of my thumb. That way I can eyeball if a steak is decently thick without bringing a ruler to the store 
            like a psycho. We need at least an inch of thickness, preferably more, to help avoid overcooking. A thin cut of steak cooks very fast and is often easily overdone. Having some 
            thickness allows for a bit of leeway. Also, the bigger slices are just more aesthetically pleasing. 
            </p>
            <p className='story'>
            The next thing to consider is marbling, or how much white fat is streaking through the muscle. Something labeled USDA Prime will likely have a lot of little fat streaks running 
            through it, while USDA Select tends to have very few, and USDA Choice will be somewhere in between. High marbling will improve both flavor and tenderness of the meat, so it's very 
            desirable. This is why Wagyu is so prized, its marbling score is absurdly high (too much, for some people). You don't need to spring for a Prime grade to have a good steak, but if 
            you are choosing a Choice or Select steak, try and find one with as much marbling as possible. I also like cooking with boneless steaks for convenience, but you can cook bone-in steaks 
            if you like the visual (it doesn't have any impact on flavor unless you're stewing it).
            </p>
            <p className='story'>
            As for cuts, different steaks are good for different purposes. Chuck is good for ground beef. Brisket is good for smoking low and slow. Chateubriand is good for beef wellington. 
            Skirt is good for carne asada. When I say "steak" in this post, I'm talking about a thick cut that's seasoned simply, seared quickly over high heat, eaten medium-rare, and has a 
            strong beefy flavor and tender mouthfeel. Out of all the cuts that fit this description, there are three that the average home cook should know:
            </p>
            <ol>
                <li>
                    <span className='has-text-weight-bold'>Ribeye ("The King"): </span> 
                    A large, thick, cut with a great deal of intramuscular fat, yielding a rich, buttery flavor and very tender texture.
                </li>
                    <ul>
                    <li>Flavor: Rich, Bold</li>
                    <li>Texture: Very tender</li>
                    <li>Price: High</li>
                    <li>Additional Notes: Typically very big and expensive cuts. A luxury for special occasions, not your average weeknight meal</li>
                </ul>
                <li>
                    <span className='has-text-weight-bold'>New York Strip ("The Prince"): </span> 
                    Also called Kansas City Strip or often just Strip Steak. A deeply flavorful cut from the short loin that has a delicious fat cap along one side. My personal favorite.
                </li>
                <ul>
                    <li>Flavor: Deep, Robust</li>
                    <li>Texture: Tender, but with a bit of chew. The fat cap can be a bit tough, but is great when seared properly.</li>
                    <li>Price: Fairly High</li>
                    <li>
                        Additional Notes: While it isn't the most tender cut on the market, it more than makes up for it in its extremely strong beefy flavor, making it extremely good value for the price. 
                        Highly recommend this one as a go-to cut you can always count on for quality.
                    </li>
                    </ul>
                <li>
                    <span className='has-text-weight-bold'>Tri-Tip ("The Knight"): </span> 
                    An affordable, yet very flavorful cut from the bottom sirloin. Often sold whole as a large, triangular cut, or as a smaller cut known as a Newport Steak.
                </li>
                <ul>
                    <li>Flavor: Deep, Robust</li>
                    <li>Texture: Fairly tender, often well-marbled</li>
                    <li>Price: Low</li>
                    <li>
                        Additional Notes: Value cuts tend to change along with consumer demand, but for now the Tri-Tip is extremely good and very inexpensive as of 2025. A solid budget option 
                        if you want a tender, flavorful steak that won't break the bank. May be harder to find, especially outside of the West Coast, so Top Sirloin is a decent alternative, 
                        though a bit tougher and leaner.
                    </li>
                </ul>
            </ol>
            <p className='story'>
            As mentioned before, value cuts are hard to find, because the second that consumer demand focuses on an underrated cut, the price skyrockets accordingly. Finding a truly "cheap" cut that 
            doesn't compromise on flavor and texture is next to impossible in the long term. Good steak is an expensive dish, there's no getting around that. Still, having some knowledge of cuts 
            like Tri-Tip and Top Sirloin that tend to be on the more affordable side can be very helpful depending on your needs as a home cook.
            </p>
            <p className='has-text-centered subtitle is-4 mt-6'>Journey to the Center of the Steak</p>
            <p className='story'>
            So now that you have your steak, what do you do with it? The difference between a mediocre steak and an excellent one is prep time. Because most people will have compromised 
            on tenderness by getting a Select or Choice grade steak over a Prime grade, these steaks need all the help they can get to maximize tenderness and flavor. I've seen 100 diferent 
            ways to accomplish this, but here's the best ways I've found.
            </p>
            <ol>
                <li className='has-text-weight-bold'>Salt your steaks in advance</li>
                <p>
                Salt helps things taste more like themselves, and raw meat is one of those ingredients that can't get enough salt. By generously salting both sides of your steak and leaving 
                it in the fridge for about 40-60 mins, this allows the salt to draw up moisture to the surface through osmosis, then the salt dissolves in the water and diffuses back into the 
                steak. Unlike other seasonings, salt is a very small molecule, so it will penetrate all the way to the center of the steak. This will not only improve the flavor, but the salt 
                will also contribute to the juiciness and tenderness of the steak as well by breaking down the proteins slightly. Remember, salting a steak a few seconds before cooking is leagues 
                better than salting afterward (or not at all). Salting 10-20 minutes in advance is much better than that, and going for 40-60 minutes offers a bit more improvement. Anything 
                beyond an hour is past the point of diminishing returns. No need to wait much longer than that.
                </p>
                <li className='has-text-weight-bold'>Marinate the steak with ginger</li>
                <p>
                This method is not very common outside of Asia, but ginger contains an enzyme called zingibain which breaks down meat very efficiently. It won't taste of ginger, but will add a savory 
                je ne sais quois that will elevate your steak game to the next level. Take some ginger (fresh, washed, skin-on) and blend it with a bit of water and a pinch of salt. This creates a 
                paste of crushed ginger and some ginger juices that will coat the steak nicely. Once all sides are covered, let sit for 2-4 hours. Any longer than 4 hours, and the steak might get so 
                tender it falls apart in your hands. I like to salt it on both sides, leave it for an hour to let the salt penetrate to the center, then smother in the ginger marinade and let sit for 
                another 2 hours.  After it's done, I clean off all the ginger, washing it off gently if I need to. If you cannot be bothered to wait 3 hours to begin cooking your steak, you can skip 
                this step, but trust me, this has changed the way I cook steaks forever and I can never go back.
                </p>
                <li className='has-text-weight-bold'>Cook the center, dry the surface</li>
                <p>
                If your steak is less than an inch thick, this won't make much of a difference. But with something closer to 1.5 inches or above, reverse searing helps control temperature and prevent 
                that thick, grey band below the surface of the meat. Popularized by J. Kenji Lopez-Alt, the reverse sear is a technique where you take the traditional searing method (cooking over high heat 
                to develop a crust, then finishing in the oven to let it come up to temp) and do it in reverse instead (bake gently on a wire rack until just below desired doneness, then sear it hard and 
                fast to finish). The benefit of this method is that it brings the steak up to temp to get a crust much faster without overooking. Below is the table with the best temperatures and cooking 
                times for 1.5 inch steaks. They may vary depending on the cut of steak and your oven, but it's a decent rule of thumb and hasn't failed me yet. Be sure to check the temperatures yourself 
                using a meat thermometer. This table, along with a lot of other great info on reverse searing can be found 
                in <a href='https://www.seriouseats.com/reverse-seared-steak-recipe' className='is-underlined' target='_blank'>this article</a> by Kenji himself.
                </p>
                <p className='title is-5'>For 1 1/2–Inch Steaks in a 250°F (120°C) Oven</p>
                <table className="table is-bordered">
                    <thead>
                        <tr>
                        <th>Doneness</th>
                        <th>Target Temperature in the Oven</th>
                        <th>Final Target Temperature</th>
                        <th>Approximate Time in Oven</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Rare</td>
                            <td>105°F (40°C)</td>
                            <td>120°F (49°C)</td>
                            <td>20-25 mins</td>
                        </tr>
                        <tr>
                            <td>Medium-Rare</td>
                            <td>115°F (46°C)</td>
                            <td>130°F (54°C)</td>
                            <td>25-30 mins</td>
                        </tr>
                        <tr>
                            <td>Medium</td>
                            <td>125°F (52°C)</td>
                            <td>140°F (60°C)</td>
                            <td>30-35 mins</td>
                        </tr>
                        <tr>
                            <td>Medium-Well</td>
                            <td>135°F (57°C)</td>
                            <td>150°F (66°C)</td>
                            <td>35-40 mins</td>
                        </tr>
                    </tbody>
                </table>
                <p>
                When the steak comes out of the oven, make sure to pat the surface dry with a paper towel as much as possible before cooking. Then season with black pepper. 
                That's all you need. Between the salt, the gentle heat of the pepper, and the subtle savoriness of the ginger, you have more than enough to add flavor while 
                maintaining the beef as the star of the show. You can season further at the end of the cooking process using saucing and basting as you see fit. Patting the 
                surface dry also helps the steak surface undergo the Maillard reaction faster, which gives a well-developed crust that isn't uneven or soggy.
                </p>
                <li className='has-text-weight-bold'>Sear for a good crust</li>
                <p>
                Heat a stainless steel or cast iron pan to high heat. Non-stick will not work, as the high heat will ruin the coating. You'll know the pan is hot enough when you 
                flick some water on it and instead of sizzling away in one place, it beads up and skitters around the pan. This is called the Leidenfrost Effect, indicating the pan 
                is above 379 Fahrenheit (193 Celsius) This is a little higher than the temp needed for the crust to brown, but will ensure that the pan will be hot enough when the 
                meat cools it down on contact, and that the meat will release properly when it's ready on that side. Add a little vegetable oil (or any neutral oil, or beef tallow) 
                and let the fat coat the pan well and heat up until shimmery. Carefully lay in the steak in the middle of the pan and gently apply pressure to ensure full contact. 
                Cook for 30 seconds on each side, flipping back and forth every 30 seconds until a brown crust forms on both sides. If it doesn't release after the first 30 seconds, 
                let it sit a few more seconds until it releases a bit easier. It may need some assistance coming off the pan at first, but it shouldn't rip the steak up or leave any 
                big chunks behind. Flipping frequently is important to avoid overcooking under the surface. However, if you flip any faster than 30 seconds, the steak won't have enough time to 
                develop any kind of sear, so 30 seconds is the sweet spot. Once you've got a nice crust going, briefly sear the edges and the fat cap if there is one present.
                </p>
                <li className='has-text-weight-bold'>Shoot for medium-rare, slice against the grain</li>
                <p>
                Take the internal temp at the center of your steak with your instant-read meat thermometer. Some people have aversions to using thermometers for some reason, thinking 
                they don't need any fancy tools to get a good steak. But if Michelin-star chefs rely on them, you're not above using them either. Plus, they're not that expensive and 
                can often be found in your local grocery store. You're shooting for an internal temp of around 130°F (54°C) for medium-rare. This will get you a succulent, pink center 
                and a tremendous amount of flavor, balancing both texture and taste. If you're worried about food safety, don't worry. As long as your meat has been properly stored, 
                isn't expired, and you've cooked the surface well, it's fine for the inside to be between 130-140 Fahrenheit. Your chance of food poisoning is extremely low. If you 
                really want to be extra safe, you can cook to medium doneness (140F/60C) and let rest for a few minutes. The carryover cooking will neutralize the bacteria to the highest 
                safety standards. With all the tenderization work we did to ensure the juiciness and softness of the steak, you can get away with cooking your steaks to medium, but I 
                (along with most people) still prefer medium-rare. You can choose to rest your steaks or not depending on your preference, but you don't have to if the meat is at the 
                temperature you want. When slicing, make sure to find the direction of the "grain" of the meat. Meat is muscle, and muscle is a bundle of tissue fibers that run in a 
                single direction. You'll be able to see the lines of the grain on the surface of the steak, and the best practice is to cut perpendicular to the grain in 1 cm strips. 
                Chewing through muscle fibers is quite difficult, so slicing them across the grain rather than with the grain will do most of the work for you. That way, when you're 
                chewing, your teeth only need to separate the fibers from one another, not rip apart the fibers themselves as much. This one little step practically doubles the 
                tenderness of the meat. 
                </p>
            </ol>
            <p className='story'>
            There you have it! Just five steps, a total of less than 4 hours, and you have a mind-blowingly good steak. You can use the downtime to make mashed potatoes, sauteed asparagus, 
            or whatever side dish you want to contrast with the steak. No grill, no sous-vide, no 12-hour marinade, no dry-aging, no Wagyu price tag. Just regular ingredients from the 
            grocery store to make a juicy, tender, delicious steak at home. 
            </p>
            <p className='has-text-centered subtitle is-4 mt-6'>Every Hero Needs a Sidekick</p>
            <p className='story'>
            As I mentioned before, you can add flavor at the end by adding sauce to your steak. Some people also like to finish their steaks by basting with butter in the pan. People think 
            that basting "seals in the moisture", but it doesn't really do anything other than help keep the surface temperature high for longer. To be clear, it does add a lot of wonderful 
            flavor, especially when you toast garlic cloves and fresh thyme in the pan along with it. But you get the same effect on flavor when you slice the meat without basting, add the 
            butter to a somewhat cooled-down pan with your aromatics of choice, and toast until the butter is browned and has absorbed some of the aromatic flavors. Then, spoon your infused 
            brown butter over the top of the steak when serving. Spooning it over meat after it's sliced ensures that more surface area of the meat is covered by it, which 
            can improve the taste more than traditional basting.
            </p>
            <p className='story'>
            In the end, you can serve your steak with whatever topping or sauce you prefer. A nice chimichurri will offer some light herbaceousness and heat. Cowboy butter will be sinfully 
            rich and savory. A red wine pan sauce will work wonders, making great use of the fond left in the pan. I'm not here to tell you which one to do or how, as it depends entirely on the context 
            of your meal. There are plenty of recipes online for the popular options I mentioned above, and every single one of them is far better than A1 sauce (or worse, ketchup). Granted, 
            if you like A1 and ketchup on your steak, that's valid, but most people won't enjoy it or be impressed by it, so this is a good opportunity to find a homemade sauce that works 
            well for your needs.
            </p>
            <p className='story'>
            I hope that by the end of this long-winded post about steak, you have a clear idea of what it takes to get good steaks at home without expensive equipment. With all the traditions 
            and myths around what makes the best steak, it's hard to know the best way to make one at home that combines simplicity and practicality without sacrificing quality. Through principles 
            of food science and experimentation by folks like J. Kenji Lopez-Alt, Chris Young, and Guga Foods, I was able to consolidate the advice that's backed by evidence to make this guide. 
            I can't say if it's the best method, but I can say for sure that it gets the job done quite well. Enjoy, and as always, feel free to experiment and find your own methods!
            </p>
            </div>
            </div>
        </div>
    );
}

export default SteakMyths;
