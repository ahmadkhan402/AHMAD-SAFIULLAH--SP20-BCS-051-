import {  StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SignupScreen({navigation}) {
    const [UserName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const StoreRegister = async()=>{
        try{
        await AsyncStorage.setItem('USERNAME',UserName);
        await AsyncStorage.setItem('EMAIL',email);
        await AsyncStorage.setItem('PASSWORD',password);
        navigation.navigate('Login')
        }catch(e){
            console.log(e)
        }
    }

    return (
            <View style={styles.container}>
            <View style={styles.txtContainer}>
            <Text style={styles.txtHeader}>Sign Up</Text>

            </View>
                
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="UserName"
                        placeholderTextColor="#003f5c"
                        onChangeText={(UserName) => setUserName(UserName)}
                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Email."
                        placeholderTextColor="#003f5c"
                        onChangeText={(email) => setEmail(email)}
                    />
                </View>

                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Password."
                        placeholderTextColor="#003f5c"
                        secureTextEntry={true}
                        onChangeText={(password) => setPassword(password)}
                    />
                </View>

                    <TouchableOpacity style={styles.SignupBtn} onPress={() =>{StoreRegister()}}>
                        <Text style={styles.loginText}>Registered</Text>
                    </TouchableOpacity>
                </View>
            
            )
  }

            const styles = StyleSheet.create({
                container: {
                flex: 1,
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center",
        },
        txtContainer:{
          
            alignItems:"center",
            justifyContent:"center",

        },

        txtHeader:{
            position:"absolute",
            bottom:50,
            fontSize:40,
            fontWeight:"bold",
            color:"white",
            justifyContent:"center",
            alignItems:"center",
            borderRadius: 10,
            height: 50,
            width:"55%",
            marginTop: 20,
            marginLeft:30,
            paddingLeft:30,
            paddingBottom:2,
            backgroundColor: "#FF1493",

        },
            

            inputView: {
            backgroundColor: "#FFC0CB",
            borderRadius: 30,
            width: "70%",
            height: 45,
            marginBottom: 20,
            alignItems: "center",
        },

            TextInput: {
                height: 50,
            flex: 1,
            padding: 10,
            marginLeft: 20,
        },

            forgot_button: {
                height: 30,
            marginBottom: 30,
        },
            buttonContainer:{
                flexDirection:"row",
            justifyContent:"space-between",
            alignItems:"center",
            width:"30%",
            marginRight:100
        },
            SignupBtn:{
                width: "80%",
            borderRadius: 25,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20,
            marginLeft:30,
            backgroundColor: "#FF1493",
        }
})