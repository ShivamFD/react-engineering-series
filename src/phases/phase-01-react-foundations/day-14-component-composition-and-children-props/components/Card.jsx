function Card({ children }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "12px",
      padding: "20px",
      marginBottom: "20px",
      background: "#1e2937",
      color: "white"
    }}>
      {children}
    </div>
  );
}

export default Card;