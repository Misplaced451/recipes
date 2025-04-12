import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import '../../recipes_style.css';
import '../../bulma.css';

const Navbar = () => {
    const [isActive, setActive] = useState("false");

    const handleBurger = () => {
        if (window.innerWidth <= '1024') {
            setActive(!isActive);
        }
    };

    const handleBurgerHome = () => {
        setActive(true);
    };

    return (
        <nav className='navbar mb-4 has-background-white-ter'>
            <div className="navbar-brand">
            <Link to="/" onClick={handleBurgerHome}>
                <h1 className="has-text-weight-bold is-size-3 navbar-item py-3 mb-0">
                    <span className='wisdom-blue ml-2'>Mihir's</span> <span className='rebel-orange'>Recipes</span>
                </h1>
            </Link>
                
                <button className={`navbar-burger has-text-dark mt-2 ${isActive ? "" : "is-active"}`} onClick={handleBurger}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <div className={`navbar-menu burger-items navbar-end tab ${isActive ? "" : "is-active"}`}>
                <div className="burger-item">
                    <Link to="/posts" className="navbar-item has-text-weight-bold px-4" onClick={handleBurger}>blog posts</Link>
                </div>

                <div className="burger-item">
                    <Link to="/recipes" className="navbar-item has-text-weight-bold px-4" onClick={handleBurger}>recipes</Link>
                </div>
                
                <div className="burger-item">
                    <Link to="/lab" className="navbar-item has-text-weight-bold px-4" onClick={handleBurger}>the laboratory</Link>
                </div>

                <div className="burger-item">
                    <Link to="/links" className="navbar-item has-text-weight-bold px-4" onClick={handleBurger}>links</Link>
                </div>

                <Link to="/search" className="navbar-item px-4 mr-4" onClick={handleBurger}>
                    <img className="image" src={"search-icon.png"} alt="Search" />
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
