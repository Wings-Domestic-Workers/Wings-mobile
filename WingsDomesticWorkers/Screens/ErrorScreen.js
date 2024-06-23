import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'; // Using Feather icons for the arrow

const ErrorPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textCenter}>
        <Text style={styles.heading}>404</Text>
        <Text style={styles.subText}>Oops! Looks like you're lost.</Text>
        <View style={styles.animateBounce}>
          <Icon name="arrow-up-circle" size={64} color="#FF5733" />
        </View>
        <Text style={styles.subText}>Let's get you back <Text style={styles.linkText} onPress={() => alert('Redirecting to home')}>home</Text>.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textCenter: {
    alignItems: 'center',
  },
  heading: {
    fontSize: 96,
    fontWeight: 'bold',
    color: '#FF5733',
    marginBottom: 16,
  },
  subText: {
    fontSize: 18,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 16,
  },
  animateBounce: {
    marginBottom: 16,
  },
  linkText: {
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
});

export default ErrorPage;

