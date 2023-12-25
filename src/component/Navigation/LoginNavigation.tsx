import {Stack} from './Props';
import {RootStackScreenLogin} from '../Root/RootStackLogin';
import {configStack} from '../Root/RootStack';
import * as React from 'react';

const LoginNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="IntroductionScreen"
      screenOptions={({route}) => configStack(route)}>
      {RootStackScreenLogin().map((item: any) => (
        <Stack.Screen
          key={item.id}
          name={item.name}
          component={item.component}
          options={item.options}
        />
      ))}
    </Stack.Navigator>
  );
};

export default LoginNavigation;
