import Call from '../../Screens/Message/Call';
import CallVideo from '../../Screens/Message/CallVideo';
import MessageDetail from '../../Screens/Message/MessageDetail';
import { uid } from 'uid';
import { FadeMessageScreen } from '../BottomNavigation/AniScreenBottomTab';

export enum RootStackScreenEnumMessage {
  MessagerScreen = 'MessagerScreen',
  MessagerDetailScreen = 'MessagerDetailScreen',
  CallScreen = 'CallScreen',
  CallVideoScreen = 'CallVideoScreen',
}
export type RootStackParamListMessage = {
  MessagerScreen: undefined;
  MessagerDetailScreen: undefined;
  CallScreen: undefined;
  CallVideoScreen: undefined;
};

export const RootStackScreenMessager = () => {
  const Screen: any = [
    {
      id: uid(),
      name: RootStackScreenEnumMessage.MessagerScreen,
      comonent: FadeMessageScreen,
      options: {},
    },
    {
      id: uid(),
      name: RootStackScreenEnumMessage.MessagerDetailScreen,
      comonent: MessageDetail,
      options: {},
    },
    {
      id: uid(),
      name: RootStackScreenEnumMessage.CallScreen,
      comonent: Call,
      options: {},
    },
    {
      id: uid(),
      name: RootStackScreenEnumMessage.CallVideoScreen,
      comonent: CallVideo,
      options: {},
    },
  ]
  return Screen;
};
