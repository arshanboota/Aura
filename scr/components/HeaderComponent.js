import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Assuming you're importing the correct icon library

const HeaderComponent = ({ onPress,iconName, headerText }) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <TouchableOpacity onPress={onPress}>
        <Icon name={iconName} color="black" size={35} />
      </TouchableOpacity>
      <Text style={{ fontWeight: '500', fontSize: 20 }}>   {headerText}</Text>
    </View>
  );
};

export default HeaderComponent;
