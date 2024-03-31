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
  import React, {useEffect, useState} from 'react';
  import IconDot from 'react-native-vector-icons/MaterialCommunityIcons';
  import Iconsearch from 'react-native-vector-icons/Feather';
  import {HEIGHT, WIDTH} from '../../untils/utility';
  import moment from 'moment';
import { useSelector } from 'react-redux';

  type Messager = {
    id: string;
    img: string;
    fullname: string;
    Chat: string;
    DateTime: string;
    isOnline: number;
  };

  const Message = () => {
    const [messageTime, setMessageTime] = useState(moment());
    const [messList, setmessList] = useState<Messager[]>([]);
    const user = useSelector((state: any) => state.SlicesReducer.user);

    useEffect(() => {
      setmessList(Data);
      const interval = setInterval(() => {
        setMessageTime(moment());
      }, 60000);
      return () => clearInterval(interval);
    }, []);

    const renderItem = ({item}: {item: Messager}) => {
      const timeAgo = moment(item.DateTime, 'YYYY-MM-DD hh:mm A').fromNow();
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
              <Image source={{uri: item.img}} style={styles.avatar} />
              {item.isOnline == 1 && (
                <IconDot
                  name="circle"
                  size={10}
                  color={'#0FE16D'}
                  style={styles.dotContainer}
                />
              )}
              {item.isOnline == 2 && (
                <IconDot
                  name="circle"
                  size={10}
                  color={'#9A9E9C'}
                  style={styles.dotContainer}
                />
              )}
              {item.isOnline == 3 && (
                <IconDot
                  name="circle"
                  size={10}
                  color={'#F04A4C'}
                  style={styles.dotContainer}
                />
              )}
            </View>
            <View>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.Name}>{truncatedFullName}</Text>
                <Text style={styles.Time}>{timeAgo}</Text>
              </View>
              <Text style={styles.Chat}>{truncatedFullChat}</Text>
            </View>
          </View>
        </TouchableHighlight>
      );
    };

    return (
      <View style={{backgroundColor: 'black', height: 'auto', width: WIDTH}}>
        <View style={styles.Header}>
          <Pressable style={styles.Button}>
            <Iconsearch name="search" size={30} color="white" />
          </Pressable>
          <Text style={{color: 'white', fontSize: 20}}>Home</Text>
          <Pressable>
            <Image source={{uri: user.avatar}} style={styles.avatarIcon} />
          </Pressable>
        </View>
        <View style={styles.body}>
          <View style={styles.horizontalLine} />
          <FlatList
            contentContainerStyle={{paddingBottom: HEIGHT * 0.15}}
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

  const Data = [
    {
      id: '8',
      img: 'https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/329926999_619168540016905_551067399906215730_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeFW1cBCRU53it9HbKIoz5jGcsWFILMIqWtyxYUgswipa9in5Y3su1hMlUn-9xn3ISJLT4EmXNy05-rLIU0W3e2S&_nc_ohc=JRho-e4kx0MAX8ZnCOa&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfCCmldS8QHWlEjr4Q7rFXARpKMAZAq_Wcrz6-V3zYUL0g&oe=6591A50B',
      fullname: 'aVu Long Dep Traiffffffffff',
      Chat: 'Đã gửi 100 ảnh',
      DateTime: '2023-12-11 12:30 PM', 
      isOnline: 1,
    },
    {
      id: '7',
      img: 'https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/329926999_619168540016905_551067399906215730_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeFW1cBCRU53it9HbKIoz5jGcsWFILMIqWtyxYUgswipa9in5Y3su1hMlUn-9xn3ISJLT4EmXNy05-rLIU0W3e2S&_nc_ohc=JRho-e4kx0MAX8ZnCOa&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfCCmldS8QHWlEjr4Q7rFXARpKMAZAq_Wcrz6-V3zYUL0g&oe=6591A50B',
      fullname: 'aVu Long Dep Traiffffffffff',
      Chat: 'Đã gửi 100 ảnh',
      DateTime: '2000-01-01 12:30 PM', 
      isOnline: 1,
    },
    {
      id: '6',
      img: 'https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-white-silhouette-avatar-png-image_3418408.jpg',
      fullname: 'zVu Long Dep Trai',
      Chat: 'Life is beautiful 👌dddddddddddddddd',
      DateTime: '2023-01-01 12:30 PM', 
      isOnline: 2,
    },
    {
      id: '5',
      img: 'https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-white-silhouette-avatar-png-image_3418408.jpg',
      fullname: 'eVu Long Dep Trai',
      Chat: 'Life is beautiful 👌',
      DateTime: '2023-01-01 12:30 PM', 
      isOnline: 3,
    },
    {
      id: '4',
      img: 'https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-white-silhouette-avatar-png-image_3418408.jpg',
      fullname: 'dVu Long Dep Trai',
      Chat: 'Life is beautiful 👌',
      DateTime: '2023-01-01 12:30 PM', 
      isOnline: 3,
    },
    {
      id: '3',
      img: 'https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-white-silhouette-avatar-png-image_3418408.jpg',
      fullname: 'cVu Long Dep Trai',
      Chat: 'Life is beautiful 👌',
      DateTime: '2023-01-01 12:30 PM', 
      isOnline: 1,
    },
    {
      id: '2',
      img: 'https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-white-silhouette-avatar-png-image_3418408.jpg',
      fullname: 'bVu Long Dep Trai',
      Chat: 'Life is beautiful 👌',
      DateTime: '2023-01-01 12:30 PM', 
      isOnline: 1,
    },
    {
      id: '1',
      img: 'https://png.pngtree.com/png-clipart/20210608/ourlarge/pngtree-white-silhouette-avatar-png-image_3418408.jpg',
      fullname: 'aVu Long Dep Trai',
      Chat: 'Be your own hero 💪',
      DateTime: '2023-01-01 12:30 PM', 
      isOnline: 1,
    },
  ];
