import { View, Text, Image, TextInput, TouchableOpacity, Button, StyleSheet, KeyboardAvoidingView, FlatList, ScrollView, ImageBackground, Dimensions } from 'react-native'
import Header from '../components/Header'
import CustomComponent from '../components/CustomComponent'
import LikesboxComponent from '../components/LikesboxComponent'
import CustomCircle from '../components/CustomCircle'
import { BarChart } from 'react-native-chart-kit';
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


const Home = () => {
    const navigation = useNavigation();
    const data = [
        { key: '1', text: 'Withdrawal Availability' },
        { key: '2', text: 'Monthaly Earnings' },
        { key: '3', text: '$0' },
        { key: '4', text: '    $0' },
        { key: '5', text: 'Avg. Selling Price' },
        { key: '6', text: 'Active Orders' },
        { key: '7', text: '  $0' },
        { key: '8', text: '     $0($0)' },
           ];

    const data1 = {
        labels: ['1 Weak', '2 Weak', '3 Weak', '4 Weak'],
        datasets: [
            {
                data: [35, 20, 50, 30, 29, 33],
                
            },            
        ],
    };
    const renderItem = ({ item }) => (  
        <View >
            <View style={styles.column}>
                <Text style={{ fontWeight: '300' }}>{item.text}</Text>
            </View>

        </View>
    );

    return (
        <ScrollView style={{ flex: 1, margin: 10, marginBottom: 70 }}>
            <View style={{ flex: 1, justifyContent: 'center', margin: 10,borderBottomWidth:2,borderBottomColor:'lightgray' }}>
                <Header
                    firstImagePath={require('../assets/images/Group.png')}
                    secondImagePath={require('../assets/images/notification.png')}
                />

            </View>
            <View style={styles.Container}>
                <View style={{ flexDirection: 'row' }}>
                    <View>
                        <Image
                            style={{ height: 113, width: 110, borderRadius: 30, resizeMode: 'contain' }}
                            source={require('../assets/images/user.png')}
                        />
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontSize: 15, fontWeight: '500', }}>Hazal Finch</Text>
                        <Text style={{ fontSize: 12, fontWeight: '300' }}>Flood Blogar </Text>
                        <Text style={{ fontSize: 12, fontWeight: '300', }}>San Franciso,LA United states</Text>
                        <Text style={{ fontSize: 14, fontWeight: '500', }}>Lorem Ipsumm is simply dummy{'\n'}text of printing</Text>
                    </View>
                    <View>
                    <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
                    <Icon name="create-outline" color="black" size={19} marginLeft={-23}  />
                    </TouchableOpacity>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginBottom: 10 }}>
                    <CustomComponent
                        imagePath={require('../assets/images/iconinsta.png')}
                        title="Instagram"
                        count="12K"
                    />
                    <CustomComponent
                        imagePath={require('../assets/images/iconyoutube.png')}
                        title="Youtube"
                        count="12K"
                    />
                    <CustomComponent
                        imagePath={require('../assets/images/iconLinkedin.png')}
                        title="LinkedIn"
                        count="12K"
                    />
                </View>
            </View>
            <View style={styles.Container2}>
                <LikesboxComponent
                    text="Total Likes       "
                    imagePath={require('../assets/images/heart.png')}
                    mainText="22.3K"
                    additionalText="+23 more"
                />
                <LikesboxComponent
                    text="Total Ratings      "
                    imagePath={require('../assets/images/star1.png')}
                    mainText="1 K"
                    additionalText="+5 more"
                />
            </View>

            <View style={styles.Container3}>
                <View style={{ flexDirection: 'row', margin: 10 }}>
                    <Text style={{ fontSize: 17, fontWeight: '500', }}>Earnings</Text>
                    <Text style={{ fontSize: 17, fontWeight: '500', color: "blue", position: 'absolute', right: '10%' }}>Details</Text>

                    <View style={styles.Container4}>
                        <FlatList
                            data={data}
                            renderItem={renderItem}
                            keyExtractor={item => item.key}
                            numColumns={2}
                            contentContainerStyle={styles.container}
                        />
                        <View style={{ flexDirection: 'row' }}>
                            <CustomCircle circleText="88%" outsideText="Response" borderLeftColor="green" borderRightColor="green" borderBottomColor="green" />
                            <CustomCircle circleText="47%" outsideText="Delivery" borderBottomColor="red" borderLeftColor="red" />
                            <CustomCircle circleText="79%" outsideText="Delivery" borderLeftColor="red" borderRightColor="red" borderBottomColor="red" />
                            <CustomCircle circleText="1h" outsideText="Time" borderTopColor="green" borderRightColor="green" borderBottomColor="green" />
                        </View>
                    </View>
                </View>

            </View>


            <Text style={{ fontSize: 20, fontWeight: '600',padding:10 }}>Analytics</Text>
            <View style={styles.Container5}>
                <BarChart
                    data={data1}
                    width={300}
                    height={250}
                    yAxisLabel=""
                    fromZero={true}
                    yAxisInterval={7}
                    chartConfig={{
                        backgroundGradientFrom: '#fff',
                        backgroundGradientTo: '#fff',
                        decimalPlaces: 0,
                        color: (opacity = 0.1) => `rgba(256, 0.9, 0, ${opacity})`,
                    }}
                    style={{
                        marginVertical: 8,
                        borderRadius: 16,
                    }}
                />

            </View>

        </ScrollView>
    )
}

export default Home
const styles = StyleSheet.create({
    Container: {
        flex: 0.35,
        backgroundColor: 'lightgray',
        padding: 10,
        borderRadius: 10,
        marginVertical: 5

    },
    Container2: {
        flex: 0.35,
        backgroundColor: 'lightgray',
        padding: 10,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    Container3: {
        flex: 0.30,
        backgroundColor: 'lightgray',
        padding: 10,
        borderRadius: 10,
        marginVertical: 5,


    },
    Container4: {
        backgroundColor: 'lightgray',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 20,
        marginVertical: 30,
        width: '98%',
        marginLeft: '-20%',
        alignItems: 'center',

    },
    Container5: {

        backgroundColor: 'lightgray',
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        borderRadius: 20,



    },

    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 8,
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 19,
    },
    column: {
        flex: 1,
        margin: -4,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },


});





