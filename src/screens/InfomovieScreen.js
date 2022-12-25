import { View, Text, StyleSheet,Image } from 'react-native'
import React from 'react'
import { back } from 'react-native/Libraries/Animated/Easing'

export default function InfomovieScreen({navigation,route:{params:{item}}}) {
    
    return (
        <View
            style={styles.container}>
            {/* <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Detail ♥</Text> */}
            <Image source={{ uri: item.url }} style = {styles.poster} resizeMode="cover"/>
            <Text style={{fontSize:20,fontWeight:'bold'}}>{item.title}</Text>
            <View>

                
            </View>
            <Text>{item.type}</Text>
                  <Text>{item.desc}</Text>
                  <Text>{item.nameactor}</Text>
                  <Text>{item.rate}</Text>
                  <Text>{item.produce}</Text>
                  
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor:'yellow'
    },
    poster:{
        width:"100%",
        height:281,
        justifyContent:"flex-start",
        backgroundColor:"red",

    }
})