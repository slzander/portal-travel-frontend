import { StyleSheet, Dimensions } from 'react-native'

const colors = {
    darkBlue: '#0c2461',
    lightBlue: '#4a69bd',
}

const styles = StyleSheet.create({
    indicator: {
        flex: 1
    },
    containerWithFooter: {
        flex: 1
    },
    ARScene: {
        flex: 1
    },
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
    loginContainer: {
        marginBottom: 60
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.7)',
        // color: '#FFF',
        marginBottom: 20,
        paddingHorizontal: 10
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
    },
    profileContainer: {
        paddingTop: 20,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3498db',
    },
    chosenPhoto: {
        width: 300,
        height: 300
    },
    imageCard: {
        padding: 10,
        margin: 5,
        marginBottom: 5,
        backgroundColor: '#2980b9',
    },

    image: {
        width: 340,
        height: 170
    },
    imageText: {
        paddingTop: 7,
        fontSize: 15,
        textAlign: 'center'
    },
    dashboardContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#3498db',
    },
    dashboardInfo: {
        // flex: 1,
        marginTop: 130,
    },
    navBar: {
        backgroundColor: '#3498db',
        paddingBottom: 20,
    },
    header: {
        fontSize: 40
    },
    listContainer: {
        margin: 2
    },
    listItems: {
        fontSize: 25
    }
})

export { styles }