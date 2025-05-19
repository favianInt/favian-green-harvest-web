
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, ProductFilters } from '@/types/product';

// Sample products data - would be replaced with API calls in production
import { sampleProducts } from '@/data/sampleProducts';

interface CartItem {
  product: Product;
  quantity: number;
}

interface ProductContextType {
  products: Product[];
  filteredProducts: Product[];
  cart: CartItem[];
  filters: ProductFilters;
  setFilters: (filters: ProductFilters) => void;
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateCartItemQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [filters, setFilters] = useState<ProductFilters>({});

  // Load products from API or static data
  useEffect(() => {
    // In a real app, this would be an API call
    setProducts(sampleProducts);
    setFilteredProducts(sampleProducts);
  }, []);

  // Apply filters when they change
  useEffect(() => {
    const applyFilters = () => {
      let filtered = [...products];

      // Filter by occasion
      if (filters.occasion && filters.occasion.length > 0) {
        filtered = filtered.filter(product => 
          product.occasion && filters.occasion.includes(product.occasion));
      }

      // Filter by type
      if (filters.type && filters.type.length > 0) {
        filtered = filtered.filter(product => 
          product.type && filters.type.includes(product.type));
      }

      // Filter by color
      if (filters.color && filters.color.length > 0) {
        filtered = filtered.filter(product => 
          product.color && filters.color.includes(product.color));
      }

      // Filter by species
      if (filters.species && filters.species.length > 0) {
        filtered = filtered.filter(product => 
          product.species && filters.species.includes(product.species));
      }

      // Filter by price range
      if (filters.minPrice !== undefined || filters.maxPrice !== undefined) {
        filtered = filtered.filter(product => {
          const meetsMinPrice = filters.minPrice === undefined || product.price >= filters.minPrice;
          const meetsMaxPrice = filters.maxPrice === undefined || product.price <= filters.maxPrice;
          return meetsMinPrice && meetsMaxPrice;
        });
      }

      setFilteredProducts(filtered);
    };

    applyFilters();
  }, [filters, products]);

  // Cart functions
  const addToCart = (product: Product, quantity: number = 1) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.product.id === product.id);
      
      if (existingItem) {
        // Update quantity of existing item
        return prevCart.map(item => 
          item.product.id === product.id 
            ? { ...item, quantity: item.quantity + quantity } 
            : item
        );
      } else {
        // Add new item
        return [...prevCart, { product, quantity }];
      }
    });
  };

  const removeFromCart = (productId: string) => {
    setCart(prevCart => prevCart.filter(item => item.product.id !== productId));
  };

  const updateCartItemQuantity = (productId: string, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(productId);
      return;
    }
    
    setCart(prevCart => 
      prevCart.map(item => 
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  // Calculate cart total
  const cartTotal = cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);

  return (
    <ProductContext.Provider 
      value={{ 
        products, 
        filteredProducts,
        cart, 
        filters,
        setFilters,
        addToCart, 
        removeFromCart, 
        updateCartItemQuantity,
        clearCart,
        cartTotal
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};
