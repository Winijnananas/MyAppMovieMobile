import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'




const Stack = createStackNavigator()
const MovieStack = () =>{
  return(
    <Stack.Navigator>
      <Stack.Screen
      name='SettingDetails'
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

