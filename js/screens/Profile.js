import React from 'react'
import { 
    View, 
    Image, 
    Text, 
    TouchableOpacity,
} from 'react-native'
import ImageContainer from '../components/ImageContainer'
import { styles } from '../components/Styles'

export default function Profile ({ handleChange, changeScreen, userImages }) {
    showUserImages = () => {
        return (
            <ImageContainer
                images={userImages}
                handleChange={handleChange}
                changeScreen={changeScreen}
            />
        )
    }

    return(
        <>
            <View style={styles.gearContainer}>
                <TouchableOpacity
                    style={styles.gearButton}
                    onPress={() => changeScreen('account')}
                >
                    <Image 
                        style={styles.gear}
                        source={require('../images/gear1.png')}/>
                </TouchableOpacity>
            </View>
            <View style={styles.profileContainer}>
                <Text style={styles.header}>Here are your portal images:</Text>
                <Text>(Click on one to switch it out)</Text>
                {showUserImages()}
            </View>
            <View style={styles.navBar}>
                <TouchableOpacity
                    style={styles.buttons}
                    onPress={() => changeScreen('AR')}
                >
                    <Text style={styles.buttonText}>Take me to AR!</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}
