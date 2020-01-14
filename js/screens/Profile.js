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
        return <Text>Show user images here</Text>
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
                    onPress={() => this.props.changeScreen('gallery')}
                />
            </View>
        )
    }
}
