export interface Stall {
  id: string;
  name: string;
  image: string;
  category: string;
  rating: number;
  queueLength: number;
  estimatedWait: number;
  menu: MenuItem[];
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

export const mockStalls: Stall[] = [
  {
    id: '1',
    name: "Joe's Burger Shack",
    image: 'https://images.unsplash.com/photo-1632898657953-f41f81bfa892?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXJnZXIlMjByZXN0YXVyYW50JTIwZm9vZHxlbnwxfHx8fDE3NzUyMzY5ODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Burgers',
    rating: 4.8,
    queueLength: 12,
    estimatedWait: 15,
    menu: [
      {
        id: 'm1',
        name: 'Classic Burger',
        description: 'Beef patty, lettuce, tomato, special sauce',
        price: 199,
        image: 'https://images.unsplash.com/photo-1632898657953-f41f81bfa892?w=400',
      },
      {
        id: 'm2',
        name: 'Cheese Deluxe',
        description: 'Double cheese, crispy bacon, onion rings',
        price: 299,
        image: 'https://images.unsplash.com/photo-1632898657953-f41f81bfa892?w=400',
      },
      {
        id: 'm3',
        name: 'Veggie Burger',
        description: 'Plant-based patty, avocado, sprouts',
        price: 249,
        image: 'https://images.unsplash.com/photo-1632898657953-f41f81bfa892?w=400',
      },
    ],
  },
  {
    id: '2',
    name: 'Taco Fiesta',
    image: 'https://images.unsplash.com/photo-1707604341704-74abdc25e52a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWNvJTIwbWV4aWNhbiUyMGZvb2R8ZW58MXx8fHwxNzc1MzI3OTQzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Mexican',
    rating: 4.6,
    queueLength: 8,
    estimatedWait: 10,
    menu: [
      {
        id: 'm4',
        name: 'Beef Tacos',
        description: 'Seasoned beef, salsa, guacamole',
        price: 179,
        image: 'https://images.unsplash.com/photo-1707604341704-74abdc25e52a?w=400',
      },
      {
        id: 'm5',
        name: 'Chicken Quesadilla',
        description: 'Grilled chicken, melted cheese, peppers',
        price: 219,
        image: 'https://images.unsplash.com/photo-1707604341704-74abdc25e52a?w=400',
      },
      {
        id: 'm6',
        name: 'Nachos Supreme',
        description: 'Loaded nachos with all the toppings',
        price: 199,
        image: 'https://images.unsplash.com/photo-1707604341704-74abdc25e52a?w=400',
      },
    ],
  },
  {
    id: '3',
    name: 'Pizza Palace',
    image: 'https://images.unsplash.com/photo-1616141395675-7c92399f800e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMHNsaWNlJTIwcmVzdGF1cmFudHxlbnwxfHx8fDE3NzUyMzgwODN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Pizza',
    rating: 4.9,
    queueLength: 15,
    estimatedWait: 20,
    menu: [
      {
        id: 'm7',
        name: 'Margherita',
        description: 'Classic tomato, mozzarella, basil',
        price: 349,
        image: 'https://images.unsplash.com/photo-1616141395675-7c92399f800e?w=400',
      },
      {
        id: 'm8',
        name: 'Pepperoni Feast',
        description: 'Double pepperoni, extra cheese',
        price: 399,
        image: 'https://images.unsplash.com/photo-1616141395675-7c92399f800e?w=400',
      },
      {
        id: 'm9',
        name: 'BBQ Chicken',
        description: 'BBQ sauce, grilled chicken, red onion',
        price: 449,
        image: 'https://images.unsplash.com/photo-1616141395675-7c92399f800e?w=400',
      },
    ],
  },
  {
    id: '4',
    name: 'Sushi Station',
    image: 'https://images.unsplash.com/photo-1700324822763-956100f79b0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXNoaSUyMGphcGFuZXNlJTIwZm9vZHxlbnwxfHx8fDE3NzUyNDY1NTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Japanese',
    rating: 4.7,
    queueLength: 6,
    estimatedWait: 12,
    menu: [
      {
        id: 'm10',
        name: 'California Roll',
        description: 'Crab, avocado, cucumber',
        price: 249,
        image: 'https://images.unsplash.com/photo-1700324822763-956100f79b0d?w=400',
      },
      {
        id: 'm11',
        name: 'Salmon Nigiri',
        description: 'Fresh salmon over rice (6 pcs)',
        price: 299,
        image: 'https://images.unsplash.com/photo-1700324822763-956100f79b0d?w=400',
      },
      {
        id: 'm12',
        name: 'Dragon Roll',
        description: 'Eel, cucumber, avocado topping',
        price: 349,
        image: 'https://images.unsplash.com/photo-1700324822763-956100f79b0d?w=400',
      },
    ],
  },
];

export const generateToken = () => {
  return `#${Math.floor(1000 + Math.random() * 9000)}`;
};
