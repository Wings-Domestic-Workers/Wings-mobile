import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, TextInput } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import Icon from 'react-native-vector-icons/FontAwesome'; // Using FontAwesome icons
import { useNavigation } from '@react-navigation/native';

const services = [
  { name: 'House Cleaning', icon: 'broom', screen: 'Cleaners' },
  { name: 'Cooking', icon: 'cutlery', screen: 'Cooks' },
  { name: 'Lawn Mowing', icon: 'leaf', screen: 'LawnMowing' },
  { name: 'Car Cleaning', icon: 'car', screen: 'Carcleaning' },
  { name: 'Maid', icon: 'female', screen: 'Maids' },
  { name: 'Laundry', icon: 'tshirt', screen: 'Loundry' },
  { name: 'Plumbing', icon: 'wrench', screen: 'Plumber' },
  { name: 'Farm Worker', icon: 'tractor', screen: 'ShambaBoy' },
];

const iconColors = ['#FF5733', '#33FF57', '#5733FF', '#FF5733', '#33FF57', '#5733FF', '#FF5733', '#33FF57'];

const ServicesScreen = () => {
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
    <View style={tw`flex-1 bg-white p-4 `}>
      <Text style={tw`text-3xl md:text-sm text-gray-800 font-bold tracking-wide mb-4 ml-12`}>
        <Icon name="arrow-left" size={20} color="black" style={tw`mr-4`} onPress={() => navigation.navigate('Dashboard')}/>
        All Services
      </Text>
      <TextInput
        style={tw`mb-4 p-2 border border-gray-300 rounded-full`}
        placeholder="Search services..."
        value={search}
        onChangeText={handleSearch}
      />

      <FlatList
        data={filteredServices}
        keyExtractor={(item) => item.name}
        numColumns={3}
        columnWrapperStyle={tw`justify-between`}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={tw`bg-white p-8 rounded-xl border border-gray-50 flex items-center mb-4 w-1/3`}
            onPress={() => navigation.navigate(item.screen)}
          >
            <Icon name={item.icon} size={40} color={iconColors[index % iconColors.length]} />
            <Text style={tw`mt-4 text-center ml-3`}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ServicesScreen;
