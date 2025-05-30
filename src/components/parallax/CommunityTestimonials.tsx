
import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/context/LanguageContext';

const CommunityTestimonials = () => {
  const { language } = useLanguage();
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Marie Dubois',
      role: language === 'fr' ? 'Agricultrice Bio' : 'Organic Farmer',
      content: language === 'fr' 
        ? 'FAVERTON m\'a ouvert les yeux sur une nouvelle façon de concevoir l\'agriculture. L\'alliance entre tradition et innovation est remarquable.'
        : 'FAVERTON opened my eyes to a new way of thinking about agriculture. The alliance between tradition and innovation is remarkable.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Pierre Léonard',
      role: language === 'fr' ? 'Artiste Peintre' : 'Painter',
      content: language === 'fr'
        ? 'Travailler au cœur de cette ferme a transformé ma vision artistique. La nature devient ma plus grande source d\'inspiration.'
        : 'Working at the heart of this farm has transformed my artistic vision. Nature becomes my greatest source of inspiration.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Sophie Chen',
      role: language === 'fr' ? 'Chercheuse Environnementale' : 'Environmental Researcher',
      content: language === 'fr'
        ? 'Les pratiques durables de FAVERTON représentent l\'avenir de l\'agriculture. Un modèle à suivre absolument.'
        : 'FAVERTON\'s sustainable practices represent the future of agriculture. A model that must absolutely be followed.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const sectionTop = sliderRef.current?.offsetTop || 0;
      const rate = (scrolled - sectionTop) * 0.2;
      
      if (sliderRef.current) {
        sliderRef.current.style.transform = `translateX(${-rate}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-24 overflow-hidden bg-gradient-to-b from-faverton-green-light/10 to-faverton-earth-light/10">
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%2378A046" fill-opacity="0.1"%3E%3Cpath d="M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z"/%3E%3C/g%3E%3C/svg%3E")'
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-faverton-green-dark">
          {language === 'fr' ? 'Témoignages' : 'Testimonials'}
        </h2>
        
        <div 
          ref={sliderRef}
          className="flex space-x-8 will-change-transform"
          style={{ width: `${testimonials.length * 100}%` }}
        >
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className={`flex-shrink-0 w-96 transition-all duration-1000 ${
                index === currentIndex ? 'opacity-100 scale-105' : 'opacity-70'
              } shadow-xl hover:shadow-2xl`}
            >
              <CardContent className="p-8 text-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full mx-auto mb-6 object-cover"
                />
                
                <blockquote className="text-lg text-faverton-earth-dark mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                
                <div>
                  <h4 className="font-bold text-faverton-green-dark text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-faverton-earth">
                    {testimonial.role}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center mt-12 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-faverton-green scale-125' 
                  : 'bg-faverton-green/30 hover:bg-faverton-green/60'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityTestimonials;
