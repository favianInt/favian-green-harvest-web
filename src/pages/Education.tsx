
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import VirtualTour from '@/components/education/VirtualTour';
import KnowledgeCenter from '@/components/education/KnowledgeCenter';
import WebinarsEvents from '@/components/education/WebinarsEvents';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Education = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Educational Resources</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our virtual tour, knowledge center, and upcoming events to learn more about sustainable farming and eco-friendly technologies.
            </p>
          </div>
          
          <Tabs defaultValue="tour" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="tour">Virtual Tour</TabsTrigger>
              <TabsTrigger value="knowledge">Knowledge Center</TabsTrigger>
              <TabsTrigger value="webinars">Webinars & Events</TabsTrigger>
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
