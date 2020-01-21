import React from 'react'
import { styles } from '../components/Styles'
import { ScrollView } from 'react-native'
import ImageCard from './ImageCard'

export default function ImageContainer ({ images, handleChange }) {
    const imageArray = images.map(image => {
        return <ImageCard
            key={image.id}
            image={image}
            handleChange={handleChange}
        />
    })

    return(
        <ScrollView style={styles.imageContainer}>
            {imageArray}
        </ScrollView>
    )
}