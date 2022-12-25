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
const { height, width } = Dimensions.get("window");

const setHeight = (h) => (height / 100) * h;
const setWidth = (w) => (width / 100) * w;

const Separator = () => (
  <View style={styles.separator} />
);

export default function DetailsScreen({ navigation }) {
    return (
        // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        //     <Text
        //         onPress={() => navigation.navigate('Home')}
        //         style={{ fontSize: 26, fontWeight: 'bold' }}>MARK MOVIE ♥</Text>
        // </View>
        <SafeAreaView style={styles.container}>
        <ScrollView>
          <Text style={{flex: 1, alignItems: 'center', justifyContent: 'center',alignContent:'center'}}>
          Favorite Screen ♥
          </Text>
          {/* <View>
            <View>
              <Text></Text>
              <Text></Text>
            </View>
            <View style={styles.fixToText}>
              <Text style={styles.title1} >
              Favorites
              </Text>
              <Text style={styles.title}>
              VIEW ALL
              </Text>
            </View>
          </View>
          <View style={styles.fixToText}>
            <View>
              <Text></Text>
              <Text></Text>
              <Image source={logo} style={{ width: 180, height: 300 }} />
              <View style={styles.fixToText}>
                <Text style={styles.title} >
                Harry Potter Saga
                </Text>
                <AntDesign style={{padding: 10, right: -5}} name="heart" size={20} color="red" />
                <Text style={styles.title}>
                99 %
                </Text>
              </View>
            </View>
            <View>
              <Text style={styles.title}>
              </Text>
              <Image source={logos} style={{ width: 180, height: 300  }} />
              <View style={styles.fixToText}>
                <Text style={styles.title}>
                Bruce Almighty
                </Text>
                <AntDesign style={{padding: 10, right: -9}} name="heart" size={20} color="red" />
                <Text style={styles.title}>
                98 %
                </Text>
              </View>
              
            </View>
          </View>
    
          <View style={styles.fixToText}>
            <View>
              <Text></Text>
              <Text></Text>
              <Image source={logoes} style={{ width: 180, height: 300 }} />
              <View style={styles.fixToText}>
                <Text style={styles.title} >
                Dumb & Dumber
                </Text>
                <AntDesign style={{padding: 10, right: -5}} name="heart" size={20} color="red" />
                <Text style={styles.title}>
                99 %
                </Text>
              </View>
            </View>
            <View>
              <Text style={styles.title}>
              </Text>
              <Image source={logoess} style={{ width: 180, height: 300  }} />
              <View style={styles.fixToText}>
                <Text style={styles.title}>
                Forgotten
                </Text>
                <AntDesign style={{padding: 10, right: -25}} name="heart" size={20} color="red" />
                <Text style={styles.title}>
                100 %
                </Text>
              </View>
              
            </View>
          </View>
    
          <Separator /> */}
        </ScrollView>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 16,
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