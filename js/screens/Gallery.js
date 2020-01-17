import React, { Component } from 'react';
import { View } from 'react-native'
import { styles } from '../components/Styles'
import ImageContainer from '../components/ImageContainer'

export default class Gallery extends Component {
    showImages = () => {
        return (
            <ImageContainer
                images={this.props.images}
                handleChange={this.props.handleChange}
            />
        )
    }

    render() {
        return (
            <View>
                {this.showImages()}
            </View>
        );
    }
}