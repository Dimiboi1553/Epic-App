import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight,ImageBackground,Image,Linking, Alert} from 'react-native';
import CryptoPrices from './CryptoPrices';

export default function CryptoScreen(props) {

    const BaseURL = "https://api.coingecko.com/api/v3"

    const onPressCryptoTrend =() =>{
        Linking.openURL("https://www.reddit.com/r/wallstreetbets/comments/c3fl7e/dinosaur_pattern_gold_bull_market_confirmed/")
    }
    const onPressCryptoBasics =() =>{
        Linking.openURL("https://www.wikihow.com/Stop-Gambling")
    }
    const onPressCryptoFind =() =>{
      console.log(BaseURL) 
      GetCoinList()
    }
    const onPressCryptoPrices =() =>{
      props.navigation.navigate('CryptoPrices')
    }
    const GetCoinList =async() =>{
      const response = await fetch(BaseURL + "/coins/list");
      const list = await response.json();
      console.log(list)
    }


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
        <Text style={styles.TitleText}>Crypto Currency🚀</Text>
      </View>
      <View style={{margin: 150}}>

      </View>
      <TouchableHighlight style={styles.ButtonStyle}onPress={onPressCryptoBasics}><Text style={styles.BoldText}>LEARN THE BASICS</Text></TouchableHighlight>
      <TouchableHighlight style={styles.ButtonStyle} onPress={onPressCryptoPrices}><Text style={styles.BoldText}>FIND CRYPTO</Text></TouchableHighlight>
      <TouchableHighlight style={styles.ButtonStyle} onPress={onPressCryptoTrend}><Text style={styles.BoldText}>LOOK AT TRENDS</Text></TouchableHighlight>
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
