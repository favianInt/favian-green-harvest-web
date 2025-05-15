
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

const products = [
  {
    id: 1,
    name: 'Fruits de Saison',
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcxNjI5MTg1Mw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
    description: 'Fruits biologiques frais cueillis à maturité pour une saveur optimale.',
  },
  {
    id: 2,
    name: 'Légumes Hydroponiques',
    image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcxNjI5MTkwNw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
    description: 'Légumes cultivés en système hydroponique pour un rendement optimal et une fraîcheur maximale.',
  },
  {
    id: 3,
    name: 'Produits d\'Élevage',
    image: 'https://images.unsplash.com/photo-1517022812141-23620dba5c23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcxNjI5MTk0MA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
    description: 'Produits issus d\'un élevage respectueux du bien-être animal et de la biodiversité.',
  }
];

const ProductPreview = () => {
  const productContainerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll('.card-3d-hover');
      
      cards.forEach((card) => {
        const rect = (card as HTMLElement).getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        (card as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
        (card as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
      });
    };
    
    const container = productContainerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);
  
  return (
    <section className="py-16 px-4 bg-favian-wood-light">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="section-title">Nos Produits Vedettes</h2>
          <p className="text-favian-earth-dark max-w-3xl mx-auto">
            Découvrez une sélection de nos produits biologiques, cultivés avec soin dans le respect de la nature et des saisons.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" ref={productContainerRef}>
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden bg-white border-none shadow-md card-3d-hover">
              <div className="h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <CardContent className="pt-6 card-content-3d">
                <h3 className="text-xl font-semibold text-favian-green-dark mb-2">{product.name}</h3>
                <p className="text-favian-earth-dark">{product.description}</p>
              </CardContent>
              <CardFooter className="card-content-3d">
                <Button asChild className="w-full bg-favian-green hover:bg-favian-green-dark text-white">
                  <Link to="/products">En savoir plus</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button asChild variant="outline" className="border-favian-green text-favian-green hover:bg-favian-green-light/20">
            <Link to="/products">Voir tous nos produits</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductPreview;
