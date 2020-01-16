import React from 'react'
import { 
    StyleSheet, 
    View, 
    Image, 
    Text, 
    TextInput, 
    TouchableOpacity,
    KeyboardAvoidingView,
    StatusBar,
    Button
} from 'react-native'
import Gallery from './Gallery'
import ImageContainer from '../components/ImageContainer'
import { styles } from '../components/Styles'


export default class Profile extends React.Component {
    state = {
        photo: null,
        images: []
    }
    
    choosePhoto = () => {
        // const options = {
        //     noData: true
        // }
        // const ImagePicker = require('react-native-image-picker');

        // ImagePicker.launchImageLibrary(options, response => {
        //     console.warn(response)
        //     if(response.uri){
        //         this.setState({ photo: response })
        //     }
        // })
    }

    showUserImages = () => {
        // console.warn(this.props.userImages)
        return (
            <ImageContainer
                images={this.props.userImages}
                handleChange={this.props.handleChange}
                changeScreen={this.props.changeScreen}
            />
        )
    }

    render(){
        return(
            <View style={styles.profileContainer}>
                {/* {this.state.photo && (
                    <Image 
                        source={{ uri: this.state.photo.uri}}
                        style={styles.chosenPhoto}
                    />
                )}  */}
                {this.showUserImages()}
                <Button 
                    title='Choose Photo'
                    onPress={() => this.props.changeScreen('AR')}
                />
            </View>
        )
    }
}
