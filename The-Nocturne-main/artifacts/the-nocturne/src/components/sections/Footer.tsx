import { Instagram, Twitter, MapPin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-background border-t border-border pt-16 md:pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-12 md:mb-16">

          <div className="sm:col-span-2 space-y-4 md:space-y-6">
            <h3 className="font-serif text-2xl md:text-3xl tracking-wide uppercase">The Nocturne</h3>
            <p className="font-sans text-white/50 text-sm max-w-sm leading-relaxed">
              An immersive dining experience crafted exclusively for the nocturnal. Where time slows, senses wake, and the night belongs to you.
            </p>
          </div>

          <div className="space-y-4 md:space-y-6">
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-white/80">Location</h4>
            <div className="space-y-3 md:space-y-4 font-sans text-sm text-white/50">
              <a href="#" className="flex items-start gap-3 hover:text-primary transition-colors">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>143rd Avenue,<br />London, E1 7AW</span>
              </a>
              <a href="tel:+442071234567" className="flex items-center gap-3 hover:text-primary transition-colors">
                <Phone className="w-4 h-4 shrink-0" />
                <span>+44 20 7123 4567</span>
              </a>
              <a href="mailto:reserve@thenocturne.com" className="flex items-center gap-3 hover:text-primary transition-colors">
                <Mail className="w-4 h-4 shrink-0" />
                <span>reserve@thenocturne.com</span>
              </a>
            </div>
          </div>

          <div className="space-y-4 md:space-y-6">
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-white/80">Hours</h4>
            <div className="space-y-2 font-sans text-sm text-white/50">
              <div className="flex justify-between gap-4">
                <span>Mon – Wed</span>
                <span>Closed</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>Thu – Sun</span>
                <span>19:00 – 02:00</span>
              </div>
              <div className="pt-4 mt-4 border-t border-white/10">
                <div className="text-xs">Kitchen closes at midnight.</div>
              </div>
            </div>
          </div>

        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-8 border-t border-white/10">
          <div className="font-sans text-xs text-white/40">
            &copy; {new Date().getFullYear()} The Nocturne. All rights reserved.
          </div>

          <div className="flex gap-6">
            <a href="#" className="text-white/40 hover:text-primary transition-colors text-xs uppercase tracking-widest font-sans">Privacy</a>
            <a href="#" className="text-white/40 hover:text-primary transition-colors text-xs uppercase tracking-widest font-sans">Terms</a>
          </div>

          <div className="flex gap-3">
            <a href="#" aria-label="Instagram" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-primary hover:border-primary transition-all">
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <a href="#" aria-label="Twitter" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-primary hover:border-primary transition-all">
              <Twitter className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
