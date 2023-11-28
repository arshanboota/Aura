import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, ImageBackground, secureTextEntry, textDecorationLine, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { auth } from '../components/Firebase'
import Icon from 'react-native-vector-icons/Ionicons';
import CustomTouchableOpacity from '../components/CustomTouchableOpacity';
import SmallRoundImage from '../components/SmallRoundImage';

const LoginScreen = ({ navigation }) => {
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')

    // const handleLogin = () => {
    //     auth
    //         .signInWithEmailAndPassword(email, password)
    //         .then(userCredentials => {
    //             const user = userCredentials.user;
    //             console.log('Logged in with:', user.email);
    //             navigation.navigate('AccountDetails');
    //         })
    //         .catch(error => alert(error.message))
    // }
    const handlePress = () => {
                navigation.navigate('AccountDetails')
            }

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground
                source={require('../assets/images/Account1.png')}
                style={styles.backgroundImage}
            >
                <View style={styles.logoContainer}>
                    <Image
                        style={{ height: 110, width: 108, borderRadius: 30, resizeMode: 'contain' }}
                        source={require('../assets/images/logo.png')} />
                    <Text style={{ fontSize: 35, color: 'white', fontWeight: '500' }}>Log In</Text>
                </View>
                <View style={styles.mainContainer}>
                    <View style={styles.inputContainer}>
                        <View style={styles.inputIcon}>
                            <Icon name='mail-outline' size={21} color="#767676" />
                        </View>
                        <View style={styles.inputField}>
                            <TextInput
                                style={styles.input}
                                placeholder="Enter Email"
                            // onChangeText={(text) => setEmail(text)}
                            // value={email}
                            />
                        </View>
                    </View>

                    <View style={styles.inputContainer}>
                        <View style={styles.inputIcon}>
                            <Icon name='lock-closed-outline' size={21} color="#767676" />
                        </View>
                        <View style={styles.inputField}>
                            <TextInput
                                style={styles.input}
                                placeholder="password"
                                //    value={password}
                                // onChangeText={(text) => setPassword(text)}
                                secureTextEntry={secureTextEntry} />
                        </View>
                    </View>
                </View>

                <TouchableOpacity onPress={navigation.navigate('CreateAccount')} style={styles.button}>
                    <Text style={{ fontSize: 14, fontWeight: '400' }}> Forget Password?</Text>
                </TouchableOpacity>
                <CustomTouchableOpacity
                    onPress={handlePress}
                    title="Login"
                    colors={['#6A50B2', '#4F99DD']} start={{ x: 0.5, y: 1 }} end={{ x: 1, y: 0.5 }}
                    style={{ height: 50, width: 306, borderRadius: 36, justifyContent: 'center', alignItems: 'center', margin: 25 }} // Gradient button style
                />

                <View style={{ flexDirection: 'row', left: '5%', top: '6%' }}>
                    <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, width: '25%', marginVertical: 10 }} />
                    <Text style={{ textAlign: 'center', }}> Or continue with </Text>
                    <View style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 1,
                        width: '25%',
                        marginVertical: 10,
                    }} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between',marginTop:40 }}>
                    <View style={styles.icon_images_container}>
                        <SmallRoundImage
                            source={require('../assets/images/ff.png')}
                            style={styles.icon_images}
                        />
                        <SmallRoundImage
                            source={require('../assets/images/g.png')}
                            style={styles.icon_images}
                        />
                        <SmallRoundImage
                            source={require('../assets/images/apple.png')}
                            style={styles.icon_images}
                        />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center',marginTop:10 }}>
                        <Text style={{ color: 'gray', fontWeight: '500', textAlign: 'center' }}>Don't have an account? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('RegisterAs')}>
                            <Text style={{ textDecorationLine: 'underline', color: 'gray', fontWeight: '700', textAlign: 'center' }}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
            </ImageBackground>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1
    },
    logoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 40,
        padding: 10
    },
    mainContainer: {
        width: '100%',
        padding: 15,
        justifyContent: "center",
        alignItems: 'center',
        marginTop: '14%'
    },
    inputContainer: {
        width: '90%',
        borderRadius: 15,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderWidth: 1,
        marginTop: '12%'
    },
    inputIcon: {
        margin: 10,
        justifyContent: "center",
    },
    inputField: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        flex: 1,
        color: '#000',
        fontSize: 15,
    },
    button: {
        alignItems: 'flex-end',
        marginRight: '12%'
    },
    icon_images_container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        flexDirection: 'row'
    },
    icon_images: {
        margin: 10
    }
})


