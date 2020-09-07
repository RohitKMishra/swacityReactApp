import React from 'react';
import './App.css';

//router import
import Routing from './Route';

//components imports
import Navbar from './components/Navbar/Navbar.component';

//material-ui
import {Grid} from '@material-ui/core';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import GettingStarted from './Screens/GettingStarted/GettingStarted.screen';

// contexts
import {Provider as TasksProvider} from './Context/TaskContext';
import {Provider as DepartmentProvider} from './Context/DepartmentContext';
import {Provider as AssetProvider} from './Context/AssetContext';
import {Provider as UserProvider} from './Context/UserContext';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/getting-started'>
          <GettingStarted />
        </Route>

        <Route path='/'>
          <Grid container direction='row' spacing={4} wrap='nowrap'>
            <Grid item>
              <Navbar />
            </Grid>
            <Grid item style={{width: '100%', marginLeft: '11rem'}}>
              <Routing />
            </Grid>
          </Grid>
        </Route>
      </Switch>
    </Router>
  );
}

export default function () {
  return (
    <DepartmentProvider>
      <AssetProvider>
        <TasksProvider>
          <UserProvider>
            <App />
          </UserProvider>
        </TasksProvider>
      </AssetProvider>
    </DepartmentProvider>
  );
}
