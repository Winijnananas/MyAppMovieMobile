import { View, Text, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { Component, useEffect, useState } from 'react';
import reminderBow from 'react-native-ico-material-design/src/data/material-design/reminder-bow';
import Movie from '../models/Movie';
import axios from 'axios';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';


//const API_URL="https://www.themoviedb.org/movie/";

//const API_MOVIE="http://192.168.1.31:3000/movies";

const Home = ({ navigation }) => {
  const API_MOVIE = "http://192.168.47.1:3000/movies";
  const API_POP = "http://192.168.47.1:3000/populars";
  const [movies, setMovies] = useState([]);
  const [moviesPop ,SetPopular] = useState([]);
  // const [isLoading, setIsLoading] =useState(true);
  // const [search, setSearch] = useState('');
  // const [filteredDataSource, setFilteredDataSource] = useState([]);
  // const [masterDataSource, setMasterDataSource] = useState([]);

  useEffect(() => {
    axios.get(API_MOVIE)
      .then(function (response) {
        setMovies(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
  });
  useEffect(() => {
    axios.get(API_POP)
      .then(function (response) {
        SetPopular(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
  });



  //function Search







  return (
    // <View
    //   style={styles.container}>
    //   <Text style={{fontSize:30,fontWeight:'bold'}}>Home ♥</Text>
    //   </View>
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View style={styles.labelSearch}>
        <Text style={{color:"white"}}>
          Search
        </Text>
        <MaterialCommunityIcons name="magnify" size={25} color="white"/>
      </View>
      <View>
        <Text style={styles.header}>Top rated movies most watched TODAY🔥</Text>
      </View>
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    style={{textAlign:'left'}}
    > 
      { moviesPop.map((item, key) => {
          return (
            <TouchableOpacity
            style={{marginLeft:5}}
              key={key} onPress={() => navigation.navigate('Info', { item })}>
              <Image source={{ uri: item.url }} style={styles.poster} resizeMode="cover" />
              <Text style={styles.text}>{item.title}</Text>
              
            </TouchableOpacity>
        
          )
          
        })
      }
    </ScrollView>
    <View>
        <Text style={styles.headerNormal}>Top rated movies most watched TODAY🔥</Text>
      </View>
      <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    style={{textAlign:'left'}}
    > 
      { movies.map((item, key) => {
          return (
            <TouchableOpacity
            style={{marginLeft:5}}
              key={key} onPress={() => navigation.navigate('Info', { item })}>
              <Image source={{ uri: item.url }} style={styles.poster} resizeMode="cover" />
              <Text style={styles.text}>{item.title}</Text>
              
            </TouchableOpacity>
        
          )
          
        })
      }
    </ScrollView>
    </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:5,
    paddingVertical:20,
    backgroundColor:"#4d4d4d",
  },
  text: {
    flexDirection: "column",
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color:"white"


  },
  poster: {

    width: 150, height: 250,
    marginTop: 5,
    borderRadius: 2,
    marginRight: 5,
  },
  header:{
    marginTop:0,
    fontSize:15,
    backgroundColor:"#BF1700",
    paddingHorizontal:10,
    paddingVertical:5,
    borderRadius:0,
    color:"#fff",
    alignContent:'center',
    justifyContent:'center',
    textAlign:'center',
    width:"100%",
    fontWeight:'bold',
    

    //fontWeight:'bold'
   

  },
  headerNormal:{
    marginTop:5,
    fontSize:15,
    backgroundColor:"#27AE60",
    paddingHorizontal:10,
    paddingVertical:5,
    borderRadius:5,
    color:"#fff",
    alignContent:'center',
    justifyContent:'center',
    textAlign:'center',
    width:"100%",
    fontWeight:'bold',
    //marginBottom:200,
  },
  labelSearch:{
    marginTop:10,
    fontSize:25,
    fontWeight:'bold',
    justifyContent:'space-between',
    flexDirection:"row",
    backgroundColor:'#1B1B1B',
    width:"100%",
    paddingHorizontal:10,
    paddingVertical:5,
    borderRadius:0,
    


    
  }
})


export default Home;
