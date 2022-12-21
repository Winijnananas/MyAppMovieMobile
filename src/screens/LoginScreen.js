import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, SafeAreaView, TextInput, StyleSheet, Button, TouchableOpacity,Image} from 'react-native';
import UserScreen from './UserScreen';
import HomeScreen from './HomeScreen';
export default function LoginScreen({ navigation }) {
  const [username, onChangeText1] = React.useState("Username");
  const [password, onChangeNumber] = React.useState("Password");
  return (

    // <NavigationContainer>
    //     <Stack.Navigator initialRouteName ="Login">
    //     <Stack.Screen name="User" component={UserScreen}/>
    //     <Stack.Screen name="Login" component={LoginScreen}/>
    //     </Stack.Navigator>
    // </NavigationContainer>
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#D7D7D7' }}>
      <Image style={styles.image} source={require("../../assets/header-login.png")} />
      <Text style={{ fontSize: 30, alignItems: 'center' }} >Sign In</Text>
      
      <TextInput
        style={styles.input}
        onChangeText={onChangeText1}
        value={username}
        clearButtonMode="always"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={password}
        placeholder="password"
        keyboardType="numeric"
        clearButtonMode="always"
      />
      <TouchableOpacity style={styles.loginBtn}
        onPress={() => navigation.navigate('TabNavigation')}>
        <Text style={{ color: "white", fontWeight: 'bold', fontSize: 19 }}>Sign In</Text>
      </TouchableOpacity>
      

      <TouchableOpacity style={styles.faceBtn}
        onPress={() => navigation.navigate('Welcome')}>
        <Text style={{ color: "white", fontWeight: 'bold', fontSize: 19 }}>Login with Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.googleBtn}
        onPress={() => navigation.navigate('Welcome')}>
        <Text style={{ color: "#404040", fontWeight: 'bold', fontSize: 19 }}>Login with Google</Text>
      </TouchableOpacity>
      <Text style={{right:135,marginBottom:10,color:"#BF1700",fontWeight:'bold',fontStyle:'italic'}}
      onPress={() => navigation.navigate('Regis')}
      >Register?</Text>
      
      {/* <Button style={styles.loginBtn}
        title="Sign In"
        color="#BF1700"
        
        onPress={() => navigation.navigate('Welcome')}
      /> */}
    </SafeAreaView>

  );
}
const styles = StyleSheet.create({
  input: {
    margin: 12,
    borderWidth: 0,
    borderRadius: 1,
    padding: 10,
    backgroundColor: "#A5A5A5",
    width: "80%",
    alignItems: "center",
    color: '#404040'
  },
  loginBtn: {
    borderWidth: 0,
    borderRadius: 0,
    padding: 10,
    backgroundColor: "#BF1700",
    width: "80%",
    alignItems: "center",
    color: "white",
    fontWeight: 'bold',
    marginBottom:10
  },
  image: {
    marginBottom: 1,
    height: 100,
    width: 450,
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
  marginBottom:8
},
googleBtn:{
  borderWidth: 0,
  borderRadius: 0,
  padding: 6,
  backgroundColor: "#FFF",
  width: "80%",
  alignItems: "center",
  color: "white",
  fontWeight: 'bold',
  marginBottom:5
}


});


