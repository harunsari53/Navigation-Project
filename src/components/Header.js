import React from 'react';
import {Image, Text, TouchableOpacity, View, StyleSheet} from 'react-native';

const Header = ({title, onBackPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onBackPress}>
        <Image style={styles.img} source={require('../../src/assets/back.png')} />
      </TouchableOpacity>
      <Text style={styles.text}> {title} </Text>
    </View>
  );
};

export default React.memo(Header);


const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    img:{
      width: 44,
      height: 44,
      
    },
    text: {
        color: 'white',
        fontSize: 44,
        fontWeight: '900',
        alignSelf: 'center',
    }
})