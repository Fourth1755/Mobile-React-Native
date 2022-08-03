import {View,Text,StyleSheet,Image} from 'react-native'
import HeaderComponent from './HeaderComponent';
import HeaderTopComponent from './HeaderTopComponent';
const HomeComponent=()=>{
    return(
        <View>
            <HeaderTopComponent/>
            <HeaderComponent name='Home page'/>
            <View style={styles.container}>
            <Image
                style={styles.image} 
                source={{
                uri: 'https://thezepiaworld.files.wordpress.com/2020/02/02.jpg?w=1400',
            }}/>
            <View style={styles.textwelcome}>
                <Text style={styles.text}>Wellcome to</Text>
                
            </View>
            <View style={styles.textwelcome}>
                
                <Text style={styles.text}>Anime Map</Text>
            </View>
            <View style={styles.textwelcome}>
                
                
            </View>
            
        </View>
        </View>
        
    );
}
const styles=StyleSheet.create({
    container:{
        color: '#666699',
        fontSize: 20,
        fontFamily:'Prompt_500Medium',
    },
    text:{
        fontSize:28,
        color: '#FFFF',
        fontFamily:'Prompt_500Medium',
    },
    textwelcome:{
        padding: 10,
        backgroundColor:'#141313',
        flexDirection:'row',
        justifyContent:'center',
        borderColor:'#141313',
    },
    image:{
        height: 450,
        borderColor:'#141313',
    }
})
export default HomeComponent;