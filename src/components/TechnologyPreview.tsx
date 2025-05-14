
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { SolarPanel, Wind, Droplet, Recycle } from 'lucide-react';

const TechnologyPreview = () => {
  const technologies = [
    {
      icon: SolarPanel,
      title: "Panneaux Solaires",
      description: "Systèmes photovoltaïques de dernière génération pour une autonomie énergétique.",
    },
    {
      icon: Wind,
      title: "Micro-éoliennes",
      description: "Solutions éoliennes adaptées aux petites exploitations et aux particuliers.",
    },
    {
      icon: Droplet,
      title: "Systèmes Hydroélectriques",
      description: "Technologies innovantes pour exploiter l'énergie hydraulique à petite échelle.",
    },
    {
      icon: Recycle,
      title: "Biogaz Domestique",
      description: "Unités de méthanisation pour transformer les déchets organiques en énergie.",
    }
  ];

  return (
    <section className="py-16 px-4 bg-favian-earth-light/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">Nos Technologies Vertes</h2>
          <p className="text-favian-earth-dark max-w-3xl mx-auto">
            FAVIAN développe et propose des solutions technologiques écologiques innovantes pour une agriculture plus durable et une transition énergétique accessible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-favian-green-light rounded-full flex items-center justify-center mb-4">
                <tech.icon className="h-8 w-8 text-favian-green-dark" />
              </div>
              <h3 className="text-xl font-semibold text-favian-green-dark mb-2">{tech.title}</h3>
              <p className="text-favian-earth-dark mb-4">{tech.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild className="bg-favian-green hover:bg-favian-green-dark text-white">
            <Link to="/green-tech">Explorer nos technologies</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TechnologyPreview;
