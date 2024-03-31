import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { HEIGHT, WIDTH } from '../../untils/utility';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { RootStackScreenEnumLogin, RootStackScreenLogin } from '../../component/Root/RootStackLogin';
import { isLoading, isLogin, updateUser } from '../../redux/Slices';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import AxiosInstance from '../../Axios/Axios';
import Navigation from '../../component/Navigation/Navigation';
import { GoogleSignin, statusCodes } from "@react-native-google-signin/google-signin";


interface Login {
  email: string;
  password: string;
}
interface User {
  _id: string;
  _idUser: string;
  email: string;
  userName: string | null | undefined;
  isOnline: string;
  avatar: string | null | undefined;
  gender: string;
  birthDay: string;
  phone: string;
  Chat: [];
}

const LoginScreen = (props: any) => {
  const { navigation }: NativeStackHeaderProps = props;
  const [userInfo, setUserInfo] = useState<any>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const isLoginState = useSelector((state: any) => state.SlicesReducer.isLogin);

  GoogleSignin.configure({
    webClientId: '928635624624-vjkmkm1tl3jj6hb2nsaaaaa2229c5g34.apps.googleusercontent.com',
  });


  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setUserInfo({ userInfo });
    } catch (error : any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };


  const handleSubmit = (data: User) => {
    console.log('check');
    dispatch(
      updateUser({
        _id: data._id,
        _idUser: data._idUser,
        email: data.email,
        userName: data.userName,
        avatar: data.avatar,
        gender: data.gender,
        birthDay: data.birthDay,
        phone: data.phone,
        isOnline: data.isOnline,
        Chat: data.Chat,
      }),
    );
    dispatch(isLogin(!isLoginState));
  };

  const login = async (info: Login) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    try {
      if (email == '') {
        Alert.alert('Vui lòng email không được để trống');
      } else if (!emailPattern.test(email)) {
        Alert.alert('Email không hợp lệ');
      } else if (password == '') {
        Alert.alert('Vui lòng nhập mật khẩu');
      } else {
        const result = await AxiosInstance().post('/auth/login', {
          email: info.email,
          password: info.password,
        });
        const userInfo = result?.data.user;
        userInfo && dispatch(isLoading(true));
        console.log(userInfo);
        if (result.data.status) {
          const response = await AxiosInstance().post(
            `/users/getUser/${userInfo._id}`,
            { name: userInfo.username, email: userInfo.email },
          );
          const user = response.data.data;
          await AsyncStorage.setItem('token', response?.data.access_token);
          user && dispatch(isLoading(false));
          if (user.active) {
            if (userInfo.role === 'user') {
              await AsyncStorage.setItem('email', email);
              await AsyncStorage.setItem('password', password);
              handleSubmit({
                _id: user._id,
                _idUser: userInfo._id,
                email: userInfo.email,
                userName: userInfo.username,
                avatar: user.avatar,
                gender: user.gender,
                birthDay: user.birthDay,
                phone: user.phone,
                isOnline: user.isOnline,
                Chat: user.Chat,
              });
            } else {
              console.warn('Tài khoản không có quyền đăng nhập !');
            }
          } else {
            console.warn('Tài khoản đã bị khóa !');
          }
        } else {
          console.log(result.data.message);
        }
      }
    } catch (error) {
      console.log('Error: ', error);
    }
    return [];
  };
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -150}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.container}>
          <Pressable
            style={{ margin: 15 }}
            onPress={() =>
              navigation.navigate(RootStackScreenEnumLogin.IntroductionScreen)
            }>
            <Icon name="arrowleft" size={25} color="black" />
          </Pressable>
          <View style={{ marginTop: 40 }}>
            <Text style={styles.Title}>Login to Chatbox</Text>
            <Text style={styles.Content}>
              Welcome back! Sign in using your social account or email to
              continue us
            </Text>
            <View style={styles.Authentication}>
              <Pressable style={styles.Circle}>
                <Image
                  style={styles.ImageCircle}
                  source={require('../../assets/Image/Facebook-f_Logo-Blue-Logo.wine.png')}
                />
              </Pressable>
              <Pressable style={styles.Circle}>
                <Image
                  style={styles.ImageCircle}
                  source={require('../../assets/Image/Google_Pay-Logo.wine.png')}
                />
              </Pressable>
              <Pressable style={styles.Circle}>
                <Image
                  style={styles.ImageCircle}
                  source={require('../../assets/Image/appleblack.png')}
                />
              </Pressable>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <View style={styles.horizontalLine} />
              <Text style={{ color: '#797C7B', fontSize: 15 }}>OR</Text>
              <View style={styles.horizontalLine} />
            </View>
          </View>
          <View style={{ marginVertical: 20, paddingHorizontal: 20 }}>
            <Text style={{ color: '#24786D', fontSize: 15, fontWeight: 'bold' }}>
              Your email
            </Text>
            <TextInput
              style={styles.input}
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={text => setEmail(text)}
            />
            <Text style={{ color: '#24786D', fontSize: 15, fontWeight: 'bold' }}>
              Password
            </Text>
            <TextInput
              style={styles.input}
              secureTextEntry
              autoCapitalize="none"
              value={password}
              onChangeText={text => setPassword(text)}
            />
            <TouchableOpacity onPress={() => navigation.navigate(RootStackScreenEnumLogin.RegisterScreen)} style={{ alignItems: 'flex-end' ,margin:20}}>
              <Text style={{ color: '#24786D', fontSize: 15, fontWeight: 'bold' }}>
                Sign up with email ?
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ position: 'absolute', bottom: 60, width: '100%', marginTop: 10 }}>
            <TouchableOpacity
              style={styles.btnLogin}
              onPress={() => login({ email, password })}>
              <Text style={styles.btnText}>Login</Text>
            </TouchableOpacity>
            <Pressable onPress={() => navigation.navigate(RootStackScreenEnumLogin.VerificationScreen)}>
              <Text style={styles.Forgot}>Forgot Password?</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  Forgot: {
    color: '#24786D',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  btnText: {
    fontSize: 20,
    alignSelf: 'center',
    lineHeight: HEIGHT * 0.06,
    fontWeight: 'bold',
    color: '#797C7B',
  },
  btnLogin: {
    width: WIDTH * 0.8,
    height: HEIGHT * 0.06,
    backgroundColor: '#F3F6F6',
    alignSelf: 'center',
    borderRadius: 20,
  },
  input: {
    height: 40,
    borderColor: '#CDD1D0',
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    marginTop: 10,
  },
  horizontalLine: {
    borderBottomColor: '#CDD1D0',
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
    borderColor: 'black',
    margin: 10,
  },
  Authentication: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
    marginBottom: 15,
  },
  Content: {
    width: WIDTH * 0.7,
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 15,
  },
  Title: {
    color: '#000E08',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'center',
  },
  container: {
    height: HEIGHT,
    backgroundColor: 'white',
  },
});
