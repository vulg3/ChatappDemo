/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';
import LoginScreen from './src/Screens/Login/LoginScreen';


function App(): JSX.Element {

  return(
    <SafeAreaView>
      <LoginScreen/>
    </SafeAreaView>

  )
}

export default App;
