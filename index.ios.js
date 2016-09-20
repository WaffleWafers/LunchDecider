import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import ViewContainer from './app/components/ViewContainer'
import ResponseContainer from './app/components/ResponseContainer'
import MainAppContainer from './app/components/MainAppContainer'
import StatusBarBackground from './app/components/StatusBarBackground'
import MenuBarContainer from './app/components/MenuBarContainer'
import Icon from 'react-native-vector-icons/FontAwesome'

var LunchDecider = React.createClass({
  getInitialState() {
    return {
      questionAsked: false,
      placesToEatIndex: 0,
      placesToEat: ['thai', 'shawarma', 'pizza']
    }
  },

  render() {
    return (
      <ViewContainer>
        <StatusBarBackground/>
        <MainAppContainer>
          <TouchableOpacity onPress={() => this.setState({questionAsked: true, placesToEatIndex: Math.floor(Math.random()*this.state.placesToEat.length)})}>
            <Text style={style.questiontext}>Where should I eat today?</Text>
          </TouchableOpacity>
          <ResponseContainer questionAsked={this.state.questionAsked} placesToEat={this.state.placesToEat} placesToEatIndex={this.state.placesToEatIndex}/>
        </MainAppContainer>
        <MenuBarContainer >
          <TouchableOpacity  onPress={() => this.setState({questionAsked: false})}>
            <Icon name="refresh" size={40} style={style.refresh}/>
          </TouchableOpacity>
          <View style={{flex: 1}}/>
          <TouchableOpacity>
            <Icon name="plus-circle" size={40} style={style.pluscircle}/>
          </TouchableOpacity>
        </MenuBarContainer>
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
  },
  pluscircle:{
    color: 'lightgrey',
    paddingRight: 16,
  },
  refresh:{
    color: 'lightgrey',
    paddingLeft: 16,
  }
});

AppRegistry.registerComponent('LunchDecider', () => LunchDecider);
