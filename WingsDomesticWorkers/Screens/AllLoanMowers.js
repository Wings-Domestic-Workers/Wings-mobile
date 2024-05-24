
import React, { useState } from 'react';
import { View, Text, FlatList, Image, TextInput, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';

const cooksData = [
  { id: '1', name: 'John Doe', price: '$50', location: 'New York', photo: 'https://via.placeholder.com/50' },
  { id: '2', name: 'Jane Smith', price: '$45', location: 'Los Angeles', photo: 'https://via.placeholder.com/50' },
  { id: '3', name: 'Samuel Green', price: '$55', location: 'Chicago', photo: 'https://via.placeholder.com/50' },
  { id: '4', name: 'Emily Brown', price: '$40', location: 'Houston', photo: 'https://via.placeholder.com/50' },
  { id: '5', name: 'Michael Johnson', price: '$60', location: 'Phoenix', photo: 'https://via.placeholder.com/50' },
  { id: '6', name: 'Jessica Lee', price: '$50', location: 'Philadelphia', photo: 'https://via.placeholder.com/50' },
  { id: '7', name: 'David Wilson', price: '$70', location: 'San Antonio', photo: 'https://via.placeholder.com/50' },
  { id: '8', name: 'Sarah Davis', price: '$65', location: 'San Diego', photo: 'https://via.placeholder.com/50' },
  { id: '9', name: 'Chris Martin', price: '$55', location: 'Dallas', photo: 'https://via.placeholder.com/50' },
  { id: '10', name: 'Anna Garcia', price: '$50', location: 'San Jose', photo: 'https://via.placeholder.com/50' },
];

const CookItem = ({ cook }) => (
    <View style={tw`flex-1 p-4 bg-gray-100 mt-5 `}>
  <View style={tw`flex-row p-4 border-b border-gray-200`}>
    <Image source={{ uri: cook.photo }} style={tw`w-16 h-16 rounded-full mr-4`} />
    <View style={tw`flex-1 justify-center`}>
      <Text style={tw`text-lg font-bold`}>{cook.name}</Text>
      <Text style={tw`text-gray-500`}>{cook.price}</Text>
      <Text style={tw`text-gray-500`}>{cook.location}</Text>
    </View>
  </View>
  </View>
);

const AllLoanMowers = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCooks, setFilteredCooks] = useState(cooksData);
  const navigation = useNavigation();  

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query) {
      const filtered = cooksData.filter(
        (cook) =>
          cook.name.toLowerCase().includes(query.toLowerCase()) ||
          cook.location.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredCooks(filtered);
    } else {
      setFilteredCooks(cooksData);
    }
  };

  return (
    <View style={tw`flex-1 bg-white mt-6`}>
            <Text style={tw`text-3xl md:text-sm text-gray-800 font-bold tracking-wide mb-4 ml-12`}>
     <Icon name="arrow-back" size={20} color="black" style={tw`text-3xl md:text-sm text-gray-800 font-bold tracking-wide  mr-10`} onPress={() => navigation.navigate('Dashboard')}/>
        All Loan Mowers
    </Text>
    
      <View style={tw`p-4 bg-gray-200`}>
        <TextInput
          style={tw`p-2 bg-white rounded-lg`}
          placeholder="Search by name or location"
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </View>
      <FlatList
        data={filteredCooks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CookItem cook={item} />}
      />
    </View>
  );
};

export default AllLoanMowers;

const styles = StyleSheet.create({});