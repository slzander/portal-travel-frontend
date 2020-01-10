import React, { Component } from 'react'
import Login from './js/screens/Login'
import LoginForm from './js/screens/LoginForm'
import SignUp from './js/screens/SignUp'
import Dashboard from './js/screens/Dashboard'
import ARScreen from './js/screens/ARScreen'
import MainScene from './js/ARPortals/MainScene'
import Profile from './js/screens/Profile'
import { styles } from './js/components/Styles'
import Footer from './js/components/Footer'
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  PixelRatio,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';

import {
  ViroARSceneNavigator
} from 'react-viro';

var InitialARScene = require('./js/ARPortals/MainScene.js');
// var AR_NAVIGATOR_TYPE = "AR";

export default class ViroSample extends Component {
  state = {
    // navigatorType : AR_NAVIGATOR_TYPE,
    screen: ''
  }

  getLoginFormScreen = () => {
    return (
      <LoginForm
       changeScreen={this.changeScreen}
      />
    )
  }

  getDashboardScreen = () => {
    return (
      <Dashboard
       changeScreen={this.changeScreen}
      />
    )
  }
    
  getARScreen = () => {
    return (
      <View style={styles.ARView}>
        <ViroARSceneNavigator 
          style={styles.ARScene}
          initialScene={{scene: InitialARScene}}
          // changeScreen={this.changeScreen}
       />
        <Footer
          changeScreen={this.changeScreen}
        />
        {/* <TouchableOpacity 
          style={styles.buttons}
          onPress={() => this.changeScreen('dashboard')}
          >
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity> */}
      </View>
    )
  }
    
  getProfileScreen = () => {
    return (
      <ProfileScreen
       changeScreen={this.changeScreen}
      />
    )
  }

  changeScreen = (screen) => {
    this.setState({ screen })
  }

  getScreen = () => {
    switch (this.state.screen){
      case 'loginForm':
        return this.getLoginFormScreen()
      case 'dashboard':
        return this.getDashboardScreen()
      case 'AR':
        return this.getARScreen()
      case 'Profile':
        return this.getProfileScreen()
      default:
        return this.getLoginFormScreen()
    }
  }

  render() {
    return (
      <>
        {this.getScreen()}
      </>
    )
  }
}


module.exports = ViroSample