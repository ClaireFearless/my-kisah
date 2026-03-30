"use client";
import { useState, useEffect } from 'react';

export default function Countdown({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const difference = new Date(targetDate).getTime() - new Date().getTime();
      if (difference <= 0) {
        clearInterval(timer);
        return;
      }
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex gap-4 mt-8">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="bg-white/20 backdrop-blur-md p-4 rounded-xl w-20 text-center border border-white/30 shadow-lg">
          <div className="text-2xl font-bold text-white leading-tight">{value}</div>
          <div className="text-[10px] uppercase tracking-tighter text-white/90">{unit}</div>
        </div>
      ))}
    </div>
  );
}