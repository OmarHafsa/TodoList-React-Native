import React ,{useState} from 'react';
import  {StyleSheet, Text,TextInput, Button,View} from 'react-native';
export default function AddTodo({submitChange}){
    const [text,setText] = useState('');
    const changeHandler=(val)=>{
        setText(val);
    }
    return(
        <View>
            <TextInput
            style={styles.inp}
             placeholder='New Todo ...'
            onChangeText={changeHandler}/>
            <Button onPress={() => submitChange(text)}
             title='Add Todo' color='coral' 
            />
        </View>
    )
}
const styles=StyleSheet.create({
    inp:{
        marginBottom:20,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderColor:"#ddd",
        fontSize:18,
        width:300,
        marginTop:20,
        marginLeft:60
    },
    
})