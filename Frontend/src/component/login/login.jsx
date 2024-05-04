import React, { useState } from "react";
import "./login.css";
import Headerlogin from "./Headerlogin.jsx";
import Footer from "../Footer/Footer.jsx";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; // Importez axios

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { username, password })
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          navigate("/"); // Redirect as before
          localStorage.setItem("isLoggedIn", "true"); // Set login state in storage
          // Trigger custom event to notify Header component
          window.dispatchEvent(new Event("loginSuccess"));
        }
      })
      .then((response) => {
        alert("LOGIN AVEC SUCCES! Welcome back! Time to crush your fitness goals.");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <fieldset>
        <Headerlogin />
        <h2 className="">Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              className="input"
              id="username"
              name="username"
              onChange={(e) => {
                setUsername(e.target.value);
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
