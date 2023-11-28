import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 15,
      paddingHorizontal: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    circle: {
      borderWidth: 1,
      height: 35,
      width: 35,
      backgroundColor: '#6A50B2',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 45,
      padding: 3,
      marginHorizontal:5
    },
    headerIcons: {
      flexDirection: 'row',
    },
    headerIcon: {
      marginRight: 10,
    },
    headerTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginLeft:20
    },
    messagesContainer: {
      flex: 1,
    },
    messageContainer: {
      maxWidth: '80%',
      marginVertical: 5,
    },
    sentMessage: {
      backgroundColor: '#DCF8C6',
      alignSelf: 'flex-end',
      borderRadius: 8,
    },
    receivedMessage: {
      alignSelf: 'flex-start',
      borderRadius: 8,
    },
    messageBubble: {
      padding: 10,
      marginHorizontal: 10,
    },
    messageTime: {
      fontSize: 12,
      color: '#aaa',
      textAlign: 'right',
      marginRight: 10,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 5,
      paddingHorizontal: 10,
    },
    icon: {
      marginRight: 10,
    },
    sendIcon: {
      marginLeft: 10,
    },
    input: {
      flex: 1,
      paddingVertical: 8,
      paddingHorizontal: 15,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: '#ccc',
    },
  });
  
  export default styles;
  