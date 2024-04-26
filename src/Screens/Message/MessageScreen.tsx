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

type Messager = {
  messID: string;
  content: string;
  senderName: string;
  sentTime: Date;
  isSeen: boolean;
};

const MessageScreen = ({ navigation }: NativeStackHeaderProps | any) => {
  const [messList, setmessList] = useState<Messager[]>([]);
  const user = useSelector((state: any) => state.SlicesReducer.user);
  console.log('user', user);

  const renderItem = ({ item }: { item: Messager }) => {

    const truncatedFullName = item.senderName.length > 15 ? `${item.senderName.substring(0, 15)}...` : item.senderName;

    const truncatedFullChat =
      item.content.length > 20 ? `${item.content.substring(0, 20)}...` : item.content;
    const sentTimeString = item.sentTime ? new Date(item.sentTime).toLocaleString() : '';
    return (
      <TouchableHighlight
        activeOpacity={1}
        underlayColor="#DDDDDD"
        onPress={() => Alert.alert('Pressed!')}>
        <View style={styles.itemContainer}>
          {/* <Image source={{ uri: item.img }} style={styles.avatar} /> */}
          <View style={styles.messageContent}>
            {truncatedFullName ? <Text style={styles.fullName}>{truncatedFullName}</Text> : null}
            {truncatedFullChat ? <Text style={styles.chatText}>{truncatedFullChat}</Text> : null}
          </View>
          {item.sentTime ? <Text style={styles.dateTime}>{sentTimeString}</Text> : null}
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
        <Pressable>
          <Image source={{ uri: user.avatar }} style={styles.avatarIcon} />
        </Pressable>
      </View>
      <View style={styles.body}>
        <View style={styles.horizontalLine} />
        {/* <FlatList
          contentContainerStyle={{ paddingBottom: HEIGHT * 0.15 }}
          data={messList}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        /> */}
      </View>
    </View>

  );
};

export default MessageScreen;

const styles = StyleSheet.create({
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
    margin: 20,
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
