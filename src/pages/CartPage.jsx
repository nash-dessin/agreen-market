import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
import AuthLogin from "./AuthLogin";
import AuthSignUp from "./AuthSignUp";

export default function CartPage() {
  const { cart, updateQuantity, removeItem, subtotal, deliveryFee, total } = useCart();
  const [guest, setGuest] = useState({ name: "", email: "", address: "", phone: "", instructions: "" });
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setGuest((g) => ({ ...g, [name]: value }));
  }

  function handleCheckout(e) {
    e.preventDefault();

    const order = { items: cart, subtotal, deliveryFee, total, guest };
    navigate("/checkout", { state: { order } });
  }

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <div>
          <p>Your cart is empty.</p>
          <NavLink to="/products">Browse products</NavLink>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 24 }}>
          <div>
            {cart.map((item) => (
              <div key={item.id} style={{ borderBottom: '1px solid #eee', padding: 12, display: 'flex', gap: 12, alignItems: 'center' }}>
                <img src={item.img} alt={item.name} style={{ width: 80, height: 80, objectFit: 'cover', borderRadius: 6 }} />
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <strong>{item.name}</strong>
                    <span style={{ fontWeight: 700 }}>KSH {(item.price || 0).toFixed(2)}</span>
                  </div>
                  <div style={{ color: '#666', marginTop: 6 }}>{item.vendor}</div>
                  <div style={{ marginTop: 8, display: 'flex', gap: 8, alignItems: 'center' }}>
                    <button type="button" onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button type="button" onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}>+</button>
                    <button type="button" style={{ marginLeft: 12 }} onClick={() => removeItem(item.id)}>Remove</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <aside style={{ border: '1px solid #eee', padding: 12, borderRadius: 6 }}>
            <h3>Summary</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Subtotal</span>
              <strong>KSH {subtotal.toFixed(2)}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}>
              <span>Delivery</span>
              <strong>KSH {deliveryFee.toFixed(2)}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 12 }}>
              <span>Total</span>
              <strong>KSH {total.toFixed(2)}</strong>
            </div>

            <form onSubmit={handleCheckout} style={{ marginTop: 16 }}>
              <h4>Guest info</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <input name="name" value={guest.name} onChange={handleChange} required placeholder="Full name" />
                <input name="email" value={guest.email} onChange={handleChange} required type="email" placeholder="Email" />
                <input name="address" value={guest.address} onChange={handleChange} required placeholder="Shipping address" />
                <input name="phone" value={guest.phone} onChange={handleChange} placeholder="Phone (optional)" />
                <textarea name="instructions" value={guest.instructions} onChange={handleChange} placeholder="Delivery instructions (optional)" />
              </div>

              <button type="submit" style={{ marginTop: 12, width: '100%', padding: 10, background: '#2d6a4f', color: '#fff', border: 'none', borderRadius: 6 }}>Proceed to checkout</button>
            </form>

            <div style={{ marginTop: 12 }}>
              <p>Already have an account? <NavLink to="/login" state={{ from: '/checkout' }}>Login</NavLink> or <NavLink to="/signup" state={{ from: '/checkout' }}>Sign up</NavLink></p>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}
