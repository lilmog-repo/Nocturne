import { motion } from 'framer-motion';
import dish1 from '@assets/FD9EEC32-234E-44DB-AB75-B218E0E7E25E_1784428816920.png';
import dish2 from '@assets/BBFF94B2-504C-4CB7-B833-0FA58BFBEB7C_1784428816920.png';
import dish3 from '@assets/99FD5BB8-6571-4F4D-8CD0-187738448E53_1784428816920.png';

const dishes = [
  {
    title: "Creamy Herb Chicken",
    desc: "Slow-roasted with wild herbs and cultured butter.",
    img: dish1
  },
  {
    title: "Salmon with Lemon Mash",
    desc: "Cured overnight, served over velvety potato purée.",
    img: dish2
  },
  {
    title: "Roasted Chicken Medley",
    desc: "Heritage breed, charred vegetables, rich jus.",
    img: dish3
  }
];

export default function TonightsSpecial() {
  return (
    <section className="relative w-full py-20 md:py-32 bg-background border-t border-border/30">
      <div className="container mx-auto px-6 md:px-12">

        {/* Header row */}
        <div className="mb-12 md:mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl mb-4 md:mb-6">
              Tonight's <span className="gold-gradient-text">Special</span>
            </h2>
            <p className="font-sans text-white/60 text-sm leading-relaxed max-w-md">
              Our menu shifts with the seasons and the whim of the kitchen.
              These are the plates that demand attention tonight.
            </p>
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-3 text-xs font-sans tracking-[0.2em] uppercase text-white hover:text-primary transition-colors group shrink-0"
          >
            <span>Learn More</span>
            <span className="group-hover:translate-x-2 transition-transform">→</span>
          </motion.button>
        </div>

        {/* Dish grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {dishes.map((dish, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-3 md:mb-5 bg-card border border-card-border">
                <img
                  src={dish.img}
                  alt={dish.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  loading="lazy"
                />
              </div>
              <h3 className="font-serif text-base md:text-xl mb-1 md:mb-2 group-hover:text-primary transition-colors leading-snug">
                {dish.title}
              </h3>
              <p className="font-sans text-[11px] md:text-xs text-white/50 leading-relaxed">{dish.desc}</p>
            </motion.div>
          ))}

          {/* Mystery Dish */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group cursor-pointer"
          >
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-3 md:mb-5 bg-card border border-card-border flex flex-col items-center justify-center p-4 text-center">
              {/* Curtain texture */}
              <div
                className="absolute inset-0 opacity-15 grayscale"
                style={{
                  backgroundImage: `repeating-linear-gradient(
                    90deg,
                    transparent,
                    transparent 6px,
                    rgba(200,134,10,0.3) 6px,
                    rgba(200,134,10,0.3) 8px
                  )`,
                }}
              />
              <div className="relative z-10 space-y-4">
                <div className="w-12 h-12 md:w-14 md:h-14 mx-auto border border-white/20 rounded-full flex items-center justify-center">
                  <span className="font-serif text-xl md:text-2xl text-white/40">?</span>
                </div>
                <div>
                  <h3 className="font-serif text-sm md:text-base mb-2 md:mb-3 text-white/80 leading-snug">Chef's Secret Plate</h3>
                  <span className="inline-block px-2 py-1 text-[9px] md:text-[10px] uppercase tracking-widest border border-primary/30 text-primary rounded-full bg-primary/5">
                    Unlocked 12:00pm
                  </span>
                </div>
              </div>
            </div>
            <h3 className="font-serif text-base md:text-xl mb-1 md:mb-2 text-white/50 leading-snug">Chef's Secret</h3>
            <p className="font-sans text-[11px] md:text-xs text-white/30">Available after midnight</p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
