import '../../recipes_style.css';
import '../../bulma.css';
import { Link } from 'react-router-dom';

import Tikka from './tikka';
import Gastrique from './gastrique';
import OrangeIceCream from './orangeicecream';
import BurgerMeatballs from './burgerballs';
import MilkCookiePie from './milkcookiepie';

const Lab = () => {
    return (
        <div className="pt-6 section has-text-centered">
            <div className="has-text-centered section pt-0">
                <h1 className="has-text-weight-bold is-size-3">The Laboratory</h1>
                <p className="subtitle">Experimental recipes I'm working on</p>
            </div>

            <div className="columns is-centered fixed-grid has-3-cols-desktop">
            <div className="column is-two-thirds grid">

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

                <Link to="/orangeicecream" className="card cell is-one-quarter recipelink mx-2 mb-4">
                    <div className="card-image">
                        <img src={"placeholder.jpg"} alt="orangeicecream.jpg" />
                    </div>
                    <div className="card-content">
                        <p className="has-text-weight-bold">Spiced Orange Ice Cream</p>
                    </div>
                </Link>

                <Link to="/burgermeatballs" className="card cell is-one-quarter recipelink mx-2 mb-4">
                    <div className="card-image">
                        <img src={"placeholder.jpg"} alt="burgermeatballs.jpg" />
                    </div>
                    <div className="card-content">
                        <p className="has-text-weight-bold">Burger Meatballs</p>
                    </div>
                </Link>

                <Link to="/milkcookiepie" className="card cell is-one-quarter recipelink mx-2 mb-4">
                    <div className="card-image">
                        <img src={"placeholder.jpg"} alt="milkcookiepie.jpg" />
                    </div>
                    <div className="card-content">
                        <p className="has-text-weight-bold">Milk & Cookie Pie</p>
                    </div>
                </Link>
            </div>
            </div>
        </div>
    );
}

export default Lab;
export {
    Tikka, Gastrique, OrangeIceCream, BurgerMeatballs, 
    MilkCookiePie, 
};
