/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { DefaultTheme, PaperProvider } from 'react-native-paper';
import SplashScreen from './src/Screens/Login/SplashScreen';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/component/Navigation/Navigation';
import { SafeAreaView } from 'react-native';
import Message from './src/Screens/Message/MessageScreen';
import BottomTab from './src/component/BottomNavigation/BottomNavigator';
import LoginScreen from './src/Screens/Login/LoginScreen';

function App(): JSX.Element {
  // const theme = {
  //   ...DefaultTheme,
  //   colors: {
  //     ...DefaultTheme.colors,
  //     secondaryContainer: 'transparent',
  //   },
  // };
  // const [isLoading, setisLoading] = useState<boolean>(true);
  // setTimeout(() => {
  //   setisLoading(false);
  // }, 2000);

  // return isLoading ? (
  //   <SplashScreen />
  // ) : (
  //   <NavigationContainer>
  //     <PaperProvider theme={theme}>
  //       <Navigation/>
  //     </PaperProvider>
  //   </NavigationContainer>
  // );
  return (
    <NavigationContainer>
      <Navigation/>
    </NavigationContainer>

  );
}

export default App;
