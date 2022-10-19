/* Task1: Chess Creation*/

import {StyleSheet, View,} from 'react-native';

export default function App() 
{
    return (
<View style={styles.container}>

      <View style={styles.Box}>
        <View style={styles.black} />
        <View style={styles.white} />


        <View style={styles.black} />
        <View style={styles.white} />


        <View style={styles.black} />
        <View style={styles.white} />


        <View style={styles.black} />
        <View style={styles.white} />

        <View style={styles.white} />
        <View style={styles.black} />

        <View style={styles.white} />
        <View style={styles.black} />

        <View style={styles.white} />
        <View style={styles.black} />

        <View style={styles.white} />
        <View style={styles.black} />

        <View style={styles.black} />
        <View style={styles.white} />
        <View style={styles.black} />
        <View style={styles.white} />

        <View style={styles.black} />
        <View style={styles.white} />

        <View style={styles.black} />
        <View style={styles.white} />

        <View style={styles.white} />
        <View style={styles.black} />

        <View style={styles.white} />
        <View style={styles.black} />

        <View style={styles.white} />
        <View style={styles.black} />

        <View style={styles.white} />
        <View style={styles.black} />


        <View style={styles.black} />
        <View style={styles.white} />


        <View style={styles.black} />
        <View style={styles.white} />


        <View style={styles.black} />
        <View style={styles.white} />


        <View style={styles.black} />
        <View style={styles.white} />

        <View style={styles.white} />
        <View style={styles.black} />

        <View style={styles.white} />
        <View style={styles.black} />

        <View style={styles.white} />
        <View style={styles.black} />

        <View style={styles.white} />
        <View style={styles.black} />

        <View style={styles.black} />
        <View style={styles.white} />

        <View style={styles.black} />
        <View style={styles.white} />

        <View style={styles.black} />
        <View style={styles.white} />

        <View style={styles.black} />
        <View style={styles.white} />

        <View style={styles.white} />
        <View style={styles.black} />

        <View style={styles.white} />
        <View style={styles.black} />

        <View style={styles.white} />
        <View style={styles.black} />

        <View style={styles.white} />
        <View style={styles.black} />
      </View>


    </View>

  );
}




const styles = StyleSheet.create({
  container: {

    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "dodgerblue"


  },
  Box: {
    height: 320,
    width: 320,
    backgroundColor: "grey",
    borderStyle: 'solid',
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "flex-start",

  },
  black: {
    backgroundColor: "black",
    width: 40,
    height: 40,
  },
  white: {
    backgroundColor: "white",
    width: 40,
    height: 40,

  }
});

/*Task2: List*/
// ............................................................. 
import React from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';


const SectionListBasics = () => {
    return (
      <View style={styles.container}>
        <SectionList
          sections={[
            {title: 'Name which start from (A)', data: ['Ahmad', 'Ahsan', 'Amir', 'Asif', 'Aliyar']},
            {title: 'Name which start from (K)', data: ['Kaliya', 'Kamran']},
            {title: 'Name which start from (S)', data: ['sulman', 'shazaib', 'shahid']},
            
            
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => `basicListEntry-${item.title}`}
        />
      </View>
    );
}
export default SectionListBasics;
const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})


