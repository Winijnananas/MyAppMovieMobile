import * as React from 'react';
import  { useState } from "react";
import { StyleSheet, Switch,Button,View, SafeAreaView, Text, Alert,FlatList} from 'react-native';
// const Separator = () => (
//     <View style={styles.separator} />
//   );
export default function SettingsScreen({ navigation }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        //     <Text
        //         onPress={() => navigation.navigate('Home')}
        //         style={{ fontSize: 26, fontWeight: 'bold' }}>Settings Screen</Text>
        // </View>
        <View style={styles.container}>
          <Text style={{fontSize:20,fontWeight:'bold',}}
          onPress={() => navigation.navigate('User')}
          >Change Profile</Text>
          <Text style={{fontSize:20,fontWeight:'bold',}}>Dark Mode</Text>
      <Switch
        style={{left:100,top:-35}}
        trackColor={{ false: "#767577", true: "#FF1F00" }}
        thumbColor={isEnabled ? "#58585A" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      
    </View>
    );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});