import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight,ImageBackground,Image,Linking } from 'react-native';

export default function AffiliateMarketing() {

  return (
    <ImageBackground 
    style={styles.container}
    source={require("../assets/Bugatti.jpg")}
    imageStyle={{opacity:0.45}}
    
    >
      <View style={styles.logoContainer}>
        <Image source={require("../assets/Logo.png")} style={styles.logo}></Image>
      </View>
      <View style={styles.Titlebg}>
        <Text style={styles.TitleText}>Affiliate Marketing🚀</Text>
      </View>
      <View style={{margin: 150}}>
      <TouchableHighlight style={styles.ButtonStyle}onPress={{}}><Text style={styles.BoldText}>ANDREW TATE</Text></TouchableHighlight>
      <TouchableHighlight style={styles.ButtonStyle} onPress={{}}><Text style={styles.BoldText}></Text></TouchableHighlight>
      <TouchableHighlight style={styles.ButtonStyle} onPress={{}}><Text style={styles.BoldText}></Text></TouchableHighlight>

      </View>
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
  color: 'white',

  

 },
 Titlebg:{
    marginTop:170,
    width: "50%",
    height: 60,
    backgroundColor: "#2596be",
    alignItems: 'center',
    textShadowColor: 'white',
    borderRadius: 10,
    paddingVertical: 10


 }
 
});
