import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './Profile.css'

const ProfilePage = () => {
  const [data, setData] = useState([]);
  const [image, setImage] = useState('');

  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const age = Math.floor((new Date() - birthDate) / (365.25 * 24 * 60 * 60 * 1000));
    return age;
  };

  useEffect(() => {
    const email = sessionStorage.getItem('userEmail');
    console.log('Retrieved email from sessionStorage:', email); // Debugging log
    Axios.get(`http://localhost:3001/account?email=${email}`)
      .then(response => {
        const userData = [
          { label: 'Poids', value: `${response.data.weight}kg` },
          { label: 'Taille', value: `${response.data.height}cm` },
          { label: 'objectif', value: response.data.objectif },
          { label: 'Age', value: calculateAge(response.data.dob) },
          { label: 'Sexe', value: response.data.sexe },
          { label: 'nombre de sc par semaine', value: response.data.numberOfSession }
        ];
        setData(userData);
        setImage(response.data.image);
      })
      .catch(error => {
        console.error('Error fetching profile data:', error);
      });
  }, []);

  return (
    <div className='profile'>
      <div className='profileHeader'>
        <img src={image} alt="Profile" className='profilePic' />
        <div className='accSec'>
          <div className='name_dis'>
            <h1 className='fname'>Hsan:</h1>
            <span className='post'>Adhérent</span>  
          </div>
          <div className='dataBoxes'>
            {data.map((item) => (
              <div className='dataBox' key={item.label}>
                <p className='dataLabel'>{item.label}</p>
                <p className='dataValue'>{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage