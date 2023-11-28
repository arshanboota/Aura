import { View, Text, Image, TextInput, TouchableOpacity ,StyleSheet, email, Alert,KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'


const sendCode = () => {
    if (email) {
        try {
            const confirmation =  auth().sendPasswordResetEmail(email);
            setConfirmation(confirmation);
            Alert.alert('Password reset email sent.');
        } catch (error) {
            Alert.alert('Error', error.message);
        }
    } else {
        Alert.alert('Please enter a valid email address.');
    }
};

const resendCode =  () => {
    if (email) {
        try {
            const confirmation =  auth().sendPasswordResetEmail(email);
            setConfirmation(confirmation);
            Alert.alert('Password reset email sent.');
            setEmail('');
        } catch (error) {
            Alert.alert('Error', error.message);
        }
    } else {
        Alert.alert('Please enter a valid email address.');
    }
};

const ForgetScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [confirmation, setConfirmation] = useState(null);

    return (
        <KeyboardAvoidingView  style={{ flex: 1 }}>

            <View style={{ flex: 0.5, flexDirection: 'row', backgroundColor: '#EAFF87', justifyContent: 'left', alignItems: 'center' }}>
                <Image
                    style={{ height: 133, width: 221, resizeMode: 'contain' }}
                    source={require('../assets/images/shadow.png')}
                />
                <Text style={{ fontSize: 30, fontWeight:'bold' }}> Forget {"\n"} Password </Text>
            </View>

            <View style={{ flex: 0.2, padding: 25 }}>
                <Text style={{ fontSize: 19, fontWeight: '400', color: 'black' }}>Enter your email we will send you a reset link</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={(newText) => setEmail(newText)}
                />
            </View>

            <View style={{ flex: 0.2, padding: 20 }}>
                <TouchableOpacity style={{ backgroundColor: '#EAFF87', height: 70, fontWeight: '800', fontSize: 20, borderRadius: 15, borderWidth: 2, paddingHorizontal: 20, marginVertical: 20,  borderRightWidth:6, borderBottomWidth:6,justifyContent: 'center', alignItems: 'center' }}
                    onPress={confirmation ? confirmCode : sendCode}>
                    <Text style={{ fontSize: 25, }} >Send</Text>
                </TouchableOpacity>

                {confirmation && (
                    <CustomButton title="Resend Code" onPress={resendCode} />
                )}
            </View>

        </KeyboardAvoidingView >
    )
}

export default ForgetScreen

const styles = StyleSheet.create({
    input: {
      height: 70,
      fontWeight: '500',
      flexDirection:'row',
      fontSize: 21,
      borderRadius: 12,
      backgroundColor: 'white',
      borderWidth: 2,
      paddingHorizontal: 20,
      marginVertical: 6,
      marginLeft: 4,
      borderRightWidth:6,
      borderBottomWidth:6,
  
    },
   
  });

// import React, { useState } from 'react';
// import { View, StyleSheet, Text, Alert, KeyboardAvoidingView } from 'react-native';
// import MainView from '../reuseable/mainView';
// import TextInputComponent from '../reuseable/CustomTextInput';
// import CustomButton from '../reuseable/CustomButton';
// import HeadingComp from '../reuseable/HeadingComp';
// import auth from '@react-native-firebase/auth';

// const ResetPassword = () => {
//     const [email, setEmail] = useState('');
//     const [confirmation, setConfirmation] = useState(null);

//     const sendCode = async () => {
//         if (email) {
//             try {
//                 const confirmation = await auth().sendPasswordResetEmail(email);
//                 setConfirmation(confirmation);
//                 Alert.alert('Password reset email sent.');
//             } catch (error) {
//                 Alert.alert('Error', error.message);
//             }
//         } else {
//             Alert.alert('Please enter a valid email address.');
//         }
//     };

//     const resendCode = async () => {
//         if (email) {
//             try {
//                 const confirmation = await auth().sendPasswordResetEmail(email);
//                 setConfirmation(confirmation);
//                 Alert.alert('Password reset email sent.');
//                 setEmail('');
//             } catch (error) {
//                 Alert.alert('Error', error.message);
//             }
//         } else {
//             Alert.alert('Please enter a valid email address.');
//         }
//     };


//     return (
//         <KeyboardAvoidingView style={styles.container}>
//             <MainView />
//             <HeadingComp text="Forget Password" size={30} style={styles.heading} />
//             <View style={styles.LoginContainer}>
//                 <Text style={styles.accountText}>Enter your email we will send you a reset link.</Text>
//                 <TextInputComponent
//                     iconName="mail"
//                     placeholder="Email"
//                     onChangeText={(newText) => setEmail(newText)}
//                     secureTextEntry={false}
//                 />
//                 <CustomButton
//                     title={confirmation ? 'Confirm' : 'Send'}
//                     onPress={confirmation ? confirmCode : sendCode}
//                 />
//                 {confirmation && (
//                     <CustomButton title="Resend Code" onPress={resendCode} />
//                 )}
//             </View>
//         </KeyboardAvoidingView>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     heading: {
//         color: 'black',
//         position: 'absolute',
//         top: 100,
//         right: 10,
//         width: '50%',
//     },
//     LoginContainer: {
//         alignItems: 'center',
//         justifyContent: 'center',
//         marginTop: 70,
//     },
//     accountText: {
//         color: '#000',
//         width: '90%',
//         marginBottom: 30,
//     },
// });

// export default ResetPassword;