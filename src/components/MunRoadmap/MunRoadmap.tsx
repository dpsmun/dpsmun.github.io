import BorderGlow from '../BorderGlow/BorderGlow';
import './MunRoadmap.css';

interface MunRoadmapProps {
  theme: "black" | "darkGreen" | "forestGreen" | "everforest" | "darkerGreen";
}

const roadmapSteps = [
  { id: '01', title: 'Roll Call', desc: 'The opening quorum. State your presence and voting status.', size: 'wide' },
  { id: '02', title: 'GSL', desc: 'The General Speakers List. Your 90-second platform to set your country\'s agenda.', size: 'tall' },
  { id: '03', title: 'Mod Caucus', desc: 'Focused, rapid-fire debate on specific sub-issues.', size: 'small' },
  { id: '04', title: 'Unmod Caucus', desc: 'Lobbying and alliance building. The "break" where real deals happen.', size: 'small' },
  { id: '05', title: 'Resolution', desc: 'Collaborate with your bloc to draft formal solutions.', size: 'wide' },
  { id: '06', title: 'Voting', desc: 'The final verdict. Only the most robust papers become law.', size: 'small' },
];

const MunRoadmap = ({ theme }: MunRoadmapProps) => {
  // Mapping the theme string to your specific hex/rgba backgrounds
  const themeColors: Record<string, string> = {
    black: "#000000",
    darkGreen: "#172412",
    forestGreen: "#112113",
    everforest: "#1e2326",
    darkerGreen: "#0f190b"
  };

  const currentBg = themeColors[theme] || "#000000";

  return (
    <div className="roadmap-container">
      <div className="roadmap-grid">
        {roadmapSteps.map((step) => (
          <div key={step.id} className={`roadmap-item ${step.size}`}>
            <BorderGlow backgroundColor={currentBg}>
              <div className="roadmap-card-content">
                <span className="step-number">{step.id}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </BorderGlow>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MunRoadmap;
