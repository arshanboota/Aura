import { View, Text, Image, TextInput, TouchableOpacity, Button, StyleSheet, KeyboardAvoidingView, FlatList, ScrollView, ImageBackground, Dimensions } from 'react-native'
import Header from '../components/Header'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import Touchable_icon_text from '../components/Touchable_icon_text'

const Profile = () => {
  const navigation = useNavigation();

  const handlePress = (item) => {
    if (item) {
      navigation.navigate(item);
    } else {
      console.log('No item prop provided');
    }
  }; 

  return (
    <ScrollView style={{ flex: 1, margin: 10}}>
      <View style={{ flex: 1, justifyContent: 'center', margin: 10, borderBottomWidth: 0.5 }}>
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
              source={require('../assets/images/user.png')} />
          </View>
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontSize: 15, fontWeight: '500', }}>Hazal Finch</Text>
            <Text style={{ fontSize: 12, fontWeight: '300' }}>Flood Blogar </Text>
            <Text style={{ fontSize: 12, fontWeight: '300', }}>San Franciso,LA United states</Text>
            <Text style={{ fontSize: 14, fontWeight: '500', }}>Lorem Ipsumm is simply dummy{'\n'}text of printing</Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
              <Icon name="create-outline" color="black" size={19} marginLeft={-23} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.Container2}>
        <Text style={styles.heading}> Selling</Text>
        <Touchable_icon_text
          iconName="medical"
          text="Earnings"
          onPress={() => handlePress('Home')}
        />
           <Touchable_icon_text
          iconName="person-circle-outline"
          text="My Protfolio"
          onPress={() => handlePress('Portfolio')}
        />
           <Touchable_icon_text
          iconName="reader-outline"
          text="Manage Orders"
          onPress={() => handlePress('Home')}
        />
           <Touchable_icon_text
          iconName="reader"
          text="My Profile"
          onPress={() => handlePress('Profile')}
        />
      </View>

      <View style={styles.Container2}>
        <Text style={styles.heading}>Allow Push Notifications</Text>
        <Touchable_icon_text
          iconName="reader-outline"
          text="Privacy Policy"
          onPress={() => handlePress('')}
        />
           <Touchable_icon_text
          iconName="reader-outline"
          text="Terms and Conditions"
          onPress={() => handlePress('')}
        />
           <Touchable_icon_text
          iconName="log-out-outline"
          text="Log Out"
          onPress={() => handlePress('')}
        />       
      </View>
    </ScrollView>
  )
}

export default Profile
const styles = StyleSheet.create({
  Container: {
    flex: 0.35,
    backgroundColor: 'lightgray',
    padding: 10,
    borderRadius: 15,
    marginVertical: 5
  },
  Container2: {
    flex: 0.35,
    backgroundColor: 'lightgray',
    padding: 20,
    borderRadius: 15,
    marginVertical: 5,
  },
  heading: {
    fontSize: 16,
    fontWeight: '600',  
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor:'gray',
    borderWidth:0.4,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
});





