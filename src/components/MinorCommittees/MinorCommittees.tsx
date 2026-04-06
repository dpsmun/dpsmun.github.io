import BorderGlow from '../BorderGlow/BorderGlow';
import FloatRevealEarly from '../SimpleRevealEarly/SimpleRevealEarly';
import VariableProximity from '../VariableProximity/VariableProximity';
import { useRef, type RefObject } from "react";
import './MinorCommittees.css';

const minorCommittees = [
  { 
    id: '09', 
    slug: "unga",
    name: "UNGA", 
    color: "#FFFFFF", 
    agenda: "Impact of suspended humanitarian funding on civilian protection in Gaza."
  },
  { 
    id: '10', 
    slug: "unodc",
    name: "UNODC", 
    color: "#FFFFFF", 
    agenda: "Expansion of narcotics trafficking routes through West Africa."
  },
  { 
    id: '11', 
    slug: "unhrc",
    name: "UNHRC", 
    color: "#FFFFFF", 
    agenda: "Human rights violations from military operations in the West Bank."
  },
  { 
    id: '12', 
    slug: "unicef",
    name: "UNICEF", 
    color: "#FFFFFF", 
    agenda: "Protecting children from forced recruitment and malnutrition in Africa."
  },
  { 
    id: '13', 
    slug: "uncsw",
    name: "UNCSW", 
    color: "#FFFFFF", 
    agenda: "Impact of the female education ban in Afghanistan on gender equality."
  },
  { 
    id: '14', 
    slug: "unea",
    name: "UNEA", 
    color: "#FFFFFF", 
    agenda: "Environmental impact of large-scale AI expansion and water depletion."
  },
  { 
    id: '15', 
    slug: "who",
    name: "WHO", 
    color: "#FFFFFF", 
    agenda: "Public health emergency from the healthcare collapse in Gaza."
  },
  { 
    id: '16', 
    slug: "undp",
    name: "UNDP", 
    color: "#FFFFFF", 
    agenda: "Global mechanisms for restricted development in conflicted regions."
  },
  { 
    id: '17', 
    slug: "unesco",
    name: "UNESCO", 
    color: "#FFFFFF", 
    agenda: "Protection of UNESCO World Heritage Sites during armed conflicts."
  },
  { 
    id: '18', 
    slug: "lokSabha",
    name: "LOK SABHA", 
    color: "#FFFFFF", 
    agenda: "Regulation of AI, deepfakes, and electoral integrity in India."
  },
  { 
    id: '19', 
    slug: "ccc",
    name: "CCC", 
    color: "#FFFFFF", 
    agenda: "Agenda Classified."
  },
  { 
    id: '20', 
    slug: "bcci",
    name: "BCCI", 
    color: "#FFFFFF", 
    agenda: "Institutional review of cricket administration following leaks."
  },
  { 
    id: '21', 
    slug: "ip",
    name: "IP", 
    color: "#FFFFFF", 
    agenda: "Journalists, Photographers, and Caricaturists."
  }
];

const MinorCommittees = ({ theme }: { theme: string }) => {
  const themeColors: Record<string, string> = {
    black: "#000000",
    darkGreen: "#182412",
    forestGreen: "#182b1b",
    everforest: "#13171a",
    darkerGreen: "#0b1208"
  };

  const currentBg = themeColors[theme] || "#000000";

  return (
    <div className="minor-container">
      <div className="minor-grid">
        {minorCommittees.map((comm) => {
          const cardRef = useRef<HTMLDivElement>(null);
          return (
            <div key={comm.id} className="minor-item">
              <FloatRevealEarly>
                <BorderGlow backgroundColor={currentBg} className='card-main'>
                  <div className="minor-card-content" ref={cardRef}>
                    <div className="minor-header">
                      <span className="comm-dot" style={{ backgroundColor: comm.color }}></span>
                      <VariableProximity
                        label={comm.name}
                        className={'variable-proximity-minor'}
                        fromFontVariationSettings="'wght' 500"
                        toFontVariationSettings="'wght' 900"
                        containerRef={cardRef as RefObject<HTMLElement>}
                        radius={80}
                        falloff='linear'
                        style={{ color: comm.color, cursor: 'default', fontSize: '1.2rem' }}
                      />
                    </div>
                    <p className="minor-agenda">{comm.agenda}</p>
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

export default MinorCommittees;
