/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStackNavigator } from 'react-navigation'
import Login from './proj/LoginFolder/Login'
import Dashboard from './proj/DashboardFolder/Dashboard'

//const store = createStore(todoApp)
export default class App extends Component {
  
  render() {
    return (
      //<Provider store={store}>
        <RootStack/>
      //</Provider>
      
    );
  }
}

const RootStack = createStackNavigator({
  Login: Login,
  Dashboard: Dashboard
});
