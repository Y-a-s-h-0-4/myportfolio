
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center pt-8 px-4">
      <nav
        className={cn(
          'max-w-4xl w-full rounded-3xl transition-all duration-500 py-4 px-10',
          scrolled 
            ? 'glass-effect shadow-lg' 
            : 'bg-transparent'
        )}
      >
        <div className="flex justify-center items-center">
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative px-3 py-1.5 text-sm font-medium text-gray-300 transition-all duration-300 hover:text-white group"
              >
                <span>{link.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-neon-purple to-neon-pink group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>
          
          {/* Mobile Navigation Toggle */}
          <button 
            className="md:hidden text-white focus:outline-none hover-lift"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="hover-glow-pink" /> : <Menu className="hover-glow-pink" />}
          </button>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 flex items-center justify-center">
          <div className="absolute inset-0 bg-background/90 backdrop-blur-md" onClick={() => setMobileMenuOpen(false)}></div>
          <div className="relative z-50 glass-effect rounded-2xl w-11/12 max-w-sm p-6 animate-fade-in">
            <div className="flex justify-end mb-4">
              <button onClick={() => setMobileMenuOpen(false)}>
                <X className="text-white hover:text-neon-pink transition-colors" />
              </button>
            </div>
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-4 py-3 text-center text-lg font-medium text-gray-300 hover:text-white hover:neon-text-purple rounded-xl hover:bg-white/5 transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
