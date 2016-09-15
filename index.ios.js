/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableHighlight } from 'react-native'
import ViewContainer from './app/components/ViewContainer'
import ResponseContainer from './app/components/ResponseContainer'

var LunchDecider = React.createClass({
  getInitialState() {
    return {
      questionAsked: false,
      placesToEatIndex: 0,
      placesToEat: ['Burger King', 'McDonalds', 'Pizza Hut', 'Shitty Shawarma Place', 'Tim Hortons']
    }
  },

  render() {
    return (
      <ViewContainer>
        <TouchableHighlight activeOpacity={0.7} underlayColor={'white'} onPress={() => this.setState({questionAsked: true, placesToEatIndex: Math.floor(Math.random()*this.state.placesToEat.length)})}>
          <Text style={style.questiontext}>Where should I eat today?</Text>
        </TouchableHighlight>
        <ResponseContainer placesToEat={this.state.placesToEat} placesToEatIndex={this.state.placesToEatIndex}/>
      </ViewContainer>
    );
  }
});

const style = StyleSheet.create({
  questiontext:{
    color: 'black',
    fontSize: 25,
    textAlign: 'center',
    padding: 10
  }
});

AppRegistry.registerComponent('LunchDecider', () => LunchDecider);
