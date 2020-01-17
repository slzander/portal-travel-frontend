import React, { Component } from 'react'
import Login from './js/screens/Login'
import LoginForm from './js/screens/LoginForm'
import SignUp from './js/screens/SignUp'
import Dashboard from './js/screens/Dashboard'
import ARScreen from './js/screens/ARScreen'
import MainScene from './js/ARPortals/MainScene'
import Profile from './js/screens/Profile'
import Account from './js/screens/Account'
import Gallery from './js/screens/Gallery'
import { styles } from './js/components/Styles'
import Footer from './js/components/Footer'
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  PixelRatio,
  TouchableHighlight,
  TextInput, 
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  StatusBar,
  Alert,
  ActivityIndicator
} from 'react-native';
import { ViroARSceneNavigator } from 'react-viro';
import firebase from 'firebase'

const InitialARScene = require('./js/ARPortals/MainScene.js');
const baseURL = 'https://ar-travel-app.herokuapp.com/'

var firebaseConfig = {
  apiKey: "AIzaSyAgBILCxZnj5ziUNXl7AewEsklBDYTwwe0",
  authDomain: "travel-image.firebaseapp.com",
  databaseURL: "https://travel-image.firebaseio.com",
  projectId: "travel-image",
  storageBucket: "travel-image.appspot.com",
  messagingSenderId: "283248287810",
  appId: "1:283248287810:web:6ecba399826700a0d10ddb"
};

firebase.initializeApp(firebaseConfig);

export default class ViroSample extends Component {
  state = {
    screen: '',
    images: [],
    userImages: [],
    users: [],
    firstName: '',
    email: '',
    password: '',
    user: {},
    uid: ''
  }

  componentDidMount(){
    fetch(`${baseURL}images`)
      .then(response => response.json())
      .then(images => this.setState({ images }))
      // .then(this.checkLoginStatus())
    
    fetch(`${baseURL}user`)
      .then(response => response.json())
      .then(users => 
        this.setState({ users,
           userImages : users[0].images })
        )
        // change this way of getting user images!!!!!
  }

