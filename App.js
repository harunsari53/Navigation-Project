import * as React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import PinkScreen from "./src/screens/PinkScreen";
import PurpleScreen from "./src/screens/PurpleScreen";
import GreenScreen from "./src/screens/GreenScreen";
import BlueScreen from "./src/screens/BlueScreen";
import YellowScreen from "./src/screens/YellowScreen";
import DodgerBlueScreen from "./src/screens/DodgerBlueScreen";
import BrownScreen from "./src/screens/BrownScreen";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabScreens = () => {
  return(
  <Tab.Navigator screenOptions={{headerShown:false}}>
    <Tab.Screen name="DodgerBlueScreen" component={DodgerBlueScreen} />
    <Tab.Screen name="BrownScreen" component={BrownScreen} />
  </Tab.Navigator>
  )
}

const StackScreens = () => {
  return(
    <Stack.Navigator screenOptions={{headerShown:false}} >
      <Stack.Screen name="GreenScreen" component={GreenScreen} />
      <Stack.Screen name="BlueScreen" component={BlueScreen} />
      <Stack.Screen name="YellowScreen" component={YellowScreen} />
    </Stack.Navigator>
  )
}

const App = () => {

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="PinkScreen">
        <Drawer.Screen name="PinkScreen" component={PinkScreen} />
        <Drawer.Screen name="PurpleScreen" component={PurpleScreen} />
        <Drawer.Screen name="Stack Screen" component={StackScreens} />
        <Drawer.Screen name= "Tab Screen" component={TabScreens} />
      </Drawer.Navigator>
       
    </NavigationContainer>
  );
}

export default App;