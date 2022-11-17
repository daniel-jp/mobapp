import React from 'react';
import { View,Text } from 'react-native';
import { UserPhoto } from '../../UserPhoto';
import { styles } from './styles';

export function Message() {
  
  return(
    <View style={styles.container}>
      <Text style={styles.message}>
        Message text 
      </Text>
      <View style={styles.footer}>
        <UserPhoto 
          imageUri="https://randomuser.me/api/portraits/women/44.jpg"
          sizes='SMALL'/>

      </View>
      <Text style={styles.userName}>
        Name of user :

      </Text>
    </View>
  )
}