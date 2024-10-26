import React from 'react';
import  {StyleSheet, Text, View,FlatList} from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
export default function Header(){
     return(
        <View style={styles.header}>
            <MaterialIcons name='menu' color={'#fff'} size={40} marginBottom={30}/>
            <Text style={styles.title}>To Do List</Text>
        </View>
     );
}
const styles=StyleSheet.create({
    header:{
        backgroundColor:'coral',
        paddingTop:48,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        textAlign:"center",
        color:"white",
        fontSize:24,
        fontWeight:"bold",
        marginLeft:30,
        marginBottom:30
    }
})