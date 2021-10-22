import './App.css';
import About from './Components/About';
import Footer from './Components/Footer';
import Gallery from './Components/Gallery';
import Headers from './Components/Headers';
import Home from './Components/Home';
import MarvelProducts from './Components/MarvelProducts';
import MoviesMarvel from './Components/MoviesMarvel';

function App() {
  return (
    <div className="App">
     <Headers/>
     <Home/>
     <Gallery/>
     <About/>
     <MoviesMarvel/>
     <MarvelProducts/>
     <Footer/>
    </div>
  );
}

export default App;
