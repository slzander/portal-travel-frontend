import React from 'react';
import { View } from 'react-native'
import ImageContainer from '../components/ImageContainer'
import { styles } from '../components/Styles';

export default function Gallery({ images, handleChange }) {
    showImages = () => {
        return (
            <ImageContainer
                images={images}
                handleChange={handleChange}
            />
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.galleryContainer}>
                {this.showImages()}
            </View>
        </View>
    );
}