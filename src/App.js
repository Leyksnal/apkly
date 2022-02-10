import './App.css';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

function App() {
  return (
    <div>
      <div className="hero-bg">
        <div className="hero">
          <div className="header-wrapper">
            <div className="header">
              <div className="logo">
                <p>S-HUNT</p>
              </div>
              <div className="nav">
                <span>Home</span>
                <span>Overview</span>
                <span>Feature</span>
                <span>Price</span>
                <span>Contact</span>
                <button className='header-btn'>Sign Up</button>
              </div>
            </div>
          </div>

          <div className="hero-content">
            <div className="hero-text">
              <h2>SpaceHunt</h2>
              <h3>Startup Of The Year</h3>
              <p>You may proceed to get the latest information based on what technology our company is improving or innovating</p>
              <button className='header-btn hero-btn'>Updates</button>
            </div>
            <div className="hero-img-section">
              <div className="xmark"></div>
              <div className="hero-img"></div>
              <div className="circle"></div>
            </div>
          </div>

          <div className="triangle"></div>
        </div>
      </div>

      <div className="overview-section">
        <h2>Overview</h2>
        <div className="slider-container">
          <div className="leftnav">< FaArrowLeft size={'1.5rem'} color= {'#FA573A'}/></div>
          <div className="slider-wrapper">
            <div className="slider-box">
              <div className="slider-img"></div>
              <div className="slider-text">
                <h2>Our Innovations</h2>
                <h3>We have built products in the tech industry that allows us to gain more publicity and gives us the leverage to reach more people</h3>
                <p>Read More</p>
              </div>
            </div>
          </div>
          <div className="rightnav">< FaArrowRight size={'1.5rem'} color= {'#FA573A'}/></div>
        </div>
      </div>

    </div>
  );
}

export default App;