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
    ActivityIndicator
} from 'react-native'

export default function SignUp({
    firstName,
    email,
    password,
    setFirstName,
    setEmail,
    setPassword,
    goBack,
    loading,
    changeLoading
}) {

    return (
        <View style={styles.container}>
            {loading ?
                <ActivityIndicator style={styles.indicator} size='large' color="#fff" /> :
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
                                defaultValue={firstName ? firstName : null}
                                onChangeText={firstName => setFirstName(firstName)}
                                autoCorrect={false}
                                onSubmitEditing={() => this.textInput.focus()}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder='Email'
                                returnKeyType='next'
                                defaultValue={email ? email : null}
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
                                defaultValue={password ? password : null}
                                returnKeyType='go'
                                onSubmitEditing={changeLoading}
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
                                    onPress={changeLoading}
                                >
                                    <Text style={styles.buttonText}>Sign Up</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                </View>
            }
        </View>
    )

}
