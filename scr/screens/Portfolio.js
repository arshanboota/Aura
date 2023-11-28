import { View, Text, Image, TextInput, TouchableOpacity, Button, StyleSheet, KeyboardAvoidingView, FlatList, ScrollView, ImageBackground, Dimensions } from 'react-native'
import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import Video from 'react-native-video';
import { useNavigation } from '@react-navigation/native';


const Portfolio = () => {
    const navigation = useNavigation();
    const windowWidth = Dimensions.get('window').width;
    const videoHeight = Dimensions.get('window').height;
    const videoData = [
        { id: '1', source: require('../assets/Video/vid.mp4') },
        { id: '2', source: require('../assets/Video/vid.mp4') },
        { id: '3', source: require('../assets/Video/vid.mp4') },
        { id: '4', source: require('../assets/Video/vid.mp4') },
        { id: '5', source: require('../assets/Video/vid.mp4') },
        { id: '6', source: require('../assets/Video/vid.mp4') },
    ];

    const renderItem = ({ item }) => (
        <View style={styles.videoContainer}>
            <Video
                source={item.source}
                repeat={false}
                paused={false}
                controls={false}
                resizeMode={'contain'}
                style={ { height:200,width:150, borderRadius:20,borderWidth:1,backgroundColor:'lightgray',borderColor:'white', marginLeft:20,marginBottom:5,marginHorizontal:10}}
            />
        </View>
    );
    const handlePress = () => {
        navigation.navigate('Profile')
    };
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.container}>
                <HeaderComponent onPress={handlePress} iconName="arrow-back" headerText="Portfolio" />
            </View>
            <FlatList
                    data={videoData}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    numColumns={2}
                    contentContainerStyle={styles.flatListContainer}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        margin: 10,
        borderBottomWidth: 2,
        borderBottomColor: 'lightgray',
    },
    flatListContainer: {       
        paddingHorizontal: 5,
    },
    videoContainer: {
        width:Dimensions.get('window').width * 0.4,
        marginRight: 15,
    },
    video: {
        width: '100%',
    },
});
export default Portfolio
