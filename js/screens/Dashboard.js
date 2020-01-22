import React from 'react'
import {
    View,
    Text,
    Image,
    StatusBar,
    TouchableOpacity
} from 'react-native'
import { styles } from '../components/Styles'

export default function Dashboard({ user, gif, changeScreen }) {
    return (
        <View style={styles.dashboardContainer}>
            <StatusBar
                barStyle='dark-content'
            />
            <View style={styles.dashboardInfo}>
                <Text style={styles.dashboardHeader}>Welcome {user.first_name}!</Text>
                <Text style={styles.dashboardText}>Are you ready for some portal travel?</Text>
                <Text style={styles.dashboardText}></Text>
            </View>
            <Image
                source={require('../images/phone.png')}
                style={styles.dashboardImage}
            />
            <Image
                style={styles.gif}
                defaultSource={require('../images/PTlogoSmall.png')}
                source={{ uri: gif }}
            />
            <View style={styles.navBar}>
                <TouchableOpacity
                    style={styles.buttons}
                    onPress={() => changeScreen('AR')}
                >
                    <Text style={styles.buttonText}>Yes!</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}