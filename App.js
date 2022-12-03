import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Routers from './src/routers';

const Stack = createStackNavigator();

function App() {
  return (
    // <SafeAreaView style={styles.root}>
    //   {/* <MainContainer/> */}
    //   <Navigation/>
    // </SafeAreaView>
    
   
      // <SafeAreaView style={styles.root}>
      //   <MainContainer/> 
      //    <Navigation/>
        
      // </SafeAreaView>
      <>
      <StatusBar style='light'/>
      <NavigationContainer>
        <Routers/>
        
      </NavigationContainer>
      </>
 
  );
  
  
};
// const styles = StyleSheet.create({
//   root: {
//     flex: 1,
//     backgroundColor: '#1C1D1B',
    
  
//   }
// });


export default App;