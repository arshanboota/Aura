import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { Platform } from 'react-native'
import Messages from '../screens/Messages';
import Profile from '../screens/Profile';
import Home from '../screens/Home';
import Plus from '../screens/Plus';
import Order from '../screens/Order';
const Tab = createBottomTabNavigator()

const screenOptions = {
    headerShown: false,
    tabBarHideOnKeyboard: true,
    tabBarStyle: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        elevation: 0,
        height: 60,
        background: 'white',
    },
}
const BottomTabNavigation = () => {
    return (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: () => (
                        <Icon name="home-outline" size={25} color="black" />
                    ),
                }}
            />
            <Tab.Screen
                name="Order"
                component={Order}
                options={{
                    tabBarIcon: () => {
                        return (
                            <Icon name="reader-outline" size={25} color="black" />

                        )
                    },
                }}
            />

            <Tab.Screen
                name="Plus"
                component={Plus}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View
                                style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: Platform.OS == 'ios' ? 40 : 55,
                                    width: Platform.OS == 'ios' ? 50 : 55,
                                    top: Platform.OS == 'ios' ? -4 : 6,
                                    borderRadius: Platform.OS == 'ios' ? 25 : 20,
                                    backgroundColor: '#6A50B2',
                                }}
                            >
                                <Icon name="add-outline" size={35} color="white" />
                            </View>
                        )
                    },
                    tabBarLabel: '',
                }}
            />
            <Tab.Screen
                name="Messages"
                component={Messages}
                options={{
                    tabBarIcon: () => {
                        return (
                            <Icon name="chatbox-ellipses-outline" size={25} color="black" />
                        )
                    },
                }}
            />

            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ }) => {
                        return (
                            <Icon name="person-circle-outline" size={25} color="black" />
                        )
                    },
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomTabNavigation