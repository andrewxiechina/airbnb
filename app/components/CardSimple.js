import React, { Component } from 'react';
import {
  Text,
  Image,
  View,
  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import style from  '../style/style';

export default class App extends Component {
  constructor(){
    super();

  }
  render() {
    return (
      <View style={{width: 150, height: 290, marginRight: 10}}>
        <Image source={{uri: this.props.imgUrl}}
          style={{width: 150, height: 225}} />
          <View>
            <Text style={[style.font]}>
              <Text style={[style.fontBold]}>${this.props.price}</Text>
              <Text style={[style.textRight]}> {this.props.title}</Text>
            </Text>
          </View>

          <View>
            <Text style={[style.fontSmall]}>
              <Icon name="star" style={[style.fontSmall, style.colorSuccess]}/>
              <Icon name="star" style={[style.fontSmall, style.colorSuccess]}/>
              <Icon name="star" style={[style.fontSmall, style.colorSuccess]}/>
              <Icon name="star" style={[style.fontSmall, style.colorSuccess]}/>
              <Icon name="star" style={[style.fontSmall, style.colorSuccess]}/>
              <Text >  5 reviews</Text>
            </Text>
          </View>
      </View>
    );
  }
}
