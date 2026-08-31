import React, { createContext, useContext, useEffect, useState } from "react";
import { getCart, saveCart, clearCart as clearCartStorage } from "../scripts/storageUtils";
import { calculateSubtotal } from "../scripts/cartUtils";

const DELIVERY_FEE = 150;

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => getCart() || []);

  useEffect(() => {
    saveCart(cart);
  }, [cart]);

  function addItem(item, quantity = 1) {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === item.id);
      if (existing) {
        return prev.map((p) => (p.id === item.id ? { ...p, quantity: p.quantity + quantity } : p));
      }
      return [...prev, { ...item, quantity }];
    });
  }

  function updateQuantity(id, quantity) {
    setCart((prev) => prev.map((p) => (p.id === id ? { ...p, quantity: Math.max(0, quantity) } : p)).filter(p => p.quantity > 0));
  }

  function removeItem(id) {
    setCart((prev) => prev.filter((p) => p.id !== id));
  }

  function clearCart() {
    setCart([]);
    clearCartStorage();
  }

  const itemCount = cart.reduce((s, it) => s + (Number(it.quantity) || 0), 0);
  const subtotal = calculateSubtotal(cart);
  const deliveryFee = cart.length ? DELIVERY_FEE : 0;
  const total = subtotal + deliveryFee;

  return (
    <CartContext.Provider value={{ cart, addItem, updateQuantity, removeItem, clearCart, itemCount, subtotal, deliveryFee, total }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within a CartProvider');
  return ctx;
}
