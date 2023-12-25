import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const SplashScreen = () => {
  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        style={{width: 200, height: 200}}
        source={require('../../assets/Image/chat-app-logo-icon-vector-removebg-preview.png')}
      />
    </View>
  );
};

export default SplashScreen;

