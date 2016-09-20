'use strict'
import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

class MenuBarContainer extends Component {
  render() {
    return (
      <View style={style.menuBarContainer}>
        {this.props.children}
      </View>
    )
  }
}

const style = StyleSheet.create({

  menuBarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    height: 40,
    backgroundColor: "white",
  }

});

module.exports = MenuBarContainer
