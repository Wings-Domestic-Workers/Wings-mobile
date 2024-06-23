import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { useColorScheme } from 'react-native';
import { TailwindProvider } from "tailwindcss-react-native";

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
import BookmarksScreen from './Screens/BookmarksScreen';
import CalendarScreen from './Screens/CalendarScreen';
import InboxScreen from './Screens/InboxScreen';
import ProfileScreen from './Screens/ProfileScreen';
import DashboardScreen from './Screens/DashboardScreen';
import NotificationScreen from './Screens/NotificationScreen';
import ServicesScreen from './Screens/ServicesScreen';
import ChatScreen from './Screens/ChatScreen';
import AllCooksScreen from './Screens/AllCooksScreens';
import AllBlumbersScreen from './Screens/AllBlumbersScreen';
import AllHouseCleaners from './Screens/AllHouseCleaners';
import AllLoanMowers from './Screens/AllLoanMowers';
import AllCarCleaners from './Screens/AllCarCleaners';
import AllMaids from './Screens/AllMaids';
import AllLoundrys from './Screens/AllLoundrys';
import AllFarmWorkers from './Screens/AllFarmWorkers';
import Profiles from './Screens/ProfilesScreen';
import ErrorPage from './Screens/ErrorScreen';
import PersonalScreen from './Screens/PersonalScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Dashboard':
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
            case 'Profiles':
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
      <Tab.Screen name="Dashboard" component={DashboardScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Bookmarks" component={BookmarksScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Calendar" component={CalendarScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Inbox" component={InboxScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

export default function App() {
  const colorScheme = useColorScheme();

  return (
    <TailwindProvider>
      <NavigationContainer theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
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
          <Stack.Screen name="Notifications" component={NotificationScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Services" component={ServicesScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Chat" component={ChatScreen} options={{ headerShown: false }} />
          <Stack.Screen name="AllCooks" component={AllCooksScreen} options={{ headerShown: false }} />
          <Stack.Screen name="AllBlumbers" component={AllBlumbersScreen} options={{ headerShown: false }} />
          <Stack.Screen name="AllCleaners" component={AllHouseCleaners} options={{ headerShown: false }} />
          <Stack.Screen name="AllLawnMowers" component={AllLoanMowers} options={{ headerShown: false }} />
          <Stack.Screen name="AllCarCleaners" component={AllCarCleaners} options={{ headerShown: false }} />
          <Stack.Screen name="AllMaids" component={AllMaids} options={{ headerShown: false }} />
          <Stack.Screen name="AllLoundrys" component={AllLoundrys} options={{ headerShown: false }} />
          <Stack.Screen name="AllFarmWorkers" component={AllFarmWorkers} options={{ headerShown: false }} />
          <Stack.Screen name="Profiles" component={Profiles} options={{ headerShown: false }} />
          <Stack.Screen name="Error" component={ErrorPage} options={{ headerShown: false }} />
          <Stack.Screen name="Personal" component={PersonalScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
    
  );
}


// import React from 'react';
// import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Icon from 'react-native-vector-icons/Ionicons';
// import { TailwindProvider } from 'tailwindcss-react-native';
// import { ThemeProvider ,useTheme } from './Screens/ThemeContext';

// import HomeScreen from './Screens/HomeScreen';
// import CooksScreen from './Screens/CooksScreen';
// import CleanerScreen from './Screens/CleanerScreen';
// import MaidScreen from './Screens/MaidScreen';
// import CarcleaningScreen from './Screens/CarcleaningScreen';
// import LawnMowingScreen from './Screens/LawnMowingScreen';
// import Loundry from './Screens/Loundry';
// import PlumbingScreen from './Screens/PlumbingScreen';
// import ShambaBoy from './Screens/ShambaBoy';
// import LoginScreen from './Screens/LoginScreen';
// import SignUpScreen from './Screens/SignUpScreen';
// import BookmarksScreen from './Screens/BookmarksScreen';
// import CalendarScreen from './Screens/CalendarScreen';
// import InboxScreen from './Screens/InboxScreen';
// import ProfileScreen from './Screens/ProfileScreen';
// import DashboardScreen from './Screens/DashboardScreen';
// import NotificationScreen from './Screens/NotificationScreen';
// import ServicesScreen from './Screens/ServicesScreen';
// import ChatScreen from './Screens/ChatScreen';

// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

// function MainTabs() {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ color, size }) => {
//           let iconName;

//           switch (route.name) {
//             case 'Dashboard':
//               iconName = 'home-outline';
//               break;
//             case 'Bookmarks':
//               iconName = 'bookmark-outline';
//               break;
//             case 'Calendar':
//               iconName = 'calendar-outline';
//               break;
//             case 'Inbox':
//               iconName = 'mail-outline';
//               break;
//             case 'Profile':
//               iconName = 'person-outline';
//               break;
//             default:
//               iconName = 'circle-outline';
//               break;
//           }

//           return <Icon name={iconName} size={size} color={color} />;
//         },
//         tabBarActiveTintColor: 'tomato',
//         tabBarInactiveTintColor: 'gray',
//       })}
//     >
//       <Tab.Screen name="Dashboard" component={DashboardScreen} options={{ headerShown: false }} />
//       <Tab.Screen name="Bookmarks" component={BookmarksScreen} options={{ headerShown: false }} />
//       <Tab.Screen name="Calendar" component={CalendarScreen} options={{ headerShown: false }} />
//       <Tab.Screen name="Inbox" component={InboxScreen} options={{ headerShown: false }} />
//       <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
//     </Tab.Navigator>
//   );
// }

// export default function App() {
//   const { isDarkMode } = useTheme();

//   return (
//     <TailwindProvider>
//       <ThemeProvider>
//         <NavigationContainer theme={isDarkMode ? DarkTheme : DefaultTheme}>
//           <Stack.Navigator>
//             <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
//             <Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }} />
//             <Stack.Screen name="Cooks" component={CooksScreen} options={{ headerShown: false }} />
//             <Stack.Screen name="Cleaners" component={CleanerScreen} options={{ headerShown: false }} />
//             <Stack.Screen name="Maids" component={MaidScreen} options={{ headerShown: false }} />
//             <Stack.Screen name="Carcleaning" component={CarcleaningScreen} options={{ headerShown: false }} />
//             <Stack.Screen name="LawnMowing" component={LawnMowingScreen} options={{ headerShown: false }} />
//             <Stack.Screen name="Loundry" component={Loundry} options={{ headerShown: false }} />
//             <Stack.Screen name="Plumber" component={PlumbingScreen} options={{ headerShown: false }} />
//             <Stack.Screen name="ShambaBoy" component={ShambaBoy} options={{ headerShown: false }} />
//             <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
//             <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
//             <Stack.Screen name="Notifications" component={NotificationScreen} options={{ headerShown: false }} />
//             <Stack.Screen name="Services" component={ServicesScreen} options={{ headerShown: false }} />
//             <Stack.Screen name="Chat" component={ChatScreen} options={{ headerShown: false }} />
//           </Stack.Navigator>
//         </NavigationContainer>
//       </ThemeProvider>
//     </TailwindProvider>
//   );
// }