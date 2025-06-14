
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { ChromeGrid } from '@/components/ui/chrome-grid';

const PreLanding = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      const moveX = (clientX - centerX) / 50;
      const moveY = (clientY - centerY) / 50;
      
      container.style.transform = `translate3d(0, 0, 0) rotateX(${-moveY}deg) rotateY(${moveX}deg)`;
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* 3D Chrome Grid Background */}
      <div className="absolute inset-0 z-0">
        <ChromeGrid />
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
      
      {/* Content */}
      <div 
        ref={containerRef}
        className="absolute inset-0 flex flex-col items-center justify-center z-20 transition-transform duration-300 ease-out"
        style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
      >
        <div className="text-center p-8 max-w-3xl transform-gpu translate-z-20">
          {/* Logo/Brand */}
          <div className="mb-8 relative animate-bounce">
            <div className="absolute -inset-1 bg-gradient-to-r from-faverton-green-light to-faverton-green opacity-75 blur rounded-full"></div>
            <div className="w-24 h-24 mx-auto bg-gradient-to-tr from-faverton-green to-faverton-earth rounded-full flex items-center justify-center shadow-2xl relative">
              <span className="text-white text-4xl font-bold">F</span>
            </div>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white tracking-tight drop-shadow-2xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-faverton-green-light via-white to-faverton-earth-light">
              FAVERTON
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-faverton-green-light drop-shadow-md font-light">
            Un laboratoire vivant où l'art rencontre l'agriculture durable
          </p>
          
          {/* CTA Button */}
          <div className="mt-10 transform-gpu translate-z-20">
            <Button
              asChild
              className="bg-faverton-green hover:bg-faverton-green-dark text-white px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group backdrop-blur-sm"
            >
              <Link to="/welcome">
                Commencer l'expérience
                <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
          
          {/* Tagline */}
          <div className="mt-16 space-y-4 transform-gpu translate-z-20">
            <p className="text-white/60 opacity-70 font-mono text-sm tracking-wide">
              Agriculture Biologique • Énergies Renouvelables • Innovation Écologique
            </p>
            <p className="text-white/40 text-xs font-mono">
              Explorez notre grille interactive ci-dessus
            </p>
          </div>
        </div>
      </div>
      
      {/* Floating Elements for depth */}
      <div className="absolute inset-0 pointer-events-none z-15">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-faverton-green/30 rounded-full blur-sm animate-float-slow"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-faverton-earth/30 rounded-full blur-sm animate-float-medium"></div>
        <div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-faverton-wood/30 rounded-full blur-sm animate-float-fast"></div>
      </div>
    </div>
  );
};

export default PreLanding;
