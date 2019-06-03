import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './src/store';
// import FirstComponent from './src/components/FirstComponent';
import { LoginScreen } from './src/Screens';


export default class App extends Component {
  render() {
    return (
      <Provider store={configureStore}>
      <LoginScreen />
      </Provider>
    );
  }
}

