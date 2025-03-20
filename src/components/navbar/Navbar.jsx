import React from 'react'
import MainButton from '../mainButton/MainButton.jsx'
import './navbar.css'

const Navbar = () => {
  return (
    
    <>
    <div className='navbar'>

    <MainButton
      text='SUBIR ARTICULO' 
      link='/prodregister'/>
    <MainButton
      text='TUS ARTICULOS'
      link='/prodpage'/>
    <MainButton
      text='NOTIFICACIONES'
      link='/notifications'/>
    
    </div>
    </>
  )
}


export default Navbar