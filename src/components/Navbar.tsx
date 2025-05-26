import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import AuthButton from './AuthButton';
import { ShoppingCart as CartIcon } from 'lucide-react';
import ShoppingCart from './ShoppingCart';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '@/context/LanguageContext';

const Navbar = () => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);
  const pathname = location.pathname;
  const { t } = useLanguage();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial value
    handleResize();

    // Listen for window resize events
    window.addEventListener('resize', handleResize);

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const linkClass = (path: string) => {
    return `${
      pathname === path ? 'text-faverton-green' : ''
    } hover:text-faverton-green transition-colors`;
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto flex h-16 items-center px-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Link 
            to="/" 
            className="flex items-center space-x-2"
          >
            <span className="text-xl font-bold">FAVERTON</span>
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link to="/" className={linkClass('/')}>{t('nav.home')}</Link>
            <Link to="/products" className={linkClass('/products')}>{t('nav.products')}</Link>
            <Link to="/services" className={linkClass('/services')}>{t('nav.services')}</Link>
            <Link to="/education" className={linkClass('/education')}>{t('nav.education')}</Link>
            <Link to="/artistic" className={linkClass('/artistic')}>{t('nav.artistic')}</Link>
            <LanguageSwitcher />
            <AuthButton />
            <ShoppingCart />
          </nav>
        </div>
        <div className="flex items-center md:hidden space-x-2">
          <LanguageSwitcher />
          <ShoppingCart className="mr-2" />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium mt-8">
                <Link 
                  to="/" 
                  className={`${pathname === '/' ? 'text-faverton-green' : ''} hover:text-faverton-green`}
                >
                  {t('nav.home')}
                </Link>
                <Link 
                  to="/products" 
                  className={`${pathname === '/products' ? 'text-faverton-green' : ''} hover:text-faverton-green`}
                >
                  {t('nav.products')}
                </Link>
                <Link 
                  to="/services" 
                  className={`${pathname === '/services' ? 'text-faverton-green' : ''} hover:text-faverton-green`}
                >
                  {t('nav.services')}
                </Link>
                <Link 
                  to="/education" 
                  className={`${pathname === '/education' ? 'text-faverton-green' : ''} hover:text-faverton-green`}
                >
                  {t('nav.education')}
                </Link>
                <Link 
                  to="/artistic" 
                  className={`${pathname === '/artistic' ? 'text-faverton-green' : ''} hover:text-faverton-green`}
                >
                  {t('nav.artistic')}
                </Link>
                <div className="mt-4">
                  <AuthButton />
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
