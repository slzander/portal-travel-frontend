import React, { Component } from 'react';
import { View } from 'react-native'
import { styles } from '../components/Styles'
import ImageContainer from '../components/ImageContainer'

export default function Gallery ({ images, handleChange}) {    
    showImages = () => {
        return (
            <ImageContainer
                images={images}
                handleChange={handleChange}
            />
        )
    }
    
    return (
        <View>
            {this.showImages()}
        </View>
    );
}