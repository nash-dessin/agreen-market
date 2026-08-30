const formatKES = (amount) => `KES ${Number(amount).toLocaleString()}`;

const Cart = () => {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const delivery = subtotal > 1500 ? 0 : 250;
  const total = subtotal + delivery;

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <div style={styles.headerRow}>
          <div>
            <p style={styles.eyebrow}>Your Basket</p>
            <h2 style={styles.title}>Shopping Cart</h2>
          </div>
          <span style={styles.itemCount}>{cartItems.length} items</span>
        </div>

        <div style={styles.contentRow}>
          <div style={styles.itemsColumn}>
            {cartItems.map((item) => (
              <div key={item.id} style={styles.itemCard}>
                <img src={item.image} alt={item.name} style={styles.itemImage} />

                <div style={styles.itemDetails}>
                  <h3 style={styles.itemName}>{item.name}</h3>
                  <p style={styles.meta}>{item.unit} • {formatKES(item.price)} each</p>

                  <div style={styles.itemFooter}>
                    <div style={styles.qtyBox}>
                      <button style={styles.qtyButton}>-</button>
                      <span style={styles.qtyValue}>{item.quantity}</span>
                      <button style={styles.qtyButton}>+</button>
                    </div>

                    <strong style={styles.itemTotal}>
                      {formatKES(item.price * item.quantity)}
                    </strong>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <aside style={styles.summaryCard}>
            <h3 style={styles.summaryTitle}>Order Summary</h3>

            <div style={styles.summaryRow}>
              <span>Subtotal</span>
              <span>{formatKES(subtotal)}</span>
            </div>

            <div style={styles.summaryRow}>
              <span>Delivery</span>
              <span>{delivery === 0 ? 'Free' : formatKES(delivery)}</span>
            </div>

            <div style={styles.summaryRow}>
              <span>Tax</span>
              <span>{formatKES(0)}</span>
            </div>

            <div style={{ ...styles.summaryRow, ...styles.totalRow }}>
              <span>Total</span>
              <span>{formatKES(total)}</span>
            </div>

            <button style={styles.primaryButton}>Checkout</button>
            <button style={styles.secondaryButton}>Continue Shopping</button>
          </aside>
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: '100vh',
    background: '#f5f7f3',
    padding: '40px 20px',
    fontFamily: 'Arial, sans-serif',
    color: '#1f2937',
  },
  container: {
    maxWidth: '1100px',
    margin: '0 auto',
  },
  headerRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '24px',
  },
  eyebrow: {
    margin: 0,
    color: '#4d7c0f',
    fontSize: '12px',
    fontWeight: 700,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
  },
  title: {
    margin: '8px 0 0',
    fontSize: '32px',
    fontWeight: 700,
  },
  itemCount: {
    background: '#e7f5d8',
    color: '#3f6212',
    padding: '8px 12px',
    borderRadius: '999px',
    fontSize: '14px',
    fontWeight: 600,
  },
  contentRow: {
    display: 'flex',
    gap: '28px',
    alignItems: 'flex-start',
  },
  itemsColumn: {
    flex: '1.6',
    display: 'flex',
    flexDirection: 'column',
    gap: '18px',
  },
  itemCard: {
    display: 'flex',
    gap: '18px',
    background: '#fff',
    borderRadius: '18px',
    padding: '18px',
    boxShadow: '0 10px 24px rgba(15, 23, 42, 0.05)',
  },
  itemImage: {
    width: '120px',
    height: '120px',
    objectFit: 'cover',
    borderRadius: '14px',
  },
  itemDetails: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  itemName: {
    margin: 0,
    fontSize: '22px',
  },
  meta: {
    margin: '8px 0',
    color: '#6b7280',
    fontSize: '14px',
  },
  itemFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  qtyBox: {
    display: 'flex',
    alignItems: 'center',
    background: '#f3f4f6',
    borderRadius: '12px',
    overflow: 'hidden',
  },
  qtyButton: {
    border: 'none',
    background: 'transparent',
    padding: '10px 12px',
    fontSize: '20px',
    cursor: 'pointer',
    color: '#111827',
  },
  qtyValue: {
    padding: '8px 14px',
    fontWeight: 700,
  },
  itemTotal: {
    fontSize: '18px',
    color: '#111827',
  },
  summaryCard: {
    flex: '0.8',
    background: '#fff',
    padding: '24px',
    borderRadius: '18px',
    boxShadow: '0 10px 24px rgba(15, 23, 42, 0.05)',
    border: '1px solid #e5e7eb',
  },
  summaryTitle: {
    margin: '0 0 18px',
    fontSize: '24px',
  },
  summaryRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '14px',
    color: '#4b5563',
    fontSize: '15px',
  },
  totalRow: {
    marginTop: '18px',
    paddingTop: '18px',
    borderTop: '1px solid #e5e7eb',
    fontSize: '20px',
    fontWeight: 700,
    color: '#111827',
  },
  primaryButton: {
    width: '100%',
    border: 'none',
    background: '#16a34a',
    color: '#fff',
    fontWeight: 700,
    padding: '14px 18px',
    borderRadius: '12px',
    cursor: 'pointer',
    marginTop: '18px',
    fontSize: '16px',
  },
  secondaryButton: {
    width: '100%',
    border: '1px solid #d1d5db',
    background: '#fff',
    color: '#111827',
    fontWeight: 600,
    padding: '14px 18px',
    borderRadius: '12px',
    cursor: 'pointer',
    marginTop: '12px',
    fontSize: '16px',
  },
};

export default Cart;
