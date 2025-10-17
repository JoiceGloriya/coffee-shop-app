import React from "react";

export default function Menu({ addToCart }) {
  const foodItems = [
    { id: 1, name: "Croissant", price: 80, img: "https://images.unsplash.com/photo-1565958011705-44e211c3c5d9" },
    { id: 2, name: "Margherita Pizza", price: 250, img: "https://images.unsplash.com/photo-1601924638867-3ec2e9ad6c19" },
    { id: 3, name: "Pasta Alfredo", price: 220, img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b" },
    { id: 4, name: "Cheeseburger", price: 180, img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd" },
    { id: 5, name: "Chocolate Cake", price: 150, img: "https://images.unsplash.com/photo-1601972599720-bad760c1c848" },
    { id: 6, name: "Iced Coffee", price: 120, img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93" },
    { id: 7, name: "Red Velvet Cake", price: 180, img: "https://images.unsplash.com/photo-1617196034796-73f0d83d06f3" },
    { id: 8, name: "Blueberry Muffin", price: 90, img: "https://images.unsplash.com/photo-1590080875831-3c4d4d7fdf56" },
    { id: 9, name: "Tiramisu", price: 200, img: "https://images.unsplash.com/photo-1612197527762-8c9c7b69d0a4" },
    { id: 10, name: "Donut", price: 70, img: "https://images.unsplash.com/photo-1565958011702-44e211c3c5d8" },
    { id: 11, name: "Cupcake", price: 85, img: "https://images.unsplash.com/photo-1605478908400-05c41c6b52c8" },
    { id: 12, name: "Brownie", price: 110, img: "https://images.unsplash.com/photo-1627384113364-4e3a9ef8c9c8" },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(120deg, #f8f4f0, #f3e5ab)",
        padding: "3rem 2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          fontSize: "2.2rem",
          color: "#3e2723",
          fontFamily: "'Poppins', sans-serif",
          marginBottom: "2rem",
          textAlign: "center",
        }}
      >
        ☕ Brew & Bite Coffee Shop
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "1.5rem",
          width: "100%",
          maxWidth: "1100px",
        }}
      >
        {foodItems.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "12px",
              background: "white",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              textAlign: "center",
              padding: "1rem",
              transition: "transform 0.2s ease-in-out",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img
              src={item.img}
              alt={item.name}
              style={{
                width: "100%",
                height: "120px",
                objectFit: "cover",
                borderRadius: "8px",
                marginBottom: "0.8rem",
              }}
            />
            <h3 style={{ margin: "0.5rem 0", color: "#4e342e" }}>{item.name}</h3>
            <p style={{ margin: "0.3rem 0", color: "#6d4c41", fontWeight: "500" }}>₹{item.price}</p>
            <button
              style={{
                background: "#6d4c41",
                color: "white",
                border: "none",
                padding: "0.4rem 1rem",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "0.9rem",
                transition: "background 0.2s",
              }}
              onClick={() => addToCart(item)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