// import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, ImageBackground, secureTextEntry, textDecorationLine, Dimensions } from 'react-native'
// import React, { useState } from 'react'
// import { useNavigation } from '@react-navigation/native';
// import { auth } from '../components/Firebase'
// import Icon from 'react-native-vector-icons/Ionicons';
// import CustomTouchableOpacity from '../components/CustomTouchableOpacity';
// import SmallRoundImage from '../components/SmallRoundImage';

// const LoginScreen = ({ navigation }) => {
// const [email, setEmail] = useState('')
// const [password, setPassword] = useState('')

// const handleLogin = () => {
//     auth
//         .signInWithEmailAndPassword(email, password)
//         .then(userCredentials => {
//             const user = userCredentials.user;
//             console.log('Logged in with:', user.email);
//             navigation.navigate('AccountDetails');
//         })
//         .catch(error => alert(error.message))
// }

//     const handleFirstPress = () => {
//         navigation.navigate('')
//     }

//     return (
//         <KeyboardAvoidingView style={{ flex: 1 }}>
//             <ImageBackground
//                 source={require('../assets/images/Account1.png')}
//                 style={styles.backgroundImage}
//             >
// <View style={{ flex: 0.47, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', }}>
//     <Image
//         style={{ height: 110, width: 108, borderRadius: 30, resizeMode: 'contain', left: 20 }}
//         source={require('../assets/images/logo.png')}
//     />
//     <Text style={{ fontSize: 35, color: 'white', fontWeight: '500' }}>Log In</Text>
// </View>

//   
//                     </View>
//                     <TextInput />

// <TouchableOpacity onPress={navigation.navigate('CreateAccount')}>
//     <Text style={{ fontSize: 14, fontWeight: '400', left: '60%', top: '-50%' }}> Forget Password?</Text>
// </TouchableOpacity>
//                 </View>
// <CustomTouchableOpacity
//     // onPress={handleLogin}
//     title="Login"
//     colors={['#6A50B2', '#4F99DD']} start={{ x: 0.5, y: 1 }} end={{ x: 1, y: 0.5 }}
//     style={{ height: 50, width: 306, borderRadius: 36, justifyContent: 'center', alignItems: 'center', margin: 10, left: 30, top: '25%' }} // Gradient button style
// />
// <View style={{ flexDirection: 'row', left: '5%', top: '6%' }}>
//     <View
//         style={{
//             borderBottomColor: 'black',
//             borderBottomWidth: 1,
//             width: '25%',
//             marginVertical: 10,
//         }}
//     />
//     <Text style={{ textAlign: 'center', }}> Or continue with </Text>
//     <View
//         style={{
//             borderBottomColor: 'black',
//             borderBottomWidth: 1,
//             width: '25%',
//             marginVertical: 10,
//         }}
//     />
// </View>
//                 <View style={{ flexDirection: 'row', justifyContent: 'space-between', bottom: -40 }}>
{/* <View style={styles.icon_images_container}>
    <SmallRoundImage
        onPress={handleFirstPress}
        source={require('../assets/images/ff.png')}
        style={styles.icon_images}
    />
    <SmallRoundImage
        onPress={handleFirstPress}
        source={require('../assets/images/g.png')}
        style={styles.icon_images}
    />
    <SmallRoundImage
        onPress={handleFirstPress}
        source={require('../assets/images/apple.png')}
        style={styles.icon_images}
    />
</View>
                    </View> */}
                    // <View style={{ flexDirection: 'row', justifyContent: 'center', bottom: -65 }}>
                    //     <Text style={{ color: 'gray', fontWeight: '500', textAlign: 'center' }}>Don't have an account?</Text>
                    //     <TouchableOpacity onPress={() => navigation.navigate('RegisterAs')}>
                    //         <Text style={{ textDecorationLine: 'underline', color: 'gray', fontWeight: '700', textAlign: 'center' }}>Sign Up</Text>
                    //     </TouchableOpacity>
                    // </View>
//             </ImageBackground >
//         </KeyboardAvoidingView >
//     )
// }
// export default LoginScreen

