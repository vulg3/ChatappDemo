/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';
import SplashScreen from './src/Screens/Login/SplashScreen';
import IntroductionScreen from './src/Screens/Login/IntroductionScreen';


function App(): JSX.Element {

  return(
    <SafeAreaView>
      <IntroductionScreen/>
    </SafeAreaView>

  )
}

export default App;
