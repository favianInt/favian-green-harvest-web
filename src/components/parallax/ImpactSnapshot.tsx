
import React, { useEffect, useRef, useState } from 'react';
import { Leaf, Droplets, Users, GraduationCap } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const ImpactSnapshot = () => {
  const { language } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const metrics = [
    {
      icon: Leaf,
      value: '2.5T',
      label: language === 'fr' ? 'CO₂ économisé' : 'CO₂ Saved',
      delay: 0
    },
    {
      icon: Droplets,
      value: '50K L',
      label: language === 'fr' ? 'Eau préservée' : 'Water Saved',
      delay: 200
    },
    {
      icon: Users,
      value: '150+',
      label: language === 'fr' ? 'Artistes accueillis' : 'Artists Hosted',
      delay: 400
    },
    {
      icon: GraduationCap,
      value: '300+',
      label: language === 'fr' ? 'Agriculteurs formés' : 'Farmers Trained',
      delay: 600
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-faverton-green-light/10 to-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-faverton-green-dark">
          {language === 'fr' ? 'Notre Impact' : 'Our Impact'}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={`text-center transform transition-all duration-1000 ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${metric.delay}ms` }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-faverton-green-light/20">
                <div className="bg-faverton-green-light/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <metric.icon className="h-10 w-10 text-faverton-green" />
                </div>
                <h3 className="text-4xl font-bold text-faverton-green-dark mb-2">
                  {metric.value}
                </h3>
                <p className="text-faverton-earth-dark font-medium">
                  {metric.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSnapshot;
