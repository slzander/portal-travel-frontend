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

export default function ImageContainer ({ images, handleChange }) {
    const imageArray = images.map(image => {
        return <ImageCard
            key={image.id}
            image={image}
            handleChange={handleChange}
        />
    })
    console.warn(handleChange)

    return(
        <ScrollView>
            {imageArray}
        </ScrollView>
    )
}