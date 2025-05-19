
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Instagram, Facebook, Twitter } from 'lucide-react';

interface ArtisticGalleryProps {
  language: 'fr' | 'en';
}

type GalleryItem = {
  id: number;
  type: 'image' | 'video';
  src: string;
  thumb?: string;
  title: {
    fr: string;
    en: string;
  };
  artist: string;
  description: {
    fr: string;
    en: string;
  };
  category: 'visual' | 'performance' | 'workshop' | 'residency';
};

type ArtistProfile = {
  id: number;
  name: string;
  photo: string;
  bio: {
    fr: string;
    en: string;
  };
  website?: string;
  instagram?: string;
  work: string[];
};

const ArtisticGallery: React.FC<ArtisticGalleryProps> = ({ language }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1472396961693-142e6e269027',
      title: {
        fr: 'Communier avec la nature',
        en: 'Communing with Nature'
      },
      artist: 'Jean Forestier',
      description: {
        fr: 'Photographie réalisée lors d\'une résidence artistique en automne 2024.',
        en: 'Photograph taken during an artistic residency in autumn 2024.'
      },
      category: 'visual'
    },
    {
      id: 2,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901',
      title: {
        fr: 'Félinité',
        en: 'Felinity'
      },
      artist: 'Marie Lenoir',
      description: {
        fr: 'Exploration de la relation entre l\'homme et l\'animal à la ferme.',
        en: 'Exploration of the relationship between humans and animals on the farm.'
      },
      category: 'residency'
    },
    {
      id: 3,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742',
      title: {
        fr: 'Structures Écologiques',
        en: 'Ecological Structures'
      },
      artist: 'Collectif Bâtisseurs Verts',
      description: {
        fr: 'Projet d\'architecture durable intégré au paysage de la ferme.',
        en: 'Sustainable architecture project integrated into the farm landscape.'
      },
      category: 'workshop'
    },
    {
      id: 4,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1494891848038-7bd202a2afeb',
      title: {
        fr: 'Abstractions Rurales',
        en: 'Rural Abstractions'
      },
      artist: 'Paolo Martinez',
      description: {
        fr: 'Série photographique explorant les formes géométriques dans l\'environnement agricole.',
        en: 'Photographic series exploring geometric shapes in the agricultural environment.'
      },
      category: 'visual'
    },
    {
      id: 5,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1466442929976-97f336a657be',
      title: {
        fr: 'Héritage Architectural',
        en: 'Architectural Heritage'
      },
      artist: 'Sofia Kalthoum',
      description: {
        fr: 'Étude sur l\'intégration des structures traditionnelles dans un contexte éco-responsable.',
        en: 'Study on the integration of traditional structures in an eco-friendly context.'
      },
      category: 'performance'
    }
  ];
  
  const artists: ArtistProfile[] = [
    {
      id: 1,
      name: 'Jean Forestier',
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200',
      bio: {
        fr: 'Photographe naturaliste, Jean Forestier capture la beauté sauvage et la fragilité des écosystèmes. Sa démarche artistique vise à sensibiliser le public aux enjeux environnementaux à travers des images saisissantes.',
        en: 'As a naturalist photographer, Jean Forestier captures the wild beauty and fragility of ecosystems. His artistic approach aims to raise public awareness about environmental issues through striking images.'
      },
      instagram: 'jeanforestier',
      work: ['https://images.unsplash.com/photo-1472396961693-142e6e269027']
    },
    {
      id: 2,
      name: 'Marie Lenoir',
      photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200',
      bio: {
        fr: 'Artiste pluridisciplinaire, Marie Lenoir explore les relations entre les êtres vivants dans différents contextes. Son travail mêle photographie, installation et performance, avec un intérêt particulier pour les animaux domestiques.',
        en: 'As a multidisciplinary artist, Marie Lenoir explores the relationships between living beings in different contexts. Her work combines photography, installation, and performance, with a particular interest in domestic animals.'
      },
      website: 'www.marielenoir-art.fr',
      instagram: 'marielenoir.art',
      work: ['https://images.unsplash.com/photo-1582562124811-c09040d0a901']
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold">
            {language === 'fr' ? 'Galerie Artistique' : 'Art Gallery'}
          </h2>
          <p className="text-muted-foreground">
            {language === 'fr'
              ? 'Découvrez les œuvres créées à FAVERTON'
              : 'Discover artworks created at FAVERTON'}
          </p>
        </div>
        
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" onClick={() => setSelectedCategory('all')} 
            className={selectedCategory === 'all' ? 'bg-faverton-green text-white hover:bg-faverton-green hover:text-white' : ''}>
            {language === 'fr' ? 'Tous' : 'All'}
          </Button>
          <Button variant="outline" size="sm" onClick={() => setSelectedCategory('visual')}
            className={selectedCategory === 'visual' ? 'bg-faverton-green text-white hover:bg-faverton-green hover:text-white' : ''}>
            {language === 'fr' ? 'Arts Visuels' : 'Visual Arts'}
          </Button>
          <Button variant="outline" size="sm" onClick={() => setSelectedCategory('performance')}
            className={selectedCategory === 'performance' ? 'bg-faverton-green text-white hover:bg-faverton-green hover:text-white' : ''}>
            {language === 'fr' ? 'Performances' : 'Performances'}
          </Button>
          <Button variant="outline" size="sm" onClick={() => setSelectedCategory('workshop')}
            className={selectedCategory === 'workshop' ? 'bg-faverton-green text-white hover:bg-faverton-green hover:text-white' : ''}>
            {language === 'fr' ? 'Ateliers' : 'Workshops'}
          </Button>
        </div>
      </div>
      
      <Tabs defaultValue="gallery">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="gallery">
            {language === 'fr' ? 'Œuvres' : 'Artworks'}
          </TabsTrigger>
          <TabsTrigger value="artists">
            {language === 'fr' ? 'Artistes' : 'Artists'}
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="gallery" className="space-y-6">
          {/* Featured work in carousel */}
          <div className="py-6">
            <Carousel className="w-full">
              <CarouselContent>
                {galleryItems.slice(0, 3).map((item) => (
                  <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card className="overflow-hidden">
                        <CardContent className="p-0">
                          <AspectRatio ratio={4/3}>
                            <img
                              src={item.src}
                              alt={item.title[language]}
                              className="object-cover w-full h-full transition-all hover:scale-105"
                            />
                          </AspectRatio>
                          <div className="p-4">
                            <h3 className="font-semibold">{item.title[language]}</h3>
                            <p className="text-sm text-muted-foreground">{item.artist}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          
          {/* Gallery grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filteredItems.map((item) => (
              <Dialog key={item.id}>
                <DialogTrigger asChild>
                  <Card className="overflow-hidden cursor-pointer hover:shadow-md transition-shadow">
                    <CardContent className="p-0">
                      <AspectRatio ratio={1/1}>
                        <img
                          src={item.src}
                          alt={item.title[language]}
                          className="object-cover w-full h-full transition-all hover:scale-105"
                        />
                      </AspectRatio>
                      <div className="p-4">
                        <h3 className="font-medium">{item.title[language]}</h3>
                        <p className="text-sm text-muted-foreground">{item.artist}</p>
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-3xl">
                  <DialogHeader>
                    <DialogTitle>{item.title[language]}</DialogTitle>
                    <DialogDescription>{item.artist}</DialogDescription>
                  </DialogHeader>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="overflow-hidden rounded-md">
                      <img
                        src={item.src}
                        alt={item.title[language]}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <p className="mb-4">{item.description[language]}</p>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs px-2 py-1 rounded-full bg-faverton-green-light/20 text-faverton-green">
                          {language === 'fr' ? (
                            item.category === 'visual' ? 'Arts Visuels' : 
                            item.category === 'performance' ? 'Performance' : 
                            item.category === 'workshop' ? 'Atelier' : 
                            'Résidence'
                          ) : (
                            item.category === 'visual' ? 'Visual Arts' : 
                            item.category === 'performance' ? 'Performance' : 
                            item.category === 'workshop' ? 'Workshop' : 
                            'Residency'
                          )}
                        </span>
                        <div className="flex-1"></div>
                        <Button size="icon" variant="ghost">
                          <Instagram className="h-4 w-4" />
                        </Button>
                        <Button size="icon" variant="ghost">
                          <Facebook className="h-4 w-4" />
                        </Button>
                        <Button size="icon" variant="ghost">
                          <Twitter className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
          
          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                {language === 'fr'
                  ? 'Aucune œuvre ne correspond à cette catégorie pour le moment.'
                  : 'No artwork matches this category at the moment.'}
              </p>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="artists" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {artists.map((artist) => (
              <Card key={artist.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className="md:col-span-1">
                      <AspectRatio ratio={1/1}>
                        <img
                          src={artist.photo}
                          alt={artist.name}
                          className="object-cover w-full h-full"
                        />
                      </AspectRatio>
                    </div>
                    <div className="md:col-span-2 p-4">
                      <h3 className="font-semibold text-lg">{artist.name}</h3>
                      <p className="mt-2 text-sm">
                        {artist.bio[language]}
                      </p>
                      <div className="mt-4 flex items-center space-x-3">
                        {artist.website && (
                          <a href={`https://${artist.website}`} target="_blank" rel="noopener noreferrer" className="text-faverton-green hover:text-faverton-green-dark text-sm">
                            {language === 'fr' ? 'Site web' : 'Website'}
                          </a>
                        )}
                        {artist.instagram && (
                          <a href={`https://instagram.com/${artist.instagram}`} target="_blank" rel="noopener noreferrer" className="text-faverton-green hover:text-faverton-green-dark">
                            <Instagram className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {artist.work.length > 0 && (
                    <div className="p-4 bg-muted/50">
                      <h4 className="text-sm font-medium mb-2">
                        {language === 'fr' ? 'Œuvres à FAVERTON' : 'Works at FAVERTON'}
                      </h4>
                      <div className="grid grid-cols-3 gap-2">
                        {artist.work.map((work, index) => (
                          <img
                            key={index}
                            src={work}
                            alt={`${artist.name} - work ${index + 1}`}
                            className="w-full h-20 object-cover rounded-sm"
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="bg-faverton-green-light/10 rounded-lg p-6 text-center">
        <h3 className="text-xl font-semibold mb-2">
          {language === 'fr' ? 'Suivez-nous sur les réseaux sociaux' : 'Follow us on social media'}
        </h3>
        <p className="text-muted-foreground mb-4">
          {language === 'fr' 
            ? 'Découvrez nos dernières actualités artistiques et événements'
            : 'Discover our latest artistic news and events'}
        </p>
        <div className="flex justify-center space-x-4">
          <Button variant="outline" className="space-x-2">
            <Instagram className="h-5 w-5" />
            <span>Instagram</span>
          </Button>
          <Button variant="outline" className="space-x-2">
            <Facebook className="h-5 w-5" />
            <span>Facebook</span>
          </Button>
          <Button variant="outline" className="space-x-2">
            <Twitter className="h-5 w-5" />
            <span>Twitter</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ArtisticGallery;
