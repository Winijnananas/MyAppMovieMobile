import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'


import SplashScreen from '../screens/SplashScreen';
// import LoginPage from '../../navigation/screens/LoginPage';
import RegisterScreen from '../screens/RegisterScreen';
import UserScreen from '../screens/UserScreen';
import DetailsMovieScreen from '../screens/DetailsMovieScreen';
import BottomTabs from '../navigations/BottomTabs';
import LoginPage from "../screens/LoginPage";
import InfomovieScreen from '../screens/InfomovieScreen';

const Stack =createStackNavigator();

export default function() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Login" component={LoginPage}/>
          <Stack.Screen name="Regis" component={RegisterScreen}/>
          <Stack.Screen name='User' component={UserScreen}/>
          <Stack.Screen name='Details' component={DetailsMovieScreen}/>
          <Stack.Screen name="App" component={BottomTabs} />
          <Stack.Screen name='Info' component={InfomovieScreen}/>
    </Stack.Navigator>
    
  );
}