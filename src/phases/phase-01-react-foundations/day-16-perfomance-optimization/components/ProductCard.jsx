import React from "react";

function ProductCard({ product }) {
  console.log("Rendering:", product.name);

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "15px",
        marginBottom: "10px",
        borderRadius: "8px",
      }}
    >
      <h3>{product.name}</h3>
      <p>₹ {product.price}</p>
    </div>
  );
}

export default React.memo(ProductCard);