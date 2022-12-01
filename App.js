import * as React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  
} from 'react-native';
import MainContainer from './navigation/MainContainer';
import Navigation from './navigation/Navi';

function App() {
  return (
    <SafeAreaView style={styles.root}>
      {/* <MainContainer/> */}
      <Navigation/>
    </SafeAreaView>
    
  );
  
  
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#1C1D1B',
    
  
  }
});


export default App;