// const styles = StyleSheet.create({
// input: {
//     top: 35,
//     height: 45,
//     width: '90%',
//     left: '10%',
//     flexDirection: 'row',
//     borderRadius: 20,
//     backgroundColor: 'white',
//     borderWidth: 1,
//     marginVertical: 13,
// },
// container: {

//     alignItems: 'center',
//     justifyContent: 'center',
//     top: 29,
// },
// rowContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-evenly'
// },
// box: {
//     width: 20,
//     height: 20,
//     right: 5,
//     borderWidth: 1,
// },
// text: {
//     fontSize: 13,
//     fontWeight: '500',
// },
// backgroundImage: {
//     // flex: 1,
//     // resizeMode: 'contain',
//     // width: Dimensions.get('window').width * 1.01,
//     // height: Dimensions.get('window').height * 1.24,

// },
// inputContainer: {
//     margin: 15,
//     height: 45,
//     width: '85%',
//     flexDirection: 'row',
//     borderRadius: 15,
//     left: '13%',
//     flexDirection: 'row',
//     backgroundColor: 'white',
//     borderWidth: 1,
//     marginVertical: 13,

// },
// inputIcon: {
//     marginLeft: 10,
//     justifyContent: "center",
//     marginRight: 10
// },
// inputField: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
// },
// input: {
//     flex: 1,
//     color: '#000',
//     fontSize: 13,
//     fontWeight: '400',
// },
// icon_images_container:{
//     alignItems:'center',
//     justifyContent:'center',
//     width:'100%',
//     flexDirection:'row'
// },
// icon_images:{
//     margin:10
// }
// });







// import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, ImageBackground, secureTextEntry, textDecorationLine, Dimensions } from 'react-native'
// import React, { useState } from 'react'
// import { useNavigation } from '@react-navigation/native';
// import { auth } from '../components/Firebase'
// import Icon from 'react-native-vector-icons/Ionicons';
// import CustomTouchableOpacity from '../components/CustomTouchableOpacity';
// import SmallRoundImage from '../components/SmallRoundImage';

// const LoginScreen = ({ navigation }) => {

//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')

//     const handleLogin = () => {
//         auth
//             .signInWithEmailAndPassword(email, password)
//             .then(userCredentials => {
//                 const user = userCredentials.user;
//                 console.log('Logged in with:', user.email);
//                 navigation.navigate('AccountDetails');
//             })
//             .catch(error => alert(error.message))
//     }


//     const handleFirstPress = () => {
//         navigation.navigate('')
//     }

//     const handleFPress = () => {
//         navigation.navigate('AccountDetails')
//     }
//     return (
//         <KeyboardAvoidingView style={{ flex: 1 }}>
//             <ImageBackground
//                 source={require('../assets/images/Account1.png')}
//                 style={styles.backgroundImage}
//             >
//                 <View style={{ flex: 0.47, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', }}>
//                     <Image
//                         style={{ height: 110, width: 108, borderRadius: 30, resizeMode: 'contain', left: 20 }}
//                         source={require('../assets/images/logo.png')}
//                     />
//                     <Text style={{ fontSize: 35, color: 'white', fontWeight: '500' }}>Log In</Text>
//                 </View>

// <View style={{ flex: 0.3, top: 30 }}>

//     <View style={styles.inputContainer}>
//         <View style={styles.inputIcon}>
//             <Icon name='mail-outline' size={21} color="#767676" />
//         </View>
//         <View style={styles.inputField}>
//             <TextInput
//                 style={styles.input}
//                 placeholder="Enter Email"
//             //  onChangeText={(text) => setEmail(text)}
//             // value={email}
//             />
//         </View>
//     </View>
//     <View style={styles.inputContainer}>
//         <View style={styles.inputIcon}>
//             <Icon name='lock-closed-outline' size={21} color="#767676" />
//         </View>
//         <View style={styles.inputField}>
//             <TextInput
//                 style={styles.input}
//                 placeholder="password"
//                 // value={password}
//                 //  onChangeText={(text) => setPassword(text)}
//                 secureTextEntry={secureTextEntry}

//             />
//         </View>
//     </View>
//                     {/*
//                     <  CustomTextInputIcon
//                         iconName="mail-outline"
//                         placeholder="Enter Email"
//                         onChangeText={(text) => setEmail(text)}
//                         value={email}
//                         style={{width:70}}
//                     />

