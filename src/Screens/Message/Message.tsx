import {Pressable, StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Iconsearch from 'react-native-vector-icons/Feather';
import {HEIGHT, WIDTH} from '../../utilities/utility';

const Message = () => {
  const [avatarUrl, setAvatarUrl] = useState(
    'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-1/329926999_619168540016905_551067399906215730_n.jpg?stp=dst-jpg_p240x240&_nc_cat=110&ccb=1-7&_nc_sid=5740b7&_nc_eui2=AeFW1cBCRU53it9HbKIoz5jGcsWFILMIqWtyxYUgswipa9in5Y3su1hMlUn-9xn3ISJLT4EmXNy05-rLIU0W3e2S&_nc_ohc=JRho-e4kx0MAX-sMfWH&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfCh7GFLHHLdMvAvA4acIu1uE7PGeS_ARly56kVVUaQo1Q&oe=658F8EA9',
  );


  return (
    <View style={{backgroundColor: 'black', height: 'auto', width: WIDTH}}>
      <View style={styles.Header}>
        <Pressable style={styles.Button}>
          <Iconsearch name="search" size={30} color="white" />
        </Pressable>
        <Text style={{color: 'white', fontSize: 20}}>Home</Text>
        <Pressable>
          <Image source={{uri: avatarUrl}} style ={styles.avatarIcon}/>
        </Pressable>
      </View>
      <View style={styles.body}>
        <View style={styles.horizontalLine} />
      </View>

      
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  avatarIcon:{
    width:50,
    height:50,
    borderRadius:50,
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
