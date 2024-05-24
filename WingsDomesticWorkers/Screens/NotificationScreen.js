import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';

const notifications = [
  {
    id: '1',
    image: require('../assets/logo.png'),
    title: 'New Booking',
    message: 'You have a new booking from John Doe',
    time: '2 mins ago',
  },
  {
    id: '2',
    image: require('../assets/logo.png'),
    title: 'Service Completed',
    message: 'Your service with Jane Smith has been marked as completed',
    time: '10 mins ago',
  },
  {
    id: '3',
    image: require('../assets/logo.png'),
    title: 'Payment Received',
    message: 'You have received a payment of $150 from Michael Johnson',
    time: '1 hour ago',
  },
  {
    id: '3',
    image: require('../assets/logo.png'),
    title: 'Payment Received',
    message: 'You have received a payment of $150 from Michael Johnson',
    time: '1 hour ago',
  },
  {
    id: '3',
    image: require('../assets/logo.png'),
    title: 'Payment Received',
    message: 'You have received a payment of $150 from Michael Johnson',
    time: '1 hour ago',
  },
  {
    id: '3',
    image: require('../assets/logo.png'),
    title: 'Payment Received',
    message: 'You have received a payment of $150 from Michael Johnson',
    time: '1 hour ago',
  },
  {
    id: '3',
    image: require('../assets/logo.png'),
    title: 'Payment Received',
    message: 'You have received a payment of $150 from Michael Johnson',
    time: '1 hour ago',
  },
  // Add more notifications as needed
];

const NotificationItem = ({ item }) => (
  <View style={[tw`flex-row p-4 mb-4 bg-white rounded-lg border border-gray-200`, styles.notificationContainer]}>
    <Image source={item.image} style={[tw`w-12 h-12 rounded-full`, styles.notificationImage]} />
    <View style={tw`ml-4 flex-1`}>
      <Text style={tw`text-sm font-semibold text-gray-800`}>{item.title}</Text>
      <Text style={tw`text-sm text-gray-600`}>{item.message}</Text>
      <Text style={tw`text-xs text-gray-400`}>{item.time}</Text>
    </View>
  </View>
);

const NotificationScreen = () => {
    const navigation = useNavigation();  
  return (
    <View style={tw`flex-1 p-4 bg-gray-100 mt-5 `}>
    <Text style={tw`text-3xl md:text-sm text-gray-800 font-bold tracking-wide mb-4 ml-12`}>
     <Icon name="arrow-back" size={20} color="black" style={tw`text-3xl md:text-sm text-gray-800 font-bold tracking-wide  mr-10`} onPress={() => navigation.navigate('Dashboard')}/>
        Notifications
    </Text>
    <View style={tw`flex-1  bg-gray-100 mt-2`}>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <NotificationItem item={item} />}
        contentContainerStyle={tw`pb-4`}
      />
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  notificationContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  notificationImage: {
    borderRadius: 50,
  },
});

export default NotificationScreen;
