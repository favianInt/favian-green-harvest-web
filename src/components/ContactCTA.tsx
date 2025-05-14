
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MapPin, Mail, Phone } from 'lucide-react';

const ContactCTA = () => {
  return (
    <section className="py-16 px-4 bg-favian-green-light/70 relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center mix-blend-multiply opacity-10"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcxNjI5MTg1Mw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080")',
        }}
      />
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto bg-white rounded-lg p-8 shadow-lg">
          <div className="text-center mb-8">
            <h2 className="section-title">Contactez-nous</h2>
            <p className="text-favian-earth-dark">
              Vous avez une question ou souhaitez nous rendre visite ? Nous serions ravis d'échanger avec vous !
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-favian-green-light flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-favian-green" />
              </div>
              <h3 className="font-semibold text-favian-green-dark mb-2">Adresse</h3>
              <p className="text-favian-earth-dark">FAVIAN, Breteuil (27160), France</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-favian-green-light flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-favian-green" />
              </div>
              <h3 className="font-semibold text-favian-green-dark mb-2">Téléphone</h3>
              <p className="text-favian-earth-dark">+33 X XX XX XX XX</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-favian-green-light flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-favian-green" />
              </div>
              <h3 className="font-semibold text-favian-green-dark mb-2">Email</h3>
              <p className="text-favian-earth-dark">contact@favian.fr</p>
            </div>
          </div>

          <div className="text-center">
            <Button asChild className="bg-favian-green hover:bg-favian-green-dark text-white px-8">
              <Link to="/contact">Nous contacter</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
