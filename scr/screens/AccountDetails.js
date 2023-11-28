import { View, Text, Image, TextInput, TouchableOpacity, Button, StyleSheet, KeyboardAvoidingView, ScrollView, ImageBackground, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { auth } from '../components/Firebase'
import Icon from 'react-native-vector-icons/Ionicons';
import CustomTouchableOpacity from '../components/CustomTouchableOpacity';
import CustomTextInputIcon from '../components/Input/CustomTextInputIcon';
import TextInputDropdrownMenu from '../components/Input/TextInputDropdrownMenu';
import ImagePicker from 'react-native-image-picker';
import { launchImageLibrary } from 'react-native-image-picker';
const AccountDetails = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [color, setcolor] = useState('white');
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedOption, setSelectedOption] = useState('white');
    const [selectedOption1, setSelectedOption1] = useState('white');
    const [additionalItems, setAdditionalItems] = useState([]);
    const [additionalItems2, setAdditionalItems2] = useState([]);
    const [menuVisible, setMenuVisible] = useState(false);
    const [menuVisible2, setMenuVisible2] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const toggleMenu2 = () => {
        setMenuVisible2(!menuVisible2);
    };

    const addMoreItems = (platform, imageSource) => {
        const newItem = { platform: platform, image: imageSource, id: additionalItems.length + 1 };
        setAdditionalItems([...additionalItems, newItem]);
    };

    const handlePress2 = (option) => {
        setSelectedOption(option);
    };

    const handlePress3 = (option) => {
        setSelectedOption1(option);
    };

    const handleChooseImage = () => {
        const options = {
            title: 'Select Image',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                setSelectedImage(response.uri);
            }
        });
    };

    const handlePress = () => {
        setcolor('black')
    };

    const handlePress1 = () => {
        navigation.navigate('BottomTabNavigation')
    };
    return (
        <ImageBackground
            source={require('../assets/images/Account1.png')}
            style={styles.backgroundImage} >            
            <KeyboardAvoidingView style={{ flex: 1, }}>
                    <View style={styles.LogoContainer}>
                         <Image
                             style={{ height: 108, width: 100, borderRadius: 30, resizeMode: 'contain', left: 10 }}
                            source={require('../assets/images/logo.png')}
                       />
                       <Text style={{ fontSize: 35, color: 'white', fontWeight: '500',  }}>Account{"\n"}Details </Text>
                    </View>
                    <ScrollView style={{marginTop: 90}}>
                    <View style={{ flex: 0.5, margin: 10, }}>
                        <View style={styles.ImagePickerContainer}>
                            {selectedImage && (
                                <Image source={{ uri: selectedImage }} style={styles.Image} />
                            )}
                            <TouchableOpacity
                                onPress={handleChooseImage}
                            >
                                <Image style={{ height: 50, width: 50, resizeMode: 'contain' }}
                                    source={require('../assets/images/imagepicker.png')} />
                            </TouchableOpacity>
                        </View>
                        <View style={{  }}>
                            <View style={styles.mainContainer}>
                                <  TextInputDropdrownMenu
                                    iconName="briefcase-outline"
                                    placeholder="Category"
                                    onChangeText={(text) => setEmail(text)}
                                    value={email}
                                    onPress={toggleMenu}
                                />
                                 <View style={styles.mainContainer2}>
                                <  CustomTextInputIcon
                                    placeholder=" Add a bio"
                                />
                                </View>
                            </View>
                            {menuVisible && (
                                <View style={styles.menu}>
                                    <Text> Item 1</Text>
                                    <Text> Item 2</Text>
                                    <Text> Item 3</Text>
                                </View>
                            )}
                            <Text style={{ fontSize: 15, fontWeight: '500', left: 15 }}>Gender</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                <View style={{ flexDirection: 'row', left: 20, }}>
                                    <TouchableOpacity onPress={() => handlePress2('user')}>
                                        <View style={[styles.circle, { backgroundColor: selectedOption === 'user' ? 'black' : 'transparent' }]} />
                                    </TouchableOpacity>
                                    <Text style={{ fontSize: 15, fontWeight: '500' }}>Male</Text>
                                </View>

                                <View style={{ flexDirection: 'row', left: 20 }}>
                                    <TouchableOpacity onPress={() => handlePress2('admin')}>
                                        <View style={[styles.circle, { backgroundColor: selectedOption === 'admin' ? 'black' : 'transparent' }]} />
                                    </TouchableOpacity>
                                    <Text style={{ fontSize: 15, fontWeight: '500' }}>Femail</Text>
                                </View>
                            </View>
                            <View style={{ left: 4 }}>
                                <  CustomTextInputIcon
                                    iconName="location-outline"
                                    style={{ marginleft: 10 }}
                                    placeholder="Location"
                                />
                            </View>
                            <Text style={{ fontSize: 15, fontWeight: '600', marginHorizontal: 10, marginVertical: 10 }}>Other Platforms</Text>
                            <View style={{ justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row', left: 20, }}>
                                    <TouchableOpacity onPress={() => handlePress3('user')}>
                                        <View style={[styles.circle, { backgroundColor: selectedOption1 === 'user' ? 'black' : 'transparent' }]} />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => handlePress3('aadmin')}>
                                        <Image style={styles.circle}
                                            source={require('../assets/images/iconinsta.png')} />
                                    </TouchableOpacity>
                                    <Text style={{ fontSize: 15, fontWeight: '500' }}>Instagram</Text>
                                </View>
                                <View style={{ left: 3 }}>
                                    <  CustomTextInputIcon
                                        placeholder="Add URL" />
                                </View>
                                <View style={{ flexDirection: 'row', left: 20 }}>
                                    <TouchableOpacity onPress={() => handlePress3('admin')}>
                                        <View style={[styles.circle, { backgroundColor: selectedOption1 === 'admin' ? 'black' : 'transparent' }]} />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => handlePress3('aadmin')}>
                                        <Image style={styles.circle}
                                            source={require('../assets/images/iconyoutube.png')} />
                                    </TouchableOpacity>
                                    <Text style={{ fontSize: 15, fontWeight: '500' }}>Youtube</Text>
                                </View>
                                <View style={{ left: 3 }}>
                                    <  CustomTextInputIcon
                                        placeholder="Add URL"

                                    />
                                </View>
                                <View style={{ backgroundColor: 'white' }}>
                                    <View style={{ flexDirection: 'row', left: 20 }}>
                                        <TouchableOpacity onPress={() => handlePress3('aadmin')}>
                                            <View style={[styles.circle, { backgroundColor: selectedOption1 === 'aadmin' ? 'black' : 'transparent' }]} />
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => handlePress3('aadmin')}>
                                            <Image style={styles.circle}
                                                source={require('../assets/images/iconLinkedin.png')} />
                                        </TouchableOpacity>
                                        <Text style={{ fontSize: 15, fontWeight: '500' }}>Linked In</Text>
                                    </View>
                                    <View style={{  }}>
                                        <  CustomTextInputIcon
                                            placeholder="Add URL"
                                        />
                                    </View>
                                    {additionalItems.map((item) => (
                                        <View key={item.id} style={{ flexDirection: 'row', left: 20 }}>
                                            <TouchableOpacity onPress={() => handlePress3(item.platform)}>
                                                <View style={[styles.circle, { backgroundColor: selectedOption1 === item.platform ? 'black' : 'transparent' }]} />
                                            </TouchableOpacity>
                                            <Image style={styles.circle} source={item.image} />
                                            <Text style={{ fontSize: 15, fontWeight: '500' }}>{item.platform}</Text>
                                            <View style={{ right: '155%', width: '99%', height: '18%', marginTop: 15 }}>
                                                <CustomTextInputIcon placeholder="Add URL" />
                                            </View>
                                        </View>
                                    ))}
                                </View>
                            </View>
                        </View>
                        <View style={{ backgroundColor: 'white' }}>
                            <CustomTouchableOpacity
                                onPress={toggleMenu2}
                                title=" + Add more "
                                colors={['#6A50B2', '#4F99DD']} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }}
                                style={{ height: 50, width: 156, borderRadius: 6, justifyContent: 'center', alignItems: 'center', left: '9%', }} // Gradient button style
                            />
                            {menuVisible2 && (
                                <View style={styles.menu2}>
                                    <TouchableOpacity style={{ flexDirection: "row", marginVertical: 5 }} onPress={() => addMoreItems('Instagram', require('../assets/images/iconinsta.png'))}>
                                        <Image style={styles.circle}
                                            source={require('../assets/images/iconinsta.png')} />
                                        <Text>Instagram</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={{ flexDirection: "row", marginVertical: 5 }} onPress={() => addMoreItems('Youtube', require('../assets/images/iconyoutube.png'))}>
                                        <Image style={styles.circle}
                                            source={require('../assets/images/iconyoutube.png')} />
                                        <Text>Youtube</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={{ flexDirection: "row", marginVertical: 5 }} onPress={() => addMoreItems('Linked In', require('../assets/images/iconLinkedin.png'))}>
                                        <Image style={styles.circle}
                                            source={require('../assets/images/iconLinkedin.png')} />
                                        <Text>Linked In</Text>
                                    </TouchableOpacity>
                                </View>
                            )}
                            <CustomTouchableOpacity
                                onPress={handlePress1}
                                title="Continue"
                                colors={['#6A50B2', '#4F99DD']} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }}
                                style={{ height: 50, width: 306, borderRadius: 46, justifyContent: 'center', alignItems: 'center', left: '7%',marginBottom:100,marginVertical:20}} // Gradient button style
                            />
                        </View>
                    </View>
                    </ScrollView>
            </KeyboardAvoidingView>            
        </ImageBackground>
    )
}
export default AccountDetails

