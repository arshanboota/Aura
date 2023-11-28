import { View, Text, ImageBackground, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import CustomTouchableOpacity from '../components/CustomTouchableOpacity';
const RegisterAs = () => {
    const navigation = useNavigation();
    const [selectedOption, setSelectedOption] = useState('user');

    const handlePress1 = (option) => {
        setSelectedOption(option);
    };

    const handlePress = () => {
        navigation.navigate('CreateAccount')
    };
    return (
        <ImageBackground
            source={require('../assets/images/imag1.png')}
            style={styles.backgroundImage}
            resizeMode="cover"
        >
            <View style={styles.container}>
                <Image
                    source={require('../assets/images/logo.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />
            </View>

            <View style={{flex:1,margin:30,justifyContent:'space-evenly' }}>
                <Text style={{ fontSize: 25, fontWeight: '700' ,left:15}}>Register As</Text>             

                <View style={{ flexDirection: 'row',left:20, }}>
                    <TouchableOpacity onPress={() => handlePress1('user')}>
                        <View style={[styles.circle, { backgroundColor: selectedOption === 'user' ? 'blue' : 'transparent' }]} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20,fontWeight: '400'  }}>Influencer</Text>
                </View>

                <View style={{ flexDirection: 'row',left:20 }}>
                    <TouchableOpacity onPress={() => handlePress1('admin')}>
                        <View style={[styles.circle, { backgroundColor: selectedOption === 'admin' ? 'blue' : 'transparent' }]} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20,fontWeight: '400' }}>Business</Text>
                    </View>
            </View>
            <CustomTouchableOpacity
                onPress={handlePress}
                title="Continue"
                colors={['#6A50B2', '#4F99DD']} start={{ x: 0.5, y: 1 }} end={{ x: 1, y: 0.5 }}
                style={{ height: 50, width: 306, borderRadius: 36, justifyContent: 'center', alignItems: 'center', margin: 10, left:"7%" ,top:'-80%'}} // Gradient button style
            />
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'contain',
        width: '100%',
        height: '95%',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: '20%',
        top:'7%'
    },
    logo: {
        width: Dimensions.get('window').width * 0.3,
        height: Dimensions.get('window').width * 0.3,

    },
    circle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'blue',
        marginRight: 10,
    },
});

export default RegisterAs;
