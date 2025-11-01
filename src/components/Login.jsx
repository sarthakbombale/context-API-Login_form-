import React, { useState, useContext } from "react";
import { Form, Button, Card } from "react-bootstrap";
import UserContext from "../context/userContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) {
      alert("Please fill in all fields!");
      return;
    }
    setUser({ username, password });
    setUsername("");
    setPassword("");
  };

  return (
    <Card
      className="shadow-lg border-0 p-4 text-center"
      style={{
        width: "400px",
        borderRadius: "16px",
        background: "#fff",
      }}
    >
      <h2 className="fw-bold mb-4" style={{ color: "#343a40" }}>
        Login
      </h2>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ borderRadius: "10px" }}
          />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ borderRadius: "10px" }}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          className="w-100"
          style={{
            background: "linear-gradient(90deg, #4e54c8, #8f94fb)",
            border: "none",
            borderRadius: "10px",
            fontWeight: "600",
          }}
        >
          Submit
        </Button>
      </Form>
    </Card>
  );
}

export default Login;
