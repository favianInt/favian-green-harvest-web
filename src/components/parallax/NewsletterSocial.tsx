
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Instagram, Facebook, Twitter } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const NewsletterSocial = () => {
  const { language } = useLanguage();
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * 0.1;
      
      if (leftPanelRef.current) {
        leftPanelRef.current.style.transform = `translateY(${-rate}px)`;
      }
      
      if (rightPanelRef.current) {
        rightPanelRef.current.style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const socialPosts = [
    {
      platform: 'Instagram',
      content: language === 'fr' ? 'Nouveau projet artistique en cours ! 🎨🌱' : 'New artistic project in progress! 🎨🌱',
      time: '2h'
    },
    {
      platform: 'Facebook',
      content: language === 'fr' ? 'Récolte exceptionnelle cette semaine 🥕' : 'Exceptional harvest this week 🥕',
      time: '1d'
    },
    {
      platform: 'Twitter',
      content: language === 'fr' ? 'Formation permaculture ce weekend' : 'Permaculture training this weekend',
      time: '3d'
    }
  ];

  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Newsletter signup */}
          <div ref={leftPanelRef} className="will-change-transform">
            <div 
              className="relative p-12 rounded-3xl"
              style={{
                backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%2378A046" fill-opacity="0.1"%3E%3Cpath d="M30 30c0-8.3-6.7-15-15-15S0 21.7 0 30s6.7 15 15 15 15-6.7 15-15zm15 0c0-8.3-6.7-15-15-15s-15 6.7-15 15 6.7 15 15 15 15-6.7 15-15z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                backgroundColor: '#f8fffe'
              }}
            >
              <Mail className="h-16 w-16 text-faverton-green mb-8" />
              
              <h3 className="text-3xl font-bold text-faverton-green-dark mb-6">
                {language === 'fr' ? 'Restez Connectés' : 'Stay Connected'}
              </h3>
              
              <p className="text-lg text-faverton-earth-dark mb-8 leading-relaxed">
                {language === 'fr'
                  ? 'Recevez nos dernières actualités, conseils agricoles et annonces d\'événements artistiques directement dans votre boîte mail.'
                  : 'Receive our latest news, farming tips and artistic event announcements directly in your mailbox.'
                }
              </p>
              
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder={language === 'fr' ? 'Votre adresse email' : 'Your email address'}
                  className="w-full px-6 py-4 rounded-full border border-faverton-green-light focus:border-faverton-green focus:outline-none focus:ring-2 focus:ring-faverton-green/20"
                />
                
                <Button 
                  type="submit"
                  className="w-full bg-faverton-green hover:bg-faverton-green-dark text-white py-4 rounded-full text-lg transition-all duration-300 hover:scale-105"
                >
                  {language === 'fr' ? 'S\'abonner' : 'Subscribe'}
                </Button>
              </form>
              
              <p className="text-sm text-faverton-earth mt-4 opacity-80">
                {language === 'fr' 
                  ? 'Nous respectons votre vie privée. Désabonnement possible à tout moment.'
                  : 'We respect your privacy. Unsubscribe at any time.'
                }
              </p>
            </div>
          </div>
          
          {/* Right: Social feed */}
          <div ref={rightPanelRef} className="will-change-transform">
            <h3 className="text-3xl font-bold text-faverton-green-dark mb-8">
              {language === 'fr' ? 'Actualités Sociales' : 'Social Updates'}
            </h3>
            
            <div className="space-y-6">
              {socialPosts.map((post, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-faverton-green-light/20 rounded-full p-3">
                        {post.platform === 'Instagram' && <Instagram className="h-5 w-5 text-faverton-green" />}
                        {post.platform === 'Facebook' && <Facebook className="h-5 w-5 text-faverton-green" />}
                        {post.platform === 'Twitter' && <Twitter className="h-5 w-5 text-faverton-green" />}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold text-faverton-green-dark">
                            {post.platform}
                          </span>
                          <span className="text-sm text-faverton-earth">
                            {post.time}
                          </span>
                        </div>
                        <p className="text-faverton-earth-dark">
                          {post.content}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Button 
                variant="outline" 
                className="border-faverton-green text-faverton-green hover:bg-faverton-green hover:text-white"
              >
                {language === 'fr' ? 'Voir plus d\'actualités' : 'See more updates'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSocial;
