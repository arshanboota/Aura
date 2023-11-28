import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CustomCircle = ({
  width = 65,
  height = 65,
  borderRadius = 60,
  borderWidth = 3,
  marginLeft = 5,
  borderTopColor,
  borderBottomColor,
  borderLeftColor,
  borderRightColor,
  circleText,
  outsideText,
}) => {
  const defaultColors = {
    borderTopColor: borderTopColor || 'gray',
    borderBottomColor: borderBottomColor || 'gray',
    borderLeftColor: borderLeftColor || 'gray',
    borderRightColor: borderRightColor || 'gray',
  };

  const circleStyles = {
    width,
    height,
    borderRadius,
    borderWidth,
    marginLeft,
    ...defaultColors,
  };

  return (
    <View>
      <View style={[styles.circle, circleStyles]}>
        <Text style={styles.circleText}>{circleText}</Text>
      </View>
      <View style={styles.outsideText}>
        <Text>{outsideText}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  circle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleText: {
    fontWeight:'600'
  },
  outsideText: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8, 
    fontWeight:'500'
  },
});

export default CustomCircle;
