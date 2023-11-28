import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const CustomTouchableOpacity = ({ onPress, title, colors, style }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <LinearGradient
        colors={colors}
        start={{ x: 0, y: 0.5 }} // Horizontal start (left)
        end={{ x: 1, y: 0.5 }} // Horizontal end (right)
        style={style}
      >
        <Text style={{ color: 'white', fontSize: 14 }}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default CustomTouchableOpacity;
