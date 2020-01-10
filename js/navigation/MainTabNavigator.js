import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Login from '../screens/Login'
import LoginForm from '../screens/LoginForm'
import SignUp from '../screens/SignUp'

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    login: Login,
    loginForm: LoginForm,
    signUp: SignUp
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Login',
  // tabBarIcon: ({ focused }) => (
  //   // <TabBarIcon
  //   //   focused={focused}
  //   //   name={
  //   //     Platform.OS === 'ios'
  //   //       ? `ios-information-circle${focused ? '' : '-outline'}`
  //   //       : 'md-information-circle'
  //   //   }
  //   // />
  // ),
};

HomeStack.path = '';

// const LinksStack = createStackNavigator(
//   {
//     Links: LinksScreen,
//   },
//   config
// );

// LinksStack.navigationOptions = {
//   tabBarLabel: 'Links',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
//   ),
// };

// LinksStack.path = '';

// const SettingsStack = createStackNavigator(
//   {
//     Settings: SettingsScreen,
//   },
//   config
// );

// SettingsStack.navigationOptions = {
//   tabBarLabel: 'Settings',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
//   ),
// };

// SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  Login: HomeStack
},{
  tabBarOptions : {
    activeTintColor: '#fff',
    inactiveTintColor: '#1ecfc9',
    style: {
      backgroundColor: '#1a2327',
    },
  }
});

tabNavigator.path = '';

export default HomeStack;
