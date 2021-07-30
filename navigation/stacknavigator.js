import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigator from "./TabNavigator";
import Ionicons from "react-native-vector-icons/Ionicons";
import StoryRead from "../screens/Storyread";
const Stack = createStackNavigator()
const StackNavigator=()=>{
 return(
      <Stack.Navigator
      screenOptions={{
           headerShown:false

      }
      }
      initialRouteName="Home"

      >
       <Stack.Screen name="Home" component={BottomTabNavigator}/>    
       <Stack.Screen name="Storyread" component={StoryRead}/>
      </Stack.Navigator>
 )
}
export default StackNavigator