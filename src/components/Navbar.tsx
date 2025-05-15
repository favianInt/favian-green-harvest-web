
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Accueil', path: '/' },
    { name: 'Nos Produits', path: '/products' },
    { name: 'Nos Pratiques', path: '/practices' },
    { name: 'Technologies Vertes', path: '/green-tech' },
    { name: 'Services', path: '/services' },
    { name: 'Actualités', path: '/news' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-black sticky top-0 z-50 border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-white" />
            <span className="text-2xl font-display font-bold text-white">FAVIAN</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-white hover:text-favian-green-light font-medium text-sm uppercase tracking-wider transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              className="text-white"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <Menu className="h-6 w-6 text-white" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden fixed inset-0 bg-black/95 z-40 pt-16 px-4 transition-transform duration-300 ease-in-out transform",
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div className="flex flex-col space-y-4 py-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="py-2 px-4 text-lg text-center text-white hover:text-favian-green-light font-medium uppercase tracking-wider transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
