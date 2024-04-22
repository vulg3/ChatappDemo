import { NavigatorScreenParams } from '@react-navigation/native';
import { RootStackParamListMessage } from '../../Root/RootStackMessager';
import { RootStackParamListCall } from '../../Root/RootStackCall';
import { RootStackParamListContacts } from '../../Root/RootStackContacts';
import { RootStackParamListSetting } from '../../Root/RootStackSetting';
import MessagerNavigation from '../../Navigation/MessagerNavigation';
import CallNavigation from '../../Navigation/CallNavigation';
import ContactsNavigation from '../../Navigation/ContactsNavigation';
import SettingNavigation from '../../Navigation/SettingNavigation';
import { COLORS, ROUTES } from '../../constants';
import { StyleSheet } from 'react-native';
import IconMessAndContact from 'react-native-vector-icons/MaterialCommunityIcons';
import IconSettingAndContact from 'react-native-vector-icons/Ionicons';


export enum RootTabScreenEnum {
  StackMess = 'Message',
  StackCall = 'CallHistory',
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
    { id: 1, name: RootTabScreenEnum.StackMess, component: MessagerNavigation, option: {} },
    { id: 2, name: RootTabScreenEnum.StackCall, component: CallNavigation, option: {} },
    { id: 3, name: RootTabScreenEnum.StackContacts, component: ContactsNavigation, option: {} },
    { id: 4, name: RootTabScreenEnum.StackSetting, component: SettingNavigation, option: {} },
  ];

  return Screens;
};
export const configTab = (route: any) => {
  return {
    tabBarIcon: ({ color, focused }: any) => {
      let iconName: any;
      if (route.name === ROUTES.MESS) {
        iconName = focused ? 'message-processing' : 'message-processing-outline';
        return <IconMessAndContact name={iconName} size={22} color={color} />
      } else if (route.name === ROUTES.CALL) {
        iconName = focused ? 'call-sharp' : 'call-outline';
        return <IconSettingAndContact name={iconName} size={22} color={color} />
      } else if (route.name === ROUTES.CONTACTS) {
        iconName = focused ? 'contacts' : 'contacts-outline';
        return <IconMessAndContact name={iconName} size={22} color={color} />
      } else if (route.name === ROUTES.SETTING) {
        iconName = focused ? 'settings-sharp' : 'settings-outline';
        return <IconSettingAndContact name={iconName} size={22} color={color} />
      }
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
