import { uid } from 'uid';
import { FadeCallScreen } from '../BottomNavigation/AniScreenBottomTab';


export enum RootStackScreenEnumCall {
  CallHistory = 'CallHistory',
}
export type RootStackParamListCall = {
  CallHistory: undefined;
};

export const RootStackScreenCall = () => {
  const Screen: any = [
    { id: uid(), name: RootStackScreenEnumCall.CallHistory, component: FadeCallScreen, options: {} },
  ]
  return Screen;
};
