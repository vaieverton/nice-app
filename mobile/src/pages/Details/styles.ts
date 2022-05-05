import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
        paddingHorizontal: 32,
        paddingTop: 55
    },
    header: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 16,

    },
    image: {
        width: '100%',
        height: 150,
        marginBottom: 16,
        borderRadius: 32
    },
    logo: {
        height: 25,
        width: 80,
        alignSelf: 'flex-start',
        marginLeft: 16
    },
    bckimg: {
        flex: 1,
        width: '100%',
        height: 'auto',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        alignSelf: 'center'
    },
    descriptionTitle: {
        color: '#0092d0',
        fontWeight: 'bold'
    },
    text: {
        fontSize: 16,
        // fontWeight: 'bold'
        color: '#888',
        marginTop: 16,
    },
    enderecoTitle: {
        color: '#92c249',
        fontWeight: 'bold'
    },
    endereco: {
        color: '#888',
    },
    phone: {
        color: '#F68B1F',
        fontWeight: 'bold',
    },
    buttonText: {
        fontSize: 24,
    },
});