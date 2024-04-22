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
import IconDot from 'react-native-vector-icons/MaterialCommunityIcons';
import Iconsearch from 'react-native-vector-icons/Feather';
import { HEIGHT, WIDTH } from '../../untils/utility';
import { useSelector } from 'react-redux';

type Messager = {
  id: string;
  img: string;
  fullname: string;
  Chat: string;
  DateTime: string;
};

const Message = () => {
  const [messList, setmessList] = useState<Messager[]>([]);
  const user = useSelector((state: any) => state.SlicesReducer.user);

  const renderItem = ({ item }: { item: Messager }) => {

    const truncatedFullName =
      item.fullname.length > 15
        ? `${item.fullname.substring(0, 15)}...`
        : item.fullname;

    const truncatedFullChat =
      item.Chat.length > 20 ? `${item.Chat.substring(0, 20)}...` : item.Chat;
    return (
      <TouchableHighlight
        activeOpacity={1}
        underlayColor="#DDDDDD"
        onPress={() => Alert.alert('Pressed!')}>
        <View style={styles.itemContainer}>
          <View style={styles.avatarContainer}>
            <Image source={{ uri: item.img }} style={styles.avatar} />

          </View>
          <View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.Name}>{truncatedFullName}</Text>
            </View>
            <Text style={styles.Chat}>{truncatedFullChat}</Text>
          </View>
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
        <FlatList
          contentContainerStyle={{ paddingBottom: HEIGHT * 0.15 }}
          data={messList}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  avatarContainer: {
    width: WIDTH * 0.16,
    height: HEIGHT * 0.08,
    marginRight: 16,
    position: 'relative',
  },
  dotContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  Time: {
    color: '#797C7B',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    textAlign: 'right',
    width: WIDTH * 0.3,
  },
  Chat: {
    color: '#797C7B',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
  },
  Name: {
    color: '#000E08',
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 18,
    marginBottom: 5,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    margin: 0,
    marginLeft: 5,
    marginRight: 5,
    width: WIDTH,
    height: HEIGHT * 0.11,
  },
  avatar: {
    width: WIDTH * 0.16,
    height: HEIGHT * 0.08,
    borderRadius: 50,
    marginRight: 16,
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
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#363F3B',
    padding: 10,
    margin: 20,
  },
  Header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
