import React from 'react'
import { styles } from '../components/Styles'
import {
    View,
    Text,
    TextInput,
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
                    {/* <Text style={styles.accountText}>Change your password:</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder='Password'
                        // placeholderTextColor='rgba(255,255,255,0.7)' 
                        // onChangeText={password => this.setState({ password })}
                        onChangeText={text => passwordChange(text)}
                        secureTextEntry
                        returnKeyType='go'
                        // ref={(input) => this.passwordInput = input} 
                    /> */}
                    <View style={styles.buttonContainer}>
                        {/* <TouchableOpacity 
                            style={styles.buttons}
                            onPress={() => submitPasswordChange()}
                        >
                            <Text style={styles.buttonText}>Save Changes</Text>
                        </TouchableOpacity> */}
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
