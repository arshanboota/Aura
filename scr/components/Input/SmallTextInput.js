import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/AntDesign';

const SmallTextInput = ({ iconName, placeholder, onChangeText, secureTextEntry }) => {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.inputIcon}>
      <FontAwesome name={iconName} size={23} color="#767676" />
      </View>
      <View style={styles.InputStyle} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#767676"
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '45%',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#767676',
    borderRadius: 20,
    paddingHorizontal: 15,
    padding: 2,
  },
  inputIcon: {
    paddingVertical: 10,
    // paddingRight: 10, // Adjust the padding to your preference
  },
  input: {
    flex: 1,
    color: '#000',
  },
  InputStyle: {
    backgroundColor: '#767676',
    width: 1,
    height: 25,
    margin: 10,
  },
});

export default SmallTextInput;