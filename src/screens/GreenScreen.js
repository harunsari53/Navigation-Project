import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

const GreenScreen = ({navigation}) => {
  
    const onNavigate = () => {
        navigation.navigate('BlueScreen')
    }
  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={onNavigate} style={styles.text}>Welcome to Green Screen</Text>
    </SafeAreaView>
  )
}

export default React.memo(GreenScreen)

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'green',
       
        
    },
    text:{
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 250,
        alignSelf:'center'
    }
    
})