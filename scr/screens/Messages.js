import { View, Text, Image, TextInput, TouchableOpacity, Button, StyleSheet, KeyboardAvoidingView, FlatList, ScrollView, ImageBackground, Dimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import HeaderComponent from '../components/HeaderComponent';
import CustomTextInputIcon from '../components/Input/CustomTextInputIcon';
import Icon from 'react-native-vector-icons/Ionicons';

const Messages = () => {
    const navigation = useNavigation();
    const [search, setSearch] = useState('')
    const [filteredData, setFilteredData] = useState([]);
    const [data, setData] = useState([
        { id: '1', text: 'Hazal Finch', text2: 'Send 24 hours ago', image: require('../assets/images/user1.png') },
        { id: '2', text: 'Arsha ', text2: 'Send 24 hours ago', image: require('../assets/images/user1.png') },
        { id: '3', text: 'Natasha ', text2: 'Send 24 hours ago', image: require('../assets/images/user1.png') },
        { id: '4', text: 'Samra ', text2: 'Send 24 hours ago', image: require('../assets/images/user1.png') },
        { id: '5', text: 'Hazal Finch', text2: 'Send 24 hours ago', image: require('../assets/images/user1.png') },
        { id: '6', text: 'Hazal Finch', text2: 'Send 24 hours ago', image: require('../assets/images/user1.png') },
        { id: '7', text: 'Hazal Finch', text2: 'Send 24 hours ago', image: require('../assets/images/user1.png') },
    ]);

    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('ChatScreen', { text: item.text })}>
                    <Image source={item.image} style={styles.image} />
                </TouchableOpacity>
            </View>
            <View>
                <Text style={{ fontWeight: '700', marginVertical: 5 }}>{item.text}</Text>
                <Text style={{ fontSize: item.fontSize }}>{item.text2}</Text>
            </View>
        </View>
    );

    const handlePress = () => {
        navigation.navigate('Home')
    };

    const handleSearch = (input) => {
        setSearch(input);
        const filteredData = data.filter((item) =>
            item.text.toLowerCase().includes(input.toLowerCase()));
        setFilteredData(filteredData);
    };

    return (
        <View>
            <HeaderComponent onPress={handlePress} iconName="arrow-back" headerText="Edit Profile" />
            <View style={{ flexDirection: 'row', alignItems: 'center' ,justifyContent:'space-between'}}>
                <View style={{  width: '97%' }}>
                    <  CustomTextInputIcon
                        placeholder="Search"
                        value={search}
                        onChangeText={handleSearch}
                        style={{ fontWeight: '300' }}
                    />
                </View >
                <View style={{borderRadius:10,backgroundColor:'#6A50B2'}}>
                    <Icon name='search' size={30}  color='white'  />
                </View>
            </View>
            <FlatList
                data={filteredData.length > 0 ? filteredData : data}
                renderItem={renderItem}
                keyExtractor={(item, index) => item.id.toString()}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemContainer: {
        flex: 0.3,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        marginVertical: 10,
        marginLeft: 18,
        borderRadius: 30,
        backgroundColor: 'lightgray',
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get('window').width * 0.26,
    },
    image: {
        width: Dimensions.get('window').width * 0.17,
        height: Dimensions.get('window').width * 0.17,
        marginRight: 10,
        marginLeft: 10
    },
});


export default Messages
