import React from 'react';
import { View, Text } from 'react-native';
import tw from 'tailwind-react-native-classnames';

const BookmarksScreen = () => {
  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Text style={tw`text-lg`}>Bookmarks Screen</Text>
    </View>
  );
};

export default BookmarksScreen;
