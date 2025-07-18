import '../../recipes_style.css';
import '../../bulma.css';

const ChickenStock = () => {
    return (
        <div className="pt-6 section recipe">
            {/* Intro */}
            <div className="has-text-centered section pt-0">
                <h1 className="has-text-weight-bold is-size-3">Blue-Chip Chicken Stock</h1>
                <p className="subtitle">Outperforms any stock you get in the market</p>
                <p className="subtitle has-text-danger">WORK IN PROGRESS - RECIPE INCOMPLETE</p>
            </div>
            
            <div className="columns mb-6 has-background-light">
                {/* Instructions */}
                <div className="column">
                <h4 className="subtitle has-text-centered-mobile">Instructions</h4>
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
                </div>
                
                {/* Ingredients */}
                <div className="column is-4-desktop has-background-grey-lighter">
                <h4 className="subtitle has-text-centered-mobile">Ingredients</h4>
                <div className="content">
                <ul>
                    <li>2 lbs chicken carcasses *</li>
                    <li>2 quarts filtered water</li>
                    <li>4 cloves garlic</li>
                    <li>1 yellow onion</li>
                    <li>0.5 large carrots</li>
                    <li>2 stalks celery</li>
                    <li>1 bay leaf</li>
                    <li>1 small bunch thyme</li>
                    <li>1 small bunch parsley</li>
                    <li>2 tbsp whole black peppercorns</li>
                    <li>1 tbsp white vinegar</li>
                    <li>1 tsp MSG</li>
                    <li>Pinch salt</li>
                </ul>
                <p>* I use scraps like wing bones. If it doesn't come out to 2 lbs, I add chicken breast until the weight is correct</p>
                </div>
                </div>
            </div>
            
            {/* About the recipe */}
            <h4 className="subtitle has-text-centered is-4">Story Time</h4>
            <p className="story">
            Chicken stock is one of those things that makes a huge difference when made at home, but it takes so long! I've seen recipes that advocate boiling a stockpot for 6-12 hours, 
            which would not only be a massive time commitment, but also a huge waste of electricity, water, and gas. I set out to find out if I could make a high-quality stock in about 
            2 hours, and I think I've succeeded. This recipe wasn't designed to be some restaurant-quality, crystal-clear stock, but rather a simple, practical stock that's worth the effort 
            to make at home rather than buying a carton from the store. This is why I call it my "blue-chip" stock - it's pricier and takes a while to get big returns, but will reliably 
            outperform any stock you can get in the market.
            </p>
            <p className="story">
            Let's start by talking about what makes a good stock. Stock is made by boiling bones in water to extract flavor, collagen, and nutrients. The collagen is what gives a good stock 
            its body and mouthfeel, and can also help naturally thicken sauces. Meat, vegetables, herbs, and spices can be used to add flavor, but the bones and connective tissue are the most 
            important part. Broth is similar to stock, but is made with meat instead of bones, yielding a gentle flavor and thin mouthfeel perfect for sipping or used in light soups. Soup is 
            liquid that is flavored by the ingredients that it cooks, and unlike stock and broth, is served with those ingredients, either solid or blended to a homogenous liquid. Soups can be 
            made with stock or broth as the base in order to impart more flavor. This means that bone broth, although labeled as a broth, is technically a stock if we go by the definitions 
            above. The terms are often used interchangeably in cooking, but for the sake of clarity, I will keep the definitions separate to refer to this recipe as chicken stock. So now that 
            we know the basic components of stock, what makes a chicken stock good?
            </p>
            <p className="story">
            First, it should have a pronounced chicken flavor. It doesn't need to be very intense, but the chicken flavor should be the most prominent, and deliver a noticeable umami taste. 
            Second, it should have a high collagen content to improve the texture. Some stocks have so much collagen that they turn into a gel when chilled, but this is not necessary. Third, 
            it should have a light, balanced sweetness and aroma. We want to use aromatics, but not too many, as they may overpower the chicken flavor that we have as our top priority. Fourth, 
            it should be clear in flavor and appearance. Remember, stock is NOT soup. We don't want it to be overly salty, spicy, or anything else. We want it to basically taste like water 
            with essence of chicken and some aromatics. If adding it to a soup or sauce, season to tast there and add all the herbs and vegetables you want, but we want our stock to be versatile, 
            so simplicity of flavor is best. Many chefs also like having the stock appear clear as well, since cloudy stock can look unappetizing and taste a bit off. The cloudiness is caused 
            by impurities such as undissolved proteins and fats that are emulsified into the liquid. Although I don't really care about having a crystal-clear stock, I do want to get rid of 
            impurities where I can. Finally, it should be golden in color. This is a personal preference, but I think that overly pale stock doesn't look appetizing, and overly dark stock looks 
            murky. What we want from this recipe is liquid gold.
            </p>
            <p className="story">
            To address the first concern, let's start with the chicken. It's recommended to use the carcasses of whole chickens, as that will yield the most flavor and collagen. However, I don't 
            have the time to butcher whole chickens on a regular basis, so I stick with wing scraps and chicken breasts. The wings have a good amount of connective tissue and small bones that are 
            easy to extract collagen from in a short time. When making homemade wings, I buy them whole, separate the wingtips, flats, and drumettes, and freeze the wingtips to be used in stock 
            later. I also throw the bones left over from the flats and drummettes into the freezer to avoid waste. These roasted bones will deepen the flavor and color of the stock. However, we 
            want the stock to be fairly light as well, so the raw wingtips will help strike a balance between light and dark stock. We want about 1 pound of chicken scraps for every quart of water, 
            but since most of the wings' weight will get eaten, you will likely get less than half a pound of scraps per pound of wings. You could just save up wings until you get 2 lbs of scraps, 
            but that can be time consuming. I like to save up 1-1.5 lbs of wing scraps, then add chopped chicken breast to make up the difference. In an article by Serious Eats, they experimented with 
            using different chicken parts for stock, and found that while chicken breast had the cleanest, strongest chicken flavor, it produced no collagen. This was the opposite of the wings, 
            which had a ton of collagen, but little flavor. I think makes for a good compromise, as this way the wings will give plenty of body, but the breast meat will enhance the chicken flavor 
            greatly. If you want, you could just buy 2 lbs of raw wings and use them right away, meat and all, but I think that can get quite expensive. This method will have you buy twice as many 
            wings plus a breast, but you also get about 32 wings out of it in addition to your stock, so it pays for itself. Literally, 32 wings will cost you about $35 or more at a fast food joint, 
            but you can get that amount from the grocery store for about the same price. So, by eating the wings, you get your money's worth, leaving the bones as a bonus! Now that you've got your 
            chicken, let's make the stock.
            </p>
            <p className="story">
            In order to reduce the simmering time, I use a pressure cooker. These work by trapping steam in the pot, which increases the pressure to increase the boiling point. This way, you can get 
            water boiling above 250F, which will extract collagen and flavor much faster than regular boiling water at 212F. Also, because the steam is trapped, you lose much less water to evaporation, 
            letting you get more bang for your buck. An Instant Pot will work fine, but I use a traditional stovetop pressure cooker. Some people say that pressure cookers cause more impurities to 
            emulsify in the stock, resulting in a cloudy appearance, but many people have disproven that and I haven't found it to be true in my experience, especially if you blanch the chicken first. 
            This is the first step to our stock. In order to get rid of impurities ahead of time, cover the chicken scraps with water in a pot and bring to a boil. Let it boil for 5 minutes before 
            discarding the water. You will see some foam, fat, and other turbidities in the water, so it's best to discard it now and wash it off the chicken before adding them to your stock. This is 
            a technique often used in Chinese stock-making to clarify the stock more easily. Also, if using leftover wings, you may find that they have some residual sauce or seasonings on them, so 
            blanching will clean off any additional unwanted flavors. There are plenty of aromas welcome in chicken stock, but Sweet Baby Ray's BBQ is not one of them.
            </p>
            <p className="story">
            With the chicken blanched, we can prepare the vegetables. This won't take long, so you can heat up 2 quarts of filtered water in your pressure cooker while you do this. I like using a 
            traditional mirepoix (onion, celery, carrot) plus some garlic, pepper, parsley, thyme, and bay leaf. I find that this combination gives a subtle sweet and savory aroma that's highly versatile 
            and helps add some color to the stock. Wash all the vegetables, but don't bother peeling them. You can cut the root of the onion off, or any dirty parts of the vegetables, but the skins add 
            color and a little pectin to help with the texture, so leave them on. Quarter the onions and cut the celery and carrot in half. These pieces are big enough to easily fish out, but small 
            enough to easily fit in the pot. I would chop them smaller if I were making vegetable stock, as flavor extraction is better with smaller pieces, but since we don't want to overpower the 
            chicken, this will suffice. Give the garlic cloves a whack with the flat of your knife to crack them open, but don't chop them. We want the garlic flavor to be subtle, but we still want to 
            activate the allicin in the garlic by bruising it and exposing the inside to the water. The herbs and spices are best left whole, so they can easily be fished out later. 
            </p>
            <p className="story">
            Once the water reaches a simmer, add the chicken, vegetables, herbs, and spices to the pot. I like to add a tablespoon of white vinegar and a teaspoon of MSG at this stage as well. The vinegar 
            helps break down the bones to extract more minerals and collagen, while the MSG punches up the umami flavor of the chicken. I also add a pinch of salt to help extract flavors, but I keep the 
            amount small to avoid over-seasoning the stock. Remember, stock is not a food, it's an ingredient. We add it to soups, stews, and sauces for flavor and texture, but we don't typically drink it 
            straight. What this means is that since many applications of stock will involve reducing the liquid, it will concentrate the flavor (including the saltiness), so we want to keep the seasoning 
            light to avoid potentially over-salting our food. Adding all the ingredients will cool the water down, so let it come back up to a simmer before sealing the lid. Once the lid is sealed, let it 
            build steam inside until fully pressurized, then turn the heat to low and let it cook for an hour. After an hour, take it off the heat and let it depressurize naturally. You can also use the quick 
            release method, but the result is much more stock released as steam and your entire kitchen smelling like chicken bones, so the slow release is preferred.
            </p>
            <p className="story">
            Now the stock is done! However, there are still a ton of chunks, bits, and fat globules floating around, so we need to clarify it first. Fish out all the big solids from the pot and discard them. 
            If you don't want to waste the chicken breast, you can eat it, but it will taste pretty bad and be very stringy, so I would only eat it if you feel really bad about wasting it. The vegetables 
            will have completely turned to mush and given up their flavor, so there's no need to try and do anything more with them other than maybe composting. Next, we need to cool the stock down as fast 
            as possible to prevent bacterial growth. Generally, if perishable foods are left between 40F and 140F for over 2 hours, that's the "danger zone" for breeding food poisoning bacteria. If we were to 
            refrigerate the stock right away, it would take too long to drop to 40F, so it would be at risk of developing bacteria. To speed up the cooling process, fill a sink with ice water (or fill a large 
            bowl and place it in the sink) and place your pot in the ice bath. If your pot is too big, transfer the stock to a smaller pot instead. Stir gently to help release the heat. The heat will melt the 
            ice and bring the water up to room temperature within a few minutes, so change out the water as needed to keep it ice cold. 
            </p>
            <p className="story">
            Once the stock gets to around room temperature (in about 15-20 minutes), you can filter it through a fine-mesh sieve lined with cheesecloth into airtight containers and place it in the fridge 
            overnight. The cheesecloth will help catch any small debris that the sieve misses, resulting in a stock that's as clear as possible. If you don't have cheesecloth, coffee filters will work. 
            Paper towels may work in a pinch, but are often treated with chemicals that aren't safe to be leached into food, so I wouldn't recommend it. The following morning, any remaining fat will have 
            congealed on the top, making it easy to spoon off along with any other residual foam or scum that would have risen to the top. This will last you about 3 more days in the fridge, but freezing 
            will keep it good for a couple months. Use it to make chicken noodle soup, risotto, veloute, gumbo, Mexican rice, chicken demi-glace, or any other recipe that calls for stock. The possibilities 
            are endless.
            </p>
            <p className="story">
            As a proof of concept, I could only assert that this was indeed a blue-chip stock by comparing it to the other stocks in the market. I did a color comparison and blind taste test between this stock 
            and two others. The first contender we'll call the "Penny Stock". This is a $2/qt, store-brand, cheap stock you can get anywhere. It's highly cost-effective, but due to the added flavoring agents, 
            the quality is speculative at best. The second contender we'll call the "Growth Stock". This is a $5/qt, organic, high-quality stock from a recognizable brand. It's more expensive, but the ingredients 
            are of better quality, so it's less of a risk. Last but not least is our very own "Blue-Chip Stock". This comes out to about $10/qt if you factor in the savings from eating the wings, so it's quite a 
            big investment. It also requires more patience to get returns (takes several hours while the others are ready to go), but the reliability is unmatched. Or at least, that's the theory. So how did they compare?
            </p>
            <p className="story">
            In terms of appearance, the Penny Stock was pretty bad. It had a rich, yellow-gold hue which seemed promising, but it was noticeably muddy in appearance as well due to how dark and cloudy it was. Upon 
            tasting, I was pleasantly surprised. It had a very strong chicken flavor and had some balanced vegetal sweetness, but was much too salty. There was also a slight chemical atertaste that reminded me of 
            plastic (which made sense based on the carton it came in), but it wasn't too overpowering. On the whole, I really liked it! Other than the appearance and salinity, it had a distinct flavor that tasted 
            exactly like the canned chicken-noodle soup I had as a kid. Although I make a mean chicken noodle soup at home, that exact, nostalgic flavor is inimitable, so this stock would work well in soups, but I 
            fear that the lack of subtlety and clarity of flavor, high salinity, and murky appearance would diminish its versatility. It'd make a decent soup, but not what I'm looking for in a good stock.
            </p>
            <p className="story">
            The appearance of the Growth Stock was much more promising. It had a very pale yellow color, like a white stock, and was significantly more clear, though not perfectly so. It had far more clarity than 
            the Penny Stock and had a nuanced chicken flavor that lingered much longer on the palate. Unfortunately it was way too salty, had very little aromatic flavor or complexity, and had that plasticky taste 
            from before. Despite its appearances and clarity of flavor, I found myself enjoying the Penny Stock more. It's unclear as to how much nostalgia played a role in my enjoyment, but I would rather have 
            the Penny Stock in a chicken noodle soup than the Growth Stock. For other applications, the Growth Stock would suffice and it fits the criteria for a good quality stock better, but I was a little 
            disappointed overall.
            </p>
            <p className='story'>
            Now for the Blue-Chip. This one was a pale gold/amber color that was a bit darker and slightly less cloudy than the Growth Stock. This is the ideal look for a chicken stock to me in terms of color 
            and clarity. Although I would've liked it to have a bit more clarity, it wasn't the highest on my list of priorities. For the flavor, it was the clearest flavor of the three, and had virtually no 
            saltiness interfering with it. Despite the clarity, the flavor was deeply complex on the palate. It had a prominent (but not robust) chicken flavor at first that gave way to the sweetness of the 
            aromatics, with a lingering umami at the end that had the quietest flourish of parsley and pepper at the end. If I could fix some things, I would want the chicken flavor to last a little longer and 
            reduce the amount of carrots, as I felt they dominated the aromatics and made it a bit too sweet. I've revised the recipe above to have half a carrot instead of the full carrot I used originally. I 
            also tried using mushroom stems to add more umami without affecting the color, but I hardly picked up any of that flavor, leading me to believe it's not worth it. But if you have mushroom stems left 
            over and you want to use them up here, I don't see why not. I also ended up using way fewer bones than I thought, so I wonder how a split closer to 1:1 or 3:1 wing to breast would yield a better body 
            while still maintaining the right color and flavor. Pleased as I was with the results, I need to make it again with the revisions before committing it as a finished recipe. After all, how could I 
            claim that a stock is a "blue-chip" unless I've seen a reliable performance from it?
            </p>
        </div>    
    );
}

export default ChickenStock;
