import { uid } from 'uid';
import { FadeSettingScreen } from '../BottomNavigation/AniScreenBottomTab';


export enum RootStackScreenEnumSetting {
  Setting = 'Setting',
}
export type RootStackParamListSetting = {
  Setting: undefined;
};

export const RootStackScreenSetting = () => {
  const Screen: any = [
    {
      id: uid(),
      name: RootStackScreenEnumSetting.Setting,
      comonent: FadeSettingScreen,
      options: {},
    },
  ]
  return Screen;

};
