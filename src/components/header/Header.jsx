import React from 'react'
import logo from '../../assets/logo.png'
import MainButton from '../mainButton/MainButton'
import './header.css'


const Header = () => {
  return (
    <div className='container'>
      <header className='header'>
        <div className='left'>
          <img src={logo} className='logo' />
          <MainButton text="Home"/>    
          <MainButton text="Subir Artículo"/>    
        </div>
        <div className='right'>
          <MainButton text="Iniciar Sesión"/>    
        </div>        
      </header>
    </div>
  )
}

export default Header