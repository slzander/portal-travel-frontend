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
    Alert,
    Button
} from 'react-native'


export default class SignUp extends React.Component {
    state = {
        username: '',
        password: ''
    }

    checkLogin(){
        // console.warn(username, password)
        if(this.state.username == 'admin' && this.state.password == 'admin'){
            this.props.navigation.navigate('dashboard')
        } else {
            Alert.alert('Incorrect Username and/or Password', [{
                text: 'Okay'
            }])
        }
    }
    
    render(){
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
                            style={styles.input} 
                            placeholder='Password'
                            placeholderTextColor='rgba(255,255,255,0.7)' 
                            onChangeText={password => this.setState({ password })}
                            secureTextEntry
                            returnKeyType='go'
                            ref={(input) => this.passwordInput = input} 
                        />
                        <Button 
                            style={styles.buttonText}
                            title={'Login'} 
                            onPress={() => this.checkLogin()} /> 

                        <TouchableOpacity style={styles.buttonContainer}>
                            <Text style={styles.buttonText}>SIGN UP</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3498db'
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
    buttonContainer: {
        backgroundColor: '#2980b9',
        paddingVertical: 10,
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFF'
    }
})
