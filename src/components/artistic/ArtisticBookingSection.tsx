
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar as CalendarIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Textarea } from '@/components/ui/textarea';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { format } from 'date-fns';
import { fr, enUS } from 'date-fns/locale';

interface ArtisticBookingSectionProps {
  language: 'fr' | 'en';
}

type EventType = {
  id: number;
  title: {
    fr: string;
    en: string;
  };
  date: Date;
  type: 'workshop' | 'exhibition' | 'performance' | 'residency';
  status: 'upcoming' | 'ongoing' | 'past';
};

const ArtisticBookingSection: React.FC<ArtisticBookingSectionProps> = ({ language }) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  
  // Sample events
  const events: EventType[] = [
    {
      id: 1,
      title: {
        fr: "Atelier Peinture Naturelle",
        en: "Natural Paint Workshop"
      },
      date: new Date(2025, 5, 25),
      type: 'workshop',
      status: 'upcoming'
    },
    {
      id: 2,
      title: {
        fr: "Exposition 'Nature Réinventée'",
        en: "Exhibition 'Reinvented Nature'"
      },
      date: new Date(2025, 6, 10),
      type: 'exhibition',
      status: 'upcoming'
    },
    {
      id: 3,
      title: {
        fr: "Concert Acoustique en Plein Air",
        en: "Outdoor Acoustic Concert"
      },
      date: new Date(2025, 7, 5),
      type: 'performance',
      status: 'upcoming'
    },
    {
      id: 4,
      title: {
        fr: "Résidence d'Artiste - Marie Dupont",
        en: "Artist Residency - Marie Dupont"
      },
      date: new Date(2025, 8, 1),
      type: 'residency',
      status: 'upcoming'
    },
  ];
  
  // Form state
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    projectType: '',
    projectDescription: '',
    startDate: undefined as Date | undefined,
    endDate: undefined as Date | undefined
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
    // Here you'd normally send this data to a backend
    alert(language === 'fr' 
      ? 'Votre demande a été soumise avec succès !' 
      : 'Your request has been successfully submitted!');
  };

  return (
    <div className="space-y-8">
      <Tabs defaultValue="calendar">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="calendar">
            {language === 'fr' ? 'Calendrier d\'événements' : 'Event Calendar'}
          </TabsTrigger>
          <TabsTrigger value="application">
            {language === 'fr' ? 'Proposer un projet' : 'Propose a Project'}
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="calendar" className="space-y-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-6">
              {language === 'fr' ? 'Événements à venir' : 'Upcoming Events'}
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-muted rounded-lg p-4">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  locale={language === 'fr' ? fr : enUS}
                  className="rounded-md border"
                />
              </div>
              
              <div className="space-y-4">
                <h4 className="font-medium">
                  {selectedDate ? (
                    <>
                      {language === 'fr' 
                        ? `Événements pour ${format(selectedDate, 'PPP', { locale: fr })}` 
                        : `Events for ${format(selectedDate, 'PPP', { locale: enUS })}`}
                    </>
                  ) : (
                    language === 'fr' ? 'Sélectionnez une date' : 'Select a date'
                  )}
                </h4>
                
                <div className="space-y-3">
                  {events
                    .filter(event => selectedDate && 
                      event.date.getDate() === selectedDate.getDate() && 
                      event.date.getMonth() === selectedDate.getMonth() && 
                      event.date.getFullYear() === selectedDate.getFullYear()
                    )
                    .map(event => (
                      <Card key={event.id}>
                        <CardContent className="p-4">
                          <div className="flex justify-between">
                            <div>
                              <h5 className="font-medium">{event.title[language]}</h5>
                              <p className="text-sm text-muted-foreground">
                                {format(event.date, language === 'fr' ? 'HH:mm' : 'h:mm a')}
                              </p>
                            </div>
                            <span className="text-xs px-2 py-1 rounded-full bg-faverton-green-light/20 text-faverton-green">
                              {language === 'fr' ? (
                                event.type === 'workshop' ? 'Atelier' : 
                                event.type === 'exhibition' ? 'Exposition' : 
                                event.type === 'performance' ? 'Spectacle' : 
                                'Résidence'
                              ) : (
                                event.type === 'workshop' ? 'Workshop' : 
                                event.type === 'exhibition' ? 'Exhibition' : 
                                event.type === 'performance' ? 'Performance' : 
                                'Residency'
                              )}
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                    
                  {selectedDate && events.filter(event => 
                    event.date.getDate() === selectedDate.getDate() && 
                    event.date.getMonth() === selectedDate.getMonth() && 
                    event.date.getFullYear() === selectedDate.getFullYear()
                  ).length === 0 && (
                    <p className="text-muted-foreground text-center p-4">
                      {language === 'fr' 
                        ? 'Aucun événement ce jour' 
                        : 'No events on this day'}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {events.map(event => (
              <Card key={event.id}>
                <CardContent className="p-4 space-y-2">
                  <h4 className="font-semibold">{event.title[language]}</h4>
                  <p className="text-sm text-muted-foreground">
                    {format(event.date, language === 'fr' ? 'PPP' : 'PPP', 
                      { locale: language === 'fr' ? fr : enUS })}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs px-2 py-1 rounded-full bg-faverton-green-light/20 text-faverton-green">
                      {language === 'fr' ? (
                        event.type === 'workshop' ? 'Atelier' : 
                        event.type === 'exhibition' ? 'Exposition' : 
                        event.type === 'performance' ? 'Spectacle' : 
                        'Résidence'
                      ) : (
                        event.type === 'workshop' ? 'Workshop' : 
                        event.type === 'exhibition' ? 'Exhibition' : 
                        event.type === 'performance' ? 'Performance' : 
                        'Residency'
                      )}
                    </span>
                    <Button variant="outline" size="sm">
                      {language === 'fr' ? 'Détails' : 'Details'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="application" className="space-y-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-semibold mb-6">
              {language === 'fr' ? 'Proposez votre projet artistique' : 'Propose your artistic project'}
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    {language === 'fr' ? 'Nom / Organisation' : 'Name / Organization'}
                  </label>
                  <input 
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-md"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    {language === 'fr' ? 'Email' : 'Email'}
                  </label>
                  <input 
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-md"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  {language === 'fr' ? 'Type de projet' : 'Project type'}
                </label>
                <select 
                  name="projectType"
                  value={formState.projectType}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                  required
                >
                  <option value="">{language === 'fr' ? 'Sélectionner...' : 'Select...'}</option>
                  <option value="residency">{language === 'fr' ? 'Résidence artistique' : 'Artist Residency'}</option>
                  <option value="exhibition">{language === 'fr' ? 'Exposition' : 'Exhibition'}</option>
                  <option value="workshop">{language === 'fr' ? 'Atelier' : 'Workshop'}</option>
                  <option value="performance">{language === 'fr' ? 'Spectacle/Performance' : 'Performance'}</option>
                  <option value="other">{language === 'fr' ? 'Autre' : 'Other'}</option>
                </select>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    {language === 'fr' ? 'Date de début souhaitée' : 'Desired start date'}
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {formState.startDate ? (
                          format(formState.startDate, 'PPP')
                        ) : (
                          <span>{language === 'fr' ? 'Choisir une date' : 'Pick a date'}</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={formState.startDate}
                        onSelect={(date) => setFormState(prev => ({ ...prev, startDate: date }))}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    {language === 'fr' ? 'Date de fin souhaitée' : 'Desired end date'}
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {formState.endDate ? (
                          format(formState.endDate, 'PPP')
                        ) : (
                          <span>{language === 'fr' ? 'Choisir une date' : 'Pick a date'}</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={formState.endDate}
                        onSelect={(date) => setFormState(prev => ({ ...prev, endDate: date }))}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  {language === 'fr' ? 'Description du projet' : 'Project description'}
                </label>
                <Textarea 
                  name="projectDescription"
                  value={formState.projectDescription}
                  onChange={handleChange}
                  placeholder={language === 'fr' 
                    ? 'Décrivez votre projet, vos besoins et vos objectifs...' 
                    : 'Describe your project, your needs and your goals...'}
                  rows={5}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
              
              <div className="flex justify-end">
                <Button type="submit">
                  {language === 'fr' ? 'Soumettre' : 'Submit'}
                </Button>
              </div>
            </form>
          </div>
          
          <div className="bg-faverton-green-light/10 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">
              {language === 'fr' ? 'Contact direct' : 'Direct Contact'}
            </h3>
            <p className="mb-4">
              {language === 'fr'
                ? 'Pour toute question concernant les résidences artistiques ou les événements :'
                : 'For any questions regarding artistic residencies or events:'}
            </p>
            <div className="bg-white p-4 rounded border">
              <p className="font-medium">
                {language === 'fr' ? 'Claire Dubois' : 'Claire Dubois'}
              </p>
              <p>
                {language === 'fr' ? 'Coordinatrice des événements culturels' : 'Cultural Events Coordinator'}
              </p>
              <p className="mt-2">
                artistique@faverton.fr
              </p>
              <p>+33 X XX XX XX XX</p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ArtisticBookingSection;
