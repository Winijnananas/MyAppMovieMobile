import { View, Text ,SafeAreaView,StyleSheet,ScrollView,TouchableOpacity,Image } from 'react-native'
import React,{ Component, useEffect, useState} from 'react';
import reminderBow from 'react-native-ico-material-design/src/data/material-design/reminder-bow';
import Movie from '../models/Movie';
import axios from 'axios';


//const API_URL="https://www.themoviedb.org/movie/";


const API_MOVIE="http://192.168.1.31:3000/movies";
const Home =({navigation})=>{

const [movies, setMovies] = useState([]);
const [isLoading, setIsLoading] =useState(true);
const [search, setSearch] = useState('');
const [filteredDataSource, setFilteredDataSource] = useState([]);
const [masterDataSource, setMasterDataSource] = useState([]);

useEffect(()=>{
    // fetch(API_MOVIE)
    // .then((response) => response.json())
    // .then((responseJson) => {
    //   setFilteredDataSource(responseJson);
    //   setMasterDataSource(responseJson);
    // })
    // .catch((error) => {
    //   console.error(error);
    // });


    axios.get(API_MOVIE)
    .then(function(response){
        setMovies(response.data);
    })
    .catch(function(error){
        console.log(error);
    })
})

//function Search





  

        return (
            // <View
            //   style={styles.container}>
            //   <Text style={{fontSize:30,fontWeight:'bold'}}>Home ♥</Text>
            //   </View>
            <ScrollView>
      {
        movies.map((item, key) => {
         
          return(
            <TouchableOpacity key={key} onPress={()=>navigation.navigate('Info',{item})}>
              <View>
              <Image source={{ uri: item.url }} style = {{ width: 100, height: 100 }} resizeMode="cover"/>
                  <Text style={{fontSize:20,fontWeight:'bold'}}>{item.title}</Text>
                  <Text style={{fontSize:20,fontWeight:'bold'}}>{item.type}</Text>
                  <Text style={{fontSize:15,fontWeight:'bold',color:'blue'}}>{item.rate}</Text>
            
              </View>
            </TouchableOpacity> 
          )
        })
      }
    </ScrollView>
          );
    }


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})


export default Home;
