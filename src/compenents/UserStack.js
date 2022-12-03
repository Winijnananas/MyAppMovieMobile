import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import UserScreen from '../screens/UserScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createStackNavigator();


export default function UserStack() {
  return (
    <Stack.Navigator
    initialRouteName="User">
      <Stack.Screen name="User" component={UserScreen} />
      <Stack.Screen name="login" component={LoginScreen} />
    </Stack.Navigator>
  )
}