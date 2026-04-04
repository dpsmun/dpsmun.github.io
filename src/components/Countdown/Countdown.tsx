import { useState, useEffect } from 'react';
import './Countdown.css';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date("May 9, 2026 09:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown-wrapper">
    <div className="countdown-fixed">
      <div className="countdown-item">
        <span className="time-val">{String(timeLeft.days).padStart(2, '0')}</span>
        <span className="time-label">D</span>
      </div>
      <div className="countdown-divider">:</div>
      <div className="countdown-item">
        <span className="time-val">{String(timeLeft.hours).padStart(2, '0')}</span>
        <span className="time-label">H</span>
      </div>
      <div className="countdown-divider">:</div>
      <div className="countdown-item">
        <span className="time-val">{String(timeLeft.minutes).padStart(2, '0')}</span>
        <span className="time-label">M</span>
      </div>
      <div className="countdown-divider">:</div>
      <div className="countdown-item">
        <span className="time-val">{String(timeLeft.seconds).padStart(2, '0')}</span>
        <span className="time-label">S</span>
      </div>
    </div>
    </div>
  );
};

export default Countdown;
