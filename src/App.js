import logo from './logo.svg';
import './App.css';
import { Link } from 'react-scroll';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Slider from './components/sections/Slider';
import UIkit from 'uikit';

import "uikit/dist/css/uikit.min.css"
import "uikit/dist/js/uikit-core"

import "uikit/dist/js/uikit"


function App() {
  return (

    <div className="App" style={{backgroundImage : "images/01.jpg"}} >
      <Header/>
  
      <div id = "ss" style={{ marginBottom:'200px', height:'100vh', backgroundColor:'white'}}>   </div>
      <div id = "sd" style={{ marginBottom:'200px', height:'100vh', backgroundColor:'yellowgreen'}}>  </div>
    <Slider/>
    <Footer/>
    </div>
  );
}

export default App;
