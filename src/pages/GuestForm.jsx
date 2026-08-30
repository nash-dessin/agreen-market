import React, { useState } from 'react';
import './GuestForm.css';

const GuestForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    // Shipping Info
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    // Billing Info
    billingAddress: '',
    billingCity: '',
    billingState: '',
    billingZipCode: '',
    sameAsShipping: true,
    // Payment Info
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <div className="guest-form-container">
      <h1>Guest Checkout</h1>
      <form onSubmit={handleSubmit} className="guest-form">
        
        {/* Shipping Information */}
        <section className="form-section">
          <h2>Shipping Information</h2>
          
          <div className="form-row">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="address"
            placeholder="Street Address"
            value={formData.address}
            onChange={handleChange}
            required
          />

          <div className="form-row">
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="state"
              placeholder="State/Province"
              value={formData.state}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="zipCode"
              placeholder="Zip/Postal Code"
              value={formData.zipCode}
              onChange={handleChange}
              required
            />
          </div>

          <input
            type="text"
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={handleChange}
            required
          />
        </section>

        {/* Billing Information */}
        <section className="form-section">
          <h2>Billing Information</h2>
          
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="sameAsShipping"
              checked={formData.sameAsShipping}
              onChange={handleChange}
            />
            Same as Shipping Address
          </label>

          {!formData.sameAsShipping && (
            <>
              <input
                type="text"
                name="billingAddress"
                placeholder="Street Address"
                value={formData.billingAddress}
                onChange={handleChange}
              />

              <div className="form-row">
                <input
                  type="text"
                  name="billingCity"
                  placeholder="City"
                  value={formData.billingCity}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="billingState"
                  placeholder="State/Province"
                  value={formData.billingState}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="billingZipCode"
                  placeholder="Zip/Postal Code"
                  value={formData.billingZipCode}
                  onChange={handleChange}
                />
              </div>
            </>
          )}
        </section>

        {/* Payment Information */}
        <section className="form-section">
          <h2>Payment Information</h2>
          
          <input
            type="text"
            name="cardName"
            placeholder="Cardholder Name"
            value={formData.cardName}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="cardNumber"
            placeholder="Card Number"
            value={formData.cardNumber}
            onChange={handleChange}
            maxLength="19"
            required
          />

          <div className="form-row">
            <input
              type="text"
              name="expiryDate"
              placeholder="MM/YY"
              value={formData.expiryDate}
              onChange={handleChange}
              maxLength="5"
              required
            />
            <input
              type="text"
              name="cvv"
              placeholder="CVV"
              value={formData.cvv}
              onChange={handleChange}
              maxLength="4"
              required
            />
          </div>
        </section>

        <button type="submit" className="submit-btn">Complete Purchase</button>
      </form>
    </div>
  );
};

export default GuestForm;
1