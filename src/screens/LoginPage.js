// import { async } from '@firebase/util';
import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View ,ScrollView,SafeAreaView} from 'react-native'
// import { auth } from '../../firbase'
import styles from '../styles';


// const navigation = useNavigation()

const LoginPage = ({navigation}) => { 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // const navigation = useNavigation()

    // useEffect(() => {
    //   const unsubscribe = auth.onAuthStateChanged(user => {
    //     if (user) {
    //       navigation.replace("Home")
    //     }
    //   })
  
    //   return unsubscribe
    // }, [])
  
  //  const handleSignUp =() =>{
  //   auth
  //   .creatUserWithEmailAndPassword(email,password)
  //   .then(UserCredentials=>{
  //       const user = UserCredentials.user;
  //       console.log(user.email);
    
  //   }).catch(error => alert(error.message))
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
      <Text style={styles.title}>Login</Text>
        <View>
          <TextInput 
            style={styles.textInput}
            onChangeText={setEmail}
            value={email}
            placeholderTextColor="#A9A9A9"
            autoCapitalize = 'none'
            placeholder="Username" />

          <TextInput 
            style={styles.textInput}
            onChangeText={setPassword}
            value={password}
            placeholderTextColor="#A9A9A9"
            secureTextEntry={true}
            autoCapitalize = 'none'
            placeholder="Password" />

          <TouchableOpacity
            style={styles.loginButton}
            onPress={() =>navigation.navigate('TabNavigation')}
          >
            <Text style={styles.buttonLabel}>LOGIN</Text>
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