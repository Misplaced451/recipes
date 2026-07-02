import '../../recipes_style.css';
import '../../bulma.css';
import RecipeLayout from './recipelayout';

const Cursed = () => {
    return (
        <RecipeLayout 
        name={'Cursed Sandwich'}
        description={'I am so sorry.'}
        instructions={
        <div className="content">
        <ol>
            <li>Spread hummus on one slice of bread and Nutella on the other slice.</li>
            <li>Spread a thin layer of mustard over the hummus. Yellow mustard is strong, so use it sparingly.</li>
            <li>Slice up strawberries and put them on the Nutella.</li>
            <li>Close the sandwich, cut as desired, and serve.</li>
        </ol>
        </div>
        }
        ingredients={
        <div className="content">
        <ul>
            <li>2 slices bread</li>
            <li>Hummus (pref. roasted garlic hummus)</li>
            <li>Nutella</li>
            <li>Yellow mustard</li>
            <li>Strawberries</li>
        </ul>
        </div>
        }
        story={
        <div className="story">
            <p>
            Don't make that face. I know you read the ingredients. I know how you're feeling. Hummus, nutella, mustard, and strawberries?? You think I'm crazy. You think I've lost it. 
            You may be right. All I ask is that you let me explain myself.
            </p>
            <p className="story">
            I was bored one day, in the summer of 2015. I went to the kitchen to make lunch and I improvised with whatever I had. I took 2 slices of sandwich bread. I used whole wheat, 
            but white bread would've worked fine. On one slice, I spread a layer of roasted garlic hummus. In a moment of sheer culinary curiosity, I spread Nutella on the other slice. 
            But my chaotic heart remained unsatisfied. It needed to be more cursed. I spread some yellow mustard over the hummus, making sure to use a very thin layer, since it could 
            overpower the hummus in large quantities. I closed the sandwich and ate it. To my surprise, it was actually good. My only qualm was that it was very dry. After all, it was 
            just a sandwich of only condiments. It needed something fresh, something juicy, like maybe… strawberries. The second time I made the sandwich (yes I ate this multiple times), 
            I placed some sliced strawberries between the mustard and the Nutella. I took a bite and knew right away that I had nailed it. I told my family all about my proud invention 
            while they fought the urge to gag.
            </p>
            <p>
            Of course, it <em>sounds</em> bad, but because I'm the only one that has ever actually eaten it, I alone am left with the mystery: why does it taste so good? The ingredients 
            make no sense but somehow it just works. I think I figured it out. It's like a cycle. We know hummus and Nutella go together, as many grocery stores actually sell chocolate 
            hummus as a popular item. Nutella and strawberries need no explanation as they are a classic pairing. Strawberries and mustard, while unconventional together, contain bright, 
            acidic notes that give them some common ground. Yellow mustard and hummus both have slightly bitter, earthy tastes from the turmeric and tahini respectively that make them work 
            well together, contrary to what one might imagine. This is a tangled web of flavor interactions, but it all somehow works out. I invite you to walk on the wild side and give 
            this unlikely hero a try.
            </p>
        </div>
        }
        />
    );
}

export default Cursed;
