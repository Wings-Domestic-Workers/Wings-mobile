import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';

const chats = [
  { id: '1', name: 'Alice', image: 'https://example.com/alice.jpg' },
  { id: '2', name: 'Bob', image: 'https://example.com/bob.jpg' },
  { id: '3', name: 'Charlie', image: 'https://example.com/charlie.jpg' },
  { id: '2', name: 'Bob', image: 'https://example.com/bob.jpg' },
  { id: '3', name: 'Charlie', image: 'https://example.com/charlie.jpg' },
  { id: '2', name: 'Bob', image: 'https://example.com/bob.jpg' },
  { id: '3', name: 'Charlie', image: 'https://example.com/charlie.jpg' },
  { id: '2', name: 'Bob', image: 'https://example.com/bob.jpg' },
  { id: '3', name: 'Charlie', image: 'https://example.com/charlie.jpg' },
  { id: '2', name: 'Bob', image: 'https://example.com/bob.jpg' },
  { id: '3', name: 'Charlie', image: 'https://example.com/charlie.jpg' },
  // Add more chats here with their respective images
];

const InboxScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={tw`flex-1 bg-white p-4`}>
      <Text style={tw`text-2xl text-center font-bold mb-4`}>Inbox</Text>
      <FlatList
        data={chats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={tw`p-4 bg-gray-100 mb-2 rounded-lg flex-row items-center`}
            onPress={() => navigation.navigate('Chat', { chatName: item.name, chatImage: item.image })}
          >
            <Image
              source={{ uri: item.image }}
              style={tw`w-10 h-10 rounded-full mr-4`}
            />
            <Text style={tw`text-lg`}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default InboxScreen;


