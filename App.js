import React, {Component} from 'react';
import {View} from 'react-native';

import LoggedOut from './src/screens/LoggedOut';
import Login from './src/screens/Login';

export default class App extends Component {
  render() {
    return <Login />
  }
}