
import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

type RegisterFormProps = {
  onSuccess?: () => void;
};

const RegisterForm = ({ onSuccess }: RegisterFormProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { register } = useAuth();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      await register(name, email, password);
      toast({
        title: "Compte créé avec succès",
        description: "Bienvenue sur FAVIAN!",
      });
      if (onSuccess) onSuccess();
    } catch (error) {
      toast({
        title: "Erreur d'inscription",
        description: "Une erreur est survenue lors de la création de votre compte",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-favian-earth-dark mb-1">
          Nom
        </label>
        <Input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full"
          placeholder="Votre nom"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-favian-earth-dark mb-1">
          Email
        </label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full"
          placeholder="votre@email.com"
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-favian-earth-dark mb-1">
          Mot de passe
        </label>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full"
          minLength={6}
        />
      </div>
      <Button 
        type="submit" 
        className="w-full bg-favian-green hover:bg-favian-green-dark text-white"
        disabled={isLoading}
      >
        {isLoading ? 'Création...' : 'Créer un compte'}
      </Button>
    </form>
  );
};

export default RegisterForm;
