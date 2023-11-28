
import { View,Image } from 'react-native'
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
   const navigation = useNavigation();
  
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('OnboardingStarter'); 
    }, 3000); 
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text> Gggfgfyghvtygh</Text>
    <Image
      style={{ height:'187',width:'155' }}
      source={require('../assets/images/Group481799.png')}
    />
  </View>
  )
}

export default SplashScreen
