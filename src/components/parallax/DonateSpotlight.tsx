
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Target, Sprout } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const DonateSpotlight = () => {
  const { language } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const sectionTop = sectionRef.current.offsetTop;
        const sectionHeight = sectionRef.current.offsetHeight;
        const scrolled = window.pageYOffset;
        
        setIsFixed(scrolled >= sectionTop && scrolled <= sectionTop + sectionHeight - window.innerHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen">
      {/* Fixed gradient background */}
      <div 
        className={`${isFixed ? 'fixed' : 'absolute'} inset-0 bg-gradient-to-br from-faverton-green via-faverton-green-dark to-faverton-earth-dark`}
        style={{ zIndex: isFixed ? 10 : 0 }}
      />
      
      {/* Content that pins into view */}
      <div className={`${isFixed ? 'fixed' : 'absolute'} inset-0 flex items-center justify-center`} style={{ zIndex: isFixed ? 20 : 10 }}>
        <div className="container mx-auto px-6 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <Heart className="h-20 w-20 mx-auto mb-8 text-faverton-green-light animate-pulse" />
            
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              {language === 'fr' ? 'Soutenez Notre Mission' : 'Support Our Mission'}
            </h2>
            
            <p className="text-xl md:text-2xl mb-12 opacity-90 leading-relaxed">
              {language === 'fr'
                ? 'Votre don contribue directement au développement de pratiques agricoles durables, à la formation de nouveaux agriculteurs et au soutien des artistes qui trouvent l\'inspiration dans notre ferme.'
                : 'Your donation directly contributes to the development of sustainable farming practices, training new farmers and supporting artists who find inspiration on our farm.'
              }
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <Sprout className="h-12 w-12 mx-auto mb-4 text-faverton-green-light" />
                <h3 className="text-xl font-bold mb-2">
                  {language === 'fr' ? 'Agriculture Durable' : 'Sustainable Agriculture'}
                </h3>
                <p className="opacity-80">
                  {language === 'fr' ? 'Développement de nouvelles techniques' : 'Development of new techniques'}
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <Target className="h-12 w-12 mx-auto mb-4 text-faverton-green-light" />
                <h3 className="text-xl font-bold mb-2">
                  {language === 'fr' ? 'Formation' : 'Training'}
                </h3>
                <p className="opacity-80">
                  {language === 'fr' ? 'Éducation des futurs agriculteurs' : 'Education of future farmers'}
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <Heart className="h-12 w-12 mx-auto mb-4 text-faverton-green-light" />
                <h3 className="text-xl font-bold mb-2">
                  {language === 'fr' ? 'Art & Culture' : 'Art & Culture'}
                </h3>
                <p className="opacity-80">
                  {language === 'fr' ? 'Soutien aux créateurs' : 'Support for creators'}
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                className="bg-white text-faverton-green-dark hover:bg-faverton-green-light hover:text-white text-lg px-8 py-4 rounded-full shadow-xl transition-all duration-300 hover:scale-105"
              >
                {language === 'fr' ? 'Faire un don unique' : 'Make a one-time donation'}
              </Button>
              
              <Button 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-faverton-green-dark text-lg px-8 py-4 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105"
              >
                {language === 'fr' ? 'Don mensuel' : 'Monthly donation'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateSpotlight;
