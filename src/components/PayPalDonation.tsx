
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Wallet, Heart } from "lucide-react";

const PayPalDonation = () => {
  const donationRef = useRef<HTMLDivElement>(null);
  
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
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto" ref={donationRef}>
          <DonationCard amount={5} description="Soutien de Base" handleDonation={handleDonation} />
          <DonationCard amount={15} description="Soutien Intermédiaire" handleDonation={handleDonation} />
          <DonationCard amount={30} description="Grand Soutien" handleDonation={handleDonation} />
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://www.paypal.com/donate/?hosted_button_id=YOUR_BUTTON_ID" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-black hover:text-favian-green-dark transition-colors"
          >
            <Wallet className="mr-2 h-5 w-5" />
            Faire un don personnalisé via PayPal
          </a>
        </div>
      </div>
    </section>
  );
};

interface DonationCardProps {
  amount: number;
  description: string;
  handleDonation: (amount: number) => void;
}

const DonationCard = ({ amount, description, handleDonation }: DonationCardProps) => {
  return (
    <Card className="border-none bg-white shadow-md card-3d-hover">
      <CardContent className="p-6 text-center card-content-3d">
        <div className="bg-black inline-flex items-center justify-center rounded-full p-3 mb-4">
          <Heart className="h-6 w-6 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-black mb-2">{amount} €</h3>
        <p className="text-black mb-6">{description}</p>
        <Button 
          onClick={() => handleDonation(amount)} 
          variant="default" 
          className="w-full bg-black text-white hover:bg-favian-green-dark"
        >
          Faire un don
        </Button>
      </CardContent>
    </Card>
  );
};

export default PayPalDonation;
