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
        // alignItems: 'center',rr

    },
    item: {
        display: 'flex',
        // backgroundColor: 'lightgrey',
        width: height * 0.10,
        height: height * 0.10,
        borderRadius: 24,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 8,
        fontSize: 12,

    },
    itemView: {
        display: 'flex',
        backgroundColor: 'lightgrey',
        width: width * 0.15,
        height: height * 0.10,
        borderRadius: 24,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 8,
        fontSize: 12,
        borderWidth: 5,
        borderColor: 'green',
        borderStyle: 'solid',
        zIndex: -999

    },
    image: {
        width: height * 0.08,
        height: height * 0.08,
    },
    font: {
        fontSize: height * 0.02
    },
    flexCenter: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    itemm: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    }

})