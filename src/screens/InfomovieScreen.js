import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView ,Dimensions,Button} from 'react-native'
import React, { useState } from 'react'
//import { Video } from 'expo-av';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import YoutubePlayer from 'react-native-youtube-iframe';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Fav from './Fav';
export default function InfomovieScreen({ navigation, route: { params: { item } } }) {
   // const video = React.useRef(null);
    //const [playing,setPlaying] = useState(false);
    const [status, setStatus] = React.useState({});


// const Player =()=>{
//     const [playing,setPlaying] =useState(false);
// }

async function toggleFavorite(itemId) {
    const[item,setItem] = React.useState([]);
    try {
      // Get the current favorite status of the item
      const value = await AsyncStorage.getItem(`favorite-${itemId}`);
  
      // Toggle the favorite status
      const isFavorite = value === 'true' ? 'false' : 'true';
  
      // Store the new favorite status in AsyncStorage
      await AsyncStorage.setItem(`favorite-${itemId}`, isFavorite);
    } catch (error) {
      // Handle errors here
    }
  }
    return (
        <SafeAreaView
            style={styles.container}>
            <ScrollView
            showsVerticalScrollIndicator={false}
            >
                {/* <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Detail ♥</Text> */}
                <Image source={{ uri: item.bigurl }} style={styles.poster} resizeMode="cover" />
                <View style={styles.containDetail}>
                    <View style={styles.containTitle}>
                        <Text style={{ fontSize: 25, fontWeight: 'bold', marginTop:5,flexDirection: "row",shadowOffset: {
                                width: 0,
                                height: 3,
                            },
                            shadowOpacity: 0.4,
                            shadowRadius: 1, }}>{item.title}</Text>

                        <View style={{
                            width: 50, height: 48, backgroundColor: "#474747", borderRadius: 25, justifyContent: 'space-between', alignItems: 'center'}}>
                            <Text style={{ fontSize: 20, marginTop: 8, fontWeight: 'bold',color:'#fff' }}>{item.rate}</Text>
                        </View>
                    </View>
                    <View style={styles.containDetailtwo}>
                    <Text style={{color:"#4d4b4b",fontWeight:'bold'}}>YEAR : {item.year}</Text>
                    <Text style={{color:"#4d4b4b",fontWeight:'500'}}>Time : {item.time}</Text>
                </View>
                </View>
                
                
                <View style={styles.containTitle}>
                <Text style={[styles[item.type], styles.type]}>{item.type}</Text>
               
                <Fav/>
                
                </View>
                
            

                <View style={styles.containDetail}>
                    <Text style={styles.labelOverview}>Overview 🗒️</Text>
                    <Text style={{ padding: 5, backgroundColor: '#f2f2f2',textAlign: 'center' }}>{item.desc}</Text>
                </View>
                <View style={styles.containDetail}>
                    <Text style={styles.labeltile}>Trailer 🎞️</Text>
                </View>
                <View style={styles.containDetail}>
                    
                    <YoutubePlayer
                    height={220}
                    play={false}
                    videoId={item.idyt}
                    />
                    
                </View>
                <View style={styles.containDetail}>
                    <Text style={styles.labelOverview}>Producer 🎥</Text>
                    <Text style={{ padding: 5, backgroundColor: '#f2f2f2',textAlign: 'left' }}>{item.produce}</Text>
                </View>
                <View style={styles.containDetail}>
                    <Text style={styles.labelOverview}>Actor 🎭</Text>
                    <Text style={{ padding: 5, backgroundColor: '#f2f2f2',textAlign: 'left' }}>{item.nameactor.join(" , ")}</Text>
                </View>
                <TouchableOpacity
                    style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', padding: 5 }}
                    onPress={() => navigation.navigate('App')}
                >
                    <Text style={{
                        backgroundColor: "#BF1700", padding: 10, fontSize: 20, fontWeight: 'bold', color: '#fff', textAlign: 'center', width: "100%", borderRadius: 10, shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 3,
                        },
                        shadowOpacity: 5,
                        shadowRadius: 4.65,
                    }}>Back to Home</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#FFF',
    },
    type:{
        padding: 5,textAlign: 'center'
    },
    containDetailtwo:{
        padding:6,
        flex: 1,
        paddingBottom:5,
        flexDirection:'row',
        justifyContent: "space-between",
        backgroundColor:'#f5f5f5',

    },
    poster: {
        width: "100%",
        height: 281,
        justifyContent: "flex-start",
        backgroundColor: "red",

    },
    labeltile: {
        fontSize: 20, fontWeight: 'bold',
        color:'#333030'
    },
    labelOverview: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left'

    },
    containDetail: {
        padding:6,
        flex: 1,
        color:'#333030'
    },
    containTitle: {
        flexWrap: "wrap",
        padding: 4,
        flexDirection: "row",
        justifyContent: "space-between",
    
    },
    Action: {
        backgroundColor: '#ff4000',
        width: "20%", textAlign: 'center', borderRadius: 0, padding: 5, marginTop: 2, color: 'white', fontWeight: 'bold'
    },
    Funny: {
        backgroundColor: '#33ff33',
        width: "20%", textAlign: 'center', padding: 5, marginTop: 2, color: 'white', fontWeight: 'bold', borderRadius: 20,
        padding: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
    },
    ActionAdventure: {
        backgroundColor: '#ff751a',
        width: "35%", textAlign: 'center', borderRadius: 10, padding: 5, marginTop: 2, color: 'white', fontWeight: 'bold'
    },
    Fantasy: {
        backgroundColor: '#c653c6',
        width: "20%", textAlign: 'center', padding: 5, marginTop: 2, color: 'white', fontWeight: 'bold', borderRadius: 0,
        padding: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
    },
    Comedy:{
        backgroundColor: '#ffcc99',
        width: "20%", textAlign: 'center', padding: 5, marginTop: 2, color: 'white', fontWeight: 'bold', borderRadius: 0,
        padding: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
    },
    War:{
        backgroundColor: '#ff6633',
        width: "20%", textAlign: 'center', padding: 5, marginTop: 2, color: 'white', fontWeight: 'bold', borderRadius: 0,
    },
    Romance:{
        backgroundColor: '#ff3385',
        width: "20%", textAlign: 'center', padding: 5, marginTop: 2, color: 'white', fontWeight: 'bold', borderRadius: 0,
    },
    Horror:{
        backgroundColor: '#6b6b47',
        width: "20%", textAlign: 'center', padding: 5, marginTop: 2, color: 'white', fontWeight: 'bold', borderRadius: 0,
    },
    Animation:{
        backgroundColor: '#ccff99',
        width: "20%", textAlign: 'center', padding: 5, marginTop: 2, color: 'white', fontWeight: 'bold', borderRadius: 0,
    },

});