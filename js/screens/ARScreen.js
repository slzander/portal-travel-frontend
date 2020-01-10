import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
// import { createBottomTabNavigator } from 'react-navigation-tabs'

export default function ARScreen() {

    return(
        <View style={styles.screenContainer}>
            <Text>AR Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screenContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    }
})