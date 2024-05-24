import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity, Image, ScrollView, useColorScheme } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Slider } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';

const ProfileScreen = () => {
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [textSize, setTextSize] = useState(14);
  const [isEmailSubscribed, setIsEmailSubscribed] = useState(false);
  const [showLocation, setShowLocation] = useState(true);

  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  const toggleNotifications = () => setIsNotificationsEnabled(prev => !prev);
  const toggleTheme = () => setIsDarkTheme(prev => !prev);
  const toggleEmailSubscription = () => setIsEmailSubscribed(prev => !prev);
  const toggleLocation = () => setShowLocation(prev => !prev);

  return (
    <ScrollView style={tw`flex-1 p-4 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <View style={tw`items-center mb-8`}>
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }}
          style={tw`w-24 h-24 rounded-full mb-2`}
        />
        <Text style={tw`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>John Doe</Text>
      </View>

      <Text style={tw`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>Profile Settings</Text>
      
      <View style={tw`mb-4`}>
        <Text style={tw`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>Language</Text>
        <View style={tw`bg-gray-100 p-2 rounded-lg`}>
          <Picker
            selectedValue={selectedLanguage}
            onValueChange={(itemValue) => setSelectedLanguage(itemValue)}
            style={tw`text-lg`}
          >
            <Picker.Item label="English" value="en" />
            <Picker.Item label="Spanish" value="es" />
            <Picker.Item label="French" value="fr" />
            <Picker.Item label="German" value="de" />
          </Picker>
        </View>
      </View>
      
      <View style={tw`mb-4`}>
        <Text style={tw`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>Text Size</Text>
        <View style={tw`flex flex-row items-center justify-between bg-gray-100 p-2 rounded-lg`}>
          <Text style={tw`text-lg ${isDarkMode ? 'text-white' : 'text-black'}`}>{textSize}</Text>
          <Slider
            style={tw`flex-1 ml-4`}
            minimumValue={10}
            maximumValue={24}
            value={textSize}
            onValueChange={(value) => setTextSize(value)}
            step={1}
          />
        </View>
      </View>
      
      <View style={tw`mb-4`}>
        <Text style={tw`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>Notifications</Text>
        <View style={tw`flex flex-row items-center justify-between bg-gray-100 p-2 rounded-lg`}>
          <Text style={tw`text-lg ${isDarkMode ? 'text-white' : 'text-black'}`}>Enable Notifications</Text>
          <Switch
            onValueChange={toggleNotifications}
            value={isNotificationsEnabled}
          />
        </View>
      </View>
      
      <View style={tw`mb-4`}>
        <Text style={tw`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>Email Subscription</Text>
        <View style={tw`flex flex-row items-center justify-between bg-gray-100 p-2 rounded-lg`}>
          <Text style={tw`text-lg ${isDarkMode ? 'text-white' : 'text-black'}`}>Subscribe to emails</Text>
          <Switch
            onValueChange={toggleEmailSubscription}
            value={isEmailSubscribed}
          />
        </View>
      </View>

      <View style={tw`mb-4`}>
        <Text style={tw`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>Location Services</Text>
        <View style={tw`flex flex-row items-center justify-between bg-gray-100 p-2 rounded-lg`}>
          <Text style={tw`text-lg ${isDarkMode ? 'text-white' : 'text-black'}`}>{showLocation ? 'Show Location' : 'Hide Location'}</Text>
          <Switch
            onValueChange={toggleLocation}
            value={showLocation}
          />
        </View>
      </View>

      <TouchableOpacity style={tw`bg-blue-500 p-4 rounded-lg mt-4`}>
        <Text style={tw`text-white text-center text-lg font-bold`}>Save Settings</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ProfileScreen;

// import React, { useState } from 'react';
// import { View, Text, Switch, TouchableOpacity, Image, ScrollView } from 'react-native';
// import { Picker } from '@react-native-picker/picker';
// import { Slider } from 'react-native-elements';
// import tw from 'tailwind-react-native-classnames';
// import { useTheme } from './ThemeContext';

// const ProfileScreen = () => {
//   const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(false);
//   const [selectedLanguage, setSelectedLanguage] = useState('en');
//   const [textSize, setTextSize] = useState(14);
//   const [isEmailSubscribed, setIsEmailSubscribed] = useState(false);
//   const [showLocation, setShowLocation] = useState(true);

//   const { isDarkMode, toggleTheme } = useTheme();

//   const toggleNotifications = () => setIsNotificationsEnabled((prev) => !prev);
//   const toggleEmailSubscription = () => setIsEmailSubscribed((prev) => !prev);
//   const toggleLocation = () => setShowLocation((prev) => !prev);

//   return (
//     <ScrollView style={tw`flex-1 p-4 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
//       <View style={tw`items-center mb-8`}>
//         <Image
//           source={{ uri: 'https://via.placeholder.com/150' }}
//           style={tw`w-24 h-24 rounded-full mb-2`}
//         />
//         <Text style={tw`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>John Doe</Text>
//       </View>

//       <Text style={tw`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>Profile Settings</Text>
      
//       <View style={tw`mb-4`}>
//         <Text style={tw`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>Language</Text>
//         <View style={tw`bg-gray-100 p-2 rounded-lg`}>
//           <Picker
//             selectedValue={selectedLanguage}
//             onValueChange={(itemValue) => setSelectedLanguage(itemValue)}
//             style={tw`text-lg`}
//           >
//             <Picker.Item label="English" value="en" />
//             <Picker.Item label="Spanish" value="es" />
//             <Picker.Item label="French" value="fr" />
//             <Picker.Item label="German" value="de" />
//           </Picker>
//         </View>
//       </View>
      
//       <View style={tw`mb-4`}>
//         <Text style={tw`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>Text Size</Text>
//         <View style={tw`flex flex-row items-center justify-between bg-gray-100 p-2 rounded-lg`}>
//           <Text style={tw`text-lg ${isDarkMode ? 'text-white' : 'text-black'}`}>{textSize}</Text>
//           <Slider
//             style={tw`flex-1 ml-4`}
//             minimumValue={10}
//             maximumValue={24}
//             value={textSize}
//             onValueChange={(value) => setTextSize(value)}
//             step={1}
//           />
//         </View>
//       </View>
      
//       <View style={tw`mb-4`}>
//         <Text style={tw`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>Notifications</Text>
//         <View style={tw`flex flex-row items-center justify-between bg-gray-100 p-2 rounded-lg`}>
//           <Text style={tw`text-lg ${isDarkMode ? 'text-white' : 'text-black'}`}>Enable Notifications</Text>
//           <Switch
//             onValueChange={toggleNotifications}
//             value={isNotificationsEnabled}
//           />
//         </View>
//       </View>
      
//       <View style={tw`mb-4`}>
//         <Text style={tw`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>Email Subscription</Text>
//         <View style={tw`flex flex-row items-center justify-between bg-gray-100 p-2 rounded-lg`}>
//           <Text style={tw`text-lg ${isDarkMode ? 'text-white' : 'text-black'}`}>Subscribe to emails</Text>
//           <Switch
//             onValueChange={toggleEmailSubscription}
//             value={isEmailSubscribed}
//           />
//         </View>
//       </View>

//       <View style={tw`mb-4`}>
//         <Text style={tw`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>Location Services</Text>
//         <View style={tw`flex flex-row items-center justify-between bg-gray-100 p-2 rounded-lg`}>
//           <Text style={tw`text-lg ${isDarkMode ? 'text-white' : 'text-black'}`}>{showLocation ? 'Show Location' : 'Hide Location'}</Text>
//           <Switch
//             onValueChange={toggleLocation}
//             value={showLocation}
//           />
//         </View>
//       </View>
      
//       <View style={tw`mb-4`}>
//         <Text style={tw`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>Dark Mode</Text>
//         <View style={tw`flex flex-row items-center justify-between bg-gray-100 p-2 rounded-lg`}>
//           <Text style={tw`text-lg ${isDarkMode ? 'text-white' : 'text-black'}`}>{isDarkMode ? 'Enabled' : 'Disabled'}</Text>
//           <Switch
//             onValueChange={toggleTheme}
//             value={isDarkMode}
//           />
//         </View>
//       </View>
      
//       <TouchableOpacity style={tw`bg-blue-500 p-4 rounded-lg mt-4`}>
//         <Text style={tw`text-white text-center text-lg font-bold`}>Save Settings</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// export default ProfileScreen;

