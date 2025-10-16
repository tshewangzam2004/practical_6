import React from 'react';

export default function CartSidebar({ open, onClose, cart, onRemove, onSetQty, subtotal }) {
  return (
    <aside className={'cart-panel '+(open ? 'open' : '')} role="dialog" aria-hidden={!open}>
      <div className="head">
        <div style={{fontWeight:700}}>Your Cart</div>
        <button className="btn" onClick={onClose}>Close</button>
      </div>

      <div className="body">
        {cart.length === 0 ? (
          <div style={{padding:20,color:'#6b7280'}}>Your cart is empty. Add products to start.</div>
        ) : (
          cart.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.img} alt={item.name} />
              <div style={{flex:1}}>
                <div style={{fontWeight:600}}>{item.name}</div>
                <div style={{color:'#6b7280', marginTop:6}}>${item.price.toFixed(2)}</div>

                <div className="qty">
                  <button onClick={() => onSetQty(item.id, Math.max(1, item.qty - 1))}>-</button>
                  <div style={{minWidth:26, textAlign:'center'}}>{item.qty}</div>
                  <button onClick={() => onSetQty(item.id, item.qty + 1)}>+</button>
                  <button style={{marginLeft:12, color:'#ef4444', background:'transparent', border:'none', cursor:'pointer'}} onClick={() => onRemove(item.id)}>Remove</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="foot">
        <div style={{display:'flex', justifyContent:'space-between', marginBottom:12}}>
          <div style={{color:'#6b7280'}}>Subtotal</div>
          <div style={{fontWeight:700}}>${subtotal.toFixed(2)}</div>
        </div>
        <button className="btn primary" style={{width:'100%'}}>Checkout</button>
      </div>
    </aside>
  );
}
