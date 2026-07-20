import { useState, useEffect } from 'react';

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const getNextTarget = () => {
      const target = new Date();
      target.setHours(23, 59, 59, 999);
      // If today's target has already passed, count down to tomorrow's instead
      // of freezing at zero for the rest of the day.
      if (target.getTime() <= Date.now()) {
        target.setDate(target.getDate() + 1);
      }
      return target;
    };

    let target = getNextTarget();

    const updateTimer = () => {
      const now = new Date();
      let difference = target.getTime() - now.getTime();

      // Roll over to the next day's target the moment this one elapses,
      // rather than waiting for a remount to recompute it.
      if (difference <= 0) {
        target = getNextTarget();
        difference = target.getTime() - now.getTime();
      }

      setTimeLeft({
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
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
