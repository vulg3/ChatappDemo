import {Stack} from './Props';
import {configStack} from '../Root/RootStack';
import * as React from 'react';
import {RootStackScreenSetting} from '../Root/RootStackSetting';

const SettingNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="SettingScreen"
      screenOptions={({route}) => configStack(route)}>
      {RootStackScreenSetting().map((item: any) => {
        return (
          <Stack.Screen
            key={item.id}
            name={item.name}
            component={item.component}
            options={item.options}
          />
        );
      })}
    </Stack.Navigator>
  );
};

export default SettingNavigation;
