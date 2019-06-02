import React, { Fragment } from 'react';
import { Provider } from 'react-redux'
import { Router, Location } from '@reach/router'

import store from './redux/store'
import LandingRoute from './routes/Landing'
import MapsRoute from './routes/Maps'

function App() {
  return (
    <Provider store={store}>
      <Location>
        {props => {
          // Add vertical scroll to all routes but mapping routes
          const { location: { pathname } } = props                        
          const style = pathname === '/maps' ? {} : { overflowY: 'scroll' }
          return (
            <Router style={style} >
              {/* <LandingRoute path='/' style={{ overflowY: 'scroll' }} /> */}
              <MapsRoute path='maps/*' />
              <LandingRoute default />
            </Router>
          )}}
        </Location>      
    </Provider>
  );
}

export default App;

