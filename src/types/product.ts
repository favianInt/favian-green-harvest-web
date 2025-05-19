
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  occasion?: string;
  type?: string;
  color?: string;
  species?: string;
  featured?: boolean;
  inStock: boolean;
}

export type ProductFilters = {
  occasion?: string[];
  type?: string[];
  color?: string[];
  species?: string[];
  minPrice?: number;
  maxPrice?: number;
}
