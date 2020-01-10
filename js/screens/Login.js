import React from 'react'
// import LoginForm from './LoginForm'
// import SignUp from './SignUp'
// import Dashboard from './Dashboard'

import { 
    StyleSheet, 
    View, 
    Image, 
    Text, 
    TextInput, 
    TouchableOpacity,
    KeyboardAvoidingView,
    StatusBar
} from 'react-native'
import { checkMisnamedProps } from 'react-viro/components/Utilities/ViroProps'


export default function Login({ changeScreen }) {
    console.warn(changeScreen)
    return(
        <View style={styles.container}>
            <StatusBar 
                barStyle = 'light-content'
            />
            <View style={styles.logoContainer}>
                <Image 
                    style={styles.logo}
                    source={require('../images/mountain.png')}
                />
                <Text style={styles.title}>Travel With Me</Text>
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity 
                    style={styles.buttonContainer}
                    onPress={() => changeScreen('signUp')}
                >
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.buttonContainer}
                    onPress={() => changeScreen('loginForm')}
                >
                        <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3498db',
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        width: 100,
        height: 100
    },
    title: {
        color: '#FFF',
        marginTop: 10,
        width: 160,
        textAlign: 'center',
        opacity: 0.6
    },
    formContainer: {
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.7)',
        color: '#FFF',
        marginBottom: 20,
        paddingHorizontal: 10
    },
    loginContainer: {
        marginBottom: 60
    },
    buttons: {
        marginBottom: 40    
    },
    buttonContainer: {
        backgroundColor: '#2980b9',
        paddingVertical: 20,
        margin: 10
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFF'
    }
})