import React, { useState } from 'react';
import { Search, Heart, ShoppingBag, User, ChevronDown, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('SHOP');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isBagOpen, setIsBagOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = ['HOME', 'SHOP', 'COLLECTIONS', 'BRANDS', 'ABOUT'];

  return (
    <header className="relative w-full bg-[#080707] border-b border-[#332a22]/50 font-sans select-none text-[#8c827a]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Left Side: Mobile Menu & Logo */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="md:hidden p-2 text-[#8c827a] hover:text-[#d4af37] transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <a href="#" className="flex flex-col items-center tracking-[0.25em] group">
            <span className="font-serif text-2xl font-light tracking-[0.2em] text-[#d4af37] transition-colors">
              LUMIÈRE
            </span>
            <span className="text-[9px] tracking-[0.45em] text-[#8c7b60] font-light -mt-1 pl-1">
              PARFUM
            </span>
          </a>
        </div>

        {/* Center Navigation Links */}
        <nav className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => setActiveNav(item)}
              className={`relative py-2 text-xs font-medium tracking-[0.2em] transition-colors duration-200 ${
                activeNav === item 
                  ? 'text-[#d4af37]' 
                  : 'text-[#8c827a] hover:text-[#d4af37]'
              }`}
            >
              {item}
              {activeNav === item && (
                <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#d4af37] transition-all duration-300" />
              )}
            </button>
          ))}
        </nav>

        {/* Right Side Icons */}
        <div className="flex items-center space-x-4 text-[#8c827a]">
          
          {/* Compact Inline Search */}
          <div className="relative flex items-center">
            {isSearchOpen ? (
              <div className="flex items-center border-b border-[#d4af37] pb-0.5 animate-fadeIn">
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="w-32 md:w-44 bg-transparent text-xs focus:outline-none text-[#e8e6e3] placeholder-[#6e655f] font-light px-1"
                  autoFocus
                />
                <button 
                  onClick={() => setIsSearchOpen(false)} 
                  className="p-1 text-[#6e655f] hover:text-[#d4af37] transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
            ) : (
              <button 
                onClick={() => setIsSearchOpen(true)} 
                className="p-1.5 hover:text-[#d4af37] transition-colors"
                title="Search"
              >
                <Search size={20} strokeWidth={1.5} />
              </button>
            )}
          </div>

          {/* Wishlist Button */}
          <button 
            className="p-1.5 hover:text-[#d4af37] transition-colors relative"
            title="Wishlist"
          >
            <Heart size={20} strokeWidth={1.5} />
          </button>

          {/* Shopping Bag Button */}
          <button 
            onClick={() => setIsBagOpen(!isBagOpen)}
            className="p-1.5 hover:text-[#d4af37] transition-colors relative"
            title="Shopping Bag"
          >
            <ShoppingBag size={20} strokeWidth={1.5} />
          </button>

          {/* User Account Dropdown */}
          <div className="relative group flex items-center gap-0.5 cursor-pointer pl-1">
            <button className="p-1.5 hover:text-[#d4af37] transition-colors flex items-center gap-1">
              <User size={20} strokeWidth={1.5} />
              <ChevronDown size={14} className="text-[#6e655f] group-hover:text-[#d4af37] transition-colors" />
            </button>

            <div className="absolute left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-0 top-full mt-0 w-48 bg-[#080707] border border-[#332a22]/50 shadow-2xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 rounded-sm">
              <a href="#profile" className="block px-4 py-2 text-xs text-[#8c827a] hover:bg-[#120f0c] hover:text-[#d4af37] transition-colors">My Profile</a>
              <a href="#orders" className="block px-4 py-2 text-xs text-[#8c827a] hover:bg-[#120f0c] hover:text-[#d4af37] transition-colors">Create Account</a>
              <a href="#settings" className="block px-4 py-2 text-xs text-[#8c827a] hover:bg-[#120f0c] hover:text-[#d4af37] transition-colors">Login Account</a>
              <div className="my-1 border-t border-[#332a22]/50"></div>
              <button className="w-full text-left px-4 py-2 text-xs text-red-400 hover:bg-[#1a0f0f] transition-colors">Sign Out</button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-[#332a22]/50 bg-[#080707] px-6 py-4 space-y-4 shadow-inner">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => {
                setActiveNav(item);
                setIsMobileMenuOpen(false);
              }}
              className={`block w-full text-left py-2 text-xs font-medium tracking-[0.2em] transition-colors ${
                activeNav === item ? 'text-[#d4af37] pl-2 border-l-2 border-[#d4af37]' : 'text-[#8c827a]'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;