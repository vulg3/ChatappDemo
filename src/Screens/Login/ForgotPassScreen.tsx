import {
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
import React, {useState} from 'react';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import {useDispatch} from 'react-redux';
import {RootStackScreenEnumLogin} from '../../component/Root/RootStackLogin';
import Icon from 'react-native-vector-icons/AntDesign';
import {HEIGHT, WIDTH} from '../../untils/utility';

const ForgotPassScreen = (props: any) => {
  const {navigation}: NativeStackHeaderProps = props;

  const [password, setPassword] = useState('');
  const [newPass, setnewPass] = useState('');
  const dispatch = useDispatch();

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -150}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.container}>
          <View
            style={{
              height: '30%',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{width: 200, height: 200}}
              source={require('../../assets/Image/chat-app-logo-icon-vector-removebg-preview.png')}
            />
          </View>
          <View style={{marginVertical: 20, paddingHorizontal: 20}}>
            <Text style={{color: '#24786D', fontSize: 15, fontWeight: 'bold'}}>
              New password
            </Text>
            <TextInput
              style={styles.input}
              keyboardType="email-address"
              autoCapitalize="none"
              value={password}
              onChangeText={text => setPassword(text)}
            />
            <Text style={{color: '#24786D', fontSize: 15, fontWeight: 'bold'}}>
              Confirm New password
            </Text>
            <TextInput
              style={styles.input}
              secureTextEntry
              autoCapitalize="none"
              value={newPass}
              onChangeText={text => setnewPass(text)}
            />
          </View>
          <View style={{position: 'absolute', bottom: 60, width: '100%'}}>
            <TouchableOpacity style={styles.btnLogin}>
              <Text style={styles.btnText}>Change Password</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ForgotPassScreen;

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
    textShadowOffset: {width: 2, height: 2},
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
