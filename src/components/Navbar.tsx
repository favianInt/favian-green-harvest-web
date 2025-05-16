
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import AuthButton from './AuthButton';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/welcome', label: 'Accueil' },
    { path: '/products', label: 'Produits' },
    { path: '/services', label: 'Services' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/welcome" className="text-2xl font-bold text-faverton-green">
          FAVERTON
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-base font-medium transition-colors ${
                location.pathname === link.path
                  ? 'text-faverton-green-dark'
                  : 'text-faverton-earth-dark hover:text-faverton-green'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <AuthButton />
          <Button
            asChild
            className="bg-faverton-green hover:bg-faverton-green-dark text-white"
          >
            <Link to="/contact">Contact</Link>
          </Button>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-faverton-earth-dark"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-base font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-faverton-green-dark'
                    : 'text-faverton-earth-dark hover:text-faverton-green'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 flex flex-col space-y-2">
              <AuthButton />
              <Button
                asChild
                className="bg-faverton-green hover:bg-faverton-green-dark text-white w-full"
              >
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Contact
                </Link>
              </Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
