import { StyleSheet } from 'react-native'

// const colors = {
//     darkBlue: '#0c2461',
//     lightBlue: '#4a69bd',
// }

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
        backgroundColor: '#429BB2',
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    gearContainer: {
        // alignItems: 'center',
        flex: 1,
        justifyContent: 'flex-end'
    },
    logo: {
        width: 150,
        height: 150
    },
    gearContainer: {
        flex: 1,
        alignItems: 'flex-end',
        backgroundColor: '#429BB2',

    },
    gear: {
        width: 30,
        height: 30,
        marginRight: 25,
        // marginTop: 15,
        margin: 45
    },
    // gearButton: {
    //     alignItems: 'flex-end'
    // },
    title: {
        color: 'black',
        marginTop: 10,
        width: 160,
        textAlign: 'center',
        opacity: 0.6,
        fontWeight: 'bold',
        fontSize: 24
    },
    formContainer: {
        padding: 20
    },
    loginContainer: {
        marginBottom: 60
    },
    input: {
        height: 40,
        backgroundColor: '#DCDCDD',
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    buttons: {
        margin: 10,
        marginLeft: 50,
        marginRight: 50,
        borderRadius: 5,
        backgroundColor: '#177993',
        paddingVertical: 15,
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFF',
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
        backgroundColor: '#429BB2',
    },
    profileHeaderText: {
        flex: 1,
    },
    profileContainer: {
        // paddingTop: 50,
        flex: 7,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#429BB2',
    },
    chosenPhoto: {
        width: 300,
        height: 300
    },
    imageCard: {
        padding: 10,
        margin: 5,
        marginBottom: 5,
        backgroundColor: '#177993',
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
        // flexDirection: 'column',
        // justifyContent: 'space-between',
        backgroundColor: '#429BB2',
    },
    dashboardImage: {
        flex: 1,
        position: 'absolute',
        // justifyContent: 'center',
        // alignItems: 'center',
        marginTop: 170,
        // paddingTop: 100,
        marginLeft: 10,
        width: '95%',
        height: '95%',
    },
    gif: {
        width: 310,
        height: 510,
        // paddingTop: 60,
        marginTop: 120,
        marginLeft: 33,
    },
    dashboardInfo: {
        flex: 1,
        marginTop: 100,
    },
    navBar: {
        backgroundColor: '#429BB2',
        paddingBottom: 20,
    },
    header: {
        fontSize: 22,
    },
    listContainer: {
        margin: 2
    },
    listItems: {
        fontSize: 25
    },
    accountContainer: {
        flex: 1,
        backgroundColor: '#429BB2',
        paddingTop: 200,
    },
    accountText: {
        fontSize: 15,
        marginBottom: 4,
    }
})

export { styles }