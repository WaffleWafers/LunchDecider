'use strict'

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableOpacity, ListView } from 'react-native'
import ViewContainer from '../components/ViewContainer'
import StatusBarBackground from '../components/StatusBarBackground'

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
      <ViewContainer style={{backgroundColor: "mistyrose"}}>
        <StatusBarBackground/>
        <ListView
          dataSource={this.state.restaurantDataSource}
          renderRow={(restaurant) => { return this._renderRestaurantRow(restaurant)} }
          />
      </ViewContainer>
    );
  }

  _renderRestaurantRow(restaurant) {
    return (
      <View style={style.restaurantListRow}>
        <Text style={style.restaurantName}> {restaurant} </Text>
      </View>
    )
  }
}

const style = StyleSheet.create({
  restaurantListRow: {

  },

  restaurantName: {

  }
});

module.exports = RestaurantListScreen
