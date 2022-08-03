import React, { useState } from "react"
import { StyleSheet,FlatList,Text, View,Image, LogBox} from "react-native";
import { Icon } from 'react-native-elements';

const HeaderComponent=(props)=>{
    return(
        <View style={styles.container}>
            <View style={styles.thispagecontainer}>
                <Text style={styles.thispage}>{props.name}</Text>
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flexDirection:'column',
        backgroundColor:'#141313',
        paddingLeft:20,
        paddingRight:20,
        paddingBottom:15
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
    thispagecontainer:{
        paddingLeft:20,
        paddingTop:10
    },
    thispage:{
        fontSize: 14,
        color: '#F9EBE0'
    }
})
export default HeaderComponent;