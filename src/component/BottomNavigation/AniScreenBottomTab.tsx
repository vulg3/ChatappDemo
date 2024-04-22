import { useFocusEffect } from '@react-navigation/native';
import React from 'react';
import { Animated } from 'react-native';
import Message from '../../Screens/Message/MessageScreen';
import CallHistory from '../../Screens/CallHistory/CallHistoryScreen';
import Contacts from '../../Screens/Contacts/ContactsScreen';
import Setting from '../../Screens/Setting/SettingScreen';

const FadeInView = (props: { children: any }) => {
  const fadeAnim = React.useRef(new Animated.Value(0)).current;

  useFocusEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
    return () => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }).start();
    };
  });

  return (
    <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
      {props.children}
    </Animated.View>
  );
};

export const FadeMessageScreen = (props: JSX.IntrinsicAttributes) => (
  <FadeInView>
    <Message {...props} />
  </FadeInView>
);
export const FadeCallScreen = (props: JSX.IntrinsicAttributes) => (
  <FadeInView>
    <CallHistory {...props} />
  </FadeInView>
);
export const FadeContactsScreen = (props: JSX.IntrinsicAttributes) => (
  <FadeInView>
    <Contacts {...props} />
  </FadeInView>
);
export const FadeSettingScreen = (props: JSX.IntrinsicAttributes) => (
  <FadeInView>
    <Setting {...props} />
  </FadeInView>
);
