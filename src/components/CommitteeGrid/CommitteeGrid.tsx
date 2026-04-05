import BorderGlow from '../BorderGlow/BorderGlow';
import FloatRevealEarly from '../SimpleRevealEarly/SimpleRevealEarly';
import VariableProximity from '../VariableProximity/VariableProximity';
import ScrollFloat from '../ScrollFloat/ScrollFloat';
import { useRef, type RefObject } from "react";
import './CommitteeGrid.css';

interface CommitteeGridProps {
  theme: "black" | "darkGreen" | "forestGreen" | "everforest" | "darkerGreen";
}

const committeeSteps = [
  { 
    id: '01', 
    name: "UNSC", 
    icon: "public", 
    isCustom: false, 
    agenda: "Legal implications regarding the detention of the President of Venezuela.", 
    color: "#E0B643",
    desktopLayout: "stack", // Below heading
    mobileLayout: "stack" 
  },
  { 
    id: '02', 
    name: "AIPPM", 
    icon: "account_balance", 
    isCustom: false, 
    agenda: "Reviewing India's National Security Doctrine and border tensions.", 
    color: "#10B981",
    desktopLayout: "inline", // Next to heading
    mobileLayout: "inline"
  },
  { 
    id: '03', 
    name: "MARVEL", 
    icon: "/marvel.svg", 
    isCustom: true, 
    agenda: "Strategic response to Doctor Doom’s Ascendancy and Multiversal instability.", 
    color: "#EF4444",
    desktopLayout: "stack", // Below heading
    mobileLayout: "stack"
  },
  { 
    id: '04', 
    name: "MINISTRY OF MAGIC", 
    icon: "auto_fix_high", 
    isCustom: false, 
    agenda: "Restoring governance following the leak of restricted Ministry spells.", 
    color: "#A855F7",
    desktopLayout: "stack", // Below heading
    mobileLayout: "stack"
  },
  { 
    id: '05', 
    name: "IPL AU", 
    icon: "sports_cricket", 
    isCustom: false, 
    agenda: "Addressing strategic overbidding and competitive imbalance in franchises.", 
    color: "#64748B",
    desktopLayout: "inline",
    mobileLayout: "inline"
  },
  { 
    id: '06', 
    name: "FIFA", 
    icon: "sports_soccer", 
    isCustom: false, 
    agenda: "Investigating systemic corruption to restore integrity in football governance.", 
    color: "#3B82F6",
    desktopLayout: "stack", // Below heading
    mobileLayout: "stack"
  },
  { 
    id: '07', 
    name: "F1", 
    icon: "sports_motorsports", 
    isCustom: false, 
    agenda: "Investigating mysterious technical failures during the championship season.", 
    color: "#F59E0B",
    desktopLayout: "inline",
    mobileLayout: "stack"
  },
  { 
    id: '08', 
    name: "NBA", 
    icon: "sports_basketball", 
    isCustom: false, 
    agenda: "Sudden resignation of a franchise owner and commercial uncertainty.", 
    color: "#EC4899",
    desktopLayout: "inline",
    mobileLayout: "stack"
  },
];

const CommitteeGrid = ({ theme }: CommitteeGridProps) => {
  const themeColors: Record<string, string> = {
    black: "#000000",
    darkGreen: "#182412",
    forestGreen: "#182b1b",
    everforest: "#13171a",
    darkerGreen: "#0b1208"
  };

  const currentBg = themeColors[theme] || "#000000";

  return (
    <div className="comm-container">
      <div className="comm-title-wrapper">
        <ScrollFloat
          animationDuration={1}
          ease='back.inOut(2)'
          scrollStart='center bottom+=50%'
          scrollEnd='bottom bottom-=40%'
          stagger={0.03}
        >
          Committee &amp; Agenda
        </ScrollFloat>
      </div>

      <div className="comm-grid">
      {committeeSteps.map((comm) => {
        const cardRef = useRef<HTMLDivElement>(null);
      
        return (
          <div key={comm.id} className="comm-item">
            <FloatRevealEarly>
              <BorderGlow backgroundColor={currentBg} className='card-main'>
                <div className="comm-card-content" ref={cardRef}>
                  
                  {/* Header with Dynamic Layout Classes */}
                  <div className={`comm-header layout-d-${comm.desktopLayout} layout-m-${comm.mobileLayout}`}>
                    {/* Wrap Dot and Name together to ensure they are ALWAYS on one line */}
                    <div className="comm-title-row">
                      <span className="comm-dot" style={{ backgroundColor: comm.color }}></span>
                      <VariableProximity
                        label={comm.name}
                        className={'variable-proximity-demo'}
                        fromFontVariationSettings="'wght' 600, 'opsz' 9"
                        toFontVariationSettings="'wght' 1000, 'opsz' 40"
                        containerRef={cardRef as RefObject<HTMLElement>} 
                        radius={100}
                        falloff='linear'
                        style={{ color: comm.color, cursor: 'default' }}
                      />
                    </div>
                  
                    {/* Large Hero Icon */}
                    <div className="comm-hero-icon-container" style={{ color: comm.color }}>
                      {comm.isCustom ? (
                        <img src={comm.icon} alt="" className="comm-hero-svg" />
                      ) : (
                        <span className="material-symbols-rounded comm-hero-symbol">{comm.icon}</span>
                      )}
                    </div>
                  </div> 
                  <p className="comm-agenda">{comm.agenda}</p>
                </div>
              </BorderGlow>
            </FloatRevealEarly>
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default CommitteeGrid;
