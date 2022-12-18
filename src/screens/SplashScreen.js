import { View, Text ,Image,StyleSheet} from 'react-native'
import React ,{useEffect, useState}from 'react'

export default function SplashScreen({navigation}) {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Login');
        //    handleGetToken();
        }, 2000);
      })
  return (
    <View
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'#1B1B1B'}}>
        <Image style={styles.image} source={require("../../assets/master2.png")} />
      <Text style={{fontWeight:'bold',color:'#FFF'}}>MOVIE APP RECOMMENDED👋</Text>
  
    </View>
  )
}

const styles = StyleSheet.create({
    image: {
        marginBottom: 1,
        height: 350,
        width: 350,
        

    },
});