import { uid } from 'uid';
import { FadeContactsScreen } from '../BottomNavigation/AniScreenBottomTab';


export enum RootStackScreenEnumContacts {
    ContactsScreen = 'ContactsScreen',
}
export type RootStackParamListContacts = {
  ContactsScreen: undefined;
};

export const RootStackScreenContacts = () => {
  const Screen: any = [
    {
      id: uid(),
      name: RootStackScreenEnumContacts.ContactsScreen,
      comonent: FadeContactsScreen,
      options: {},
    },
  ]
  return Screen;

};
