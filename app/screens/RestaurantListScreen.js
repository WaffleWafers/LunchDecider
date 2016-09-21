'use strict'

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import ViewContainer from '../components/ViewContainer'
import StatusBarBackground from '../components/StatusBarBackground'

var RestaurantListScreen = React.createClass({

  render() {
    return (
      <ViewContainer style={{backgroundColor: "mistyrose"}}>
        <StatusBarBackground/>
        <Text> {this.props.placesToEat} </Text>
      </ViewContainer>
    );
  }
});

const style = StyleSheet.create({

});

module.exports = RestaurantListScreen
