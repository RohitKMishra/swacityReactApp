import React from 'react';
import {Switch, Route} from 'react-router-dom';
import GettingStarted from './Screens/GettingStarted/GettingStarted.screen';
//components

//Screens
import DepartmentListScreen from './Screens/DepartmentList/DepartmentList.screen';
const Routing = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/deparments'>
          <DepartmentListScreen />
        </Route>{' '}
        <Route exact path='/zones'>
          <h3> This is Zones </h3>{' '}
        </Route>{' '}
        <Route exact path='/users'>
          <h3> This is Users page </h3>{' '}
        </Route>{' '}
        <Route exact path='/tasks'>
          <h3> This is Tasks page </h3>{' '}
        </Route>{' '}
        <Route exact path='/assets'>
          <h3> This is Assets page </h3>{' '}
        </Route>{' '}
        <Route exact path='/reports'>
          <h3> This is Reports page </h3>{' '}
        </Route>{' '}
        <Route path='/'>
          <h3> This is DashBoard </h3>{' '}
        </Route>{' '}
      </Switch>{' '}
    </div>
  );
};

export default Routing;
