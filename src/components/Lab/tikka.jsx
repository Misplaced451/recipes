import '../../recipes_style.css';
import '../../bulma.css';

const Tikka = () => {
    return (
        <div className="pt-6 section recipe">
            {/* Intro */}
            <div className="has-text-centered section pt-0">
                <h1 className="has-text-weight-bold is-size-3">Chicken Tikka Masala</h1>
                <p className="subtitle has-text-danger">WORK IN PROGRESS - RECIPE INCOMPLETE</p>
            </div>

            <div className="columns mb-6 has-background-light">
                {/* Instructions */}
                <div className="column">
                <h4 className="subtitle has-text-centered-mobile">Instructions</h4>
                <div className="content">
                <ol>
                    <li>Cut chicken into 1 inch cubes.</li>
                    <li>Let sit in lemon juice, grated ginger, grated garlic, and salt marinade for 30 mins</li>
                    <li>Add garam masala, paprika, and chili powder to the chicken</li>
                    <li>Cover chicken with a few spoonfuls of yogurt, fully combining the yogurt with the spices and massaging it all over the chicken to cover every crevice</li>
                    <li>Marinate chicken in yogurt mixture for 12 hours</li>
                    <li>Broil chicken on the top rack of the oven until just charred on both sides</li>
                    <li>Set chicken aside and add diced onion and cumin seeds</li>
                    <li>Once sweated, add finely diced tomatoes, tomato paste, minced ginger and garlic, and the remaining spices other than paprika and chili powder</li>
                    <li>Cook down until paste-like and shiny, then add water</li>
                    <li>Wait until sauce reaches a simmer, then add chili powder and paprika</li>
                    <li>Add chicken and simmer covered on low for 30 minutes</li>
                    <li>In the meantime, separate cilantro leaves from stems and chop up the stems</li>
                    <li>Remove the lid and drop the temperature while you add the cream and cilantro stems</li>
                    <li>Salt to taste, then serve garnished with cilantro leaves beside naan or rice.</li>
                </ol>
                </div>
                </div>
                
                {/* Ingredients */}
                <div className="column is-4-desktop has-background-grey-lighter">
                <h4 className="subtitle has-text-centered-mobile">Ingredients</h4>
                <div className="content">
                    <p>For the Chicken Marinade:</p>
                    <ul>
                        <li>1 lb chicken thighs</li>
                        <li>Lemon</li>
                        <li>Salt</li>
                        <li>Pepper</li>
                        <li>Garam masala</li>
                        <li>Cayenne pepper</li>
                        <li>Paprika</li>
                        <li>1 inch ginger, peeled</li>
                        <li>2 cloves garlic</li>
                        <li>Full-Fat Greek Yogurt</li>
                    </ul>
                    <p>For the Gravy:</p>
                    <ul>
                        <li>2 tbsp vegetable oil</li>
                        <li>1 tomato</li>
                        <li>1/2 tbsp tomato paste</li>
                        <li>0.5 onions</li>
                        <li>2 cloves garlic</li>
                        <li>1 inch ginger, peeled</li>
                        <li>Garam masala</li>
                        <li>Turmeric</li>
                        <li>Paprika</li>
                        <li>Cumin seeds</li>
                        <li>1/4 cup heavy cream</li>
                        <li>Cilantro</li>
                    </ul>
                </div>
                </div>
            </div>
            {/* About the recipe */}
            <h4 className="subtitle has-text-centered is-4">Story Time</h4>
            <p className="story">
            People think of chicken tikka masala as a stereotypical Indian food, but really it's thought to have originated from Indian immigrants living in Scotland. 
            It has become a fan favorite all across the UK, and some even consider it their national dish. Despite the complexity of flavors, the dish itself is quite simple, 
            though it does require some preparation in advance.
            </p>
            <p className="story">
            The recipe begins with a double marinade: first in citrus, then yogurt. The citrus marinade adds a nice sharp tang and seasons the meat through to the inside, while the 
            yogurt marinade breaks down the chicken more gently over a longer marinade and gives a flavorful coating to the chicken that will sear nicely. For the citrus marinade, cut 
            your skinless chicken thighs into 1 inch cubes, then put them in a bowl. You could do this with breasts, but thighs work better because they're more tender and flavorful 
            from the higher intramuscular fat. Season with salt, grated ginger and garlic, and a squeeze of lemon juice. You only need enough juice to coat the chicken, you don't want them 
            to be swimming in a pool of lemonade. Massage the seasonings into the chicken with your hands, making sure each piece is coated evenly. Let sit covered in the fridge for 30 
            minutes. The reason we do this part of the marinade is because the salt, the lime's acid, and ginger's enzymes break down the proteins in the meat and tenderize it quickly. 
            The garlic also adds a lot of delicious flavor, and you want to make sure it penetrates into the surface of the meat as well. A common misconception with marinades is that 
            they flavor the inside of the meat, but most of the molecules are just too big. Even if left for days, it still remains just below the surface. Things like salt are small 
            enough to season all the way through, but it doesn't need very long to do so. The reason why it's helpful to marinate for longer is that acid begins breaking down the 
            proteins in the outer layers of the meat, providing a tenderizing and flavoring effect. The other flavors also get a chance to lodge themselves into the surface much more, 
            even if they don't get very deep. But even though most of the flavor is on the surface, that doesn't mean it's pointless. To borrow Adam Ragusea's analogy, it's like 
            painting a house: yes, the color is just surface level, but applying paint means that color isn't going anywhere anytime soon. The flavors are "affixed" to the meat itself, 
            before we even add any sauce.
            </p>
            <p className="story">
            Once your citrus marinade is done, it's time for the yogurt marinade. Start by adding the spices to your chicken. Garam masala is the primary one to use here. “Garam masala” 
            is Hindi for “hot spice” (it's not very spicy, it just has a lot of warm, earthy spices) and contains a lot of flavors that are fundamental to a fair amount of Indian cuisine. 
            Then add chili powder to your desired spice level and a couple spoonfuls of Greek yogurt. But why add yogurt to the marinade? Are the spices not enough? Yogurt contains lactic 
            acid, which helps tenderize meat, but more gently than citric acid, making it ideal for longer marinades. It also has a thick consistency that allows it to coat the meat better, 
            which allows for even distribution of spices. In addition, when we sear the chicken, the proteins and sugars in yogurt caramelize and provide a beautiful, flavorful crust that 
            really elevates each bite of chicken. Using full-fat yogurt is important because many flavor compounds are fat-soluble, which will help with spice distribution. Add the yogurt 
            and mix it with the spices to form a marinade that fully coats the chicken, and do not leave any crevice uncovered. I like using Greek yogurt for its thickness and concentrated 
            flavor, but any plain yogurt will do. Let sit covered in the fridge overnight, anywhere from 12-24 hours. Longer than that and the acid will have made the meat mushy.
            </p>
            <p className="story">
            Get a baking sheet lined with aluminum foil and place a wire rack on top. Arrange the chicken pieces on the rack such that none of them are touching. Broil for a few minutes on 
            each side until just charred on the highest rack you can fit it. We don't need to cook the chicken all the way through, just get a good crust on the outside and caramelize that 
            marinade. This is meant to mimic the effect of tandoor cooking without needing an actual tandoor oven in your house. Once seared on both sides, take it out and set aside while you 
            make the gravy.
            </p>
            <p className="story">
            Dice up your onion and tomato finely, and mince your garlic and ginger (or just grate it, if you've washed your grater since yesterday's marinade). Heat up oil in a pan on medium-high 
            and add the onion with some cumin seeds. The reason we fry the cumin early is to wake up the flavor in those seeds by lightly toasting them so they contribute maximum flavor to 
            the rest of the dish. Cook the onion until sweated through and beginning to turn translucent. Now add the diced tomato, a small spoonful of tomato paste, a pinch of turmeric, 
            ginger/garlic, garam masala, and a pinch of salt. This next step is the trickiest part of the dish. Mash the tomato as it cooks until it reaches a consistency resembling a paste. 
            Once it loses enough water and the vegetables fully break down, it will eventually start leaking a bit of oil and look a bit shiny. You will see the oil begin to sizzle at the edges 
            of the paste. That's the indicator that you've cooked the mixture long enough to fully cook the spices. It takes a bit of practice to identify this stage, but when you can, you'll 
            be able to make a perfect curry every time.
            </p>
            <p className="story">
            Now add in water. Not too much, but enough so that if you added the chicken, it would be just fully submerged in the gravy. Stir until the gravy is homogenous. Of course, this will 
            cool down the pan quite a bit, so it may take a while for it to reheat. Once it reaches a simmer, add a hefty shake of paprika and a pinch or two of chili powder. Paprika isn't common 
            in this dish, but I like adding it to deepen the redness. I find that deepening the color is important, as it helps distinguish it from butter chicken. Butter chicken (murgh makhani) 
            emphasizes the smooth, butteriness of the gravy resulting in a muted flavor, but superior mouthfeel and a gorgeous pale orange color. Chicken tikka masala is very similar, but emphasizes 
            flavor over creaminess. It should be tangier, bolder, spicier, and have a more intense red-orange color and a more textured gravy to match. Once the paprika and cayenne are incorporated, 
            add the chicken and cover with a lid, simmering on low for 10-15 minutes.
            </p>
            <p className="story">
            While that's cooking, take some time to clean the mess you made in the kitchen and prepare your cilantro by separating the leaves and stems. I can understand omitting the cilantro if you 
            have the gene that makes it taste soapy, but a few sprigs of fresh cilantro make such a huge difference. The reason we take apart the cilantro like this is because the leaves work better 
            as a garnish and the stems provide flavor to the gravy when stewed for a bit. Chop up the cilantro stems and set aside. Uncover the pan and stir to cool the curry down from a simmer 
            before adding the cream. High temperatures of the pan mixed with the high acidity of the sauce may cause the cream to split, so dropping the temperature a bit is recommended. Add the cilantro 
            stems and cream, stirring to combine until it all comes together. Taste and adjust salt as needed. Serve over rice or beside naan, garnish with cilantro leaves, and enjoy.
            </p>
        </div>
    );
}

export default Tikka;
