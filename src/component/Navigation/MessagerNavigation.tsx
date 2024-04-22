import { Stack } from './Props';
import { configStack } from '../Root/RootStack';
import * as React from 'react';
import { RootStackScreenMessager } from '../Root/RootStackMessager';

const MessagerNavigation = () => {

  return <Stack.Navigator initialRouteName='MessageScreen' screenOptions={(props) => configStack(props)}>
    {
      RootStackScreenMessager().map((item: any) => {
        return <Stack.Screen key={item.id} name={item.name} component={item.component} options={item.options} />
      })
    }
  </Stack.Navigator>

}

export default MessagerNavigation;
