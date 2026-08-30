function CartPage() {
  const [cartItems] = React.useState(() => {
    if (typeof window === 'undefined') return [];

    try {
      const storedItems = window.localStorage.getItem('cartItems');
      const parsedItems = storedItems ? JSON.parse(storedItems) : [];
      return Array.isArray(parsedItems) ? parsedItems : [];
    } catch {
      return [];
    }
  });
  const subtotal = cartItems.reduce((sum, item) => sum + item.qty * item.price, 0);
  const total = subtotal + deliveryFee;

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h1 style={styles.title}>Your Cart</h1>
          <span style={styles.badge}>{cartItems.length} items</span>
        </div>

        <div style={styles.content}>
          <section style={styles.section}>
            {cartItems.map((item) => (
              <div key={item.name} style={styles.itemRow}>
                <div style={styles.itemLeft}>
                  <span style={styles.itemName}>{item.name}</span>
                  <span style={styles.itemMeta}>Qty: {item.qty}</span>
                </div>
                <span style={styles.price}>KSh {(item.qty * item.price).toLocaleString()}</span>
              </div>
            ))}
          </section>

          <aside style={styles.summary}>
            <h2 style={styles.summaryTitle}>Checkout Summary</h2>

            <div style={styles.row}>
              <span>Subtotal</span>
              <span>KSh {subtotal.toLocaleString()}</span>
            </div>

            <div style={styles.row}>
              <span>Delivery</span>
              <span>KSh {deliveryFee.toLocaleString()}</span>
            </div>

            <div style={styles.totalRow}>
              <span>Total</span>
              <span>KSh {total.toLocaleString()}</span>
            </div>
          </aside>
        </div>

        <div style={styles.checkout}>
          <h2 style={styles.checkoutTitle}>Checkout</h2>
          <p style={styles.checkoutText}>Choose how you would like to continue.</p>

          <div style={styles.options}>
            <button style={{ ...styles.optionButton, ...styles.primaryButton }}>Login / Sign Up</button>
            <button style={{ ...styles.optionButton, ...styles.secondaryButton }}>Continue as Guest</button>
            <button style={{ ...styles.optionButton, ...styles.tertiaryButton }}>Back to Shop</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
const deliveryFee = 120;

const styles = {
  page: {
    minHeight: '100vh',
    background: '#f5f7f2',
    padding: '40px 20px',
    fontFamily: 'Arial, sans-serif',
    color: '#1f2937',
  },
  container: {
    maxWidth: '1000px',
    margin: '0 auto',
    background: '#fff',
    borderRadius: '18px',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
    padding: '30px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '24px',
    borderBottom: '1px solid #e5e7eb',
    paddingBottom: '16px',
  },
  title: {
    margin: 0,
    fontSize: '2rem',
  },
  badge: {
    background: '#e9f7ec',
    color: '#1f7a3d',
    borderRadius: '999px',
    padding: '8px 12px',
    fontWeight: 'bold',
    fontSize: '0.9rem',
  },
  content: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gap: '24px',
  },
  section: {
    background: '#f9fafb',
    borderRadius: '14px',
    padding: '20px',
  },
  itemRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '14px 0',
    borderBottom: '1px solid #e5e7eb',
  },
  itemLeft: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  itemName: {
    fontWeight: 'bold',
    fontSize: '1rem',
  },
  itemMeta: {
    color: '#6b7280',
    fontSize: '0.9rem',
  },
  price: {
    fontWeight: 'bold',
    fontSize: '1rem',
  },
  summary: {
    background: '#f4f9f1',
    border: '1px solid #dfeee1',
    borderRadius: '14px',
    padding: '20px',
  },
  summaryTitle: {
    margin: '0 0 16px',
    fontSize: '1.2rem',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '12px',
    color: '#374151',
  },
  totalRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '18px',
    borderTop: '1px solid #d1d5db',
    paddingTop: '16px',
    fontWeight: 'bold',
    fontSize: '1.05rem',
  },
  checkout: {
    marginTop: '28px',
    background: '#fff',
    border: '1px solid #e5e7eb',
    borderRadius: '14px',
    padding: '24px',
  },
  checkoutTitle: {
    margin: '0 0 8px',
    fontSize: '1.5rem',
  },
  checkoutText: {
    margin: '0 0 20px',
    color: '#4b5563',
  },
  options: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
    gap: '14px',
  },
  optionButton: {
    border: 'none',
    borderRadius: '12px',
    padding: '16px 14px',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
  primaryButton: {
    background: '#1f7a3d',
    color: '#fff',
  },
  secondaryButton: {
    background: '#eef6ed',
    color: '#1f7a3d',
  },
  tertiaryButton: {
    background: '#f3f4f6',
    color: '#374151',
  },
  '@media (maxWidth: 768px)': {
    content: {
      gridTemplateColumns: '1fr',
    },
    options: {
      gridTemplateColumns: '1fr',
    },
  },
};

