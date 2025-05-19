
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Leaf, Music, PaintBucket, Users } from 'lucide-react';

interface ArtisticIntroSectionProps {
  language: 'fr' | 'en';
}

const ArtisticIntroSection: React.FC<ArtisticIntroSectionProps> = ({ language }) => {
  return (
    <div className="space-y-8">
      {/* Hero section with mission statement */}
      <div className="relative rounded-lg overflow-hidden h-64 md:h-96">
        <div className="absolute inset-0 bg-gradient-to-r from-faverton-green-dark to-faverton-green-light opacity-80"></div>
        <img 
          src="https://images.unsplash.com/photo-1518005020951-eccb494ad742" 
          alt="Artistic space at Faverton" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 flex items-center justify-center text-white p-6">
          <div className="max-w-2xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {language === 'fr' 
                ? 'Un lieu d\'échange entre art et nature'
                : 'A place where art meets nature'}
            </h2>
            <p className="text-lg">
              {language === 'fr'
                ? 'Où la créativité s\'épanouit au rythme des saisons'
                : 'Where creativity flourishes with the rhythm of the seasons'}
            </p>
          </div>
        </div>
      </div>

      {/* Description section */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="prose max-w-none">
          {language === 'fr' ? (
            <>
              <p className="text-lg mb-4">
                Nous offrons un lieu d'accueil unique, ouvert à la fois aux artistes confirmés et aux talents émergents.
              </p>
              <p className="mb-4">
                Cet espace de création et de rencontre favorise le dialogue entre les disciplines, les générations et les cultures. 
                Que vous soyez musicien, peintre, comédien, conteur ou artisan, notre ferme écoresponsable devient le théâtre de vos inspirations.
              </p>
              <p className="mb-4">
                Nous mettons à disposition des espaces chaleureux pour vos résidences artistiques, répétitions, ateliers participatifs et événements culturels.
              </p>
              <p className="mb-4">
                Ici, l'art dialogue avec la nature, et chaque projet artistique contribue à faire naître des moments d'échange 
                et de sensibilisation autour des valeurs écologiques, humaines et sociales.
              </p>
              <p>
                Notre objectif ? Créer des ponts entre les mondes, entre les publics, et faire de chaque rencontre 
                un moment de transmission vivante et créative.
              </p>
            </>
          ) : (
            <>
              <p className="text-lg mb-4">
                We offer a unique welcoming place, open to both established artists and emerging talents.
              </p>
              <p className="mb-4">
                This space for creation and encounter promotes dialogue between disciplines, generations, and cultures.
                Whether you're a musician, painter, actor, storyteller, or craftsperson, our eco-responsible farm becomes the stage for your inspirations.
              </p>
              <p className="mb-4">
                We provide warm and welcoming spaces for your artistic residencies, rehearsals, participatory workshops, and cultural events.
              </p>
              <p className="mb-4">
                Here, art dialogues with nature, and each artistic project helps create moments of exchange
                and awareness around ecological, human, and social values.
              </p>
              <p>
                Our goal? To build bridges between worlds, between audiences, and to make each encounter
                a moment of vibrant and creative transmission.
              </p>
            </>
          )}
        </div>
      </div>

      {/* Featured elements */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="card-3d-hover">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <Music className="h-10 w-10 text-faverton-green mb-4" />
            <h3 className="font-semibold text-lg mb-2">
              {language === 'fr' ? 'Résidences Artistiques' : 'Artist Residencies'}
            </h3>
            <p className="text-muted-foreground">
              {language === 'fr'
                ? 'Pour les créateurs souhaitant développer leur projet en immersion'
                : 'For creators wishing to develop their project in an immersive setting'}
            </p>
          </CardContent>
        </Card>
        
        <Card className="card-3d-hover">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <PaintBucket className="h-10 w-10 text-faverton-green mb-4" />
            <h3 className="font-semibold text-lg mb-2">
              {language === 'fr' ? 'Ateliers Créatifs' : 'Creative Workshops'}
            </h3>
            <p className="text-muted-foreground">
              {language === 'fr'
                ? 'Des espaces équipés pour tous types de pratiques artistiques'
                : 'Equipped spaces for all types of artistic practices'}
            </p>
          </CardContent>
        </Card>
        
        <Card className="card-3d-hover">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <Users className="h-10 w-10 text-faverton-green mb-4" />
            <h3 className="font-semibold text-lg mb-2">
              {language === 'fr' ? 'Événements Culturels' : 'Cultural Events'}
            </h3>
            <p className="text-muted-foreground">
              {language === 'fr'
                ? 'Spectacles, expositions et rencontres tout au long de l\'année'
                : 'Shows, exhibitions, and gatherings throughout the year'}
            </p>
          </CardContent>
        </Card>
        
        <Card className="card-3d-hover">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <Leaf className="h-10 w-10 text-faverton-green mb-4" />
            <h3 className="font-semibold text-lg mb-2">
              {language === 'fr' ? 'Art & Écologie' : 'Art & Ecology'}
            </h3>
            <p className="text-muted-foreground">
              {language === 'fr'
                ? 'Une démarche artistique en harmonie avec nos valeurs environnementales'
                : 'An artistic approach in harmony with our environmental values'}
            </p>
          </CardContent>
        </Card>
      </div>
      
      {/* Testimonials */}
      <div className="bg-faverton-green-light/10 rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-6 text-center">
          {language === 'fr' ? 'Ce qu\'ils en disent' : 'What they say'}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="italic mb-2">
              {language === 'fr'
                ? '"Ce lieu m\'a permis de retrouver l\'inspiration au contact de la nature. Une expérience transformatrice."'
                : '"This place allowed me to find inspiration through contact with nature. A transformative experience."'}
            </p>
            <p className="font-medium">
              {language === 'fr' ? '- Marie D., Peintre' : '- Marie D., Painter'}
            </p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="italic mb-2">
              {language === 'fr'
                ? '"Le cadre idéal pour notre résidence de création. L\'équipe est attentionnée et le lieu absolument magique."'
                : '"The ideal setting for our creative residency. The team is attentive and the place absolutely magical."'}
            </p>
            <p className="font-medium">
              {language === 'fr' ? '- Collectif Harmonie' : '- Harmony Collective'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtisticIntroSection;
