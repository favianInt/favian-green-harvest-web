
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useProducts } from '@/context/ProductContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { ShoppingCart } from 'lucide-react';
import { toast } from "sonner";

const Products = () => {
  const { filteredProducts, filters, setFilters, addToCart } = useProducts();
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);

  // Available filter options
  const occasions = ['birthday', 'romantic', 'sympathy', 'congratulations', 'spring'];
  const types = ['roses', 'mixed', 'orchid', 'sunflowers', 'wreath', 'tulips'];
  const colors = ['red', 'white', 'yellow', 'multicolor'];
  const species = ['rose', 'orchid', 'sunflower', 'tulip'];

  // Handle filter changes
  const toggleFilter = (type: keyof typeof filters, value: string) => {
    setFilters({
      ...filters,
      [type]: Array.isArray(filters[type])
        ? filters[type]?.includes(value)
          ? (filters[type] as string[]).filter(v => v !== value)
          : [...(filters[type] as string[] || []), value]
        : [value]
    });
  };

  // Handle price range change
  const handlePriceChange = (values: number[]) => {
    setPriceRange([values[0], values[1]]);
    setFilters({
      ...filters,
      minPrice: values[0],
      maxPrice: values[1]
    });
  };

  // Handle add to cart
  const handleAddToCart = (product: any) => {
    addToCart(product);
    toast.success("Item added to cart", {
      description: `${product.name} has been added to your cart`
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="bg-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-medium text-center mb-4">Our Products</h1>
          <p className="text-center max-w-2xl mx-auto mb-8">
            Browse our selection of beautiful flowers and arrangements for any occasion.
            Use the filters to find exactly what you're looking for.
          </p>
        </div>
      </div>

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1 border rounded-lg p-6 h-fit bg-white shadow-sm">
            <h2 className="text-xl font-medium mb-6">Filters</h2>
            
            <div className="space-y-6">
              {/* Price Range Filter */}
              <div>
                <h3 className="text-lg font-medium mb-4">Price Range</h3>
                <div className="px-2">
                  <Slider
                    defaultValue={[0, 100]}
                    max={100}
                    step={1}
                    onValueChange={handlePriceChange}
                    className="mb-4"
                  />
                  <div className="flex justify-between">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Occasion Filter */}
              <div>
                <h3 className="text-lg font-medium mb-2">Occasion</h3>
                <div className="space-y-2">
                  {occasions.map(occasion => (
                    <div key={occasion} className="flex items-center">
                      <Checkbox 
                        id={`occasion-${occasion}`} 
                        checked={Array.isArray(filters.occasion) && filters.occasion.includes(occasion)}
                        onCheckedChange={() => toggleFilter('occasion', occasion)}
                      />
                      <label 
                        htmlFor={`occasion-${occasion}`}
                        className="ml-2 text-sm cursor-pointer capitalize"
                      >
                        {occasion}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Type Filter */}
              <div>
                <h3 className="text-lg font-medium mb-2">Type</h3>
                <div className="space-y-2">
                  {types.map(type => (
                    <div key={type} className="flex items-center">
                      <Checkbox 
                        id={`type-${type}`} 
                        checked={Array.isArray(filters.type) && filters.type.includes(type)}
                        onCheckedChange={() => toggleFilter('type', type)}
                      />
                      <label 
                        htmlFor={`type-${type}`}
                        className="ml-2 text-sm cursor-pointer capitalize"
                      >
                        {type}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Color Filter */}
              <div>
                <h3 className="text-lg font-medium mb-2">Color</h3>
                <div className="space-y-2">
                  {colors.map(color => (
                    <div key={color} className="flex items-center">
                      <Checkbox 
                        id={`color-${color}`} 
                        checked={Array.isArray(filters.color) && filters.color.includes(color)}
                        onCheckedChange={() => toggleFilter('color', color)}
                      />
                      <label 
                        htmlFor={`color-${color}`}
                        className="ml-2 text-sm cursor-pointer capitalize"
                      >
                        {color}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Species Filter */}
              <div>
                <h3 className="text-lg font-medium mb-2">Species</h3>
                <div className="space-y-2">
                  {species.map(speciesItem => (
                    <div key={speciesItem} className="flex items-center">
                      <Checkbox 
                        id={`species-${speciesItem}`} 
                        checked={Array.isArray(filters.species) && filters.species.includes(speciesItem)}
                        onCheckedChange={() => toggleFilter('species', speciesItem)}
                      />
                      <label 
                        htmlFor={`species-${speciesItem}`}
                        className="ml-2 text-sm cursor-pointer capitalize"
                      >
                        {speciesItem}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Reset Filters */}
              <Button 
                variant="outline" 
                className="w-full mt-4"
                onClick={() => setFilters({})}
              >
                Reset Filters
              </Button>
            </div>
          </div>
          
          {/* Products Grid */}
          <div className="lg:col-span-3">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <h3 className="text-xl">No products match your filters</h3>
                <p className="mt-2 text-muted-foreground">Try adjusting your filter criteria</p>
                <Button 
                  className="mt-4" 
                  variant="outline" 
                  onClick={() => setFilters({})}
                >
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="relative">
                      <AspectRatio ratio={4/3}>
                        <img 
                          src={product.images[0]} 
                          alt={product.name} 
                          className="w-full h-full object-cover"
                        />
                      </AspectRatio>
                      {product.featured && (
                        <div className="absolute top-2 right-2 bg-yellow-500 text-white px-2 py-1 rounded-md text-xs font-medium">
                          Featured
                        </div>
                      )}
                    </div>
                    
                    <CardContent className="p-4">
                      <h3 className="font-medium text-lg">{product.name}</h3>
                      <p className="text-muted-foreground text-sm mt-1">{product.description}</p>
                      
                      <div className="flex justify-between items-center mt-4">
                        <span className="font-medium text-lg">${product.price.toFixed(2)}</span>
                        <Button 
                          size="sm"
                          onClick={() => handleAddToCart(product)}
                          disabled={!product.inStock}
                        >
                          <ShoppingCart className="mr-1 h-4 w-4" /> Add to Cart
                        </Button>
                      </div>
                      
                      {!product.inStock && (
                        <p className="text-red-500 text-sm mt-2">Out of stock</p>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
