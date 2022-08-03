import React, { useState,useEffect } from "react"
import {StyleSheet,FlatList,Text, View,Image,SafeAreaView,ActivityIndicator,RefreshControl} from "react-native";
import DATA from './db.json'
import {db} from "../database/firebase";
import {collection,getDocs,doc} from "firebase/firestore"
const Item=({dataitem})=>{
    return(
        <View style={styles.itemlist}>
            <Image style={styles.image}
                    source={{
                    uri: `${dataitem.image}`,
            }}/>
            <View style={styles.content}> 
                <Text style={styles.itemtext}>{dataitem.anime}</Text>
                <Text style={styles.contenttext}>Premiered: {dataitem.year}</Text>
                <Text style={styles.contenttext}>Studios: {dataitem.studios}</Text>
                {dataitem.episodes?<Text style={styles.contenttext}>Episodes: {dataitem.episodes}</Text>:<View></View>}
                <Text style={styles.contenttext}>MyScore:</Text>
                <Text style={styles.contentscore}>{dataitem.score}/10</Text>
            </View>
        </View>
    );
}
const MyanimeComponent=()=>{
    const renderItem=({item})=>(
        <Item dataitem={item}/>
    )
    const [animelist,setAnimelist]=useState([]);
    const [myanime,setMyanime]=useState([]);
    const getAnime = async()=>{
        const collectionRef=collection(db,'user-anime');
        const data=await getDocs(collectionRef);
        setRefreshing(false);
        setAnimelist(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
        
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
                    data={animelist[1].myanime}
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
        color: '#FFF',
        paddingBottom: 200,
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
        color: '#FFFF',
        fontSize: 24,
    },
    contenttext:{
        color: '#FFFF',
        fontSize: 16,
    },
    contentscore:{
        color: '#FFFF',
        fontSize: 38,
    }
})
export default MyanimeComponent;
