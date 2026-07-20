import { motion } from 'framer-motion';
import reserveImg from '@assets/C5EFBEAC-38E1-4DFD-B626-8A5B02A88BBC_1784428828248.png';
import { Calendar, Clock, Users } from 'lucide-react';
import { openBooking } from '@/lib/booking';

export default function ReservationCTA() {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center justify-center py-24 md:py-0">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={reserveImg}
          alt="Kitchen flames"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-black/30 to-background/60 z-10" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-20 flex flex-col items-center w-full">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-16"
        >
          <div className="text-xs font-sans tracking-[0.3em] uppercase text-primary mb-4 md:mb-6">Join us tonight</div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[1.05]">Book A Table</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-4xl bg-background/40 backdrop-blur-xl border border-white/10 rounded-2xl p-4 md:p-6"
        >
          <form
            className="flex flex-col md:flex-row gap-3 md:gap-4 items-stretch md:items-center"
            onSubmit={(e) => { e.preventDefault(); openBooking(); }}
          >
            {/* Persons */}
            <div className="flex-1 relative">
              <div className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 text-white/50 pointer-events-none">
                <Users className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <select
                defaultValue="2"
                className="w-full h-12 md:h-14 pl-10 md:pl-12 pr-4 bg-white/5 border border-white/10 rounded-xl text-white text-sm appearance-none focus:outline-none focus:border-primary transition-colors cursor-pointer font-sans"
              >
                <option value="1">1 Person</option>
                <option value="2">2 Persons</option>
                <option value="3">3 Persons</option>
                <option value="4">4 Persons</option>
                <option value="5+">5+ Persons</option>
              </select>
            </div>

            {/* Date */}
            <div className="flex-1 relative">
              <div className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 text-white/50 pointer-events-none">
                <Calendar className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <input
                type="date"
                className="w-full h-12 md:h-14 pl-10 md:pl-12 pr-4 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-primary transition-colors font-sans"
                defaultValue={new Date().toISOString().split('T')[0]}
              />
            </div>

            {/* Time */}
            <div className="flex-1 relative">
              <div className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 text-white/50 pointer-events-none">
                <Clock className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <select
                defaultValue="20:30"
                className="w-full h-12 md:h-14 pl-10 md:pl-12 pr-4 bg-white/5 border border-white/10 rounded-xl text-white text-sm appearance-none focus:outline-none focus:border-primary transition-colors cursor-pointer font-sans"
              >
                <option value="19:00">19:00</option>
                <option value="19:30">19:30</option>
                <option value="20:00">20:00</option>
                <option value="20:30">20:30</option>
                <option value="21:00">21:00</option>
                <option value="21:30">21:30</option>
                <option value="22:00">22:00</option>
                <option value="22:30">22:30</option>
              </select>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full md:w-auto h-12 md:h-14 px-6 md:px-8 bg-primary hover:bg-primary/90 text-black font-sans text-xs uppercase tracking-[0.2em] rounded-xl flex items-center justify-center gap-3 transition-colors shrink-0 font-semibold"
            >
              <span>Book Table</span>
              <span>→</span>
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
