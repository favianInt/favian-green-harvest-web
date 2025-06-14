
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const PreLanding = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      const moveX = (clientX - centerX) / 25;
      const moveY = (clientY - centerY) / 25;
      
      container.style.transform = `translate3d(0, 0, 0) rotateX(${-moveY}deg) rotateY(${moveX}deg)`;
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black">
      {/* Video Background */}
      <video 
        autoPlay 
        muted 
        loop 
        className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
      >
        <source src="https://cdn.coverr.co/videos/coverr-aerial-view-of-forest-2682/1080p.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
      
      {/* Content */}
      <div 
        ref={containerRef}
        className="absolute inset-0 flex flex-col items-center justify-center z-10 transition-transform duration-300 ease-out"
        style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
      >
        <div className="text-center p-8 max-w-3xl transform-gpu translate-z-20">
          <div className="mb-8 relative animate-bounce">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-green-600 opacity-75 blur rounded-full"></div>
            <div className="w-24 h-24 mx-auto bg-gradient-to-tr from-faverton-green to-faverton-earth rounded-full flex items-center justify-center shadow-2xl relative">
              <span className="text-white text-4xl font-bold">F</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white tracking-tight drop-shadow-lg">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-faverton-green-light via-white to-faverton-earth-light">
              FAVERTON
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-faverton-green-light drop-shadow-md">
            Découvrez l'avenir de l'agriculture biologique et des énergies renouvelables
          </p>
          
          <div className="mt-10 transform-gpu translate-z-20">
            <Button
              asChild
              className="bg-faverton-green hover:bg-faverton-green-dark text-white px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
            >
              <Link to="/welcome">
                Commencer l'expérience
                <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
          
          <div className="mt-16 space-y-4 transform-gpu translate-z-20">
            <p className="text-faverton-wood-light opacity-70">Agriculture Biologique • Énergies Renouvelables • Innovation Écologique</p>
          </div>
        </div>
      </div>
      
      {/* 3D Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-faverton-green/20 rounded-full blur-sm animate-float-slow"></div>
        <div className="absolute top-2/3 right-1/4 w-24 h-24 bg-faverton-earth/20 rounded-full blur-sm animate-float-medium"></div>
        <div className="absolute bottom-1/4 right-1/3 w-12 h-12 bg-faverton-wood/20 rounded-full blur-sm animate-float-fast"></div>
      </div>
    </div>
  );
};

export default PreLanding;
