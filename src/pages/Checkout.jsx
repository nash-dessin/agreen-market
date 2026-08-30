import React, { useState } from 'react';

const initialOrder = {
  customerName: 'Jane Wanjiku',
  email: 'jane@example.com',
  phone: '+254 712 345 678',
  address: 'Nairobi, Kenya',
  total: 2450,
  items: ['Fresh Tomatoes', 'Cabbages', 'Onions'],
};

const styles = {
  page: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#f4f7f3',
    padding: '32px 16px',
    fontFamily: 'Arial, sans-serif',
  },
  container: {
    width: '100%',
    maxWidth: '900px',
    background: '#ffffff',
    borderRadius: '16px',
    boxShadow: '0 12px 28px rgba(16, 24, 40, 0.08)',
    padding: '32px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '24px',
    borderBottom: '1px solid #e5e7eb',
    paddingBottom: '16px',
  },
  title: {
    margin: 0,
    fontSize: '2rem',
    color: '#1f2937',
  },
  badge: {
    background: '#e8f5e9',
    color: '#2e7d32',
    borderRadius: '999px',
    padding: '8px 12px',
    fontWeight: 700,
    fontSize: '0.8rem',
  },
  content: {
    display: 'grid',
    gridTemplateColumns: '1.5fr 1fr',
    gap: '24px',
  },
  form: {
    display: 'grid',
    gap: '18px',
  },
  fieldRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '16px',
  },
  label: {
    display: 'grid',
    gap: '8px',
    color: '#374151',
    fontWeight: 600,
  },
  input: {
    border: '1px solid #d1d5db',
    borderRadius: '10px',
    padding: '12px 14px',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.2s ease',
  },
  checkboxRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    color: '#374151',
    fontWeight: 500,
  },
  actions: {
    display: 'flex',
    gap: '12px',
    marginTop: '8px',
  },
  primaryButton: {
    background: '#2563eb',
    border: 'none',
    color: '#fff',
    borderRadius: '10px',
    fontWeight: 700,
    padding: '12px 18px',
    cursor: 'pointer',
  },
  secondaryButton: {
    background: '#f3f4f6',
    border: '1px solid #d1d5db',
    color: '#111827',
    borderRadius: '10px',
    fontWeight: 700,
    padding: '12px 18px',
    cursor: 'pointer',
  },
  summary: {
    background: '#f9fafb',
    border: '1px solid #e5e7eb',
    borderRadius: '14px',
    padding: '20px',
  },
  summaryTitle: {
    margin: '0 0 18px',
    color: '#111827',
    fontSize: '1.25rem',
  },
  itemList: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'grid',
    gap: '12px',
  },
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '12px',
    color: '#374151',
  },
  totalRow: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: '16px',
    borderTop: '1px solid #e5e7eb',
    marginTop: '16px',
    fontWeight: 700,
    fontSize: '1.1rem',
  },
  alert: {
    borderRadius: '12px',
    padding: '14px 16px',
    marginBottom: '20px',
    fontWeight: 600,
  },
  success: {
    background: '#e8f5e9',
    border: '1px solid #a5d6a7',
    color: '#1b5e20',
  },
  error: {
    background: '#ffebee',
    border: '1px solid #ef9a9a',
    color: '#b71c1c',
  },
};

function Checkout() {
  const [order, setOrder] = useState(initialOrder);
  const [saveInfo, setSaveInfo] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setOrder((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (status.type) {
      setStatus({ type: '', message: '' });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!order.customerName.trim() || !order.email.trim() || !order.address.trim()) {
      setStatus({
        type: 'error',
        message: 'Please fill in your name, email, and delivery address to continue.',
      });
      return;
    }

    const emailIsValid = /\S+@\S+\.\S+/.test(order.email);

    if (!emailIsValid) {
      setStatus({
        type: 'error',
        message: 'Please enter a valid email address.',
      });
      return;
    }

    setStatus({
      type: 'success',
      message: saveInfo
        ? `Order confirmed! ${order.customerName.split(' ')[0]}, your details have been saved for future orders.`
        : `Order confirmed! A confirmation email has been sent to ${order.email}.`,
    });
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h1 style={styles.title}>Checkout</h1>
          <span style={styles.badge}>Ready to ship</span>
        </div>

        {status.type && (
          <div
            style={{
              ...styles.alert,
              ...(status.type === 'success' ? styles.success : styles.error),
            }}
          >
            {status.message}
          </div>
        )}

        <div style={styles.content}>
          <form style={styles.form} onSubmit={handleSubmit}>
            <div style={styles.fieldRow}>
              <label style={styles.label}>
                Full name
                <input
                  style={styles.input}
                  type="text"
                  name="customerName"
                  value={order.customerName}
                  onChange={handleChange}
                  placeholder="Your full name"
                />
              </label>

              <label style={styles.label}>
                Phone number
                <input
                  style={styles.input}
                  type="tel"
                  name="phone"
                  value={order.phone}
                  onChange={handleChange}
                  placeholder="Phone number"
                />
              </label>
            </div>

            <label style={styles.label}>
              Email address
              <input
                style={styles.input}
                type="email"
                name="email"
                value={order.email}
                onChange={handleChange}
                placeholder="you@example.com"
              />
            </label>

            <label style={styles.label}>
              Delivery address
              <input
                style={styles.input}
                type="text"
                name="address"
                value={order.address}
                onChange={handleChange}
                placeholder="Street, city, country"
              />
            </label>

            <label style={styles.checkboxRow}>
              <input
                type="checkbox"
                checked={saveInfo}
                onChange={() => setSaveInfo((previous) => !previous)}
              />
              Save my information for future orders
            </label>

            <div style={styles.actions}>
              <button type="submit" style={styles.primaryButton}>
                Confirm order
              </button>
              <button type="button" style={styles.secondaryButton}>
                Cancel
              </button>
            </div>
          </form>

          <aside style={styles.summary}>
            <h2 style={styles.summaryTitle}>Order summary</h2>

            <ul style={styles.itemList}>
              {order.items.map((item) => (
                <li key={item} style={styles.item}>
                  <span>{item}</span>
                  <span>KSh 850</span>
                </li>
              ))}
            </ul>

            <div style={styles.totalRow}>
              <span>Total</span>
              <span>KSh {order.total}</span>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