  submitPasswordChange = (password) => {
    fetch(`${baseURL}user`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        password_digest: this.state.password
      })
    }).then(response => response.json())
    .then(user => console.warn(user))
    // .then(user => this.setState({ user }))

  }

  checkLoginStatus = () => {
    console.log('yo')
    firebase.auth().onAuthStateChanged(user => {
      if(user){
        return this.getProfileScreen()
      }
    })
  }

  submitSignUp = (email, password) =>{
    try{
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(this.makeNewUser)

        .then(console.warn(this.state.user))
        // .then(this.assignDefaultImages)
        .then(() => this.changeScreen('dashboard'))
    }
    catch(error){
      console.warn(error.toString())
    }
  }

  submitLogin = (email, password) => {
    try{
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.updateCurrentUser)
        .then(console.warn(this.state.user))
        .then(() => this.changeScreen('dashboard'))
    }
    catch(error){
      console.warn(error.toString())
    }
  }

  updateCurrentUser = () => {
    let currentUser = this.state.users.find(user => {
      return user.username === this.state.email})
      this.setState({ user: currentUser })
      return this.changeScreen('dashboard')
  }

  makeNewUser = () => {
    fetch(`${baseURL}user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        first_name: this.state.firstName,
        username: this.state.email,
        password_digest: this.state.password
      })
    }).then(response => response.json())
      .then(user => this.setState({ user }))
  }

  assignDefaultImages = () => {
    let i = 0
    while(i < 3){
      fetch(`${baseURL}user-images`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user_id: this.state.user.id,
          image_id: this.state.images[0].id
        })
      })
      i++
    }
  }
    
  deleteAccount = () => {
    let user = firebase.auth().currentUser
    user.delete()
      .then(
        fetch(`${baseURL}user/${this.state.user.id}`, {
          method: 'DELETE'
        }).then(this.setState({ user: {} }))
        // .then(this.changeScreen(''))
      )
      .catch(error => console.warn(error))
  }

  // getLoginFormScreen = () => {
  //   return (
  //     <LoginForm
  //       submitSignUp={this.submitSignUp}
  //       submitLogin={this.submitLogin}
  //       setFirstName={this.setFirstName}
  //       setEmail={this.setEmail}
  //       setPassword={this.setPassword}
  //       email={this.state.email}
  //       password={this.state.password}
  //     />
  //   )
  // }

  getDashboardScreen = () => {
    return (
      <>
        {/* {this.state.user !== {} ? 
          <ActivityIndicator style={styles.indicator} size='large' color="#fff" /> : */}
          <View style={styles.containerWithFooter}>
            <Dashboard
            userName={this.state.email}
            changeScreen={this.changeScreen}
            users={this.state.users}
            user={this.state.user}
            />
        </View>
        <Footer
          changeScreen={this.changeScreen}
        />
        {/* } */}
      </>
    )
  }
    
  getARScreen = () => {
    return (
      <View style={styles.containerWithFooter}>
        <ViroARSceneNavigator 
          style={styles.ARScene}
          initialScene={{scene: InitialARScene}}
          viroAppProps={this.state.userImages}
        />
        <Footer
          changeScreen={this.changeScreen}
        />
      </View>
    )
  }
    
  getProfileScreen = () => {
    return (
      <View style={styles.containerWithFooter}>
          <Profile
          changeScreen={this.changeScreen}
          userImages={this.state.userImages}
          />
        {/* <Footer
          changeScreen={this.changeScreen}
        /> */}
      </View>
    )
  }
    
  getAccountScreen = () => {
    return (
      <View style={styles.containerWithFooter}>
          <Account
          changeScreen={this.changeScreen}
          passwordChange={this.passwordChange}
          deleteAccount={this.deleteAccount}
          />
        <Footer
          changeScreen={this.changeScreen}
        />
      </View>
    )
  }

  getGalleryScreen = () => {
    return (
      <View style={styles.containerWithFooter}>
      {this.state.images.length > 0 ?
        <Gallery
        handleChange={this.getProfileScreen}
        // changeScreen={this.changeScreen}
        images={this.state.images}
        /> : console.warn('error')}
      <Footer
        changeScreen={this.changeScreen}
      />
    </View>
      // <Gallery
      //  changeScreen={this.changeScreen}
      //  images={this.state.images}
      // />
    )
  }

  changeScreen = (screen) => {
    this.setState({ screen })
    return this.getScreen()
  }

  getScreen = () => {
    switch (this.state.screen){
      case 'loginForm':
        return this.getLoginFormScreen()
      case 'dashboard':
        return this.getDashboardScreen()
      case 'AR':
        return this.getARScreen()
      case 'profile':
        return this.getProfileScreen()
      case 'gallery':
        return this.getGalleryScreen()
      case 'account':
        return this.getAccountScreen()
      default:
        // return this.getLoginFormScreen()
        return(
          <View style={styles.container}>
            {this.state.images.length === 0 ? 
              <ActivityIndicator style={styles.indicator} size='large' color="#fff" /> :
              <>
                <StatusBar barStyle = 'light-content'/>
                <View style={styles.logoContainer}>
                  <Image 
                    style={styles.logo}
                    source={require('./js/images/doorway1.png')}
                  />
                  <Text style={styles.title}>Travel Portals</Text>
                </View>
                <KeyboardAvoidingView 
                  behavior='padding'
                  style={styles.formContainer}
                >
                <View style={styles.loginContainer}>
                  <TextInput 
                    style={styles.input}
                    placeholder='First Name'
                    // placeholderTextColor='rgba(255,255,255,0.7)'
                    returnKeyType='next'
                    // onSubmitEditing={() => this.passwordInput.focus()}
                    // onChangeText={username => this.setState({ username })}
                    onChangeText={firstName => this.setState ({ firstName })}
                    // autoCapitalize='none'
                    autoCorrect={false} 
                  />
                  <TextInput 
                    style={styles.input}
                    placeholder='Email'
                    // placeholderTextColor='rgba(255,255,255,0.7)'
                    returnKeyType='next'
                    // onSubmitEditing={() => this.passwordInput.focus()}
                    onChangeText={email => this.setState ({ email })}
                    keyboardType='email-address'
                    autoCapitalize='none'
                    autoCorrect={false} 
                  />
                  <TextInput 
                    style={styles.input} 
                    placeholder='Password'
                    onChangeText={password => this.setState ({ password })}
                    secureTextEntry
                    returnKeyType='go'
                    ref={(input) => this.passwordInput = input} 
                  />
                  <View style={styles.buttonContainer}>
                    <TouchableOpacity 
                      style={styles.buttons}
                      onPress={() => this.submitSignUp(this.state.email, this.state.password)}
                    >
                      <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                      style={styles.buttons}
                      onPress={() => this.submitLogin(this.state.email, this.state.password)}
                      onPress={() => this.changeScreen('dashboard')}
                    >
                      <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </KeyboardAvoidingView>
            </>}
          </View>
        )
    }
  }

  render() {
    return (
      <>
        {this.state.user === {} ? this.changeScreen('') : this.getScreen()}
      </>
    )
  }
}

module.exports = ViroSample