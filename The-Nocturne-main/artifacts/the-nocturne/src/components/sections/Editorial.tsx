import { motion } from 'framer-motion';

export default function Editorial() {
  return (
    <section className="relative w-full py-20 md:py-40 overflow-hidden">
      {/* Amber glow orb */}
      <div
        className="absolute left-[-8%] top-1/2 -translate-y-1/2 w-[320px] h-[320px] md:w-[480px] md:h-[480px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(200,134,10,0.35) 0%, rgba(200,134,10,0.08) 55%, transparent 80%)',
          filter: 'blur(48px)',
        }}
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 md:gap-20 lg:gap-28 items-start">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:flex-1"
          >
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1]">
              Where Time Slows.<br />
              <span className="text-white/60">And Senses Wake.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full md:flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10 text-sm text-white/70 font-sans leading-relaxed pt-0 md:pt-4"
          >
            <p>
              Dining after dark is a ritual — a balance of mood, flavor, and light. Every detail moves like a scene: the cork's sigh, the candle's glow, the quiet drift of smoke.
            </p>
            <p>
              Each night is crafted to awaken the senses. Light and shadow, warmth and silence — forming a space that breathes after midnight.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
