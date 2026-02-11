
import { MenuItem } from './types';

export const MENU_DATA: MenuItem[] = [
  // Burgers
  { id: 'b1', name: 'Zinger Burger', description: 'Our legendary crispy chicken burger.', price: 350, category: 'Burger', isFeatured: true, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800' },
  { id: 'b2', name: 'Chicken Fillet Burger', description: 'Tender chicken fillet in a soft bun.', price: 550, category: 'Burger', image: 'https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&fit=crop&q=80&w=800' },
  { id: 'b3', name: 'Chicken Grilled Burger', description: 'Flame-grilled urban specialty.', price: 490, category: 'Burger', image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&q=80&w=800' },
  { id: 'b4', name: 'Thunder Zinger Burger', description: 'Extreme crunch, extreme spice.', price: 500, category: 'Burger', isFeatured: true, image: 'https://images.unsplash.com/photo-1610440042657-612c34d95e9f?auto=format&fit=crop&q=80&w=800' },
  { id: 'b5', name: 'Jumbo Patti Burger', description: 'Double the size, double the taste.', price: 250, category: 'Burger', image: 'https://images.unsplash.com/photo-1586816001966-79b736744398?auto=format&fit=crop&q=80&w=800' },
  { id: 'b6', name: 'Chapli Kabab Burger', description: 'Local fusion at its finest.', price: 300, category: 'Burger', image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&q=80&w=800' },
  { id: 'b7', name: 'Beef Burger', description: 'Juicy premium beef patty.', price: 690, category: 'Burger', isFeatured: true, image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=800' },

  // Wraps
  { id: 'w1', name: 'Chicken Grilled Wrap', description: 'Healthy grilled chicken wrap.', price: 550, category: 'Wrap', isFeatured: true, image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&q=80&w=800' },
  { id: 'w2', name: 'Tortilla Wrap', description: 'Soft toasted tortilla.', price: 490, category: 'Wrap', image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&q=80&w=800' },
  { id: 'w3', name: 'Crunch Wrap', description: 'Crunchy center urban classic.', price: 490, category: 'Wrap', image: 'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?auto=format&fit=crop&q=80&w=800' },

  // Sandwiches
  { id: 's1', name: 'Panini Sandwich', description: 'Italian style pressed panini.', price: 550, category: 'Sandwich', isFeatured: true, image: 'https://images.unsplash.com/photo-1528733918455-5a59687cedf0?auto=format&fit=crop&q=80&w=800' },
  { id: 's2', name: 'Chicken Sandwich', description: 'Triple decker club style.', price: 300, category: 'Sandwich', image: 'https://images.unsplash.com/photo-1567234665766-47402326fdb5?auto=format&fit=crop&q=80&w=800' },
  { id: 's3', name: 'Special Grilled Sandwich', description: 'The urban secret sauce sandwich.', price: 500, category: 'Sandwich', image: 'https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?auto=format&fit=crop&q=80&w=800' },
  { id: 's4', name: 'Veggie Sandwich', description: 'Fresh garden goodness.', price: 250, category: 'Sandwich', image: 'https://images.unsplash.com/photo-1540713434306-58505cf1b6fc?auto=format&fit=crop&q=80&w=800' },
  { id: 's5', name: 'Croissant Sandwich', description: 'Flaky buttery layers.', price: 550, category: 'Sandwich', image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=800' },

  // Drinks & Shakes
  { id: 'dr1', name: 'Mint Made', description: 'Refreshing muddled mint.', price: 300, category: 'Drink', isFeatured: true, image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800' },
  { id: 'dr2', name: 'Brownie Shake', description: 'Rich chocolate brownie blend.', price: 500, category: 'Drink', isFeatured: true, image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=800' },
  { id: 'dr3', name: 'Oreo Shake', description: 'Classic cookie cream shake.', price: 500, category: 'Drink', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=800' },

  // Continental
  { id: 'c1', name: 'Beef Steak', description: 'Premium cut, urban preparation.', price: 1700, category: 'Continental', isFeatured: true, image: 'https://images.unsplash.com/photo-1546241072-48010ad28c2c?auto=format&fit=crop&q=80&w=800' },
  { id: 'c2', name: 'Chicken Steak', description: 'Juicy grilled chicken breast.', price: 1200, category: 'Continental', image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&q=80&w=800' },
  { id: 'c3', name: 'Alfredo Pasta', description: 'Creamy white sauce perfection.', price: 800, category: 'Continental', isFeatured: true, image: 'https://images.unsplash.com/photo-1645112481338-356247738241?auto=format&fit=crop&q=80&w=800' },

  // Starters
  { id: 'st1', name: 'Momos (6 Pcs)', description: 'Steamed fusion pockets.', price: 400, category: 'Starter', isFeatured: true, image: 'https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?auto=format&fit=crop&q=80&w=800' },
  { id: 'st2', name: 'Loaded Fries', description: 'Urban fries with the works.', price: 500, category: 'Starter', isFeatured: true, image: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&q=80&w=800' },
  { id: 'st3', name: 'Crunchy Fries', description: 'Extra crispy golden fries.', price: 600, category: 'Starter', image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&q=80&w=800' },

  // Desserts
  { id: 'd1', name: 'Brownie', description: 'Fudgy chocolate brownie.', price: 220, category: 'Dessert', isFeatured: true, image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=800' },
  { id: 'd2', name: 'Churros (4 Pcs)', description: 'Classic Spanish dough.', price: 400, category: 'Dessert', image: 'https://images.unsplash.com/photo-1547053416-5777894a4751?auto=format&fit=crop&q=80&w=800' },

  // Beverage (Coffee)
  { id: 'bv1', name: 'Cappuccino Coffee', description: 'Premium roast cappuccino.', price: 650, category: 'Beverage', isFeatured: true, image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&q=80&w=800' }
];
