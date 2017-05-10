import React, { Component } from 'react';
import {
  Text,
  Image,
  View,
  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import style from  '../style/style';

export default class Tab extends Component {
  constructor(){
    super();

  }
  render() {
    return (
      <View style={[style.tab]}>
        <View style={[style.center]}>
          <Icon name="search" style={[style.h3, style.colorWarning]}/>
          <Text style={[style.fontSmall, style.colorWarning]}>Search</Text>
        </View>
        <View style={[style.center]}>
          <Icon name="heart" style={[style.h3]}/>
          <Text style={[style.fontSmall]}>Like</Text>
        </View>
        <View style={[style.center]}>
          <Icon name="envelope-o" style={[style.h3]}/>
          <Text style={[style.fontSmall]}>Inbox</Text>
        </View>
        <View style={[style.center]}>
          <Icon name="user" style={[style.h3]}/>
          <Text style={[style.fontSmall]}>My</Text>
        </View>
      </View>
    );
  }
}
