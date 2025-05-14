
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Calendar } from 'lucide-react';

const news = [
  {
    id: 1,
    title: "Ouverture de notre nouveau système hydroponique",
    date: "15 mai 2023",
    summary: "Nous avons inauguré notre nouveau système de culture hydroponique qui va nous permettre d'augmenter notre production de légumes verts.",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcxNjI5MTk2Mg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
  },
  {
    id: 2,
    title: "Atelier permaculture pour les écoles",
    date: "3 juin 2023",
    summary: "FAVIAN organise une série d'ateliers pour sensibiliser les écoliers aux principes de la permaculture et de l'agriculture durable.",
    image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcxNjI5MTk4Mw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
  }
];

const NewsSummary = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">Actualités & Événements</h2>
          <p className="text-favian-earth-dark max-w-3xl mx-auto">
            Restez informés des dernières nouvelles et des événements à venir à la ferme FAVIAN.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {news.map((item) => (
            <Card key={item.id} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
              <div className="h-52 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader className="pb-2">
                <div className="flex items-center text-favian-earth text-sm mb-2">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{item.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-favian-green-dark">{item.title}</h3>
              </CardHeader>
              <CardContent className="py-2">
                <p className="text-favian-earth-dark">{item.summary}</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full border-favian-green text-favian-green hover:bg-favian-green-light/20">
                  <Link to="/news">Lire la suite</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild className="bg-favian-green hover:bg-favian-green-dark text-white">
            <Link to="/news">Voir toutes les actualités</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSummary;
