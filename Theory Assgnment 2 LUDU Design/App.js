import { useState } from 'react';
import React from 'react';
import { StyleSheet, Button, Alert, Text, View, TouchableOpacity, Image, SafeAreaView } from 'react-native';
// import MyPractice from './Component/MyPractice';

import DesignAsgnment from './Component/DesignAsgnment';
import LuduDesign from './Component/LuduDesign';
import { FlatList } from 'react-native-web';
export default function App() {

   return (
    
    <LuduDesign></LuduDesign>
    
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