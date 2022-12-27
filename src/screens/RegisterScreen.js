import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { KeyboardAvoidingView,View, Text, SafeAreaView, TextInput, StyleSheet, Button, TouchableOpacity, Image, Pressable } from 'react-native';
import styles from '../styles';
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';
//import { MYAPP_API } from "@env";

export default function RegisterScreen({ navigation }) {
    const [username, setUsername] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("")
    const [confirm, setConfirm] = React.useState("");
    const [fname,SetfName] = React.useState("");




    
   //const API_Regis = "http://192.168.1.31:3000/users";
   //const API_Regis = "http://192.168.1.31:3000/users";
   const API_Regis = "http://192.168.47.1:3000/users"
    // const API = "http://127.0.0.1:3000/users";
    const register = () => {
        if(!username || !email || !password || !fname ) {
          alert('Complete your information');
          return;
        }
        if(password !== confirm){
            alert('Password not match,Please Try Again')
            return;
        }
        //axios.post(`${MYAPP_API}}/users`,
        axios.post(API_Regis,
       
        {
          fname : fname,
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
       
            <View style={{display: 'flex', justifyContent: 'flex-start', height: '100%'}}> 
            <Text style={{ fontSize: 30, fontWeight: 'bold', marginBottom: 10, marginTop: 80,right: 120,left:4 ,color:'white'}}>SIGN UP  </Text>
            <View>

            <TextInput
                placeholder='Email'
                style={styles.textInput}
                onChangeText={setEmail}
                value={email}
                clearButtonMode="always"
            />
            <TextInput
                
                placeholder='Fullname'
                style={styles.textInput}
                onChangeText={SetfName}
                value={fname}
                clearButtonMode="always"
            />
            <TextInput
                
                placeholder='Username'
                style={styles.textInput}
                onChangeText={setUsername}
                value={username}
                clearButtonMode="always"    
            />
      
            <TextInput
                secureTextEntry={true}
                placeholder='Password'
                style={styles.textInput}
                onChangeText={setPassword}
                value={password}
                clearButtonMode="always"
            />
            <TextInput
                secureTextEntry={true}
                placeholder='ConfirmPassword'
                style={styles.textInput}
                onChangeText={setConfirm}
                value={confirm}
                clearButtonMode="always"
            />
            <TouchableOpacity style={styles.RegisBtn}
                onPress={register}>
                <Text style={styles.buttonLabel}>SUBMIT</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginVertical: 10,flexDirection: 'row'}}
            onPress={() => {navigation.navigate('Login')}}
          >
           <Text style={{color:'#ffff'}}>If already account ?</Text>
           <Text style={{color: '#FFF', fontWeight: '700', fontSize: 15, textAlign: 'left',marginLeft:5,backgroundColor:'#1F9B5E'}}>Sign In</Text>
          </TouchableOpacity>
            </View>
            </View>
       
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