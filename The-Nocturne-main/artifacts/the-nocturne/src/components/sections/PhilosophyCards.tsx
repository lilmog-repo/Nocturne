import { motion } from 'framer-motion';
import bgImg from '@assets/FF972D13-C371-42E1-8524-F94BDE65AC0B_1784428796887.png';

const cards = [
  {
    num: "1",
    title: "Night is ours",
    text: "We only open when the sun sets. The ambiance is crafted specifically for evening senses, which require softer light and deeper flavors.",
    desktopOffset: "lg:mt-0"
  },
  {
    num: "2",
    title: "Heat First",
    text: "Fire is the oldest ingredient. We harness smoke, embers, and open flames to coax unexpected dimensions from pristine produce.",
    desktopOffset: "lg:mt-24"
  },
  {
    num: "3",
    title: "Silence Matters",
    text: "An acoustic architecture designed to absorb the chaos. Whispers carry, laughter warms, and the clatter of the kitchen remains a distant hum.",
    desktopOffset: "lg:mt-12"
  },
  {
    num: "4",
    title: "Bitter Is Honest",
    text: "We don't mask reality with sugar. Our flavor profiles lean into the complex, the fermented, the charred, and the deeply satisfying.",
    desktopOffset: "lg:mt-32"
  }
];

export default function PhilosophyCards() {
  return (
    <section className="relative w-full py-20 md:py-32 min-h-[auto] lg:min-h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background/80 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-10" />
        <img
          src={bgImg}
          alt="Fire embers background"
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-20 w-full">
        {/* Mobile: 1 col, no offsets. Tablet: 2 col, no offsets. Desktop: 4 col with staggered offsets */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:items-start">
          {cards.map((card, index) => (
            <motion.div
              key={card.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.12, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className={`relative bg-card/40 backdrop-blur-sm border border-card-border p-6 md:p-8 rounded-2xl overflow-hidden group ${card.desktopOffset}`}
            >
              {/* Ghost number */}
              <div className="absolute -right-4 -bottom-8 text-[120px] md:text-[160px] font-serif leading-none font-bold text-white/[0.04] group-hover:text-primary/[0.06] transition-colors duration-500 select-none pointer-events-none">
                {card.num}
              </div>

              <div className="relative z-10">
                <h3 className="font-serif text-xl md:text-2xl mb-3 md:mb-4 text-white group-hover:text-primary transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-white/60 font-sans text-sm leading-relaxed">
                  {card.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
