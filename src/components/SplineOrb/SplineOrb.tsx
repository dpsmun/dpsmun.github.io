import { useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './SplineOrb.css';

// Register the GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const SplineOrb = () => {
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // This connects the GSAP animation ONLY to this specific orb
    const element = orbRef.current;

    if (element) {
      gsap.to(element, {
        y: "75vh", // Travels 75% down the screen
        rotation: 180, // Tumbles as it falls
        ease: "none",
        scrollTrigger: {
          trigger: document.body, // Watches the whole page scroll
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5, // The buttery smooth delay
        }
      });
    }

    // Cleanup function: removes the animation if the component unmounts
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="spline-scroll-container" ref={orbRef}>
      <Spline scene="https://prod.spline.design/9ezqjH0yPjMibDxS/scene.splinecode" />
    </div>
  );
};

export default SplineOrb;
