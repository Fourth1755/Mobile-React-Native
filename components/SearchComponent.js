import { StyleSheet,FlatList,Text, View,TextInput,Image} from "react-native";
import DATA from './db.json'
import React, { useState,useEffect } from "react"
import { Icon,SearchBar } from 'react-native-elements';
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
                <Text style={styles.itemtextmini}>Premiered: {dataitem.year}</Text>
                <Text style={styles.itemtextmini}>Studios: {dataitem.studios}</Text>
                <Text style={styles.itemtextmini}>Episodes: {dataitem.episodes}</Text>
            </View>
        </View>
    );
}
const SearchComponent=()=>{
    const renderItem=({item})=>(
        <Item dataitem={item}/>
    )
    const [searchAnime,setSearchAnime]=useState('');
    const [filterData,setfilterData]=useState(DATA.anime);
    const searchFilter=(text)=>{
        if(text){
            const newData=animelist.filter((item)=>{
                const itemData=item.name ?
                        item.name.toUpperCase() 
                        :''.toUpperCase();
                const textData=text.toUpperCase();
                return itemData.indexOf(textData)>-1;
            });
            setfilterData(newData);
            setSearchAnime(text);
        }
        else{
            setfilterData(animelist);
            setSearchAnime(text);
        }
        
    }
    const [animelist,setAnimelist]=useState([]);
    const getAnime= async()=>{
        const collectionRef=collection(db,'react-native-crud');
        const data=await getDocs(collectionRef);
        setAnimelist(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
    }
    useEffect(()=>{
        getAnime();
    },[])
    return(
        <View style={styles.container}>
                <SearchBar
                round   
                theme="dark"
                style={styles.textInput}
                platform="android"
                placeholder="Search here"
                value={searchAnime}
                underlineColorAndroid="transparent"
                onChangeText={(text)=>
                    searchFilter(text)
                }
            />
            <View style={styles.searchline}><Text style={styles.searchtext}>รายการค้นหายอดฮิต</Text></View>
            <FlatList
                data={filterData}
                renderItem={renderItem}
                keyExtractor={item=>item.id}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    itemlist:{
        flexDirection:'row',
        borderRadius:10,
        marginHorizontal:5,
        marginVertical:8

    },
    container:{
        paddingBottom: 100,
        backgroundColor: '#1F1B1B',
    },
    textInput:{
        height: 40,
        borderWidth:1,
        paddingLeft:20,
        margin: 5,
        borderColor:'#000',
        borderRadius:20,
        backgroundColor:'#3D373E'
    },
    image:{
        width:100,
        height: 155,
    },
    content:{
        paddingLeft :10
    },
    itemtext:{
        color: '#F9EBE0',
        fontSize: 20,
        fontFamily:'Prompt_500Medium',
    },
    itemtextmini:{
        color: '#F9EBE0',
        fontSize: 15,
        fontFamily:'Prompt_400Regular',
    },
    searchline:{
        justifyContent:'center',
        padding: 18,
        flexDirection:'row',
        backgroundColor:'#141313'
    },
    searchtext:{
        textAlign:'center',
        color: '#F9EBE0',
        fontSize: 18,
        fontFamily:'Prompt_500Medium',
    }
})
export default SearchComponent;