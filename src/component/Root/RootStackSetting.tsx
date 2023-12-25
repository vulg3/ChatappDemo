import { uid } from 'uid';
import { FadeSettingScreen } from '../BottomNavigation/AniScreenBottomTab';


export enum RootStackScreenEnumSetting {
  SettingScreen = 'SettingScreen',
}
export type RootStackParamListSetting = {
  SettingScreen: undefined;
};

export const RootStackScreenSetting = () => {
  const Screen: any = [
    {
      id: uid(),
      name: RootStackScreenEnumSetting.SettingScreen,
      comonent: FadeSettingScreen,
      options: {},
    },
  ]
  return Screen;

};
