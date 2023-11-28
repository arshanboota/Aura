import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, ScrollView, ImageBackground, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { auth } from '../../components/Firebase'
import Icon from 'react-native-vector-icons/Ionicons';
import CustomTouchableOpacity from '../../components/CustomTouchableOpacity';
import styles from './Style';

const CreateAccount = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [color, setcolor] = useState('white');

    const handleSignUp = () => {
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log('Registered with:', user.email);
            })
            .catch(error => alert(error.message))
    }

    const handlePress = () => {
        setcolor('black')
    };

    const handlePress1 = () => {
        navigation.navigate('LoginScreen')
    };

    return (
        <KeyboardAvoidingView style={{ flex: 1 }}  >
            <ImageBackground
                source={require('../../assets/images/Account1.png')}
                style={styles.backgroundImage}>
                <View style={{ flex: 0.41, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                    <Image
                        style={{ height: 113, width: 110, borderRadius: 30, resizeMode: 'contain', left: 10 }}
                        source={require('../../assets/images/logo.png')} />
                    <Text style={{ fontSize: 25, color: 'white', fontWeight: '500', left: -10 }}> Create New{"\n"} Account </Text>
                </View>
                <View style={{ flex: 0.5, margin: 25 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <TextInput placeholder="James" style={{ height: 45, borderWidth: 1, borderRadius: 15, fontWeight: '500', fontSize: 19, fontSize: 16, width: '48%', paddingLeft: 25 }}   ></TextInput>
                        <TextInput placeholder="Water" style={{ height: 45, borderWidth: 1, borderRadius: 15, left: 15, fontWeight: '500', fontSize: 19, fontSize: 16, width: '48%', paddingLeft: 25 }}   ></TextInput>
                    </View>
                    <View style={{ marginTop:10 }}>
                        <View style={styles.input}>
                            <Icon name="mail-outline" color="gray" size={19} marginLeft={20} margin={10} />
                            <TextInput
                                style={{ fontSize: 19 }}
                                placeholder="Example@xyz.com"
                                value={email}
                                onChangeText={(text) => setEmail(text)}
                            />
                        </View>
                        <View style={styles.input}>
                            <Icon name="lock-closed-outline" color="gray" size={19} marginLeft={20} margin={10} />
                            <TextInput
                                style={{ fontSize: 19, fontWeight: '400' }}
                                placeholder="*******"
                                value={password}
                                onChangeText={(text) => setPassword(text)}
                            />
                        </View>

                        <View style={styles.input}>
                            <Icon name="lock-closed-outline" color="gray" size={19} marginLeft={20} margin={10} />
                            <TextInput
                                style={{ fontSize: 19, fontWeight: '400' }}
                                placeholder="*******"
                                value={password}
                                onChangeText={(text) => setPassword(text)}
                            />
                        </View>
                    </View>
                </View>

                <View style={styles.container}>
                    <View style={styles.rowContainer}>
                        <TouchableOpacity onPress={handlePress} style={[styles.box, { backgroundColor: color }]} />
                        <Text style={styles.text}>I agree to the Aura terms of use and Privacy Policy</Text>
                    </View>
                </View>

                <CustomTouchableOpacity
                    onPress={handlePress1}
                    title="Register"
                    colors={['#6A50B2', '#4F99DD']} start={{ x: 0.5, y: 1 }} end={{ x: 1, y: 0.5 }}
                    style={{ height: 50, width: 306, borderRadius: 36, justifyContent: 'center', alignItems: 'center', margin: 10, left: 20, }} // Gradient button style
                />

                <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center' ,marginTop:10}} onPress={() => navigation.navigate('LoginScreen')}>
                    <Text style={{ color: 'gray', alignItems: 'center' }}>Allready have an account  </Text>
                    <Text style={{ textDecorationLine: 'underline', color: 'gray', fontWeight: '700', textAlign: 'center' }}>Login</Text>
                </TouchableOpacity>

            </ImageBackground>
        </KeyboardAvoidingView >
    )
}

export default CreateAccount





