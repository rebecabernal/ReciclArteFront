import React from 'react'
import MainButton from './mainButton/MainButton.jsx'

const Navbar = () => {
  return (
    
    <>
    <div className='navbar'>

    <MainButton
      text='SUBIR ARTICULO' />
    <MainButton
        text='TUS ARTICULOS' />
    <MainButton
        text='NOTIFICACIONES' />
    
    </div>
    </>    
  )
}


export default Navbar