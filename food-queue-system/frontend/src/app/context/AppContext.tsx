import React, { createContext, useContext, useState, ReactNode } from 'react';

export type UserMode = 'customer' | 'vendor';

export interface User {
  id: string;
  name: string;
  email: string;
  mode: UserMode;
  stallId?: string; // For vendors - which stall they manage
}

interface CartItem {
  id: string;
  stallId: string;
  name: string;
  price: number;
  quantity: number;
}

interface Order {
  id: string;
  stallId: string;
  stallName: string;
  items: CartItem[];
  total: number;
  token: string;
  status: 'placed' | 'preparing' | 'ready' | 'completed';
  estimatedTime: number;
  timestamp: Date;
}

interface AppContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  userMode: UserMode;
  setUserMode: (mode: UserMode) => void;
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: string) => void;
  clearCart: () => void;
  orders: Order[];
  addOrder: (order: Order) => void;
  updateOrderStatus: (orderId: string, status: Order['status']) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userMode, setUserMode] = useState<UserMode>('customer');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);

  const addToCart = (item: CartItem) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id && i.stallId === item.stallId);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id && i.stallId === item.stallId
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        );
      }
      return [...prev, item];
    });
  };

  const removeFromCart = (itemId: string) => {
    setCart((prev) => prev.filter((i) => i.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const addOrder = (order: Order) => {
    setOrders((prev) => [...prev, order]);
  };

  const updateOrderStatus = (orderId: string, status: Order['status']) => {
    setOrders((prev) =>
      prev.map((order) => (order.id === orderId ? { ...order, status } : order))
    );
  };

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        userMode,
        setUserMode,
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        orders,
        addOrder,
        updateOrderStatus,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};
