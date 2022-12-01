
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
import * as React from 'react';
import logo from '../../assets/image/dieHard.jpg';
import logogo from '../../assets/image/l-intro.jpg' ;
import logos from '../../assets/image/theDarkKnight.jpg' ;
import logoes from '../../assets/image/bros.jpg' ;
import logoess from '../../assets/image/blackAdam.jpg' ;
import logoesse from '../../assets/image/projectWolfHunting.jpg' ;
import { AntDesign } from '@expo/vector-icons'; 
const { height, width } = Dimensions.get("window");

const setHeight = (h) => (height / 100) * h;
const setWidth = (w) => (width / 100) * w;

const Separator = () => (
  <View style={styles.separator} />
);



export default function Header() {
    return (
        // <View>
        //     {/* <Text>Header</Text> */}
        //     <ImageBackground style={{ aspectRatio: 247 / 100, height: 170 }} source={{
        //         uri: "https://i.pinimg.com/originals/71/08/8b/71088b116216f449a4d78d0d8433f10d.jpg"
        //     }}
        //     >
        //         <Pressable>
        //             <Text style={{
        //                 position: "absolute",
        //                 borderRadius: 25,
        //                 height: 130, backgroundColor: "#FFF",
        //                 padding: 10,
        //                 top: 140, left: 35,
        //                 width: "82%"
        //             }}>
        //                 Releasing in 1 days
                        
        //             </Text>
        //             <View>
        //                 <Text style={{color:"red",padding:200,right:155}}>TEST1</Text>
        //                 <Text></Text>
        //             </View>
                    
        //         </Pressable>
        //     </ImageBackground>
        // </View>
//         <SafeAreaView style={styles.container}>
    
//   </SafeAreaView>
<SafeAreaView style={styles.container}>
<ScrollView>
  <View>
    <View>
      <Text></Text>
      <Text></Text>
    </View>
    <View style={styles.fixToText}>
      <Text style={styles.title1} >
      Now Showing
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
      <Image source={logo} style={{ width: 180, height: 300 }} />
      <View style={styles.fixToText}>
        <Text style={styles.title} >
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
    )
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