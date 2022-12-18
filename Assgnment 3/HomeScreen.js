import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'


const HomeScreen = (props) => {
  // const {getusername} = props;
  // useEffect(()=>{
  //   getUsername();
  // },[])
  // const getUsername = async()=>{
  // const username = await AsyncStorage.getItem('USERNAME');
  // }
  return (
    <View style={styles.container}>
   
      <Text style={styles.text}>Welcome To Profile Screen </Text>

    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"grey"
    },
    text:{
      fontSize:30,
      color:"red",
      fontWeight:"700",
      alignContent:"center"
    }
})