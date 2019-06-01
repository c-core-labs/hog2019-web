import React, { Fragment } from 'react';
import { Router, Location } from '@reach/router'

import LandingRoute from './routes/Landing'
import MapsRoute from './routes/Maps'

function App() {
  return (
    <Fragment>
      <Location>
        {props => {
          // Add vertical scroll to all routes but mapping routes
          const { location: { pathname } } = props                        
          const style = pathname === '/map' ? {} : { overflowY: 'scroll' }
          return (
            <Router style={style} >
              <LandingRoute path='/' style={{ overflowY: 'scroll' }} />
              <MapsRoute path='maps/*' />
              <LandingRoute default />
            </Router>
          )}}
        </Location>      
    </Fragment>
  );
}

export default App;

