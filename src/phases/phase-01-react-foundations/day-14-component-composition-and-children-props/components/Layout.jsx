function Layout({ children }) {
  return (
    <>
      <header style={{ padding: "15px", background: "#0f172a", color: "white", textAlign: "center" }}>
        <h2>🚀 React Engineering Series</h2>
      </header>
      <main>{children}</main>
      <footer style={{ padding: "15px", background: "#0f172a", color: "white", textAlign: "center" }}>
        <p>© 2026 React Engineering Series</p>
      </footer>
    </>
  );
}

export default Layout;