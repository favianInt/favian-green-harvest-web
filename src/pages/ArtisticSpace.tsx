
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ArtisticIntroSection from '@/components/artistic/ArtisticIntroSection';
import ArtisticBookingSection from '@/components/artistic/ArtisticBookingSection';
import ArtisticGallery from '@/components/artistic/ArtisticGallery';
import ArtisticCommunity from '@/components/artistic/ArtisticCommunity';

const ArtisticSpace = () => {
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold">
              {language === 'fr' ? 'Espace Artistique' : 'Artistic Space'}
            </h1>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setLanguage('fr')}
                className={`px-3 py-1 rounded-md ${
                  language === 'fr' 
                    ? 'bg-faverton-green text-white' 
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                FR
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-md ${
                  language === 'en' 
                    ? 'bg-faverton-green text-white' 
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                EN
              </button>
            </div>
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
