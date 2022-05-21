import { Dimensions, StyleSheet } from 'react-native'

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export const styles = StyleSheet.create({
    map: {
        height: '83%',
        width: '100%',
        backgroundColor: 'grey'
        // zIndex: -1
    },
    footer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',

    },
    item: {
        display: 'flex',
        backgroundColor: 'lightgrey',
        width: width * 0.15,
        height: height * 0.10,
        borderRadius: 24,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 8,
        fontSize: 12

    },
    font: {
        fontSize: height * 0.02
    },
    flexCenter: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }

})