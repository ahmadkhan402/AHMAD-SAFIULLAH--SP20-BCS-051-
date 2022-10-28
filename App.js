import { useState } from 'react';
import React from 'react';
import { StyleSheet, Button, Alert, Text, View, TouchableOpacity, Image, SafeAreaView } from 'react-native';
// import MyPractice from './Component/MyPractice';

import DesignAsgnment from './Component/DesignAsgnment';
export default function App() {

   return (
    
    <DesignAsgnment></DesignAsgnment>
    
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
 
});