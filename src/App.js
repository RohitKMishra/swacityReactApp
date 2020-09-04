import React from 'react';
import './App.css';

//router import
import Routing from './Route';

//components imports
import Navbar from './components/Navbar/Navbar.component';

//material-ui
import {Grid} from '@material-ui/core';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Grid container direction='row' spacing={3} wrap='nowrap'>
        <Grid item>
          <Navbar />
        </Grid>

        <Grid item>
          <Routing />
        </Grid>
      </Grid>
    </Router>
  );
}

export default App;
