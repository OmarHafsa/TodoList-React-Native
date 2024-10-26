import React from 'react';
import  {StyleSheet, Text, TouchableOpacity,View} from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
export default function Todos({item, handleDelete}){
    // const handleDelete=(id)=>{
    //     console.log(id);
    //     set
    // }
    return(
        <TouchableOpacity style={styles.container} onPress={()=>handleDelete(item.key)}>
            <View style={styles.item}>
                <MaterialIcons name='delete' size={40} color={'#333'}/>
                <Text style={styles.txt}>{item.text}</Text>   
            </View>
            
        </TouchableOpacity>
    );
}
const styles=StyleSheet.create({
    item:{
        padding:16,
        marginTop:16,
        borderColor:"#bbb",
        textAlign:"center",
        borderWidth:1,
        borderStyle:"dashed",
        borderRadius:10,
        marginLeft:20,
        width:400,
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    txt:{
        fontSize:18,
    }
})