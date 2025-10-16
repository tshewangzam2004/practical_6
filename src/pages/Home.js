import React, { useState } from 'react';
import PRODUCTS from '../data/product';
import ProductCard from '../components/ProductCard';

export default function Home({ onAdd, onView }) {
  const [query, setQuery] = useState('');

  const items = PRODUCTS.filter(p => p.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <main className="container">
      <section className="hero">
        <div className="hero-card" style={{marginTop:20}}>
          <div>
            <h1 style={{margin:0, fontSize:28}}>Design & ship beautiful shopping experiences — fast.</h1>
            <p style={{color:'#6b7280', marginTop:8}}>A clean, responsive demo e-commerce website built with React (plain CSS).</p>
            <div style={{marginTop:12, display:'flex', gap:10}}>
              <button className="btn primary">Start shopping</button>
              <button className="btn">Contact sales</button>
            </div>
          </div>

          <div style={{marginLeft:'auto', maxWidth:320}}>
            <div style={{background:'#f8fbff', padding:12, borderRadius:12}}>
              <div style={{fontWeight:700}}>Free shipping</div>
              <div style={{color:'#6b7280', marginTop:6}}>On orders over $50</div>
            </div>
          </div>
        </div>
      </section>

      <section style={{marginTop:28}}>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <h2 style={{margin:0}}>Featured products</h2>
          <div>
            <input placeholder="Search products..." value={query} onChange={(e)=>setQuery(e.target.value)} style={{padding:8, borderRadius:8, border:'1px solid #e6e9ee'}} />
          </div>
        </div>

        <div className="products">
          {items.map(p => (
            <ProductCard key={p.id} product={p} onAdd={onAdd} onView={onView} />
          ))}
        </div>
      </section>

      <section id="about" style={{marginTop:40, background:'#fff', padding:16, borderRadius:12, boxShadow:'0 8px 24px rgba(20,20,50,0.04)'}}>
        <h3 style={{marginTop:0}}>Why shop with us?</h3>
        <p style={{color:'#6b7280'}}>Curated products, fast shipping, friendly support. This demo shows client-side cart functionality, product previews, and a clean UI ready to extend.</p>
      </section>
    </main>
  );
}
