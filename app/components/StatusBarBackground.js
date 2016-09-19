'use strict'
import React, { Component} from 'react'
import { View, StyleSheet } from 'react-native'

class StatusBarBackground extends Component {
  render() {
    return (
      <View style={style.viewContainer}>
        {this.props.children}
      </View>
    )
  }
}

const style = StyleSheet.create({

  statusBar: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center"
  }

});

module.exports = StatusBarBackground
