'use strict'
import React, { Component} from 'react'
import { View, StyleSheet } from 'react-native'

class ViewContainer extends Component {
  render() {
    return (
      <View style={[style.viewContainer, this.props.style || {}]}>
        {this.props.children}
      </View>
    )
  }
}

const style = StyleSheet.create({

  viewContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center"
  }


});

module.exports = ViewContainer
