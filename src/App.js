// @flow

import React from 'react';
import { Provider } from 'react-redux'
import { Router, Location } from '@reach/router'
import 'typeface-roboto'

import store from './redux/store'
import MapsRoute from './routes/Maps'

function App() {
  return (
    <Provider store={store}>
      <Location>
        {() => {
          return (
            <Router>
              <MapsRoute path='/' />
              <MapsRoute default />
            </Router>
          )}}
        </Location>      
    </Provider>
  );
}

export default App;

