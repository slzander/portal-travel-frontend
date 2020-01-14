import React from 'react'
import { styles } from '../components/Styles'
import { 
    StyleSheet, 
    View, 
    Image, 
    Text, 
    TextInput, 
    TouchableOpacity,
    KeyboardAvoidingView,
    StatusBar,
    Alert
} from 'react-native'

export default function ImageCard ({ image }) {
    return(
        <View style={styles.imageCard}>
            <Image 
                style={styles.image}
                resizeMode={'contain'}
                source={{uri: image.url}}
            />
        <Text>{image.title}</Text>
        </View>
    )
}