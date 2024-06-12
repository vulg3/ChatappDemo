import React, { useContext } from 'react';
import { LinearGradient } from 'react-native-linear-gradient';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import { HEIGHT, WIDTH } from '../../untils/utility';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { RootStackScreenEnumLogin } from '../../component/Root/RootStackLogin';
import { useDispatch, useSelector } from 'react-redux';
import { LoginGoogle, isLoading, isLogin, updateUser } from '../../redux/Slices';
import Realm from 'realm';
import AxiosInstance from '../../Axios/Axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { AccessToken, LoginManager } from 'react-native-fbsdk-next';
import auth from '@react-native-firebase/auth';

interface User {
  _id: string;
  _idUser: string;
  email: string;
  name: string | null;
  avatar: string | null;
  status: string | null;
  birthDate: string;
  phonenumber: string;
  listChat: any[];
  room: [];
}
const IntroductionScreen = (props: any) => {
  const { navigation }: NativeStackHeaderProps = props;
  const dispatch = useDispatch();
  const isLoginState = useSelector((state: any) => state.SlicesReducer.isLogin);

  const app = new Realm.App({
    id: "chatappdemo-fjywd",
  });

  GoogleSignin.configure({
    webClientId: '759133897476-9qoqju8aooujc22c34apkjfcpbvrc8jq.apps.googleusercontent.com',
  });

  const handleSubmit = (data: User) => {
    console.log('check');
    dispatch(updateUser({ _id: data._id, _idUser: data._idUser, email: data.email, name: data.name, avatar: data.avatar, birthDay: data.birthDate, phonenumber: data.phonenumber, room: data.room, listChat: data.listChat, status: data.status }))
    dispatch(isLogin(!isLoginState));
  }

  async function signInGoogle() {
    try {
      dispatch(isLoading(true));
      await GoogleSignin.hasPlayServices();
      const { idToken, user: userGoogle }: any = await GoogleSignin.signIn();
      const credential = Realm.Credentials.google({ idToken });
      const userRealm = await app.logIn(credential);

      if (userRealm) {

        console.log(credential + 'credential');
        console.log(userRealm + 'userRealm');
        console.log("signed in as Realm user Google", userRealm.id);
        const response = await AxiosInstance().post(`/user/GetUserByID/${userRealm.id}`, { name: userGoogle.user.name, email: userGoogle.user.email });
        const user = response.data.data;
        await AsyncStorage.setItem('token', response?.data.access_token);
        user && dispatch(isLoading(false));
        handleSubmit({ _id: user._id, _idUser: user._idUser, email: userGoogle.user.email, name: userGoogle?.user?.givenName, phonenumber: user.phonenumber, birthDate: user.birthDate, listChat: user.listChat, avatar: userGoogle?.user.photo, status: user.status, room: user.room });
        dispatch(LoginGoogle(true));
        console.log('Signed in with Google!');
        console.log("login succsetfully");
      } else {
        dispatch(isLoading(false));
        console.log("login failed");
      }
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        dispatch(isLoading(false));
      } else if (error.code === statusCodes.IN_PROGRESS) {
        dispatch(isLoading(false));
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        dispatch(isLoading(false));
      } else {
        dispatch(isLoading(false));
        console.log(error);
        console.log("Error message:", error.message);
        console.log("Error code:", error.code);
        console.log("Error stack trace:", error.stack);
      }
    }
  };

  async function signInFacebook() {
    try {
      console.log('check button facebook');

      // Attempt login with permissions
      const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

      if (result.isCancelled) {
        throw 'User cancelled the login process';
      }

      // Once signed in, get the users AccessToken
      const data = await AccessToken.getCurrentAccessToken();

      if (!data) {
        throw 'Something went wrong obtaining access token';
      }

      // Create a Firebase credential with the AccessToken
      const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

      // Sign-in the user with the credential
      return auth().signInWithCredential(facebookCredential);
    } catch (error) {
      console.log('check faild facebook');
    }

  }

  return (
    <View>
      <LinearGradient colors={['#FFBBFF', '#43116A']} style={{ height: HEIGHT }}>
        <View>
          <View style={styles.header}>
            <Image
              style={styles.imageLogo}
              source={require('../../assets/Image/chat-app-logo-icon-vector-removebg-preview.png')}
            />
          </View>
          <View style={styles.container}>
            <Text style={styles.Titletxt}>Connect friends easily & quickly</Text>
            <Text style={styles.Content}>Our chat app is the perfect way to stay connected with friends and family.</Text>
            <View style={styles.Authentication}>
              <Pressable style={styles.Circle}>
                <Image
                  style={styles.ImageCircle}
                  source={require('../../assets/Image/Facebook-f_Logo-Blue-Logo.wine.png')}
                />
              </Pressable>
              <Pressable style={styles.Circle} onPress={() => signInGoogle().then(() => console.log('Signed in with Google!'))}>
                <Image
                  style={styles.ImageCircle}
                  source={require('../../assets/Image/Google_Pay-Logo.wine.png')}
                />
              </Pressable>
              <Pressable style={styles.Circle} onPress={() => signInFacebook().then(() => console.log('Signed in with Facebok!'))}>
                <Image
                  style={styles.ImageCircle}
                  source={require('../../assets/Image/Apple_Inc.-Logo.wine.png')}
                />
              </Pressable>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <View style={styles.horizontalLine} />
              <Text style={{ color: '#D6E4E0', fontSize: 15 }}>OR</Text>
              <View style={styles.horizontalLine} />
            </View>
            <TouchableOpacity style={styles.btnSignup} onPress={() => navigation.navigate(RootStackScreenEnumLogin.RegisterScreen)}>
              <Text
                style={{
                  fontSize: 20,
                  alignSelf: 'center',
                  lineHeight: HEIGHT * 0.06,
                  color: '#000E08',
                }}>
                Sign up with email
              </Text>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 17,
              }}>
              <Text style={{ color: '#B9C1BE', fontSize: 15 }}>
                Existing account?
              </Text>
              <Pressable onPress={() => navigation.navigate(RootStackScreenEnumLogin.LoginScreen)}>
                <Text style={{ color: 'white', fontSize: 15 }}> Login</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

export default IntroductionScreen;

const styles = StyleSheet.create({
  btnSignup: {
    width: WIDTH * 0.8,
    height: HEIGHT * 0.06,
    backgroundColor: 'white',
    alignSelf: 'center',
    margin: 10,
    borderRadius: 20,
  },
  horizontalLine: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginVertical: 10,
    width: '30%',
    margin: 20,
    justifyContent: 'center',
  },
  ImageCircle: {
    borderRadius: 200,
    width: 50,
    height: 50,
    overflow: 'hidden',
    padding: 5,
  },
  Circle: {
    width: 50,
    height: 50,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
    margin: 10,
  },
  Authentication: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  Content: {
    color: '#B9C1BE',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: 26,
    justifyContent: 'center',
    width: '80%',
    paddingLeft: 20,
  },
  Titletxt: {
    fontSize: 70,
    fontFamily: 'AbrilFatface-Regular',
    fontStyle: 'normal',
    lineHeight: 90,
    paddingLeft: 20,
    color: 'white',
  },
  imageLogo: {
    width: '30%',
    height: '90%',
    marginTop: 10,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '10%',
  },
  container: {
    width: WIDTH,
    height: HEIGHT,
  },
});
