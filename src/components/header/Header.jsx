import React from 'react'
import logo from '../../assets/images/logo.png'
import './header.css'
import MainButton from '../mainButton/MainButton'


const Header = () => {
  return (
    <div className='container'>
        <header className='header'>
            <img src={logo} className='logo' />
            <MainButton  text="Home"/>            
        </header>
    </div>
  )
}

export default Header