import './landing-button.css'

type LandingButtonProps = {
  text: string;
  variant?: "filled" | "hollow";
};

function LandingButton({ text, variant = "filled" }: LandingButtonProps) {
  return (
    <button className={`btn ${variant}`}>
      {text}
    </button>
  );
}

export default LandingButton;
