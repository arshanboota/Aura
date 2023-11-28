import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/core';

const firebaseConfig = {
  apiKey: "AIzaSyBopSZw4F66l9DZgqcE8c4nHD_Fdd9h_Z0",
  authDomain: "aura-797ed.firebaseapp.com",
  projectId: "aura-797ed",
  storageBucket: "aura-797ed.appspot.com",
  messagingSenderId: "49145582451",
  appId: "1:49145582451:web:4d28d371436ffdc2e36b06"
};



if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();

const NavigationAwareAuth = () => {
  const navigation = useNavigation();

  auth.onAuthStateChanged(user => {
    if (user) {
      navigation.navigate("AccountDetails");
    } else {
      navigation.navigate("RegisterAs");
    }
  });

  return null; 
};

export { auth };