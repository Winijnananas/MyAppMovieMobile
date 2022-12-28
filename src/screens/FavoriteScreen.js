import * as React from 'react';

import { 
  Image, 
  View, 
  Dimensions, 
  StyleSheet, 
  Button, 
  SafeAreaView, 
  Text, 
  Alert, 
  LinearGradient,
  ScrollView,
  FlatList
} from 'react-native';
import logo from '../../assets/image/harryPotterOrig.jpg';
import logos from '../../assets/image/bruceAlmighty.jpg' ;
import logoes from '../../assets/image/Dumb_Dumber.jpg' ;
import logoess from '../../assets/image/Forgotten.jpg' ;
import { AntDesign } from '@expo/vector-icons'; 

import { MaterialCommunityIcons} from '@expo/vector-icons';

export default function DetailsScreen({ navigation }) {
    return (
        // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        //     <Text
        //         onPress={() => navigation.navigate('Home')}
        //         style={{ fontSize: 26, fontWeight: 'bold' }}>MARK MOVIE ♥</Text>
        // </View>
        <SafeAreaView style={styles.container}>
     
          <MaterialCommunityIcons name ="delete-outline" size ={60} color={'#3333'}/>
            <Text style={styles.nodata}>No Data </Text>
        

      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 16,
      alignItems:'center'
    },
    title: {
      textAlign: 'left',
      marginVertical: 8,
      fontSize: 15,
    },
    title1: {
      textAlign: 'left',
      marginVertical: 8,
      fontSize: 20,
    },
    title2: {
      textAlign: 'left',
      marginVertical: 8,
      fontSize: 15,
      right: -20,
    },
    title3: {
      textAlign: 'left',
      marginVertical: 8,
      fontSize: 15,
      right: -40,
    },
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    nodata:{
      fontWeight:'bold',
      color:'grey',
      fontSize:25
    }
   
  });