import { Stack } from './Props';
import { configStack } from '../Root/RootStack';
import * as React from 'react';
import { RootStackScreenContacts } from '../Root/RootStackContacts';

const ContactsNavigation = () => {
  return <Stack.Navigator initialRouteName='ContactsScreen' screenOptions={({ route }) => configStack(route)}>
    {
      RootStackScreenContacts().map((item: any) => {
        return <Stack.Screen
          key={item.id}
          name={item.name}
          component={item.component}
          options={item.options}
        />
      })}
  </Stack.Navigator>
};

export default ContactsNavigation;
