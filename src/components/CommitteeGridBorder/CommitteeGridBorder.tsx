import SimpleReveal from "../SimpleReveal/SimpleReveal";
import SpotlightCard from "../SpotlightCard/SpotlightCard";
import VariableProximity from "../VariableProximity/VariableProximity";
import { useRef, type RefObject } from "react";
import './CommitteeGridBorder.css'

const CommitteeGrid = () => {
  // Define exact hex values to satisfy your ${string} type requirement
  // Using 20% opacity versions of the theme colors
  const committees = [
    { name: "UNSC", size: "large", agenda: "Venezuelan President’s detention and global security.", glow: "#E0B6434B", color: "#E0B643" },
    { name: "AIPPM", size: "medium", agenda: "India's National Security Doctrine & Border Tensions.", glow: "#10B9814B", color: "#10B981" },
    { name: "MARVEL", size: "small", agenda: "Doctor Doom’s Ascendancy and Multiversal Implications.", glow: "#EF44444B", color: "#EF4444" },
    { name: "MINISTRY OF MAGIC", size: "wide", agenda: "Restoration of Wizarding Governance & Restricted Spells.", glow: "#A855F733", color: "#A855F7" },
    { name: "IPL AU", size: "medium", agenda: "Review of Auction Strategies and Strategic Overbidding.", glow: "#64748B33", color: "#64748B" },
    { name: "FIFA", size: "small", agenda: "Addressing Corruption and Restoring Integrity.", glow: "#3B82F633", color: "#3B82F6" },
    { name: "F1", size: "small", agenda: "Investigation into Mysterious Technical Failures.", glow: "#F59E0B33", color: "#F59E0B" },
    { name: "NBA", size: "small", agenda: "Resignation of Franchise Owner amid uncertainty.", glow: "#EC489933", color: "#EC4899" },
  ];


  return (
    <div className="bento-container">
       <h2 className="section-title">Committees & Agendas</h2>
       <div className="bento-grid">
        {committees.map((comm, i) => {
          // 2. Create a local ref for each card inside the map
          const cardRef = useRef<HTMLDivElement>(null);

          return (
            <div key={i} className={`bento-item ${comm.size}`} ref={cardRef}>
              <SpotlightCard 
                className="custom-spotlight-card" 
                spotlightColor={comm.glow}
              >
                <SimpleReveal>
                  <div className="bento-content">
                    <div className="bento-header">
                      <span className="dot" style={{ backgroundColor: comm.color }}></span>
                      <VariableProximity
                        label={comm.name}
                        className={'variable-proximity-demo'}
                        fromFontVariationSettings="'wght' 600, 'opsz' 9"
                        toFontVariationSettings="'wght' 1000, 'opsz' 40"
                        // 3. Attach the specific card's ref
                        containerRef={cardRef as RefObject<HTMLElement>} 
                        radius={100}
                        falloff='linear'
                        style={{ color: comm.color, cursor: 'default' }}
                      />
                    </div>
                    <p className="comm-agenda">{comm.agenda}</p>
                  </div>
                </SimpleReveal>
              </SpotlightCard>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CommitteeGrid;

