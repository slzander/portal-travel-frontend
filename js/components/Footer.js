import React from 'react'
import {
    AppRegistry,
    Text,
    View,
    StyleSheet,
    PixelRatio,
    TouchableHighlight,
    TouchableOpacity
  } from 'react-native'
  import { styles } from './Styles'


export default function Footer ({ changeScreen }) {
    return(
        <View style={styles.navBar}>
            <TouchableOpacity 
                style={styles.buttons}
                onPress={() => changeScreen('dashboard')}
                >
                <Text style={styles.buttonText}>Dashboard</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.buttons}
                onPress={() => changeScreen('profile')}
                >
                <Text style={styles.buttonText}>Profile</Text>
            </TouchableOpacity>
      </View>
    )
}