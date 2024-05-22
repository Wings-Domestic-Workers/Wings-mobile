import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './Screens/HomeScreen';
import CooksScreen from './Screens/CooksScreen';
import CleanerScreen from './Screens/CleanerScreen';
import MaidScreen from './Screens/MaidScreen';
import CarcleaningScreen from './Screens/CarcleaningScreen';
import LawnMowingScreen from './Screens/LawnMowingScreen';
import Loundry from './Screens/Loundry';
import PlumbingScreen from './Screens/PlumbingScreen';
import ShambaBoy from './Screens/ShambaBoy';
import LoginScreen from './Screens/LoginScreen';
import SignUpScreen from './Screens/SignUpScreen';
import BookmarksScreen from './Screens/BookmarksScreen';  // New screen
import CalendarScreen from './Screens/CalendarScreen';    // New screen
import InboxScreen from './Screens/InboxScreen';          // New screen
import ProfileScreen from './Screens/ProfileScreen';      // New screen

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = 'home-outline';
              break;
            case 'Bookmarks':
              iconName = 'bookmark-outline';
              break;
            case 'Calendar':
              iconName = 'calendar-outline';
              break;
            case 'Inbox':
              iconName = 'mail-outline';
              break;
            case 'Profile':
              iconName = 'person-outline';
              break;
            default:
              iconName = 'circle-outline';
              break;
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Bookmarks" component={BookmarksScreen} />
      <Tab.Screen name="Calendar" component={CalendarScreen} />
      <Tab.Screen name="Inbox" component={InboxScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <TailwindProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }} />
          <Stack.Screen name="Cooks" component={CooksScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Cleaners" component={CleanerScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Maids" component={MaidScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Carcleaning" component={CarcleaningScreen} options={{ headerShown: false }} />
          <Stack.Screen name="LawnMowing" component={LawnMowingScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Loundry" component={Loundry} options={{ headerShown: false }} />
          <Stack.Screen name="Plumber" component={PlumbingScreen} options={{ headerShown: false }} />
          <Stack.Screen name="ShambaBoy" component={ShambaBoy} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
