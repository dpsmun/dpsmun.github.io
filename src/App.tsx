import { useState/* , useRef */ } from 'react'
import Particles from './components/background/Particles';
import LandingButton from './components/landing-button/landing-button';
// import RotatingText from './components/RotatingText/RotatingText';
import ScrollFloat from './components/ScrollFloat/ScrollFloat';
// import ScrollReveal from './components/ScrollReveal/ScrollReveal';
// import VariableProximity from './components/VariableProximity/VariableProximity';
import SimpleReveal from './components/SimpleReveal/SimpleReveal';
// import SpotlightCard from './components/SpotlightCard/SpotlightCard';
import PillNav from './components/PillNav/PillNav';
import TextType from './components/TextType/TextType';
import CommitteeGrid from './components/CommitteeGrid/CommitteeGrid';
import Countdown from './components/Countdown/Countdown';
import PerksCarousel from './components/PerksCarousel/PerksCarousel';
import MunRoadmap from './components/MunRoadmap/MunRoadmap';
import MinorCommittees from './components/MinorCommittees/MinorCommittees';
import RegistrationGrid from './components/RegistrationGrid/RegistrationGrid';
import ContactGrid from './components/ContactGrid/ContactGrid';
// import MagicBento from './components/MagicBento/MagicBento';

import logo from './assets/logo.png'
import Stack from './components/Stack/Stack';
import Frame1 from './assets/Frame 1.png';
import Frame2 from './assets/Frame 2.png';
import Frame3 from './assets/Frame 3.png';
import Frame4 from './assets/Frame 4.png';

import './App.css'

if (typeof window !== 'undefined') {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual';
  }
}

