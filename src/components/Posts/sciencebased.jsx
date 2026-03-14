import '../../recipes_style.css';
import '../../bulma.css';

import { Link } from 'react-router-dom';

const ScienceBased = () => {
    return (
        <div className="pt-6 tabcontent recipe section">
            {/* Intro */}
            <div className="has-text-centered section pt-0">
                <h1 className="has-text-weight-bold is-size-3">The Problem With The "Science-Based" Approach</h1>
            </div>

            <div className="section pt-0 columns">
            <div className="column is-2-desktop"></div>
            <div className='column is-8-desktop content'>
            <p className='has-text-centered subtitle is-4'>The Traditional Mindset</p>
            <p className='story'>
            Although cooking (like everything else) works based on scientific laws and principles, the idea of a "science-based" home cook is relatively recent. Many recipes were made in households 
            by mothers and grandmothers and passed on through families. Others were made for courts or wealthy homeowners by professional chefs, then passed down to apprentices. Whether from family 
            tradition or pedagogy, the art of cooking was steeped in a respect for one's culture and predecessors. Obviously innovation existed, but it was always based on personal preference or 
            dictated by supply and demand. There was little investigation into the <em>why</em> of cooking, you just kind of had to accept sometimes that this is the way that things were done.
            </p>
            <p className='story'>
            I think tradition can be a powerful thing, and it unites people across time and space beautifully, but I also think traditional thinking can sometimes hold us back. For instance, washing 
            chicken before cooking it is a common household practice around the world. It makes sense intuitively: raw meat contains pathogens, so rinse the meat and remove the pathogens. You still 
            need to cook your meat thoroughly, especially poultry, but it should theoretically lower your risk of infection, right? Wrong. Water isn't enough to kill bacteria. If you're washing raw 
            chicken under your tap, all you're doing is spreading that salmonella all over the inside of your sink, and maybe your counter too, if the water splashes on there as well. This actually 
            might <em>increase</em> your risk of infection in the long-run, so it's best to throw that tradition out the window. Just wash your hands with soap before and after cooking, disinfect 
            anything that has been touched by raw meat, and use separate surfaces for cutting meat and vegetables, and you should be just fine. 
            </p>
            <p className='story'>
            Other traditions, however, like blooming spices in hot oil before adding other ingredients, allows for flavors to spread evenly, develop some depth, and meld together well with each 
            other. In cuisines (e.g., Indian cuisine) that add lots of spices in a single dish, this technique allows those spices to meld together in a symphony of aroma. There's no way that ancient 
            Indians understood the chemistry of how volatile active compounds react to heat and bond to nonpolar molecules more easily than polar molecules. But through some trial and error, they 
            developed a tradition that worked well with their own style of cuisine and helped make Indian food what it is today: delicious.
            </p>
            <p className='story'>
            
            </p>
            <p className='has-text-centered subtitle is-4 mt-6'>The Science-Based Mindset</p>
            <p className='story'>
            Food science is not a new concept. People have been applying the principles of physics and chemistry to food for hundreds of years. However, there has been a recent surge online in 
            "science-based" content. I've seen it in everything from workout videos to skincare advice to productivity books. Food writers and culinary content creators have hopped on the 
            science-based train more than ever in the last decade or so, publishing home experiments, using fancy lab equipment, and making molecular gastronomy techniques more accessible to the 
            enterprising home cook.
            </p>
            <p className='story'>
            Personally, I love the fact that people are willing to question conventional wisdom in favor of empirical evidence. However, I think the monetization potential around the science-based 
            movement has corrupted its intentions. If just one small study comes out regarding the potential negative health impacts of a single ingredient or nutrient, content creators are incentivized 
            to make a hoopla about it. For instance, take all the nonsense people are spreading about seed oils being bad because their Omega-6's are pro-inflammatory. In reality, Omega-6 fatty acids 
            are essential for our health. The role of Omega-6's in the body's inflammatory response is a complex subject and needs further study, even by the admissions of the scientists who have 
            written papers on the subject. But that doesn't stop health nuts on YouTube from asserting that all seed oils are the devil. These are people that are hijacking the science-based train 
            for engagement, and it leads people to make more uninformed decisions.
            </p>
            <p className='story'>
            Another issue with the science-based approach is that even if the information is accurate, its effects might be sensationalized due to a lack of scientific literacy in the majority of the 
            public. What happens as a result is that many people waste time fussing and arguing over small tweaks and tips that add only marginal improvements to their food, and their attention 
            subconsciously strays away from the major details that actually matter. Sure, you can debate whether peanut oil or vegetable oil makes a crispier French fry, but if you're not salting your 
            potatoes properly or you're not cooking them thoroughly, the meager difference in saturated fat content isn't going to count for much. It's easy for people to obsess over the details, and a 
            science-based home cook can very easily find themselves in a daunting quagmire of information, making it harder for new cooks to focus on just practicing the fundamentals.
            </p>
            <p className='has-text-centered subtitle is-4 mt-6'>A New Approach</p>
            <p className='story'>
            Evidently, the science-based approach is valid in theory: figure out what works best and just do that. But theory and practice are only the same in theory, not in practice. A lot of the 
            "scientifically best" methods and ingredients are expensive and/or hard to find. We need an approach that achieves the best results, but also redefines "best" from meaning "maximal" to 
            meaning "optimal". Maximal results achieve the highest measurement of a particular variable, like how crispy your fries are, or how much liquid is retained in your chicken breast after 
            cooking. These are the best results one could theoretically achieve. Optimal results are the best <em>possible</em> outcomes given a variety of factors. Sure, making lump-free mashed 
            potatoes in a food processor maximizes speed, but it incurs the cost of overworking the potatoes, resulting in a gummy, gluey glop. Because maximizing one variable often comes at the cost 
            of others, it's important to find some balance. Pushing your potatoes through a sieve, although slower, ensures the same level of smoothness but yields a more tender, fluffy mash.
            </p>
            <p className='story'>
            When running science experiments, it's often the objective to find the maximal result rather than what's necessarily optimal. In most experiments, especially ones that determine causality 
            between variables, it's good practice to control for as many variables as possible and isolate the change to a single variable. But real life is very different from the inside of a lab. 
            Cooking doesn't exist in a vacuum, it's a part of our daily lives, which is full of confounding obstacles that make things much more unpredictable. For the average home cook, we don't need 
            maximal results. Sure, it's nice to have a chocolate mousse that's 2.6% more airy, but if it takes expensive equipment or twice as much time to make, it's not worth the maximal result. 
            Whenever I make a new recipe, I am often severely limited by the fact that I live in an apartment with limited counter and storage space, a budget I can't overspend on, and only so much 
            time in my schedule to make it. I do not have a team of chefs and line cooks working for me. I am not in control of all the variables, and I don't have the time or money to gain that control. 
            I have to sacrifice a bit of quality for efficiency. After all, I'm not making money off of each meal I make.
            </p>
            <p className='story'>
            Home cooking isn't always about the food, it's also about the effect that the process has on your domestic life. It's important to find balance between quality and efficiency (benefit vs cost). 
            In other words, I need optimization, not maximization. The bottom line is this: when it comes to finding the best methods, leave it to the scientists and science-based folks. As home cooks, our 
            question isn't "how do I make the best food humanly possible?" It's "how do I make the best food I can with the constraints and resources at my disposal?" Although this approach is informed by 
            science, I find that this is the mindset not necessarily of a scientist, but that of an engineer.
            </p>
            <p className='has-text-centered subtitle is-4 mt-6'>The Engineer's Mindset</p>
            <p className='story'>
            It's a scientist's job to answer questions: How does this process work? What would happen if we did this? What's the relationship between these two variables? An engineer is someone 
            who solves problems. They figure out not just how things work, but how to make them work. They often find the easiest path to optimal results, taking practical feasibility into account. 
            In science, you want to control as many variables as possible. In engineering, you often need to account for the fact that you <em>can't</em> control all the variables all the time. 
            There isn't a feud between scientists and engineers, they're not on opposite sides. Their relationship is symbiotic: scientists provide knowledge that engineers use to design things 
            that scientists may use for testing.
            </p>
            <p className='story'>
            To me, being a good home cook is being a good engineer. Maybe I'm just biased, as I'm already both of those things. But problem-solving is often at the core of a lot of recipe development. 
            Let's say you want to make a good apple pie. In order to maximize all the good things people like about apple pie, you'll need ingredients like flour and butter. But what if you or someone 
            you're serving it to has a gluten allergy? You have to figure out a workaround, but using substitute ingredients provides a different result, which may be subpar. We cannot always maximize 
            quality, but we can optimize it. Maybe using oat flour would work best since the flavor of oats and apples go hand-in-hand. However, gluten is a key ingredient because it helps provide 
            structure. Oat flour crusts might have more of a crumbly and less of a traditionally flaky texture as a result. Maybe adding something like egg whites as a binder would help (though it's 
            not required). Notice the process at work here. We had an ideal scenario in mind, then we modified it to the provided context, took stock of the pros and cons of our solution, then tweaked 
            it to cover for the cons.
            </p>
            <p className='story'>
            There's more to culinary engineering than ingredient substitutions. When making a feast for Thanksgiving or another holiday that requires multiple dishes to come to the table at once, don't 
            you hate the scramble of having so many things going at once? You don't have a professional kitchen staff helping you out, and sometimes you're on your own in the kitchen. This is where 
            logistics comes into play. Think about how many pots you have, or how many things you can fit in the oven at the same temperature. Which things need to be served hot and fresh, and which 
            things can be made ahead of time? Maybe chopping your vegetables the day before and placing them in deli containers in the fridge would prevent a lot of counter clutter. Make as much as you 
            can beforehand, and when you have to do multiple things at once, calculate downtime. Have something in the oven for 30 mins? That's the perfect amount of time to whip up somehting else on the 
            stove. Need to let a stew simmer a long time, but you only have the one pot? Let it simmer while you do all the prep for any other dishes that would need to use the pot after. Maybe you can't 
            boil potatoes for your mash while your cranberry sauce is cooking, but you can put them in a tray in the oven, or even use the microwave if you know how to cook potatoes in one. Whatever the 
            case may be, find out ways for the jigsaw pieces of the cooking process of each dish to fit together as nicely as possible.
            </p>
            <p className='story'>
            This is exactly how I came up with my <Link className='is-underlined' to="/thanksgivingpie">Thanksgiving Cottage Pie Recipe</Link>. Thanksgiving is so hectic, and people often end up with dry 
            turkey and lackluster side dishes as a result of all the chaos. But what if you could combine as many Thanksgiving dishes into one to save on time, counter space, and utensils? After thinking 
            on this, I found that the solution is cottage pie made with turkey instead of beef. The ground turkey stands in for whole turkey (and because it's cooked in stock there's no chance of dryness). 
            The aromatics stand in for the flavors you would add to stuffing. The peas stand in for buttered peas. The roux and stock are literally all the components of gravy. And the mashed potato on top 
            speaks for itself. So you get the flavor of turkey, stuffing, peas, gravy, and mashed potato all in one bite. It's as if you had a fully loaded Thanksgiving plate and you got a little bit of 
            everything on the fork! The only way I was able to make this recipe was through the mindset of an engineer. Once I spot a problem, I figure out how to solve it.
            </p>
            <p className='story'>
            Every engineering profession has a different workflow, but I've found that there seems to be a common thread for most engineers (and also applies for resolving problems in other fields as well). 
            Below are what I call the Basic Rules of Engineering:
            </p>
            <ol>
                <li className='has-text-weight-bold'>Play the Detective</li>
                <p>
                Good problem finders make better problem solvers. Keep your eyes open for things that could be better, processes that could be improved, frictions in the system that stand out or results that 
                are inconsistent or subpar. You'll find them because you're looking for them. Once you do find a clue that something's not right, follow it to the source. Engineers call this Root Cause Analysis. 
                Sometimes problems occur at an early step of a process and you don't see the impact until a later step. Rather than fixing the effect, fix the cause. This would be like a detective cleaning up 
                the crime scene rather than tracking down the perpetrator. If you want to prevent more crime scenes, catch the killer, don't just clean up after them. Gather all the information you can, figure 
                out <em>why</em> this problem is there, and follow it to the root cause.
                </p>
                <li className='has-text-weight-bold'>Use the Four Tenets of Design</li>
                <p>
                The best way to solve a problem is not to tackle it head-on, but to break it down into smaller pieces. Brainstorm ideas and write up a solution you think will work. When designing a solution, 
                there are four tenets to keep in mind: <span className='has-text-weight-bold'>Modularity, Flexibility, Feasibility, and Simplicity</span>. Modularity is the ability to separate and recombine 
                different components. Flexibility is the potential to adapt to different situations. Feasibility is how easily something can be done in terms of effort, time, or cost. Simplicity is how 
                uncomplicated it is to understand, or how few steps or ingredients you need to remember to get it done. <br /><br />A recipe that's modular could be like a cottage pie. Whether it's more convenient to prepare 
                your potatoes or your mince first is entirely up to you, and you can swap around the steps as needed. Or, if you just want the mashed potatoes, feel free to just lift those steps out of the recipe 
                and don't make the mince at all. The components of this recipe are separable and can recombine in different ways. <br /><br />A good example of flexibility is a bechamel. You can use this to make a lasagna 
                bolognese, a sauce soubise for your roast chicken, a creamy mac and cheese sauce, an American-style fettucine alfredo, etc. Just by making little tweaks here and there, one recipe can be used in 
                so many different ways. <br /><br />One way I've found to improve feasibility is in my recipe for oven jerk chicken. By definition, jerk chicken is meant to be smoked over pimento wood, and you just 
                can't do that in an oven. However, you can still get a decent char by broiling at the end, and even though you don't get pimento smoke, you can still enjoy a pretty decent imitation of this dish 
                right at home in a way that's much more accessible to most people. <br /><br />Simplicity is my favorite of the four tenets in the kitchen, because it creates very little clutter in the mind (and the sink). 
                That was the challenge when making my chocolate mug cake recipe. Any time I wanted to improve quality, I had to sacrifice simplicity. The whole point of making a mug cake is that it's both feasible 
                and simple. Although I could make good results more feasible by mixing the dry and wet ingredients separately, that would add more complexity by increasing the number of steps to take and dishes to 
                clean. I needed to find a solution that tasted good but didn't add any more steps than "put very common household ingredients in mug, stir with spoon, microwave". Eventually, I found that by mixing 
                the dry ingredients with the fat first, it would inhibit gluten development when adding the milk, rendering the cake more tender. Just changing up the order of the ingredients made the recipe foolproof. 
                Sometimes the simplest solutions are the best. That's why engineers love to KISS (Keep It Simple, Stupid).
                </p>
                <li className='has-text-weight-bold'>Perfection is the Enemy of Progress</li>
                <p>
                I think we need to rethink perfection as a society. Originally, the word "perfect" comes from the Latin <em>perfectum</em>, where it means something more akin to "complete" or "finished" rather 
                than the absolute best that something could ever be. To me, perfection is attained when the work is finished, not the other way around. We're often tempted to tinker with things until they're just 
                right. But knowing when to stop (or knowing when not to start at all) is just as important as identifying a problem in the first place. Consider the cost-benefit of moving forward. If the icing on 
                your cake doesn't look completely smooth, is it really impacting the quality that much? Or is constantly getting finicky with it only going to waste time and you're never going to get it up to the 
                ideal standard in your head? There's a common saying in the software engineering world: "it's not a bug, it's a feature!" I don't fuss over complete smoothness of icing or cutting precisely even cubes of 
                vegetables. Instead, I just do a reasonable job, and chalk up the margin of error post-hoc to intentional design choice. It's not misshapen, it's "rustic", I tell myself. I'm not saying to be lazy, 
                but once you reach the point where further effort is only going to yield marginal progress if any, it's time to stop. It's perfect the way it is. In cooking, as with most endeavors, the benefits 
                you get from additional effort follow the law of diminishing returns. The more you focus on getting it flawless, the less you focus on actually getting it done, which is the most important part. It's 
                good to seek out improvement where the costs are worth the benefits, but don't get bogged down in the little things. I would rather make a cake that's 90% perfect (which is still a really good cake) than 
                tear my hair out for hours over minute details that nobody can pick up on for a marginally better result.
                </p>
                <li className='has-text-weight-bold'>Implement Small Before Implementing Big</li>
                <p>
                Sometimes you get a little fancy with the experimentation and you end up messing something up. It happens. But you don't want it to happen if you're making a massive portion of food. Or worse, if 
                you're cooking for other people. Always do a dry run first with a smaller batch before committing yourself to a more risky endeavor. One time I made a potato garlic soup for a big feast, and I didn't 
                end up liking it. But I made so much I had several deli containers full of it that I ended up having to eat throughout the week. Always implement small before you implement big. I should have done a 
                dry run a few days or weeks in advance with maybe 1/4 the amount. That way, I would avoid overcommitting to something that I don't even know if I like. Then, on the day of the feast, I'd know how to 
                tweak the recipe (or pick a different one) and I wouldn't make so much that I'd be running out of containers to fit all the leftovers. Good engineers always test before deploying their solutions into 
                production, no matter how knowledgeable they are. 
                </p>
                <li className='has-text-weight-bold'>Documentation, Documentation, Documentation</li>
                <p>
                If there's one thing you take away from this post, let it be this point. As the author Mark Batterson once said, "The shortest pencil is longer than the longest memory." You think you'll be smart enough 
                to keep everything in that steel-trap noggin of yours, but believe me, writing it down always helps. Engineers rely on good documentation, both as a reference for creating new designs and as a system of 
                accountability in delivering consistent results. In the kitchen, I constantly come up with recipes that I forget about until weeks or even months later. I've found that the only way they get translated 
                into action is if I bother to write them down. I sketch out the idea in my notes and think about the ingredients and instructions that would go into making it work. If I experiment with a recipe on the 
                fly and it ends up being great, I don't want to forget I did that, I'd much rather update the recipe in my notes right away. I find that this site has been a wonderful repository of my thoughts, feelings, 
                ideas, and memories that I can always turn to if I need to know how to cook something. I strongly encourage you, if you have a recipe you like, or one that you're good at, write it down. Even if it's one 
                that you get from this site, keep it somewhere local that you can access anytime. Who knows? Maybe one day your grandkids will want to make your signature recipe that reminds them of all the times they spent 
                at your house. Keep those notes not just for yourself, but for them too. In fact, one of the reasons I have this site isn't just for my own ease of reference, it's because people often ask me for the recipe 
                when I make them something, and I love sharing my recipes with others. A website where everything's well-documented makes it easy.
                </p>
            </ol>
            <p className='story'>
            I created this concept of The Engineer's Mindset as a way to change our approach to how we do things in our daily lives. I see too many people relying blindly on tradition or instinct without knowing what they're 
            doing or why. I see people try and fix this by jumping on the science-based train where it's easy to get wrapped up in obsessing over minute details and trends as new research comes out. The Engineer's Mindset is 
            a way to not just take an informed approach to life, but to prioritize practicality, adaptation, and problem-solving over trying to maximize every variable in isolation. Essentially, it's important to do what works, 
            but it's better to do it in a way that works for you.
            </p>
            </div>
            </div>
        </div>
    );
}

export default ScienceBased;
