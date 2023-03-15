import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight,ImageBackground,Image } from 'react-native';


export default function SelectMajor(props) {
  const onPressCrypto = () => {
    props.navigation.navigate('Crypto')
  }

  const onPressDropshipping = () =>{
    props.navigation.navigate('Dropshipping')
  }
  
  const onPressMarketing = () =>{
    props.navigation.navigate('AM')
  }
  return (
    <ImageBackground
     
    style={styles.container}
    source={require("../assets/Lambo.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image source={require("../assets/Logo.png")} style={styles.logo}></Image>
        <Text style={styles.TitleText}>Select Your Major!</Text>
      </View>
      <View style={{margin: 150}}>

      </View>
      <TouchableHighlight style={styles.ButtonStyle} onPress={onPressCrypto}><Text style={styles.BoldText}>CRYPTO</Text></TouchableHighlight>
      <TouchableHighlight style={styles.ButtonStyle} onPress={onPressDropshipping}><Text style={styles.BoldText}>DROPSHIPPING</Text></TouchableHighlight>
      <TouchableHighlight style={styles.ButtonStyle} onPress={onPressMarketing}><Text style={styles.BoldText}>AFFILIATE MARKETING</Text></TouchableHighlight>
      <StatusBar style="auto" />
    
    </ImageBackground>
    
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
    marginBottom: 75,
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
