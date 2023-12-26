import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconKey from 'react-native-vector-icons/Octicons';
import {HEIGHT, WIDTH} from '../../utilities/utility';

const Setting = () => {
  const [avatarUrl, setAvatarUrl] = useState(
    'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-1/329926999_619168540016905_551067399906215730_n.jpg?stp=dst-jpg_p240x240&_nc_cat=110&ccb=1-7&_nc_sid=5740b7&_nc_eui2=AeFW1cBCRU53it9HbKIoz5jGcsWFILMIqWtyxYUgswipa9in5Y3su1hMlUn-9xn3ISJLT4EmXNy05-rLIU0W3e2S&_nc_ohc=JRho-e4kx0MAX-sMfWH&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfCh7GFLHHLdMvAvA4acIu1uE7PGeS_ARly56kVVUaQo1Q&oe=658F8EA9',
  );
  const [fullName, setFullName] = useState(
    'long đẹp trai3333333333333333333333333333333333',
  );
  const [Status, setStatus] = useState('Nhậu đê');

  const truncatedFullName =
    fullName.length > 15 ? `${fullName.substring(0, 15)}...` : fullName;
  return (
    <View style={styles.Container}>
      <ScrollView>
        <View style={styles.HeaderWrapper}>
          <Pressable>
            <Icon name="arrow-back" size={20} color="white" />
          </Pressable>
          <Text style={styles.Title}>Settings</Text>
          <View />
        </View>
        <View style={styles.body}>
          <View style={styles.horizontalLine} />
          <View style={styles.itemContainer}>
            <Image source={{uri: avatarUrl}} style={styles.avatar} />
            <View style={{flexDirection: 'row'}}>
              <View>
                <Text
                  style={styles.Name}
                  numberOfLines={1}
                  ellipsizeMode="tail">
                  {truncatedFullName}
                </Text>
                <Text style={styles.Status}>{Status}</Text>
              </View>
              <View style={styles.iconContainer}>
                <Pressable>
                  <Image
                    style={styles.imgicon}
                    source={require('../../assets/Image/Qr.png')}
                  />
                </Pressable>
              </View>
            </View>
          </View>

          <Pressable>
            <View style={styles.itemfunction}>
              <View style={styles.item}>
                <IconKey name="key" size={26} />
              </View>
              <View style={{flexDirection: 'row'}}>
                <View style={{marginLeft: 10}}>
                  <Text style={styles.Titlefunction}>Account</Text>
                  <Text style={styles.Description}>
                    Privacy, security, change number
                  </Text>
                </View>
              </View>
            </View>
          </Pressable>

          <Pressable>
            <View style={styles.itemfunction}>
              <View style={styles.item}>
                <Icon name="chat-bubble-outline" size={26} />
              </View>
              <View style={{flexDirection: 'row'}}>
                <View style={{marginLeft: 10}}>
                  <Text style={styles.Titlefunction}>Chat</Text>
                  <Text style={styles.Description}>
                    Privacy, security, change number
                  </Text>
                </View>
              </View>
            </View>
          </Pressable>

          <Pressable>
            <View style={styles.itemfunction}>
              <View style={styles.item}>
                <Icon name="notifications-none" size={26} />
              </View>
              <View style={{flexDirection: 'row'}}>
                <View style={{marginLeft: 10}}>
                  <Text style={styles.Titlefunction}>Notifications</Text>
                  <Text style={styles.Description}>
                    Privacy, security, change number
                  </Text>
                </View>
              </View>
            </View>
          </Pressable>

          <Pressable>
            <View style={styles.itemfunction}>
              <View style={styles.item}>
                <Icon name="help-outline" size={26} />
              </View>
              <View style={{flexDirection: 'row'}}>
                <View style={{marginLeft: 10}}>
                  <Text style={styles.Titlefunction}>Help</Text>
                  <Text style={styles.Description}>
                    Privacy, security, change number
                  </Text>
                </View>
              </View>
            </View>
          </Pressable>
          
        </View>
      </ScrollView>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  Description: {
    fontSize: 15,
  },
  Titlefunction: {
    color: '#000E08',
    fontSize: 20,
    fontWeight: 'bold',
  },
  item: {
    height: 60,
    width: 60,
    borderRadius: 50,
    backgroundColor: '#F2F8F7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemfunction: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    margin: 5,
  },
  imgicon: {
    width: 27,
    height: 27,
    marginLeft: 60,
  },
  iconContainer: {
    margin: 10,
    alignSelf: 'flex-end',
  },
  Status: {
    color: '#797C7B',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
  },
  Name: {
    color: '#000E08',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 20,
    marginBottom: 7,
  },
  avatar: {
    width: 65,
    height: 65,
    borderRadius: 50,
    marginRight: 16,
    padding: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    margin: 10,
  },
  Title: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    marginRight: 15,
  },
  horizontalLine: {
    borderBottomColor: 'grey',
    borderBottomWidth: 2,
    marginVertical: 10,
    width: '10%',
    margin: 20,
    alignSelf: 'center',
  },
  body: {
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: HEIGHT * 0.87,
  },

  HeaderWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: HEIGHT * 0.13,
    paddingHorizontal: 30,
  },
  Container: {
    backgroundColor: 'black',
    width: WIDTH,
    height: 'auto',
  },
});
