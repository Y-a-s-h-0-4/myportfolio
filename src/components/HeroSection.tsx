import React, { useEffect, useRef } from 'react';
import { ArrowDown, Download } from 'lucide-react';
import { Button } from './ui/button';

const HeroSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (arrowRef.current) observer.observe(arrowRef.current);
    if (buttonRef.current) observer.observe(buttonRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (arrowRef.current) observer.unobserve(arrowRef.current);
      if (buttonRef.current) observer.unobserve(buttonRef.current);
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
      {/* Background gradients - increased radius */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-neon-purple/10 rounded-full blur-[100px] animate-float-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[40rem] h-[40rem] bg-neon-teal/10 rounded-full blur-[100px] animate-float-slow" style={{ animationDelay: "-2s" }}></div>
        <div className="absolute top-1/3 right-1/3 w-[30rem] h-[30rem] bg-neon-pink/10 rounded-full blur-[100px] animate-float-slow" style={{ animationDelay: "-4s" }}></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 
          ref={titleRef}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 opacity-0 transition-opacity duration-1000 delay-300 tracking-tight leading-tight"
        >
          <span className="text-balance text-white font-light">i create </span> 
          <span className="gradient-text animate-glow font-extrabold">digital experiences</span>
          <span className="text-balance text-white font-light block mt-2">with code & creativity</span>
        </h1>
        
        <div 
          ref={arrowRef}
          className="opacity-0 transition-opacity duration-1000 delay-700 animate-float mt-12"
        >
          <a 
            href="#about" 
            className="inline-flex items-center justify-center w-12 h-12 mx-auto rounded-full border border-white/20 text-white hover-glow-teal hover-lift transition-all duration-300"
          >
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
      
      {/* Resume button - bottom right */}
      <div 
        ref={buttonRef}
        className="absolute bottom-12 right-12 z-20 opacity-0 transition-opacity duration-1000 delay-900"
      >
        <Button 
          variant="outline" 
          className="rounded-full px-6 py-6 glass-effect border border-neon-teal/30 hover:border-neon-teal hover:neon-shadow-teal hover-lift transition-all duration-300 group"
          onClick={() => window.open('https://drive.google.com/file/d/1pUHzWrbZiEc5EcYiMaxDw-ozsPoZDRj9/view?usp=sharing', '_blank')}
        >
          <span className="mr-2">Resume</span>
          <Download size={18} className="group-hover:translate-y-0.5 transition-transform duration-300" />
        </Button>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};

export default HeroSection;
