import React from 'react';

export default function LuxuryBanner() {
  return (
    <section className="relative w-full bg-[#080707] py-16 px-6 sm:px-12 lg:px-20 overflow-hidden border-y border-[#332a22]/50">
      
      {/* Background Gradient & Glow Effects */}
      <div className="absolute inset-0 bg-linear-to-r from-black via-[#14100c] to-black opacity-90 pointer-events-none" />
      <div className="absolute -top-24 left-1/4 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Grid: Left Banner + Right Information */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT SIDE: Luxury Callout Banner */}
        <div className="p-10 border border-[#332a22]/60 bg-[#0d0b0a] text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-[#d4af37]/40" />
          <div className="absolute bottom-0 right-3 w-6 h-6 border-b border-r border-[#d4af37]/40" />

          <img src="https://i.pinimg.com/736x/03/9e/8b/039e8b138c5d9294a0d637cf4986906a.jpg" alt="" />

        </div>

        {/* RIGHT SIDE: Information Content */}
        <div className="space-y-6 text-[#8c827a] font-serif pr-0 lg:pr-6">
          <span className="text-xs uppercase tracking-[0.35em] text-[#d4af37] font-sans block">
            - 1 - OUR PHILOSOPHY
          </span>

          <h3 className="text-2xl sm:text-3xl font-light text-[#e8e6e3] leading-snug tracking-wide">
            Mastery in Every Drop, Handcrafted in Paris
          </h3>

          <p className="text-sm font-sans font-light text-[#8c827a] leading-relaxed">
            Every LUMIÈRE fragrance is thoughtfully composed with carefully selected ingredients, refined accords, and a passion for timeless perfumery. Each scent is created to express individuality and leave a lasting impression.
          </p>

          <ul className="space-y-3 pt-2 font-sans text-xs tracking-wider text-[#a39990]">
            <li className="flex items-center space-x-3">
              <span className="w-1.5 h-1.5 rotate-45 bg-[#d4af37]" />
              <span>100% Sustainably Sourced Natural Ingredients</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="w-1.5 h-1.5 rotate-45 bg-[#d4af37]" />
              <span>Aged in French Oak Barrels for 6 Months</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="w-1.5 h-1.5 rotate-45 bg-[#d4af37]" />
              <span>Bespoke Hand-Blown Crystal Bottles</span>
            </li>
          </ul>
        </div>

      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-[#d4af37]/40 to-transparent" />
    </section>
  );
}