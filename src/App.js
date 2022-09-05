import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import MainContentGrid from './components/MainContentGrid';
import Clienttestimonials from './components/Clienttestimonials';
import Imagegrid from './components/Imagegrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Home/>
      <MainContentGrid/>
      <Clienttestimonials/>
      <Imagegrid/>
      <Footer/>
    </div>
  );
}

export default App;
