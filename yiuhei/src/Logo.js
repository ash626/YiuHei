import './Logo.css'
import {Link} from 'react-router-dom';
import React from 'react';
import LogoImg from './assets/landing_page/website_logo.png';

const Logo = () => {
  
  return (
    <div id='logo-wrapper'>
      <Link to="/">
        <img id='logo' src={LogoImg}/>
      </Link>
    </div>
  )
}

export default Logo