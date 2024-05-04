import React from 'react';
import './Registration.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import Axios from "axios"

function Registration() {
  const [listOfUsers,setListOfUsers] = useState([]);
  const [username, setUserName]=useState("")
  const [dob, setDob]=useState("")
  const [email, setEmail]=useState("")
  const [password, setPassword]=useState("")
  const [height, setHeight]=useState(0)
  const [weight, setWeight]=useState(0)
  const [numberOfSession, setNumberOfSession]=useState(2)
  const [objectif, setObjectif]=useState("")

  useEffect(() => {
    Axios.get("http://localhost:3001/getUsers")
      .then((response) => {
        setListOfUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);


  const createUser= () => {
    Axios.post("http://localhost:3001/createusers", {
     username,
     dob,
     email,
     password,
     height,
     weight,
     numberOfSession,
     objectif
     }).then((response) => {
      alert("USER CREATED")
    })
  };


  return (
    <div>
      <form >

        <fieldset>
          <h2>Sign Up</h2>

          <div className="Field">
            <label>
              Username<sup></sup>

            </label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={(event) =>{
                setUserName(event.target.value)
                }}
            />
          </div>

          <div className="Field">
            <label>Date of Birth<sup></sup>

            </label>
            <input
              type="string"
              name="dateOfBirth"
              placeholder="Date of Birth"
              onChange={(event) =>{
                setDob(event.target.value)
                }}
            />
          </div>

          <div className="Field">
            <label>
              Email  <sup></sup>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email address"
              onChange={(event) =>{
                setEmail(event.target.value)
                }}
            />
          </div>

          <div className="Field">
            <label>
              Password <sup></sup>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={(event) =>{
                setPassword(event.target.value)
                }}
            />
          </div>

          <div className="Field">
            <label>Confirm Password </label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
            />
          </div>
        {/*REGISTRATION22222222*/ }
        <div className="Field">
            <label>Height(cm)</label>
            <input
              type="text"
              name="poids"
              placeholder="Poids"
              onChange={(event) =>{
                setHeight(event.target.value)
                }}
            />
          </div>
          <div className="Field">
            <label>Weight(kg)</label>
            <input
              type="text"
              name="taille"
              placeholder="Taille"
              onChange={(event) =>{
                setWeight(event.target.value)
                }}
            />
          </div>
          <div className="hh">
            <label className="hh-label">Number of session per week</label>
            <div className="range-container">
              <input type="range" name="entrainementParJour" min={2} max={6} step={1} onChange={(event) =>{
                setNumberOfSession(event.target.value)
                }} />

              <output
                className="hh-output"
              >
                {numberOfSession}
              </output>
            </div>
          </div>
          <div className="Field">
            <label>Objective</label>
            <select name="objectif" onChange={(event) =>{
                setObjectif(event.target.value)
                }} >
              <option>Muscle gain</option>
              <option>Loose weight</option>
              
             
            </select>
          </div>


          
          <div className="button-container">

            <Link to="/login">
              {/* Right-aligned "Next" button */}
              <button style={{ marginLeft: 'auto' }} onClick={createUser} >Submit</button>
            </Link>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default Registration;