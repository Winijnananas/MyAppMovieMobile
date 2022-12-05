import { View, Text ,SafeAreaView,StyleSheet } from 'react-native'
import React,{ Component } from 'react';
import reminderBow from 'react-native-ico-material-design/src/data/material-design/reminder-bow';

export default class Home extends Component{
    _isMount = false;


    state={
        isLoading: false,
        recentMovies: [],
        popularMovies:[],
    };
    componentDidMount(){
        this._isMount = true;
    
    return fetch('')
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


  
