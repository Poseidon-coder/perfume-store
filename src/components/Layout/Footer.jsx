import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#080707] text-[#8c827a] text-sm py-16 font-serif border-t border-[#332a22]/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16 pb-16">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <a href="#" className="block">
              <h2 className="text-2xl font-light tracking-[0.25em] text-[#d4af37]">
                LUMIÈRE
              </h2>
              <p className="text-[10px] tracking-[0.35em] text-[#8c7b60] uppercase mt-1">
                  PARFUM
              </p>
            </a>
            <p className="text-xs text-[#6e655f] leading-relaxed pt-2">
              Artisanal perfumery,<br />
              Paris — Est. 1947
            </p>
          </div>

          {/* Column 1: COLLECTION */}
          <div className="space-y-4">
            <h3 className="text-[#d4af37] text-xs uppercase tracking-[0.3em] font-sans">
              COLLECTION
            </h3>
            <ul className="space-y-3 text-xs font-sans tracking-wide">
              <li><a href="#new-arrivals" className="hover:text-[#d4af37] transition-colors">New Arrivals</a></li>
              <li><a href="#bestsellers" className="hover:text-[#d4af37] transition-colors">Bestsellers</a></li>
              <li><a href="#limited-edition" className="hover:text-[#d4af37] transition-colors">Limited Edition</a></li>
              <li><a href="#gift-sets" className="hover:text-[#d4af37] transition-colors">Gift Sets</a></li>
              <li><a href="#candles" className="hover:text-[#d4af37] transition-colors">Candles</a></li>
            </ul>
          </div>

          {/* Column 2: HOUSE */}
          <div className="space-y-4">
            <h3 className="text-[#d4af37] text-xs uppercase tracking-[0.3em] font-sans">
              HOUSE
            </h3>
            <ul className="space-y-3 text-xs font-sans tracking-wide">
              <li><a href="#our-story" className="hover:text-[#d4af37] transition-colors">Our Story</a></li>
              <li><a href="#ateliers" className="hover:text-[#d4af37] transition-colors">Ateliers</a></li>
              <li><a href="#ingredients" className="hover:text-[#d4af37] transition-colors">Ingredients</a></li>
              <li><a href="#sustainability" className="hover:text-[#d4af37] transition-colors">Sustainability</a></li>
              <li><a href="#careers" className="hover:text-[#d4af37] transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Column 3: SERVICES */}
          <div className="space-y-4">
            <h3 className="text-[#d4af37] text-xs uppercase tracking-[0.3em] font-sans">
              SERVICES
            </h3>
            <ul className="space-y-3 text-xs font-sans tracking-wide">
              <li><a href="#bespoke" className="hover:text-[#d4af37] transition-colors">Bespoke Perfumery</a></li>
              <li><a href="#gifting" className="hover:text-[#d4af37] transition-colors">Gifting</a></li>
              <li><a href="#refill-program" className="hover:text-[#d4af37] transition-colors">Refill Program</a></li>
              <li><a href="#press" className="hover:text-[#d4af37] transition-colors">Press</a></li>
              <li><a href="#contact" className="hover:text-[#d4af37] transition-colors">Contact</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar Section (Added from image) */}
        <div className="pt-8 border-t border-[#332a22]/50 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] font-sans tracking-[0.25em] text-[#4a433d]">
          <p>© 2026 Maison Auræ. All rights reserved.</p>

          <div className="flex items-center space-x-8 uppercase">
            <a href="#privacy" className="hover:text-[#d4af37] transition-colors">PRIVACY</a>
            <a href="#terms" className="hover:text-[#d4af37] transition-colors">TERMS</a>
            <a href="#cookies" className="hover:text-[#d4af37] transition-colors">COOKIES</a>
          </div>
        </div>
      </div>
    </footer>
  );
}