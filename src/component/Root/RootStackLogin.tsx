
import { uid } from 'uid';
import LoginScreen from '../../Screens/Login/LoginScreen';
import ResgitterScreen from '../../Screens/Login/ResgitterScreen';
import ForgotPassScreen from '../../Screens/Login/ForgotPassScreen';
import VerificationScreen from '../../Screens/Login/VerificationScreen';
import IntroductionScreen from '../../Screens/Login/IntroductionScreen';


export enum RootStackScreenEnumLogin {
    LoginScreen = 'LoginScreen',
    RegisterScreen = 'RegisterScreen',
    VerificationScreen = 'VerificationScreen',
    ForgotPass = 'ForgotPass',
    IntroductionScreen = 'IntroductionScreen',
}
export type RootStackParamListLogin = {
    LoginScreen: undefined,
    RegisterScreen: undefined,
    VerificationScreen: undefined,
    ForgotPass: undefined,
    IntroductionScreen:undefined,
}


export const RootStackScreenLogin = () => {
    const Screen: any = [
        { id: uid(), name: RootStackScreenEnumLogin.LoginScreen, component: LoginScreen, options: {} },
        { id: uid(), name: RootStackScreenEnumLogin.RegisterScreen, component: ResgitterScreen, options: {} },
        { id: uid(), name: RootStackScreenEnumLogin.VerificationScreen, component: VerificationScreen, options: {} },
        { id: uid(), name: RootStackScreenEnumLogin.ForgotPass, component: ForgotPassScreen, options: {} },
        { id: uid(), name: RootStackScreenEnumLogin.IntroductionScreen, component: IntroductionScreen, options: {} },


    ]
    return Screen;
}