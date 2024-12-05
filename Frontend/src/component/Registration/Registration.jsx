import React, { useState, useEffect } from 'react';
import './Registration.css';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

function Registration() {
  const navigate = useNavigate();
  const [username, setUserName] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [numberOfSession, setNumberOfSession] = useState(2);
  const [objectif, setObjectif] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const [image, setImage] = useState(null);
  const [sexe, setSexe] = useState('');

  const formatDate = (date) => {
    const [day, month, year] = date.split('/');
    return `${year}-${month}-${day}`;
  };

  const createUser = () => {
    console.log('Data being sent:', {
      username,
      dob: formatDate(dob),
      email,
      password,
      height,
      weight,
      numberOfSession,
      objectif,
      image,
      sexe
    });

    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
      setMessageType('error');
      return;
    }

    Axios.post('http://localhost:3001/register', {
      username,
      dob: formatDate(dob),
      email,
      password,
      height,
      weight,
      numberOfSession,
      objectif,
      image,
      sexe
    })
      .then((response) => {
        setMessage(response.data.message);
        setMessageType(response.data.status);
        if (response.data.status === 'success') {
          setTimeout(() => navigate('/login'), 3000); // Navigate after 3 seconds
        }
      })
      .catch((error) => {
        setMessage('Registration failed. Please try again.');
        setMessageType('error');
      });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSexeChange = (e) => {
    setSexe(e.target.value);
  };

  return (
    <div className="registration">
      {message && (
        <div className={`message ${messageType}`}>{message}</div>
      )}
      <form>
        <fieldset>
          <h2>Sign Up</h2>

          <div className="Field">
            <label>Username<sup></sup></label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={(event) => {
                setUserName(event.target.value);
              }}
            />
          </div>

          <div className="Field">
            <label>Date of Birth<sup></sup></label>
            <input
              type="string"
              name="dateOfBirth"
              placeholder="Date of Birth (dd/mm/yyyy)"
              onChange={(event) => {
                setDob(event.target.value);
              }}
            />
          </div>

          <div className="Field">
            <label>Email <sup></sup></label>
            <input
              type="email"
              name="email"
              placeholder="Email address"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>

          <div className="Field">
            <label>Password <sup></sup></label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </div>

          <div className="Field">
            <label>Confirm Password </label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={(event) => {
                setConfirmPassword(event.target.value);
              }}
            />
          </div>

          <div className="Field">
            <label>Height(cm)</label>
            <input
              type="text"
              name="poids"
              placeholder="Poids"
              onChange={(event) => {
                setHeight(event.target.value);
              }}
            />
          </div>
          <div className="Field">
            <label>Weight(kg)</label>
            <input
              type="text"
              name="taille"
              placeholder="Taille"
              onChange={(event) => {
                setWeight(event.target.value);
              }}
            />
          </div>
          <div className="hh">
            <label className="hh-label">Number of session per week</label>
            <div className="range-container">
              <input
                type="range"
                name="entrainementParJour"
                min={2}
                max={6}
                step={1}
                onChange={(event) => {
                  setNumberOfSession(event.target.value);
                }}
              />

              <output className="hh-output">{numberOfSession}</output>
            </div>
          </div>
          <div className="Field">
            <label>Objective</label>
            <select
              name="objectif"
              onChange={(event) => {
                setObjectif(event.target.value);
              }}
            >
              <option>Muscle gain</option>
              <option>Loose weight</option>
            </select>
          </div>
          <div className="Field">
            <label>Sexe</label>
            <select value={sexe} onChange={handleSexeChange}>
              <option value="">Select Sexe</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="Field">
            <label>Image</label>
            <input type="file" onChange={handleImageChange} />
          </div>

          <div className="button-container">
            <button
              style={{ marginLeft: 'auto' }}
              type="button"
              onClick={createUser}
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default Registration;