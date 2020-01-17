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
    Alert
} from 'react-native'

export default function LoginForm ({ 
    submitLogin, 
    submitSignUp, 
    setFirstName,
    setEmail,
    setPassword,
    email,
    password}) {

    // checkLogin = () => {
    //     console.warn(username, password)
    //     if(this.state.username == 'admin' && this.state.password == 'admin'){
    //         changeScreen('dashboard')
    //     } else {
    //         Alert.alert('Incorrect Username and/or Password', [{
    //             text: 'Okay'
    //         }])
    //     }
    // }
    
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
            <KeyboardAvoidingView 
                behavior='padding'
                style={styles.formContainer}
            >
                <View style={styles.loginContainer}>
                    <TextInput 
                        style={styles.input}
                        placeholder='First Name'
                        // placeholderTextColor='rgba(255,255,255,0.7)'
                        returnKeyType='next'
                        // onSubmitEditing={() => this.passwordInput.focus()}
                        // onChangeText={username => this.setState({ username })}
                        onChangeText={firstName => setFirstName(firstName)}
                        // autoCapitalize='none'
                        autoCorrect={false} 
                    />
                    <TextInput 
                        style={styles.input}
                        placeholder='Email'
                        // placeholderTextColor='rgba(255,255,255,0.7)'
                        returnKeyType='next'
                        // onSubmitEditing={() => this.passwordInput.focus()}
                        onChangeText={email => setEmail(email)}
                        keyboardType='email-address'
                        autoCapitalize='none'
                        autoCorrect={false} 
                    />
                    <TextInput 
                        style={styles.input} 
                        placeholder='Password'
                        // placeholderTextColor='rgba(255,255,255,0.7)' 
                        // onChangeText={password => this.setState({ password })}
                        onChangeText={password => setPassword(password)}
                        secureTextEntry
                        returnKeyType='go'
                        ref={(input) => this.passwordInput = input} 
                    />
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity 
                            style={styles.buttons}
                            onPress={() => submitSignUp(email, password)}
                        >
                            <Text style={styles.buttonText}>SIGN UP</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.buttons}
                            onPress={() => submitLogin(email, password)}
                        >
                            <Text style={styles.buttonText}>LOG IN</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </View>
    )
}
