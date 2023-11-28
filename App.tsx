import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from './scr/screens/SplashScreen';
import OnboardingStarter from './scr/screens/OnboardingStarter';
import LoginOrRegister from './scr/screens/LoginOrRegister';
import RegisterAs from './scr/screens/RegisterAs';
import CreateAccount from './scr/screens/create_account/CreateAccount';
import LoginScreen from './scr/screens/LoginScreen';
import Varificiation from './scr/screens/Varificiation';
import AccountDetails from './scr/screens/AccountDetails';
import BottomTabNavigation from './scr/navigation/BottomTabNavigation';
import EditProfile from './scr/screens/EditProfile';
import ChatScreen from './scr/screens/chat_screen/ChatScreen';
import Portfolio from './scr/screens/Portfolio';
import Profile from './scr/screens/Profile';

const Stack = createNativeStackNavigator();
const App = () => {
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    console.log('Starting loading...');
    setLoading(true);
    setTimeout(() => {
      console.log('Loading finished.');
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={loading ? 'SplashScreen' : 'OnboardingStarter'}  >
        <Stack.Screen options={{ headerShown: false }} name="LoginScreen" component={LoginScreen} />
        <Stack.Screen options={{ headerShown: false }} name="SplashSecreen" component={SplashScreen} />
        <Stack.Screen options={{ headerShown: false }} name="OnboardingStarter" component={OnboardingStarter} />
        <Stack.Screen options={{ headerShown: false }} name="LoginOrRegister" component={LoginOrRegister} />
        <Stack.Screen options={{ headerShown: false }} name="RegisterAs" component={RegisterAs} />
        <Stack.Screen options={{ headerShown: false }} name="CreateAccount" component={CreateAccount} />
        <Stack.Screen options={{ headerShown: false }} name="Varificiation" component={Varificiation} />
        <Stack.Screen options={{ headerShown: false }} name="AccountDetails" component={AccountDetails} />
        <Stack.Screen options={{ headerShown: false }} name="BottomTabNavigation" component={BottomTabNavigation} />
        <Stack.Screen options={{ headerShown: false }} name="ChatScreen" component={ChatScreen} />
        <Stack.Screen options={{ headerShown: false }} name="EditProfile" component={EditProfile} />
        <Stack.Screen options={{ headerShown: false }} name="Portfolio" component={Portfolio} />
        <Stack.Screen options={{ headerShown: false }} name="Profile" component={Profile} />


      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;