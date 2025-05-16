
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PayPalDonation from '@/components/PayPalDonation';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage, 
} from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useAuth } from '@/context/AuthContext';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const reservationSchema = z.object({
  name: z.string().min(3, { message: 'Le nom doit contenir au moins 3 caractères' }),
  email: z.string().email({ message: 'Adresse email invalide' }),
  phone: z.string().min(10, { message: 'Numéro de téléphone invalide' }),
  date: z.date(),
  service: z.string().min(1, { message: 'Veuillez choisir un service' }),
  message: z.string().optional(),
});

type ReservationFormValues = z.infer<typeof reservationSchema>;

const Services = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { isAuthenticated } = useAuth();
  const { toast } = useToast();
  
  const form = useForm<ReservationFormValues>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    },
  });

  const onSubmit = (data: ReservationFormValues) => {
    console.log('Reservation submitted:', data);
    toast({
      title: "Réservation envoyée",
      description: "Nous vous contacterons pour confirmer votre réservation",
    });
    form.reset();
    setSelectedDate(undefined);
  };

  const handleReservationClick = () => {
    if (!isAuthenticated) {
      setIsDialogOpen(true);
      return;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Services Section */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-display font-medium text-black text-center mb-6">Nos Services</h1>
            <p className="text-center text-black max-w-2xl mx-auto text-lg mb-12">
              Nous proposons une gamme de services agricoles durables et écologiques pour répondre à vos besoins.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform card-3d-hover">
                <h3 className="text-xl font-medium text-black mb-3">Formation en Agriculture Biologique</h3>
                <p className="text-black">Nous proposons des formations pour les agriculteurs qui souhaitent passer à l'agriculture biologique.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform card-3d-hover">
                <h3 className="text-xl font-medium text-black mb-3">Conseil en Agroécologie</h3>
                <p className="text-black">Notre équipe d'experts vous accompagne dans vos projets d'agroécologie et d'agriculture régénérative.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform card-3d-hover">
                <h3 className="text-xl font-medium text-black mb-3">Visites Pédagogiques</h3>
                <p className="text-black">Nous accueillons les écoles et les groupes pour des visites éducatives sur notre ferme.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform card-3d-hover">
                <h3 className="text-xl font-medium text-black mb-3">Vente Directe</h3>
                <p className="text-black">Achetez nos produits biologiques directement à la ferme ou via notre service de livraison local.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Services Tabs - Separate Artistic Venue from Room Rental and Restauration */}
        <div className="bg-faverton-green-light/10 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-medium text-faverton-green-dark text-center mb-6">Autres Services</h2>
            <div className="max-w-4xl mx-auto">
              <Tabs defaultValue="artistique" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger value="artistique">Espace Artistique</TabsTrigger>
                  <TabsTrigger value="chambres">Location de Salles</TabsTrigger>
                  <TabsTrigger value="restauration">Service de Restauration</TabsTrigger>
                </TabsList>
                
                {/* Artistic Space Tab Content */}
                <TabsContent value="artistique">
                  <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-medium text-black mb-4">Espace Artistique</h3>
                    <p className="text-black mb-6">
                      Nous sommes un lieu d'accueil pour les artistes professionnels comme pour les artistes en herbe ! 
                      Notre lieu de vie artistique peut accueillir vos répétitions, événements, ateliers pour créer des 
                      échanges entre les publics de tous âges et de tous horizons.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                        <h4 className="text-xl font-medium text-black mb-2">Espaces de Répétition</h4>
                        <p className="text-black">Des salles équipées pour vos répétitions artistiques, musique, théâtre et danse.</p>
                      </div>
                      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                        <h4 className="text-xl font-medium text-black mb-2">Ateliers Créatifs</h4>
                        <p className="text-black">Espaces adaptés pour différents types d'ateliers artistiques et créatifs.</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                {/* Room Rental Tab Content */}
                <TabsContent value="chambres">
                  <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-medium text-black mb-4">Location de Salles</h3>
                    <p className="text-black mb-6">
                      Nous proposons plusieurs espaces polyvalents pour vos événements professionnels ou privés. 
                      Idéal pour des séminaires, formations, réunions ou célébrations dans un cadre naturel et inspirant.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                        <h4 className="text-xl font-medium text-black mb-2">Salle de Conférence</h4>
                        <p className="text-black">Espace modulable jusqu'à 50 personnes, équipé de matériel audiovisuel professionnel.</p>
                      </div>
                      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                        <h4 className="text-xl font-medium text-black mb-2">Espaces Collaboratifs</h4>
                        <p className="text-black">Salles adaptées pour le coworking et les petites réunions professionnelles.</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                {/* Restauration Tab Content */}
                <TabsContent value="restauration">
                  <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-medium text-black mb-4">Service de Restauration</h3>
                    <p className="text-black mb-6">
                      Notre service traiteur propose une cuisine savoureuse et responsable, élaborée avec les produits 
                      biologiques de notre ferme et de producteurs locaux. Parfait pour vos événements et réunions.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                        <h4 className="text-xl font-medium text-black mb-2">Traiteur Événementiel</h4>
                        <p className="text-black">Service complet pour vos événements privés ou professionnels, avec des menus personnalisables.</p>
                      </div>
                      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                        <h4 className="text-xl font-medium text-black mb-2">Pauses Gourmandes</h4>
                        <p className="text-black">Collations et boissons pour vos réunions et séminaires, avec des options végétariennes et véganes.</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
        
        {/* Reservation System */}
        <div className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-medium text-black text-center mb-6">Réserver Nos Services</h2>
            <p className="text-center text-black max-w-2xl mx-auto text-lg mb-12">
              Remplissez le formulaire ci-dessous pour réserver un de nos services. Notre équipe vous contactera pour confirmer votre réservation.
            </p>
            
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nom complet</FormLabel>
                            <FormControl>
                              <Input placeholder="Votre nom" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="votre@email.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Téléphone</FormLabel>
                            <FormControl>
                              <Input placeholder="Votre téléphone" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="service"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Service</FormLabel>
                            <FormControl>
                              <select 
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base md:text-sm"
                                {...field}
                              >
                                <option value="">Sélectionnez un service</option>
                                <option value="formation">Formation en Agriculture Biologique</option>
                                <option value="conseil">Conseil en Agroécologie</option>
                                <option value="visite">Visite Pédagogique</option>
                                <option value="repetition">Espace de Répétition</option>
                                <option value="location">Location de Salle</option>
                                <option value="restauration">Service de Restauration</option>
                              </select>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="space-y-4">
                      <FormField
                        control={form.control}
                        name="date"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel>Date</FormLabel>
                            <Calendar
                              mode="single"
                              selected={selectedDate}
                              onSelect={(date) => {
                                setSelectedDate(date);
                                field.onChange(date);
                              }}
                              disabled={(date) => date < new Date()}
                              className="rounded-md border"
                            />
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <div className="flex items-center mt-4">
                        <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">
                          Les horaires seront discutés après confirmation de votre réservation
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message (optionnel)</FormLabel>
                        <FormControl>
                          <textarea 
                            className="flex h-32 w-full rounded-md border border-input bg-background px-3 py-2 text-base md:text-sm"
                            placeholder="Informations supplémentaires concernant votre réservation..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="flex justify-center">
                    <Button 
                      type="submit" 
                      className="bg-faverton-green hover:bg-faverton-green-dark"
                      onClick={handleReservationClick}
                    >
                      Envoyer ma demande de réservation
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
        
        {/* Authentication Dialog */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Connexion requise</DialogTitle>
              <DialogDescription>
                Vous devez être connecté pour effectuer une réservation. Veuillez vous connecter ou créer un compte.
              </DialogDescription>
            </DialogHeader>
            <div className="flex justify-center gap-4 mt-4">
              <Button onClick={() => setIsDialogOpen(false)}>
                Fermer
              </Button>
            </div>
          </DialogContent>
        </Dialog>
        
        <PayPalDonation />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
