import { motion } from 'framer-motion';
import { openBooking } from '@/lib/booking';
import emberImg from '@assets/IMG_1680_1784428805625.jpeg';

const experiences = [
  "Intimate Tastings",
  "Absinthe Rituals",
  "Moonlit Dessert Pairings",
  "Private Dinners",
  "Vinyl Evenings",
  "Candle Ceremonies",
  "The Chef's Course"
];

export default function EmberRoom() {
  return (
    <section className="relative w-full py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-24">

          {/* Left Column — List (shows above image on mobile) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-auto lg:flex-1 lg:max-w-xs pt-0 lg:pt-16"
          >
            <div className="space-y-4 md:space-y-6">
              {experiences.map((exp, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-2 h-2 rounded-full border border-primary/50 group-hover:bg-primary group-hover:border-primary transition-all shrink-0" />
                  <span className="font-sans tracking-widest text-xs md:text-sm uppercase text-white/70 group-hover:text-white transition-colors">
                    {exp}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column — Image & Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:flex-[1.4] relative"
          >
            <div className="relative w-full aspect-[4/3] sm:aspect-[4/3] md:aspect-[16/10] lg:aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src={emberImg}
                alt="The Ember Room"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-6 sm:p-10 md:p-12">
                <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl mb-4 md:mb-6 text-white leading-tight">
                  The Ember<br />Room
                </h2>
                <p className="font-sans text-white/70 text-xs sm:text-sm leading-relaxed mb-6 md:mb-8 max-w-xs">
                  Here, guests gather for quiet rituals — private tastings, absinthe ceremonies, and whispered conversations.
                </p>
                <button
                  onClick={openBooking}
                  className="flex items-center gap-3 text-xs font-sans tracking-[0.2em] uppercase text-white hover:text-primary transition-colors group w-max"
                >
                  <span>Book A Room</span>
                  <span className="group-hover:translate-x-2 transition-transform">→</span>
                </button>
              </div>
            </div>

            {/* Decorative glow */}
            <div className="absolute -top-10 -right-10 w-48 h-48 md:w-64 md:h-64 bg-primary/20 rounded-full blur-[80px] md:blur-[100px] z-[-1]" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
