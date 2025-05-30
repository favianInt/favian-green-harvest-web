
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';

const ParallaxHero = () => {
  const { t, language } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      
      if (videoRef.current) {
        videoRef.current.style.transform = `translate3d(0, ${rate}px, 0) scale(1.1)`;
      }
      
      if (overlayRef.current) {
        overlayRef.current.style.transform = `translate3d(0, ${scrolled * 0.3}px, 0)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Layer 1: Slow-zoom video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover will-change-transform"
        style={{ transform: 'scale(1.1)' }}
      >
        <source src="https://cdn.coverr.co/videos/coverr-greenhouse-farming-7685/1080p.mp4" type="video/mp4" />
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1472396961693-142e6e269027?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcxNjI5MTY4NA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080")'
          }}
        />
      </video>
      
      {/* Layer 2: Semi-transparent overlay */}
      <div 
        ref={overlayRef}
        className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 flex items-center justify-center will-change-transform"
      >
        <div className="container mx-auto px-6 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            {language === 'fr' ? 'Un laboratoire vivant' : 'A Living Laboratory'}
            <br />
            <span className="text-faverton-green-light">
              {language === 'fr' ? 'où nature et art se rencontrent' : 'where nature and art meet'}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto opacity-90">
            {language === 'fr' 
              ? 'Découvrez FAVERTON, une ferme biologique révolutionnaire qui unit agriculture durable, innovation écologique et création artistique pour construire un avenir plus vert.'
              : 'Discover FAVERTON, a revolutionary organic farm that unites sustainable agriculture, ecological innovation and artistic creation to build a greener future.'
            }
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              asChild 
              className="bg-faverton-green hover:bg-faverton-green-dark text-white text-lg px-8 py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
            >
              <Link to="/education">
                {language === 'fr' ? 'En savoir plus' : 'Learn More'}
              </Link>
            </Button>
            
            <Button 
              asChild 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-faverton-green-dark text-lg px-8 py-4 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              <Link to="#donate">
                {language === 'fr' ? 'Faire un don' : 'Donate'}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParallaxHero;
