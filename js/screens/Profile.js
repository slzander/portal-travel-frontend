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
    Button,
    ImagePickerIOS
} from 'react-native'
import { styles } from '../components/Styles'


export default class Profile extends React.Component {
    state = {
        images: []
    }
    
    choosePhoto = () => {
        const options = {}
        ImagePickerIOS.launchImageLibrary
    }

    render(){
        return(
            <View style={styles.container}>
                
            </View>
        )
    }
}
