import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import InstagramIcon from '@material-ui/icons/Instagram';
import './Menu.css'

/**
 * The Component displaying the navigation menu persistant at the top left corner of the website
 */
class Menu extends Component{ 
  render() {
    return (
      <div id="menu-wrapper">
        
        {this.props.routes.filter((onMenu) => onMenu).map(({name, path}) => (
          <NavLink to={String(path)} className="menu-item" activeClassName="active-link" exact>
            <span>{name}</span>
          </NavLink>
        ))}

        {/* Instagram link */}
        <a href="http://instagram.com/yiu.hei">
          <InstagramIcon id="instagram-icon"/>
        </a>
      
      </div>
    );
  }
}

export default Menu;