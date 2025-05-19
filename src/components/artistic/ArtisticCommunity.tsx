
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Users, CalendarDays } from 'lucide-react';

interface ArtisticCommunityProps {
  language: 'fr' | 'en';
}

type VolunteerOpportunity = {
  id: number;
  title: {
    fr: string;
    en: string;
  };
  description: {
    fr: string;
    en: string;
  };
  requirements: {
    fr: string[];
    en: string[];
  };
  duration: {
    fr: string;
    en: string;
  };
  status: 'open' | 'upcoming' | 'closed';
};

type Program = {
  id: number;
  title: {
    fr: string;
    en: string;
  };
  description: {
    fr: string;
    en: string;
  };
  audience: {
    fr: string;
    en: string;
  };
  date: {
    fr: string;
    en: string;
  };
};

const ArtisticCommunity: React.FC<ArtisticCommunityProps> = ({ language }) => {
  const volunteerOpportunities: VolunteerOpportunity[] = [
    {
      id: 1,
      title: {
        fr: "Assistant d'Exposition",
        en: "Exhibition Assistant"
      },
      description: {
        fr: "Aidez à la mise en place et à la surveillance des expositions temporaires. Interaction avec le public et soutien aux artistes.",
        en: "Help with the setup and monitoring of temporary exhibitions. Interaction with the public and support to artists."
      },
      requirements: {
        fr: ["Intérêt pour l'art contemporain", "Excellente communication", "Disponible les week-ends"],
        en: ["Interest in contemporary art", "Excellent communication", "Available on weekends"]
      },
      duration: {
        fr: "Engagement ponctuel : 1-2 journées par exposition",
        en: "Occasional commitment: 1-2 days per exhibition"
      },
      status: 'open'
    },
    {
      id: 2,
      title: {
        fr: "Accompagnateur d'Atelier Créatif",
        en: "Creative Workshop Facilitator"
      },
      description: {
        fr: "Accompagnez les artistes dans l'animation d'ateliers participatifs pour tous les âges. Aidez à la préparation du matériel et à l'encadrement des participants.",
        en: "Accompany artists in facilitating participatory workshops for all ages. Help with material preparation and participant guidance."
      },
      requirements: {
        fr: ["Expérience avec les enfants appréciée", "Sens de l'organisation", "Intérêt pour les pratiques artistiques"],
        en: ["Experience with children appreciated", "Organizational skills", "Interest in artistic practices"]
      },
      duration: {
        fr: "Engagement régulier : 2-3 heures par semaine",
        en: "Regular commitment: 2-3 hours per week"
      },
      status: 'open'
    },
    {
      id: 3,
      title: {
        fr: "Coordinateur de Festival",
        en: "Festival Coordinator"
      },
      description: {
        fr: "Participez à l'organisation de notre festival annuel d'art et d'écologie. Coordination des artistes, gestion des espaces, communication et logistique.",
        en: "Participate in organizing our annual art and ecology festival. Artist coordination, space management, communication, and logistics."
      },
      requirements: {
        fr: ["Expérience en gestion d'événements", "Autonomie et proactivité", "Permis de conduire souhaité"],
        en: ["Experience in event management", "Autonomy and proactivity", "Driver's license preferred"]
      },
      duration: {
        fr: "Engagement intensif : 3 mois de préparation + 1 semaine d'événement",
        en: "Intensive commitment: 3 months of preparation + 1 week of event"
      },
      status: 'upcoming'
    }
  ];

  const programs: Program[] = [
    {
      id: 1,
      title: {
        fr: "Ateliers Créatifs Familiaux",
        en: "Family Creative Workshops"
      },
      description: {
        fr: "Des ateliers artistiques accessibles à toute la famille, où parents et enfants créent ensemble. Différentes techniques sont explorées chaque mois.",
        en: "Artistic workshops accessible to the whole family, where parents and children create together. Different techniques are explored each month."
      },
      audience: {
        fr: "Familles avec enfants de 4 à 12 ans",
        en: "Families with children aged 4 to 12"
      },
      date: {
        fr: "Chaque premier samedi du mois, 14h-16h",
        en: "Every first Saturday of the month, 2-4pm"
      }
    },
    {
      id: 2,
      title: {
        fr: "Café des Artistes Seniors",
        en: "Senior Artists Café"
      },
      description: {
        fr: "Un moment convivial dédié aux seniors souhaitant pratiquer ou découvrir différentes formes d'art. Échanges de connaissances et création dans une ambiance détendue.",
        en: "A friendly moment dedicated to seniors wishing to practice or discover different art forms. Knowledge exchange and creation in a relaxed atmosphere."
      },
      audience: {
        fr: "Personnes de 65 ans et plus, tous niveaux",
        en: "People 65 and over, all levels"
      },
      date: {
        fr: "Tous les mardis, 10h-12h",
        en: "Every Tuesday, 10am-12pm"
      }
    },
    {
      id: 3,
      title: {
        fr: "Programme d'Art-Thérapie",
        en: "Art Therapy Program"
      },
      description: {
        fr: "Sessions thérapeutiques utilisant différentes pratiques artistiques pour favoriser le bien-être et l'expression personnelle. Encadrées par un art-thérapeute certifié.",
        en: "Therapeutic sessions using different artistic practices to promote well-being and personal expression. Supervised by a certified art therapist."
      },
      audience: {
        fr: "Adultes de tous âges, sur inscription",
        en: "Adults of all ages, registration required"
      },
      date: {
        fr: "Sessions de 8 semaines, 3 fois par an",
        en: "8-week sessions, 3 times per year"
      }
    }
  ];

  return (
    <div className="space-y-8">
      {/* Hero section */}
      <div className="relative rounded-lg overflow-hidden h-48 md:h-64">
        <div className="absolute inset-0 bg-gradient-to-r from-faverton-green-dark/90 to-faverton-green/80"></div>
        <img 
          src="https://images.unsplash.com/photo-1528605248644-14dd04022da1" 
          alt="Community gathering" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 flex items-center justify-center text-white p-6">
          <div className="max-w-2xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              {language === 'fr' 
                ? 'Rejoignez notre communauté artistique'
                : 'Join our artistic community'}
            </h2>
            <p className="text-lg">
              {language === 'fr'
                ? 'Participez, partagez, créez'
                : 'Participate, share, create'}
            </p>
          </div>
        </div>
      </div>

      {/* Volunteer opportunities section */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-6">
          <Users className="h-6 w-6 text-faverton-green" />
          <h3 className="text-xl font-semibold">
            {language === 'fr' ? 'Opportunités de bénévolat' : 'Volunteer Opportunities'}
          </h3>
        </div>
        
        <p className="mb-6 text-muted-foreground">
          {language === 'fr'
            ? 'Mettez vos compétences et votre enthousiasme au service de projets artistiques et communautaires passionnants.'
            : 'Put your skills and enthusiasm to work on exciting artistic and community projects.'}
        </p>
        
        <div className="grid gap-4">
          {volunteerOpportunities.map((opportunity) => (
            <Card key={opportunity.id} className="overflow-hidden">
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium">{opportunity.title[language]}</h4>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        opportunity.status === 'open' 
                          ? 'bg-green-100 text-green-800' 
                          : opportunity.status === 'upcoming'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-gray-100 text-gray-800'
                      }`}>
                        {language === 'fr'
                          ? opportunity.status === 'open' ? 'Ouvert' : opportunity.status === 'upcoming' ? 'À venir' : 'Fermé'
                          : opportunity.status === 'open' ? 'Open' : opportunity.status === 'upcoming' ? 'Upcoming' : 'Closed'
                        }
                      </span>
                    </div>
                    <p className="mt-2">{opportunity.description[language]}</p>
                    
                    <div className="mt-4">
                      <p className="text-sm font-medium text-muted-foreground">
                        {language === 'fr' ? 'Compétences requises:' : 'Required skills:'}
                      </p>
                      <ul className="mt-1 list-disc list-inside text-sm">
                        {opportunity.requirements[language].map((req, idx) => (
                          <li key={idx}>{req}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <p className="mt-3 text-sm text-muted-foreground">
                      <span className="font-medium">
                        {language === 'fr' ? 'Engagement:' : 'Commitment:'}
                      </span> {opportunity.duration[language]}
                    </p>
                  </div>
                </div>
                
                <div className="mt-4 flex justify-end">
                  <Button disabled={opportunity.status !== 'open'}>
                    {language === 'fr' ? 'Se porter volontaire' : 'Volunteer'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-muted-foreground mb-4">
            {language === 'fr'
              ? 'Vous avez des compétences spécifiques à offrir ou d\'autres questions ?'
              : 'Do you have specific skills to offer or other questions?'}
          </p>
          <Button variant="outline">
            {language === 'fr' ? 'Contactez notre équipe' : 'Contact our team'}
          </Button>
        </div>
      </div>
      
      {/* Family programs section */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-6">
          <CalendarDays className="h-6 w-6 text-faverton-green" />
          <h3 className="text-xl font-semibold">
            {language === 'fr' ? 'Programmes intergénérationnels' : 'Intergenerational Programs'}
          </h3>
        </div>
        
        <p className="mb-6 text-muted-foreground">
          {language === 'fr'
            ? 'Des activités artistiques adaptées pour tous les âges, favorisant les échanges entre générations.'
            : 'Artistic activities adapted for all ages, promoting exchanges between generations.'}
        </p>
        
        <Accordion type="single" collapsible className="w-full">
          {programs.map((program) => (
            <AccordionItem key={program.id} value={`item-${program.id}`}>
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center">
                  <span>{program.title[language]}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-3 pt-2">
                  <p>{program.description[language]}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-muted rounded-lg p-3">
                      <p className="text-sm font-medium">
                        {language === 'fr' ? 'Public:' : 'Audience:'}
                      </p>
                      <p className="text-sm">{program.audience[language]}</p>
                    </div>
                    <div className="bg-muted rounded-lg p-3">
                      <p className="text-sm font-medium">
                        {language === 'fr' ? 'Dates:' : 'Dates:'}
                      </p>
                      <p className="text-sm">{program.date[language]}</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex justify-end">
                    <Button>
                      {language === 'fr' ? 'S\'inscrire' : 'Register'}
                    </Button>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      
      {/* Contact form */}
      <div className="bg-faverton-green-light/10 rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4 text-center">
          {language === 'fr' ? 'Une idée à proposer ?' : 'Have an idea to suggest?'}
        </h3>
        
        <p className="text-center mb-6 text-muted-foreground">
          {language === 'fr'
            ? 'Partagez vos suggestions pour de nouveaux programmes ou activités communautaires'
            : 'Share your suggestions for new programs or community activities'}
        </p>
        
        <form className="space-y-4 max-w-xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">
                {language === 'fr' ? 'Nom' : 'Name'}
              </label>
              <input type="text" className="w-full p-2 border rounded-md" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">
                {language === 'fr' ? 'Email' : 'Email'}
              </label>
              <input type="email" className="w-full p-2 border rounded-md" />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">
              {language === 'fr' ? 'Votre suggestion ou question' : 'Your suggestion or question'}
            </label>
            <Textarea 
              placeholder={
                language === 'fr'
                  ? "Décrivez votre idée pour une activité, un atelier ou un événement..."
                  : "Describe your idea for an activity, workshop or event..."
              }
              rows={4}
              className="w-full"
            />
          </div>
          
          <div className="flex justify-end">
            <Button>
              {language === 'fr' ? 'Envoyer' : 'Send'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ArtisticCommunity;
