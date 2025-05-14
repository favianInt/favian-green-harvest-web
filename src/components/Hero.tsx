
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-favian-green-light/80 to-transparent min-h-[70vh] flex flex-col justify-center">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1472396961693-142e6e269027?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcxNjI5MTY4NA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080")',
          opacity: 0.3,
        }}
      />
      <div className="container mx-auto px-6 py-16 relative z-10 animate-fade-in">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-favian-green-dark mb-6">
            Bienvenue à <span className="text-favian-green">FAVIAN</span>
          </h1>
          <p className="text-xl md:text-2xl text-favian-earth-dark mb-8">
            Une ferme biologique certifiée où innovation écologique et respect de la nature se rencontrent pour un avenir durable.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="bg-favian-green hover:bg-favian-green-dark text-white">
              <Link to="/products">Découvrir nos produits</Link>
            </Button>
            <Button asChild variant="outline" className="border-favian-green text-favian-green hover:bg-favian-green-light/20">
              <Link to="/contact">Nous contacter</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
