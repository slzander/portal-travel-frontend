import React from 'react'
import { styles } from '../components/Styles'
import { 
    View, 
    Image, 
    Text, 
    TouchableOpacity,
} from 'react-native'

export default function ImageCard ({ image, handleChange }) {
    return(
        <View style={styles.imageCard}>
            <TouchableOpacity onPress={() => handleChange(image)}>
                <Image 
                    style={styles.image}
                    resizeMode={'contain'}
                    source={{uri: image.url}}
                />
            </TouchableOpacity>
            <Text style={styles.imageText}>{image.title}</Text>
        </View>
    )
}