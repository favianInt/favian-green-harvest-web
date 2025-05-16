
import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import AuthModal from '@/components/AuthModal';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { User, LogOut } from 'lucide-react';

const AuthButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();

  if (isAuthenticated && user) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
            variant="ghost" 
            className="flex items-center gap-2 text-favian-green-dark hover:bg-favian-green-light/20"
          >
            <User className="h-4 w-4" />
            <span className="hidden md:inline">{user.name}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuItem className="flex items-center gap-2" onClick={logout}>
            <LogOut className="h-4 w-4" />
            <span>Déconnexion</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <>
      <Button 
        variant="ghost" 
        className="text-favian-green-dark hover:bg-favian-green-light/20" 
        onClick={() => setIsModalOpen(true)}
      >
        Connexion
      </Button>
      <AuthModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default AuthButton;
