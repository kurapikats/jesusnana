import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

// import SideNav from './side_nav';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  handleNavClick() {
    this.setState({
      open: !this.state.open
    });
  }



  render() {
    // <SideNav open={this.state.open} />

    return (
      <div>
        <AppBar
          title="Jesus B. Nana"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onTouchTap={this.handleNavClick.bind(this)}
        />
        <Drawer
          onRequestChange={(open) => this.setState({open})}
          open={this.state.open}
          docked={false}
        >
          <MenuItem>Short Scripts</MenuItem>
          <MenuItem>TaxiComplaints</MenuItem>
          <MenuItem>Percentage Calc</MenuItem>
          <MenuItem>CV</MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default Header;
