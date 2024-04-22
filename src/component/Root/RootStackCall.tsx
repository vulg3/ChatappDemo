import { uid } from 'uid';
import { FadeCallScreen } from '../BottomNavigation/AniScreenBottomTab';


export enum RootStackScreenEnumCall {
  CallHistoryScreen = 'CallHistoryScreen',
}
export type RootStackParamListCall = {
  CallHistory: undefined;
};

export const RootStackScreenCall = () => {
  const Screen: any = [
    { id: uid(), name: RootStackScreenEnumCall.CallHistoryScreen, component: FadeCallScreen, options: {} },
  ]
  return Screen;
};
