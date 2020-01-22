import React from 'react'
import { styles } from '../components/Styles'
import {
    View,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    StatusBar,
} from 'react-native'

export default function SignUp({
    submitSignUp,
    setFirstName,
    setEmail,
    setPassword,
    goBack,
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
                    <TextInput
                        style={styles.input}
                        placeholder='First Name'
                        returnKeyType='next'
                        onChangeText={firstName => setFirstName(firstName)}
                        autoCorrect={false}
                        onSubmitEditing={() => this.textInput.focus()}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Email'
                        returnKeyType='next'
                        onChangeText={email => setEmail(email)}
                        keyboardType='email-address'
                        autoCapitalize='none'
                        autoCorrect={false}
                        onSubmitEditing={() => this.passwordInput.focus()}
                        ref={(input) => this.textInput = input}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Password'
                        onChangeText={password => setPassword(password)}
                        secureTextEntry
                        returnKeyType='go'
                        onSubmitEditing={submitSignUp}
                        ref={(input) => this.passwordInput = input}
                    />
                    <View style={styles.loginButtonContainer}>
                    <TouchableOpacity
                            style={styles.loginButtons}
                            onPress={goBack}
                        >
                            <Text style={styles.buttonText}>Go Back</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.loginButtons}
                            onPress={submitSignUp}
                        >
                            <Text style={styles.buttonText}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </View>
    )
}
