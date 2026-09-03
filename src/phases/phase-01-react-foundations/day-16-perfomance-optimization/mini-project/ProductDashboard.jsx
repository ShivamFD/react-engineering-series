import { useCallback, useMemo, useState } from "react";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import products from "../data/products";

function ProductDashboard() {
  const [search, setSearch] = useState("");

  const handleSearch = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  const filteredProducts = useMemo(() => {
    console.log("Filtering Products...");

    return products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "40px auto",
      }}
    >
      <h1>🚀 Product Dashboard</h1>

      <SearchBar
        search={search}
        handleSearch={handleSearch}
      />

      <h3>Total Products : {filteredProducts.length}</h3>

      {filteredProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}

export default ProductDashboard;