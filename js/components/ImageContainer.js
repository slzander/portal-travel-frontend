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
    Alert,
    ScrollView
} from 'react-native'
import ImageCard from './ImageCard'

export default function ImageContainer ({ images }) {
    const imageArray = images.map(image => {
        return <ImageCard
            key={image.id}
            image={image}
        />
    })
    
    return(
        <ScrollView>
            {imageArray}
        </ScrollView>
    )
}