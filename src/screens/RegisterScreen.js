import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, SafeAreaView, TextInput, StyleSheet, Button, TouchableOpacity, Image, Pressable } from 'react-native';

import axios from 'axios';

export default function RegisterScreen({ navigation }) {
    const [username, onChangeText1] = React.useState("");
    const [email, onChangeText2] = React.useState("");
    const [password, onChangeText3] = React.useState("")
    const [confirm, onChangeText4] = React.useState("");


    const API = "http://192.168.132.1:3000/users";
    const register = () => {
        if(!username || !email || !password ) {
          alert('Complete your information');
          return;
        }
        if(password !== confirm){
            alert('Password not match,Please Try Again')
            return;
        }
        axios.post(API, {
          username: username,
          email: email,
          password: password,
        })
        .then((response) => {
          if(response.data.status === 'ok') {
            navigation.navigate('Login');
          }
        })
        .catch((error) => {
          console.log('Can not connect',error.message);
        })
      }
    


    return (
        
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#D7D7D7' }}>
            
            <Text style={{ fontSize: 30, fontWeight: 'bold', marginBottom: 5, right: 120,left:4 }}>Register</Text>
            <TextInput
                
                placeholder='UserName'
                style={styles.input}
                onChangeText={onChangeText1}
                value={username}    
            />
            <TextInput
                placeholder='Email'
                style={styles.input}
                onChangeText={onChangeText2}
                value={email}
            />
            <TextInput
                secureTextEntry={true}
                placeholder='Password'
                style={styles.input}
                onChangeText={onChangeText3}
                value={password}
            />
            <TextInput
                secureTextEntry={true}
                placeholder='ConfirmPassword'
                style={styles.input}
                onChangeText={onChangeText4}
                value={confirm}
            />
            <TouchableOpacity style={styles.loginBtn}
                onPress={register}>
                <Text style={{ color: "white", fontWeight: 'bold', fontSize: 19 }}>SUBMIT</Text>
            </TouchableOpacity>

        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    input: {
        margin: 12,
        borderWidth: 0,
        borderRadius: 4,
        padding: 10,
        backgroundColor: "#A5A5A5",
        width: "80%",
        alignItems: "center",
        // color: '#404040'
        color:'black'
    },
    loginBtn: {
        borderWidth: 0.15,
        borderRadius: 4,
        padding: 10,
        backgroundColor: "#BF1700",
        width: "80%",
        alignItems: "center",
        color: "white",
        fontWeight: 'bold',
        marginBottom: 10
    },
    image: {
        marginBottom: 1,
        height: 100,
        width: 200,
    },
    faceBtn: {
        borderWidth: 0,
        borderRadius: 0,
        padding: 6,
        backgroundColor: "#3B5998",
        width: "80%",
        alignItems: "center",
        color: "white",
        fontWeight: 'bold',
        marginBottom: 8
    },
    googleBtn: {
        borderWidth: 0,
        borderRadius: 0,
        padding: 6,
        backgroundColor: "#FFF",
        width: "80%",
        alignItems: "center",
        color: "white",
        fontWeight: 'bold',
        marginBottom: 5
    }


});