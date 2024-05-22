import React from 'react';
import { View, Text } from 'react-native';
import tw from 'tailwind-react-native-classnames';

const CalendarScreen = () => {
  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Text style={tw`text-lg`}>Calendar Screen</Text>
    </View>
  );
};

export default CalendarScreen;
