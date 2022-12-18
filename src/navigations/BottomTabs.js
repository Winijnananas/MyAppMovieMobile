import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

//importScreen pages
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/FavoriteScreen";
import SettingsScreen from "../screens/SettingsScreen";
import ProfileStack from "../screens/Stack/ProfileStack";
import AboutScreen from "../screens/AboutScreen";
import UserScreen from "../screens/UserScreen";
import Home from "../screens/Home";
import FeedScreen from "../screens/FeedScreen";


const Tab = createBottomTabNavigator();



export default function TabNavigation() {
    return (
        <Tab.Navigator
            screenOptions={{ headerShown: false, tabBarActiveTintColor: '#BF1700', tabBarInactiveTintColor: 'black', tabBarStyle: { backgroundColor: 'white', borderBottomColor: 'black' } }}>
            <Tab.Screen
                
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, size }) => (
                        //<MaterialCommunityIcons name="home" color={color} size={size} />
                        <MaterialCommunityIcons name="home-variant" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name='Feed'
                component={FeedScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="movie-search" color={color} size={size} />
                    ),
                }}
            />
            
            <Tab.Screen
                name='Favorite'
                component={DetailsScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, size }) => (
                        //<MaterialCommunityIcons name="bookmark-multiple" color={color} size={size} />
                        <MaterialCommunityIcons name="heart-multiple" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name='Setting'
                component={AboutScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, size }) => (
                        // <Icon name="wrench" color={color} size={size} />
                        <MaterialCommunityIcons name="contacts" color={color} size={size} />
                        
                    ),
                }}
            />
            <Tab.Screen
                name='User'
                component={UserScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color, size }) => (
                        // <Icon solid name="id-card" color={color} size={size} />
                        <MaterialCommunityIcons name="account" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}


// export default TabNavigation;
// export default function BottomTabs(){
//     return(
//         <BottomTabMain />
//     );
// }