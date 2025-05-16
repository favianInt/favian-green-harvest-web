
import React, { useEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Wallet, Heart, Lock } from "lucide-react";
import { useAuth } from '@/context/AuthContext';
import AuthModal from './AuthModal';

const PayPalDonation = () => {
  const donationRef = useRef<HTMLDivElement>(null);
  const { isAuthenticated, isPremium } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll('.card-3d-hover');
      
      cards.forEach((card) => {
        const rect = (card as HTMLElement).getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        (card as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
        (card as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
      });
    };
    
    const container = donationRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);
  
  // Function to handle PayPal donation redirect
  const handleDonation = (amount: number) => {
    if (!isAuthenticated) {
      setIsModalOpen(true);
      return;
    }
    
    if (!isPremium) {
      alert("Cette fonctionnalité est réservée aux membres premium. Veuillez mettre à niveau votre compte.");
      return;
    }
    
    // Replace with your actual PayPal donation link
    const paypalDonationLink = `https://www.paypal.com/donate/?hosted_button_id=YOUR_BUTTON_ID&amount=${amount}`;
    window.open(paypalDonationLink, '_blank');
  };
  
  return (
    <section className="bg-white py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-black mb-4">Soutenez Notre Mission</h2>
          <p className="text-black max-w-2xl mx-auto text-lg">
            Votre don nous aide à maintenir nos pratiques agricoles durables et à continuer notre mission écologique.
          </p>
          {!isPremium && (
            <div className="mt-4 px-4 py-2 bg-favian-green-light/30 inline-flex items-center gap-2 rounded-md">
              <Lock className="h-4 w-4 text-favian-green-dark" />
              <span className="text-favian-green-dark text-sm">
                Les dons sont disponibles pour les utilisateurs premium
              </span>
            </div>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto" ref={donationRef}>
          <DonationCard 
            amount={5} 
            description="Soutien de Base" 
            handleDonation={handleDonation}
            isPremium={isPremium}
          />
          <DonationCard 
            amount={15} 
            description="Soutien Intermédiaire" 
            handleDonation={handleDonation}
            isPremium={isPremium}
          />
          <DonationCard 
            amount={30} 
            description="Grand Soutien" 
            handleDonation={handleDonation}
            isPremium={isPremium}
          />
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              if (isPremium) {
                window.open("https://www.paypal.com/donate/?hosted_button_id=YOUR_BUTTON_ID", "_blank");
              } else {
                setIsModalOpen(true);
              }
            }}
            className="inline-flex items-center text-black hover:text-favian-green-dark transition-colors"
          >
            <Wallet className="mr-2 h-5 w-5" />
            Faire un don personnalisé via PayPal
          </a>
        </div>
      </div>
      
      <AuthModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

interface DonationCardProps {
  amount: number;
  description: string;
  handleDonation: (amount: number) => void;
  isPremium: boolean;
}

const DonationCard = ({ amount, description, handleDonation, isPremium }: DonationCardProps) => {
  return (
    <Card className="border-none bg-white shadow-lg card-3d-hover">
      <CardContent className="p-6 text-center card-content-3d">
        <div className="bg-black inline-flex items-center justify-center rounded-full p-3 mb-4">
          <Heart className="h-6 w-6 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-black mb-2">{amount} €</h3>
        <p className="text-black mb-6">{description}</p>
        <Button 
          onClick={() => handleDonation(amount)} 
          variant="default" 
          className={`w-full ${isPremium ? 'bg-black' : 'bg-gray-400'} text-white hover:bg-favian-green-dark`}
        >
          {isPremium ? (
            'Faire un don'
          ) : (
            <div className="flex items-center gap-2">
              <Lock className="h-4 w-4" />
              <span>Premium uniquement</span>
            </div>
          )}
        </Button>
      </CardContent>
    </Card>
  );
};

export default PayPalDonation;
