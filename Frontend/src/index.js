import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Login from "./login";
import Registration from "./Registration";
import Account from "./account.js";
import Planning from "./Planning.js";
import Paiment from "./paiment.js";
import Program from "./programm.js";
import Exercice from "./exercice.js";
import Nutrition from "./nutrition.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const rootElement = document.getElementById("root");

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Registration" element={<Registration />} />
      <Route path="/account1" element={<Account />} />
      <Route path="/Planning" element={<Planning />} />
      <Route path="/paiment" element={<Paiment />} />
      <Route path="/programm" element={<Program />} />
      <Route path="/exercices" element={<Exercice />} />
      <Route path="/orders" element={<Nutrition />} />
    </Routes>
  </Router>
);

ReactDOM.createRoot(rootElement).render(<AppRouter />);
