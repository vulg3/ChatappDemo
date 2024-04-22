import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconDot from 'react-native-vector-icons/MaterialCommunityIcons';
import { HEIGHT, WIDTH } from '../../untils/utility';
import { useSelector } from 'react-redux';


const MessageDetail = (prop: any) => {
  //const { keyClient, user, userName, title, avatar } = prop.route.params;

  return (
    //  <View>
    // //   <View style={styles.header}>
    // //     <Pressable>
    // //       <Icon name="arrow-back" size={20} color="black" />
    // //     </Pressable>
    // //      <View style={styles.avatarContainer}>
    // //       <Image source={{ uri: avatar }} style={styles.avatar} />
    // //       {/* {avatar.isOnline == 1 && (
    // //         <IconDot
    // //           name="circle"
    // //           size={10}
    // //           color={'#0FE16D'}
    // //           style={styles.dotContainer}
    // //         />
    // //       )}
    // //       {avatar.isOnline == 2 && (
    // //         <IconDot
    // //           name="circle"
    // //           size={10}
    // //           color={'#9A9E9C'}
    // //           style={styles.dotContainer}
    // //         />
    // //       )} */}
    // //     </View> 
    // //      {/* <View>
    // //       <Text style={styles.Name}>{userName}</Text>
    // //     </View>  */}
    // //   </View>
    //  </View>
    <View><Text>MessageDetail</Text></View>

  );
};

export default MessageDetail;

const styles = StyleSheet.create({
  header: {},
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
  avatar: {
    width: WIDTH * 0.16,
    height: HEIGHT * 0.08,
    borderRadius: 50,
    marginRight: 16,
  },
  Name: {
    color: '#000E08',
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 18,
    marginBottom: 5,
  },
});
