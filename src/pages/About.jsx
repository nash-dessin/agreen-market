import React from "react";

const About = () => {
  return (
    <section style={styles.page}>
      <div style={styles.hero}>
        <p style={styles.eyebrow}>Fresh from the farm</p>
        <h1 style={styles.title}>About AgriMarket</h1>
        <p style={styles.subtitle}>
          A vibrant farmers' market in Nairobi, bringing together local
          growers, bakers, florists and food lovers in one joyful community space.
        </p>
      </div>

      <div style={styles.grid}>
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Our Story</h2>
          <p style={styles.text}>
            AgriMarket was created to make it easier for families in
            Karen and beyond to buy fresh, seasonal produce directly from the
            people who grow it. We believe food should be honest, healthy, and
            rooted in community.
          </p>
        </div>

        <div style={styles.card}>
          <h2 style={styles.cardTitle}>What We Stand For</h2>
          <ul style={styles.list}>
            <li>Fresh, seasonal, locally grown products</li>
            <li>Fair prices for farmers and customers</li>
            <li>Healthy living through natural foods</li>
            <li>Support for sustainable agriculture</li>
          </ul>
        </div>
      </div>

      <div style={styles.infoBox}>
        <h2 style={styles.cardTitle}>Visit the Market</h2>
        <p style={styles.text}>
          Come by for farm-fresh vegetables, fruits, eggs, honey, homemade
          treats, and a warm Nairobi market experience that feels like home.
        </p>
      </div>
    </section>
  );
};

const styles = {
  page: {
    fontFamily: "Arial, sans-serif",
    background: "linear-gradient(180deg, #f8f5ef 0%, #eef7f0 100%)",
    color: "#1f2a1f",
    padding: "48px 20px 64px",
    minHeight: "100vh",
  },
  hero: {
    maxWidth: "900px",
    margin: "0 auto 32px",
    textAlign: "center",
    background: "#fff",
    borderRadius: "18px",
    padding: "36px 24px",
    boxShadow: "0 8px 24px rgba(60, 92, 52, 0.08)",
  },
  eyebrow: {
    margin: 0,
    fontSize: "0.8rem",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "#4d7c3f",
    fontWeight: 700,
  },
  title: {
    margin: "12px 0 10px",
    fontSize: "clamp(2rem, 4vw, 3.2rem)",
    color: "#203b25",
  },
  subtitle: {
    margin: 0,
    fontSize: "1.08rem",
    lineHeight: 1.7,
    color: "#415547",
    maxWidth: "700px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  grid: {
    maxWidth: "1100px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "22px",
  },
  card: {
    background: "#ffffff",
    borderRadius: "16px",
    padding: "24px",
    boxShadow: "0 8px 20px rgba(30, 50, 30, 0.06)",
    border: "1px solid #e9efe3",
  },
  cardTitle: {
    marginTop: 0,
    marginBottom: "14px",
    fontSize: "1.45rem",
    color: "#2d4a2d",
  },
  text: {
    margin: 0,
    lineHeight: 1.8,
    color: "#42564a",
    fontSize: "1rem",
  },
  list: {
    margin: 0,
    paddingLeft: "18px",
    lineHeight: 2,
    color: "#42564a",
  },
  infoBox: {
    maxWidth: "900px",
    margin: "28px auto 0",
    background: "#e8f5e9",
    borderRadius: "16px",
    padding: "26px 24px",
    border: "1px solid #cfe7d0",
  },
};

export default About;
