
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PayPalDonation from '@/components/PayPalDonation';

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-display font-medium text-black text-center mb-6">Nos Services</h1>
            <p className="text-center text-black max-w-2xl mx-auto text-lg mb-12">
              Nous proposons une gamme de services agricoles durables et écologiques pour répondre à vos besoins.
            </p>
            
            {/* Services content would go here */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-medium text-black mb-3">Formation en Agriculture Biologique</h3>
                <p className="text-black">Nous proposons des formations pour les agriculteurs qui souhaitent passer à l'agriculture biologique.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-medium text-black mb-3">Conseil en Agroécologie</h3>
                <p className="text-black">Notre équipe d'experts vous accompagne dans vos projets d'agroécologie et d'agriculture régénérative.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-medium text-black mb-3">Visites Pédagogiques</h3>
                <p className="text-black">Nous accueillons les écoles et les groupes pour des visites éducatives sur notre ferme.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-medium text-black mb-3">Vente Directe</h3>
                <p className="text-black">Achetez nos produits biologiques directement à la ferme ou via notre service de livraison local.</p>
              </div>
            </div>
          </div>
        </div>
        
        <PayPalDonation />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
