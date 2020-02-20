import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Header from '../common/Header';
export default class Setting extends Component {
  state = {};
  render() {
    return (
      <View style={{flex: 1}}>
        <Header
          title="Setting"
          isHome={true}
          navigation={this.props.navigation}
        />
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Setting Screen</Text>
        </View>
      </View>
    );
  }
}
