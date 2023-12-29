import React from 'react';
import {LinearGradient} from 'react-native-linear-gradient';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {HEIGHT, WIDTH} from '../../utilities/utility';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { RootStackScreenEnumLogin } from '../../component/Root/RootStackLogin';

const IntroductionScreen= (props: any) => {
  const { navigation }: NativeStackHeaderProps = props;

  return (
    <LinearGradient colors={['#FFBBFF', '#43116A']} style={{height: HEIGHT}}>
      <View>
        <View style={styles.header}>
          <Image
            style={styles.imageLogo}
            source={require('../../assets/Image/chat-app-logo-icon-vector-removebg-preview.png')}
          />
        </View>
        <View style={styles.container}>
          <Text style={styles.Titletxt}>Connect friends easily & quickly</Text>
          <Text style={styles.Content}>
            Our chat app is the perfect way to stay connected with friends and
            family.
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
                source={require('../../assets/Image/Apple_Inc.-Logo.wine.png')}
              />
            </Pressable>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <View style={styles.horizontalLine} />
            <Text style={{color: '#D6E4E0', fontSize: 15}}>OR</Text>
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
            <Text style={{color: '#B9C1BE', fontSize: 15}}>
              Existing account?
            </Text>
            <Pressable onPress={() => navigation.navigate(RootStackScreenEnumLogin.LoginScreen)}>
              <Text style={{color: 'white', fontSize: 15}}> Login</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </LinearGradient>
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
