import './Logo.css'
import {Link} from 'react-router-dom';
import React from 'react';

const Logo = () => {
  
  return (
    <div id='logo-wrapper'>
      <Link to="/">
        {/* TODO: replace placeholder div with actual asset */}
        <div id='placeholder'></div>
      </Link>
    </div>
  )
}

export default Logo