import React, { useState,useEffect } from "react"
import {StyleSheet,FlatList,Text, View,Image,SafeAreaView,ActivityIndicator,RefreshControl} from "react-native";
import {Button} from "react-native-elements"
import DATA from './db.json'
import { MaterialIcons } from '@expo/vector-icons';
import {db} from "../database/firebase";
import {collection,getDocs} from "firebase/firestore"
const Item=({dataitem})=>{
    return(
        <View style={styles.itemlist}>
            <Image style={styles.image}
                    source={{
                    uri: `${dataitem.image}`,
            }}/>
            <View style={styles.content}> 
                <Text style={styles.itemtext}>{dataitem.name}</Text>
                <Text style={styles.contenttext}>Premiered: {dataitem.year}</Text>
                <Text style={styles.contenttext}>Studios: {dataitem.studios}</Text>
                {dataitem.episodes?<Text style={styles.contenttext}>Episodes: {dataitem.episodes}</Text>:<View></View>}
                <Text style={styles.contenttext}>Score: {dataitem.score}</Text>
                <View style={styles.buttonadd}>
                    
                    <Button 
                    icon= {
                        <MaterialIcons name="add-circle-outline" size={24} color="#FFFF" />
                    }
                    title=" Add"
                    type="clear"
                    containerStyle={{backgroundColor: "#FF1493",borderBottomWidth:0,borderRadius:12,padding:2}}
                    titleStyle={{color:'#FFFF'}}
                
                    ></Button>
                </View>
            </View>
        </View>
    );
}
const FlatListComponent=()=>{
    const renderItem=({item})=>(
        <Item dataitem={item}/>
    )
    const [animelist,setAnimelist]=useState([]);
    const getAnime= async()=>{
        const collectionRef=collection(db,'react-native-crud');
        const data=await getDocs(collectionRef);
        setRefreshing(false);
        setAnimelist(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
    }
    useEffect(()=>{
        getAnime();
    },[])
    const [refreshing, setRefreshing] = useState(true);
    return(
        <SafeAreaView>
            <View style={styles.container}>
            {refreshing ? <ActivityIndicator /> : null}
                <FlatList
                    data={animelist}
                    renderItem={renderItem}
                    keyExtractor={item=>item.id}
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={getAnime} />
                      }
                />
            </View>
        </SafeAreaView>
    )
}
const styles=StyleSheet.create({
    container:{
        backgroundColor: '#1F1B1B',
        paddingBottom: 100,
    },
    itemlist:{
        flexDirection:'row',
        padding: 8,
        marginHorizontal:5,
        marginVertical:8
    },
    textInput:{
        height: 40,
        borderWidth:1,
        paddingLeft:20,
        margin: 5,
        borderColor:'#000',
        borderRadius:20,
        backgroundColor:'#FFF'
    },
    image:{
        width:100,
        height: 155,
        borderRadius:10,
    },
    content:{
        
        paddingLeft :30,
        color:'#FFF' 
    },
    itemtext:{
        fontFamily:'Prompt_500Medium',
        color: '#FFFF',
        fontSize: 24,
    },
    contenttext:{
        fontFamily:'Prompt_400Regular',
        color: '#FFFF',
        fontSize: 16,
    },
    buttonadd:{
        fontFamily:'Prompt_400Regular',
        width: 100,
        padding: 10,
        justifyContent:"flex-end"
    }
})
export default FlatListComponent;