//                     <  CustomTextInputIcon
//                        iconName ='lock-closed-outline'
//                         placeholder="password"
//                         value={password}
//                         onChangeText={(text) => setPassword(text)}
//                     /> */}
//                     <TextInput />

//                     <TouchableOpacity onPress={navigation.navigate('CreateAccount')}>
//                         <Text style={{ fontSize: 14, fontWeight: '400', left: '60%', top: '-50%' }}> Forget Password?</Text>
//                     </TouchableOpacity>
//                 </View>
//                 <CustomTouchableOpacity
//                     onPress={handleFPress}
//                     title="Login"
//                     colors={['#6A50B2', '#4F99DD']} start={{ x: 0.5, y: 1 }} end={{ x: 1, y: 0.5 }}
//                     style={{ height: 50, width: 306, borderRadius: 36, justifyContent: 'center', alignItems: 'center', margin: 10, left: 30, top: '25%' }} // Gradient button style
//                 />
//                 <View style={{ flexDirection: 'row', left: '5%', top: '6%' }}>
//                     <View
//                         style={{
//                             borderBottomColor: 'black',
//                             borderBottomWidth: 1,
//                             width: '25%',
//                             marginVertical: 10,
//                         }}
//                     />
//                     <Text style={{ textAlign: 'center', }}> Or continue with </Text>
//                     <View
//                         style={{
//                             borderBottomColor: 'black',
//                             borderBottomWidth: 1,
//                             width: '25%',
//                             marginVertical: 10,
//                         }}
//                     />
//                 </View>
//                 <View style={{ flexDirection: 'row', justifyContent: 'space-between', bottom: -40 }}>
//                     <SmallRoundImage
//                         onPress={handleFirstPress}
//                         source={require('../assets/images/ff.png')}
//                         style={{ left: '200%' }}
//                     />
//                     <SmallRoundImage
//                         onPress={handleFirstPress}
//                         source={require('../assets/images/g.png')}
//                     />
//                     <SmallRoundImage
//                         onPress={handleFirstPress}
//                         source={require('../assets/images/apple.png')}
//                         style={{ right: '200%' }}
//                     />
//                 </View>
//                 <View style={{ flexDirection: 'row', justifyContent: 'center', bottom: -65 }}>
//                     <Text style={{ color: 'gray', fontWeight: '500', textAlign: 'center' }}>Don't have an account?</Text>
//                     <TouchableOpacity onPress={() => navigation.navigate('RegisterAs')}>
//                         <Text style={{ textDecorationLine: 'underline', color: 'gray', fontWeight: '700', textAlign: 'center' }}>Sign Up</Text>
//                     </TouchableOpacity>
//                 </View>
//             </ImageBackground >
//         </KeyboardAvoidingView >
//     )
// }
// export default LoginScreen

// const styles = StyleSheet.create({
//     input: {
//         top: 35,
//         height: 45,
//         width: '90%',
//         left: '10%',
//         flexDirection: 'row',
//         borderRadius: 20,
//         backgroundColor: 'white',
//         borderWidth: 1,
//         marginVertical: 13,
//     },
//     container: {
//         alignItems: 'center',
//         justifyContent: 'center',
//         top: 29,
//     },
//     rowContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'space-evenly'
//     },
//     box: {
//         width: 20,
//         height: 20,
//         right: 5,
//         borderWidth: 1,
//     },
//     text: {
//         fontSize: 13,
//         fontWeight: '500',
//     },
//     backgroundImage: {
//         flex: 1,
//         resizeMode: 'contain',
//         width: Dimensions.get('window').width * 1.01,
//         height: Dimensions.get('window').height * 1.24,
//     },
//     inputContainer: {
//         margin: 15,
//         height: 45,
//         width: '85%',
//         flexDirection: 'row',
//         borderRadius: 15,
//         left: '13%',
//         flexDirection: 'row',
//         backgroundColor: 'white',
//         borderWidth: 1,
//         marginVertical: 13,

//     },
//     inputIcon: {
//         marginLeft: 10,
//         justifyContent: "center",
//         marginRight: 10
//     },
//     inputField: {
//         flex: 1,
//         flexDirection: 'row',
//         alignItems: 'center',
//     },
//     input: {
//         flex: 1,
//         color: '#000',
//         fontSize: 13,
//         fontWeight: '400',
//     },
// });





