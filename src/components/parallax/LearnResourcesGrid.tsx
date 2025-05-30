
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Camera, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';

const LearnResourcesGrid = () => {
  const { language } = useLanguage();

  const resources = [
    {
      icon: BookOpen,
      title: language === 'fr' ? 'Guides Pratiques' : 'Practical Guides',
      description: language === 'fr' 
        ? 'Découvrez nos guides complets sur l\'agriculture biologique, la permaculture et les techniques durables.'
        : 'Discover our comprehensive guides on organic farming, permaculture and sustainable techniques.',
      link: '/education',
      color: 'from-faverton-green to-faverton-green-dark'
    },
    {
      icon: Camera,
      title: language === 'fr' ? 'Visite Virtuelle' : 'Virtual Tour',
      description: language === 'fr'
        ? 'Explorez notre ferme en 360° et découvrez nos installations innovantes depuis chez vous.'
        : 'Explore our farm in 360° and discover our innovative facilities from home.',
      link: '/education',
      color: 'from-faverton-earth to-faverton-earth-dark'
    },
    {
      icon: Users,
      title: language === 'fr' ? 'Webinaires' : 'Webinars',
      description: language === 'fr'
        ? 'Participez à nos sessions interactives avec des experts en agriculture durable et artistique.'
        : 'Participate in our interactive sessions with experts in sustainable and artistic agriculture.',
      link: '/education',
      color: 'from-faverton-wood to-faverton-wood-dark'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-faverton-green-light/10">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-faverton-green-dark">
          {language === 'fr' ? 'Apprendre & Découvrir' : 'Learn & Discover'}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <Card 
              key={index} 
              className="card-3d-hover group cursor-pointer border-none shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="card-content-3d">
                <CardHeader className="text-center pb-4">
                  <div className={`bg-gradient-to-br ${resource.color} rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <resource.icon className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-faverton-green-dark">
                    {resource.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="text-center">
                  <p className="text-faverton-earth-dark mb-8 leading-relaxed">
                    {resource.description}
                  </p>
                  
                  <Button 
                    asChild 
                    variant="outline" 
                    className="border-faverton-green text-faverton-green hover:bg-faverton-green hover:text-white transition-all duration-300"
                  >
                    <Link to={resource.link}>
                      {language === 'fr' ? 'En savoir plus' : 'Learn More'}
                    </Link>
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearnResourcesGrid;
