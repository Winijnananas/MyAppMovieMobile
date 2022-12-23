import { View, Text ,SafeAreaView,StyleSheet } from 'react-native'
import React,{ Component, useEffect, useState} from 'react';
import reminderBow from 'react-native-ico-material-design/src/data/material-design/reminder-bow';
import Movie from '../models/Movie';


//const API_URL="https://www.themoviedb.org/movie/";
export default class Home extends Component{
    _isMount = false;


    state={
        isLoading: false,
        recentMovies: [],
        popularMovies:[],
    };
    componentDidMount(){
        this._isMount = true;
    
    return fetch('https://api.themoviedb.org/3/movie/550?api_key=5a555c8921115e8d439c4c223ff2db28'
    )
    .then((response) => response.json())
    .then((responseJson) =>{
        var popularMovies =[];
        responseJson.popularMovies.forEach((movie)=> {
            console.log(movie);
        })

    })
    .catch((error) => console.error(error));
    }
    
    componentWillUnmount(){
        this._isMount = false;
    }



    render(){
        return (
            <View
              style={styles.container}>
              <Text style={{fontSize:40,fontWeight:'bold'}}>Home</Text>
              </View>
          );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})


  
