
import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-favian-green-dark text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Leaf className="h-6 w-6" />
              <span className="text-xl font-display font-bold">FAVIAN</span>
            </div>
            <p className="text-favian-green-light">
              Ferme biologique certifiée engagée dans l'agriculture durable, l'innovation écologique et les technologies vertes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-favian-green-light transition-colors">Accueil</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-favian-green-light transition-colors">Nos Produits</Link>
              </li>
              <li>
                <Link to="/practices" className="hover:text-favian-green-light transition-colors">Nos Pratiques</Link>
              </li>
              <li>
                <Link to="/green-tech" className="hover:text-favian-green-light transition-colors">Technologies Vertes</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-favian-green-light transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-favian-green-light transition-colors">Actualités</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-favian-green-light transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 shrink-0 text-favian-green-light" />
                <span>FAVIAN, Breteuil (27160), France</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 shrink-0 text-favian-green-light" />
                <span>+33 X XX XX XX XX</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 shrink-0 text-favian-green-light" />
                <span>contact@favian.fr</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Infolettre</h4>
            <p className="mb-4 text-sm">Inscrivez-vous pour recevoir nos actualités et offres spéciales</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Votre email"
                className="w-full px-4 py-2 rounded text-favian-earth-dark focus:outline-none focus:ring-2 focus:ring-favian-green-light"
                required
              />
              <button
                type="submit"
                className="w-full bg-favian-green hover:bg-favian-green-light text-white py-2 rounded transition-colors"
              >
                S'abonner
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-favian-green mt-8 pt-6 text-center text-sm">
          <p>© {currentYear} FAVIAN. Tous droits réservés. Fièrement éco-responsable.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
