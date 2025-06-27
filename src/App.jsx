// import Route and Routes to display components in specific paths
import { Routes, Route } from 'react-router-dom';

// import Navbar to be displayed on top of the page
import Navbar from './components/Navbar/navbar';
// import the ScrollUp component to scroll back to the top when the path changes
import ScrollUp from './components/scrollup';

// import homepage
import Home from './components/Home/home';
// import search page
import Searchbar from './components/Searchbar/searchbar';
// import recipe categories and the associated recipes of each category
import * as Recipes from './components/Recipes/recipes';

import Posts from './components/Posts/posts';

import * as Lab from './components/Lab/lab';

import Links from './components/Links/links';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <ScrollUp>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/posts' element={<Posts />} />
          <Route path='/recipes' element={<Recipes.default />} />
          <Route path='/lab' element={<Lab.default />} />
          <Route path='/links' element={<Links />} />
          <Route path='/search' element={<Searchbar />} />
          
          {/* Lab Routes */}
          <Route path='/tikka' element={<Lab.Tikka />} />
          <Route path='/bananacaramel' element={<Lab.BananaCaramel />} />
          <Route path='/gastrique' element={<Lab.Gastrique />} />
          
          {/* Recipe Routes */}
          <Route path='/pancakes' element={<Recipes.Pancakes />} />
          <Route path='/frenchtoast' element={<Recipes.FrenchToast />} />
          <Route path='/tomatosauce' element={<Recipes.TomatoSauce />} />
          <Route path='/gumbo' element={<Recipes.Gumbo />} />
          <Route path='/rajma' element={<Recipes.Rajma />} />
          <Route path='/noodlesoup' element={<Recipes.NoodleSoup />} />
          <Route path='/canes' element={<Recipes.Canes />} />
          <Route path='/chutney' element={<Recipes.Chutney />} />
          <Route path='/cranberry' element={<Recipes.Cranberry />} />
          <Route path='/chana' element={<Recipes.Chana />} />
          <Route path='/tomatomelt' element={<Recipes.TomatoMelt />} />
          <Route path='/eggsandwich' element={<Recipes.EggSandwich />} />
          <Route path='/sporice' element={<Recipes.SPORice />} />
          <Route path='/gnocchi' element={<Recipes.Gnocchi />} />
          <Route path='/turkeyrice' element={<Recipes.TurkeyRice />} />
          <Route path='/lemonmeringue' element={<Recipes.LemonMeringue />} />
          <Route path='/applefilling' element={<Recipes.AppleFilling />} />
          <Route path='/gajarhalwa' element={<Recipes.GajarHalwa />} />
          <Route path='/zabaglione' element={<Recipes.Zabaglione />} />
          <Route path='/suzette' element={<Recipes.Suzette />} />
          <Route path='/potatopie' element={<Recipes.PotatoPie />} />
          <Route path='/cursed' element={<Recipes.Cursed />} />
          <Route path='/thanksgivingpie' element={<Recipes.ThanksgivingPie />} />
          <Route path='/pineapplepizza' element={<Recipes.PineapplePizza />} />
          <Route path='/meatballs' element={<Recipes.Meatballs />} />
          <Route path='/deviledeggs' element={<Recipes.DeviledEggs />} />
          <Route path='/pizza' element={<Recipes.Pizza />} />
          <Route path='/coffee' element={<Recipes.Coffee />} />
          <Route path='/ricotta' element={<Recipes.Ricotta />} />
          <Route path='/popcornchicken' element={<Recipes.PopcornChicken />} />
          <Route path='/mugcake' element={<Recipes.MugCake />} />
        </Routes>
      </ScrollUp>
    </div>
  )
}

export default App
