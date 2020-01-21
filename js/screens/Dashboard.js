import React from 'react'
import {
    View,
    Text,
    Image,
    StatusBar
} from 'react-native'
import { styles } from '../components/Styles'

export default function Dashboard({ user, gif }) {
    return (
        <View style={styles.dashboardContainer}>
            <StatusBar
                barStyle='dark-content'
            />
            <View style={styles.dashboardInfo}>
                <Text style={styles.header}>Welcome {user.first_name}!</Text>
            </View>
            <Image
                source={require('../images/phone.png')}
                style={styles.dashboardImage}
            />
            <Image
                style={styles.gif}
                defaultSource={require('../images/PTlogoSmall.png')}
                source={{ uri: gif }}
            // source={{uri : 'https://i.giphy.com/media/KDtcq2KBq4hA0neYoX/giphy.gif'}}
            // source={require('../images/beachgif.gif')}
            />
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