import React from 'react';
import {Switch, Route} from 'react-router-dom';
import GettingStarted from './Screens/GettingStarted/GettingStarted.screen';
//components

//Screens
import DepartmentListScreen from './Screens/DepartmentList/DepartmentList.screen';
import AssetListScreen from './Screens/AssetList/AssetList.screen';
import UserListScreen from './Screens/UserList/UserList.screen';
import TaskListScreen from './Screens/TaskList/TaskList.screen';

const Routing = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/deparments'>
          <DepartmentListScreen />
        </Route>{' '}
        <Route exact path='/departments/:id'>
          <h3>This is deparments id</h3>
        </Route>{' '}
        <Route exact path='/zones'>
          <h3> This is Zones </h3>{' '}
        </Route>{' '}
        <Route exact path='/users'>
          <UserListScreen />
        </Route>{' '}
        <Route exact path='/tasks'>
          <TaskListScreen />
        </Route>{' '}
        <Route exact path='/assets'>
          <AssetListScreen />
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
