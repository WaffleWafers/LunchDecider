'use strict'

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import ViewContainer from '../components/ViewContainer'
import ResponseContainer from '../components/ResponseContainer'
import MainAppContainer from '../components/MainAppContainer'
import StatusBarBackground from '../components/StatusBarBackground'
import MenuBarContainer from '../components/MenuBarContainer'
import Icon from 'react-native-vector-icons/EvilIcons'

class MainAppScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      questionAsked: false,
      placesToEatIndex: 0,
      placesToEat: ['thai', 'shawarma', 'pizza']
    }
  }

  render() {
    return (
      <ViewContainer>
        <StatusBarBackground/>
        <MainAppContainer>
          <TouchableOpacity onPress={() => this.setState({questionAsked: true, placesToEatIndex: Math.floor(Math.random()*this.state.placesToEat.length)})}>
            <Text style={style.questiontext}>Where should I eat today?</Text>
          </TouchableOpacity>
          <ResponseContainer questionAsked={this.state.questionAsked} placeToEat={this.state.placesToEat[this.state.placesToEatIndex]}/>
        </MainAppContainer>
        <MenuBarContainer >
          <TouchableOpacity onPress={() => this.setState({questionAsked: false})}>
            <Icon name="refresh" size={45} style={style.refresh}/>
          </TouchableOpacity>
          <View style={{flex: 1}}/>
          <TouchableOpacity onPress={() => this._navigateToRestaurantList()}>
            <Icon name="plus" size={45} style={style.pluscircle}/>
          </TouchableOpacity>
        </MenuBarContainer>
      </ViewContainer>
    );
  }

  _navigateToRestaurantList() {
    this.props.navigator.push({
      ident: "RestaurantList",
      placesToEat: this.state.placesToEat
    })
  }
}

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

module.exports = MainAppScreen
