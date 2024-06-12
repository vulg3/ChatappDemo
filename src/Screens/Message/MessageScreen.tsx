import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableHighlight,
  Alert,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Iconsearch from 'react-native-vector-icons/Feather';
import { HEIGHT, WIDTH } from '../../untils/utility';
import { useSelector } from 'react-redux';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { Room } from '../../models/room';
import AxiosInstance from '../../Axios/Axios';
import { User } from '../../models/user';
import { RootStackScreenEnumSetting } from '../../component/Root/RootStackSetting';


const MessageScreen = ({ navigation }: NativeStackHeaderProps | any) => {
  const [messList, setmessList] = useState<Room[]>([]);
  const [User, setUser] = useState<User[]>([]);
  const user = useSelector((state: any) => state.SlicesReducer.user);

  useEffect(() => {
    const fetchMess = async () => {
      const userID = user._id
      const response = await AxiosInstance().get(`room/getAllRoomsByIDUser/${userID}`);
      setmessList(response.data);
    }
    const fetchUser = async () => {
      const response = await AxiosInstance().get(`user/GetAllUser`);
      setUser(response.data)
    }

    fetchMess();
    fetchUser();

    
  }, []);

  const blabla = async () => {
    console.log('check');
  }


  const renderItemUser = ({ item }: { item: User }) => {
    const Name = item.name.length > 7 ? `${item.name.substring(0, 7)}...` : item.name;

    return (
      <TouchableHighlight
        underlayColor="gray"
        onPress={() => blabla()}
        style={styles.avatarContainer}>
        <View>
          {item.avatar ? (
            <Image source={{ uri: item.avatar }} style={styles.avatarOnline} />
          ) : null}
          {<Text style={{ textAlign: 'center', color: 'white' }}>{Name}</Text>}
        </View>
      </TouchableHighlight>
    );
  }




  const renderItemRoom = ({ item }: { item: Room }) => {

    const Title = item.title.length > 15 ? `${item.title.substring(0, 15)}...` : item.title;
    const lastMessage = item.messages[item.messages.length - 1];
    const truncatedFullChat = lastMessage.content.length > 20 ? `${lastMessage.content.substring(0, 20)}...` : lastMessage.content;
    const sentTimeString = lastMessage.sendTime ? new Date(lastMessage.sendTime).toLocaleString() : '';

    return (
      <TouchableHighlight
        activeOpacity={1}
        underlayColor="#DDDDDD"
        onPress={() => Alert.alert('Pressed!')}>
        <View style={styles.itemContainer}>
          <Image source={{ uri: item.imgMess }} style={styles.avatar} />
          <View style={styles.messageContent}>
            {Title ? <Text style={styles.fullName}>{Title}</Text> : null}
            {truncatedFullChat ? <Text style={styles.chatText}>{truncatedFullChat}</Text> : null}
          </View>
          {lastMessage.sendTime ? <Text style={styles.dateTime}>{sentTimeString}</Text> : null}
        </View>
      </TouchableHighlight>
    );
  };


  return (
    <View style={{ backgroundColor: 'black', height: 'auto', width: WIDTH }}>
      <View style={styles.Header}>
        <Pressable style={styles.Button}>
          <Iconsearch name="search" size={30} color="white" />
        </Pressable>
        <Text style={{ color: 'white', fontSize: 20 }}>Home</Text>
        <Pressable onPress={() =>navigation.navigate(RootStackScreenEnumSetting.SettingScreen)}>
          <Image source={{ uri: user.avatar }} style={styles.avatarIcon} />
        </Pressable>
      </View>
      <FlatList
          horizontal={true}
          data={User}
          renderItem={renderItemUser}
          keyExtractor={item => item._id.toString()}
        />
      <View style={styles.body}>
        <View style={styles.horizontalLine} />
        {messList.length === 0 ? (
          <Text style={styles.noMessageText}>Không có tin nhắn để hiển thị</Text>
        ) : (
          <FlatList
            contentContainerStyle={{ paddingBottom: HEIGHT * 0.15 }}
            data={messList}
            renderItem={renderItemRoom}
            keyExtractor={item => item.roomID.toString()}
          />
        )}
      </View>
    </View>

  );
};

export default MessageScreen;

const styles = StyleSheet.create({
  avatarOnline: {
    width: 55,
    height: 55,
    marginHorizontal: 5,
    borderRadius: 50,
  },
  avatarContainer: {
    width: 70,
    height: 70,
    marginHorizontal: 5,
    borderRadius: 50,
    padding: 10,
    margin: 20,
    alignItems: 'center',
  },
  noMessageText: {
    textAlignVertical: 'center',
    textAlign: 'center',
    width: WIDTH,
    height: HEIGHT * 0.7,
    color: '#4F4644'
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginLeft: 5,
    marginRight: 5,
    width: WIDTH,
    height: HEIGHT * 0.11,
  },
  avatar: {
    width: WIDTH * 0.14,
    height: HEIGHT * 0.07,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#363F3B',
    padding: 10,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageContent: {
    flex: 1,
  },
  fullName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  chatText: {
    fontSize: 14,
    color: '#333333',
  },
  dateTime: {
    fontSize: 12,
    color: '#999999',
    marginLeft: 10,
  },
  avatarIcon: {
    width: 50,
    height: 50,
    borderRadius: 50,
    padding: 10,
    margin:20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  horizontalLine: {
    borderBottomColor: 'grey',
    borderBottomWidth: 2,
    width: '10%',
    margin: 20,
    alignSelf: 'center',
  },
  body: {
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: HEIGHT,
  },
  Button: {
    width: WIDTH * 0.14,
    height: HEIGHT * 0.07,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#363F3B',
    padding: 10,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
