import React from "react";
import { Button, ImageBackground, StyleSheet, Text, TextInput, View } from "react-native";



export default function DesignAsgnment() {
    return (

        <ImageBackground source={require("../assets/DesgnPicture/D1.jpg")} resizeMode="cover" style={styles.container}>
            <Text style={styles.text}>Path</Text>
            <View style={styles.inputContainer1}>

            <TextInput style={styles.text1} value="Email Address"></TextInput>
            
            </View>
            <View style={styles.inputContainer2}>
            <TextInput style={styles.text2} value="Password" ></TextInput>
            </View>



            


            <View style={styles.RegisterCoin}>
                <Text style={styles.Register}>Register</Text>
            </View>
            <View style={styles.loginButton}>

                <Text style={styles.Login}>Log In</Text>

            </View>
        </ImageBackground>

    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor:"white",
    },
    inputContainer1:{
    
    flexDirection:"row",
    alignContent:"flex-start",
    paddingBottom:15,
    
    width:"100%",
    opacity:0.5,
    
   
        top:5,
    

    },
    inputContainer2:{
        
        flexDirection:"row",
        alignContent:"flex-start",
        width:"100%",
        opacity:0.5,
        
    
        },
    text1:{
        
        width:"100%",
        height:73,
        backgroundColor: "white",
        paddingLeft:9,
        fontSize:20,
        

       
   
    
    },
    text2:{
        width:"100%",
        height:73,
        fontSize:20,
        backgroundColor:"white",
        paddingLeft:9,
    },
    text: {
        position: "absolute",
        color: "white",
        top: 180,
        fontSize: 10,
        fontFamily:"serif",
    
    
    },
    loginButton: {
       
        width: "100%",
        height: 90,
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 40,


    },
    RegisterCoin: {
        width: "100%",
        height: 90,
        justifyContent: "center",
        alignItems: "center",
        
        borderRadius:2,
        borderColor:"white",
        backgroundColor: "transparent",

    },
    Register: {
        fontSize: 30,
        color: "white",
        justifyContent: "center",
        
    


    },
    Login: {
        fontSize: 25,
        fontWeight: "bold",
        color: "white",
        justifyContent: "center",


    }
})