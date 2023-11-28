import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Touchable_icon_text = ({ iconName, text, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Icon name={iconName} size={25} color='blue' />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 0.4,
    borderRadius: 5,
    paddingVertical: 8,
    marginVertical:5,
    paddingHorizontal: 15,
  },
  text: {
    fontWeight: '400',
    fontSize: 16,
    marginHorizontal: 15,
  },
});

export default Touchable_icon_text;
