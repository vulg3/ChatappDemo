import React from 'react';
import { RootBottomTab, RootTabParamList, configTab } from './RootTab/RootTab';
import { COLORS } from '../../untils';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
const Tab = createMaterialBottomTabNavigator<RootTabParamList>();

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="StackMess"
      barStyle={{ backgroundColor: COLORS.transparent, height: 75 }}
      theme={{ colors: { background: 'red' } }}
      shifting
      activeColor={COLORS.dark}
      inactiveColor={COLORS.gray}
      screenOptions={({ route }: any) => configTab(route)}>
      {
        RootBottomTab().map((item, index) => <Tab.Screen key={item.id} name={item.name} component={item.component} options={item.option} />)
      }
    </Tab.Navigator>
  );
};

export default BottomTab;
