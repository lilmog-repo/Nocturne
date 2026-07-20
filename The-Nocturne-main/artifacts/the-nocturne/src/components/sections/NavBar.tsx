import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, Calendar } from 'lucide-react';
import { openBooking } from '@/lib/booking';

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b border-transparent ${
        scrolled ? 'bg-background/80 backdrop-blur-md border-border/50 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <button className="flex items-center gap-2 text-xs font-sans tracking-[0.2em] uppercase hover:text-primary transition-colors">
          <Menu className="w-4 h-4" />
          <span className="hidden sm:inline">Menu</span>
        </button>

        <a href="#" className="absolute left-1/2 -translate-x-1/2 text-sm md:text-base font-serif tracking-[0.3em] uppercase whitespace-nowrap">
          The Nocturne
        </a>

        <button
          onClick={openBooking}
          className="flex items-center gap-2 text-xs font-sans tracking-[0.2em] uppercase hover:text-primary transition-colors"
        >
          <span className="hidden sm:inline">Reserve</span>
          <Calendar className="w-4 h-4" />
        </button>
      </div>
    </motion.nav>
  );
}
