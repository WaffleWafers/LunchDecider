'use strict'
import React, { Component } from 'react'
import { View, StyleSheet, Text} from 'react-native'

class ResponseContainer extends Component {
  render() {
    return (
      <View style={style.responseContainer}>
        <Text style={style.answerWrapperText}>{"Why don't you try "}</Text>
        <Text style={style.answerText}>{this.props.placesToEat[this.props.placesToEatIndex]}</Text>
        <Text style={style.answerWrapperText}>{" today?"}</Text>
      </View>
    )
  }
}

const style = StyleSheet.create({
  responseContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  answerWrapperText:{
    color: 'grey',
    textAlign: 'left',
  },
  answerText:{
    color: 'red',
    textAlign: 'left',
  }

})

module.exports = ResponseContainer
