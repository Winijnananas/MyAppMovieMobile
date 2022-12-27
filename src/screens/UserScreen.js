// import * as React from 'react';
import { View, Text, Button, TextInput, StyleSheet, SafeAreaView, TouchableOpacity, Image, ImageBackground, Pressable, ScrollView,ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { useIsFocused } from '@react-navigation/native';
import LogoutButton from '../compenents/LogoutButton';
import axios from 'axios';
//import { ActivityIndicator } from 'react-native-paper';

// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';




export default function UserScreen({ navigation }) {
  // const [editprofile, onChangeText] = React.useState("Edit Profile"); 



  const API_User_me = "http://192.168.47.1:3000/users/me"; 
  //const API_User_me = "http://192.168.1.31:3000/users/me";
  const [isLoading ,setIsLoading] = useState(false);
  const [token, setToken] = useState();
  const [username,setUser] = useState();

  const getToken = async () => {
    //await AsyncStorage.getItem('@Token');
    setToken(await AsyncStorage.getItem('@Token'));
    //console.log(token)
  };

  getToken();
  //console.log(getToken())



  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused) {
      const fetchUser = async () => {
        // const response = await axios.get(`http://192.168.1.31:3000/users/me`, {
        const response = await axios.get(API_User_me, {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        });
        if (response.data.status === 200) {
          setUser(response.data.user);
          setIsLoading(true);
        }
      }

      fetchUser();
    }
  }, [isFocused])

  return (
    <ScrollView>
      
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ImageBackground style={{ aspectRatio: 247 / 100, height: 170, marginBottom: 5 }} source={{
          uri: "https://i.pinimg.com/originals/71/08/8b/71088b116216f449a4d78d0d8433f10d.jpg"
        }}

        ></ImageBackground>
        {
          isLoading &&(
            <View style={{flex:1,textAlign:'center'}}>
        <Text style={{fontSize:20,fontWeight:'bold'}}>HELLO {username.fname} ♥</Text>
        </View>
          )
        }
        

        

        {/* <Image style={styles.image} source={require("../../assets/user.png")} /> */}
        <View>
        {
        isLoading && (
          <View>
            <Text>{username.fname}</Text>
            <Text>{username.email}</Text>
            <TouchableOpacity
                    onPress={() => navigation.navigate('EditProfile')}

                  >
                    <Text>Edit</Text>
                  </TouchableOpacity>
          </View>
        )
      }
      {
        !isLoading && (
          <View>
            <ActivityIndicator />
          </View>
        )
      }

        </View>

        <TouchableOpacity style={styles.loginBtn}>
          <LogoutButton />

        </TouchableOpacity>




      </SafeAreaView>
    </ScrollView>



  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 0.9,
    borderRadius: 0,
    padding: 10,
    backgroundColor: "#D9D9D9",
    width: "40%",
    alignItems: "center",
    marginBottom: 200

  },
  loginbtn: {
    borderWidth: 0,
    borderRadius: 25,
    padding: 10,
    margin: 10,
    backgroundColor: "red",
    alignItems: "center",
    height: "5%",
    width: "100%",
  },
  image: {
    marginBottom: 1,
    height: 140,
    width: 140

  },
  logOutBtn: {
    marginBottom: 10,
    borderWidth: 0,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#BF1700",
    alignItems: "center",
    color: "white",
    fontWeight: 'bold',

  },


});
