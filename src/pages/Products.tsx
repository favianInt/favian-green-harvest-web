
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Apple, Carrot, Leaf } from "lucide-react";

const Products = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-display font-medium text-favian-green-dark text-center mb-6">Nos Produits</h1>
          <p className="text-center text-favian-earth-dark max-w-2xl mx-auto text-lg">
            Découvrez notre gamme de produits biologiques issus de pratiques agricoles durables et respectueuses de l'environnement.
          </p>
        </div>
      </div>
      <main className="flex-grow container mx-auto px-4 py-12 bg-white">
        <Tabs defaultValue="fruits" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-white border-b border-favian-green-light/30 w-full md:w-auto overflow-x-auto">
              <TabsTrigger value="fruits" className="data-[state=active]:text-favian-green data-[state=active]:border-b-2 data-[state=active]:border-favian-green data-[state=active]:bg-transparent text-base px-6">
                Fruits
              </TabsTrigger>
              <TabsTrigger value="vegetables" className="data-[state=active]:text-favian-green data-[state=active]:border-b-2 data-[state=active]:border-favian-green data-[state=active]:bg-transparent text-base px-6">
                Légumes
              </TabsTrigger>
              <TabsTrigger value="herbs" className="data-[state=active]:text-favian-green data-[state=active]:border-b-2 data-[state=active]:border-favian-green data-[state=active]:bg-transparent text-base px-6">
                Herbes Aromatiques
              </TabsTrigger>
              <TabsTrigger value="animal" className="data-[state=active]:text-favian-green data-[state=active]:border-b-2 data-[state=active]:border-favian-green data-[state=active]:bg-transparent text-base px-6">
                Produits d'Élevage
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="fruits" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProductCard
                title="Pommes Biologiques"
                description="Nos pommes sont cultivées sans pesticides. Riches en saveur et en nutriments, elles sont disponibles en plusieurs variétés selon la saison."
                icon={<Apple className="h-6 w-6 text-favian-green" />}
                image="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcxNjI5MTg1Mw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
              />
              <ProductCard
                title="Sous-produits de Pommes"
                description="Nous valorisons chaque partie de nos fruits. Découvrez notre gamme de jus frais, compotes et cidres artisanaux."
                icon={<Apple className="h-6 w-6 text-favian-green" />}
              />
              <ProductCard
                title="Fruits Rouges"
                description="Fraises, framboises et mûres cultivées en agroforesterie pour un goût incomparable et une richesse nutritionnelle maximale."
                icon={<Apple className="h-6 w-6 text-favian-green" />}
              />
              <ProductCard
                title="Fruits à Noyau"
                description="Pêches, prunes et cerises selon les saisons, toutes issues de variétés anciennes sélectionnées pour leur goût."
                icon={<Apple className="h-6 w-6 text-favian-green" />}
              />
            </div>
          </TabsContent>
          
          <TabsContent value="vegetables" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProductCard
                title="Légumes Hydroponiques"
                description="Notre système hydroponique produit des légumes-feuilles tout au long de l'année, avec une consommation d'eau réduite de 90%."
                icon={<Leaf className="h-6 w-6 text-favian-green" />}
                image="https://images.unsplash.com/photo-1518495973542-4542c06a5843?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcxNjI5MTkwNw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
              />
              <ProductCard
                title="Légumes Aquaponiques"
                description="Notre système aquaponique allie culture de poissons et de légumes pour un écosystème circulaire qui optimise les ressources."
                icon={<Leaf className="h-6 w-6 text-favian-green" />}
              />
              <ProductCard
                title="Légumes-Racines"
                description="Carottes, betteraves, navets... Nos légumes-racines poussent dans un sol vivant et riche en micro-organismes."
                icon={<Carrot className="h-6 w-6 text-favian-green" />}
              />
              <ProductCard
                title="Légumes de Saison"
                description="Tomates, courgettes, aubergines... Nous suivons le rythme des saisons pour vous offrir des légumes au meilleur de leur saveur."
                icon={<Carrot className="h-6 w-6 text-favian-green" />}
              />
            </div>
          </TabsContent>
          
          <TabsContent value="herbs" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProductCard
                title="Herbes Aromatiques Fraîches"
                description="Basilic, persil, ciboulette... Nos herbes aromatiques sont cultivées sans pesticides et récoltées à la demande."
                icon={<Leaf className="h-6 w-6 text-favian-green" />}
              />
              <ProductCard
                title="Herbes Médicinales"
                description="Nous cultivons diverses plantes aux propriétés médicinales traditionnelles, dans le respect de pratiques ancestrales."
                icon={<Leaf className="h-6 w-6 text-favian-green" />}
              />
            </div>
          </TabsContent>
          
          <TabsContent value="animal" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProductCard
                title="Œufs Biologiques"
                description="Nos poules vivent en liberté et sont nourries avec des céréales biologiques pour des œufs de qualité supérieure."
                icon={<Apple className="h-6 w-6 text-favian-green" />}
                image="https://images.unsplash.com/photo-1517022812141-23620dba5c23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcxNjI5MTk0MA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
              />
              <ProductCard
                title="Produits Laitiers"
                description="Fromage, yaourt et lait produits à partir du lait de nos chèvres et brebis élevées selon des méthodes traditionnelles et éthiques."
                icon={<Apple className="h-6 w-6 text-favian-green" />}
              />
            </div>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

interface ProductCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image?: string;
}

const ProductCard = ({ title, description, icon, image }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden border-none bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
      {image && (
        <div className="relative">
          <AspectRatio ratio={16/9}>
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover"
            />
          </AspectRatio>
        </div>
      )}
      <CardContent className={`${image ? 'pt-6' : 'pt-8'} p-6`}>
        <div className="flex items-center mb-4">
          <div className="bg-white border border-favian-green-light p-2 rounded-full mr-3">
            {icon}
          </div>
          <h3 className="text-xl font-medium text-favian-green-dark">{title}</h3>
        </div>
        <p className="text-favian-earth-dark text-sm leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};

export default Products;
