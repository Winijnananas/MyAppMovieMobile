import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, SafeAreaView, TextInput, StyleSheet, Button, TouchableOpacity, Image, Pressable } from 'react-native';

export default function RegisterScreen({ navigation }) {
    const [username, onChangeText1] = React.useState("Username");
    const [email, onChangeText2] = React.useState("Email");
    const [password, onChangeText3] = React.useState("Password")
    const [confirm, onChangeText4] = React.useState("Confirm Password");

    return (

        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#D7D7D7' }}>
            <Text style={{ fontSize: 30, fontWeight: 'bold', marginBottom: 5, right: 120 }}>Register</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText1}
                value={username}
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeText2}
                value={email}
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeText3}
                value={password}
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeText4}
                value={confirm}
            />
            <TouchableOpacity style={styles.loginBtn}
                onPress={() => navigation.navigate('Login')}>
                <Text style={{ color: "white", fontWeight: 'bold', fontSize: 19 }}>SUBMIT</Text>
            </TouchableOpacity>

        </SafeAreaView>

    )
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
        marginBottom: 10
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