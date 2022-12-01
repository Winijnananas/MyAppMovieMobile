import { View, Text, SafeAreaView, Image, StyleSheet, Button } from 'react-native'
import React from 'react'
import LoginScreen from './LoginScreen';


export default function WelcomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>

            <Image style={styles.image} source={require("../../assets/master2.png")} />
            <Text style={styles.Textcustom}>
                <Button
                    title="Welcome"
                    color="#BF1700"
                    onPress={() => navigation.navigate('Login')}
                />
            </Text>

            <Text style={styles.TextComp}>@Develop by SWE</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    image: {
        marginBottom: 1,
        height: 350,
        width: 350,

    },
    Textcustom: {
        fontSize: 20,
        fontWeight: 'bold',
        // color:'white'


    },
    TextComp: {

        fontSize: 10,
        color: 'gray',
        padding: 10,
        fontWeight: 'bold'
    }


});

