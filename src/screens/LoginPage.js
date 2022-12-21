// import { async } from '@firebase/util';
import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View ,ScrollView,SafeAreaView,Image,Alert} from 'react-native'
// import { auth } from '../../firbase'
import styles from '../styles';
import axios from 'axios';
//import { MYAPP_API } from "@env";

// const navigation = useNavigation()
const API = "http://10.200.8.111:3000/login";
const LoginPage = ({navigation}) => { 
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const _storeData = async (data) => {
      try {
          await AsyncStorage.setItem('@Token', data);
          //console.log(data);
          navigation.navigate('TabNavigation');
      } catch(err){
          console.log(err);
      }
  }

  const Login = ({ }) => { console.log('login');
         //axios.post(`${MYAPP_API}}/login`
         axios.post(`http://10.200.8.111:3000/login`,
         {
            username: username,
            password: password
        })
        .then((response) => {
            if(response.data.status === 'ok'){
                _storeData(response.data.token);
            } else{
                alert('Login fail');
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }
    

    // const navigation = useNavigation()

    // useEffect(() => {
    //   const unsubscribe = auth.onAuthStateChanged(user => {
    //     if (user) {
    //       navigation.replace("Home")
    //     }
    //   })
  
    //   return unsubscribe
    // }, [])
  

   // const API = "http://192.168.47.1:3000/users";

    
    // const API = "http://127.0.0.1:3000/users";
  //   const login = () => {
  //       if(!username || !email || !password ) {
  //         alert('Complete your information');
  //         return;
  //       }
  //       if(password !== confirm){
  //           alert('Password not match,Please Try Again')
  //           return;
  //       }
  //       axios.post(API, {
  //         username: username,
  //         email: email,
  //         password: password,

  //       })
  //       .then((response) => {
  //         if(response.data.status === 'ok') {
  //           // alert('LOGIN COMPLETE')
  //           navigation.navigate('TabNavigation');
  //         }
  //       })
  //       .catch((error) => {
  //         console.log('Can not connect',error.message);
  //       })
  //     }

  //  const handleLogin =async () =>{
  //   const response = await fetch('https://www.melivecode.com/api/login',{
  //   method: 'POST',
  //   headers:{
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({
  //     username:username,
  //     password:password,
  //     expiresIn:60000
      
  //     // expiresIn:60000
  //   })
  //   })
  //   const data = await response.json()
  //   if(data.status == 'ok'){
  //     Alert.alert(
  //       data.status,
  //       data.message,
  //       [
  //         { text: "OK", onPress: () => console.log("OK Pressed") }
  //       ]
  //     );
  //     await AsyncStorage.setItem('@accessToken', data.accessToken)
  //     const accessToken = await AsyncStorage.getItem('@accessToken')
  //     // navigation.navigate('User')
  //     navigation.navigate('TabNavigation')
  //     console.log(accessToken)
  //   }else{
  //     Alert.alert(
  //       data.status,
  //       data.message,
  //       [
  //         { text: "OK", onPress: () => console.log("OK Pressed") }
  //       ]
  //     );
  //   }
  //  }
  
    // const handleLogin = () => {
    //   auth
    //     .signInWithEmailAndPassword(email, password)
    //     .then(userCredentials => {
    //       const user = userCredentials.user;
    //       console.log('Logged in with:', user.email);
    //     })
    //     .catch(error => alert(error.message))
    // }
return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
      
      <View style={{display: 'flex', justifyContent: 'flex-start', height: '100%'}}>
     
      <Text style={styles.title}>SIGN IN</Text>
      
        <View>
        {/* <TextInput 
            style={styles.textInput}
            onChangeText={onChangeText2}
            value={email}
            placeholderTextColor="#A9A9A9"
            // secureTextEntry 
            // right={<TextInput.Icon icon="eye"/>}
            // secureTextEntry={true}
            // autoCapitalize = 'none'
            placeholder="Email" /> */}

          <TextInput 
            style={styles.textInput}
            onChangeText={setUsername}
            value={username}
            placeholderTextColor="#A9A9A9"
            autoCapitalize = 'none'
            placeholder="Username" />

          <TextInput 
            style={styles.textInput}
            onChangeText={setPassword}
            value={password}
            placeholderTextColor="#A9A9A9"
            // secureTextEntry 
            // right={<TextInput.Icon icon="eye"/>}
            secureTextEntry={true}
            autoCapitalize = 'none'
            placeholder="Password" />
            

          <TouchableOpacity
            style={styles.loginButton}
            // onPress={() =>navigation.navigate('TabNavigation')}
            onPress={Login}
          >
            <Text style={styles.buttonLabel}
            // onPress={login}
            // onPress={() => Alert.alert('Login Complete ')}
            >LOGIN</Text>
          </TouchableOpacity>

          { /* register */}
          <TouchableOpacity style={{marginVertical: 10}}
            onPress={() => {navigation.navigate('Regis')}}
          >
            <Text style={{color: '#FFFF', fontWeight: '700', textDecorationLine: 'underline', fontSize: 15, textAlign: 'left'}}>Register your Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

export default LoginPage

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//     },
//     inputContainer: {
//       width: '80%'
//     },
//     input: {
//       backgroundColor: 'white',
//       paddingHorizontal: 15,
//       paddingVertical: 10,
//       borderRadius: 0,
//       marginTop: 5,
//     },
//     buttonContainer: {
//       width: '80%',
//       justifyContent: 'center',
//       alignItems: 'center',
//       marginTop: 40,
//     },
//     button: {
//       backgroundColor: '#BF1700',
//       width: '100%',
//       padding: 15,
//       borderRadius: 2,
//       alignItems: 'center',
//     },
//     buttonOutline: {
//       backgroundColor: 'white',
//       marginTop: 5,
//       borderColor: 'white',
//       borderWidth: 2,
//     },
//     buttonText: {
//       color: 'white',
//       fontWeight: '700',
//       fontSize: 16,
//       width:50
//     },
//     buttonOutlineText: {
//       color: '#BF1700',
//       fontWeight: '700',
//       fontSize: 16,
//     },
// })