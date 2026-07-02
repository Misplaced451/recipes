import '../../recipes_style.css';
import '../../bulma.css';
import RecipeLayout from './recipelayout';

const ChickenStock = () => {
    return (
        <RecipeLayout 
        name={'Blue-Chip Chicken Stock'}
        description={'Outperforms any stock you get in the market'}
        instructions={
        <div className="content">
        <ol>
            <li>Place chicken in a pot, cover with water, and bring to a boil</li>
            <li>Boil for 5 mins, then drain out the scummy water and wash any scum off the carcasses</li>
            <li>Add water to pressure cooker and rough chop vegetables while waiting for it to boil</li>
            <p><u>NOTE:</u> Leave the onion and garlic skins on, but wash ahead of time. Don't chop the garlic, just give it a light whack to crack it</p>
            <li>Once the water is simmering, add everything to the pressure cooker and seal the lid</li>
            <li>Once pressurized, turn the heat to low and leave it for an hour. Take it off the heat and let it depressurize naturally</li>
            <li>Fish out all solids with a slotted spoon, leaving behind as much of the liquid as possible and discarding the waste</li>
            <li>Place a large bowl of cold water (pref. ice water) in the sink and put your pressure cooker in there. If it doesn't fit, transfer to a pot or bowl that does</li>
            <li>Stir gently to cool the stock as fast as possible to around room temp to prevent bacterial growth. Change out water as needed</li>
            <li>Strain into airtight containers through a fine-mesh sieve lined with a few layers of cheesecloth and place in the fridge overnight</li>
            <li>In the morning, spoon off any congealed fat or scum on the top, strain again if needed, then use as desired</li>
        </ol>
        </div>
        }
        ingredients={
        <div className="content">
        <ul>
            <li>2 lbs chicken carcasses</li>
            <li>2 quarts filtered water</li>
            <li>4 cloves garlic</li>
            <li>1 yellow onion</li>
            <li>0.5 large carrots</li>
            <li>2 stalks celery</li>
            <li>1 bay leaf</li>
            <li>1 small bunch thyme</li>
            <li>1 small bunch parsley</li>
            <li>1 tbsp whole black peppercorns</li>
            <li>1 tbsp white vinegar</li>
            <li>1 tsp MSG</li>
            <li>Pinch salt</li>
        </ul>
        </div>
        }
        story={
        <div className="story">
            <p>
            Chicken stock is one of those things that makes a huge difference when made at home, but it takes so long! I've seen recipes that advocate boiling a stockpot for 6-12 hours, 
            which would not only be a massive time commitment, but also a huge waste of electricity, water, and gas. I set out to find out if I could make a high-quality stock in about 
            2 hours, and I think I've succeeded. This recipe wasn't designed to be some restaurant-quality, crystal-clear consomme, but rather a simple, practical stock that's worth the 
            effort to make at home rather than buying a carton from the store. This is why I call it my "blue-chip" stock - it's pricier and takes a while to get big returns, but will 
            reliably outperform any stock you can get in the market.
            </p>
            <p>
            Let's start by talking about what goes into a stock. Stock is made by boiling bones in water to extract flavor, collagen, and nutrients. The collagen is what gives a good stock 
            its body and mouthfeel, and can also help naturally thicken sauces. Meat, vegetables, herbs, and spices can be used to add flavor, but the bones and connective tissue are the most 
            important part. Broth is similar to stock, but is made with meat instead of bones, yielding a gentle flavor and thin mouthfeel perfect for sipping or used in light soups. Soup is 
            liquid that is flavored by the ingredients that it cooks, and unlike stock and broth, is served with those ingredients, either solid or blended to a homogenous liquid. Soups can be 
            made with stock or broth as the base in order to impart more flavor. This means that bone broth, although labeled as a broth, is technically a stock if we go by the definitions 
            above. The terms are often used interchangeably in cooking, but for the sake of clarity, I will keep the definitions separate to refer to this recipe as chicken stock. To get even 
            more specific with our terminology, there are two different types of stock: white stock (made with unroasted bones and aromatics, has a light flavor and pale gold color) and brown stock 
            (roasted bones and aromatics, with rich, deep, caramelized flavor and color). When making chicken stock, I tend to go for white stock, as I find it to be more versatile. Besides, 
            I think its gentle flavor is really nice for light sauces like veloute and its derivatives, which do a good job of adding flavor without overpowering the dish. This recipe will be 
            for a white stock, but if you want a brown stock, cover your carcass and vegetables in a light drizzle of vegetable oil and roast in the oven at 400F for 30 mins. This will allow you 
            to skip the blanching step and you'll end up with a beautiful, dark golden stock with tons of flavor, especially if you scrape up the roasted bits left behind on the pan and add them 
            to the stock pot (a little water should help loosen it up). So now that we know the basic components of stock, what makes a chicken stock good?
            </p>
            <p>
            First, it should have a pronounced chicken flavor. It doesn't need to be very intense, but the chicken flavor should be the most prominent, and deliver a noticeable umami taste. 
            Second, it should have a high collagen content to improve the texture. Some stocks have so much collagen that they turn into a solid block of gel when chilled, but this is not 
            strictly necessary. Third, it should have a light, balanced sweetness and aroma. We want to use aromatics, but not too many, as they may overpower the chicken flavor that we have 
            as our top priority. Fourth, it should be "clear" in flavor and appearance. Remember, stock is NOT soup. Soup is a food and should taste good on its own, stock is an ingredient and 
            needs other ingredients to make good food. We don't want it to be overly salty, spicy, or anything else. We want it to basically taste like water with essence of chicken and a few 
            aromatic notes. If adding it to a soup or sauce, then add all the seasonings and ingredients you want at that point. But we want our stock to be versatile, so simplicity of flavor 
            is best. Many chefs also like having the stock appear clear as well, since cloudy stock can look unappetizing and taste a bit off. The cloudiness is caused by impurities such as 
            undissolved proteins and fats that are emulsified into the liquid. Although I don't really care about having a crystal-clear stock, I do want to get rid of impurities where I can. 
            Finally, it should be golden in color. This is a personal preference, but I think that overly pale stock doesn't look appetizing, and overly dark stock looks murky. What we want 
            from this recipe is liquid gold.
            </p>
            <p>
            To address the first concern, let's start with the chicken. It's recommended to use the carcasses of whole chickens, as that will yield the most flavor and collagen. It seems 
            intimidating to butcher a whole chicken carcass, but there's a lot of tutorials online that'll show how to do it easily in under 10 mins. I find that from a 4 lb chicken, you can 
            get 1 lb of skinless breasts and tenders, 6 oz of bone-in wings, 6 oz thigh meat, and 4 oz boneless leg meat. This leaves about 2 lbs of carcass, giblets, bones, and skins to make a 
            stock. As a side note, if your chicken comes with its liver, it's not recommended to add that to stock with the other giblets because it can impart metallic flavors and visual impurities. 
            You can pan sear it for a quick, nutritious snack if you don't want to waste it though. Because it's difficult to get much use out of just 2 chicken wings, you can break them down and 
            add them to the stock as well to add extra flavor and a ton of collagen. This leaves you with about 1.625 lbs of chicken meat that you can easily put in something like curry, soup, 
            stew, burritos, etc. to feed you throughout the week. 1 serving of chicken is 0.25 lbs, so you have enough for about six meals. Having enough chicken for 6 meals plus enough scraps to 
            make 2 quarts of top-tier stock for just $12 is a total steal. If you want something even more cost-effective, you can try Chris Young's tactic: get a $5 rotisserie chicken from Costco, 
            remove all the meat and shred it up, weigh the carcass, and add shredded meat until you hit 2 lbs. Any leftover meat that you don't add can be put in a sandwich and eaten right then and 
            there, and this will allow you to make a gorgeous brown stock with minimal cost and effort (you can skip the blanching for this version as well). That's 2 quarts of Michelin-star worthy 
            stock for about $6 total.
            </p>
            <p>
            In order to reduce the simmering time, I use a pressure cooker. These work by trapping steam in the pot, which increases the pressure to raise the boiling point. This way, you can get 
            water boiling above 250F, which will extract collagen and flavor much faster than regular boiling water at 212F. Also, because the steam is trapped, you lose much less water to evaporation, 
            letting you get more bang for your buck. An Instant Pot will work fine, but I use a traditional stovetop pressure cooker. Some people say that pressure cookers cause more impurities to 
            emulsify in the stock, resulting in a cloudy appearance, but many people have disproven that and I haven't found it to be true in my experience, especially if you blanch or roast the 
            chicken first. This is the first step to making our white stock, because if you throw in raw bones, you might get some scummy flavors and textures that you don't want. This step is optional, 
            but I find that it helps the clarity of the stock, especially since we're not standing over an open stock pot slowly skimming the foam at the top. Bring a pot of water to a boil and add your 
            chicken. Let it blanch for 5 mins and discard the water. You will notice a lot of foam that may have a gunky look and smell to it. This is what we're getting rid of. Once all the water is 
            drained, rinse your bones to really get rid of any foam stuck on there. Don't wash too hard or you might lose some of the meat and cartilage left on there.
            </p>
            <p>
            With the chicken blanched, we can prepare the vegetables. This won't take long, so you can heat up 2 quarts of filtered water in your pressure cooker while you do this. I like using a 
            traditional mirepoix (onion, celery, carrot) plus some mushrooms, garlic, pepper, parsley, thyme, and bay leaf. I find that this combination gives a subtle sweet and savory aroma that's 
            highly versatile and helps add some color to the stock. I only add half a carrot to avoid making the stock too sweet, and I sometimes add 8 oz of cremini mushrooms for a subtle earthy, 
            umami note. Add whatever you like, but remember that variety is not the spice of life for this recipe, we want to keep the flavors as clear and simple as possible. Wash all the vegetables, 
            but don't bother peeling them. You can cut the root of the onion off, or any dirty parts of the vegetables, but the skins add color and a little pectin to help with the texture, so leave 
            them on. Quarter the onions and cut the celery and carrot in half. These pieces are big enough to easily fish out, but small enough to easily fit in the pot. If adding mushrooms, leave 
            them whole. Smaller pieces will extract flavor much faster, but I find that chopping too small may allow it to overpower the chicken. Give the garlic cloves a whack with the flat of your 
            knife to crack them open, but don't chop them. We want the garlic flavor to be subtle, but we still want to activate the allicin in the garlic by bruising it and exposing the inside to the 
            water. The herbs and spices are best left whole, so they can easily be fished out later. Don't add too much of these, as you'd be surprised how much of those subtle flavors become very 
            pronounced in a light stock like this.
            </p>
            <p>
            Once the water reaches a simmer, add the chicken, vegetables, herbs, and spices to the pot. I like to add a tablespoon of white vinegar and a teaspoon of MSG at this stage as well. The 
            vinegar helps break down the bones to extract more minerals and collagen, while the MSG adds an extra umami boost and a gentle saltiness without risking overseasoning it. I do also add 
            a tiny pinch of salt to help extract flavors, but I keep the amount very small. Remember, stock is not a dish, it's an ingredient. We add it to soups, stews, and sauces for flavor and 
            texture, but we don't typically drink it straight. What this means is that since many applications of stock will involve reducing the liquid, it will concentrate the flavor (including 
            the saltiness), so we want to keep the seasoning light to avoid potentially over-salting our food. Seal the lid and let the cooker fully pressurize. Then turn the heat to low and let it 
            go for an hour. After an hour, take it off the heat and let it depressurize naturally as it cools. You may be tempted to extract more flavor by leaving it on the heat for more time, but 
            this will only destroy the texture. Collagen, which is abundantly found in animal bones, gets broken down into gelatin at high temperatures. However, gelatin is also a protein like any 
            other and will also denature when exposed to high heat for a long time. Because our pressure cooker gets so hot, we want to get it off the heat when we've extracted almost all we can 
            without destroying the gelatin that gives a good stock it's rich texture. Do not quick-release the steam, as this will cause the water to start boiling rapidly and emulsify some of the 
            fats and impurities which will diminish the stock's clarity.
            </p>
            <p>
            Now the stock is done! However, there are still a ton of chunks, bits, and fat globules floating around, so we need to clarify it first. Fish out all the big solids from the pot with a 
            slotted spoon and discard them. If you don't want to waste the chicken wing meat and giblets, you can eat them, but they will taste pretty bad and will have lost most of their flavor and 
            nutrients, so it's not really a waste to discard them at this point. The vegetables will have completely turned to mush and given up their flavor, so there's no need to try and do anything 
            more with them other than maybe composting. Next, we need to cool the stock down as fast as possible to prevent bacterial growth. Generally, if perishable foods are left between 40F and 140F 
            for over 2 hours, that's the "danger zone" for breeding food poisoning bacteria. If we were to refrigerate the stock right away, it would take too long to drop to 40F, so it would be at risk 
            of developing harmful bacteria. To speed up the cooling process, fill a sink with ice water (or fill a large mixing bowl and place it in the sink) and place your pot in the ice bath. If your 
            pot is too big, transfer the stock to a smaller pot instead. Stir gently to help the heat dissipate. The heat will melt the ice and bring the water up to room temperature within a few minutes, 
            so change out the water as needed to keep it ice cold. 
            </p>
            <p>
            Once the stock cools down and stops releasing any steam when stirred, you can filter it through a fine-mesh sieve lined with cheesecloth into airtight containers and place them in the fridge 
            overnight. The cheesecloth will help catch any small debris that the sieve misses, resulting in a stock that's as clear as possible. If you don't have cheesecloth, coffee filters will work. 
            Paper towels may work in a pinch, but are often treated with chemicals that aren't safe to be leached into food, so I wouldn't recommend it. The following morning, any remaining fat will have 
            congealed on the top, making it easy to spoon off along with any other residual foam or scum that would have risen to the top. Generally, there's not enough fat to really form a solid layer, 
            but there will be noticeable wisps of fat or scum that can be carefully spooned off the top before refrigerating again. This will last you about 3 more days in the fridge, but freezing 
            will keep it good for a couple months. Use it to make chicken noodle soup, risotto, veloute, gumbo, Mexican rice, chicken demi-glace, or any other recipe that calls for stock. The possibilities 
            are endless.
            </p>
            <p>
            From the outset of this recipe, I advertised it as a "Blue-Chip Stock" because it beats everything else in the market, so I actually put it to the test. As a proof of concept, I did a color comparison 
            and blind taste test between this stock and three others. The first contender we'll call the "Small Cap Stock". This is a $2/qt, store-brand, cheap stock you can get anywhere. It's highly cost-effective, 
            but due to the added flavoring agents, the quality is speculative at best. The second contender we'll call the "Mid Cap Stock". This is a $5/qt, organic, high-quality stock from a recognizable brand. 
            It's more expensive, but the ingredients are of better quality, so it's less of a risk. I also bought a fancy-looking chicken bone broth that retailed at about $14/qt, which we'll call the "Large Cap 
            Stock". I guess the focus on more collagen extraction and a more varied base of vegetables is meant to justify the price. Last but not least is our very own "Blue-Chip Stock". This comes out to about 
            $7.5/qt, but is closer to $2/qt if you subtract the savings accrued by the meat you used from the carcasses to make other dishes. As far as the financial pun/analogy goes (a punalogy, if you will), I am 
            aware that blue-chips are a subset of large cap stocks, so the distinction doesn't work perfectly here. However, the distinction I make in the case of chicken stock is that the label of "large cap" 
            denotes a high price point, while the distinction of "blue-chip" emphasizes returns on investment and reliability. So the question is, what's the ROI on homemade chicken stock?
            </p>
            <p>
            In terms of appearance, the Small Cap was pretty bad. It had a rich, yellow-gold hue which seemed promising, but it was noticeably muddy in appearance due to how dark and cloudy it was. Upon tasting, 
            however, I was pleasantly surprised. It had a very strong chicken flavor and had some balanced vegetal sweetness, but was much too salty. There was also a slight chemical atertaste that reminded me of 
            plastic (which made sense based on the carton it came in), but it wasn't too overpowering. On the whole, I really liked it! Other than the appearance and salinity, it had a distinct flavor that tasted 
            exactly like the canned chicken-noodle soup I had as a kid. Although I make a mean chicken noodle soup at home, that exact, nostalgic flavor is inimitable, so this stock would work well in soups, but I 
            fear that the lack of subtlety and clarity of flavor, high salinity, and murky appearance would diminish its versatility. Overall fairly decent for the price, but not what I'm looking for in a good stock.
            </p>
            <p>
            The appearance of the Mid Cap was much more promising. It had a very pale yellow color, like a white stock should, and was significantly more clear, though not perfectly so. It had far more clarity than 
            the Small Cap and had a nuanced chicken flavor that lingered much longer on the palate. Unfortunately it was also way too salty, had very little aromatic flavor or complexity, and had that plasticky taste 
            from before. Despite its appearances and clarity of flavor, I found myself enjoying the Small Cap Stock more. It's unclear as to how much nostalgia played a role in my enjoyment, but I would rather have 
            the Small Cap Stock in a chicken noodle soup than the Growth Stock. For other applications, the Growth Stock would suffice and it fits the criteria for a good quality stock better, but I was a little 
            disappointed overall.
            </p>
            <p>
            The appearance of the Large Cap Stock was pretty much perfect. Good clarity, nice golden color, and no visible impurities. The problem was the flavor (or lack thereof). None of the complex vegetable base 
            came through, and although there was some savoriness and bone-like flavor, it was completely overshadowed by that awful plasticky taste. It looks like its biggest strength in its clarity of flavor was also 
            its biggest downfall: the plastic taste had nothing to hide behind, so it came through front and center. It was barely edible, and I almost gagged trying to sip it on its own. Maybe it would taste better 
            in a soup, but if other stocks taste better at a lower cost, there's no reason to buy this.
            </p>
            <p>
            Now for the Blue-Chip. This one was a pale gold/amber color that was a bit darker and slightly less cloudy than the Mid Cap Stock. It was nearly indistinguishable from the Large Cap Stock in appearance. 
            This is the ideal look for a white chicken stock to me in terms of color and clarity. It wasn't consomme-clear, but it was decent for pressure-cooked stock. As for the flavor, it had excellent clarity 
            as well. Not too salty, no plasticky taste, and not too strong. Despite the clarity, the flavor was deeply complex on the palate. It had a prominent (but not robust) chicken flavor at first that gave 
            way to the sweetness of the aromatics, with a lingering umami flavor that had a gentle flourish of parsley and pepper at the end. So, is it worth the investment? For me, I'd say yes. If you need to make 
            a soup or gravy in a pinch, opt for the cheap or mid-range stuff, it'll do just fine. If you're aiming for high quality and you want a way to reuse chicken scraps, this is perfect. This recipe left me 
            with a ton of stock which I turned into the savoriest, richest gravy I've ever made, and a delicious chicken stew as well. That kind of quality and versatility has made it more than worth the effort for 
            me, and I encourage you to give it a try as well.
            </p>
        </div>
        }
        />
    );
}

export default ChickenStock;
