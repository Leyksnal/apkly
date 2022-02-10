import './App.css';

function App() {
  return (
    <div>
      <div className="hero">
        <div className="header-wrapper">
          <div className="header">
            <div className="logo">
              <p>Apkly.</p>
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
  );
}

export default App;