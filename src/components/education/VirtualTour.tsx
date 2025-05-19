
import React, { useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Button } from '@/components/ui/button';

const tourPoints = [
  {
    id: 1,
    name: "Sustainable Greenhouse",
    image: "https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    description: "Our state-of-the-art greenhouse uses passive solar design and rainwater collection to minimize resource use while maximizing plant growth.",
    highlight: "solar design"
  },
  {
    id: 2,
    name: "Solar Panel Array",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3",
    description: "Our farm is powered by a 50kW solar array that provides clean energy for all our operations, from irrigation to processing facilities.",
    highlight: "renewable energy"
  },
  {
    id: 3,
    name: "Water Collection System",
    image: "https://images.unsplash.com/photo-1567975253223-c7b0e37e02f1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    description: "Innovative rainwater harvesting systems collect, filter, and store water for irrigation, reducing our dependence on groundwater resources.",
    highlight: "water conservation"
  },
  {
    id: 4,
    name: "Composting Facility",
    image: "https://images.unsplash.com/photo-1591057773144-acb9f341df9c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    description: "Our large-scale composting operation converts farm waste into nutrient-rich soil amendments, completing the sustainability cycle.",
    highlight: "zero waste"
  },
  {
    id: 5,
    name: "Biodiversity Garden",
    image: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3",
    description: "Specially designed habitats support beneficial insects, birds, and other wildlife that contribute to the farm's ecological balance.",
    highlight: "biodiversity"
  }
];

const VirtualTour = () => {
  const [activePoint, setActivePoint] = useState(tourPoints[0]);

  return (
    <div className="bg-background rounded-lg p-6 shadow-sm">
      <h2 className="text-2xl font-bold mb-6">Virtual Tour of Our Green Farmhouse</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <div className="relative aspect-video bg-muted rounded-lg overflow-hidden mb-4">
            <img 
              src={activePoint.image} 
              alt={activePoint.name} 
              className="object-cover w-full h-full"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
              <h3 className="text-xl font-medium">{activePoint.name}</h3>
            </div>
          </div>
          
          <p className="text-muted-foreground mb-4">{activePoint.description}</p>
          
          <div className="flex justify-center gap-2 mt-4">
            <Button variant="outline" size="sm">View 360° Tour</Button>
            <Button size="sm">Download Tour Guide</Button>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-medium mb-4">Explore Key Areas</h3>
          <div className="space-y-3">
            {tourPoints.map((point) => (
              <HoverCard key={point.id}>
                <HoverCardTrigger asChild>
                  <button
                    onClick={() => setActivePoint(point)}
                    className={`w-full text-left p-3 rounded-md transition-colors ${
                      activePoint.id === point.id 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-accent hover:bg-accent/80'
                    }`}
                  >
                    {point.name}
                  </button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="flex justify-between space-x-4">
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">{point.name}</h4>
                      <p className="text-sm">
                        {point.description}
                      </p>
                      <div className="flex items-center pt-2">
                        <span className="rounded-full bg-secondary px-2 py-1 text-xs font-semibold">
                          {point.highlight}
                        </span>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-12">
        <h3 className="text-xl font-medium mb-4">Photo Gallery</h3>
        <Carousel className="w-full">
          <CarouselContent>
            {tourPoints.map((point) => (
              <CarouselItem key={point.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <div className="overflow-hidden rounded-md">
                    <img 
                      src={point.image} 
                      alt={point.name} 
                      className="h-60 w-full object-cover transition-all hover:scale-105"
                    />
                  </div>
                  <h4 className="font-medium pt-2">{point.name}</h4>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-1" />
          <CarouselNext className="right-1" />
        </Carousel>
      </div>
    </div>
  );
};

export default VirtualTour;
