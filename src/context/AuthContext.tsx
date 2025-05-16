
import React, { createContext, useContext, useState, useEffect } from 'react';

type User = {
  id: string;
  name: string;
  email: string;
  isPremium: boolean;
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  isPremium: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (name: string, email: string, password: string) => Promise<void>;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in from localStorage
    const storedUser = localStorage.getItem('favian_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    // For demo purposes, we're using mock data
    // In a real app, this would validate against a backend
    if (email === 'user@example.com' && password === 'password') {
      const mockUser: User = {
        id: '1',
        name: 'Demo User',
        email: email,
        isPremium: false
      };
      
      localStorage.setItem('favian_user', JSON.stringify(mockUser));
      setUser(mockUser);
      return;
    } else if (email === 'premium@example.com' && password === 'premium') {
      const mockUser: User = {
        id: '2',
        name: 'Premium User',
        email: email,
        isPremium: true
      };
      
      localStorage.setItem('favian_user', JSON.stringify(mockUser));
      setUser(mockUser);
      return;
    }
    
    throw new Error('Invalid credentials');
  };

  const register = async (name: string, email: string, password: string) => {
    // Mock registration
    const newUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      email,
      isPremium: false
    };
    
    localStorage.setItem('favian_user', JSON.stringify(newUser));
    setUser(newUser);
  };

  const logout = () => {
    localStorage.removeItem('favian_user');
    setUser(null);
  };

  if (isLoading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isPremium: user?.isPremium || false,
        login,
        logout,
        register
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
