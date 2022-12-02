import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/FavoriteScreen';
import SettingsScreen from './screens/SettingsScreen';
import LoginScreen from './screens/LoginScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MainContainer from './MainContainer';
import RegisterScreen from './screens/RegisterScreen';
import UserScreen from './screens/UserScreen';
import DetailsMovieScreen from './screens/DetailsMovieScreen';
import SplashScreen from './screens/SplashScreen';
import ProfileStack from './screens/Stack/ProfileStack';
import LoginPage from './screens/LoginPage';



import { Use } from 'react-native-svg';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigation() {
    return (
        <Tab.Navigator
            screenOptions={{ headerShown: false, tabBarActiveTintColor: '#BF1700', tabBarInactiveTintColor: 'black', tabBarStyle: { backgroundColor: 'white', borderBottomColor: 'black' } }}>
            <Tab.Screen
                
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarShowLabel: true,
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home" color={color} size={size} />
                    ),
                }}
            />
            
            <Tab.Screen
                name='Favorite'
                component={DetailsScreen}
                options={{
                    tabBarShowLabel: true,
                    tabBarIcon: ({ color, size }) => (
                        <Icon solid name="heart" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name='Setting'
                // component={SettingStack}
                component={SettingsScreen}
                options={{
                    tabBarShowLabel: true,
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="wrench" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name='Profile'
                //component={UserScreen}
                component={ProfileStack}
                options={{
                    tabBarShowLabel: true,
                    tabBarIcon: ({ color, size }) => (
                        <Icon solid name="id-card" color={color} size={size} />
                    ),
                }}
            />
        
        </Tab.Navigator>
    )
}
const Navigation = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}} >
            {/* <Stack.Screen name="Welcome" component={}/> */}
            

          {/* <Stack.Screen name="Welcome" component={WelcomeScreen} /> */}
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Login" component={LoginPage}/>
          {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
          
          <Stack.Screen name="Main" component={MainContainer}/>
          <Stack.Screen name="Regis" component={RegisterScreen}/>
          <Stack.Screen name='User' component={UserScreen}/>
          <Stack.Screen name='Details' component={DetailsMovieScreen}/>
          <Stack.Screen name="TabNavigation" component={TabNavigation} />
          {/* <Stack.Screen name="Home" component={HomeScreen}/> */}
          
          {/* <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
          <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
          <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
          <Stack.Screen name="InputProfile" component={InputProfileScreen} /> */}
          
          
          {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
          
        </Stack.Navigator>
      </NavigationContainer>
    )
  }

  export default Navigation;