import * as React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';



// Screens

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/FavoriteScreen';
import SettingsScreen from './screens/SettingsScreen';
import UserScreen from './screens/UserScreen';
import AboutScreen from './screens/AboutScreen';
import LoginScreen from './screens/LoginScreen';

//Screen names
const homeName ="Home";
const detailsName = "Favorites";
const settingsName = "Settings";
const  usersName="Account";
const aboutName="About";
const loginName="Login";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === detailsName) {
              iconName = focused ? 'heart' : 'heart-outline';

            } else if (rn === settingsName) {
              iconName = focused ? 'settings' : 'settings-outline';
            }
            else if (rn === aboutName) {
                iconName = focused ? 'ios-chatbubble-ellipses' : 'ios-chatbubble-ellipses-outline';
              }
              else if (rn === usersName) {
                iconName = focused ? 'person-circle' : 'person-circle-outline';
              }
              else if (rn === loginName) {
                iconName = focused ? 'person-circle' : 'person-circle-outline';
              }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#FF1616',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 2, fontSize: 10 },
          style: { padding: 20, height: 70}
        }}>

        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={detailsName} component={DetailsScreen} />
        <Tab.Screen name={settingsName} component={SettingsScreen} />
        <Tab.Screen name={aboutName} component={AboutScreen}/>
        <Tab.Screen name={usersName} component={UserScreen}/>
        {/* <Tab.Screen name={loginName} component={LoginScreen}/> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;