import React from 'react';
import  {StyleSheet, Text, View,FlatList} from 'react-native';
export default function SandBox(){
    return(
        <View style={styles.container}>
            <Text style={styles.boxOne}>One</Text>
            <Text style={styles.boxTwo}>Two</Text>
            <Text style={styles.boxThree}>Three</Text>
            <Text style={styles.boxFour}>Four</Text>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        backgroundColor:"#ddd",
        flex:1,
        padding:40,
    },
    boxOne:{
        backgroundColor:"violet",
        padding:10
    },
    boxTwo:{
        backgroundColor:"gold",
        padding:10
    },
    boxThree:{
        backgroundColor:"coral",
        padding:10
    },
    boxFour:{
        backgroundColor:"skyblue",
        padding:10
    },
})