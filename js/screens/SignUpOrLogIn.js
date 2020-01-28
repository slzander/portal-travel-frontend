import React from 'react'
import { styles } from '../components/Styles'
import {
    View,
    Image,
    Text,
    TouchableOpacity,
    KeyboardAvoidingView,
    StatusBar,
} from 'react-native'

export default function SignUpOrLogIn({
    goToSignUp,
    goToLogin
}) {

    return (
        <View style={styles.container}>
            <StatusBar
                barStyle='dark-content'
            />
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require('../images/PTlogoLarge.png')}
                />
            </View>
            <KeyboardAvoidingView
                behavior='padding'
                style={styles.formContainer}
            >
                <View style={styles.loginContainer}>
                    <View style={styles.loginButtonContainer}>
                        <TouchableOpacity
                            style={styles.loginButtons}
                            onPress={goToSignUp}
                        >
                            <Text style={styles.buttonText}>Sign Up</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.loginButtons}
                            onPress={goToLogin}
                        >
                            <Text style={styles.buttonText}>Log In</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </View>
    )
}
