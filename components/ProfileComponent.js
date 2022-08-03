import React, { useState,useEffect } from "react"
import {View,Text,StyleSheet} from 'react-native'
import HeaderComponent from './HeaderComponent';
import FlatListComponent from './FlatlistComponent';
import DATA from './db.json'
import MyanimeComponent from "./MyanimeComponent";
import HeaderTopComponent from "./HeaderTopComponent";
const ProfileComponent=()=>{
    return(
        <View>
            <HeaderTopComponent/>
            <HeaderComponent name='My anime'/>
            <MyanimeComponent/>
        </View>
    )
}
export default ProfileComponent;