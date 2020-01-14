import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native'
import ImageContainer from '../components/ImageContainer'
import Footer from '../components/Footer'

// const baseURL = 'https://ar-travel-app.herokuapp.com/'
const options = {
    title: 'Select a Photo',
    chooseFromLibraryButtonTitle: 'Choose Photo from Gallery',
    quality: 1
}

export default class Gallery extends Component {

    state = {
        imageSource: null,
        num: 0,
        selected: [],
        // images: []
    }

    // componentDidMount(){
    //     fetch(`${baseURL}images`)
    //         .then(response => response.json())
    //         .then(images => this.setState({ images }))
    // }

    showImages = () => {
        return (
            <View>
                <ImageContainer
                    images={this.props.images} 
                />
                <Footer
                    changeScreen={this.props.changeScreen}
                />
            </View>
        )
    }

    selectPhoto = () => {
        console.warn(ImagePicker)
        // ImagePicker.showImagePicker(options, (response) => {
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
            <View style={styles.container}>
                {this.showImages()}
                {/* <Image 
                    source={this.state.imageSource} 
                    style={{width:'100%', height:300, margin:10}}
                /> */}
                {/* <TouchableOpacity
                    style={{backgroundColor: 'green', margin:10, padding:10}}
                    onPress={this.selectPhoto}
                >
                    <Text style={{color: '#fff'}}>
                        Select Image
                    </Text>
                </TouchableOpacity>        */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  gallery: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});