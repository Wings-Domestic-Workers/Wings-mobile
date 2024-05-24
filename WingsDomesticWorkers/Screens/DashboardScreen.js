// // import { View, Text } from 'react-native'
// // import React from 'react'
// // import tw from 'tailwind-react-native-classnames'

// // const DashboardScreen = () => {
// //   return (
// //     <View style={tw`flex-1 justify-center items-center`}>
// //       <Text style={tw`text-lg`}>DashboardScreen</Text>
// //     </View>
// //   )
// // }

// // export default DashboardScreen

// import React from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
// import tw from 'tailwind-react-native-classnames';
// import Icon from 'react-native-vector-icons/FontAwesome'; // Using FontAwesome icons
// import { useNavigation } from '@react-navigation/native';

// const services = [
//   { name: 'House Cleaning', icon: 'broom', screen: 'Cleaners' },
//   { name: 'Cooking', icon: 'utensils', screen: 'Cooks' },
//   { name: 'Lawn Mowing', icon: 'leaf', screen: 'LawnMowing' },
//   { name: 'Car Cleaning', icon: 'car', screen: 'Carcleaning' },
//   { name: 'Maid', icon: 'female', screen: 'Maids' },
//   { name: 'Laundry', icon: 'tshirt', screen: 'Loundry' },
//   { name: 'Plumbing', icon: 'wrench', screen: 'Plumber' },
//   { name: 'Farm Worker / Shamba Boy', icon: 'tractor', screen: 'ShambaBoy' },
// ];

// const DashboardScreen = () => {
//   const navigation = useNavigation();

//   return (
//     <View style={tw`flex-1 bg-white p-4`}>
//       <View style={tw`mb-4 p-6 bg-white rounded-2xl border border-gray-50`}>
//         <View style={tw`flex flex-col space-y-6`}>
//           <View style={tw`flex justify-between`}>
//             <Text style={tw`text-xs text-gray-500 font-semibold uppercase tracking-wider`}>
//               Wings DashboardScreen Account
//             </Text>
//           </View>
//           <View style={tw`flex gap-2 justify-between items-center`}>
//             <Text style={tw`text-gray-800 font-bold tracking-widest leading-tight`}>
//               Welcome Mr. Sam Olole
//             </Text>
//           </View>
//         </View>
//       </View>
      
//       <View style={tw`mb-4 p-6 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-800 flex flex-col justify-between`}>
//         <View style={tw`flex flex-col`}>
//           <Text style={tw`text-white font-bold`}>
//             Quality workers with the best experiences here in Kenya hire us and get good services
//           </Text>
//         </View>
//         <TouchableOpacity 
//           style={tw`bg-blue-800 px-4 py-3 rounded-lg text-white text-xs tracking-wider font-semibold mt-4`}
//           onPress={() => { /* Add your Learn More navigation logic here */ }}
//         >
//           <Text style={tw`text-white`}>Learn More</Text>
//         </TouchableOpacity>
//       </View>
      
//       <Text style={tw`text-xs md:text-sm text-gray-800 font-bold tracking-wide mb-4`}>
//         Available Services
//       </Text>

//       <View style={tw` flex-row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4`}>
//         {services.map((service, index) => (
//           <TouchableOpacity
//             key={index}
//             style={tw`bg-white p-6 rounded-xl border border-gray-50 flex items-center`}
//             onPress={() => navigation.navigate(service.screen)}
//           >
//             <Icon name={service.icon} size={40} color="gray" />
//             <Text style={tw`mt-4 text-center`}>{service.name}</Text>
//           </TouchableOpacity>
//         ))}
//       </View>

//       {/* Booked Services Section */}
//       <Text style={tw`text-xs md:text-sm text-gray-800 font-bold tracking-wide mt-8 mb-4`}>
//         Booked Services
//       </Text>
//       <View style={tw`bg-white p-6 rounded-xl border border-gray-50 flex flex-col space-y-6`}>
//         <View style={tw`flex justify-between items-center`}>
//           <Text style={tw`text-sm text-gray-600 font-bold tracking-wide`}>
//             Latest Bookings
//           </Text>
//           <TouchableOpacity
//             style={tw`px-4 py-2 text-xs bg-blue-100 text-blue-500 rounded uppercase tracking-wider font-semibold`}
//             onPress={() => { /* Add your More navigation logic here */ }}
//           >
//             <Text style={tw`text-blue-500`}>More</Text>
//           </TouchableOpacity>
//         </View>
//         <View style={tw`divide-y-2 divide-gray-100`}>
//           {/* Booking items */}
//           {[
//             { date: 'Today', name: 'McDonald', service: 'Cash', time: 'Food', price: '16.90' },
//             // Add more bookings here
//           ].map((booking, index) => (
//             <View key={index} style={tw`py-3 flex justify-between text-sm text-gray-500 font-semibold`}>
//               <Text style={tw`px-4 font-semibold`}>{booking.date}</Text>
//               <Text style={tw`px-4 text-gray-600`}>{booking.name}</Text>
//               <Text style={tw`px-4 tracking-wider`}>{booking.service}</Text>
//               <Text style={tw`px-4 text-blue-600`}>{booking.time}</Text>
//               <View style={tw`flex items-center gap-2`}>
//                 <Text style={tw`md:text-base text-gray-800`}>{booking.price}</Text>
//                 <Icon name="chevron-down" size={16} color="gray" />
//               </View>
//             </View>
//           ))}
//         </View>
//       </View>
//     </View>
//   );
// };

