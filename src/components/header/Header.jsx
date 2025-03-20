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
          <MainButton text="Home" link='/' />    
          <MainButton text="Subir Artículo" link='/prodregister' />    
        </div>
        <div className='right'>
          <MainButton text="Iniciar Sesión" link='/login' />    
        </div>        
      </header>
    </div>
  )
}

export default Header