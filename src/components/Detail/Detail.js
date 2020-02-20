import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Header from '../common/Header';
export default class Detail extends Component {
  state = {};
  render() {
    console.log('Detail Props', this.props);
    return (
      <View style={{flex: 1}}>
        <Header title="Detail Home" navigation={this.props.navigation} />
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Detail Screen</Text>
        </View>
      </View>
    );
  }
}
