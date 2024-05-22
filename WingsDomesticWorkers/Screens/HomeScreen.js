import React, { useEffect } from 'react';
import { View, Image, ActivityIndicator, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import tw from 'tailwind-react-native-classnames';

const HomeScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Cooks'); // Replace 'NextScreen' with your target screen name
    }, 3000);

    return () => clearTimeout(timer); // Cleanup the timer if the component is unmounted
  }, [navigation]);

  return (
    <View style={tw`flex-1 justify-center items-center bg-blue-500`}>
      <Image source={require('../assets/logo_trial__3_-removebg-preview (2).png')} style={tw`w-60 h-60`} resizeMode="contain" />
      <ActivityIndicator size="large" color="#fff" style={tw`absolute bottom-10`} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
