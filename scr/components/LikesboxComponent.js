import React from 'react';
import { View, Text, Image } from 'react-native';

const LikesboxComponent = ({ text, imagePath, mainText, additionalText }) => {
  return (
    <View style={{ borderWidth: 0.7, borderColor: 'gray', padding: 10, borderRadius: 20, height: '100%', width: '48%', alignItems: 'center', marginBottom: 20 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ fontSize: 13, fontWeight: '500' }}>{text}</Text>
        <Image
          source={imagePath}
          style={{ width: 25, height: 25 }}
        />
      </View>
      <Text style={{ fontSize: 21, fontWeight: '500' }}>{mainText}</Text>
      <Text style={{ fontSize: 10, fontWeight: '500', color: 'green' }}>{additionalText}</Text>
    </View>
  );
};

export default LikesboxComponent;
