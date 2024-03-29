//Functional Dependencies
import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {createBrowserHistory} from 'history';

// Custom Components
import Menu from './Menu';
import Logo from './Logo';

// Content pages
import HomePage from  './ContentPages/Home';
import AboutPage from './ContentPages/About';
import WorkPage from  './ContentPages/Work';

// CSS
import './App.css';

// Firebase
import { firebaseConfig } from './Config.js';
var firebase = require("firebase/app");

/**
 * Routes is an array of components accessable by the router.
 * linkes to the route are displayed on the menu in the top right corner if the onMenu boolean is true.
 */
const routes = [
  {path: '/',       name: 'Home',   onMenu: true, exact: true,  comp: HomePage},
  {path: '/work',   name: 'Work',   onMenu: true, exact: false, comp: WorkPage},
  {path: '/about',  name: 'About',  onMenu: true, exact: true,  comp: AboutPage}
]

firebase.initializeApp(firebaseConfig);

class App extends Component{ 
  render() {
    return <BrowserRouter>
      <div id='header'>
        <Logo/>
        <div id='whitespace'></div>
        <Menu routes={routes}/>
      </div>
      <Route render={({location}) => (
        <>
          {routes.map(({path, comp, exact}, id) => (
            <Route key={path} exact={exact} path={path}>
              {/* Using createElement because <comp> wont work due to lower case first letter */}
              {React.createElement(comp, {location:location, history:createBrowserHistory()})}
            </Route>
          ))}
        </>
      )}/> 
    </BrowserRouter>
  }
}
export default App;
