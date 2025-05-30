
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Mail, MapPin, Phone, Instagram, Facebook, Twitter } from 'lucide-react';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useLanguage } from '@/context/LanguageContext';

const ParallaxFooter = () => {
  const { language } = useLanguage();
  const backgroundRef = useRef<HTMLDivElement>(null);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * 0.1;
      
      if (backgroundRef.current) {
        backgroundRef.current.style.transform = `translateY(${-rate}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="relative bg-faverton-green-dark text-white overflow-hidden">
      {/* Parallax background texture */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 opacity-10 will-change-transform"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="white" fill-opacity="0.1"%3E%3Cpath d="M50 50c0-13.8-11.2-25-25-25S0 36.2 0 50s11.2 25 25 25 25-11.2 25-25zm25 0c0-13.8-11.2-25-25-25s-25 11.2-25 25 11.2 25 25 25 25-11.2 25-25z"/%3E%3C/g%3E%3C/svg%3E")'
        }}
      />
      
      <div className="container mx-auto py-16 px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and About */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Leaf className="h-8 w-8 text-faverton-green-light" />
              <span className="text-2xl font-bold">FAVERTON</span>
            </div>
            <p className="text-faverton-green-light leading-relaxed">
              {language === 'fr'
                ? 'Ferme biologique certifiée engagée dans l\'agriculture durable, l\'innovation écologique et les technologies vertes.'
                : 'Certified organic farm committed to sustainable agriculture, ecological innovation and green technologies.'
              }
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-faverton-green-light hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-faverton-green-light hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-faverton-green-light hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6">
              {language === 'fr' ? 'Navigation' : 'Navigation'}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/welcome" className="text-faverton-green-light hover:text-white transition-colors">
                  {language === 'fr' ? 'Accueil' : 'Home'}
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-faverton-green-light hover:text-white transition-colors">
                  {language === 'fr' ? 'Nos Produits' : 'Our Products'}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-faverton-green-light hover:text-white transition-colors">
                  {language === 'fr' ? 'Services' : 'Services'}
                </Link>
              </li>
              <li>
                <Link to="/education" className="text-faverton-green-light hover:text-white transition-colors">
                  {language === 'fr' ? 'Éducation' : 'Education'}
                </Link>
              </li>
              <li>
                <Link to="/artistic" className="text-faverton-green-light hover:text-white transition-colors">
                  {language === 'fr' ? 'Espace Artistique' : 'Artistic Space'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 shrink-0 text-faverton-green-light mt-1" />
                <span className="text-faverton-green-light">
                  FAVERTON, Breteuil (27160), France
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 shrink-0 text-faverton-green-light" />
                <span className="text-faverton-green-light">+33 X XX XX XX XX</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 shrink-0 text-faverton-green-light" />
                <span className="text-faverton-green-light">contact@faverton.fr</span>
              </li>
            </ul>
          </div>

          {/* Language & Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6">
              {language === 'fr' ? 'Paramètres' : 'Settings'}
            </h4>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-faverton-green-light mb-2">
                  {language === 'fr' ? 'Langue' : 'Language'}
                </p>
                <LanguageSwitcher />
              </div>
              <div className="space-y-2">
                <Link to="/privacy" className="block text-sm text-faverton-green-light hover:text-white transition-colors">
                  {language === 'fr' ? 'Politique de confidentialité' : 'Privacy Policy'}
                </Link>
                <Link to="/terms" className="block text-sm text-faverton-green-light hover:text-white transition-colors">
                  {language === 'fr' ? 'Conditions d\'utilisation' : 'Terms of Service'}
                </Link>
                <Link to="/cookies" className="block text-sm text-faverton-green-light hover:text-white transition-colors">
                  {language === 'fr' ? 'Politique des cookies' : 'Cookie Policy'}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-faverton-green mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-center md:text-left text-faverton-green-light">
              © {currentYear} FAVERTON. {language === 'fr' ? 'Tous droits réservés. Fièrement éco-responsable.' : 'All rights reserved. Proudly eco-responsible.'}
            </p>
            <p className="text-center md:text-right text-sm text-faverton-green-light mt-4 md:mt-0">
              {language === 'fr' ? 'Fait avec 💚 pour la planète' : 'Made with 💚 for the planet'}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ParallaxFooter;
