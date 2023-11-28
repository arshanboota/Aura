import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

const SmallRoundImage = ({ onPress, source, style }) => {
  return (
    <TouchableOpacity
      style={{
        height:50,
        width:50,
        borderColor: 'white',
        justifyContent: 'center',
        alignItems:'center',
        borderWidth: 1,
        borderRadius: 45,
        backgroundColor: 'lightgray',
        padding: 3,
        ...style, 
      }}
      onPress={onPress}
    >
      <Image style={{ height: 30, width: 30 }} source={source} />
    </TouchableOpacity>
  );
};

export default SmallRoundImage;
