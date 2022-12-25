import { View, Text,Image,StyleSheet } from 'react-native'
import React from 'react'

export default function FeedScreen() {
  return (
    <View
      style={styles.item}>
        
        
      <Text style={{fontSize:30,fontWeight:'bold',}}>FEED SCREEN👋</Text>
  
    </View>
  )
}

const styles = StyleSheet.create({
  item:{
    flexDirection:"column",
    flexWrap:"wrap",
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  poster:{
    width:170,
    height:255,
    borderRadius:10,
    marginBottom:10,
  }
})