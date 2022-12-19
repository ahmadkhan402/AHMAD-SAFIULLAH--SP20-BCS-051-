import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TouchableHighlight } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = (props) => {
  const [Username, setUsername] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  // const {getusername} = props;
  useEffect(() => {
    getUsername();
  })
  const getUsername = async () => {
    const username = await AsyncStorage.getItem('USERNAME');
    const email = await AsyncStorage.getItem('EMAIL');
    const password = await AsyncStorage.getItem('PASSWORD');
    setUsername(username);
    setEmail(email);
    setPassword(password);
    

  }
  return (
    <View style={styles.container}>
      <View style={styles.headerConatiner}>
        <Text style={styles.text}>Welcome To Profile Screen</Text>
        <View style={styles.ContentContainer}>
          <Text style={styles.username}>UserName:  <Text style={{fontSize:19,fontFamily:"italic",fontWeight:"100"}}>{Username}</Text></Text>
          <Text style={styles.Email}>Email: <Text style={{fontSize:19,fontFamily:"italic",fontWeight:"100"}}>{Email}</Text> </Text>
          <Text style={styles.Password}>Password: <Text style={{fontSize:19,fontFamily:"italic",fontWeight:"100"}}>{Password}</Text> </Text>

        </View>
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "grey"
  },
  headerConatiner: {
    width: "90%",
    height: "80%",
    backgroundColor: "white",
    borderRadius: 30,


  },
  text: {
    marginTop: 15,
    fontSize: 20,
    padding: 5,
    width: "80%",
    alignSelf: "center",
    textAlign: "center",
    backgroundColor: "#FF1493",
    alignSelf: "center",
    color: "white",
    fontWeight: "700",
    marginBottom: 40,
    borderRadius: 10,


  },
  ContentContainer: {
   
    width: "80%",
    height: "70%",
    alignSelf:"center",
   marginTop:20,
   borderRadius:20,
    backgroundColor: "lightblue",
    paddingTop:20,
  },
  username:{
    fontSize:19,
    fontWeight:"bold",
    width:"90%",
    
    backgroundColor:"pink",
    margin:3,
    alignItems:"center",
    alignSelf:"center",
    borderRadius:6,
  },
  Email:{
    fontSize:19,
    fontWeight:"bold",
    width:"90%",
    
    backgroundColor:"pink",
    margin:3,
    alignItems:"center",
    alignSelf:"center",
    borderRadius:6,
  },
  Password:{
    fontSize:19,
    fontWeight:"bold",
    width:"90%",
    
    backgroundColor:"pink",
    margin:3,
    alignItems:"center",
    alignSelf:"center",
    borderRadius:6,
  }
})