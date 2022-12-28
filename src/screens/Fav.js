import { View, Text } from 'react-native'
import React,{ useEffect }from 'react'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import axios from 'axios';
import { response } from 'express';

function Fav() {

    // const variable={
    //     userFrom:,
    //       id:,
    //       title:,
    //       url:,
    // }




    // useEffect(()=>{
    //     axios.post('/api/favorite/favoriteNumber',variable)
    //     .then(response=>{
    //         if(response.data.success){

    //         }else{
    //             alert('Failed to get favnumber')
    //         }
    //     })
    // })



  return (
    <View>
      <MaterialCommunityIcons name="heart-outline" 
                color={'red'}
                style={{alignItems:'flex-end',paddingRight:20}}
                size={30}
                // onPress={() => toggleFavorite(item.id)} title="Toggle Favorite" 
                
                />
    </View>
  )
}
export default Fav;