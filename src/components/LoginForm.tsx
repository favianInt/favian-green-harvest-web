
import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

type LoginFormProps = {
  onSuccess?: () => void;
};

const LoginForm = ({ onSuccess }: LoginFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      await login(email, password);
      toast({
        title: "Connecté avec succès",
        description: "Bienvenue sur FAVIAN!",
      });
      if (onSuccess) onSuccess();
    } catch (error) {
      toast({
        title: "Erreur de connexion",
        description: "Email ou mot de passe incorrect",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
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
        />
      </div>
      <Button 
        type="submit" 
        className="w-full bg-favian-green hover:bg-favian-green-dark text-white"
        disabled={isLoading}
      >
        {isLoading ? 'Connexion...' : 'Se connecter'}
      </Button>
      
      <div className="text-center text-sm text-favian-earth-dark mt-4">
        <p>Compte de démonstration:</p>
        <p className="font-semibold">Email: user@example.com</p>
        <p className="font-semibold">Mot de passe: password</p>
        <p className="mt-2">Ou compte premium:</p>
        <p className="font-semibold">Email: premium@example.com</p>
        <p className="font-semibold">Mot de passe: premium</p>
      </div>
    </form>
  );
};

export default LoginForm;
