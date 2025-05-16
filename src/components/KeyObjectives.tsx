
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Leaf, 
  Sun, 
  Home, 
  Music, 
  Users 
} from 'lucide-react';

const objectives = [
  {
    icon: Leaf,
    title: "Agriculture Biologique",
    description: "Produire des fruits, légumes et herbes biologiques de haute qualité.",
  },
  {
    icon: Sun,
    title: "Énergie Verte",
    description: "Développer et vendre des solutions d'énergie verte (panneaux solaires, micro-éoliennes, systèmes de biogaz).",
  },
  {
    icon: Home,
    title: "Construction Durable",
    description: "Promouvoir la construction durable via des services de rénovation et de reconstruction écologique.",
  },
  {
    icon: Music,
    title: "Culture & Tourisme",
    description: "Organiser des programmes culturels bimensuels pour promouvoir le tourisme éco-responsable.",
  },
  {
    icon: Users,
    title: "Coworking Écologique",
    description: "Créer un centre de coworking écologique pour les travailleurs locaux et les entrepreneurs.",
  }
];

const KeyObjectives = () => {
  return (
    <section className="py-16 px-4 bg-favian-wood-light/50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">Nos Objectifs Clés</h2>
          <p className="text-favian-earth-dark max-w-3xl mx-auto">
            FAVIAN s'engage à développer plusieurs axes d'action pour créer un impact positif sur l'environnement et la communauté locale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {objectives.map((objective, index) => (
            <Card key={index} className="border-none shadow-lg card-3d-hover">
              <CardContent className="p-6 card-content-3d">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-favian-green rounded-full flex items-center justify-center">
                    <objective.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-favian-green-dark">{objective.title}</h3>
                </div>
                <p className="text-favian-earth-dark">{objective.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyObjectives;
