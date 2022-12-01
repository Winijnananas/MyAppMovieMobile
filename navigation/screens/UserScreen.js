import * as React from 'react';
import { View, Text, Button, TextInput, StyleSheet, SafeAreaView, TouchableOpacity, Image, ImageBackground, Pressable ,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';



export default function UserScreen({ navigation }) {
    const [editprofile, onChangeText] = React.useState("Edit Profile");



    return (
<ScrollView>
        <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ImageBackground style={{ aspectRatio: 247 / 100, height: 170, marginBottom: 50 }} source={{
                uri: "https://i.pinimg.com/originals/71/08/8b/71088b116216f449a4d78d0d8433f10d.jpg"
            }}

            ></ImageBackground>
            
            {/* <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}> */}
                
                <Image style={styles.image} source={require("../../assets/user.png")} />
                <Text style={{ marginBottom: 20, alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>USER01</Text>
                <TouchableOpacity style={styles.loginBtn}
                    onPress={() => navigation.navigate('TabNavigation')}>
                    
                    <Text style={{ color: "black", fontWeight: '',fontStyle:'italic', fontSize: 12 }}>user101.@gmail.com</Text>
                </TouchableOpacity>

                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={editprofile}
                />
                
                {/* button logout */}
                <TouchableOpacity style={styles.loginBtn}
                    onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.logOutBtn}>LogOut</Text>
                </TouchableOpacity>
                    
                <Text>
                    TEST1
                </Text>

                <Text>
                    TEST1
                </Text>

                <Text>
                    TEST1
                </Text>
                <Text>
                    TEST1
                </Text>
            {/* </View> */}
            
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
        marginBottom:200

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
        borderWidth: 0,
        borderRadius: 1,
        padding: 10,
        backgroundColor: "#BF1700",
        alignItems: "center",
        color: "white",
        fontWeight: 'bold',
    
      },


});