function App() {

  // For debug server so nav is not broken (I refresh a LOT)

  type Theme = "black" | "darkGreen" | "forestGreen" | "everforest" | "darkerGreen";
  type ClosingTheme = "black" | "darkGreen" | "forestGreen" | "everforest" | "darkerGreen";
  type MainTheme =  "black" | "darkGreen" | "forestGreen" | "everforest" | "darkerGreen";
 

  //side menu
  const [isOpen, setIsOpen] = useState(false); 
  //stars
  const [particlesOn, setParticlesOn] = useState(true);
  //theme var
  const [theme, setTheme] = useState<Theme>("black");

  const themes: Record<Theme, string> = {
    black: "linear-gradient(10deg, #2b2b2b 0%, #000000 15%, #000000 85%, #2b2b2b 100%)",
    darkGreen: "linear-gradient(10deg, #24331D 0%, #354C2B 25%, #354C2B 75%, #24331D 100%)",
    forestGreen: "linear-gradient(10deg, #112113 0%, #355E3B 25%, #355E3B 75%, #112113 100%)",
    everforest: "linear-gradient(10deg, #131617 0%, #1E2326 25%, #1E2326 75%, #131617 100%)",
    darkerGreen: "linear-gradient(10deg, #0F190B 0%, #172412 25%, #172412 75%, #0F190B 100%)" 
  };


  const closingThemes: Record<ClosingTheme, string> = {
    black: "linear-gradient(-10deg, #000000 0%, #000000 85%, #2b2b2b 100%)",
    darkGreen: "linear-gradient(-10deg, #354C2B 0%, #354C2B 75%, #24331D 100%)",
    forestGreen: "linear-gradient(-10deg, #355E3B 0%, #355E3B 75%, #112113 100%)",
    everforest: "linear-gradient(-10deg, #1E2326 0%, #1E2326 75%, #131617 100%)",
    darkerGreen: "linear-gradient(-10deg, #172412 0%, #172412 75%, #0F190B 100%)"
  };

  const mainTheme: Record<MainTheme, string> = {
    black: "#000",
    darkGreen: "#354C2B",
    forestGreen: "#355E3B",
    everforest: "#1E2326",
    darkerGreen: "#172412"
  }

  // const secondaryTheme: Record<MainTheme, string> = {
  //   black: "rgba(30, 30, 30, 0.6)",
  //   darkGreen: "rgba(53, 76, 43, 0.5)",
  //   forestGreen: "rgba(53, 94, 59, 0.5)",
  //   everforest: "rgba(50, 56, 60, 0.6)",
  //   darkerGreen: "rgba(23, 36, 18, 0.6)"
  // };

  const images = [
    Frame1,
    Frame2,
    Frame3,
    Frame4
  ];

const currentTheme: Theme = theme; // the theme state I already have
const nextDivBackground = closingThemes[currentTheme];
const mainBackground = mainTheme[currentTheme];
// const containerRef = useRef<HTMLDivElement>(null);

  // const cardItems = [
  //   {
  //     title: "20+ Comittees",
  //     subtitle: "subtitle placeholder",
  //     handle: "extra info",
  //     borderColor: "#3B82F6",
  //     gradient: "linear-gradient(145deg, #3B82F6, #000)",
  //     // add a scroll url once more content is available
  //     // url: ""
  //   },
  //   {
  //     title: "2 Days",
  //     subtitle: "Conference",
  //     handle: "extra info",
  //     borderColor: "#10B981",
  //     gradient: "linear-gradient(180deg, #10B981, #000)",
  //     // url: ""
  //   },
  //   {
  //     title: "6-12",
  //     subtitle: "Classes",
  //     handle: "extra info",
  //     borderColor: "#10B981",
  //     gradient: "linear-gradient(180deg, #10B981, #000)",
  //     // url: ""
  //   },
  //   {
  //     title: "Endless Impact",
  //     subtitle: "Subtitle Placeholder",
  //     handle: "extra info",
  //     borderColor: "#10B981",
  //     gradient: "linear-gradient(180deg, #10B981, #000)",
  //     // url: ""
  //   }
  // ];

  return (
    <>
    <div className='site-wrapper'>
      <Countdown />
      <div className='grid-bg' />
      <div className='nav-container'>
      <PillNav
        logo={logo}
        logoAlt="MUN Logo"
        items={[
          { label: 'Home', href: '#home' },
          { label: 'About', href: '#about' },
          { label: 'Committees', href: '#committee' },
          { label: 'Register', href: '#register' },
          { label: 'Contact', href: '#contact' }
        ]}
        activeHref="/"
        className="custom-nav"
        ease="power2.easeOut"
        baseColor="#000000"
        pillColor="#ffffff"
        hoveredPillTextColor="#ffffff"
        pillTextColor="#000000"
        initialLoadAnimation={true}
      />
      </div>

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

      <section id="home">
      <div className='landing-page' style={{ background: themes[theme] }}>
      <div className='landing-content'>
        <div className='landing-text'>
            <TextType 
              text={["The 1st edition of DPS Mohali MUN", "A new era of Diplomacy Begins!", "Where global leaders converge"]}
              typingSpeed={50}
              pauseDuration={1500}
              showCursor
              cursorCharacter="●"
              deletingSpeed={50}
            />
          <p>
            <span id='school-name'>DPS Mohali</span>
            <br />
            <span id='mun'>MUN</span>
            <br />
            <span id='mun-small'>Model United Nations 2026</span>
            <br />
          </p>
          <p className='landing-date'> 9th &amp; 10th May </p>
        </div>
        <div className='landing-buttons'>
          <LandingButton text="Register Now" variant="filled" href='#register' />
          <LandingButton text="Comittees" variant="hollow" href='#committee'/> 
        </div>
      </div>
      </div>
      </section>

      <button
      className='dev-button material-symbols-rounded'
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
      <div className='page2' style={{ background: nextDivBackground }}>
      <section id='about'>
      <div className='about-content'>
      <div className='about-page'>
        <div className='about-text'>
          <ScrollFloat
            animationDuration={1}
            ease='back.inOut(2)'
            scrollStart='center bottom+=50%'
            scrollEnd='bottom bottom-=40%'
            stagger={0.03}
          >
            About Conference
          </ScrollFloat> 
{/*
          <div style={{maxWidth: '1000px'}}>
            <ScrollReveal
              baseOpacity={0.1}
              enableBlur
              baseRotation={3}
              blurStrength={4}
            >
            DPS Mohali MUN 2026 is our first
            Model United Nations conference,
            where students debate global issues,
            build critical thinking skills,
            and experience diplomacy in action.
            </ScrollReveal>
          </div>
*/}
        <SimpleReveal>
          <p className='reveal-description'>
            DPS Mohali MUN 2026 is our first Model United Nations conference, where students debate global issues, build critical thinking skills, and experience diplomacy in action. 
          </p>
        </SimpleReveal>
        </div>
        <div className='about-decoration'>
{/*          <RotatingText
            texts={['20+ Committees', '2 Days Conference', '6-12 Classes', 'Endless Impact']}
            mainClassName="px-3 py-2 sm:px-4 sm:py-2 md:px-5 md:py-3 bg-[rgba(0,0,0,0.1)] backdrop-blur-[2px] text-white overflow-hidden justify-center text-[38px] font-bold transition-all rounded-full border-[0.0px] border-[rgba(255,255,255,0.07]"
            staggerFrom="last"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-1 sm:pb-1 md:pb-2"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
*/}
{/*
        <SpotlightCard className="custom-spotlight-card" spotlightColor="#FFFFFF4B">
        <SimpleReveal>
          <div
          ref={containerRef}
          style={{position: 'relative'}}
          >
            <VariableProximity
              label={'20+ Committees'} className={'variable-proximity-demo'}
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={containerRef as React.RefObject<HTMLElement>}
              radius={100}
              falloff='linear'
              style={{ color: '#e0b643' }}
          />
          <p>
            Explore a variety of topics across multiple committees, each designed to challenge and inspire. 
          </p>
          </div>
        </SimpleReveal>
        </SpotlightCard>
        <SpotlightCard className="custom-spotlight-card" spotlightColor="#FFFFFF4B">
        <SimpleReveal>
          <div
          ref={containerRef}
          style={{position: 'relative'}}
          >
            <VariableProximity
              label={'2 Day Conference'}
              className={'variable-proximity-demo'}
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={containerRef as React.RefObject<HTMLElement>}
              radius={100}
              falloff='linear'
              style={{ color: '#e0b643' }}
          />
          <p>
            Engage in two action-packed days of debate, collaboration, and global problem-solving. 
          </p>
          </div>
        </SimpleReveal>
        </SpotlightCard>
        <SpotlightCard className="custom-spotlight-card" spotlightColor="#FFFFFF4B">
        <SimpleReveal>
          <div
          ref={containerRef}
          style={{position: 'relative'}}
          >
            <VariableProximity
              label={'Class 6-12'}
              className={'variable-proximity-demo'}
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={containerRef as React.RefObject<HTMLElement>}
              radius={100}
              falloff='linear'
              style={{ color: '#e0b643' }}
          />
          <p>
            Open to students from grades 6 to 12, offering a platform for all levels to contribute.
          </p>
          </div>
        </SimpleReveal>
        </SpotlightCard>
        <SpotlightCard className="custom-spotlight-card" spotlightColor="#ffffff4B">
        <SimpleReveal>
          <div
          ref={containerRef}
          style={{position: 'relative'}}
          >
            <VariableProximity
              label={'Endless Impact'}
              className={'variable-proximity-demo'}
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={containerRef as React.RefObject<HTMLElement>}
              radius={100}
              falloff='linear'
              style={{ color: '#e0b643' }}
          />
          <p>
            Make lasting connections and create experiences that go beyond the conference.
          </p>
          </div>
        </SimpleReveal>
        </SpotlightCard>
*/}
          <div className='stack-wrapper'>
          <div className='stack-container' style={{ width: 250, height: 250 }}>
            <Stack
              randomRotation={false}
              sensitivity={100}
              sendToBackOnClick={true}
              cards={images.map((src, i) => (
                <img 
                  key={i} 
                  src={src} 
                  alt={`card-${i + 1}`} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              ))}
              autoplayDelay={3000}
              pauseOnHover
          />
          </div>
          </div>
        </div>
      </div>
      </div>
      <div>
      {/*
        <MagicBento 
          textAutoHide={true}
          enableStars
          enableSpotlight
          enableBorderGlow={true}
          enableTilt={false}
          enableMagnetism={false}
          clickEffect
          spotlightRadius={400}
          particleCount={12}
          glowColor="132, 0, 255"
          disableAnimations={false}
        />
      */}
      <div className='decoration-wrapper'>
      <MunRoadmap
        theme={theme}
      />

      <PerksCarousel />
      </div>
      </div>

      </section>
      </div>

      <div className='main-bg-wrapper' style={{background: mainBackground}}>

      <div className='page3-wrapper'>
      <div className='page3'>
      <section id='committee'>
        <CommitteeGrid
          theme={theme}
        />
        <MinorCommittees
          theme={theme}
        />
      </section>
      </div>
      </div>

      <div className='page4'>
        <section id='register'>
          <RegistrationGrid
            theme={theme}
          />
        </section>
      </div>
      <div className='contact-page'>
        <section id='contact'>
          <ContactGrid />
        </section>
      </div>
      </div>
        

    </div>
    </>
  )
}

export default App

