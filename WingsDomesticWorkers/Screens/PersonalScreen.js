import React from 'react';
import { View, ScrollView, Image, Text, Button } from 'react-native';
import tw from 'tailwind-react-native-classnames';

const PersonalScreen = () => {
  // Dummy data for photos and videos
  const photos = [
    { id: 1, imageUrl: 'https://placeimg.com/200/200/people' },
    { id: 2, imageUrl: 'https://placeimg.com/200/200/nature' },
    { id: 3, imageUrl: 'https://placeimg.com/200/200/architecture' },
  ];

  const videos = [
    { id: 1, videoUrl: 'https://www.sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4' },
    { id: 2, videoUrl: 'https://www.sample-videos.com/video123/mp4/720/big_buck_bunny_720p_2mb.mp4' },
  ];

  return (
    <View style={tw`flex-1`}>
      {/* Top half of the page - Image of the person */}
      <View>
        <Image
          source={require('.././assets/cleaner3.jpg')}
          style={tw`w-full h-1/2`}
          resizeMode="cover"
        />
      </View>

      {/* Bottom half of the page - Scrollable content */}
      <ScrollView style={tw`flex-1`}>
        <View style={tw`p-5`}>
          <Text style={tw`text-2xl font-bold mb-2`}>Name of the person</Text>
          <Text>Services offered: Service 1, Service 2, Service 3</Text>
          <Text>Price: $XX.XX per service</Text>
          <Text>Location: Address, City, State</Text>

          {/* Section for photos */}
          <Text style={tw`text-xl mt-5 mb-2`}>Photos</Text>
          <ScrollView horizontal style={tw`flex-row`}>
            {photos.map(photo => (
              <Image
                key={photo.id}
                source={{ uri: photo.imageUrl }}
                style={tw`w-50 h-50 mr-2`}
                resizeMode="cover"
              />
            ))}
          </ScrollView>

          {/* Section for videos */}
          <Text style={tw`text-xl mt-5 mb-2`}>Videos</Text>
          <ScrollView horizontal style={tw`flex-row`}>
            {videos.map(video => (
              <View key={video.id} style={tw`mr-2`}>
                <Video
                  source={{ uri: video.videoUrl }}
                  style={tw`w-50 h-50`}
                  resizeMode="cover"
                  controls={true}
                />
              </View>
            ))}
          </ScrollView>

          {/* Reviews section */}
          <Text style={tw`text-xl mt-5 mb-2`}>Reviews</Text>
          {/* Implement reviews component */}

          {/* Button to book now */}
          <Button title="Book Now" onPress={() => {/* Implement booking functionality */}} />

          {/* Message button */}
          <Button title="Message" onPress={() => {/* Implement messaging functionality */}} />
        </View>
      </ScrollView>
    </View>
  );
};

export default PersonalScreen;
