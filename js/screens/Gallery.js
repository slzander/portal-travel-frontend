import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Button,
  ScrollView
} from 'react-native'
import { styles } from '../components/Styles'
import ImageContainer from '../components/ImageContainer'
import CameraRoll from "@react-native-community/cameraroll";

const options = {
    title: 'Select a Photo',
    chooseFromLibraryButtonTitle: 'Choose Photo from Gallery',
    quality: 1
}
// const CameraRoll = require('@react-native-community/cameraroll')

export default class Gallery extends Component {

    state = {
        imageSource: null,
        num: 0,
        selected: [],
        photos: []
        // images: []
    }

    _handleButtonPress = () => {
        return CameraRoll.getPhotos({}) ? console.warn('asdga') : console.warn('damon')

        // CameraRoll.getPhotos({
        //     first: 20,
        //     groupTypes: 'All',
        //     assetType: 'All',
        //   })
        //   .then(r => {
        //     this.setState({ photos: r.edges });
        //   })
        //   .catch((err) => {
        //      //Error Loading Images
        //   });
    };

    showImages = () => {
        return (
            <ImageContainer
                images={this.props.images}
                handleChange={this.props.handleChange}
            />
        )
    }

    selectPhoto = () => {
        console.warn(CameraRoll)
        // CameraRoll.showImagePicker(options, (response) => {
        //     console.log('Response = ', response);
        
        //     if (response.didCancel) {
        //         console.log('User cancelled image picker');
        //     } else if (response.error) {
        //         console.log('ImagePicker Error: ', response.error);
        //     } else {
        //         const source = { uri: response.uri };
        //         this.setState({
        //             imageSource: source
        //         });
        //     }
        // });
    }
    render() {
        return (
            <View>
                {/* <View style={styles.container}> */}
                <TouchableOpacity
                    style={styles.buttons}
                    onPress={this._handleButtonPress}>
                </TouchableOpacity>
                    <Button title="Load Images" onPress={this._handleButtonPress} />
                {/* </View> */}
                {/* {this.showImages()} */}
            </View>
        );
    }
}