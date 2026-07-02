import '../../recipes_style.css';
import '../../bulma.css';

import { Link } from 'react-router-dom';

import SteakMyths from './steakmyths';
import Lotr from './lotr';
import StartCooking from './howtocook';
import PlantRant from './plantrant';
import ScienceBased from './sciencebased';
import AmericanFood from './americanfood';

import RecipeData from '../../recipe-data';

const Posts = () => {
    const getFilteredItems = (posts) => {
        // return posts by id in descending order
        return posts.sort((a, b) => b.id - a.id);
    };

    const {posts} = RecipeData;

    // get filtered recipes based on query
    const filteredItems = getFilteredItems(posts);

    return (
        <div className="pt-6 tabcontent recipe section">
            <div className="has-text-centered section pt-0">
                <h1 className="has-text-weight-bold is-size-3">Blog Posts</h1>
                <p className="subtitle">Guides, tips, tricks, and rants</p>
            </div>

            <div className="columns is-centered section pt-0 px-3">
            <div className='column is-2 py-5'></div>
            <div className='column py-5 box has-background-light'>
                {filteredItems.map(value => 
                    <div className='pt-4'>
                    <Link to={value.path}>
                    <div className="card">
                        <header className='card-header'>
                            <p class="card-header-title">{value.title}</p>
                        </header>
                        <div className='card-content'>
                            <p>
                            {value.description}
                            </p>
                        </div>
                    </div>
                    </Link>
                    </div>
                )}
            </div>
            <div className='column is-2 py-5'></div>
            </div>
        </div>
    );
}

export default Posts;
export {
    SteakMyths, Lotr, StartCooking, PlantRant, ScienceBased, AmericanFood
};
