import React from 'react'
import imhsan from '../../../assets/hsan.jpg';
import './Profile.css'

const ProfilePage = () => {
  const data = [
    { label: 'Poids', value: '90kg' },
    { label: 'Taille', value: '175cm' },
    {label:'objectif',value:'loose  weight'},
    {label:'Age',value:"24"},
    {label:'Sexe',value:'Masculin'},
    {label:'nombre de sc par semaine',value:'5'}
  ]

  return (
    <div className='profile'>
      <div className='profileHeader'>
        <img src={imhsan} alt="" className='profilePic' />
        <div className='accSec'>
          <div className='name_dis'>
            <h1 className='fname'>Hsan:</h1>
            <span className='post'>Adhérent</span>  {/* Removed post since it's not in the provided data */}
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