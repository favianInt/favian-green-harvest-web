
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';

const ArtisticHighlight = () => {
  const { language } = useLanguage();
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const sectionTop = backgroundRef.current?.offsetTop || 0;
      const rate = (scrolled - sectionTop) * -0.3;
      
      if (backgroundRef.current) {
        backgroundRef.current.style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background with slow vertical scroll */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 will-change-transform"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1472396961693-142e6e269027?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-faverton-green-dark/80 via-faverton-green/60 to-transparent" />
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl">
          <div className="bg-white/90 backdrop-blur-md rounded-3xl p-12 shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-faverton-green-dark mb-6">
              {language === 'fr' ? 'Espace Artistique' : 'Artistic Space'}
            </h2>
            
            <p className="text-lg text-faverton-earth-dark mb-8 leading-relaxed">
              {language === 'fr'
                ? 'Plongez dans un univers où la créativité fleurit au cœur de la nature. Notre espace artistique offre aux créateurs de tous horizons un lieu d\'inspiration unique, où l\'art et l\'agriculture biologique se nourrissent mutuellement pour donner naissance à des œuvres extraordinaires.'
                : 'Dive into a universe where creativity flourishes at the heart of nature. Our artistic space offers creators from all backgrounds a unique place of inspiration, where art and organic agriculture nourish each other to give birth to extraordinary works.'
              }
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-faverton-green rounded-full mr-4" />
                <span className="text-faverton-earth-dark">
                  {language === 'fr' ? 'Ateliers créatifs en plein air' : 'Outdoor creative workshops'}
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-faverton-green rounded-full mr-4" />
                <span className="text-faverton-earth-dark">
                  {language === 'fr' ? 'Résidences d\'artistes saisonnières' : 'Seasonal artist residencies'}
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-faverton-green rounded-full mr-4" />
                <span className="text-faverton-earth-dark">
                  {language === 'fr' ? 'Collaborations art-agriculture' : 'Art-agriculture collaborations'}
                </span>
              </div>
            </div>
            
            <Button 
              asChild 
              className="bg-faverton-green hover:bg-faverton-green-dark text-white text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Link to="/artistic">
                {language === 'fr' ? 'Réservez un atelier' : 'Book a Workshop'}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtisticHighlight;
