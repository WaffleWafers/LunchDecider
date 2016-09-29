'use strict'

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableOpacity, ListView } from 'react-native'
import ViewContainer from '../components/ViewContainer'
import StatusBarBackground from '../components/StatusBarBackground'
import Icon from 'react-native-vector-icons/EvilIcons'

class RestaurantListScreen extends Component{

  constructor(props) {
    super(props)
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2})
    this.state = {
      restaurantDataSource: ds.cloneWithRows(this.props.placesToEat)
    }
  }

  render() {
    return (
      <View>
        <StatusBarBackground/>

        <ListView
          dataSource={this.state.restaurantDataSource}
          renderRow={(restaurant) => { return this._renderRestaurantRow(restaurant)} }
          />
      </View>
    );
  }

  _renderRestaurantRow(restaurant) {
    return (
      <View style={style.restaurantListRow}>
        <Text style={style.restaurantName}> {restaurant} </Text>
        <View style={{flex: 1}}/>
        <Icon name="trash" size={30} style={style.restaurantIconStyle}/>
      </View>
    )
  }
}

const style = StyleSheet.create({
  restaurantListRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    // backgroundColor: "mistyrose"
  },

  restaurantName: {
    marginLeft: 40,
    fontSize: 20,
    // backgroundColor: "blue",
  },

  restaurantIconStyle: {
    color: "lightgrey",
    marginRight: 40,
    marginTop: 5,
    // backgroundColor: "blue",
  }
});

module.exports = RestaurantListScreen
