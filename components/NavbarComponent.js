import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialIcons,FontAwesome,Ionicons } from '@expo/vector-icons';
import HomeComponent from "./HomeComponent"
import ProfileComponent from './ProfileComponent';
import TopanimeComponent from './TopanimeComponent';
import React from "react"; 
const Tab=createBottomTabNavigator();
const Stack =createNativeStackNavigator();
const NavbarComponent=()=>{
    return(
        <NavigationContainer>
        <Tab.Navigator
           screenOptions={({route})=>({
             tabBarActiveTintColor:'#FF1493',
             tabBarInactiveBackgroundColor:'#141313',
             tabBarActiveBackgroundColor:'#1F1B1B',
             tabBarStyle:{
                 borderTopColor:"#141313"
             },
             headerShown: false,
             tabBarIcon:({focused,color})=>{
                 let iconName;
                    if(route.name==='Home'){
                        color=focused ?'#FF1493':'#FFFF';
                        iconName='home'
                    }
                    else if(route.name==='Content'){
                        color=focused ?'#FF1493':'#FFFF';
                        iconName='user-circle'
                    }
                    else if(route.name==='List'){
                        color=focused ?'#FF1493':'#FFFF';
                        iconName='list-ol'
                        
                    }
                    return <FontAwesome name={iconName} size={24} color={color} />
             }
           })}
           
           >
               <Tab.Screen
                name="Home"
                component={HomeComponent}
                options={{
                    title:'home page',
                }}/>
                <Tab.Screen 
                name="Content"
                component={ProfileComponent}
                options={{
                    title:"my anime",
                }}/>
                <Tab.Screen 
                name="List"
                component={TopanimeComponent}
                options={{
                    title:"top anime",
                }}/>
           </Tab.Navigator>
    </NavigationContainer>
    )
}
export default NavbarComponent;