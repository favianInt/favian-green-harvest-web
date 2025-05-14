
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    id: 1,
    text: "Les produits de FAVIAN sont exceptionnels. On sent vraiment la différence dans le goût et la fraîcheur par rapport aux légumes conventionnels.",
    author: "Marie D., cliente fidèle"
  },
  {
    id: 2,
    text: "Leur approche de l'agriculture régénératrice est inspirante. J'ai appris beaucoup lors de leur atelier sur la permaculture.",
    author: "Thomas L., particulier"
  },
  {
    id: 3,
    text: "Nos clients sont ravis de la qualité et de la fraîcheur des fruits et légumes que nous nous procurons chez FAVIAN.",
    author: "Sophie M., restauratrice"
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-favian-green-light/20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">Ce que disent nos clients</h2>
          <p className="text-favian-earth-dark max-w-3xl mx-auto">
            La satisfaction de nos clients est notre priorité. Voici quelques témoignages de personnes qui apprécient notre travail et nos produits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white border-none shadow hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <svg className="h-8 w-8 text-favian-green mb-4" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14h-4c0-2.2 1.8-4 4-4V8zm18 0c-3.3 0-6 2.7-6 6v10h10V14h-4c0-2.2 1.8-4 4-4V8z" />
                </svg>
                <p className="mb-4 text-favian-earth-dark">{testimonial.text}</p>
                <p className="font-semibold text-favian-green">{testimonial.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
