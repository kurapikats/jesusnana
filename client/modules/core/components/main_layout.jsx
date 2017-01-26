import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from './header';

const Layout = ({content = () => null }) => (
  <MuiThemeProvider>
    <div>      
      <Header />
      {content()}
    </div>
  </MuiThemeProvider>
);

export default Layout;
