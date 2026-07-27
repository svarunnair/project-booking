import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { Form, Input, Button, Table } from "antd";


function SignUpContainer() {
  const [isLoading, setIsLoading] = useState(false)
  const [isPressed, setIsPressed] = useState(false);
  const navigate = useNavigate();
   const data = "4385785";
   const [index, setIndex] = useState(0);
   const [output, setOutput] = useState("");
   const [form] = Form.useForm();

  // const [form, setForm] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  // });

  // const handleChange = () => {
  //   // setForm({ ...form, [e.target.name]: e.target.value });
  // };

  // console.log(" --vform", form);
  console.log("------form--",form.getFieldsValue());



  const data2 = [
    {
      key: "1",
      name: "Electronics",
      price: "-",
      children: [
        {
          key: "1-1",
          name: "Laptop",
          price: "$1000",
        },
        {
          key: "1-2",
          name: "Phone",
          price: "$800",
        },
      ],
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Department",
      dataIndex: "department",
      key: "department",
    },
  ];


  // const handleAddNewItem =()=>{
  //     if (index < data.length) {
  //       const digit = data[index];

  //       setOutput((prev) => {
  //         if (index === data.length - 1) {
  //           return prev + digit; 
  //         }
  //         return prev + digit + ",";
  //       });

  //       setIndex(index + 1);
  //     }
  // }

  const handleAddNewItem = () => {
    if (index < data.length) {
      const newOutput = data
        .slice(0, index + 1)
        .split("")
        .join(",");

      setOutput(newOutput);
      setIndex(index + 1);
    }
  };

  const buttonStyle = {
    padding: "10px 20px",
    border: "1px solid black",
    backgroundColor: isPressed ? "#ddd" : "white", 
    transform: isPressed ? "scale(0.95)" : "scale(1)", 
    transition: "0.1s",
    outline: "none",
    cursor:"pointer",
    borderRadius:20
  };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     console.log("Signup Data:", form);

//     // After successful signup
   
//   };


//   const postSignUpData =async()=>{
//     setIsLoading(true)
   
//   }


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post("http://localhost:3030/signup", form);
      console.log("---respo-", response);
      setIsLoading(false);
      navigate("/signin");
      alert("SignUp Successflly");
    } catch (err) {
      console.log("err", err);
      setIsLoading(false);
      alert("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Create Account</h2>

        <div style={{ padding: 20, flexDirection: "column", display: "flex" }}>
          <button
            onClick={handleAddNewItem}
            style={buttonStyle}
            onMouseDown={() => setIsPressed(true)}
            onMouseUp={() => setIsPressed(false)}
            onMouseLeave={() => setIsPressed(false)}
            onTouchStart={() => setIsPressed(true)}
            onTouchEnd={() => setIsPressed(false)}
          >
            click here...
          </button>

          <text>{output}</text>
        </div>
    
        <Table columns={columns} dataSource={data2} />

        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item
            name="name"
            rules={[
              {
                required: true,
                message: "Enter your name",
              },
            ]}
          >
            <Input placeholder="Name" />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[
              {
                required: true,
              },
              {
                type: "email",
              },
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Button type="primary" htmlType="submit" loading={isLoading} block>
            Sign Up
          </Button>
        </Form>

        {/* <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            style={styles.input}
          />

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
            // onClick={() => postSignUpData()}
            type="submit"
            style={styles.button}
          >
            {isLoading ? "wait..." : "Sign Up"}
          </button>
        </form> */}

        <p style={styles.loginText}>
          Already have an account?{" "}
          <Link to="/signin" style={styles.loginLink}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUpContainer;

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
  loginText: {
    marginTop: "15px",
    textAlign: "center",
    fontSize: "14px",
  },
  loginLink: {
    color: "#4f46e5",
    textDecoration: "none",
    fontWeight: "bold",
  },
};
