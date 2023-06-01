import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import FetchData from './src'

export default function App() {
  return (
    <View style={styles.container}>
      <FetchData/>
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#fff",
    alignItems:"center",
    justifyContent:"center"
  }
})