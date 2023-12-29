import {
  Alert,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Iconsearch from 'react-native-vector-icons/Feather';
import Iconcall from 'react-native-vector-icons/SimpleLineIcons';
import {HEIGHT, WIDTH} from '../../utilities/utility';
import moment from 'moment';

type Contacts = {
  id: string;
  img: string;
  fullname: string;
  Status: string;
};

const Contacts = () => {
  const [conTacts, setconTacts] = useState<Contacts[]>([]);

  useEffect(() => {
    setconTacts(Data);
  }, []);

  const renderItem = ({item}: {item: Contacts}) => {
    const truncatedFullName =
      item.fullname.length > 15
        ? `${item.fullname.substring(0, 15)}...`
        : item.fullname;

    return (
      <TouchableHighlight
        activeOpacity={1}
        underlayColor="#DDDDDD"
        onPress={() => Alert.alert('Pressed!')}>
        <View style={styles.itemContainer}>
          <Image source={{uri: item.img}} style={styles.avatar} />
          <View>
            <Text style={styles.Name}>{truncatedFullName}</Text>
            <Text style={styles.Status}>{item.Status}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  };
  return (
    <View style={{backgroundColor:'black'}}>
      <View style={styles.Header}>
        <Pressable style={styles.Button}>
          <Iconsearch name="search" size={30} color="white" />
        </Pressable>
        <Text style={{color: 'white', fontSize: 20}}>Contacts</Text>
        <Pressable style={styles.Button}>
          <Icon name="add-call" size={30} color="white" />
        </Pressable>
      </View>
      <View style={styles.body}>
        <View style={styles.horizontalLine} />
        <Text style={styles.Title}>My Contact</Text>
        <FlatList
          contentContainerStyle={{ paddingBottom: HEIGHT * 0.15 }}
          data={conTacts}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </View>
  );
};

export default Contacts;

const styles = StyleSheet.create({
  Date: {
    color: '#797C7B',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    marginLeft: 10,
  },
  Status: {
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
    marginBottom: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    width: WIDTH,
    height: HEIGHT * 0.15,
  },
  avatar: {
    width: 65,
    height: 65,
    borderRadius: 50,
    marginRight: 16,
    padding: 10,
  },
  infoContainer: {
    flexDirection: 'row',
    width: 'auto',
  },
  Title: {
    fontSize: 20,
    color: '#000E08',
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 20,
    fontWeight: 'bold',
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
    backgroundColor: 'black',
  },
});

const Data = [
  {
    id: '1',
    img: 'https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-white-silhouette-avatar-png-image_3418408.jpg',
    fullname: 'aVu Long Dep Trai',
    Status: 'Life is beautiful 👌',
  },
  {
    id: '2',
    img: 'https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-white-silhouette-avatar-png-image_3418408.jpg',
    fullname: 'aVu Long Dep Trai',
    Status: 'Life is beautiful 👌',
  },
  {
    id: '3',
    img: 'https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-white-silhouette-avatar-png-image_3418408.jpg',
    fullname: 'aVu Long Dep Trai',
    Status: 'Life is beautiful 👌',
  },
  {
    id: '4',
    img: 'https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-white-silhouette-avatar-png-image_3418408.jpg',
    fullname: 'zVu Long Dep Trai',
    Status: 'Life is beautiful 👌',
  },
  {
    id: '5',
    img: 'https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-white-silhouette-avatar-png-image_3418408.jpg',
    fullname: 'eVu Long Dep Trai',
    Status: 'Life is beautiful 👌',
  },
  {
    id: '6',
    img: 'https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-white-silhouette-avatar-png-image_3418408.jpg',
    fullname: 'dVu Long Dep Trai',
    Status: 'Life is beautiful 👌',
  },

];
