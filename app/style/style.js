import React, { Component } from 'react';
import {
  StyleSheet
} from 'react-native';

const style = StyleSheet.create({
  container: {
    margin: 10
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  font: {
    fontSize: 12
  },
  fontSmall: {
    fontSize: 10
  },
  h1: {
    fontSize: 32
  },
  h2: {
    fontSize: 26
  },
  h3: {
    fontSize: 22
  },
  h4: {
    fontSize: 18
  },
  h5: {
    fontSize: 14
  },
  fontBold: {
    fontWeight: 'bold'
  },
  colorSuccess: {
    color: 'green'
  },
  colorWarning: {
    color: 'red'
  },
  center: {
    alignItems: 'center'
  },

  tab: {
    justifyContent: 'space-between',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    borderTopWidth: 1,
    backgroundColor: 'white',
    borderColor: 'rgba(100,100,100,0.2)',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    flexDirection: 'row'
  },
  nav: {
    left: 0,
    right: 0,
    top: 0,
    position: 'absolute',
    zIndex: 1,
    flexDirection: 'row',
    paddingLeft: 15,
    paddingRight: 20,
    paddingTop: 15,
    paddingBottom: 15,
    justifyContent: 'flex-start',
    borderBottomWidth: 1,
    backgroundColor: 'white',
    borderColor: 'rgba(100,100,100,0.2)',
    margin: 0
  },
  navItem: {
    marginRight: 20
  }
});

export default style;
