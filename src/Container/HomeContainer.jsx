import { useState, useMemo } from "react";

function HomeContainer() {
  const [search, setSearch] = useState("");
  // const [data,setData] = useState([])




  const products = [
    {
      _id: "69a4fea867409bb6131a1dcf",
      name: "shirt4444",
      price: 100,
      stock: 500,
      category: "testing111",
    },
    {
      _id: "69a4fee267409bb6131a1dd3",
      name: "ice cream",
      price: 100,
      stock: 500,
      category: "food",
    },
    {
      _id: "69a4ff1d67409bb6131a1dd5",
      name: "watch",
      price: 300,
      stock: 200,
      category: "fasion",
    },
    {
      _id: "69a5059667409bb6131a1df5",
      name: "demo",
      price: 1290,
      stock: 100,
      category: "demo",
    },
  ];

  // 🔥 Filter Logic
  const filteredProducts = useMemo(() => {
    return products.filter(
      (product) =>
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.category.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Product Dashboard</h2>

      {/* Search Area */}
      <input
        type="text"
        placeholder="Search by name or category..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={styles.search}
      />

      {/* Product Grid */}
      <div style={styles.grid}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product._id} style={styles.card}>
              <h3>{product.name}</h3>
              <p>Category: {product.category}</p>
              <p>Price: ₹{product.price}</p>
              <p>Stock: {product.stock}</p>

              <button style={styles.button}>View Details</button>
            </div>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
}

export default HomeContainer;

const styles = {
  container: {
    padding: "40px",
    background: "#f4f6f9",
    minHeight: "100vh",
  },
  heading: {
    marginBottom: "20px",
  },
  search: {
    width: "300px",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    marginBottom: "30px",
    fontSize: "14px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
    gap: "20px",
  },
  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
  },
  button: {
    marginTop: "10px",
    padding: "8px 12px",
    borderRadius: "6px",
    border: "none",
    background: "#4f46e5",
    color: "#fff",
    cursor: "pointer",
  },
};
