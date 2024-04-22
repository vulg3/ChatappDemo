import { uid } from 'uid';
import { FadeSettingScreen } from '../BottomNavigation/AniScreenBottomTab';


export enum RootStackScreenEnumSetting {
  SettingScreen = 'SettingScreen',
}
export type RootStackParamListSetting = {
  Setting: undefined;
};

export const RootStackScreenSetting = () => {
  const Screen: any = [
    { id: uid(), name: RootStackScreenEnumSetting.SettingScreen, component: FadeSettingScreen, options: {} },
  ]
  return Screen;

};
