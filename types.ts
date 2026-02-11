
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Burger' | 'Sandwich' | 'Continental' | 'Starter' | 'Dessert' | 'Beverage' | 'Drink' | 'Wrap';
  image: string;
  isFeatured?: boolean;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface ReservationData {
  name: string;
  email: string;
  guests: number;
  date: string;
  time: string;
}
