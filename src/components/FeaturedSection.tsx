
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Leaf, Droplet, Sun, Recycle } from 'lucide-react';

const features = [
  {
    title: 'Agriculture Biologique',
    description: 'Nos méthodes de culture sont 100% biologiques, sans pesticides ni produits chimiques nocifs.',
    icon: Leaf,
  },
  {
    title: 'Gestion de l\'Eau',
    description: 'Optimisation de l\'usage de l\'eau grâce à des systèmes innovants de récupération et de distribution.',
    icon: Droplet,
  },
  {
    title: 'Énergie Renouvelable',
    description: 'Notre ferme fonctionne majoritairement à l\'énergie solaire, réduisant notre empreinte carbone.',
    icon: Sun,
  },
  {
    title: 'Zéro Déchet',
    description: 'Notre approche circulaire permet de valoriser tous nos déchets organiques en compost et énergie.',
    icon: Recycle,
  }
];

const FeaturedSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title">Notre Approche Écoresponsable</h2>
          <p className="text-favian-earth-dark">
            Chez FAVIAN, nous mettons en œuvre des pratiques agricoles respectueuses de l'environnement et innovantes pour produire des aliments sains tout en préservant notre planète.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-favian-green-light hover:shadow-md transition-all">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-favian-green-light flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-favian-green" />
                </div>
                <CardTitle className="text-favian-green">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-favian-earth-dark">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
