import '../../recipes_style.css';
import '../../bulma.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="pt-6 section">
            <div className="has-text-centered section pt-0">
                <h1 className="has-text-weight-bold is-size-3">Welcome!</h1>
                <p className="subtitle">A home for my favorite recipes</p>
            </div>

            <div className="columns mb-6 has-background-light">
                {/* About Me Section to explain motivations behind the site */}
                <div className="column is-8">
                    <h4 className="has-text-weight-bold is-size-3 mb-4 has-text-centered">About Me</h4>
                    <p className='is-size-4 is-size-6-mobile px-5 story'>
                    Hi! I'm Mihir. This website is a compilation of recipes I've either created or collected from others. Cooking is a huge passion of mine, so I made this website to share 
                    that with you!
                    </p>
                    <p className='is-size-4 is-size-6-mobile px-5 story'>
                    This site started with a twofold purpose. First as a way for me to practice my JavaScript skills, since I'm a software engineer by trade. But also because after years 
                    of learning to make new dishes and inventing some of my own, the notes app on my phone became cluttered with a disorganized mess of recipes that became difficult to 
                    navigate and to share with my friends and family. If only there was a website where I could just post all my recipes, then things would be so much easier! That's the 
                    wonderful thing about being an engineer: if you can dream it, you can build it.
                    </p>
                    <p className='is-size-4 is-size-6-mobile px-5 story'>
                    I don't see cooking as that much different than science and engineering. To me, cooking is indeed an art. But it's also a place for experimentation, trial and error, 
                    optimizing, adapting, learning, and applying knowledge of physics and chemistry. I consider my kitchen to be my laboratory. I like finding out what works and what 
                    doesn't and why. I encourage you to take risks in the kitchen too. Have fun with it! Cooking is one of the greatest hobbies you can have. After all, it's the only 
                    hobby you're allowed to eat.
                    </p>
                </div>
                
                {/* Breakdown of how the site works */}
                <div className="column is-4-desktop has-background-grey-lighter px-5 pb-3">
                <h4 className="has-text-weight-bold is-size-3 mb-4 has-text-centered">The 3 Sections of Each Recipe:</h4>
                <h5 className='subtitle mt-2 has-text-weight-bold'>1. Instructions</h5>
                <p className='mb-5'>
                Unlike most recipe websites, I don't want to make people read a whole novel's worth of backstory before finding the directions they came looking for. That's why 
                I always keep the instructions first: just a short list of simple steps. However, if you're making a recipe for the first time, these brief instructions may not be enough 
                on their own, which is why I include more detail in other sections.
                </p>
                <h5 className='subtitle mt-2 has-text-weight-bold'>2. Ingredients</h5>
                <p className='mb-5'>
                You'll notice that I don't always include the amounts for certain ingredients. In these cases, you have to rely on your taste, your instincts, and/or learn the right amounts 
                through trial-and-error. Also, feel free to make substitutions as needed. The website may be mine, but the food is yours, so get as creative as your heart desires!
                </p>
                <h5 className='subtitle mt-2 has-text-weight-bold'>3. Story Time</h5>
                <p className='pb-4'>
                This is an in-depth walkthrough of the recipe. I break down each step to talk about the process and make suggestions and clarifications where needed. It's an opportunity to 
                learn more about the food itself while picking up some culinary tips along the way. I consider these essential reading for newcomers to better understand the instructions. 
                However they can get quite lengthy, which is why I've put them at the end. 
                </p>
                </div>
            </div>

            {/* Quick Links to highly requested recipes that can be accessed easily */}
            <div className="has-text-centered section py-0">
                <h1 className="has-text-weight-bold is-size-3">Quick Links</h1>
                <p className="subtitle">My most popular recipes</p>
            </div>

            <div className="section mb-6 mx-5">
                <div className='columns is-centered has-text-centered'>
                    <Link to="/rajma" className="card column is-2-desktop recipelink mx-4 mb-4">
                        <div className="card-image">
                            <img src={"placeholder.jpg"} alt="rajma.jpg" />
                        </div>
                        <div className="card-content">
                            <p className="has-text-weight-bold">Rajma</p>
                        </div>
                    </Link>
                    <Link to="/thanksgivingpie" className="card column is-2-desktop recipelink mx-4 mb-4">
                        <div className="card-image">
                            <img src={"placeholder.jpg"} alt="thanksgivingpie.jpg" />
                        </div>
                        <div className="card-content">
                            <p className="has-text-weight-bold">Thanksgiving Cottage Pie</p>
                        </div>
                    </Link>
                    <Link to="/pineapplepizza" className="card column is-2-desktop recipelink mx-4 mb-4">
                        <div className="card-image">
                            <img src={"placeholder.jpg"} alt="pineapplepizza.jpg" />
                        </div>
                        <div className="card-content">
                            <p className="has-text-weight-bold">Pineapple Upside-Down Deep-Dish Pizza</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
