import { useState } from 'react'
import Particles from './components/background/Particles';
import LandingButton from './components/landing-button/landing-button';
import './App.css'




function App() {
  type Theme = "black" | "darkGreen" | "forestGreen" | "everforest";

  //side menu
  const [isOpen, setIsOpen] = useState(false); 
  //stars
  const [particlesOn, setParticlesOn] = useState(true);
  //theme var
  const [theme, setTheme] = useState<Theme>("darkGreen");

  const themes: Record<Theme, string> = {
    black: "linear-gradient(10deg, #2b2b2b 0%, #000000 15%, #000000 85%, #2b2b2b 100%)",
    darkGreen: "linear-gradient(10deg, #24331D 0%, #354C2B 25%, #354C2B 75%, #24331D 100%)",
    forestGreen: "linear-gradient(10deg, #112113 0%, #355E3B 25%, #355E3B 75%, #112113 100%)",
    everforest: "linear-gradient(10deg, #131617 0%, #1E2326 25%, #1E2326 75%, #131617 100%)",
  };

  return (
    <>

      <div className='grid-bg' />

      {particlesOn && (
        <div style={{ width: '100%', height: '700px', position: 'absolute' }}>
          <Particles
            particleColors={["#ffffff"]}
            particleCount={400}
            particleSpread={20}
            speed={0.1}
            particleBaseSize={100}
            // moveParticlesOnHover
            alphaParticles={false}
            disableRotation={false}
            pixelRatio={1}
          />
        </div>

      )}

      <div className='landing-page' style={{ background: themes[theme] }}>
      <div className='landing-content'>
        <div className='landing-text'>
          <p>
            <span id='school-name'>DPS Mohali</span>
            <br />
            <span id='mun'>MUN</span>
            <br />
            <span id='mun-small'>Model United Nations 2026</span>
            <br />
          </p>
        </div>
        <div className='landing-buttons'>
          <LandingButton text="Register Now" variant="filled" />
          <LandingButton text="Comittees" variant="hollow" /> 
        </div>
      </div>
      </div>

      <button
      className='dev-button material-symbols-outlined'
      onClick={ () => setIsOpen(!isOpen)}
      >
      menu
      </button>
      {isOpen && (
        <div
          className="overlay active"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div className={`side-menu ${isOpen ? "open" : ""}`}>
        <h3>Dev Options</h3>
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value as Theme)}
        >
          {Object.keys(themes).map((key) => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
        </select>
        <div className='toggle-stars'>
          <p>Toggle Stars</p>
          <label className="switch">
            <input
              type="checkbox"
              checked={particlesOn}
              onChange={() => setParticlesOn(!particlesOn)}
            />
            <span className="slider"></span>
          </label>
        </div>

      </div>

    </>
  )
}

export default App

