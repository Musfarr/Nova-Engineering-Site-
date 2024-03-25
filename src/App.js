import logo from './logo.svg';
import './App.css';
import "uikit/dist/css/uikit.min.css"
import "uikit/dist/js/uikit-core"
import"uikit/dist/js/uikit-icons"
import "uikit/dist/js/uikit"
import { Link } from 'react-scroll';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Slider from './components/sections/Slider';
import UIkit from 'uikit';


import Contact from './components/sections/contact';


function App() {
  return (

    <div className="App" >
      <div className='bgimg'>
      <Header/>
  
      <div id = "ss" style={{ marginBottom:'400px', backgroundColor:'white'}}> <video src='images/production.mp4' autoPlay loop muted />   </div>
      <div id = "sd" style={{ marginBottom:'200px', height:'100vh', backgroundColor:'white'}}>  </div>
    <Slider/>
    <Contact/>
    <Footer/>
    </div>
    </div>
  );
}

export default App;
