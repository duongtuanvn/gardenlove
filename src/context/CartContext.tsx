import { createContext, useContext, useState, ReactNode } from "react";

export interface CartItem {
  id: number;
  name: string;
  slug: string;
  variant: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">, quantity?: number) => void;
  updateQuantity: (id: number, variant: string, quantity: number) => void;
  removeItem: (id: number, variant: string) => void;
  clearCart: () => void;
  itemCount: number;
  subtotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (item: Omit<CartItem, "quantity">, quantity = 1) => {
    setItems((currentItems) => {
      const existingItem = currentItems.find(
        (i) => i.id === item.id && i.variant === item.variant
      );

      if (existingItem) {
        return currentItems.map((i) =>
          i.id === item.id && i.variant === item.variant
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      }

      return [...currentItems, { ...item, quantity }];
    });
  };

  const updateQuantity = (id: number, variant: string, quantity: number) => {
    if (quantity < 1) return;
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id && item.variant === variant
          ? { ...item, quantity }
          : item
      )
    );
  };

  const removeItem = (id: number, variant: string) => {
    setItems((currentItems) =>
      currentItems.filter((item) => !(item.id === id && item.variant === variant))
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        updateQuantity,
        removeItem,
        clearCart,
        itemCount,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
