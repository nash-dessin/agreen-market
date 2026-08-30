export default function Vendors() {
  return (
    <div style={styles.page}>
      <h2 style={styles.heading}>Our Farmers</h2>

      <div style={styles.grid}>
        {vendors.map((vendor) => (
          <div key={vendor.name} style={styles.card}>
            <div>
              <h3 style={styles.name}>{vendor.name}</h3>
              <p style={styles.meta}>{vendor.category}</p>
              <p style={styles.meta}>{vendor.location}</p>
            </div>

            <button style={styles.button}>View Products</button>
          </div>
        ))}
      </div>
    </div>
  );
}
