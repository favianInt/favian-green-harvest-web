
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ArtisticIntroSection from '@/components/artistic/ArtisticIntroSection';
import ArtisticBookingSection from '@/components/artistic/ArtisticBookingSection';
import ArtisticGallery from '@/components/artistic/ArtisticGallery';
import ArtisticCommunity from '@/components/artistic/ArtisticCommunity';
import { useLanguage } from '@/context/LanguageContext';

const ArtisticSpace = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold">
              {language === 'fr' ? 'Espace Artistique' : 'Artistic Space'}
            </h1>
          </div>
          
          <Tabs defaultValue="intro" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="intro">
                {language === 'fr' ? 'Introduction' : 'Introduction'}
              </TabsTrigger>
              <TabsTrigger value="booking">
                {language === 'fr' ? 'Réservations' : 'Booking'}
              </TabsTrigger>
              <TabsTrigger value="gallery">
                {language === 'fr' ? 'Galerie' : 'Gallery'}
              </TabsTrigger>
              <TabsTrigger value="community">
                {language === 'fr' ? 'Communauté' : 'Community'}
              </TabsTrigger>
            </TabsList>
            <TabsContent value="intro">
              <ArtisticIntroSection language={language} />
            </TabsContent>
            <TabsContent value="booking">
              <ArtisticBookingSection language={language} />
            </TabsContent>
            <TabsContent value="gallery">
              <ArtisticGallery language={language} />
            </TabsContent>
            <TabsContent value="community">
              <ArtisticCommunity language={language} />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ArtisticSpace;
