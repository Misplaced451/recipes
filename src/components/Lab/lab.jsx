import '../../recipes_style.css';
import '../../bulma.css';
import { Link } from 'react-router-dom';

import BananaCaramel from './bananacaramel';
import Tikka from './tikka';
import Gastrique from './gastrique';

const Lab = () => {
    return (
        <div className="pt-6 section has-text-centered">
            <div className="has-text-centered section pt-0">
                <h1 className="has-text-weight-bold is-size-3">The Laboratory</h1>
                <p className="subtitle">Experimental recipes I'm working on</p>
            </div>

            <div className="columns is-centered fixed-grid has-3-cols-desktop">
            <div className="column is-two-thirds grid">
                <Link to="/bananacaramel" className="card cell is-one-quarter recipelink mx-2 mb-4">
                    <div className="card-image">
                        <img src={"placeholder.jpg"} alt="bananacaramel.jpg" />
                    </div>
                    <div className="card-content">
                        <p className="has-text-weight-bold">Banana Caramel</p>
                    </div>
                </Link>

                <Link to="/tikka" className="card cell is-one-quarter recipelink mx-2 mb-4">
                    <div className="card-image">
                        <img src={"placeholder.jpg"} alt="tikka.jpg" />
                    </div>
                    <div className="card-content">
                        <p className="has-text-weight-bold">Chicken Tikka Masala</p>
                    </div>
                </Link>

                <Link to="/gastrique" className="card cell is-one-quarter recipelink mx-2 mb-4">
                    <div className="card-image">
                        <img src={"placeholder.jpg"} alt="gastrique.jpg" />
                    </div>
                    <div className="card-content">
                        <p className="has-text-weight-bold">Apple Cider Gastrique</p>
                    </div>
                </Link>
            </div>
            </div>
        </div>
    );
}

export default Lab;
export {
    BananaCaramel, Tikka, Gastrique
};
