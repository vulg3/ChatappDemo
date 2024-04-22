  import Call from '../../Screens/Message/Call';
  import CallVideo from '../../Screens/Message/CallVideo';
  import MessageDetail from '../../Screens/Message/MessageDetail';
  import { uid } from 'uid';
  import { FadeMessageScreen } from '../BottomNavigation/AniScreenBottomTab';

  export enum RootStackScreenEnumMessage {
    Message = 'Message',
    MessageDetail = 'MessageDetail',
    Call = 'Call',
    CallVideo = 'CallVideo',
  }
  export type RootStackParamListMessage = {
    Message: undefined;
    MessageDetail: undefined;
    Call: undefined;
    CallVideo: undefined;
  };

  export const RootStackScreenMessager = () => {
    const Screen: any = [
      { id: uid(), name: RootStackScreenEnumMessage.Message, component: FadeMessageScreen, options: {} },
      { id: uid(), name: RootStackScreenEnumMessage.MessageDetail, component: MessageDetail, options: {} },
      { id: uid(), name: RootStackScreenEnumMessage.Call, component: Call, options: {} },
      { id: uid(), name: RootStackScreenEnumMessage.CallVideo, component: CallVideo, options: {} },
    ]
    return Screen;
  };
