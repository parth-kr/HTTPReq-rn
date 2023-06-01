import { View, Text ,StyleSheet} from 'react-native'
import React,{useState,useEffect} from 'react'
import {db} from "../config"
import {ref,onValue} from "firebase/database"


const FetchData = () => {
    const [todoData,setTodoData]=useState([])

    useEffect(()=>{
     const starCountRef=ref(db,"posts/")
     onValue(starCountRef,(snapshot)=>{
        const data=snapshot.val()
        const newPosts=Object.keys(data).map(key=>({
            id:key,
            ...data[key]
        }));
        console.log(newPosts)
        setTodoData(newPosts)
     })
    },[])


  return (
    <View style={styles.container}>
      <Text style={styles.header}>FetchData from Realtime DB</Text>
      {
        todoData.map((item,index)=>{
            return(
                <View key={index}>
                    <Text style={styles.text1}>{item.title}</Text>
                    <Text style={styles.text2}>{item.body}</Text>
                </View>
            )
        })
      }
    </View>
  )
}

export default FetchData

const styles=StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:"#fff",
      
    },
    header:{
     fontSize:30,
     textAlign:"center",
     marginTop:100,
     fontWeight:"bold"
    },
    text1:{
        fontSize:20,
        textAlign:"center",
        marginTop:20,
        fontWeight:"bold"
    },
    text2:{
        fontSize:15,
        textAlign:"center",
        marginTop:20  
    }
  })