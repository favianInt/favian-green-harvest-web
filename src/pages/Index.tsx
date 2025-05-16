
import React from 'react';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import FeaturedSection from '@/components/FeaturedSection';
import ProductPreview from '@/components/ProductPreview';
import TestimonialSection from '@/components/TestimonialSection';
import TechnologyPreview from '@/components/TechnologyPreview';
import NewsSummary from '@/components/NewsSummary';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';
import PayPalDonation from '@/components/PayPalDonation';
import KeyObjectives from '@/components/KeyObjectives';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeaturedSection />
        <KeyObjectives />
        <ProductPreview />
        <TechnologyPreview />
        <TestimonialSection />
        <PayPalDonation />
        <NewsSummary />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
