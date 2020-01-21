import React from 'react'
import {
    View,
    Image,
    Text,
    TouchableOpacity,
    StatusBar
} from 'react-native'
import ImageContainer from '../components/ImageContainer'
import { styles } from '../components/Styles'

export default function Profile({ handleChange, changeScreen, user, currentImages }) {
    showUserImages = () => {
        return (
            <ImageContainer
                style={styles.imageContainer}
                images={currentImages}
                handleChange={handleChange}
                changeScreen={changeScreen}
            />
        )
    }

    return (
        <>
            <StatusBar
                barStyle='dark-content'
            />
            <View style={styles.gearContainer}>
                <TouchableOpacity
                    // style={styles.gearButton}
                    onPress={() => changeScreen('account')}
                >
                    <Image
                        style={styles.gear}
                        source={require('../images/gear1.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.profileContainer}>
                <Text style={styles.header}>Your images:</Text>
                <Text style={styles.profileText}>(Click one to switch it out)</Text>
                {showUserImages()}
            </View>
            <View style={styles.navBar}>
                <TouchableOpacity
                    style={styles.buttons}
                    onPress={() => changeScreen('AR')}
                >
                    <Text style={styles.buttonText}>Go To My Portals</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}
