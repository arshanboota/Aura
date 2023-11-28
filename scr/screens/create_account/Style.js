import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    input: {
        height: 45,
        flexDirection: 'row',
        borderRadius: 15,
        backgroundColor: 'white',
        borderWidth: 1,
        marginVertical: 13,
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        top: '-3%',
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    box: {
        width: 20,
        height: 20,
        right: 5,
        borderWidth: 1,
    },
    text: {
        fontSize: 11,
        fontWeight: '400',
        left: '15%',
    },

    backgroundImage: {
        flex: 1,
    },
});

export default styles