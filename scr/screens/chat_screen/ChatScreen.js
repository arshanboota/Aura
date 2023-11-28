import React, { useState } from 'react';
import { View, TextInput,Text, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import styles from './Style';

const ChatScreen = () => {
 const route = useRoute();
 const text = route.params.text;
 const navigation = useNavigation();
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  const sendMessage = () => {
    if (inputText.trim() !== '') {
      const newMessage = {
        text: inputText,
        time: getCurrentTime(),
        sent: true,
      };
      setMessages([...messages, newMessage]);
      setInputText('');
    }
  };

  const renderMessage = ({ item }) => {
    const messageStyle = item.sent ? styles.sentMessage : styles.receivedMessage;
    const alignStyle = item.sent ? { alignSelf: 'flex-end' } : { alignSelf: 'flex-start' };

    return (
      <View style={[styles.messageContainer, alignStyle]}>
        <View style={[styles.messageBubble, messageStyle]}>
          <Text>{item.text}</Text>
        </View>
        <Text style={styles.messageTime}>{item.time}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerIcons}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Icon name="arrow-back" size={24} color="black" style={styles.headerIcon} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{text}</Text>
        </View>
        <Icon name="ellipsis-vertical" size={24} color="black" style={styles.headerIcon} />
      </View>
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item, index) => index.toString()}
        style={styles.messagesContainer}
        inverted
      />
      <View style={styles.inputContainer}>
      <View style={styles.circle}>
        <Icon name="add" size={24} color="black" style={styles.icon} />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          value={inputText}
          onChangeText={(text) => setInputText(text)}
        />
        <TouchableOpacity onPress={sendMessage}>
          <Icon name="send" size={24} color="black" style={styles.sendIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default ChatScreen