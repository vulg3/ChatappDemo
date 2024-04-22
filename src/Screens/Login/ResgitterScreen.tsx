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
import { RootStackScreenEnumLogin } from '../../component/Root/RootStackLogin';
import { useDispatch } from 'react-redux';
import { isLoading } from '../../redux/Slices';
import AxiosInstance from '../../Axios/Axios';

const ResgitterScreen = (props: any) => {
  const { navigation }: NativeStackHeaderProps = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmpass, setConfirmpass] = useState('');
  const dispatch = useDispatch();

  async function register() {
    const emailPattern = /^[a-zA-Z0-9._-]+@gmail.com$/;

    try {
      if (name == '') {
        Alert.alert("Vui lòng tên không được để trống");
      } else if (email == '') {
        Alert.alert("Vui lòng email không được để trống");
      } else if (!emailPattern.test(email)) {
        Alert.alert("Email không hợp lệ");
      } else if (password == '') {
        Alert.alert("Vui lòng mật khẩu không được để trống");
      } else if (confirmpass == '') {
        Alert.alert("Vui lòng nhập lại mật khẩu không được để trống");
      } else {
        if (password != confirmpass) {
          return Alert.alert('Thông báo', 'Mật khẩu không trùng khớp!', [
            { text: 'OK' }
          ]);;
        }
        dispatch(isLoading(true));
        const result = await AxiosInstance().post('/usersInfo/RegisterUser', { username: name, email: email, password: password });
        if (result) {
          dispatch(isLoading(false));
          navigation.navigate(RootStackScreenEnumLogin.LoginScreen);
          console.log('RegisterUser sucsesfully');
        }
      }
    } catch (error) {
      console.log('getNews Error: ', error);
    }
  }

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
            <Text style={styles.Title}>Sign up with Email</Text>
            <Text style={styles.Content}>
              Get chatting with friends and family today by signing up for our
              chat app!
            </Text>
          </View>
          <View style={{ marginVertical: 20, paddingHorizontal: 20 }}>
            <Text style={{ color: '#24786D', fontSize: 15, fontWeight: 'bold' }}>
              Your name
            </Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              value={name}
              onChangeText={text => setName(text)}
            />
            <Text style={{ color: '#24786D', fontSize: 15, fontWeight: 'bold' }}>
              Your email
            </Text>
            <TextInput
              style={styles.input}
              secureTextEntry
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
            <Text style={{ color: '#24786D', fontSize: 15, fontWeight: 'bold' }}>
              Confirm Password
            </Text>
            <TextInput
              style={styles.input}
              secureTextEntry
              autoCapitalize="none"
              value={confirmpass}
              onChangeText={text => setConfirmpass(text)}
            />
          </View>
          <View style={{ position: 'absolute', bottom: 60, width: '100%' }}>
            <TouchableOpacity style={styles.btnLogin} onPress={register}>
              <Text style={styles.btnText}>Create an account</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ResgitterScreen;

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
    width: WIDTH * 0.8,
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 15,
    marginBottom: 50,
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
