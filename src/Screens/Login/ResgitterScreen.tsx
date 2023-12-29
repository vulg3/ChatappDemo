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
import Icon from 'react-native-vector-icons/AntDesign';
import {HEIGHT, WIDTH} from '../../utilities/utility';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import {RootStackScreenEnumLogin} from '../../component/Root/RootStackLogin';

const ResgitterScreen = (props: any) => {
  const {navigation}: NativeStackHeaderProps = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmpass, setConfirmpass] = useState('');

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -150}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.container}>
          <Pressable
            style={{margin: 15}}
            onPress={() =>
              navigation.navigate(RootStackScreenEnumLogin.IntroductionScreen)
            }>
            <Icon name="arrowleft" size={25} color="black" />
          </Pressable>
          <View style={{marginTop: 40}}>
            <Text style={styles.Title}>Sign up with Email</Text>
            <Text style={styles.Content}>
              Get chatting with friends and family today by signing up for our
              chat app!
            </Text>
          </View>
          <View style={{marginVertical: 20, paddingHorizontal: 20}}>
            <Text style={{color: '#24786D', fontSize: 15, fontWeight: 'bold'}}>
              Your name
            </Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              value={name}
              onChangeText={text => setName(text)}
            />
            <Text style={{color: '#24786D', fontSize: 15, fontWeight: 'bold'}}>
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
            <Text style={{color: '#24786D', fontSize: 15, fontWeight: 'bold'}}>
              Password
            </Text>
            <TextInput
              style={styles.input}
              secureTextEntry
              autoCapitalize="none"
              value={password}
              onChangeText={text => setPassword(text)}
            />
            <Text style={{color: '#24786D', fontSize: 15, fontWeight: 'bold'}}>
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
          <View style={{position: 'absolute', bottom: 60, width: '100%'}}>
            <TouchableOpacity style={styles.btnLogin}>
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
