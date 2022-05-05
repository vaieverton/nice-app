import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainView: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30

    },
    mainMessage: {
        display: 'flex',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 56
    },
    center: {
        display: 'flex',
        textAlign: 'center'
    },
    buttonIniciar: {
        backgroundColor: '#97C94B',
        marginTop: 25,
        borderRadius: 23,
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        width: '50%',
        height: 50,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    orange: {
        color: '#ff6519',
        fontWeight: 'bold'
    }
});