import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  } from 'react-native';
import CardSimple from './components/CardSimple';
import Tab from './components/Tab';
import Menu from './components/Menu';
import Content from './components/Content';
import style from './style/style';

export default class App extends Component {
  render() {
    return (
      <View>
        <Menu />
        <Content />
        <Tab style={{position: 'absolute', top: 30}}/>
      </View>
    );
  }
}
