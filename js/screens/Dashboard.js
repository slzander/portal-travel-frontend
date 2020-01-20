import React from 'react'
import {
    View,
    Text,
    Image,
} from 'react-native'
import { styles } from '../components/Styles'

export default function Dashboard({ user, gif }) {

    
    
    // showPhoneImages = () => {
    //     <View style={styles.logoContainer}>
    //         <Image
    //             style={styles.logo}
    //             source={require('../images/window.png')}
    //         />
    //         <View style={styles.logoWords}>
    //             <Text style={styles.title}>TRAVEL</Text>
    //             <Text style={styles.titleSmall}>THROUGH</Text>
    //             <Text style={styles.title}>PORTALS</Text>
    //         </View>
    //     </View>
    // }

    return (
        <View style={styles.dashboardContainer}>
            <View style={styles.dashboardInfo}>
                <Text style={styles.header}>Welcome {user.first_name}!</Text>
            </View>
            <Image
                source={require('../images/phone.png')}
                style={styles.dashboardImage}
            />
            <Image
                style={styles.gif}
                // defaultSource={
                //     {uri: 'https://i.imgur.com/pIJIIpU.png', width: 50}
                // }
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