import { Alert, FlatList, Image, Pressable, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Iconsearch from 'react-native-vector-icons/Feather';
import Iconcall from 'react-native-vector-icons/MaterialCommunityIcons';
import { HEIGHT, WIDTH } from '../../untils/utility';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';

type CallItem = {
  id: string;
  img: string;
  fullname: string;
  date: string;
  statusphone: number;
  time: string;
};

const CallHistory = ({ navigation }: NativeStackHeaderProps | any) => {
  // const [callList, setcallList] = useState<CallItem[]>([]);
  // // useEffect(() => {
  // //   setcallList(Data);
  // // }, []);
  // const renderItem = ({item}: {item: CallItem}) => {
  //   const truncatedFullName =
  //     item.fullname.length > 15
  //       ? `${item.fullname.substring(0, 15)}...`
  //       : item.fullname;
  //   return (
  //     <TouchableHighlight
  //     activeOpacity={1}
  //     underlayColor="#DDDDDD"
  //     onPress={() => Alert.alert('Pressed!')}>
  //     <View style={styles.itemContainer}>
  //       <Image source={{uri: item.img}} style={styles.avatar} />
  //       <View style={styles.iconContainer}>
  //         <Pressable>
  //           <Image
  //             style={styles.imgicon}
  //             source={require('../../assets/Image/Call.png')}
  //           />
  //         </Pressable>
  //         <Pressable>
  //           <Image
  //             style={styles.imgicon}
  //             source={require('../../assets/Image/Video.png')}
  //           />
  //         </Pressable>
  //       </View>
  //     </View>
  //     </TouchableHighlight>
  //   );
  // };
  return (
    // <View style={{backgroundColor: 'black', height: 'auto', width: WIDTH}}>
    //   <View style={styles.Header}>
    //     <Pressable style={styles.Button}>
    //       <Iconsearch name="search" size={30} color="white" />
    //     </Pressable>
    //     <Text style={{color: 'white', fontSize: 20}}>Calls</Text>
    //     <Pressable style={styles.Button}>
    //       <Icon name="add-call" size={30} color="white" />
    //     </Pressable>
    //   </View>
    //   <View style={styles.body}>
    //     <View style={styles.horizontalLine} />
    //     <Text style={styles.Title}>Recent</Text>
    //     {/* <FlatList
    //       data={callList}
    //       contentContainerStyle={{paddingBottom: HEIGHT * 0.15}}
    //       renderItem={renderItem}
    //       keyExtractor={item => item.id.toString()}
    //     /> */}
    //   </View>
    // </View>

    <View><Text>Call History</Text></View>


  );
};

export default CallHistory;

const styles = StyleSheet.create({
  imgicon: {
    width: 27,
    height: 27,
    margin: 5,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginLeft: 30,
  },
  Date: {
    color: '#797C7B',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    marginLeft: 10,
  },
  Time: {
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
  },
});

const Data = [
  {
    id: '7',
    img: 'https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-white-silhouette-avatar-png-image_3418408.jpg',
    fullname: 'Vu Long Dep Traidddddddddddddddddddddddđ',
    date: '26/12/2024',
    statusphone: 1,
    time: '7:35 AM',
  },
  {
    id: '6',
    img: 'https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-white-silhouette-avatar-png-image_3418408.jpg',
    fullname: 'Vu Long ',
    date: '25/12/2024',
    statusphone: 2,
    time: '7:35 AM',
  },
  {
    id: '5',
    img: 'https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-white-silhouette-avatar-png-image_3418408.jpg',
    fullname: 'Vu Long Dep Trai',
    date: '25/12/2024',
    statusphone: 3,
    time: '7:35 AM',
  },
  {
    id: '4',
    img: 'https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-white-silhouette-avatar-png-image_3418408.jpg',
    fullname: 'Vu Long Dep Trai',
    date: '25/12/2024',
    statusphone: 4,
    time: '7:35 AM',
  },
  {
    id: '3',
    img: 'https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-white-silhouette-avatar-png-image_3418408.jpg',
    fullname: 'Vu Long Dep Trai',
    date: '25/12/2024',
    statusphone: 1,
    time: '7:35 AM',
  },
  {
    id: '2',
    img: 'https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-white-silhouette-avatar-png-image_3418408.jpg',
    fullname: 'Vu Long Dep Trai',
    date: '25/12/2024',
    statusphone: 1,
    time: '7:35 AM',
  },
  {
    id: '1',
    img: 'https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-white-silhouette-avatar-png-image_3418408.jpg',
    fullname: 'Vu Long Dep Trai',
    date: '25/12/2024',
    statusphone: 1,
    time: '7:35 AM',
  },
];
