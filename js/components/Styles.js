import { StyleSheet } from 'react-native'

const colors = {
    white: 'hsl(240, 1%, 86%)',
    black: 'hsl(0, 0%, 0%)',
    blackish: 'hsl(0, 0%, 10%)',
    backgroundColor: 'hsl(190, 17%, 50%)',
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
        flex: 3,
        backgroundColor: colors.backgroundColor,
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        width: 250,
        height: 250
    },
    logoWords: {
        marginTop: -143,
    },
    title: {
        color: colors.black,
        margin: 3,
        // fontFamily: 'Futura-MediumItalic',
        fontFamily: 'Futura-CondensedMedium',
        // marginTop: -80,
        // width: 160,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 26
    },
    gearContainer: {
        flex: 1,
        alignItems: 'flex-end',
        backgroundColor: colors.backgroundColor,
    },
    gear: {
        width: 30,
        height: 30,
        marginRight: 25,
        marginTop: 50,
        margin: 15
    },
    formContainer: {
        padding: 20
    },
    loginContainer: {
        marginBottom: 60
    },
    input: {
        height: 40,
        backgroundColor: colors.white,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    buttons: {
        marginBottom: 10,
        marginTop: 17,
        marginLeft: 90,
        marginRight: 90,
        borderRadius: 5,
        backgroundColor: colors.blackish,
        paddingVertical: 15,
    },
    loginButtonContainer: {
        justifyContent: 'center',
        flexDirection: 'row'
    },
    loginButtons: {
        justifyContent: 'space-around',
        marginTop: 17,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 5,
        backgroundColor: colors.blackish,
        paddingVertical: 15,
        paddingHorizontal: 25,
        width: 130,
    },
    buttonText: {
        textAlign: 'center',
        color: colors.white,
        fontSize: 17,
    },
    ARTextStyle: {
        fontFamily: 'Arial',
        fontSize: 20,
        color: '#ffffff',
        textAlignVertical: 'center',
        textAlign: 'center'
    },
    profileHeader: {
        paddingTop: 120,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.backgroundColor,
    },
    profileHeaderText: {
        flex: 1,
    },
    profileContainer: {
        flex: 7,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.backgroundColor,
    },
    chosenPhoto: {
        width: 300,
        height: 300
    },
    galleryContainer: {
        marginTop: 45,
        marginBottom: 35,
    },
    imageCard: {
        padding: 10,
        margin: 5,
        marginBottom: 5,
        backgroundColor: colors.white,
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
        backgroundColor: colors.backgroundColor,
    },
    dashboardImage: {
        flex: 3,
        alignSelf: 'center',
        position: 'absolute',
        marginTop: 170,
        marginLeft: 10,
        width: '90%',
        height: '90%',
    },
    gif: {
        flex: 1,
        alignSelf: 'center',

        width: 293,
        height: 590,
        // paddingTop: 60,
        marginTop: -370,
    },
    dashboardInfo: {
        flex: 1,
        marginTop: 100,
    },
    navBar: {
        backgroundColor: colors.backgroundColor,
        paddingBottom: 20,
    },
    header: {
        // flex: 1,
        alignSelf: 'center',
        fontSize: 28,
        color: colors.blackish
    },
    listContainer: {
        margin: 2
    },
    listItems: {
        fontSize: 25
    },
    accountContainer: {
        flex: 1,
        backgroundColor: colors.backgroundColor,
        paddingTop: 200,
    },
    accountText: {
        fontSize: 15,
        marginBottom: 4,
    }
})

export { styles }