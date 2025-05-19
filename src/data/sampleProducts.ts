
import { Product } from '@/types/product';

export const sampleProducts: Product[] = [
  {
    id: "1",
    name: "Rose Bouquet",
    description: "A beautiful bouquet of fresh red roses",
    price: 49.99,
    images: ["https://images.unsplash.com/photo-1548586196-aa5803b77379?q=80&w=2787&auto=format&fit=crop"],
    category: "bouquets",
    occasion: "romantic",
    type: "roses",
    color: "red",
    species: "rose",
    featured: true,
    inStock: true
  },
  {
    id: "2",
    name: "Wildflower Arrangement",
    description: "A colorful mix of seasonal wildflowers",
    price: 39.99,
    images: ["https://images.unsplash.com/photo-1563241527-3004b7be0ffd?q=80&w=2787&auto=format&fit=crop"],
    category: "arrangements",
    occasion: "birthday",
    type: "mixed",
    color: "multicolor",
    featured: false,
    inStock: true
  },
  {
    id: "3",
    name: "Orchid Plant",
    description: "Elegant white orchid plant in decorative pot",
    price: 65.00,
    images: ["https://images.unsplash.com/photo-1566907525724-4e578c9dc118?q=80&w=2940&auto=format&fit=crop"],
    category: "plants",
    type: "orchid",
    color: "white",
    species: "orchid",
    featured: true,
    inStock: true
  },
  {
    id: "4",
    name: "Sunflower Bunch",
    description: "Bright and cheerful sunflowers",
    price: 35.50,
    images: ["https://images.unsplash.com/photo-1551472725-5efb9fe8bb2a?q=80&w=2773&auto=format&fit=crop"],
    category: "bouquets",
    occasion: "congratulations",
    type: "sunflowers",
    color: "yellow",
    species: "sunflower",
    featured: false,
    inStock: true
  },
  {
    id: "5",
    name: "Sympathy Wreath",
    description: "Elegant white and green funeral wreath",
    price: 85.00,
    images: ["https://images.unsplash.com/photo-1599144613440-ff14ede1d7c5?q=80&w=2787&auto=format&fit=crop"],
    category: "wreaths",
    occasion: "sympathy",
    type: "wreath",
    color: "white",
    featured: false,
    inStock: true
  },
  {
    id: "6",
    name: "Tulip Bundle",
    description: "Fresh spring tulips in various colors",
    price: 29.99,
    images: ["https://images.unsplash.com/photo-1520763185298-1b434c919102?q=80&w=2362&auto=format&fit=crop"],
    category: "bouquets",
    occasion: "spring",
    type: "tulips",
    color: "multicolor",
    species: "tulip",
    featured: true,
    inStock: true
  }
];
