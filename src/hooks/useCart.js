import { useState, useCallback } from 'react';

export default function useCart(initial = []) {
  const [cart, setCart] = useState(initial);

  const add = useCallback((product) => {
    setCart(prev => {
      const found = prev.find(p => p.id === product.id);
      if (found) return prev.map(p => p.id === product.id ? { ...p, qty: p.qty + 1 } : p);
      return [...prev, { ...product, qty: 1 }];
    });
  }, []);

  const remove = useCallback((id) => setCart(prev => prev.filter(p => p.id !== id)), []);

  const setQty = useCallback((id, qty) => {
    setCart(prev => prev.map(p => p.id === id ? { ...p, qty } : p));
  }, []);

  const clear = useCallback(() => setCart([]), []);

  const count = cart.reduce((s, p) => s + p.qty, 0);
  const subtotal = cart.reduce((s, p) => s + p.qty * p.price, 0);

  return { cart, add, remove, setQty, clear, count, subtotal };
}
