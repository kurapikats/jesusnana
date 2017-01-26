import React from 'react';
import AppBar from 'material-ui/AppBar';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AppBar
        title="Jesus B. Nana"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      />
    );
  }
}

export default Header;
