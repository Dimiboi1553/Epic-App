import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight,ImageBackground,Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Homepage from './screens/homepage';
import SelectMajor from './screens/SelectMajor';
import CryptoScreen from './screens/Crypto';
import DropshippingScreen from './screens/Dropshipping';
import SignUp from './screens/SignUp.js';
import AffiliateMarketing from './screens/AffiliateMarketing.js'
import CryptoPrices from './screens/CryptoPrices';
const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Homepage}/>
        <Stack.Screen name="SelectMajor" component={SelectMajor}/>
        <Stack.Screen name="Crypto" component={CryptoScreen}/>
        <Stack.Screen name="Dropshipping" component={DropshippingScreen}/>
        <Stack.Screen name="SignUp" component={SignUp}/>
        <Stack.Screen name="AM" component={AffiliateMarketing}/>
        <Stack.Screen name="CryptoPrices" component={CryptoPrices}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    position: 'absolute',
    top: 35,
    alignItems: 'center',
},
  logo: {
    width: 150,
    lenght:150,

},
  ButtonStyle: {
    width: "60%",
    marginBottom: 60,
    height: 60,
    backgroundColor: "#2596be",
    alignItems: 'center',
    textShadowColor: 'white',
    borderRadius: 10,
    paddingVertical: 10

},
BoldText: {
  fontWeight: 'bold',
         color: 'white',
         fontSize: 20,
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center',
         textAlignVertical: 'center',
         textShadowRadius: 2,
         textShadowColor: 'black'
 },
 TitleText: {
  fontWeight: 'bold ',
  fontSize:30,
  textShadowRadius: 20,
  color: '#2596be',


 }
 
});
