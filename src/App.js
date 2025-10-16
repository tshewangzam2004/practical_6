import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import CartSidebar from './components/CartSidebar';
import ProductModal from './components/ProductModal';
import useCart from './hooks/useCart';

export default function App() {
  const { cart, add, remove, setQty, count, subtotal } = useCart([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [viewProduct, setViewProduct] = useState(null);

  return (
    <div className="app">
      <Header onOpenCart={() => setCartOpen(true)} cartCount={count} />
      <Home onAdd={add} onView={(p) => setViewProduct(p)} />
      <footer className="footer">
        © {new Date().getFullYear()} E-Collective — Demo e-commerce site
      </footer>

      <CartSidebar
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart}
        onRemove={remove}
        onSetQty={setQty}
        subtotal={subtotal}
      />

      <ProductModal
        product={viewProduct}
        onClose={() => setViewProduct(null)}
        onAdd={add}
      />
    </div>
  );
}
