import { uid } from 'uid';
import { FadeContactsScreen } from '../BottomNavigation/AniScreenBottomTab';


export enum RootStackScreenEnumContacts {
  ContactsScreen = 'ContactsScreen',
}
export type RootStackParamListContacts = {
  Contacts: undefined;
};

export const RootStackScreenContacts = () => {
  const Screen: any = [
    { id: uid(), name: RootStackScreenEnumContacts.ContactsScreen, component: FadeContactsScreen, options: {} },
  ]
  return Screen;

};
