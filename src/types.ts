export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'bar' | 'restaurant' | 'café';
  available: boolean;
}

export interface AppSettings {
  whatsappNumber: string;
  address: string;
  facebookUrl?: string;
  instagramUrl?: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}
