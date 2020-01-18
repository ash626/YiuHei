import React, {Component} from 'react';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {Link} from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';

class MenuDrawer extends Component {
  constructor(props){
    super(props)
    this.state = {
      right: false
    }
  }

  toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    this.setState({ ...this.state, [side]: open });
  };

  sideList = side => (
    <div
      style={{width: 250,}}
      role="presentation"
      onClick={this.toggleDrawer(side, false)}
      onKeyDown={this.toggleDrawer(side, false)}
    >
      <List>
        {[{text: 'Home', path: '/'}, {text: 'Work', path: '/work'}, {text: 'About', path: '/about'}].map(({text, path}, index) => (
          <ListItem component={Link} to={path} key={text}>
            {text}
          </ListItem>
        ))}
      </List>
    </div>
  );

  render () {
    return (
      <div>
        <IconButton id='menu-thin' onClick={this.toggleDrawer('right', true)}><MenuIcon/></IconButton>
        <Drawer anchor="right" open={this.state.right} onClose={this.toggleDrawer('right', false)}>
          {this.sideList('right')}
        </Drawer>
      </div>
    );
  }
}
export default MenuDrawer;