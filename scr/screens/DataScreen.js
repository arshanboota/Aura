import React, { useState } from 'react'
import { View, Text, FlatList, Image, StyleSheet ,TouchableOpacity} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import SplashScreen from './SplashScreen';
import SignInScreen from './SignInScreen';
const Tab = createBottomTabNavigator();

const DataScreen = ({ navigation }) => {
  

  return (
    <Tab.Navigator screenOptions={{
      tabBarStyle: { backgroundColor: '#F3F3F3', borderWidth: 1, height: 60, borderTopWidth: 1, borderRadius: 14, borderColor: 'black', position: 'absolute', bottom: 7, margin: 10 },
      tabBarLabelStyle: {
        display: 'none',
      },
      inactiveTintColor: 'gray', activeTintColor: '#CDF886',
    }}>

      <Tab.Screen options={{
        headerShown: false, tabBarIcon: () => {
          return (<Icon name='home' size={30} />)
        }
      }} name="DataListScreen" component={DataListScreen} />

      <Tab.Screen options={{
        headerShown: false, tabBarIcon: () => {
          return (<Icon name='add' size={30} />)
        }
      }} name="SplashScreen" component={SplashScreen} />

      <Tab.Screen options={{
        headerShown: false, tabBarIcon: () => {
          return (<Icon name='person-outline' size={30} />)
        }
      }} name="SignInScreen" component={SignInScreen} />
    </Tab.Navigator>
  );

};

const DataListScreen = () => {
  const data = Array(6).fill(null);
  const [box1Color, setBox1Color] = useState('#CDF886');
  const [box2Color, setBox2Color] = useState('white');

  const handleBox1Click = () => {
    setBox1Color('#CDF886');
    setBox2Color('white');
  };

  const handleBox2Click = () => {
    setBox1Color('white');
    setBox2Color('#CDF886');
  };

  return (
    <View style={{ flex: 1 }}>

<View style={styles.container}>
        <TouchableOpacity
          style={{ ...styles.box, backgroundColor: box1Color }}
          onPress={handleBox1Click}
        >
          <Text>For You</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ ...styles.box, backgroundColor: box2Color }}
          onPress={handleBox2Click}
        >
          <Text>Following</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        numColumns={2}
        data={data}
        renderItem={({ item }) => {
          return (
            <View style={styles.columnContainer}>
              <Image source={require('../assets/images/Rectangle15.jpg')} style={styles.image} />
              <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <Image source={require('../assets/images/Ellipse111.jpg')} style={styles.smallImage} />
                <Text style={{ fontWeight: '800', marginLeft: 5, fontSize: 17 }}>Hazal</Text>
                <Image source={require('../assets/images/Vector.png')} style={styles.smallImage} />
              </View>
              <Text>Lorem ipsum is simply dummy text of the printing and typesetting industry.</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  columnContainer: {
    flex: 1,
    width: '50%',
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    borderRadius: 20,
    margin: 10,
  },
  image: {
    width: 147,
    height: 147,
    borderRadius: 20,
    resizeMode: 'contain',
    justifyContent: 'center',
    marginBottom: 10,
  },
  smallImage: {
    width: 40,
    height: 40,
    marginRight: 5,
    resizeMode: 'contain',
  },
  container: {
    flexDirection: 'row',
    width: '95%',
    backgroundColor:'white',
    margin:15,
    marginRight:15,
    borderWidth:1,
    borderRadius:15,
    borderRightWidth:4,
    borderBottomWidth:4,
  },
  box: {
    flex: 1,
    height: 40,
    borderWidth:1,
    borderRadius:10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
});

export default DataScreen;
