import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import Icon from 'react-native-vector-icons/FontAwesome';

const bookmarks = [
  { name: 'House Cleaning', icon: 'broom', image: 'https://example.com/house-cleaning.jpg' },
  { name: 'Cooking', icon: 'cutlery', image: 'https://example.com/cooking.jpg' },
  { name: 'Lawn Mowing', icon: 'leaf', image: 'https://example.com/lawn-mowing.jpg' },
  { name: 'Car Cleaning', icon: 'car', image: 'https://example.com/car-cleaning.jpg' },
  { name: 'Maid', icon: 'female', image: 'https://example.com/maid.jpg' },
  { name: 'Laundry', icon: 'tshirt', image: 'https://example.com/laundry.jpg' },
  { name: 'Plumbing', icon: 'wrench', image: 'https://example.com/plumbing.jpg' },
  { name: 'Farm Worker', icon: 'tractor', image: 'https://example.com/farm-worker.jpg' },
];

const BookmarksScreen = () => {
  return (
    <View style={tw`flex-1 bg-white p-4`}>
      <Text style={tw`text-2xl font-bold mb-4 ml-10`}>Bookmarks</Text>
      <FlatList
        data={bookmarks}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={tw`flex flex-row items-center p-4 mb-4 bg-white rounded-xl border border-gray-50`}
          >
            <View style={tw`w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mr-4`}>
              <Image
                source={{ uri: item.image }}
                style={tw`w-12 h-12 rounded-full`}
              />
            </View>
            <Text style={tw`flex-1 text-gray-800 font-bold`}>{item.name}</Text>
            <Icon name="bookmark" size={24} color="gray" />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default BookmarksScreen;

