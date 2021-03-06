import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Header from '../common/Header';
export default class Home extends Component {
  state = {};
  render() {
    console.log(this.props);
    return (
      <SafeAreaView style={{flex: 1}}>
        <StatusBar barStyle="light-content" />
        <Header title="Home" isHome={true} navigation={this.props.navigation} />
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <Text>Home Tab</Text>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('HomeDetail');
            }}>
            <Text style={{marginTop: 10}}>Go to Detail Screen</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
