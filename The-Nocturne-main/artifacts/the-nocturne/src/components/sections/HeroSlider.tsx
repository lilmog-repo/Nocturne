import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Twitter, Music, Send } from 'lucide-react';
import CountdownTimer from '@/components/ui/CountdownTimer';
import { openBooking } from '@/lib/booking';
import hero1 from '@assets/A3DE4979-6342-4DFF-A1D7-24B34F43FA0C_1784428777445.png';
import hero2 from '@assets/9D5F5565-7254-4B9C-B3DD-7BB997455F52_1784428777446.png';

const slides = [
  {
    id: 1,
    image: hero1,
    title: 'Where The City Whispers',
  },
  {
    id: 2,
    image: hero2,
    title: 'No Rush. Night Is Ours.',
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[100dvh] min-h-[600px] overflow-hidden bg-[#0A0806]">
      {/* Background images */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.6, ease: 'easeInOut' }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0806] via-transparent to-[#0A0806]/40 z-10" />
          <img
            src={slides[currentSlide].image}
            alt="The Nocturne atmosphere"
            className="w-full h-full object-cover"
            onLoad={() => setImagesLoaded(prev => ({ ...prev, [currentSlide]: true }))}
          />
        </motion.div>
      </AnimatePresence>

      {/* Amber warmth vignette */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 70% 60%, rgba(200,134,10,0.12) 0%, transparent 65%)',
        }}
      />

      {/* Central content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-6 md:px-12 pb-44 sm:pb-40 md:pb-36">
        <AnimatePresence mode="wait">
          <motion.h1
            key={currentSlide}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[clamp(2.2rem,8vw,6rem)] max-w-[18ch] leading-[1.08] mb-8 md:mb-10 text-white"
          >
            {slides[currentSlide].title}
          </motion.h1>
        </AnimatePresence>

        <motion.button
          onClick={openBooking}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="group flex items-center gap-4 bg-white/10 hover:bg-white/18 backdrop-blur-md border border-white/20 text-white rounded-full pl-6 pr-2 py-2 transition-all"
        >
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.22em] font-sans">Book A Table</span>
          <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center group-hover:bg-primary transition-colors shrink-0">
            <span className="text-sm leading-none">→</span>
          </div>
        </motion.button>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-[200px] sm:bottom-[180px] md:bottom-auto md:top-auto left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-12 md:bottom-1/2 md:translate-y-1/2 z-20 flex md:flex-col gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`w-1 rounded-full transition-all duration-500 ${
              i === currentSlide
                ? 'h-6 bg-primary'
                : 'h-3 bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Bottom bar */}
      <div className="absolute bottom-5 sm:bottom-6 left-0 w-full z-20 px-5 sm:px-6 md:px-12">
        {/* Mobile */}
        <div className="flex flex-col gap-3 sm:hidden">
          <CountdownTimer />
          <div className="flex items-center justify-between">
            <p className="text-[10px] uppercase tracking-[0.25em] font-sans text-white/45">
              143rd Ave, London
            </p>
            <div className="flex items-center gap-3 text-white/50">
              <a href="#" aria-label="Instagram" className="hover:text-primary transition-colors"><Instagram className="w-3.5 h-3.5" /></a>
              <a href="#" aria-label="Twitter" className="hover:text-primary transition-colors"><Twitter className="w-3.5 h-3.5" /></a>
              <a href="#" aria-label="Telegram" className="hover:text-primary transition-colors"><Send className="w-3.5 h-3.5" /></a>
              <a href="#" aria-label="Music" className="hover:text-primary transition-colors"><Music className="w-3.5 h-3.5" /></a>
            </div>
          </div>
        </div>

        {/* Tablet + Desktop */}
        <div className="hidden sm:flex items-end justify-between gap-6">
          <CountdownTimer />
          <p className="text-[10px] uppercase tracking-[0.3em] font-sans text-white/45 mb-1">
            143rd Avenue, London
          </p>
          <div className="flex items-center gap-4 text-white/50">
            <a href="#" aria-label="Instagram" className="hover:text-primary transition-colors"><Instagram className="w-4 h-4" /></a>
            <a href="#" aria-label="Twitter" className="hover:text-primary transition-colors"><Twitter className="w-4 h-4" /></a>
            <a href="#" aria-label="Telegram" className="hover:text-primary transition-colors"><Send className="w-4 h-4" /></a>
            <a href="#" aria-label="Music" className="hover:text-primary transition-colors"><Music className="w-4 h-4" /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
