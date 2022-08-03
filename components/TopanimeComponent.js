import React, { useState,useEffect } from "react"
import {View,Text,StyleSheet} from 'react-native'
import FlatListComponent from './FlatlistComponent';
import HeaderComponent from './HeaderComponent';
import HeaderTopComponent from "./HeaderTopComponent";
import SearchComponent from "./SearchComponent";
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { Icon } from 'react-native-elements';
import { Button } from "react-native-elements";
const homeStack=createNativeStackNavigator()

const HomeScreen=({navigation})=>{
    return(
        <View>
            <View style={styles.container}>
                <View style={styles.containerline}>
                    <Text style={styles.logo}>ANIMAP</Text>
                    <Button
                        icon={
                            <Icon
                                name='search'
                                color= '#F9EBE0'
                                type='font-awesome'
                                fontSize='10'
                        />
                        }
                        type="clear"
                        containerStyle={{backgroundColor: "#141313",borderRadius:25}}
                        onPress={()=>navigation.navigate('Search')}/>
                </View>
            </View>
            <HeaderComponent name='top anime'/>
            <FlatListComponent/>
        </View>
    );
}
const TopanimeComponent=()=>{
    return(
        <homeStack.Navigator>
            <homeStack.Screen name='FirstPage' component={HomeScreen} options={{headerShown:false}}/>
            <homeStack.Screen name='Search' component={SearchComponent} />
        </homeStack.Navigator>
    );
}
const styles=StyleSheet.create({
    container:{
        flexDirection:'column',
        backgroundColor:'#141313',
        paddingTop:45,
        paddingLeft:20,
        paddingRight:20,
    },
    container:{
        flexDirection:'column',
        backgroundColor:'#141313',
        paddingTop:45,
        paddingLeft:20,
        paddingRight:20,
        
    },
    containerline:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    logo:{
        color: '#FF1493',
        fontSize: 25,
        fontFamily:'Prompt_500Medium',
    },

})
export default TopanimeComponent;