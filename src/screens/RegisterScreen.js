import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { KeyboardAvoidingView,View, Text, SafeAreaView, TextInput, StyleSheet, Button, TouchableOpacity, Image, Pressable } from 'react-native';
import styles from '../styles';
import axios from 'axios';

export default function RegisterScreen({ navigation }) {
    const [username, onChangeText1] = React.useState("");
    const [email, onChangeText2] = React.useState("");
    const [password, onChangeText3] = React.useState("")
    const [confirm, onChangeText4] = React.useState("");




    
    const API = "http://192.168.1.31:3000/users";
    // const API = "http://127.0.0.1:3000/users";
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
        <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#1B1B1B' }}>
            
            <Text style={{ fontSize: 30, fontWeight: 'bold', marginBottom: 5, right: 120,left:4 ,color:'white'}}>REGISTER   </Text>
            <TextInput
                
                placeholder='UserName'
                style={styles.textInput}
                onChangeText={onChangeText1}
                value={username}    
            />
            <TextInput
                placeholder='Email'
                style={styles.textInput}
                onChangeText={onChangeText2}
                value={email}
            />
            <TextInput
                secureTextEntry={true}
                placeholder='Password'
                style={styles.textInput}
                onChangeText={onChangeText3}
                value={password}
            />
            <TextInput
                secureTextEntry={true}
                placeholder='ConfirmPassword'
                style={styles.textInput}
                onChangeText={onChangeText4}
                value={confirm}
            />
            <TouchableOpacity style={styles.loginBtn}
                onPress={register}>
                <Text style={styles.buttonLabel}>SUBMIT</Text>
            </TouchableOpacity>

        </SafeAreaView>
</KeyboardAvoidingView>
    )
}

// const styles = StyleSheet.create({
//     input: {
//         margin: 12,
//         borderWidth: 0,
//         borderRadius: 4,
//         padding: 10,
//         backgroundColor: "#FFFF",
//         width: "80%",
//         alignItems: "center",
//         // color: '#404040'
//         color:'black'
//     },
//     loginBtn: {
//         borderWidth: 0.15,
//         borderRadius: 5,
//         padding: 10,
//         backgroundColor: "#BF1700",
//         width: "80%",
//         alignItems: "center",
//         color: "white",
//         fontWeight: 'bold',
//         marginBottom: 10
//     },
//     image: {
//         marginBottom: 1,
//         height: 100,
//         width: 200,
//     },
//     faceBtn: {
//         borderWidth: 0,
//         borderRadius: 0,
//         padding: 6,
//         backgroundColor: "#3B5998",
//         width: "80%",
//         alignItems: "center",
//         color: "white",
//         fontWeight: 'bold',
//         marginBottom: 8
//     },
//     googleBtn: {
//         borderWidth: 0,
//         borderRadius: 0,
//         padding: 6,
//         backgroundColor: "#FFF",
//         width: "80%",
//         alignItems: "center",
//         color: "white",
//         fontWeight: 'bold',
//         marginBottom: 5
//     }


// });