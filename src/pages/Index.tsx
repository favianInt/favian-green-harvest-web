
import React from 'react';
import Navbar from '@/components/Navbar';
import ParallaxHero from '@/components/parallax/ParallaxHero';
import ImpactSnapshot from '@/components/parallax/ImpactSnapshot';
import AboutPreview from '@/components/parallax/AboutPreview';
import ArtisticHighlight from '@/components/parallax/ArtisticHighlight';
import LearnResourcesGrid from '@/components/parallax/LearnResourcesGrid';
import ShopCarousel from '@/components/parallax/ShopCarousel';
import DonateSpotlight from '@/components/parallax/DonateSpotlight';
import CommunityTestimonials from '@/components/parallax/CommunityTestimonials';
import NewsletterSocial from '@/components/parallax/NewsletterSocial';
import ParallaxFooter from '@/components/parallax/ParallaxFooter';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <ParallaxHero />
        <ImpactSnapshot />
        <AboutPreview />
        <ArtisticHighlight />
        <LearnResourcesGrid />
        <ShopCarousel />
        <DonateSpotlight />
        <CommunityTestimonials />
        <NewsletterSocial />
      </main>
      <ParallaxFooter />
    </div>
  );
};

export default Index;
