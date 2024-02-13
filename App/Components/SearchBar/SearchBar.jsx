import { View,StyleSheet, TextInput } from 'react-native'
import React from 'react'
import Color from '../../../utils/Color'
import { Feather } from '@expo/vector-icons';
export default function SearchBar() {
  return (
    <View style={{display:'flex',alignItems:'center'}}>
    <View style={styles.searchBarContainer}>
      <Feather name="search" size={24} color={Color.PRIMARY} />
        <View style={styles.textInputContainer}>
        <TextInput selectionColor={Color.PRIMARY} placeholder='Search' placeholderTextColor={Color.PRIMARY} style={{backgroundColor:"transparent", fontSize:17, paddingLeft:20, color: Color.PRIMARY}}/>
      </View>
    </View>
    </View>
  )
}
const styles = StyleSheet.create({

searchBarContainer:{
    width:'80%',
    height:50,
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    padding:8,
    borderWidth:2,
    borderRadius:20,
    borderColor:Color.PRIMARY,
    marginTop:10,
}
,
textInputContainer:{
    width:'90%',
}
,

})