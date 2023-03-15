import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, TouchableHighlight,ImageBackground,Image,TextInput,Alert} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker'

export default function SignUp() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'Student', value: 'apple'},
        {label: 'Businessman', value: 'banana'},
        {label: 'Worker', value: 'Grape'},
        {label: 'G', value: 'B'}
        
    ]);
    
    const onPressG = () => {
      Alert.alert(
        "You are on your way to becoming a G!",
        "Good Job!",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
      );
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
        <Text style={styles.TitleText}>SIGN UP🚀</Text>
      </View>
      <View style={{margin: 150}}>

      <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      placeholder = {"Select What Applies to you"}
    />

      </View>
      <TouchableHighlight style={styles.MailStyle}><Text style={styles.MailText}>ENTER YOUR EMAIL</Text></TouchableHighlight>
      <TextInput
        style={styles.TextStyle}
        // onChangeText={{}}
        // value={{}}
        placeholder="Example@Email.com"
        keyboardType="numeric"
      />
      <TouchableHighlight style={styles.ButtonStyle} onPress={onPressG}>
        <Text style={styles.BoldText}>BECOME A G</Text>
      </TouchableHighlight>
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
    // paddingVertical: 10

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


 },
 TextStyle:{
    marginBottom: 65,
    backgroundColor: "white",
    width: "70%", 
    height: 40, 
    borderWidth: 1.5
 },
 MailText: {
  fontWeight: 'bold',
         color: 'black',
         fontSize: 20,
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center',
         textAlignVertical: 'center',
         textShadowRadius: 2,
         textShadowColor: 'black'
 },
 MailStyle: {
  width: "60%",
  marginBottom: 75,
  height: 60,
  backgroundColor: "white",
  alignItems: 'center',
  textShadowColor: 'white',
  borderRadius: 10,
  // paddingVertical: 10

}
 
});
