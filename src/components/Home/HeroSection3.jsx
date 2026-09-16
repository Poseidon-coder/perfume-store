import React from 'react';

export default function LuxuryBanner() {
  return (
    <section className="relative w-full bg-[#080707] py-16 px-6 sm:px-12 lg:px-20 overflow-hidden border-y border-[#332a22]/50">
      
      {/* Background Gradient & Glow Effects */}
      <div className="absolute inset-0 bg-linear-to-r from-black via-[#14100c] to-black opacity-90 pointer-events-none" />
      <div className="absolute -top-24 left-1/4 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto space-y-12">
        
        {/* Title Section (Top) */}
        <div className="text-center space-y-4 max-w-3xl mx-auto font-serif">
          <span className="text-xs uppercase tracking-[0.35em] text-[#d4af37] font-sans block">
            - 2 - OUR BEST SELLING
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#e8e6e3] tracking-wide leading-tight">
            DEIOR COLLECT, Handcrafted in Paris
          </h2>
          <div className="flex items-center justify-center space-x-4 py-1">
            <div className="w-16 h-px bg-linear-to-r from-transparent to-[#d4af37]/60" />
            <div className="w-1.5 h-1.5 rotate-45 bg-[#d4af37]" />
            <div className="w-16 h-px bg-linear-to-l from-transparent to-[#d4af37]/60" />
          </div>
        </div>

        {/* Main Grid: Two Images Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Card 1 */}
          <div className="p-4 sm:p-6 border border-[#332a22]/60 bg-[#0d0b0a] shadow-2xl relative overflow-hidden group">
            <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-[#d4af37]/40 z-10" />
            <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-[#d4af37]/40 z-10" />

            <div className="overflow-hidden">
              <img 
                src="https://i.pinimg.com/1200x/b0/16/40/b016407e99debf0bdc0136d339751f44.jpg" 
                alt="Luxury Perfume Craftsmanship" 
                className="w-full h-100 object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-4 sm:p-6 border border-[#332a22]/60 bg-[#0d0b0a] shadow-2xl relative overflow-hidden group">
            <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-[#d4af37]/40 z-10" />
            <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-[#d4af37]/40 z-10" />

            <div className="overflow-hidden">
              <img 
                src="https://i.pinimg.com/1200x/5a/68/22/5a6822a5cec9d15a2a59755ca88f50da.jpg" 
                alt="Artisanal Fragrance Essence" 
                className="w-full h-100 object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

        </div>

        {/* Description Section (Underneath) */}
        <div className="max-w-3xl mx-auto text-center space-y-6 pt-4 font-sans">
          <p className="text-sm sm:text-base font-light text-[#8c827a] leading-relaxed">
            Every LUMIÈRE fragrance is thoughtfully composed with carefully selected ingredients, refined accords, and a passion for timeless perfumery. Each scent is created to express individuality, leaving a lingering impression of warmth and luxury.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-xs tracking-wider text-[#a39990]">
            <div className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rotate-45 bg-[#d4af37]" />
              <span>100% Sustainably Sourced Natural Ingredients</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rotate-45 bg-[#d4af37]" />
              <span>Aged in French Oak Barrels for 6 Months</span>
            </div>
          </div>
        </div>

      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-[#d4af37]/40 to-transparent" />
    </section>
  );
}