'use strict'
import React, { Component} from 'react'
import { View, StyleSheet } from 'react-native'

class MainAppContainer extends Component {
  render() {
    return (
      <View style={style.mainAppContainer}>
        {this.props.children}
      </View>
    )
  }
}

const style = StyleSheet.create({

  mainAppContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }

});

module.exports = MainAppContainer
