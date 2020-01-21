import React from 'react'
import {
    Text,
    View,
    TouchableOpacity
} from 'react-native'
import { styles } from './Styles'

export default function Footer ({ changeScreen }) {
    return(
        <View style={styles.navBar}>
            <TouchableOpacity 
                style={styles.buttons}
                onPress={() => changeScreen('profile')}
                >
                <Text style={styles.buttonText}>Back to Profile</Text>
            </TouchableOpacity>
        </View>
    )
}