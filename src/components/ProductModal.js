import React from 'react';

export default function ProductModal({ product, onClose, onAdd }) {
  if (!product) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <img src={product.img} alt={product.name} />
        <div className="mcont">
          <div style={{color:'#6b7280'}}>{product.rating} ★</div>
          <h3 style={{marginTop:8}}>{product.name}</h3>
          <div style={{marginTop:6, fontWeight:700}}>${product.price.toFixed(2)}</div>
          <p style={{color:'#374151', marginTop:12}}>{product.description}</p>
          <div style={{marginTop:18, display:'flex', gap:12}}>
            <button className="btn primary" onClick={() => { onAdd(product); onClose(); }}>Add to cart</button>
            <button className="btn" onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}
