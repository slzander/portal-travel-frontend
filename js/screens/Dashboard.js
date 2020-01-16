import React from 'react'
import {
    View, 
    Text, 
    TouchableOpacity,
} from 'react-native'
import { styles } from '../components/Styles'

export default function Dashboard({ changeScreen, users, userName, uid }){
    console.warn(uid)

    return(
        <View style={styles.dashboardContainer}>
            <View style={styles.dashboardInfo}>
                <Text style={styles.header}>Welcome {userName}!</Text>
            </View>
            <View style={styles.listContainer}>
                <Text style={styles.listItems}>1. Click on "My Profile"</Text>
                <Text style={styles.listItems}>2. Scroll through your current images</Text>
                <Text style={styles.listItems}>3. Click on an image if you would like to change it to a different image in the gallery</Text>
                <Text style={styles.listItems}>4. Click on "Go to AR" to view portals</Text>
                <Text style={styles.listItems}>5. Walk in and out of portals to experience them</Text>
                <Text style={styles.listItems}>6. Enjoy!</Text>
            </View>
            <View style={styles.navBar}>
                {/* <TouchableOpacity 
                    style={styles.buttons}
                    onPress={() => changeScreen('AR')}
                >
                    <Text style={styles.buttonText}>AR</Text>
                </TouchableOpacity> */}
                <TouchableOpacity 
                    style={styles.buttons}
                    onPress={() => changeScreen('profile')}
                >
                    <Text style={styles.buttonText}>My Profile</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}