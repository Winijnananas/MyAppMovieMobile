import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SettingsScreen from '../SettingsScreen'

const Stack = createStackNavigator()
const SettingStack = () =>{
  return(
    <Stack.Navigator>
      <Stack.Screen
      name='SettingScreen'
      component={SettingDetails}
      />
      <Stack.Screen
      name='EditScreen'
      component={EditScreen}
      />
    </Stack.Navigator>
  )
}
export default ProfileStack;

