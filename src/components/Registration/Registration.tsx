import LandingButton from '../landing-button/landing-button';
import './Registration.css';

const Registration = () => {
  return (
    <section id="register" className="reg-section">
      <div className="reg-container">
        <h2 className="reg-title">Registration</h2>
        
        <div className="reg-grid">
          {/* DPS Card */}
          <div className="reg-card">
            <div className="card-overflow-bg" />
            <div className="card-inner">
              <h3 className="reg-heading">Delhi Public School</h3>
              <div className="reg-price">₹3,200</div>
              <ul className="reg-includes">
                <li><span className="material-symbols-rounded">check_circle</span> Delegate Kits</li>
                <li><span className="material-symbols-rounded">check_circle</span> Nutritious Meals</li>
                <li><span className="material-symbols-rounded">check_circle</span> Social Evening Access</li>
                <li><span className="material-symbols-rounded">check_circle</span> Training Sessions</li>
              </ul>
              <LandingButton text="Register as DPS Student" variant="filled" href="#" />
            </div>
          </div>

          {/* External Card */}
          <div className="reg-card">
            <div className="card-overflow-bg" />
            <div className="card-inner">
              <h3 className="reg-heading">External Schools</h3>
              <div className="reg-price">₹3,500</div>
              <ul className="reg-includes">
                <li><span className="material-symbols-rounded">check_circle</span> Delegate Kits</li>
                <li><span className="material-symbols-rounded">check_circle</span> Nutritious Meals</li>
                <li><span className="material-symbols-rounded">check_circle</span> Social Evening Access</li>
                <li><span className="material-symbols-rounded">check_circle</span> Training Sessions</li>
              </ul>
              <LandingButton text="Register as External" variant="filled" href="#" />
            </div>
          </div>
        </div>

        {/* Eligibility Accordion */}
        <details className="eligibility-accordion">
          <summary>
            Who can register? 
            <span className="material-symbols-rounded icon-small">expand_more</span>
          </summary>
          <div className="accordion-content">
            <p>Open to all students from <strong>Classes 6-12</strong>.</p>
            <p>We welcome participants from any Delhi Public School branch as well as all other private and government schools across India.</p>
          </div>
        </details>
      </div>
    </section>
  );
};

export default Registration;
