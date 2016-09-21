import React, { Component } from 'react';
import { AppRegistry, Navigator, StyleSheet, Text } from 'react-native'
import MainAppScreen from './app/screens/MainAppScreen'
import RestaurantListScreen from './app/screens/RestaurantListScreen'

class LunchDecider extends Component {

  _renderScene(route, navigator) {
    var globalNavigatorProps = { navigator }

    switch(route.ident) {
      case "MainApp":
        return (
          <MainAppScreen
            {...globalNavigatorProps} />
        )
      case "RestaurantList":
        return (
          <RestaurantListScreen
            {...globalNavigatorProps}
            placesToEat={route.placesToEat} />
        )
      default:
        return (
          <Text>You messed up!</Text>
        )
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{ident: "MainApp"}}
        ref="appNavigator"
        style={style.navigatorStyles}
        renderScene={(route, navigator) => this._renderScene(route, navigator)}
        />

    )
  }

}

const style = StyleSheet.create({

  navigatorStyles: {

  }

})

AppRegistry.registerComponent('LunchDecider', () => LunchDecider);
