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
import ImageContainer from '../components/ImageContainer'
import { styles } from '../components/Styles'

export default function Profile ({ handleChange, changeScreen, userImages }) {
    state = {
        photo: null,
        images: []
    }

    choosePhoto = () => {

    }

    showUserImages = () => {
        // console.warn(userImages)
        return (
            <ImageContainer
                images={userImages}
                handleChange={handleChange}
                changeScreen={changeScreen}
            />
        )
    }

        return(
            <View style={styles.profileContainer}>
                <View style={styles.profileHeader}>
                    <Text style={styles.headerText}>Welcome!</Text>
                    <TouchableOpacity 
                        style={styles.gearContainer}
                        onPress={() => changeScreen('account')}
                    >
                        <Image 
                            style={styles.gear}
                            source={require('../images/gear.png')}
                        />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={styles.buttons}
                    onPress={() => changeScreen('dashboard')}
                >
                    <Text style={styles.buttonText}>Back to Dashboard</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttons}
                    onPress={() => changeScreen('AR')}
                >
                    <Text style={styles.buttonText}>Take me to my Portals</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttons}
                    onPress={() => changeScreen('account')}
                >
                    <Text style={styles.buttonText}>Account Settings</Text>
                </TouchableOpacity>
                {showUserImages()}
            </View>
        )
}
