import React from 'react';

export default function ProductCard({ product, onAdd, onView }) {
  return (
    <div className="card" aria-label={product.name}>
      <div className="imgwrap">
        <img src={product.img} alt={product.name} />
      </div>
      <div className="meta">
        <div className="title">{product.name}</div>
        <div className="muted">{product.rating} ★</div>
        <div className="price">${product.price.toFixed(2)}</div>
        <div className="muted-sm" style={{marginTop:8}}>{product.description}</div>

        <div className="actions">
          <button className="small add" onClick={() => onAdd(product)}>Add to cart</button>
          <button className="small" onClick={() => onView(product)}>View</button>
        </div>
      </div>
    </div>
  );
}
