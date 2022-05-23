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
    mainMessage: {
        display: 'flex',
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 36,
        color: '#000',
    },
    center: {
        display: 'flex',
        textAlign: 'center'
    },
    buttonIniciar: {
        backgroundColor: '#97C94B',
        // marginTop: 25,
        borderRadius: 32,
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        width: '83%',
        height: 50,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    orange: {
        color: '#ff6519',
        fontWeight: 'bold',
    },
    orangeButton: {
        backgroundColor: '#FF9F3F',
        borderRadius: 8
    },
    orangeText: {
        color: '#fff',
        fontSize: 12
    }
});