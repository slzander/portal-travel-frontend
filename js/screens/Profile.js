import React from 'react'
import { 
    StyleSheet, 
    View, 
    Image, 
    Text, 
    TextInput, 
    TouchableOpacity,
    KeyboardAvoidingView,
    StatusBar,
} from 'react-native'
import Styles from '../components/Styles'


export default class Profile extends React.Component {
    state = {
        images: []
    }
    
    render(){
        return(
            <View style={Styles.container}>
                <StatusBar 
                    barStyle = 'light-content'
                />
                <View style={Styles.logoContainer}>
                    <Image 
                        style={Styles.logo}
                        source={require('../images/mountain.png')}
                    />
                    <Text style={Styles.title}>Travel With Me</Text>
                </View>
                <KeyboardAvoidingView 
                    behavior='padding'
                    style={Styles.formContainer}
                >
                    <View style={Styles.loginContainer}>
                        <TextInput 
                            style={Styles.input}
                            placeholder='Username or Email'
                            // placeholderTextColor='rgba(255,255,255,0.7)'
                            returnKeyType='next'
                            onSubmitEditing={() => this.passwordInput.focus()}
                            onChangeText={username => this.setState({ username })}
                            keyboardType='email-address'
                            autoCapitalize='none'
                            autoCorrect={false} 
                            />
                        <TextInput 
                            style={Styles.input} 
                            placeholder='Password'
                            placeholderTextColor='rgba(255,255,255,0.7)' 
                            onChangeText={password => this.setState({ password })}
                            secureTextEntry
                            returnKeyType='go'
                            ref={(input) => this.passwordInput = input} 
                        />
                        <View style={Styles.buttonContainer}>
                            <TouchableOpacity 
                                style={Styles.buttons}
                                onPress={() => this.props.changeScreen('dashboard')}
                            >
                                <Text style={Styles.buttonText}>SIGN UP</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                style={Styles.buttons}
                                onPress={() => this.props.changeScreen('dashboard')}
                            >
                                <Text style={Styles.buttonText}>LOG IN</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </View>
        )
    }
}
