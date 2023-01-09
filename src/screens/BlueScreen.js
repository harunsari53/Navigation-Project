import React from 'react'
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const BlueScreen = ({navigation}) => {
    const onNavigate = () =>{
        navigation.navigate('YellowScreen')
    }
  return (
    <SafeAreaView style={styles.container}>
        <TouchableOpacity>
            <Text onPress={onNavigate} style={styles.text}>Welcome to Blue Screen</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default React.memo(BlueScreen)

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center'
        
    },
    text:{
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold'
    }
    
})