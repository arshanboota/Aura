import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, ImageBackground, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { auth } from '../components/Firebase'
import Icon from 'react-native-vector-icons/Ionicons';
import CustomTouchableOpacity from '../components/CustomTouchableOpacity';
const VarificiationCode = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handlePress1 = () => {
        navigation.navigate('AccountDetails')
    };

    return (
        <ImageBackground
            source={require('../assets/images/Account1.png')}
            style={styles.backgroundImage}

        >
            <KeyboardAvoidingView style={{ flex: 1 }}>

                <View style={{ flex: 0.5, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', top: 20 }}>
                    <Image
                        style={{ height: 121, width: 118, borderRadius: 30, resizeMode: 'contain', left: 20 }}
                        source={require('../assets/images/logo.png')}
                    />
                    <Text style={{ fontSize: 35, color: 'white', fontWeight: '500', left: 3 }}> Create New{"\n"} Account </Text>
                </View>

                <View style={{ flex: 0.5, margin: 25 }}>
                    <Text style={{ fontSize:13,fontWeight:'500',top:10}}>     Enter your phone number for Varification.</Text>
                    <View style={{ flexDirection: 'row', top: 30 }}>                       
                        <TextInput placeholder="" style={{ height: 45, borderWidth: 1, borderRadius: 15, fontWeight: '500', fontSize: 19, fontSize: 16, width: '30%', paddingLeft: 25 }}   ></TextInput>
                        <TextInput placeholder="" style={{ height: 45, borderWidth: 1, borderRadius: 15, fontWeight: '500', fontSize: 19, fontSize: 16, width: '30%', paddingLeft: 25 }}   ></TextInput>
                        <TextInput placeholder="" style={{ height: 45, borderWidth: 1, borderRadius: 15, fontWeight: '500', fontSize: 19, fontSize: 16, width: '30%', paddingLeft: 25 }}   ></TextInput>
                        <TextInput placeholder="" style={{ height: 45, borderWidth: 1, borderRadius: 15, fontWeight: '500', fontSize: 19, fontSize: 16, width: '30%', paddingLeft: 25 }}   ></TextInput>
                        <TextInput placeholder="" style={{ height: 45, borderWidth: 1, borderRadius: 15, fontWeight: '500', fontSize: 19, fontSize: 16, width: '30%', paddingLeft: 25 }}   ></TextInput>
                    </View>

                  </View>

              

                <CustomTouchableOpacity
                onPress={handlePress1}
                title="Register"
                colors={['#6A50B2', '#4F99DD']} start={{ x: 0.5, y: 1 }} end={{ x: 1, y: 0.5 }}
                style={{ height: 50, width: 306, borderRadius: 36, justifyContent: 'center', alignItems: 'center', margin: 10, left: 40}} // Gradient button style
                />
          </KeyboardAvoidingView >
        </ImageBackground>
    )
}

export default VarificiationCode

const styles = StyleSheet.create({
    input: {
        height: 45,
        flexDirection: 'row',
        borderRadius: 15,
        backgroundColor: 'white',
        borderWidth: 1,
        marginVertical: 10,

    },

    container: {
        alignItems: 'center',
        justifyContent: 'center',
        top:29,
      },
      rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
       justifyContent:'space-evenly'
      },
      box: {
        width: 20,
        height: 20,
       right:5,
        borderWidth:1,
      },
      text: {
        fontSize: 13,
        fontWeight: '500',
      },

    backgroundImage: {
        flex: 1,
        resizeMode: 'contain',
        width: Dimensions.get('window').width * 1.01,
        height: Dimensions.get('window').height * 1.24,
    },
});





