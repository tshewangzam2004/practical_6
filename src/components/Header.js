import React from 'react';

export default function Header({ onOpenCart, cartCount }) {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div style={{display:'flex', alignItems:'center'}}>
          <div className="brand">
            <div className="logo">EC</div>
            <div style={{marginLeft:12}}>
              <div style={{fontWeight:700}}>E-Collective</div>
              <div style={{fontSize:12,color:'#6b7280'}}>Modern e-commerce demo</div>
            </div>
          </div>
          <nav className="primary-nav" style={{marginLeft:24}}>
            <a href="#products">Products</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>

        <div style={{display:'flex', gap:12, alignItems:'center'}}>
          <button className="btn">Sign in</button>
          <div style={{position:'relative'}}>
            <button onClick={onOpenCart} className="btn primary cart-toggle">Cart</button>
            {cartCount > 0 && <div className="badge">{cartCount}</div>}
          </div>
        </div>
      </div>
    </header>
  );
}
