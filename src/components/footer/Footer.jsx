import React from 'react'
import MainButton from '../mainButton/MainButton.jsx'
import './footer.css'

const Footer = () => {
  return (
    
    <>
    <div className='footer'>

    <MainButton
      text='IDENTIFICATE' 
      link='/login'/>
   
    <p>All Rights reserved. Copyright ReciclArte</p>

    </div>
    </>    
  )
}


export default Footer