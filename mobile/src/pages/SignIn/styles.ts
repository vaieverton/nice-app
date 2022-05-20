import { Dimensions, StyleSheet } from "react-native";
import { Screen, screensEnabled } from "react-native-screens";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainView: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height * 0.95,
        alignItems: 'center',
        padding: 30,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    field: {
        width: Dimensions.get('screen').width * 0.85,
        height: 45,
        backgroundColor: '#F4F4F4',
        color: 'black',
        borderRadius: 16,
        marginTop: 12,
    },
    buttonSubmit: {
        backgroundColor: 'orange',
        color: 'white',
        borderRadius: 16,
        width: Dimensions.get('screen').width * 0.7,
        height: 45,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'

    },
    mainText: {
        fontSize: 56,
        alignItems: 'flex-start',
        fontWeight: 'bold',
        color: 'black'
    },
    image: {
        width: '100%',
        height: Dimensions.get('screen').height * 0.20,
        marginBottom: 16,
        borderRadius: 32
    },
    logo: {
        height: 25,
        width: 80,
        alignSelf: 'flex-start',
        marginLeft: 16
    },
    buttonText: {
        fontSize: 24,
    },
    header: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
        
    }
});