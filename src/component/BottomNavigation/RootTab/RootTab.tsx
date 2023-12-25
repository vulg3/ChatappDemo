import {NavigatorScreenParams} from '@react-navigation/native';
import {RootStackParamListMessage} from '../../Root/RootStackMessager';
import {RootStackParamListCall} from '../../Root/RootStackCall';
import {RootStackParamListContacts} from '../../Root/RootStackContacts';
import {RootStackParamListSetting} from '../../Root/RootStackSetting';
import MessagerNavigation from '../../Navigation/MessagerNavigation';
import CallNavigation from '../../Navigation/CallNavigation';
import ContactsNavigation from '../../Navigation/ContactsNavigation';
import SettingNavigation from '../../Navigation/SettingNavigation';
import {COLORS, ROUTES} from '../../constants';
import {StyleSheet} from 'react-native';

export enum RootTabScreenEnum {
  StackMess = 'Messager',
  StackCall = 'Call',
  StackContacts = 'Contacts',
  StackSetting = 'Setting',
}

export type RootTabParamList = {
  StackMess: NavigatorScreenParams<RootStackParamListMessage>;
  StackCall: NavigatorScreenParams<RootStackParamListCall>;
  StackContacts: NavigatorScreenParams<RootStackParamListContacts>;
  StackSetting: NavigatorScreenParams<RootStackParamListSetting>;
};

export const RootBottomTab = () => {
  const Screens: any[] = [
    {id: 1, name: RootTabScreenEnum.StackMess, component: MessagerNavigation , option:{}},
    {id: 2, name: RootTabScreenEnum.StackMess, component: CallNavigation, option:{}},
    {id: 3, name: RootTabScreenEnum.StackMess, component: ContactsNavigation, option:{}},
    {id: 4, name: RootTabScreenEnum.StackMess, component: SettingNavigation, option:{}},
  ];
  return Screens;
};
export const configTab = (route: any) => {
  return {
    tabBarIcon: ({color, focused}: any) => {
      let iconName: any;
      if (route.name === ROUTES.MESS) {
        iconName = focused ? 'message' : 'message-square';
      } else if (route.name === ROUTES.CALL) {
        iconName = focused ? 'call-sharp' : 'call-outline';
      } else if (route.name === ROUTES.CONTACTS) {
        iconName = focused ? 'contacts' : 'contacts-outline';
      } else if (route.name === ROUTES.SETTING) {
        iconName = focused ? 'settings-sharp' : 'settings-outline';
      }
      return iconName;
    },
    headerShown: false,
    tabBarShowLabel: false,
    tabBarInactiveTintColor: COLORS.dark,
    tabBarStyle: styles.tabBarStyle,
    tabBarActiveTintColor: COLORS.primary,
  };
};

const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 55,
  },
});
