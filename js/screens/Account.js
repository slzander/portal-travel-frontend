import React from 'react'
import { styles } from '../components/Styles'
import {
    View,
    Text,
    TouchableOpacity,
    KeyboardAvoidingView,
    StatusBar
} from 'react-native'

export default function Account({ deleteAccount, submitLogOut }) {
    return (
        <View style={styles.accountContainer}>
            <StatusBar
                barStyle='dark-content'
            />
            <KeyboardAvoidingView
                behavior='padding'
                style={styles.formContainer}
            >
                <View style={styles.loginContainer}>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={styles.buttons}
                            onPress={submitLogOut}
                        >
                            <Text style={styles.buttonText}>Log Out</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.buttons}
                            onPress={deleteAccount}
                        >
                            <Text style={styles.buttonText}>Delete Account</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </View>
    )
}
