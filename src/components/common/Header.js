import React, {Component, version} from 'react';
import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const widthSC = Dimensions.get('screen').width;
export default class Header extends Component {
  state = {};
  render() {
    console.log(this.props);
    return (
      <View
        style={{
          height: 50,
          width: widthSC,
          flexDirection: 'row',
          backgroundColor: '#CCFFFF',
        }}>
        {this.props.isHome ? (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'flex-start',
            }}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.openDrawer();
              }}>
              <Feather name="menu" size={35} color={'gray'} />
            </TouchableOpacity>
          </View>
        ) : (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'flex-start',
            }}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.goBack();
              }}>
              <MaterialIcons name="arrow-back" size={35} color={'gray'} />
            </TouchableOpacity>
          </View>
        )}
        <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            {' '}
            {this.props.title}{' '}
          </Text>
        </View>
        <View style={{flex: 1}} />
      </View>
    );
  }
}
