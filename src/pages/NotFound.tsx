
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-favian-green-light/10">
        <div className="text-center px-4 py-16">
          <h1 className="text-6xl font-bold text-favian-green mb-4">404</h1>
          <p className="text-2xl text-favian-earth-dark mb-8">
            Oups ! La page que vous recherchez semble introuvable.
          </p>
          <Button asChild className="bg-favian-green hover:bg-favian-green-dark">
            <Link to="/">Retour à l'accueil</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
