import React, {Component} from 'react';
import {View, Image} from 'react-native';
import Home from '../components/Home/Home';
import Detail from '../components/Detail/Detail';
import Setting from '../components/Home/Setting';
import Screen1 from '../components/Drawer/Screen1';
import Login from '../components/Auth/Login';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const StackApp = createStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="HomeDetail"
        component={Detail}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
const HomeTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({tintColor, focused}) => {
            if (focused) {
              return <MaterialIcons name="home" size={20} color={tintColor} />;
            } else {
              return <MaterialIcons name="home" size={20} color={'gray'} />;
            }
          },
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: ({tintColor, focused}) => {
            if (focused) {
              return (
                <MaterialIcons name="settings" size={20} color={tintColor} />
              );
            } else {
              return <MaterialIcons name="settings" size={20} color={'gray'} />;
            }
          },
        }}
      />
    </Tab.Navigator>
  );
};
const HomeDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName="MenuTab"
      drawerContent={props => CustomDrawerContent(props)}>
      <Drawer.Screen name="Home" component={HomeTab} />
      <Drawer.Screen name="Screen1" component={Screen1} />
    </Drawer.Navigator>
  );
};
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 20,
        }}>
        <Image
          source={require('../images/skier.png')}
          style={{height: 60, width: 60}}
        />
      </View>
      <DrawerItemList {...props} />
      <DrawerItem label="Help" onPress={() => alert('Ok nha')} />
      <DrawerItem
        label="LogOut"
        onPress={() => props.navigation.navigate('Login')}
      />
    </DrawerContentScrollView>
  );
}
export default class Root extends Component {
  state = {};
  render() {
    return (
      <NavigationContainer>
        <StackApp.Navigator initialRouteName="Login">
          <StackApp.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />

          <StackApp.Screen
            name="HomeApp"
            component={HomeDrawer}
            options={{
              headerShown: false,
            }}
          />
        </StackApp.Navigator>
      </NavigationContainer>
    );
  }
}
