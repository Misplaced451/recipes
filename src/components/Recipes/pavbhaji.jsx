import '../../recipes_style.css';
import '../../bulma.css';
import RecipeLayout from './recipelayout';

const PavBhaji = () => {
    return (
        <RecipeLayout 
        name={'Pav Bhaji'}
        description={'Perfect for any occasion, from a weeknight dinner to a family celebration'}
        instructions={
        <div className="content">
        <ol>
            
        </ol>
        </div>
        }
        ingredients={
        <div className="content">
        <ul>
            <li>1 cup diced French beans</li>
            <li>0.5 head cauliflower, chopped</li>
            <li>1 large carrot, chopped</li>
            <li>3 roma tomatoes, chopped</li>
            <li>0.5 green bell peppers, chopped</li>
            <li>2 russet potatoes</li>
            <li>0.25 head cabbage</li>
            <li>1 large red onion</li>
            <li>1 head garlic</li>
            <li>0.5 cups frozen peas</li>
            <li>3 tbsp butter</li>
            <li>2 tbsp oil</li>
            <li>0.5 cups pav bhaji masala</li>
        </ul>
        </div>
        }
        story={
        <div className="story">
            
        </div>
        }
        />
    );
}

export default PavBhaji;