const styles = StyleSheet.create({
    input: {
        height: 45,
        flexDirection: 'row',
        borderRadius: 15,
        backgroundColor: 'white',
        borderWidth: 1,
        marginVertical: 10,
    },
    ImagePickerContainer: {
        left: '30%',
        alignItems: 'center',
        justifyContent: 'center',
        width: '35%',
        height: '14%',
        borderWidth: 0.1,
        borderRadius: 95,
        backgroundColor: '#F6F6F6',
       
    },
    mainContainer: {
        width: '102.2%',
        padding: 15,
        justifyContent: "center",
        alignItems: 'center',       
    },
    mainContainer2: {
        width: '110%',
        padding: 3,
        justifyContent: "center",
        alignItems: 'center',       
    },
    menu: {
        padding: 20,
        borderRadius: 5,
        backgroundColor: "gray",
        borderWidth: 1,
        height: '16%',
        width: '30%',      
    },
    menu2: {
        padding: 20,
        borderRadius: 5,
        backgroundColor: "lightgray",
        borderWidth: 1,
        height: '25%',
        width: '40%',
    },
    Image: {
        width: 90,
        height: 90,
        resizeMode: 'contain',
    },
    LogoContainer: {
        marginTop:30,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',       
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',     
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    box: {
        width: 20,
        height: 20,
        right: 5,
        borderWidth: 1,
    },
    text: {
        fontSize: 11,
        fontWeight: '400',
        left: '15%',
    },
    circle: {
        width: 20,
        height: 20,
        borderWidth: 1,
        marginRight: 10,
        borderRadius: 4,
    },
    backgroundImage: {
        flex: 1,  
        marginBottom:20     
    },
});







// import { View, Text, Image, TextInput, TouchableOpacity, Button, StyleSheet, KeyboardAvoidingView, ScrollView, ImageBackground, Dimensions } from 'react-native'
// import React, { useState } from 'react'
// import { useNavigation } from '@react-navigation/native';
// import { auth } from '../components/Firebase'
// import Icon from 'react-native-vector-icons/Ionicons';
// import CustomTouchableOpacity from '../components/CustomTouchableOpacity';
// import CustomTextInputIcon from '../components/Input/CustomTextInputIcon';
// import TextInputDropdrownMenu from '../components/Input/TextInputDropdrownMenu';
// import ImagePicker from 'react-native-image-picker';
// import { launchImageLibrary } from 'react-native-image-picker';
// const AccountDetails = () => {
//     const navigation = useNavigation();
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     const [color, setcolor] = useState('white');
//     const [selectedImage, setSelectedImage] = useState(null);
//     const [selectedOption, setSelectedOption] = useState('white');
//     const [selectedOption1, setSelectedOption1] = useState('white');
//     const [additionalItems, setAdditionalItems] = useState([]);
//     const [additionalItems2, setAdditionalItems2] = useState([]);
//     const [menuVisible, setMenuVisible] = useState(false);
//     const [menuVisible2, setMenuVisible2] = useState(false);

//     const toggleMenu = () => {
//         setMenuVisible(!menuVisible);
//     };

//     const toggleMenu2 = () => {
//         setMenuVisible2(!menuVisible2);
//     };
//     const addMoreItems = (platform, imageSource) => {
//         const newItem = { platform: platform, image: imageSource, id: additionalItems.length + 1 };
//         setAdditionalItems([...additionalItems, newItem]);
//     };


//     const handlePress2 = (option) => {
//         setSelectedOption(option);
//     };


//     const handlePress3 = (option) => {
//         setSelectedOption1(option);
//     };

//     const handleChooseImage = () => {
//         const options = {
//             title: 'Select Image',
//             storageOptions: {
//                 skipBackup: true,
//                 path: 'images',
//             },
//         };

//         launchImageLibrary(options, (response) => {
//             if (response.didCancel) {
//                 console.log('User cancelled image picker');
//             } else if (response.error) {
//                 console.log('ImagePicker Error: ', response.error);
//             } else if (response.customButton) {
//                 console.log('User tapped custom button: ', response.customButton);
//             } else {
//                 setSelectedImage(response.uri);
//             }
//         });
//     };



//     const handlePress = () => {
//         setcolor('black')
//     };

//     const handlePress1 = () => {
//         navigation.navigate('BottomTabNavigation')
//     };

//     return (
//         <ScrollView>
//             <ImageBackground
//                 source={require('../assets/images/Account1.png')}
//                 style={styles.backgroundImage} >
//                 <KeyboardAvoidingView style={{ flex: 1 }}>
//                     <View style={styles.Containerr}>
//                         <Image
//                             style={{ height: 108, width: 100, borderRadius: 30, resizeMode: 'contain', left: 10 }}
//                             source={require('../assets/images/logo.png')}
//                         />
//                         <Text style={{ fontSize: 35, color: 'white', fontWeight: '500', left: -5, top: '-1%' }}> Account{"\n"} Details </Text>
//                     </View>

                    // <View style={{ flex: 0.5, margin: 10, }}>
                    //     <View style={styles.Container}>
                    //         {selectedImage && (
                    //             <Image source={{ uri: selectedImage }} style={styles.Image} />
                    //         )}
                    //         <TouchableOpacity
                    //             onPress={handleChooseImage}
                    //         >
                    //             <Image style={{ height: 50, width: 50, resizeMode: 'contain' }}
                    //                 source={require('../assets/images/imagepicker.png')} />
                    //         </TouchableOpacity>
                    //     </View>

                    //     <View style={{ marginVertical: '7%', }}>
                    //         <View style={{ right: 5 }}>
                    //             <  TextInputDropdrownMenu
                    //                 iconName="briefcase-outline"
                    //                 style={{}}
                    //                 placeholder="Category"
                    //                 onChangeText={(text) => setEmail(text)}
                    //                 value={email}
                    //                 onPress={toggleMenu}
                    //             />
                    //             <  CustomTextInputIcon
                    //                 placeholder=" Add a bio"
                    //             />
                    //         </View>
                    //         {menuVisible && (
                    //             <View style={styles.menu}>
                    //                 <Text> Item 1</Text>
                    //                 <Text> Item 2</Text>
                    //                 <Text> Item 3</Text>
                    //             </View>
                    //         )}
                    //         <Text style={{ fontSize: 15, fontWeight: '500', left: 15 }}>Gender</Text>
                    //         <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    //             <View style={{ flexDirection: 'row', left: 20, }}>
                    //                 <TouchableOpacity onPress={() => handlePress2('user')}>
                    //                     <View style={[styles.circle, { backgroundColor: selectedOption === 'user' ? 'black' : 'transparent' }]} />
                    //                 </TouchableOpacity>
                    //                 <Text style={{ fontSize: 15, fontWeight: '500' }}>Male</Text>
                    //             </View>

                    //             <View style={{ flexDirection: 'row', left: 20 }}>
                    //                 <TouchableOpacity onPress={() => handlePress2('admin')}>
                    //                     <View style={[styles.circle, { backgroundColor: selectedOption === 'admin' ? 'black' : 'transparent' }]} />
                    //                 </TouchableOpacity>
                    //                 <Text style={{ fontSize: 15, fontWeight: '500' }}>Femail</Text>
                    //             </View>
                    //         </View>
                    //         <View style={{ left: 4 }}>
                    //             <  CustomTextInputIcon
                    //                 iconName="location-outline"
                    //                 style={{ marginleft: 10 }}
                    //                 placeholder="Location"
                    //             />
                    //         </View>
                    //         <Text style={{ fontSize: 15, fontWeight: '600', marginHorizontal: 10, marginVertical: 10 }}>Other Platforms</Text>
                    //         <View style={{ justifyContent: 'space-between' }}>
                    //             <View style={{ flexDirection: 'row', left: 20, }}>
                    //                 <TouchableOpacity onPress={() => handlePress3('user')}>
                    //                     <View style={[styles.circle, { backgroundColor: selectedOption1 === 'user' ? 'black' : 'transparent' }]} />
                    //                 </TouchableOpacity>
                    //                 <TouchableOpacity onPress={() => handlePress3('aadmin')}>
                    //                     <Image style={styles.circle}
                    //                         source={require('../assets/images/iconinsta.png')} />
                    //                 </TouchableOpacity>
                    //                 <Text style={{ fontSize: 15, fontWeight: '500' }}>Instagram</Text>
                    //             </View>
                    //             <View style={{ left: 3 }}>
                    //                 <  CustomTextInputIcon
                    //                     placeholder="Add URL" />
                    //             </View>
                    //             <View style={{ flexDirection: 'row', left: 20 }}>
                    //                 <TouchableOpacity onPress={() => handlePress3('admin')}>
                    //                     <View style={[styles.circle, { backgroundColor: selectedOption1 === 'admin' ? 'black' : 'transparent' }]} />
                    //                 </TouchableOpacity>
                    //                 <TouchableOpacity onPress={() => handlePress3('aadmin')}>
                    //                     <Image style={styles.circle}
                    //                         source={require('../assets/images/iconyoutube.png')} />
                    //                 </TouchableOpacity>
                    //                 <Text style={{ fontSize: 15, fontWeight: '500' }}>Youtube</Text>
                    //             </View>

                    //             <View style={{ left: 3 }}>
                    //                 <  CustomTextInputIcon
                    //                     placeholder="Add URL"

                    //                 />
                    //             </View>
                    //             <View style={{ backgroundColor: 'white' }}>
                    //                 <View style={{ flexDirection: 'row', left: 20 }}>
                    //                     <TouchableOpacity onPress={() => handlePress3('aadmin')}>
                    //                         <View style={[styles.circle, { backgroundColor: selectedOption1 === 'aadmin' ? 'black' : 'transparent' }]} />
                    //                     </TouchableOpacity>
                    //                     <TouchableOpacity onPress={() => handlePress3('aadmin')}>
                    //                         <Image style={styles.circle}
                    //                             source={require('../assets/images/iconLinkedin.png')} />
                    //                     </TouchableOpacity>
                    //                     <Text style={{ fontSize: 15, fontWeight: '500' }}>Linked In</Text>
                    //                 </View>
                    //                 <View style={{ left: 3 }}>
                    //                     <  CustomTextInputIcon
                    //                         placeholder="Add URL"
                    //                     />
                    //                 </View>
                    //                 {additionalItems.map((item) => (
                    //                     <View key={item.id} style={{ flexDirection: 'row', left: 20 }}>
                    //                         <TouchableOpacity onPress={() => handlePress3(item.platform)}>
                    //                             <View style={[styles.circle, { backgroundColor: selectedOption1 === item.platform ? 'black' : 'transparent' }]} />
                    //                         </TouchableOpacity>
                    //                         <Image style={styles.circle} source={item.image} />
                    //                         <Text style={{ fontSize: 15, fontWeight: '500' }}>{item.platform}</Text>
                    //                         <View style={{ right: '155%', width: '99%', height: '18%', marginTop: 15 }}>
                    //                             <CustomTextInputIcon placeholder="Add URL" />
                    //                         </View>
                    //                     </View>
                    //                 ))}
                    //             </View>
                    //         </View>
                    //     </View>
                    //     <View style={{ backgroundColor: 'white' }}>
                    //         <CustomTouchableOpacity
                    //             onPress={toggleMenu2}
                    //             title=" + Add more "
                    //             colors={['#6A50B2', '#4F99DD']} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }}
                    //             style={{ height: 50, width: 156, borderRadius: 6, justifyContent: 'center', alignItems: 'center', left: '9%', }} // Gradient button style
                    //         />

                    //         {menuVisible2 && (
                    //             <View style={styles.menu2}>

                    //                 <TouchableOpacity style={{ flexDirection: "row", marginVertical: 4 }} onPress={() => addMoreItems('Instagram', require('../assets/images/iconinsta.png'))}>
                    //                     <Image style={styles.circle}
                    //                         source={require('../assets/images/iconinsta.png')} />
                    //                     <Text>Instagram</Text>
                    //                 </TouchableOpacity>

                    //                 <TouchableOpacity style={{ flexDirection: "row", marginVertical: 4 }} onPress={() => addMoreItems('Youtube', require('../assets/images/iconyoutube.png'))}>
                    //                     <Image style={styles.circle}
                    //                         source={require('../assets/images/iconyoutube.png')} />
                    //                     <Text>Youtube</Text>
                    //                 </TouchableOpacity>

                    //                 <TouchableOpacity style={{ flexDirection: "row", marginVertical: 4 }} onPress={() => addMoreItems('Linked In', require('../assets/images/iconLinkedin.png'))}>
                    //                     <Image style={styles.circle}
                    //                         source={require('../assets/images/iconLinkedin.png')} />
                    //                     <Text>Linked In</Text>
                    //                 </TouchableOpacity>
                    //             </View>
                    //         )}
                    //         <CustomTouchableOpacity
                    //             onPress={handlePress1}
                    //             title="Continue"
                    //             colors={['#6A50B2', '#4F99DD']} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }}
                    //             style={{ height: 50, width: 306, borderRadius: 46, justifyContent: 'center', alignItems: 'center', left: '7%', marginTop: 25 }} // Gradient button style
                    //         />
                    //     </View>
                    // </View>
//                 </KeyboardAvoidingView >
//             </ImageBackground>
//         </ScrollView>
//     )
// }
// export default AccountDetails

// const styles = StyleSheet.create({
//     input: {
//         height: 45,
//         flexDirection: 'row',
//         borderRadius: 15,
//         backgroundColor: 'white',
//         borderWidth: 1,
//         marginVertical: 10,

//     },
//     Container: {
//         left: '30%',
//         alignItems: 'center',
//         justifyContent: 'center',
//         width: '35%',
//         height: '26%',
//         borderWidth: 0.1,
//         borderRadius: 95,
//         backgroundColor: '#F6F6F6',
//         marginTop: '-45%',
//         marginBottom: '-8%',
//     },
//     menu: {
//         padding: 20,
//         borderRadius: 5,
//         backgroundColor: "gray",
//         borderWidth: 1,
//         height: '16%',
//         width: '30%',
//         left: '70%',
//         top: '-13%'
//     },
//     menu2: {
//         padding: 20,
//         borderRadius: 5,
//         backgroundColor: "lightgray",
//         borderWidth: 1,
//         height: '40%',
//         width: '40%',
//         left: '61%',
//         top: '-13%'
//     },
//     Image: {
//         width: 85,
//         height: 85,
//         resizeMode: 'contain',
//     },
//     Containerr: {
//         flex: 0.5,
//         flexDirection: 'row',
//         justifyContent: 'space-evenly',
//         alignItems: 'center',
//         top: '-30%',
//     },
//     container: {
//         alignItems: 'center',
//         justifyContent: 'center',
//         top: '-3%',
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
//         fontSize: 11,
//         fontWeight: '400',
//         left: '15%',
//     },
//     circle: {
//         width: 20,
//         height: 20,
//         borderWidth: 1,
//         marginRight: 10,
//         borderRadius: 4,
//     },
//     backgroundImage: {
//         flex: 1,
//         resizeMode: 'contain',
//         width: Dimensions.get('window').width,
//         height: Dimensions.get('window').height * 1.24,
//         marginBottom: 300,
//     },
// });





