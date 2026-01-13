
export type View = 'home' | 'shop' | 'promos' | 'recipes' | 'suppliers' | 'careers' | 'news' | 'contact';

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  category: string;
  image: string;
  badge?: string;
  unit: string;
  isBestSeller?: boolean;
  isRecommended?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  ingredients: string[];
  steps: string[];
  productIds: string[];
  prepTime: string;
  difficulty: 'Fácil' | 'Media' | 'Difícil';
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
  image: string;
}

export interface SubCategory {
  id: string;
  name: string;
  categoryId: string;
}
