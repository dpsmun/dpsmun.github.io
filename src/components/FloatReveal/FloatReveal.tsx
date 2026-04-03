import React, { useEffect, useRef, type ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface FloatRevealProps {
  children: ReactNode;
  className?: string;
  start?: string;  // start position like 'top 75%'
  end?: string;    // end position like 'top 50%'
  yDistance?: number; // how much it floats up
  blurStrength?: number; // px
  opacityStart?: number; // starting opacity
}

const FloatReveal: React.FC<FloatRevealProps> = ({
  children,
  className = '',
  start = 'top 100%',
  end = 'top 70%',
  yDistance = 40,
  blurStrength = 8,
  opacityStart = 0
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { y: yDistance, opacity: opacityStart, filter: `blur(${blurStrength}px)` },
      {
        y: 0,
        opacity: 1,
        filter: 'blur(0px)',
        scrollTrigger: {
          trigger: el,
          start,
          end,
          scrub: true, // controlled by scroll
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [start, end, yDistance, blurStrength, opacityStart]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};

export default FloatReveal;
