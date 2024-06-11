import { View,StyleSheet, TextInput, SafeAreaView, TouchableOpacity } from 'react-native'
import React,{useEffect, useState} from 'react'
import Color from '../../../utils/Color'
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
export default function SearchBar() {
  const navigation = useNavigation();
  const [searchQuery,setSearchQuery] = useState('')
   return (
    <View style={{display:'flex',alignItems:'center', backgroundColor:Color.PRIMARY}}>
    <TouchableOpacity style={styles.searchBarContainer} onPress={()=>navigation.navigate('Search')}>
    
        <TextInput selectionColor={Color.PRIMARY}
          placeholder='Search'
          placeholderTextColor={Color.GREY} 
          clearButtonMode='always'
          value={searchQuery}
          autoCapitalize='none'
          autoCorrect={false}
          style={styles.textInputContainer}
          onChangeText={
            (text) => {
              setSearchQuery(text)
            }
          }
          />
          <FontAwesome name="search" size={24} color={Color.BLACK} />
        
    </TouchableOpacity>

    </View>
  )
}
const styles = StyleSheet.create({

searchBarContainer:{
    width:'90%',
    height:50,
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    padding:4,
    borderWidth:2,
    borderRadius:10,
    borderColor:Color.PRIMARY,
    marginTop:10,
    marginBottom:10,
    backgroundColor:Color.WHITE
}
,
textInputContainer:{
    width:'80%',
    paddingHorizontal:4,
    fontSize:18,
}
,

})