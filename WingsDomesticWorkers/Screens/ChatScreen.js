import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, KeyboardAvoidingView, Platform, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { useRoute } from '@react-navigation/native';

const ChatScreen = () => {
  const route = useRoute();
  const { chatName, chatImage } = route.params;
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const sendMessage = () => {
    if (inputMessage.trim() === '') return;
    setMessages([...messages, { id: Date.now().toString(), text: inputMessage }]);
    setInputMessage('');
  };

  return (
    <KeyboardAvoidingView
      style={tw`flex-1`}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
    >
      <View style={tw`flex-1 bg-white p-4`}>
        <View style={tw`flex-row items-center mb-4`}>
          <Image
            source={{ uri: chatImage }}
            style={tw`w-10 h-10 rounded-full mr-4`}
          />
          <Text style={tw`text-lg font-bold`}>{chatName}</Text>
        </View>
        <FlatList
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={tw`p-2 bg-gray-100 mb-2 rounded-lg`}>
              <Text>{item.text}</Text>
            </View>
          )}
          contentContainerStyle={tw`flex-grow`}
        />
        <View style={tw`flex-row items-center p-2 bg-gray-200 rounded-full`}>
          <TextInput
            style={tw`flex-1 p-2 bg-white rounded-full`}
            placeholder="Type a message"
            value={inputMessage}
            onChangeText={setInputMessage}
          />
          <TouchableOpacity
            style={tw`ml-3 p-3 bg-blue-500 rounded-full`}
            onPress={sendMessage}
          >
            <Text style={tw`text-white`}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ChatScreen;

