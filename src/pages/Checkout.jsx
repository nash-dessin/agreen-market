import React, { useState } from "react";
import { useLocation, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Checkout() {
  const { state } = useLocation();
  const { order } = state || {};
  const { clearCart } = useCart();
  const [guestReceiptSent, setGuestReceiptSent] = useState(false);

  function handleContinueAsGuest() {
    // just to simulate sending receipt to guest email
    setGuestReceiptSent(true);
    clearCart();
  }

  if (!order) {
    return (
      <div>
        <h2>Checkout</h2>
        <p>No order details available. Please start from your <NavLink to="/cart">cart</NavLink>.</p>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <h2>Order placed successfully</h2>
      <p>Thank you{order.guest?.name ? `, ${order.guest.name}` : ''}! Your order was processed.</p>

      <div style={{ border: '1px solid #eee', padding: 12, borderRadius: 6, marginTop: 12 }}>
        <h3>Order summary</h3>
        <div>
          {order.items.map((it) => (
            <div key={it.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0' }}>
              <span>{it.name} x{it.quantity}</span>
              <span>KSH {(it.price * it.quantity).toFixed(2)}</span>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}>
          <span>Subtotal</span>
          <strong>KSH {order.subtotal.toFixed(2)}</strong>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
          <span>Delivery</span>
          <strong>KSH {order.deliveryFee.toFixed(2)}</strong>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}>
          <span>Total</span>
          <strong>KSH {order.total.toFixed(2)}</strong>
        </div>
      </div>

      <div style={{ marginTop: 16 }}>
        <p>If you have an account you can <NavLink to="/login">login</NavLink> or <NavLink to="/signup">sign up</NavLink> to save this order.</p>

        {!guestReceiptSent ? (
          <div>
            <p>Or continue as guest and receive a receipt at <strong>{order.guest?.email}</strong></p>
            <button onClick={handleContinueAsGuest} style={{ padding: '8px 12px', background: '#2d6a4f', color: '#fff', border: 'none', borderRadius: 6 }}>Continue as guest</button>
          </div>
        ) : (
          <div style={{ marginTop: 12 }}>
            <p>Receipt sent to <strong>{order.guest?.email}</strong>. Thank you!</p>
            <p><NavLink to="/products">Back to shopping</NavLink></p>
          </div>
        )}
      </div>
    </div>
  );
}
