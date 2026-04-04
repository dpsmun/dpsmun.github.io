import './PerksCarousel.css';

const perks = [
  "EXPERT EXECUTIVE BOARD",
  "NUTRITIOUS MEALS",
  "EXCLUSIVE SOCIAL EVENING",
  "GLOBAL PROBLEM SOLVING",
  "PREMIUM DELEGATE KIT",
  "INTERNATIONAL CERTIFICATION",
];

const PerksCarousel = () => {
  return (
    <div className="perks-wrapper">
      <div className="perks-track">
        {/* We repeat the list twice for a seamless loop */}
        {[...perks, ...perks].map((perk, i) => (
          <div key={i} className="perk-item">
            <span className="perk-dot">•</span>
            
            <span className='perk-text'>{perk}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerksCarousel;
