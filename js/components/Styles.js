import { StyleSheet } from 'react-native'

const colors = {
    darkBlue: '#0c2461',
    lightBlue: '#4a69bd',
}

const styles = StyleSheet.create({
    ARView: {
        textAlign: 'center',
        color: '#FFF',
        flex: 1
    },
    ARScene: {
        flex: 1
    },
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
    buttons: {
        margin: 10,
        backgroundColor: '#2980b9',
        paddingVertical: 10,
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFF'
    },
    ARTextStyle: {
        fontFamily: 'Arial',
        fontSize: 20,
        color: '#ffffff',
        textAlignVertical: 'center',
        textAlign: 'center'
    }
})

export { styles }