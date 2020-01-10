import React from 'react'
import {
    View, 
    Text, 
    StyleSheet,
    TouchableOpacity,
} from 'react-native'

export default function Dashboard({ changeScreen }){
    
    return(
        <View style={styles.dashboardContainer}>
            <View>
                <Text style={styles.header}>Welcome User!</Text>
            </View>
            <View style={styles.navBar}>
                <TouchableOpacity 
                    style={styles.buttons}
                    onPress={() => changeScreen('AR')}
                >
                    <Text style={styles.buttonText}>AR</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.buttons}
                    onPress={() => changeScreen('profile')}
                >
                    <Text style={styles.buttonText}>Profile</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    dashboardContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    header: {
        fontSize: 40
    },
    navBar: {
        flex: 1
    },
    buttons: {
        margin: 10,
        backgroundColor: '#2980b9',
        paddingVertical: 10,
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFF'
    }
})
