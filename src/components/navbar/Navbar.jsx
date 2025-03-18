import React from 'react'
import MainButton from './mainButton/MainButton.jsx'

const Navbar = () => {
  return (
    
    <>
    <div>

    <MainButton
      text='Buscar' />
    <MainButton
        text='Filtrar' />
    <MainButton
        text='Inicio' />
    
    </div>
    </>    
  )
}


export default Navbar