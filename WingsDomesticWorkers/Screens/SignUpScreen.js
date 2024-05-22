import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Logo from '../assets/logo_trial__3_-removebg-preview (2).png'; 

const SignupScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={tw`flex-1 bg-purple-900`}>
      <View style={tw`flex-1 justify-center items-center`}>
        <Image source={Logo} style={tw`w-20 h-10 mb-2`} />
        <Text style={tw`text-4xl text-gray-300 font-semibold mb-3`}>Welcome</Text>
        <Text style={tw`text-sm text-gray-300 opacity-75 mb-2 text-center`}>Welcome You can book a worker of your choice her you will get the best services .</Text>
      </View>
      <View style={tw`p-8 bg-white rounded-3xl shadow-xl mx-3 mb-2`}>
        <Text style={tw`text-2xl font-semibold text-gray-800 mb-6`}>Sign Up</Text>
        <TextInput
          style={tw`w-full text-sm px-4 py-3 bg-gray-200 rounded-lg mb-4`}
          placeholder="Name"
          keyboardType="name"
          autoCapitalize="none"
        />
        <TextInput
          style={tw`w-full text-sm px-4 py-3 bg-gray-200 rounded-lg mb-4`}
          placeholder="Phone"
          keyboardType="phone"
          autoCapitalize="none"
        />
        <TextInput
          style={tw`w-full text-sm px-4 py-3 bg-gray-200 rounded-lg mb-4`}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <View style={tw`relative mb-4`}>
          <TextInput
            style={tw`w-full text-sm px-4 py-3 bg-gray-200 rounded-lg`}
            placeholder="Password"
            secureTextEntry
          />
          <TouchableOpacity style={tw`absolute inset-y-0 right-0 flex items-center justify-center mr-3`}>
            <Icon name="eye-off" size={20} color="purple" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={tw`mb-6`}>
          <Text style={tw`text-sm text-right text-blue-700`}>Forgot your password?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`w-full bg-blue-900 p-3 rounded-lg flex items-center justify-center mb-6`}
          onPress={() => navigation.navigate('EmployerDashboard')}
        >
          <Text style={tw`text-gray-100 text-lg font-semibold`}>Sign Up</Text>
        </TouchableOpacity>
        <Text style={tw`text-center text-gray-800 mb-4`}>Have an account? 
          <Text onPress={() => navigation.navigate('Login')} style={tw`text-blue-700`}> Login</Text>
        </Text>
        <View style={tw`flex flex-row items-center justify-center mb-6`}>
          <View style={tw`h-px w-16 bg-gray-300`}></View>
          <Text style={tw`text-sm text-gray-800 mx-4`}>Or continue with</Text>
          <View style={tw`h-px w-16 bg-gray-300`}></View>
        </View>
        <TouchableOpacity
          style={tw`w-full bg-gray-100 p-3 rounded-lg flex items-center justify-center`}
          onPress={() => console.log('Continue with Google')}
        >
          <View style={tw`flex flex-row items-center`}>
            <Icon name="logo-google" size={20} color="gray" />
            <Text style={tw`text-gray-800 text-lg ml-4`}>Continue with Google</Text>
          </View>
        </TouchableOpacity>
        <Text style={tw`text-sm text-center text-gray-700 mt-6`}>
          By signing up, you agree to our <Text style={tw`text-purple-700`}>terms and conditions</Text>
        </Text>
      </View>
    </View>
  );
}

export default SignupScreen;