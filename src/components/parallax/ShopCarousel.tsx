
import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';

const ShopCarousel = () => {
  const { language } = useLanguage();
  const carouselRef = useRef<HTMLDivElement>(null);

  const products = [
    {
      name: language === 'fr' ? 'Légumes Bio de Saison' : 'Seasonal Organic Vegetables',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
      price: '25€'
    },
    {
      name: language === 'fr' ? 'Miel Artisanal' : 'Artisanal Honey',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
      price: '15€'
    },
    {
      name: language === 'fr' ? 'Herbes Aromatiques' : 'Aromatic Herbs',
      image: 'https://images.unsplash.com/photo-1517022812141-23620dba5c23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
      price: '8€'
    },
    {
      name: language === 'fr' ? 'Fromages Fermiers' : 'Farm Cheese',
      image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
      price: '12€'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const sectionTop = carouselRef.current?.offsetTop || 0;
      const rate = (scrolled - sectionTop) * 0.5;
      
      if (carouselRef.current) {
        carouselRef.current.style.transform = `translateX(${-rate}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-24 overflow-hidden bg-gradient-to-r from-faverton-earth-light/20 to-faverton-wood-light/20">
      <div className="container mx-auto px-6 mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-faverton-green-dark">
          {language === 'fr' ? 'Nos Produits' : 'Our Products'}
        </h2>
        <p className="text-xl text-center mt-6 text-faverton-earth-dark">
          {language === 'fr' 
            ? 'Découvrez notre sélection de produits biologiques cultivés avec passion'
            : 'Discover our selection of organic products grown with passion'
          }
        </p>
      </div>
      
      <div 
        ref={carouselRef}
        className="flex space-x-8 will-change-transform"
        style={{ width: 'calc(100% + 400px)' }}
      >
        {products.concat(products).map((product, index) => (
          <Card 
            key={index} 
            className="flex-shrink-0 w-80 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <CardContent className="p-0">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-lg">{product.name}</h3>
                  <p className="text-2xl font-bold text-faverton-green-light">{product.price}</p>
                </div>
              </div>
              <div className="p-6">
                <Button 
                  asChild 
                  className="w-full bg-faverton-green hover:bg-faverton-green-dark text-white"
                >
                  <Link to="/products">
                    {language === 'fr' ? 'Voir tous les produits' : 'View All Products'}
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ShopCarousel;
