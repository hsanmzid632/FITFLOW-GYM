import React, { useState } from "react";
import "./login.css";
import Headerlogin from "./Headerlogin.jsx";
import Footer from "../Footer/Footer.jsx";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; // Importez axios

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sending login request:", { email, password }); // Log request data
    axios
      .post("http://localhost:3001/login", { email, password })
      .then((result) => {
        console.log("Login response:", result); // Log response data
        if (result.data.status === "success") {
          console.log("Dispatching loginSuccess event"); // Log before dispatch
          navigate("/"); // Redirect as before
          sessionStorage.setItem("isLoggedIn", "true"); // Set login state in session storage
          console.log('Storing email in sessionStorage:', email); // Debugging log
          sessionStorage.setItem("userEmail", email); // Store email in session storage
          window.dispatchEvent(new Event("loginSuccess"));
          alert("LOGIN AVEC SUCCES! Welcome back! Time to crush your fitness goals.");
        } else {
          alert(result.data.message); // Show error message from server
        }
      })
      .catch((err) => {
        console.error("Login error:", err); // Log error
        alert("Login failed. Please check your credentials and try again.");
      });
  };

  return (
    <div>
      <fieldset>
        <Headerlogin />
        <h2 className="">Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              className="input"
              id="email"
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              className="input"
              id="password"
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="button-container">
            <button type="submit">Login</button>
            <Link to="/Registration">
              <button type="button">Sign Up</button>
            </Link>
          </div>
        </form>
      </fieldset>
      <Footer />
    </div>
  );
}

export default Login;
