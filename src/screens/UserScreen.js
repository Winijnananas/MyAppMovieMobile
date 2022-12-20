// import * as React from 'react';
import { View, Text, Button, TextInput, StyleSheet, SafeAreaView, TouchableOpacity, Image, ImageBackground, Pressable, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import React,{ useState,useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';



export default function UserScreen({ navigation }) {
    const [editprofile, onChangeText] = React.useState("Edit Profile"); 
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const fetchUser = async ()  =>{
        const accessToken = await AsyncStorage.getItem('@accessToken')
        const response = await fetch('https://www.melivecode.com/api/auth/user',{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'Authorization' : 'Bearer ' + accessToken
            },
        })
        const data = await response.json()
        console.log(data)
        if(data.status === 'forbidden'){
            navigation.navigate('Login')
        }
        
        setUser(data.user)
        setIsLoading(false)
        
    }
    useEffect(()=>{
        fetchUser()
    },[isLoading])

    // logout=()=>{
    //     AsyncStorage.clear()
    //     // this.props.navigation.navigate("Login")
    // }

    return (
        <ScrollView>
            <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ImageBackground style={{ aspectRatio: 247 / 100, height: 170, marginBottom: 50 }} source={{
                    uri: "https://i.pinimg.com/originals/71/08/8b/71088b116216f449a4d78d0d8433f10d.jpg"
                }}

                ></ImageBackground>

                {/* <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}> */}

                <Image style={styles.image} source={require("../../assets/user.png")} />
                {
                    isLoading ?
                    <Text>Loading</Text>
                    :
                    <SafeAreaView>
                        {/* <Image source={{uri: user.avatar}}
                        style={{width:150,height:150}}
                        /> */}
                        {/* <Text style={{fontSize:20,left:40,fontWeight:'bold',alignContent:'center',marginBottom:5}}>{user.fname}{user.lname}</Text>
                        <Text style={{marginBottom:200}}>{user.email}</Text> */}
                    </SafeAreaView>
                }
                {/* <Text style={{ marginBottom: 20, alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>NIRAN01</Text>
                <TouchableOpacity style={styles.loginBtn}
                    onPress={() => navigation.navigate('TabNavigation')}>

                    <Text style={{ color: "black", fontWeight: '', fontStyle: 'italic', fontSize: 12 }}>user101.@gmail.com</Text>
                </TouchableOpacity>

                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={editprofile}
                />
                <TouchableOpacity style={styles.loginBtn}
                    onPress={() => navigation.navigate('EditScreen')}>
                    <Text style={styles.logOutBtn}>Edit Profile</Text>
                </TouchableOpacity> */}
                

                {/* button logout */}

                {/* <Button
                onPress={fetchUser}
                title="Reload"
                color="blue"
                /> */}
                <TouchableOpacity style={styles.loginBtn}
                // onPress={fetchUser}
                onPress={fetchUser}
                    // onPress={() => navigation.navigate('Login')}
                    >
                    <Text style={styles.logOutBtn}>LogOut</Text>
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
        marginBottom:10,
        borderWidth: 0,
        borderRadius: 10,
        padding: 10,
        backgroundColor: "#BF1700",
        alignItems: "center",
        color: "white",
        fontWeight: 'bold',

    },


});