// export default DashboardScreen;

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, ImageBackground } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import Icon from 'react-native-vector-icons/FontAwesome'; // Using FontAwesome icons
import { useNavigation } from '@react-navigation/native';

const services = [
  { name: 'House Cleaning', icon: 'broom', screen: 'AllCleaners' },
  { name: 'Cooking .', icon: 'cutlery', screen: 'AllCooks' },
  { name: 'Lawn Mowing', icon: 'leaf', screen: 'AllLawnMowers' },
  { name: 'Car Cleaning', icon: 'car', screen: 'AllCarCleaners' },
  { name: 'Maid', icon: 'female', screen: 'AllMaids' },
  { name: 'Laundry .', icon: 'tshirt', screen: 'AllLoundrys' },
  { name: 'Plumbing', icon: 'wrench', screen: 'AllBlumbers' },
  { name: 'Farm Worker', icon: 'tractor', screen: 'AllFarmWorkers' },
];

const DashboardScreen = () => {
  const navigation = useNavigation();
  const [search, setSearch] = useState('');
  const [filteredServices, setFilteredServices] = useState(services);

  const handleSearch = (text) => {
    setSearch(text);
    const filtered = services.filter((service) =>
      service.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredServices(filtered);
  };

  return (
    <View style={tw`flex-1 bg-white p-4`}>
      <View style={tw`flex flex-row justify-between items-center mb-4 mt-6`}>
        <View style={tw`flex flex-row items-center`}>
          <Icon name="user-circle" size={24} color="gray" />
          <Text style={tw`ml-2 text-gray-800 font-bold tracking-widest`}>Mr. Sam Olole</Text>
        </View>
        <View style={tw`flex flex-row`}>
          <Icon name="bell" size={24} color="gray" style={tw`mr-4`} onPress={() => navigation.navigate('Notifications')}/>
          <Icon name="bookmark" size={24} color="gray" />
        </View>
      </View>

      <TextInput
        style={tw`mb-4 p-2 border border-gray-300 rounded-full`}
        placeholder="Search services..."
        value={search}
        onChangeText={handleSearch}
      />
      <Text style={tw`text-xs md:text-sm text-gray-800 font-bold tracking-wide mb-4`}>
        Special Offers
      </Text>
      <ImageBackground
        source={require('../assets/logo.png')} // Update with the correct path to your image
        style={tw`mb-4 p-6 bg-white rounded-2xl border border-gray-50`}
        imageStyle={tw`rounded-2xl`} // Ensures the image is rounded like the container
      >
        <View style={tw`flex flex-col space-y-12`}>
        <View style={tw`flex justify-between`}>
            <Text style={tw`text-4xl text-gray-500 font-semibold uppercase tracking-wider`}>
             30%
            </Text>
          </View>
          <View style={tw`flex justify-between`}>
            <Text style={tw`text-3xs text-gray-500 font-bold tracking-wider leading-tight`}>
              Today's Special
            </Text>
          </View>
          <View style={tw`flex gap-2 justify-between `}>
            <Text style={tw`text-gray-800 font-semibold tracking-widest leading-tight`}>
              Get Discount for everyservise you order valid only today
            </Text>
          </View>
        </View>
      </ImageBackground>
      
      <View style={tw`mb-4 p-6 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-800 flex flex-col justify-between`}>
        <View style={tw`flex flex-col`}>
          <Text style={tw`text-white font-bold`}>
            Quality workers with the best experiences here in Kenya hire us and get good services
          </Text>
        </View>
      </View>
      
      <View style={tw`flex-row justify-between mb-4`}>
      <Text style={tw`text-xs md:text-sm text-gray-800 font-bold tracking-wide`}>
        Available Services
      </Text>
      <Text style={tw`text-xs md:text-sm text-blue-800 font-bold tracking-wide`} onPress={() => navigation.navigate('Services')}>
        All Services
      </Text>
      </View>

      <FlatList
        data={filteredServices}
        keyExtractor={(item) => item.name}
        numColumns={3}
        columnWrapperStyle={tw`justify-between`}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={tw`bg-white p-4 rounded-xl border border-gray-50 flex items-center mb-4 w-1/3`}
            onPress={() => navigation.navigate(item.screen)}
          >
                    <View style={tw`w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center`}>
              <Icon name={item.icon} size={24} color="gray" />
            </View>
            <Text style={tw`mt-4 text-center ml-3`}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Booked Services Section */}
      {/* <Text style={tw`text-xs md:text-sm text-gray-800 font-bold tracking-wide mt-8 mb-4`}>
        Booked Services
      </Text> */}
      {/* <View style={tw`bg-white p-6 rounded-xl border border-gray-50 flex flex-col space-y-6`}>
        <View style={tw`flex justify-between items-center`}>
          <Text style={tw`text-sm text-gray-600 font-bold tracking-wide`}>
            Latest Bookings
          </Text>
          <TouchableOpacity
            style={tw`px-4 py-2 text-xs bg-blue-100 text-blue-500 rounded uppercase tracking-wider font-semibold`}
            onPress={() => { }}
          >
            <Text style={tw`text-blue-500`}>More</Text>
          </TouchableOpacity>
        </View>
      </View> */}
    </View>
  );
};

export default DashboardScreen;

