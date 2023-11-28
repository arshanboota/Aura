import { View, Text, ImageBackground, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import CustomTouchableOpacity from '../components/CustomTouchableOpacity';
import LinearGradient from 'react-native-linear-gradient';
const LoginOrRegister = () => {
  const navigation = useNavigation();

  const handleLoginPress = () => {
    navigation.navigate('LoginScreen')
  };

  const handleRegisterPress = () => {
    navigation.navigate('RegisterAs')
  };
  return (
    <ImageBackground
      source={require('../assets/images/imag.png')}
      style={styles.backgroundImage}
      resizeMode='stretch'
    >
      <View style={styles.container}>
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <TouchableOpacity onPress={handleLoginPress}>
        <LinearGradient
          colors={['#6A50B2', '#4F99DD']} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }}
          style={{ height: 50, width: 306, borderRadius: 46, justifyContent: 'center', alignItems: 'center', left: '10%', top: '-100%' }} // Gradient button style
        >
          <Text style={{ color: 'white', fontSize: 14 }}>Log In</Text>
        </LinearGradient>
      </TouchableOpacity>

      <CustomTouchableOpacity
        onPress={handleRegisterPress}
        title="Register"
        colors={['#6A50B2', '#4F99DD']} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }}
        style={{ height: 50, width: 306, borderRadius: 46, justifyContent: 'center', alignItems: 'center', left: '10%', top: '-70%' }} // Gradient button style
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'contain',
    width: Dimensions.get('window').width * 1.01,
    height: Dimensions.get('window').height * 1.018,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: Dimensions.get('window').width * 0.259,
    height: Dimensions.get('window').height * 0.159,
   
  },
});

export default LoginOrRegister;