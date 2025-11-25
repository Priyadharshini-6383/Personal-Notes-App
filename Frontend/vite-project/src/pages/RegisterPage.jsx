import React, { useState } from "react";
import API from "../api";

function RegisterPage() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async (e) => {
    e.preventDefault();
    try {
      await API.post("/auth/register", { name, email, password });
      alert("Registration Successful!");
      window.location.href = "/";
    } catch (error) {
      alert("Registration Failed!" , error.message);
    }
  };

  return (
  <div className="d-flex justify-content-center align-items-center vh-100 w-100">
    <div className="card shadow-lg p-4" style={{ width: "380px", borderRadius: "15px" }}>
      <h3 className="text-center mb-4">Register</h3>

      <form onSubmit={register}>
        <div className="mb-3">
          <label className="form-label fw-bold">Name</label>
          <input type="text" className="form-control" value={name}
          placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)} required />
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold">Email</label>
          <input type="email" className="form-control" value={email}
          placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)} required />
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold">Password</label>
          <input type="password" className="form-control" value={password}
          placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)} required />
        </div>

        <button className="btn btn-primary w-100 mt-2">Register</button>
      </form>
    </div>
  </div>
);

}

export default RegisterPage;
