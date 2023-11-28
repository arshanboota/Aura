import React from 'react';
import { View, Text, Image } from 'react-native';

const CustomComponent = ({ imagePath, title, count }) => {
  return (
    <View style={{ borderWidth:0.69, borderColor: 'gray', padding: 10, borderRadius: 20, height: '65%', width: '32%', justifyContent: 'space-between', alignItems: 'center' }}>
      <Image
        source={imagePath}
        style={{ width: 28, height: 28 }}
      />
      <Text style={{ fontSize: 16, fontWeight: '500' }}>{title}</Text>
      <Text style={{ fontSize: 16, fontWeight: '500' }}>{count}</Text>
    </View>
  );
};

export default CustomComponent;
