
import React, { useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';

const AboutPreview = () => {
  const { language } = useLanguage();
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const shapeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const sectionTop = imageRef.current?.offsetTop || 0;
      const rate = (scrolled - sectionTop) * 0.3;
      
      if (imageRef.current) {
        imageRef.current.style.transform = `translateX(${-rate}px)`;
      }
      
      if (textRef.current) {
        textRef.current.style.transform = `translateX(${rate * 0.5}px)`;
      }
      
      if (shapeRef.current) {
        shapeRef.current.style.transform = `translateY(${rate * 0.8}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-24 overflow-hidden bg-gradient-to-r from-faverton-wood-light/20 to-faverton-earth-light/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Farm/team photo sliding in */}
          <div ref={imageRef} className="relative will-change-transform">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
                alt="FAVERTON Team"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-faverton-green/20 to-transparent" />
            </div>
          </div>
          
          {/* Right: Vision text with background shape */}
          <div ref={textRef} className="relative will-change-transform">
            <div
              ref={shapeRef}
              className="absolute -top-20 -left-20 w-40 h-40 bg-faverton-green-light/10 rounded-full will-change-transform"
            />
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-faverton-green-dark mb-8">
                {language === 'fr' ? 'Notre Vision' : 'Our Vision'}
              </h2>
              
              <div className="space-y-6 text-lg text-faverton-earth-dark leading-relaxed">
                <p>
                  {language === 'fr'
                    ? 'FAVERTON représente une nouvelle approche de l\'agriculture, où la durabilité environnementale, l\'innovation technologique et la créativité artistique convergent pour créer un écosystème unique.'
                    : 'FAVERTON represents a new approach to agriculture, where environmental sustainability, technological innovation and artistic creativity converge to create a unique ecosystem.'
                  }
                </p>
                
                <p>
                  {language === 'fr'
                    ? 'Notre ferme biologique certifiée va au-delà de la simple production alimentaire : elle devient un laboratoire vivant d\'expérimentation écologique, un centre de formation pour les futurs agriculteurs et un espace d\'inspiration pour les artistes.'
                    : 'Our certified organic farm goes beyond simple food production: it becomes a living laboratory for ecological experimentation, a training center for future farmers and a space of inspiration for artists.'
                  }
                </p>
                
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 mt-8">
                  <h3 className="font-semibold text-faverton-green-dark mb-3">
                    {language === 'fr' ? 'Nos Valeurs Fondamentales' : 'Our Core Values'}
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-faverton-green rounded-full mr-3" />
                      {language === 'fr' ? 'Agriculture biologique et régénératrice' : 'Organic and regenerative agriculture'}
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-faverton-green rounded-full mr-3" />
                      {language === 'fr' ? 'Innovation technologique responsable' : 'Responsible technological innovation'}
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-faverton-green rounded-full mr-3" />
                      {language === 'fr' ? 'Création artistique et expression culturelle' : 'Artistic creation and cultural expression'}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
