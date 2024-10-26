import React ,{useState} from 'react';
import  {StyleSheet, Text, View,FlatList,Alert,TouchableWithoutFeedback,Keyboard} from 'react-native';
import Header from './component/header';
import Todos from './component/todos';
import AddTodo from './component/addtodo';
import SandBox from './component/sandbox';
//to do list
export default function App() {
  const [todos,setTodos]=useState([
    {text:"drink coffee",key:1},
    {text:"play games",key:2},
    {text:"read book",key:3},
  ])
  const handleDelete=(key)=>{
    console.log(key);
    setTodos((prevTodos)=>{
      return prevTodos.filter((todo)=>todo.key!==key);
      })
  }
  const submitChange=(text)=>{
    if(text.length>3){
      setTodos((prevTodos)=>{
        return([
          {text:text, key:Math.random()},
          ...prevTodos,
        ])
      });
    }
    else{
      Alert.alert('OOPS!','To do must have more than 3 chars ');
    }
  } 
  return(
    // <SandBox/>
    <TouchableWithoutFeedback onPress={
      ()=>{Keyboard.dismiss();}
    }>
      <View style={styles.container}>
      {/* header */}
      <Header/>
        <View style={styles.content}>
        <AddTodo submitChange={submitChange}/>
            <View style={styles.list}>
              <FlatList
                data={todos}
                renderItem={({item})=>(
                  <Todos item={item} handleDelete={handleDelete}/>
                )}  
              />
            </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
    );
  }
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop:40,
  },
  content: {

    flex:1
  },
  list:{
    flex:1,

  }
  
}
);
