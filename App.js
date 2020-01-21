import React, { Component } from 'react'
import SignUpOrLogIn from './js/screens/SignUpOrLogIn'
import SignUp from './js/screens/SignUp'
import Login from './js/screens/Login'
import Dashboard from './js/screens/Dashboard'
import Profile from './js/screens/Profile'
import Account from './js/screens/Account'
import Gallery from './js/screens/Gallery'
import { styles } from './js/components/Styles'
import Footer from './js/components/Footer'
import {
  View,
  ActivityIndicator,
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
    users: [],
    userImages: [],
    currentImages: [],
    galleryImages: [],
    firstName: '',
    email: '',
    password: '',
    user: {},
    oldImage: {},
    oldUserImage: {},
    gif: 'https://i.giphy.com/media/XHYqOOtGLB2K857Chh/giphy.gif'
  }

  componentDidMount() {
    fetch(`${baseURL}images`)
      .then(response => response.json())
      .then(images => this.setState({ images }))
    fetch(`${baseURL}user`)
      .then(response => response.json())
      .then(users => this.setState({ users }))
    fetch(`${baseURL}user-images`)
      .then(response => response.json())
      .then(userImages => this.setState({ userImages }))
  }


  // SET STATE FROM SIGN IN/LOGIN FORMS

  setFirstName = (firstName) => {
    this.setState({ firstName })
  }

  setEmail = (email) => {
    this.setState({ email })
  }

  setPassword = (password) => {
    this.setState({ password })
  }

  goBack = () => {
    this.changeScreen('')
  }



  // SIGN UP

  goToSignUp = () => {
    this.changeScreen('signup')
  }

  submitSignUp = () => {
    try {
      firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(this.makeNewUser)
    }
    catch (error) {
      console.warn(error.toString())
    }
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
    })
      .then(response => response.json())
      .then(user => this.setState({ user }))
      .then(this.assignDefaultImages)
  }

  assignDefaultImages = () => {
    let i = 0
    while (i < 3) {
      fetch(`${baseURL}user-images`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user_id: this.state.user.id,
          image_id: this.state.images[i].id
        })
      })
      i++
    }
    setTimeout(this.getUsers, 2000)
  }

  getUsers = () => {
    fetch(`${baseURL}user`)
      .then(response => response.json())
      .then(users => this.setCurrentUser(users))
  }

  setCurrentUser = (users) => {
    let currentUser = users.find(user => {
      return user.id === this.state.user.id
    })
    this.setState({ user: currentUser })
    setTimeout(this.setCurrentImages, 500)
  }

  setCurrentImages = () => {
    let filteredImages = this.state.images.filter(image => {
      return (
        this.state.user.images[0].id === image.id ||
        this.state.user.images[1].id === image.id ||
        this.state.user.images[2].id === image.id
      )
    })
    this.setState({ currentImages: filteredImages })
    this.setGalleryImages()
  }

  setGalleryImages = () => {
    let filteredImages = this.state.images.filter(image => {
      return (
        image !== this.state.currentImages[0] &&
        image !== this.state.currentImages[1] &&
        image !== this.state.currentImages[2]
      )
    })
    this.setState({ galleryImages: filteredImages })
    this.checkLoginStatus()
  }

  checkLoginStatus = () => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        return this.changeScreen('dashboard')
      }
    })
  }



  // LOGIN

  goToLogin = () => {
    this.changeScreen('login')
  }

  submitLogin = () => {
    try {
      firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(this.updateCurrentUser)
    }
    catch (error) {
      console.warn(error.toString())
    }
  }

  updateCurrentUser = () => {
    let currentUser = this.state.users.find(user => {
      return user.username === this.state.email
    })
    this.setState({ user: currentUser })
    this.setCurrentImages()
  }



  // UPDATE USER IMAGES

  setOldImage = (clickedImage) => {
    // console.warn('currentimages', this.state.currentImages)
    this.setState({ oldImage: clickedImage })
    setTimeout(this.setOldUserImage, 500)
  }

  setOldUserImage = () => {
    // console.warn('oldimage', this.state.userImages)
    let oldUI = this.state.userImages.find(userImage => {
      return this.state.oldImage.id === userImage.image_id && this.state.user.id === userImage.user_id
    })
    this.setState({ oldUserImage: oldUI })
    setTimeout(() => this.changeScreen('gallery'), 500)
  }

  changeUserImage = (clickedImage) => {
    // console.warn('olduserimage', this.state.oldUserImage)
    fetch(`${baseURL}user-images/${this.state.oldUserImage.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user_id: this.state.user.id,
        image_id: clickedImage.id
      })
    })
      .then(response => response.json())
      .then(newUserImage => this.updateCurrentUserImages(clickedImage, newUserImage))
  }

  updateCurrentUserImages = (clickedImage, newUserImage) => {
    let oldUserImageIndex = this.state.userImages.indexOf(this.state.oldUserImage)
    let userImagesArray = this.state.userImages
    userImagesArray[oldUserImageIndex] = newUserImage

    // console.warn('oldUIindex', oldUserImageIndex)
    this.setState({ userImages: userImagesArray })
    setTimeout(() => this.updateCurrentImages(clickedImage), 500)
  }

  updateCurrentImages = (clickedImage) => {
    // console.warn('userImages', this.state.userImages)
    let index = this.state.currentImages.indexOf(this.state.oldImage)
    let imagesArray = this.state.currentImages
    imagesArray[index] = clickedImage
    this.setState({ currentImages: imagesArray })
    this.updateGalleryImages()
  }

  updateGalleryImages = () => {
    let filteredImages = this.state.images.filter(image => {
      return (
        image !== this.state.currentImages[0] &&
        image !== this.state.currentImages[1] &&
        image !== this.state.currentImages[2]
      )
    })
    this.setState({ galleryImages: filteredImages })
    setTimeout(() => this.changeScreen('profile'), 500)
  }




  // DELETE ACCOUNT

  deleteAccount = () => {
    firebase.auth().currentUser.delete()
      .then(this.deleteBackendUser)
    // .catch(error => console.warn(error))
  }

  deleteBackendUser = () => {
    fetch(`${baseURL}user/${this.state.user.id}`, {
      method: 'DELETE'
    })
      .then(() => this.setState({ user: {} }))
      .then(this.changeScreen(''))
  }


  //  LOG OUT

  submitLogOut = () => {
    try {
      firebase.auth().signOut()
        .then(this.resetState)
    }
    catch (error) {
      console.warn(error.toString())
    }
  }

  resetState = () => {
    this.setState({ email: '', password: '' })
    this.changeScreen('')
  }



  // SCREEN NAVIGATION

  getSignUpOrLogInScreen = () => {
    return (
      <SignUpOrLogIn
        goToSignUp={this.goToSignUp}
        goToLogin={this.goToLogin}
      />
    )
  }

  getSignUpScreen = () => {
    return (
      <SignUp
        submitSignUp={this.submitSignUp}
        setFirstName={this.setFirstName}
        setEmail={this.setEmail}
        setPassword={this.setPassword}
        goBack={this.goBack}
      />
    )
  }

  getLoginScreen = () => {
    return (
      <Login
        submitLogin={this.submitLogin}
        setEmail={this.setEmail}
        setPassword={this.setPassword}
        goBack={this.goBack}
      />
    )
  }

  getDashboardScreen = () => {
    return (
      <>
        <View style={styles.containerWithFooter}>
          <Dashboard
            user={this.state.user}
            gif={this.state.gif}
            changeScreen={this.changeScreen}
            />
        </View>
      </>
    )
  }

  getARScreen = () => {
    return (
      <View style={styles.containerWithFooter}>
        <ViroARSceneNavigator
          style={styles.ARScene}
          initialScene={{ scene: InitialARScene }}
          viroAppProps={this.state.currentImages}
        />
        <Footer
          changeScreen={this.changeScreen}
        />
      </View>
    )
  }

  getProfileScreen = () => {
    // console.warn(this.state.currentImages)
    return (
      <View style={styles.containerWithFooter}>
        <Profile
          changeScreen={this.changeScreen}
          user={this.state.user}
          currentImages={this.state.currentImages}
          handleChange={this.setOldImage}
        />
      </View>
    )
  }

  getAccountScreen = () => {
    return (
      <View style={styles.containerWithFooter}>
        <Account
          // passwordChange={this.passwordChange}
          // submitPasswordChange={this.submitPasswordChange}
          deleteAccount={this.deleteAccount}
          submitLogOut={this.submitLogOut}
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
            handleChange={this.changeUserImage}
            images={this.state.galleryImages}
          /> : console.warn('error')}
      </View>
    )
  }

  changeScreen = (screen) => {
    this.setState({ screen })
    return this.getScreen()
  }

  getScreen = () => {
    switch (this.state.screen) {
      case 'signup':
        return this.getSignUpScreen()
      case 'login':
        return this.getLoginScreen()
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
        return (
          <View style={styles.container}>
            {this.state.images.length < 12 ?
              <ActivityIndicator style={styles.indicator} size='large' color="#fff" /> :
              this.getSignUpOrLogInScreen()
              // this.getProfileScreen()
            }
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