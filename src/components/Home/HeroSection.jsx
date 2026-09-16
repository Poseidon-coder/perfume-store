import React from 'react';

export default function LuxuryBanner() {
  return (
    <section className="relative w-full bg-[#080707] py-20 px-6 overflow-hidden flex flex-col items-center justify-center text-center border-y border-[#332a22]/50">
      
      {/* Background Gradient & Glow Effects */}
      <div className="absolute inset-0 bg-linear-to-r from-black via-[#14100c] to-black opacity-90 pointer-events-none" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto space-y-6">
        
        {/* Main Cursive / Calligraphy Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal text-[#d4af37] italic tracking-wide font-serif drop-shadow-sm">
          Experience the Essence of LUMIÈRE
        </h2>

        {/* Decorative Gold Line Divider */}
        <div className="flex items-center justify-center space-x-4 py-1">
          <div className="w-16 sm:w-24 h-px bg-linear-to-r from-transparent to-[#d4af37]/60" />
          <div className="w-1.5 h-1.5 rotate-45 bg-[#d4af37]" />
          <div className="w-16 sm:w-24 h-px bg-linear-to-l from-transparent to-[#d4af37]/60" />
        </div>

        {/* Subtitle / Tagline */}
        <p className="text-xs sm:text-sm tracking-[0.35em] text-[#c4b59d] uppercase font-sans font-light">
          EXQUISITE FRAGRANCES FOR THE MODERN CONNOISSEUR
        </p>

        {/* Outline CTA Button */}
        <div className="pt-4">
          <a
            href="#discover"
            className="inline-block px-10 py-3.5 border border-[#d4af37]/80 text-[#d4af37] font-sans text-xs tracking-[0.25em] font-medium hover:bg-[#d4af37] hover:text-[#080707] transition-all duration-300 shadow-lg shadow-[#d4af37]/5"
          >
            DISCOVER NOW
          </a>
        </div>

      </div>

      {/* Subtle Gold Line at Bottom Frame */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-[#d4af37]/40 to-transparent" />
    </section>
  );
}