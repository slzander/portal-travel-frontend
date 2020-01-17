import React from 'react'
import {
    View, 
    Text, 
    TouchableOpacity,
    Image,
    ImageBackground
} from 'react-native'
import { styles } from '../components/Styles'

export default function Dashboard({ changeScreen, users, userName, user }){
    return(
    <View style={styles.dashboardContainer}>
        <View style={styles.dashboardInfo}>
            <Text style={styles.header}>Welcome 
            {/* {user.first_name} */}
            !</Text>
        </View>
        <Image 
            source={require('../images/phone.png')}
            style={styles.dashboardImage}
        />
        <Image 
            style={styles.gif}
            source={require('../images/beachgif.gif')}/>
        {/* <ImageBackground 
        source={require('../images/phone.png')}
        style={styles.dashboardBackground}>
            <Image 
                style={styles.gif}
                source={require('../images/beachgif.gif')}/>
        </ImageBackground> */}
    </View>
    )
}