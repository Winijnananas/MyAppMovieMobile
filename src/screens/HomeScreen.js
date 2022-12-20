import AsyncStorage from '@react-native-async-storage/async-storage';
import React,{ useState,useEffect} from 'react';
import Header from '../compenents/Header';
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
  ScrollView ,
  ImageBackground,
  Pressable
} from 'react-native';

import logo from '../../assets/image/dieHard.jpg';
import logogo from '../../assets/image/l-intro.jpg' ;
import logos from '../../assets/image/theDarkKnight.jpg' ;
import logoes from '../../assets/image/bros.jpg' ;
import logoess from '../../assets/image/blackAdam.jpg' ;
import logoesse from '../../assets/image/projectWolfHunting.jpg' ;
import { AntDesign } from '@expo/vector-icons'; 
import DetailsMovieScreen from './DetailsMovieScreen';
const { height, width } = Dimensions.get("window");

const setHeight = (h) => (height / 100) * h;
const setWidth = (w) => (width / 100) * w;

const Separator = () => (
  <View style={styles.separator} />
);

export default function HomeScreen({ navigation }) {
  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const fetchUser = async ()  =>{
    const accessToken = await AsyncStorage.getItem('@accessToken')
    const response = await fetch('https://www.melivecode.com/api/auth/user',{
        method:'GET',
        headers:{
            'Content-Type':'application/json',
            'Authorization' : 'Bearer ' + accessToken
        },
    })
    const data = await response.json()
    // console.log(data)
    // if(data.status === 'forbidden'){
    //     navigation.navigate('Regis')
    // }
    
    setUser(data.user)
    setIsLoading(false)
    
}
useEffect(()=>{
    fetchUser()
},[isLoading])
    return (

    <SafeAreaView style={styles.container}>
<ScrollView>
  <View>
    <View>
      <Text></Text>
      <Text></Text>
    </View>
    <View style={styles.fixToText}>
      <Text style={styles.title1} >
      
      {/* Now Showing */}
      <Text style={{fontWeight:'bold',fontSize:30}}>Hello, </Text>
      </Text>
      <Text style={styles.title} size={5}>
      VIEW ALL
      </Text>
    </View>
  </View>
  <View>
    <Text></Text>
  </View>
  <View style={styles.fixToText}>
    <Button
      title="  All  "
      color="#BF1700"
      onPress={() => Alert.alert('All button ')}
    />
    <Button
      title="  Action  "
      color="#BF1700"
      onPress={() => Alert.alert('Action button ')}
    />
    <Button
      title="  Comedy  "
      color="#BF1700"
      onPress={() => Alert.alert('Comedy button ')}
    />
    <Button
      title="  Romance  "
      color="#BF1700"
      onPress={() => Alert.alert('Romance  button ')}
    />
  </View>
  <View style={styles.fixToText}>

    <View>
      <Text></Text>
      <Text></Text>
      
      <Image source={logo} 
      style={{ width: 180, height: 300 }} 
      />
      <View style={styles.fixToText}>
        <Text style={styles.title} 
        onPress={() => navigation.navigate('Details')}>
        Die Hard (1988)
        </Text>
        <AntDesign style={{padding: 10, right: -5}} name="heart" size={20} color="red" />
        <Text style={styles.title}>
        90 %
        </Text>
      </View>
    </View>
    <View>
      <Text style={styles.title}>
      </Text>
      <Image source={logos} style={{ width: 180, height: 300  }} />
      <View style={styles.fixToText}>
        <Text style={styles.title}>
        The Dark Knight (2008)
        </Text>
      </View>
      <View style={styles.fixToText}>
        <AntDesign style={{padding: 10, right: -115}} name="heart" size={20} color="red" />
        <Text style={styles.title}>
        80 %
        </Text>
      </View>
      
    </View>
  </View>

  <View>
    <View>
      <Text></Text>
    </View>
    <View style={styles.fixToText}>
      <Text style={styles.title1} >
      Coming Soon
      </Text>
      <Text style={styles.title} size={5}>
      VIEW ALL
      </Text>
    </View>
  </View>
  <View style={styles.fixToText}>
    

    
    <View>
      <Text></Text>
      <Text></Text>
      <Image source={logoes} style={{ width: 130, height: 200 }} />
      <View style={styles.fixToText}>
        <Text style={styles.title} >
        Bros
        </Text>
      </View>
    </View>
    <View>
      <Text style={styles.title}>
      </Text>
      <Image source={logoess} style={{  width: 130, height: 200, right: -20}} />
      <View style={styles.fixToText}>
        <Text style={styles.title2}>
        Black Adam
        </Text>
      </View>
    </View>
    <View>
      <Text style={styles.title}>
      </Text>
      <Image source={logoesse} style={{  width: 100, height: 200, right: -40 }} />
      <View style={styles.fixToText}>
        <Text style={styles.title3}>
        project Wolf Hunting
        </Text>
      </View>
    </View>
  </View>
  <Separator />
</ScrollView>
</SafeAreaView>
    );
    
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
    backgroundColor:'#FFFF'
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
 
});
