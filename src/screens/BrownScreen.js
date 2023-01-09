import React from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native'

const BrownScreen = ({navigation}) => {
   
  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={() => navigation.goBack()} style={styles.text}>Welcome to Brown Screen</Text>
    </SafeAreaView>
  )
}

export default React.memo(BrownScreen)

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: 'brown',
      justifyContent: 'center',
      alignItems: 'center'
    },
    text:{
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        alignSelf:'center'
    }
    
})