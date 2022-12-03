import React, { useState } from "react";
import { View, SafeAreaView, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

// import style
// import styles from "../styles";
import styles from "../styles";

export default function AboutScreen() {
  return(
    
    <SafeAreaView style={styles.container}>
        <ScrollView>
      <Text style={styles.settingTitle}>About</Text>
      <View style={{backgroundColor: '#1B1B1B', width: '100%'}}>
        <Text style={{color: '#FFF', fontWeight: '700', marginBottom: 20,padding:20}}>
          The Application Currently in development, there may be some changes.
          
        </Text>
        <Text style={{color: '#FFF', fontWeight: '700', marginBottom: 20, display: 'flex', flexDirection: 'row', left:100}}>
          <View style={{backgroundColor: 'gray', padding: 3, borderRadius: 5, borderWidth: 1}}>
            <Text style={{color: '#FFFF', fontWeight: '700'}}>@Winij</Text>
          </View>
          <View style={{backgroundColor: 'gray', padding: 3, borderRadius: 5, borderWidth: 1}}>
            <Text style={{color: '#FFF', fontWeight: '700'}}>@Duakamon</Text>
          </View>
          <View style={{backgroundColor: 'gray', padding: 3, borderRadius: 5, borderWidth: 1}}>
            <Text style={{color: '#FFFF', fontWeight: '700'}}>@Nalinee</Text>
          </View>
        </Text>
        
      </View>
      </ScrollView>
      
    </SafeAreaView>
   
  );
}