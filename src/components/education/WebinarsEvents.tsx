import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Video, Download } from 'lucide-react';

const upcomingEvents = [
  {
    id: 1,
    title: "Sustainable Water Management for Small Farms",
    date: "May 25, 2025",
    time: "10:00 - 11:30 AM",
    speaker: "Dr. Emma Rodriguez",
    description: "Learn practical water conservation techniques you can implement today. This webinar will cover rainwater harvesting, drip irrigation, and water recycling systems.",
    registrationUrl: "#"
  },
  {
    id: 2,
    title: "Solar Integration Workshop: From Basics to Advanced",
    date: "June 8, 2025",
    time: "2:00 - 4:00 PM",
    speaker: "Thomas Chen, Solar Engineer",
    description: "A comprehensive overview of solar technologies suitable for agricultural applications, including financing options and system sizing.",
    registrationUrl: "#"
  },
  {
    id: 3,
    title: "Building Healthy Soil: Composting Masterclass",
    date: "June 15, 2025",
    time: "1:00 - 2:30 PM",
    speaker: "Maria Sanchez, Soil Scientist",
    description: "Explore advanced composting techniques to transform farm waste into valuable soil amendments that improve crop yields and soil health.",
    registrationUrl: "#"
  }
];

const pastEvents = [
  {
    id: 101,
    title: "Biodiversity on Working Farms",
    date: "April 12, 2025",
    speaker: "Dr. James Wilson",
    description: "How to create habitats for beneficial insects, birds, and other wildlife while maintaining productive agricultural operations.",
    videoUrl: "#",
    thumbnail: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: 102,
    title: "Eco-Friendly Pest Management",
    date: "March 28, 2025",
    speaker: "Lin Wei, Organic Farming Expert",
    description: "Natural and sustainable approaches to managing common agricultural pests without synthetic chemicals.",
    videoUrl: "#",
    thumbnail: "https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: 103,
    title: "Green Building Design for Agricultural Structures",
    date: "March 15, 2025",
    speaker: "Carlos Mendez, Sustainable Architect",
    description: "Principles and practices for designing energy-efficient farm buildings that reduce operational costs and environmental impact.",
    videoUrl: "#",
    thumbnail: "https://images.unsplash.com/photo-1530126483408-aa533e55bdb2?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: 104,
    title: "Renewable Energy Systems for Farms",
    date: "February 22, 2025",
    speaker: "Dr. Sarah Johnson",
    description: "Comparing different renewable energy options for agricultural applications, including solar, wind, and biogas.",
    videoUrl: "#",
    thumbnail: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3"
  }
];

const WebinarsEvents = () => {
  return (
    <div className="bg-background rounded-lg p-6 shadow-sm">
      <h2 className="text-2xl font-bold mb-6">Webinars & Events</h2>
      
      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="upcoming">
            <Calendar className="mr-2 h-4 w-4" />
            Upcoming Events
          </TabsTrigger>
          <TabsTrigger value="past">
            <Video className="mr-2 h-4 w-4" />
            Past Event Recordings
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="upcoming">
          <div className="space-y-6">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="border rounded-lg p-5 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-bold text-lg">{event.title}</h3>
                    <p className="text-muted-foreground">with {event.speaker}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <Calendar className="h-4 w-4" />
                    <span>{event.date}, {event.time}</span>
                  </div>
                </div>
                
                <p className="mb-5 text-sm md:text-base">{event.description}</p>
                
                <div className="flex flex-col sm:flex-row gap-3 justify-end">
                  <Button variant="outline">Add to Calendar</Button>
                  <Button>Register Now</Button>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="past">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pastEvents.map((event) => (
              <div key={event.id} className="border rounded-lg overflow-hidden flex flex-col">
                <div className="aspect-video relative overflow-hidden bg-muted">
                  <img 
                    src={event.thumbnail} 
                    alt={event.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity hover:opacity-100 opacity-0">
                    <Button variant="secondary">
                      <Video className="mr-2 h-4 w-4" />
                      Watch Recording
                    </Button>
                  </div>
                </div>
                
                <div className="p-4 flex-grow">
                  <h3 className="font-semibold mb-1">{event.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {event.date} • {event.speaker}
                  </p>
                  <p className="text-sm">{event.description}</p>
                </div>
                
                <div className="p-4 border-t bg-muted/30">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Available to watch anytime</span>
                    <Button variant="ghost" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Slides
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default WebinarsEvents;
