import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import testImg from '@assets/614A46EB-B393-4579-9289-4CD4F11102DC_1784428828248.png';

const testimonials = [
  {
    quote: "Stepping into The Nocturne felt like crossing into another world. The lighting, the music, even the silence between songs — everything was perfectly tuned to the night.",
    name: "Clara M.",
    role: "Design Director, New York",
  },
  {
    quote: "The Ember Room tasting was unlike anything I've experienced. Every course felt considered, every pairing deliberate. This is what dining after dark should feel like.",
    name: "Julien P.",
    role: "Sommelier, Paris",
  },
  {
    quote: "We booked a private dinner for six and the team treated it like an occasion, not a reservation. Warm, unhurried, genuinely memorable.",
    name: "Amara O.",
    role: "Editor, London",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const goToPrev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  const goToNext = () => setIndex((prev) => (prev + 1) % testimonials.length);

  const current = testimonials[index];
  return (
    <section className="relative w-full py-20 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">

        {/* Mobile: stacked. Desktop: side-by-side */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-8">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:flex-1 relative z-20 order-2 lg:order-1"
          >
            {/* Mobile headline */}
            <h2 className="font-serif text-4xl sm:text-5xl mb-8 lg:hidden">
              Real<br />Experience
            </h2>

            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <span className="font-serif text-4xl md:text-5xl">5/5</span>
              <div className="flex gap-1 text-primary">
                {[1, 2, 3, 4, 5].map(i => (
                  <svg key={i} className="w-4 h-4 md:w-5 md:h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.blockquote
                key={index}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-snug mb-8 md:mb-10 text-white/90"
              >
                "{current.quote}"
              </motion.blockquote>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-between"
              >
                <div className="font-sans">
                  <div className="text-sm font-semibold tracking-wider uppercase mb-1">{current.name}</div>
                  <div className="text-xs text-white/50 tracking-wide">{current.role}</div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={goToPrev}
                    aria-label="Previous testimonial"
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors text-sm"
                  >
                    <span className="transform rotate-180">→</span>
                  </button>
                  <button
                    onClick={goToNext}
                    aria-label="Next testimonial"
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors text-sm"
                  >
                    <span>→</span>
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:flex-1 relative order-1 lg:order-2"
          >
            {/* Desktop overlapping headline */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-8 xl:-left-16 z-10 hidden lg:block pointer-events-none">
              <h2 className="font-serif text-[80px] xl:text-[110px] leading-[0.85] text-white/90 mix-blend-difference drop-shadow-lg">
                Real<br />Experience
              </h2>
            </div>

            <div className="w-full lg:w-[90%] ml-auto aspect-[4/5] sm:aspect-[3/4] md:aspect-[4/5] rounded-2xl overflow-hidden relative">
              <img
                src={testImg}
                alt="Dining Experience"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Ambient glow */}
      <div className="absolute left-0 top-1/3 w-64 h-64 md:w-96 md:h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
}
