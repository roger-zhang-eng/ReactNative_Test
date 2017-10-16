'use strict';
import React, { Component } from 'react';
import { AppRegistry,
  	StyleSheet,
  Text,
  View
} from 'react-native';

AppRegistry.registerComponent('PropertyFinder', () => PropertyFinder);

const styles = StyleSheet.create({
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#656565',
    marginTop: 65,
  },
});

export default class PropertyFinder extends Component {
  render() {
  return React.createElement(Text, {style: styles.description}, "Search for houses to buy!");
  }
}


