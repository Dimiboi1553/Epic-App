import { StatusBar } from 'expo-status-bar';
import React, { useEffect,useState} from 'react';
import { StyleSheet, Text, View, TouchableHighlight,ImageBackground,Image,ScrollView} from 'react-native';

export default function CryptoPrices() {

  //const [ name, setName ] = useState (  DEFAULTVALUE )

    const BaseURL = "https://api.coingecko.com/api/v3"
    const[coinList,setcoinList] = useState(["LOADING"])
    const[loading, setLoading]= useState(true)
    const[ImageList, setImageList] = useState(["LOADING"])
    

    function NumberList() {
      const array = [1,2,3]
      const ListItems = array.map((x) => <Text>{x * 2}</Text>)
      return(
        <View>{ListItems}</View>
      )


    }
    function RenderList(){
    const ListItem =  loading? <Image source={require("../assets/Tate.gif")}></Image> :
    coinList.map((x) => <TouchableHighlight style={styles.ButtonStyle}><Text style={styles.BoldText}>{x}</Text></TouchableHighlight>)
    return(
      <View>{ListItem}</View>
      
    )
    }
    function RenderImage(){
      const ListItem =  loading? <Image source={require("../assets/Tate.gif")}></Image> :
      ImageList.map((x) => <Image source={{ uri: x }} style={{width:60 , height:60,marginBottom:75, alignSelf:'flex-start'}}></Image>)
      return(
        <View>{ListItem}</View>
        
      )
      }
    const onPressMap =() =>{
      let array = [1,2,3]
      let array2 = array.map((x) => x * 5)
      console.log(array2)
    }
    const GetCoinList =async() =>{
      const response = await fetch(BaseURL + "/search/trending");
      const list = await response.json();
      setImageList(list.coins.map((x) => x.item.thumb))
      setcoinList(list.coins.map((x) => x.item.name))
      setLoading(false)
      console.log(list.coins.map((x) => x.item.thumb))

    }
    useEffect(() => {
      GetCoinList();
    },[]);

  return (
    <ImageBackground 
    style={styles.container}
    source={require("../assets/Ape.png")}
    imageStyle={{opacity:0.45}}
    
    >
      <View style={styles.logoContainer}>
        <Image source={require("../assets/Logo.png")} style={styles.logo}></Image>
      </View>
      <View style={styles.Titlebg}>
        <Text style={styles.TitleText}>Trending Crypto🚀</Text>
      </View>
      <ScrollView style={{flex: 1,width: "100%", alignSelf: "center"}}>
      <View style={{margin: 125}}>
      <View style={{width: "100%", flexDirection: 'row'}}>
      <View style={{flex:0.5}}>{RenderImage()}</View>
      <View style={{flex:0.5}}>{RenderList()}</View>
      </View>
      </View>
      <StatusBar style="auto" />
      </ScrollView>
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
    width: "100%",
    marginBottom: 75,
    height: 60,
    backgroundColor: "#2596be",
    alignItems: 'center',
    textShadowColor: 'white',
    borderRadius: 10,
    paddingVertical: 10,
    alignSelf: "center"

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
  alignSelf: 'center',

  

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
