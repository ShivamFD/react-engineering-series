function SearchBar({ search, handleSearch }) {
  return (
    <input
      type="text"
      placeholder="Search Product..."
      value={search}
      onChange={handleSearch}
      style={{
        width: "100%",
        padding: "10px",
        marginBottom: "20px",
      }}
    />
  );
}

export default SearchBar;