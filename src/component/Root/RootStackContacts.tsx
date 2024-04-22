import { uid } from 'uid';
import { FadeContactsScreen } from '../BottomNavigation/AniScreenBottomTab';


export enum RootStackScreenEnumContacts {
  Contacts = 'Contacts',
}
export type RootStackParamListContacts = {
  Contacts: undefined;
};

export const RootStackScreenContacts = () => {
  const Screen: any = [
    { id: uid(), name: RootStackScreenEnumContacts.Contacts, component: FadeContactsScreen, options: {} },
  ]
  return Screen;

};
