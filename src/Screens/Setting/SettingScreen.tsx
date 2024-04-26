import {
  Image,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconKey from 'react-native-vector-icons/Octicons';
import { HEIGHT, PADDING_HORIZONTAL, WIDTH } from '../../untils/utility';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { useDispatch, useSelector } from 'react-redux';
import Iconpen from 'react-native-vector-icons/FontAwesome5';
import ButtonBottom from '../../component/Button/Button';
import * as Animatable from 'react-native-animatable';
import ChangeName from './ChangeName';


const SettingScreen = ({ navigation }: NativeStackHeaderProps | any) => {
  const [modalVisible, setmodalVisible] = useState<boolean>(false)
  const [nameModal, setnameModal] = useState<string>('')
  const user = useSelector((state: any) => state.SlicesReducer.user);
  const dispatch = useDispatch();
  const truncatedFullName = user.name.length > 15 ? `${user.name.substring(0, 15)}...` : user.name;

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
          <Modal
            transparent={false}
            visible={modalVisible}
            animationType="slide"
            onRequestClose={() => true}
          >
            <View style={{ height: '100%' }}>

              {(nameModal == 'ChangeName') ? <ChangeName action={{ setmodalVisible }} /> : null}

              <Animatable.View animation={'bounceIn'} style={{ paddingHorizontal: PADDING_HORIZONTAL, position: 'relative', bottom: 10 }}>
                <Pressable onPress={() => { setmodalVisible(false) }}>
                  <ButtonBottom title='Hủy' />
                </Pressable>
              </Animatable.View>
            </View>
          </Modal>
          <View style={styles.horizontalLine} />

          <View style={styles.itemContainer}>
            <Image source={{ uri: user.avatar }} style={styles.avatar} />
            <View style={{ flex: 2 }}>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.Name} numberOfLines={1} ellipsizeMode="tail">{truncatedFullName}</Text>
                  <Text style={styles.Status}>{user.status}</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Pressable onPress={() => { setmodalVisible(true); setnameModal('ChangeName') }}>
                    <Iconpen name="pen" size={15} color="black" />
                  </Pressable>
                </View>
              </View>
            </View>
            <View style={{ flex: 1 }}>
              <Pressable>
                <Image
                  style={styles.imgicon}
                  source={require('../../assets/Image/Qr.png')}
                />
              </Pressable>
            </View>
          </View>


          <Pressable>
            <View style={styles.itemfunction}>
              <View style={styles.item}>
                <IconKey name="key" size={26} />
              </View>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ marginLeft: 10 }}>
                  <Text style={styles.Titlefunction}>Account</Text>
                  <Text style={styles.Description}>Status , </Text>
                </View>
              </View>
            </View>
          </Pressable>

          <Pressable>
            <View style={styles.itemfunction}>
              <View style={styles.item}>
                <Icon name="chat-bubble-outline" size={26} />
              </View>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ marginLeft: 10 }}>
                  <Text style={styles.Titlefunction}>Chat</Text>
                  <Text style={styles.Description}>Privacy, security, change number</Text>
                </View>
              </View>
            </View>
          </Pressable>

          <Pressable>
            <View style={styles.itemfunction}>
              <View style={styles.item}>
                <Icon name="notifications-none" size={26} />
              </View>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ marginLeft: 10 }}>
                  <Text style={styles.Titlefunction}>Notifications</Text>
                  <Text style={styles.Description}>Privacy, security, change number</Text>
                </View>
              </View>
            </View>
          </Pressable>

          <Pressable>
            <View style={styles.itemfunction}>
              <View style={styles.item}>
                <Icon name="help-outline" size={26} />
              </View>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ marginLeft: 10 }}>
                  <Text style={styles.Titlefunction}>Help</Text>
                  <Text style={styles.Description}>Privacy, security, change number</Text>
                </View>
              </View>
            </View>
          </Pressable>

        </View>
      </ScrollView>
    </View>
  );
};

export default SettingScreen;

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
    alignItems: 'center',
    alignSelf: 'center',
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
    marginTop: 3,
  },
  avatar: {
    width: 70,
    height: 70,
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
