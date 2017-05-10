import React, { Component } from 'react';
import {
  Text,
  Image,
  View,
  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import style from  '../style/style';

export default class Menu extends Component {
  constructor(){
    super();

  }
  render() {
    return (
      <View style={[style.nav]}>
        <Text style={[style.navItem]}>推荐</Text>
        <Text style={[style.navItem]}>房源</Text>
        <Text style={[style.navItem]}>体验</Text>
        <Text style={[style.navItem]}>攻略</Text>
      </View>
    );
  }
}
