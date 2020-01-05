import React, {Component} from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import HomePage from  './ContentPages/Home';
import AboutPage from './ContentPages/About';
import WorkPage from  './ContentPages/Work';
import './App.css';

/**
 * Routes is an array of components accessable by the router.
 * linkes to the route are displayed on the menu in the top right corner if the onMenu boolean is true.
 */
const routes = [
  {path: '/',       name: 'Home',   onMenu: true, comp: HomePage},
  {path: '/work',   name: 'Work',   onMenu: true, comp: WorkPage},
  {path: '/about',  name: 'About',  onMenu: true, comp: AboutPage}
]

class App extends Component{ 
  render() {
    return <BrowserRouter>
      <>
        <Link to='/'>Home</Link>
        <Link to='/work'>Work</Link>
        <Link to='/about'>About</Link>
      </>
      <Route render={({location}) => (
        <>
          {routes.map(({path, comp}, id) => (
            <Route key={path} exact path={path}>
              {React.createElement(comp, {location:location, history:createBrowserHistory()})}
            </Route>
          ))}
        </>
      )}/> 
    </BrowserRouter>
  }
}
export default App;
