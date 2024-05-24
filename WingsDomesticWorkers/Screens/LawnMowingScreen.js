

import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import Icon from 'react-native-vector-icons/Ionicons'; // Import the icon library
import { useNavigation } from '@react-navigation/native';

const LawnMowingScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={tw`flex-1`}>
      <View style={tw`h-1/2 w-full items-center justify-center bg-white`}>
        <Image 
          source={require('../assets/loan $ flower.jpg')} 
          style={tw`w-full h-full`} 
          resizeMode="cover" 
        />
        <TouchableOpacity 
          style={tw`absolute top-5 right-6 bg-blue-500 p-3 rounded-full w-12`} 
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={tw`text-white`}>Skip</Text>
        </TouchableOpacity>
      </View>
      <View style={tw`h-1/2 p-4 justify-center items-center bg-white`}>
      <Text style={tw`text-4xl font-bold text-center mb-4`}>
      Lawn Mowing
        </Text>
        <Text style={tw`text-3xl font-bold text-center mb-4`}>
        Our Workers provide good servicess of Loan Mowing with good machines and grass disposing if necessary in your compound.
        </Text>
      </View>
      <TouchableOpacity 
        style={tw`bg-blue-500 rounded-full p-3 w-full absolute bottom-4 flex-row items-center justify-center`} 
        onPress={() => navigation.navigate('Loundry')}
      >
        <Text style={tw`text-white text-lg text-center mr-2`}>Next</Text>
        <Icon name="arrow-forward" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default LawnMowingScreen;

const styles = StyleSheet.create({});