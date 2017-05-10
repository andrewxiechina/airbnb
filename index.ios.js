import React, { Component } from 'react';
import {
  AppRegistry,
  StatusBar,
  View,
} from 'react-native';
import App from './app/App'

export default class AwesomeProject extends Component {
  render() {
    return (
      <View>
        <StatusBar hidden={true}/>
        <App />
      </View>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
