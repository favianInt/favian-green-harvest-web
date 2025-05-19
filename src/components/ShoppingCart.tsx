
import React from 'react';
import { useProducts } from '@/context/ProductContext';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingCart as ShoppingCartIcon, Plus, Minus, X } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

interface ShoppingCartProps {
  className?: string;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({ className }) => {
  const { cart, removeFromCart, updateCartItemQuantity, clearCart, cartTotal } = useProducts();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className={className}>
          <ShoppingCartIcon className="h-5 w-5 mr-2" />
          <span>Cart ({cart.length})</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>
        
        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[70vh]">
            <ShoppingCartIcon className="h-16 w-16 text-muted-foreground mb-4" />
            <h3 className="text-xl font-medium">Your cart is empty</h3>
            <p className="text-muted-foreground mt-2 text-center">
              Looks like you haven't added any products to your cart yet.
            </p>
          </div>
        ) : (
          <div className="flex flex-col h-full">
            <div className="flex-grow overflow-auto py-4">
              {cart.map((item) => (
                <div key={item.product.id} className="flex py-4">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  
                  <div className="ml-4 flex flex-1 flex-col">
                    <div className="flex justify-between text-base font-medium">
                      <h3>{item.product.name}</h3>
                      <button 
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-muted-foreground hover:text-destructive"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </div>
                    
                    <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                      {item.product.description}
                    </p>
                    
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border rounded-md">
                        <button 
                          className="px-2 py-1"
                          onClick={() => updateCartItemQuantity(item.product.id, item.quantity - 1)}
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="px-2">{item.quantity}</span>
                        <button 
                          className="px-2 py-1"
                          onClick={() => updateCartItemQuantity(item.product.id, item.quantity + 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      <p className="text-base font-medium">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-auto">
              <Separator className="my-4" />
              <div className="flex justify-between text-base font-medium">
                <p>Subtotal</p>
                <p>${cartTotal.toFixed(2)}</p>
              </div>
              <p className="mt-0.5 text-sm text-muted-foreground">
                Shipping and taxes calculated at checkout.
              </p>
              <div className="mt-6 space-y-2">
                <Button className="w-full" size="lg">
                  Checkout
                </Button>
                <Button variant="outline" className="w-full" onClick={clearCart}>
                  Clear Cart
                </Button>
              </div>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default ShoppingCart;
