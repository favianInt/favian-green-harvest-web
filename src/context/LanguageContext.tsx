
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const translations = {
    fr: {
      // Navigation
      'nav.home': 'Accueil',
      'nav.products': 'Produits',
      'nav.services': 'Services',
      'nav.education': 'Education',
      'nav.artistic': 'Espace Artistique',
      
      // Hero Section
      'hero.title': 'Bienvenue à FAVERTON',
      'hero.subtitle': 'Une ferme biologique certifiée où innovation écologique et respect de la nature se rencontrent pour un avenir durable.',
      'hero.cta.products': 'Découvrir nos produits',
      'hero.cta.contact': 'Nous contacter',
      
      // Education Page
      'education.title': 'Ressources Éducatives',
      'education.subtitle': 'Explorez notre visite virtuelle, centre de connaissances et événements à venir pour en savoir plus sur l\'agriculture durable et les technologies écologiques.',
      'education.tabs.tour': 'Visite Virtuelle',
      'education.tabs.knowledge': 'Centre de Connaissances',
      'education.tabs.webinars': 'Webinaires et Événements',
      
      // Common
      'common.loading': 'Chargement...',
      'common.error': 'Erreur',
      'common.success': 'Succès',
      'common.cancel': 'Annuler',
      'common.save': 'Enregistrer',
      'common.edit': 'Modifier',
      'common.delete': 'Supprimer',
      'common.search': 'Rechercher',
      'common.filter': 'Filtrer',
    },
    en: {
      // Navigation
      'nav.home': 'Home',
      'nav.products': 'Products',
      'nav.services': 'Services',
      'nav.education': 'Education',
      'nav.artistic': 'Artistic Space',
      
      // Hero Section
      'hero.title': 'Welcome to FAVERTON',
      'hero.subtitle': 'A certified organic farm where ecological innovation and respect for nature meet for a sustainable future.',
      'hero.cta.products': 'Discover our products',
      'hero.cta.contact': 'Contact us',
      
      // Education Page
      'education.title': 'Educational Resources',
      'education.subtitle': 'Explore our virtual tour, knowledge center, and upcoming events to learn more about sustainable farming and eco-friendly technologies.',
      'education.tabs.tour': 'Virtual Tour',
      'education.tabs.knowledge': 'Knowledge Center',
      'education.tabs.webinars': 'Webinars & Events',
      
      // Common
      'common.loading': 'Loading...',
      'common.error': 'Error',
      'common.success': 'Success',
      'common.cancel': 'Cancel',
      'common.save': 'Save',
      'common.edit': 'Edit',
      'common.delete': 'Delete',
      'common.search': 'Search',
      'common.filter': 'Filter',
    }
  };

  const t = (key: string): string => {
    const translation = translations[language][key as keyof typeof translations[typeof language]];
    return translation || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
