import React from 'react'
import './Menu.css'
import logo from '../../assets/oliveira_trust_logo.png';
import { Link } from 'react-router-dom';
import avatar from '../../assets/profile_icon.png';
import exitIcon from '../../assets/exit_icon.png';

function Menu() {
  return (
    <div className='menuContainer'>
      <div className='menuContent'>
        <Link to='/'>
          <img className='logo' src={logo} alt='Oliveira Trust Logo' />
        </Link>
        <div className='profile'>
          <img className='avatar' src={avatar} alt='Avatar icon' />
          <p className='username'>Otávio Oliveira</p>
          <img className='exitIcon' src={exitIcon} alt='Exit' />
        </div>
      </div>
    </div>
  )
}

export default Menu;