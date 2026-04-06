import React, { useRef } from 'react';
import { gsap } from 'gsap';
import FloatReveal from '../SimpleReveal/SimpleReveal';
import './RegistrationGrid.css';

interface RegistrationGridProps {
  theme: "black" | "darkGreen" | "forestGreen" | "everforest" | "darkerGreen";
}

const RegistrationGrid: React.FC<RegistrationGridProps> = ({ theme }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  
  const mainTheme: Record<string, string> = {
    black: "#000",
    darkGreen: "#354C2B",
    forestGreen: "#355E3B",
    everforest: "#1E2326",
    darkerGreen: "#172412"
  };

  const bgStyle = { background: mainTheme[theme] };

  const toggleAccordion = (e: React.MouseEvent) => {
    e.preventDefault();
    const details = e.currentTarget.parentElement as HTMLDetailsElement;
    const content = contentRef.current;
    const icon = e.currentTarget.querySelector('.material-symbols-rounded');

    if (!content || !icon) return;

    if (!details.open) {
      details.open = true;
      gsap.fromTo(content, 
        { height: 0, opacity: 0 }, 
        { height: "auto", opacity: 1, duration: 0.5, ease: "power3.out" }
      );
      gsap.to(icon, { rotate: 180, duration: 0.5, ease: "power3.out" });
    } else {
      gsap.to(content, {
        height: 0,
        opacity: 0,
        duration: 0.4,
        ease: "power3.inOut",
        onComplete: () => { details.open = false; }
      });
      gsap.to(icon, { rotate: 0, duration: 0.4, ease: "power3.inOut" });
    }
  };

  return (
    <FloatReveal>
    <section id="registration" className="reg-section">
      <div className="reg-wrapper">
        <div className="reg-layout-grid">
          
          {/* EXTERNAL - Full Height Left */}
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdhDzMT6PZ6Un1LCozPuLfa9HE9KBMtenuTAXNReKaL7tCRvQ/viewform" target="_blank" rel="noreferrer" className="reg-card external-card" style={bgStyle}>
            <div className="card-inner">
              <span className="reg-tag">Open to All Schools</span>
              <h2 className="reg-h">External Delegate</h2>
              <div className="reg-price">₹3,500</div>
              <p className="reg-info">
                The premier gateway for young leaders from across India to gather, 
                defend interests, and shape global solutions.
              </p>
            </div>
          </a>

          {/* RIGHT COLUMN - Two Half-Height */}
          <div className="reg-right-col">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScQB0xw3pm89ZebKhwhzwNXRpI6ASUg5tl1_6m3AAfYkvJfgQ/viewform" target="_blank" rel="noreferrer" className="reg-card internal-card" style={bgStyle}>
              <div className="card-inner">
                <span className="reg-tag">Network Exclusive</span>
                <h2 className="reg-h small">Delhi Public School</h2>
                <div className="reg-price small">₹3,200</div>
              </div>
            </a>

            <a href="https://docs.google.com/forms/d/e/1FAIpQLScaq_170ChSfCuhLMlTgfRfyPqA6V1Z-o2S09H5ZWF2ZB00fg/viewform" target="_blank" rel="noreferrer" className="reg-card press-card" style={bgStyle}>
              <div className="card-inner">
                <span className="reg-tag">Media & Journalism</span>
                <h2 className="reg-h small">Internal Press</h2>
                <p className="reg-quote">Where diplomacy meets ambition.</p>
              </div>
            </a>
          </div>
        </div>

        {/* SUBTLE ACCORDION */}
        <details className="eligibility-details">
          <summary onClick={toggleAccordion}>
            Eligibility & Participation Details 
            <span className="material-symbols-rounded">expand_more</span>
          </summary>
          <div className="accordion-wrapper" ref={contentRef} style={{ overflow: 'hidden' }}>
            <div className="details-text">
              At DPS MUN 2026, excellence is cultivated. Open to students from <span className='inc-weight'> classes 6-12th. </span>
              <br />
              Dates: <span className='inc-weight'> 9th-10th May. </span> Register to gather, deliberate, and shape global solutions.
            </div>
          </div>
        </details>
      </div>
    </section>
    </FloatReveal>
  );
};

export default RegistrationGrid;
