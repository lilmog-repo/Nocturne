import { useState, useEffect } from 'react';

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date();
    target.setHours(23, 59, 59, 999);

    const updateTimer = () => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();
      if (difference > 0) {
        setTimeLeft({
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, []);

  const fmt = (n: number) => n.toString().padStart(2, '0');

  return (
    <div className="bg-background/60 backdrop-blur-md border border-white/10 rounded-2xl p-3 sm:p-4 flex flex-col gap-1.5 sm:gap-2 min-w-[180px] sm:min-w-[210px]">
      <div className="text-[9px] sm:text-[10px] font-sans uppercase tracking-widest text-white/50 flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shrink-0" />
        Left to night menu
      </div>
      <div className="font-serif text-2xl sm:text-3xl tracking-widest tabular-nums font-light">
        {fmt(timeLeft.hours)}:{fmt(timeLeft.minutes)}:{fmt(timeLeft.seconds)}
      </div>
      <div className="text-[11px] font-sans text-white/40">
        We're almost there!
      </div>
    </div>
  );
}
