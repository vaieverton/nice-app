import { Dimensions, StyleSheet } from "react-native";
import { Screen, screensEnabled } from "react-native-screens";

const styles = StyleSheet.create({
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
    },
    column: {
        display: 'flex',
        flexDirection: 'column',

    },
    mainText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black'
    },
    header: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    logo: {
        height: 25,
        width: 80,
        alignSelf: 'flex-start',
        marginLeft: 16
    },
    banner: {
        height: Dimensions.get('screen').height * 0.4,
        width: Dimensions.get('screen').width * 0.7,
        alignSelf: 'flex-start',
        marginLeft: 16
    },
});

export default styles;