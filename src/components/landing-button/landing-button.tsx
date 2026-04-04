import './landing-button.css'

type LandingButtonProps = {
  text: string;
  variant?: "filled" | "hollow";
  href?: string; // Add href to target sections like "#committees"
  onClick?: () => void; // Keep onClick for general actions
};

function LandingButton({ text, variant = "filled", href, onClick }: LandingButtonProps) {
  
  const handleClick = (e: React.MouseEvent) => {
    // 1. If an onClick function is passed, run it
    if (onClick) onClick();

    // 2. If it's a hash link (e.g., #about), handle smooth scrolling
    if (href?.startsWith('#')) {
      e.preventDefault();
      const targetId = href.replace('#', '');
      const elem = document.getElementById(targetId);
      
      if (elem) {
        elem.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        
        // Optional: Update the URL hash without jumping the page
        window.history.pushState(null, '', href);
      }
    }
  };

  return (
    <button className={`btn ${variant}`} onClick={handleClick}>
      {text}
    </button>
  );
}

export default LandingButton;
