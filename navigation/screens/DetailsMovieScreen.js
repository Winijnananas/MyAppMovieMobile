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
  ScrollView 
} from 'react-native';

import logo from '../../assets/image/bruce.jpg';
import logogo from '../../assets/image/l-intro.jpg' ;
import logos from '../../assets/image/Alan_Rickman.jpg' ;
import logoes from '../../assets/image/BonnieBedelia.jpg' ;
import { AntDesign } from '@expo/vector-icons'; 
// import { getPoster, getLanguage } from '../services/MovieService';
// import COLORS from "../constants/Colors";
// import FONTS from "../constants/Fonts";
// import { Video, AVPlaybackStatus } from 'expo-av';

const { height, width } = Dimensions.get("window");

const setHeight = (h) => (height / 100) * h;
const setWidth = (w) => (width / 100) * w;

const Separator = () => (
  <View style={styles.separator} />
);

export default function DetailsMovieScreen({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Detail Screen</Text>
      <ScrollView>
        <View>
        {/* <Video style={styles.video}
            source={{
              uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
            }}
            // useNativeControls
            // resizeMode="contain"
            // isLooping
            // onPlaybackStatusUpdate={status => setStatus(() => status)}
          /> */}
          {/* <Video  
              source={{ url: 'https://youtu.be/gYWvwkXreaI'}}
          /> */}
          {/* <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
            <Text style={styles.buttonText}>
              Sign in with Facebook
            </Text>
          </LinearGradient> */}
          <View>
            <Text></Text>
            <Text></Text>
          </View>
          <View style={styles.fixToText}>
          <AntDesign name="left" size={24} color="black" /> 
          <Image
              source={logogo} style={{ width: 355, height: 200}}
          />
          </View>
          <View style={styles.fixToText}>
            <Text style={styles.title1} >
            Die Hard (1988)
            </Text>
            <AntDesign style={{padding: 13, right: -85}} name="heart" size={20} color="red" />
            <Text style={styles.title1}>
            90 %
            </Text>
          </View>
          <Text style={styles.title}>
          Action , Thriller  |   2 hr 12 min
          </Text>
          <Text style={styles.title}>
          English
          </Text>
        </View>
      <View>
        <Text></Text>
      </View>
      <View style={styles.fixToText}>
        <Button
          title="  2D  "
          color="#000000"
          onPress={() => Alert.alert('2D button ')}
        />
        <Button
          title="  3D  "
          color="#000000"
          onPress={() => Alert.alert('3D button ')}
        />
        <Button
          title="  3D 4DX  "
          color="#000000"
          onPress={() => Alert.alert('3D 4DX button ')}
        />
        <Button
          title="  1MAX 3D  "
          color="#000000"
          onPress={() => Alert.alert('1MAX 3D  button ')}
        />
      </View>
      <View>
        <Text style={styles.title}>
        SYNOPSIS  
        </Text>
        <Text style={styles.title}>
        หนังแอ็คชั่น เรื่องนี้เล่าถึงในวันคริสต์มาสอีฟ จอห์น แมคเคลน ตำรวจนิวยอร์ก 
        เดินทางมาที่อาคารนากาโตมิในลอสแอนเจลิสเพื่อร่วมงานเลี้ยงวันคริสต์มาสกับฮอลลี 
        ภรรยาที่ตอนนี้แยกกันอยู่ ขณะที่แมคเคลนกำลังเปลี่ยนชุด กลุ่มติดอาวุธนำโดยฮันส์ 
        กรูเบอร์ได้บุกเข้ามาในอาคาร แขกทั้งหมดถูกจับเป็นตัวประกัน ส่วนแมคเคลนลอบหนีออกมาได้ 
        </Text>
        
      </View>
      <Separator />
      <View style={styles.fixToText}>
        <View>
          <Text style={styles.title}>
          CAST
          </Text>
          <Image source={logo} style={{ width: 100, height: 130 }} />
          <Text style={styles.title}>
          Bruce Willis
          </Text>
        </View>
        <View>
          <Text style={styles.title}>
          </Text>
          <Image source={logos} style={{ width: 100, height: 130 }} />
          <Text style={styles.title}>
          Alan Rickman
          </Text>
        </View>
        <View>
          <Text style={styles.title}>
          </Text>
          <Image source={logoes} style={{ width: 100, height: 130 }} />
          <Text style={styles.title}>
          Bonnie Bedelia
          </Text>
        </View>
      </View>
      <Separator />
      <View style={styles.fixToText}>
        <View>
          <Text style={styles.title}>
          CAST
          </Text>
          <Image source={logo} style={{ width: 100, height: 130 }} />
          <Text style={styles.title}>
          Bruce Willis
          </Text>
        </View>
        <View>
          <Text style={styles.title}>
          </Text>
          <Image source={logos} style={{ width: 100, height: 130 }} />
          <Text style={styles.title}>
          Alan Rickman
          </Text>
        </View>
        <View>
          <Text style={styles.title}>
          </Text>
          <Image source={logoes} style={{ width: 100, height: 130 }} />
          <Text style={styles.title}>
          Bonnie Bedelia
          </Text>
        </View>
      </View>
      
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
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
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
    textAlign: 'right',
    marginVertical: 8,
    fontSize: 20,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  moviePosterImageContainer: {
    height: setHeight(35),
    width: setWidth(145),
    alignItems: "center",
    position: "absolute",
    left: setWidth((100 - 145) / 2),
    top: 4,
    // borderBottomRightRadius: 300,
    // borderBottomLeftRadius: 300,
    elevation: 8,
  }
});

