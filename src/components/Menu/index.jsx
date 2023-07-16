import React from 'react'
import './Menu.css'
import logo from '../../assets/oliveira_trust_logo.png';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div className='menuContainer'>
      <div className='menuContent'>
        <Link to='/'>
          <img className='logo' src={logo} alt='Oliveira Trust Logo' />
        </Link>
      </div>
    </div>
  )
}

export default Menu;