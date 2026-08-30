import React from "react";

const WeatherInfo = () => {
  const weather = {
    icon: import.meta.env.VITE_WEATHER_ICON ?? "☀️",
    temperature: Number(import.meta.env.VITE_WEATHER_TEMP ?? 24),
    condition: import.meta.env.VITE_WEATHER_CONDITION ?? "Partly Cloudy",
    humidity: Number(import.meta.env.VITE_WEATHER_HUMIDITY ?? 61),
    wind: Number(import.meta.env.VITE_WEATHER_WIND ?? 12),
  };

  const seasonalProducts = (
    import.meta.env.VITE_SEASONAL_PRODUCTS ?? "Maize, Tomatoes, Mangoes"
  )
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

  return (
    <div
      style={{
        width: "240px",
        borderRadius: "16px",
        padding: "18px 20px",
        background: "linear-gradient(180deg, #fffaf0 0%, #f4f7eb 100%)",
        border: "1px solid #d8e4b5",
        boxShadow: "0 8px 18px rgba(42, 72, 35, 0.12)",
        fontFamily: "Arial, sans-serif",
        color: "#2c3e2a",
      }}
    >
      <h3
        style={{
          margin: "0 0 12px",
          textAlign: "center",
          fontSize: "18px",
          color: "#2f5d32",
        }}
      >
        Market Weather
      </h3>

      <div style={{ textAlign: "center", marginBottom: "14px" }}>
        <div style={{ fontSize: "30px", lineHeight: 1 }}>{weather.icon}</div>
        <div style={{ fontSize: "28px", fontWeight: 700, marginTop: "6px" }}>
          {weather.temperature}°C
        </div>
        <div style={{ fontSize: "16px", marginTop: "4px", color: "#536a4b" }}>
          {weather.condition}
        </div>
      </div>

      <div style={{ borderTop: "1px solid #dfe9d0", paddingTop: "12px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "8px",
            fontSize: "14px",
          }}
        >
          <span>Humidity</span>
          <strong>{weather.humidity}%</strong>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "14px",
          }}
        >
          <span>Wind</span>
          <strong>{weather.wind} km/h</strong>
        </div>
      </div>

      <div style={{ marginTop: "18px", borderTop: "1px solid #dfe9d0", paddingTop: "12px" }}>
        <div style={{ fontWeight: 700, marginBottom: "8px", fontSize: "14px" }}>
          Seasonal products
        </div>
        <ul
          style={{
            margin: 0,
            paddingLeft: "18px",
            fontSize: "13px",
            color: "#415b3b",
            lineHeight: 1.6,
          }}
        >
          {seasonalProducts.map((product) => (
            <li key={product}>{product}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WeatherInfo;
