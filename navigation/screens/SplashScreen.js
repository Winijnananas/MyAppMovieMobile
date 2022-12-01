// import { View, Text, StyleSheet,SafeAreaView} from 'react-native'
// import React,{ useEffect, useState} from 'react'

// const SplashScreen = props=>{
//     const[authLoaded, setAuthLoaded] = useState(false);

//     useEffect(() =>{
//         setTimeout(() =>{
//             setAuthLoaded(true);
            
//         },5000);
//     },[]);
//     useEffect(()=>{
//         if(authLoaded){
//             props.navigation.replace('Home');
//         }
//     },[authLoaded,props.navigation]);

//     return(
//       <SafeAreaView>
//             <Text>
//                 SplashScreen
//             </Text>
//         </SafeAreaView>
//     );

// };

// const styles =StyleSheet.create({
//     root:{
//         flex:1,
//         alignContent:'center',
//         justifyContent:'center',
//     }
// });

// export default SplashScreen;
import React, { useCallback, useEffect, useState } from 'react';
import { Text, View ,Image,StyleSheet} from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import HomeScreen from './HomeScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';


// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App({}) {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync(Entypo.font);
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise(resolve => setTimeout(resolve, 2000));
        
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
        
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
        
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    
    return null;
  }

  return (
    <View
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
      onLayout={onLayoutRootView}>
      {/* <Text>SplashScreen Demo! 👋</Text> */}
      <Image style={styles.image} source={require("../../assets/master2.png")} />
      <Text style={{marginBottom:20}}>MOVIE APP RECEOMENDED 👋</Text>
      <Entypo name="rocket" size={30} />
    </View>
  );
}

const styles = StyleSheet.create({
    image: {
        marginBottom: 1,
        height: 350,
        width: 350,

    },
    Textcustom: {
        fontSize: 20,
        fontWeight: 'bold',
        // color:'white'


    },
    TextComp: {

        fontSize: 10,
        color: 'gray',
        padding: 10,
        fontWeight: 'bold'
    }


});

// export default function SplashScreen ({navigation}) {
//     useEffect(() => {
//       setTimeout(() => {
//          handleGetToken();
//       }, 2000);
//     })
  
//     const handleGetToken = async() => {
//       let token = await AsyncStorage.getItem('@Token');
//       if(!token) {
//         navigation.replace('Login');
//       } else {
//         navigation.replace('App');
//       }
//     };
  
//     return(
//       <SafeAreaView style={styles.container}>
//         <View style={{height: '100%', width: '100%', justifyContent: 'center'}}>
//           <Text style={customStyle.title}>MYPACE</Text>
//         </View>
//       </SafeAreaView>
//     );
//   }
  
//   const customStyle = StyleSheet.create({
//     title: {
//       color: '#FFF',
//       fontSize: 80,
//       fontWeight: '800',
//       textAlign: 'center'
//     }
//   });