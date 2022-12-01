import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import UserScreen from '../UserScreen'
import EditScreen from '../EditScreen'

const Stack = createStackNavigator()
const ProfileStack = () =>{
  return(
    <Stack.Navigator>
      <Stack.Screen
      name='UserScreen'
      component={UserScreen}
      />
      <Stack.Screen
      name='EditScreen'
      component={EditScreen}
      />
    </Stack.Navigator>
  )
}
export default ProfileStack;

