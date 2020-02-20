import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Header from '../common/Header';
export default class Screen1 extends Component {
  state = {};
  render() {
    return (
      <View style={{flex: 1}}>
        <Header title="Screen 1" navigation={this.props.navigation} />
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <Text>Screen 1</Text>
        </View>
      </View>
    );
  }
}
