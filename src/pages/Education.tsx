
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import VirtualTour from '@/components/education/VirtualTour';
import KnowledgeCenter from '@/components/education/KnowledgeCenter';
import WebinarsEvents from '@/components/education/WebinarsEvents';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useLanguage } from '@/context/LanguageContext';

const Education = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{t('education.title')}</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('education.subtitle')}
            </p>
          </div>
          
          <Tabs defaultValue="tour" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="tour">{t('education.tabs.tour')}</TabsTrigger>
              <TabsTrigger value="knowledge">{t('education.tabs.knowledge')}</TabsTrigger>
              <TabsTrigger value="webinars">{t('education.tabs.webinars')}</TabsTrigger>
            </TabsList>
            <TabsContent value="tour">
              <VirtualTour />
            </TabsContent>
            <TabsContent value="knowledge">
              <KnowledgeCenter />
            </TabsContent>
            <TabsContent value="webinars">
              <WebinarsEvents />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Education;
