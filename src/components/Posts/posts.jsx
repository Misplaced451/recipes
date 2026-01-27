import '../../recipes_style.css';
import '../../bulma.css';

import { Link } from 'react-router-dom';

import SteakMyths from './steakmyths';
import Lotr from './lotr';
import StartCooking from './howtocook';
import PlantRant from './plantrant';
import ScienceBased from './sciencebased';

const Posts = () => {
    return (
        <div className="pt-6 tabcontent recipe section">
            <div className="has-text-centered section pt-0">
                <h1 className="has-text-weight-bold is-size-3">Blog Posts</h1>
                <p className="subtitle">Guides, tips, tricks, and rants</p>
            </div>

            <div className="columns is-centered section pt-0 px-3">
            <div className='column is-2 py-5'></div>
            <div className='column py-5 box has-background-light'>
                <div className='pt-4'>
                <Link to={'/sciencebased'}>
                <div className="card">
                    <header className='card-header'>
                        <p class="card-header-title">The Problem With The "Science-Based" Approach</p>
                    </header>
                    <div className='card-content'>
                        <p>
                        "Science-based" has become a popular buzzword in a lot of online discourse, but is it really the best approach?
                        </p>
                    </div>
                </div>
                </Link>
                </div>
                <div className='pt-4'>
                <Link to={'/plantbasedrant'}>
                <div className="card">
                    <header className='card-header'>
                        <p class="card-header-title">The Plant-Based Rant</p>
                    </header>
                    <div className='card-content'>
                        <p>
                        Everything that people (including vegetarians and vegans) get wrong about plant-based cuisine.
                        </p>
                    </div>
                </div>
                </Link>
                </div>
                <div className='pt-4'>
                <Link to={'/howtocook'}>
                <div className="card">
                    <header className='card-header'>
                        <p class="card-header-title">How to Start Cooking</p>
                    </header>
                    <div className='card-content'>
                        <p>
                        Cooking can be a daunting skill to learn. Where do you begin?
                        </p>
                    </div>
                </div>
                </Link>
                </div>
                <div className='pt-4'>
                <Link to={'/lotr'}>
                <div className="card">
                    <header className='card-header'>
                        <p class="card-header-title">The LOTR Movie Marathon Feast</p>
                    </header>
                    <div className='card-content'>
                        <p>
                        I marathoned the entire <em>Lord of the Rings</em> trilogy (extended edition), and made seven meals fit for a Hobbit to eat throughout the day.
                        </p>
                    </div>
                </div>
                </Link>
                </div>
                <div className='pt-4'>
                <Link to={'/steakmyths'}>
                <div className="card">
                    <header className='card-header'>
                        <p class="card-header-title">The Mythology of Steaks</p>
                    </header>
                    <div className='card-content'>
                        <p>
                        Everyone has their own advice about making steaks, and nobody can agree. Out of all the myths, is there a method for us home cooks? Or just madness?
                        </p>
                    </div>
                </div>
                </Link>
                </div>
            </div>
            <div className='column is-2 py-5'></div>
            </div>
        </div>
    );
}

export default Posts;
export {
    SteakMyths, Lotr, StartCooking, PlantRant, ScienceBased, 
};
