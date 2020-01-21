import { StyleSheet } from 'react-native'

const colors = {
    whiteish: 'hsl(240, 1%, 86%)',
    black: 'hsl(0, 0%, 0%)',
    blackish: 'hsl(0, 0%, 10%)',
    backgroundColor: 'hsl(190, 17%, 50%)',
}

const styles = StyleSheet.create({

    // APP:

    containerWithFooter: {
        flex: 1
    },
    ARScene: {
        flex: 1
    },
    indicator: {
        flex: 1
    },

    // LOGIN/SIGNUP:

    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        width: 250,
        height: 250
    },
    // logoWords: {
    //     marginTop: -143,
    // },
    // title: {
    //     color: colors.black,
    //     margin: 3,
    //     // fontFamily: 'Futura-MediumItalic',
    //     fontFamily: 'Futura-CondensedMedium',
    //     // marginTop: -80,
    //     // width: 160,
    //     textAlign: 'center',
    //     fontWeight: 'bold',
    //     fontSize: 26
    // },

    formContainer: {
        padding: 20
    },
    loginContainer: {
        marginBottom: 60
    },
    input: {
        height: 40,
        backgroundColor: colors.whiteish,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 5,
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

    // DASHBOARD:

    dashboardContainer: {
        flex: 1,
        backgroundColor: colors.backgroundColor,
    },
    dashboardHeader: {
        alignSelf: 'center',
        fontSize: 32,
        color: colors.blackish,
        marginBottom: 5
    },
    dashboardText: {
        alignSelf: 'center',
        fontSize: 18,
        color: colors.blackish
    },
    dashboardInfo: {
        flex: 1,
        marginTop: 100,
    },
    dashboardImage: {
        flex: 1,
        alignSelf: 'center',
        position: 'absolute',
        marginTop: 199,
        width: 338,
        height: 679,
    },
    gif: {
        flex: 1,
        alignSelf: 'center',
        width: 294,
        marginTop: -295,
    },

    // PROFILE: 

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
    profileContainer: {
        flex: 7,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.backgroundColor,
    },

    // profileHeader: {
    //     paddingTop: 120,
    //     flex: 1,
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     backgroundColor: colors.backgroundColor,
    // },
    // profileHeaderText: {
    //     flex: 1,
    // },
    

    // AR:

    ARTextStyle: {
        fontFamily: 'Arial',
        fontSize: 20,
        color: '#ffffff',
        textAlignVertical: 'center',
        textAlign: 'center'
    },

    // ACCOUNT:

    accountContainer: {
        flex: 1,
        backgroundColor: colors.backgroundColor,
        paddingTop: 200,
    },

    // MULTIPLE COMPONENTS:
    
    container: {
        flex: 3,
        backgroundColor: colors.backgroundColor,
    },
    header: {
        alignSelf: 'center',
        fontSize: 28,
        color: colors.blackish
    },
    navBar: {
        backgroundColor: colors.backgroundColor,
        paddingBottom: 20,
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
    buttonText: {
        textAlign: 'center',
        color: colors.whiteish,
        fontSize: 17,
    },
    // chosenPhoto: {
    //     width: 300,
    //     height: 300
    // },


    // IMAGE CONTAINER:

    galleryContainer: {
        marginTop: 10,
        marginBottom: 5,
    },

    // IMAGE CARD:

    imageCard: {
        padding: 10,
        margin: 5,
        marginBottom: 5,
        backgroundColor: colors.whiteish,
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
    // listContainer: {
    //     margin: 2
    // },
    // listItems: {
    //     fontSize: 25
    // },
})

export { styles }