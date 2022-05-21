import React from 'react'
import logo from "../../img/logo.png";
import './styles.css'

function Header() {
  return (
    <div className='header-container'>
      <img src={logo} className="image-logo" />
    </div>
  )
}

export default Header
