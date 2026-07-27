import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function SignInContainer() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false)

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsLoading(true);

  try {
    const response = await axios.post("http://localhost:3030/signin", form);

    console.log("Response:", response.data);

    // Save token from backend
    localStorage.setItem("token", response.data.token);

    navigate("/home");
    alert("Sign In Successfully");
  } catch (err) {
    console.log("Error:", err);
    alert("Invalid credentials");
  } finally {
    setIsLoading(false);
  }
};


  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Welcome Back</h2>

        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            style={styles.input}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            style={styles.input}
          />

          <button
            type="submit"
            style={styles.button}
          >
            Sign In
          </button>
        </form>

        <p style={styles.signupText}>
          Don't have an account?{" "}
          <Link to="/" style={styles.signupLink}>
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignInContainer;

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f4f6f9",
  },
  card: {
    width: "350px",
    padding: "30px",
    borderRadius: "12px",
    background: "#ffffff",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    fontSize: "14px",
  },
  button: {
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    background: "#4f46e5",
    color: "#fff",
    fontSize: "15px",
    cursor: "pointer",
  },
  signupText: {
    marginTop: "15px",
    textAlign: "center",
    fontSize: "14px",
  },
  signupLink: {
    color: "#4f46e5",
    textDecoration: "none",
    fontWeight: "bold",
  },
};
