/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import ViewContainer from './app/components/ViewContainer'
import ResponseContainer from './app/components/ResponseContainer'
import MainAppContainer from './app/components/MainAppContainer'

var LunchDecider = React.createClass({
  getInitialState() {
    return {
      questionAsked: false,
      placesToEatIndex: 0,
      placesToEat: ['thai', 'Shitty Shawarma Place', 'Pizza']
    }
  },

  render() {
    return (
      <ViewContainer>
        <MainAppContainer>
          <TouchableOpacity onPress={() => this.setState({questionAsked: true, placesToEatIndex: Math.floor(Math.random()*this.state.placesToEat.length)})}>
            <Text style={style.questiontext}>Where should I eat today?</Text>
          </TouchableOpacity>
          <ResponseContainer questionAsked={this.state.questionAsked} placesToEat={this.state.placesToEat} placesToEatIndex={this.state.placesToEatIndex}/>
        </MainAppContainer>
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
