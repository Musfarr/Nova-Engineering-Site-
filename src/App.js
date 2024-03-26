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
    <div className="App">
      <div className="bgimg">
        <Header />

        <div
          id="Home"
        >
          {" "}
          <video src="images/production.mp4" autoPlay loop muted />{" "}
        </div>

        <div
          id="About"
          className="aboutsection"
          style={{
            height: "100vh",
          }}
        >
          <div className="about-card">
            <div>
            <h1>About US</h1>
            <p>
              JCJ Contracting, Inc. is your one stop solution for any
              structurally related need of your home or office. We take care of
              everything from indoor to outdoor construction work, with an
              approachable, personable demeanor. Our staff is comprised of
              experienced professionals who display earnest craftsmanship.
               
              Whether you’re in the process of sketching your dream home, or
              considering a remodeling project; our skilled craftsmen offer
              quality work through every stage of the process. From construction
              to remodels, we have the expertise and the resources needed to
              complete all your plans and projects affordably, efficiently and
              to your complete satisfaction. 
              
              No matter what your construction
              needs are, please contact us today. Let our expert craftsmanship
              and years of construction experience go to work for you!
            </p>
            </div>
          </div>
        </div>

        {/* //services section */}
        <div
          id="service"
          style={{
            marginBottom: "200px",
            height: "100vh",
            backgroundColor: "white",
          }}
        >
          <div
            style={{ height: "200px", backgroundColor: "white" }}
            className="servicetext"
          >
            <h1>Services</h1>
            <p>
              As a full service general contractor specializing in self
              performed work, we can handle almost any job! The broad areas of
              specialization below are just a few of our most commonly performed
              areas of work.{" "}
            </p>
          </div>
          <Slider />
        </div>

        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
