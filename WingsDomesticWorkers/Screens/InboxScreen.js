import React from 'react';
import { View, Text } from 'react-native';
import tw from 'tailwind-react-native-classnames';

const InboxScreen = () => {
  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Text style={tw`text-lg`}>Inbox Screen</Text>
    </View>
  );
};

export default InboxScreen;
