import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface FloatRevealProps {
  children: React.ReactNode;
}

const FloatReveal: React.FC<FloatRevealProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { y: 40, opacity: 0, filter: 'blur(8px)' },
      {
        y: 0,
        opacity: 1,
        filter: 'blur(0px)',
        scrollTrigger: {
          trigger: el,
          start: 'top 100%',   // animation starts as element enters viewport
          end: 'top 70%',      // ends when element is mid-viewport
          scrub: true,         // fully scroll-controlled
        },
      }
    );
  }, []);

  return <div ref={ref}>{children}</div>;
};

export default FloatReveal;
