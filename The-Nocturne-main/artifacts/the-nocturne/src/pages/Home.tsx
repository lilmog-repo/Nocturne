import { useEffect, useState } from 'react';
import NavBar from '@/components/sections/NavBar';
import HeroSlider from '@/components/sections/HeroSlider';
import Editorial from '@/components/sections/Editorial';
import PhilosophyCards from '@/components/sections/PhilosophyCards';
import EmberRoom from '@/components/sections/EmberRoom';
import TonightsSpecial from '@/components/sections/TonightsSpecial';
import Testimonials from '@/components/sections/Testimonials';
import ReservationCTA from '@/components/sections/ReservationCTA';
import Footer from '@/components/sections/Footer';

export default function Home() {
  // Ensure dark mode class is applied to HTML element if needed, though CSS variables are root-level anyway
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <main className="relative min-h-[100dvh] w-full bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-primary-foreground">
      <NavBar />
      <HeroSlider />
      <Editorial />
      <PhilosophyCards />
      <EmberRoom />
      <TonightsSpecial />
      <Testimonials />
      <ReservationCTA />
      <Footer />
    </main>
  );
}
