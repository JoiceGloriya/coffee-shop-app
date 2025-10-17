import React from "react";

export default function Cart({ items, removeFromCart }) {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div
      style={{
        background: "#fff8e1",
        padding: "2rem",
        textAlign: "center",
        marginTop: "1rem",
      }}
    >
      <h2 style={{ color: "#4e342e" }}>🛒 Your Cart</h2>
      {items.length === 0 ? (
        <p style={{ color: "#6d4c41" }}>No items added yet.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {items.map((item, index) => (
            <li
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid #ddd",
                padding: "0.5rem 0",
                maxWidth: "400px",
                margin: "0 auto",
              }}
            >
              <span style={{ color: "#3e2723" }}>{item.name}</span>
              <span>₹{item.price}</span>
              <button
                onClick={() => removeFromCart(index)}
                style={{
                  background: "#d32f2f",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  padding: "0.3rem 0.6rem",
                  cursor: "pointer",
                }}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      )}
      <h3 style={{ color: "#3e2723", marginTop: "1rem" }}>Total: ₹{total}</h3>
    </div>
  );
}
