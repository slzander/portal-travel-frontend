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

export default class Account extends React.Component {
    
    render(){
        return(
            <View style={styles.accountContainer}>
                {/* <StatusBar 
                    barStyle = 'light-content'
                /> */}

                <KeyboardAvoidingView 
                    behavior='padding'
                    style={styles.formContainer}
                >
                    <View style={styles.loginContainer}>
                        <Text>Change your password:</Text>
                        <TextInput 
                            style={styles.input} 
                            placeholder='Password'
                            // placeholderTextColor='rgba(255,255,255,0.7)' 
                            // onChangeText={password => this.setState({ password })}
                            onChangeText={text => this.props.passwordChange(text)}
                            secureTextEntry
                            returnKeyType='go'
                            ref={(input) => this.passwordInput = input} 
                        />
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity 
                                style={styles.buttons}
                                onPress={() => this.props.submitPasswordChange()}
                            >
                                <Text style={styles.buttonText}>Save Changes</Text>
                            </TouchableOpacity>
                            {/* <TouchableOpacity 
                                style={styles.buttons}
                                onPress={() => this.props.changeScreen('dashboard')}
                            >
                                <Text style={styles.buttonText}>Go back</Text>
                            </TouchableOpacity> */}
                            <TouchableOpacity 
                                style={styles.buttons}
                                onPress={() => this.props.deleteAccount()}
                            >
                                <Text style={styles.buttonText}>Delete Account</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </View>
        )
    }
}
