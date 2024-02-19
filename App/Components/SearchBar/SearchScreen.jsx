import React,{useState,useEffect} from 'react'
import TopDealsAPI from '../../../utils/TopDealsAPI'
import { View,ScrollView,StyleSheet,FlatList,Image,ActivityIndicator,Text, TextInput, SafeAreaView, TouchableOpacity } from 'react-native'
import Color from '../../../utils/Color'
import { FontAwesome } from '@expo/vector-icons';
export default function SearchScreen({navigation}) {
  const [searchQuery,setSearchQuery] = useState('')
  const [data, setData] = useState([])
  const [searchedData, setSearchedData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    try{
      setIsLoading(true)
      TopDealsAPI().then((res) => {
        setData(res?.products)
      })
      setIsLoading(false)
    }
    catch(err){
      console.log(err)
    }
    
  }, [])
  const onSearch= (text) => {
    if(text.length>0){
      const filteredData = data.filter((item) => {
        return item?.name.toLowerCase().includes(text.toLowerCase())
      })
      setSearchedData(filteredData)

    }
    else{
      TopDealsAPI().then((res) => {
        setData(res?.products)
      })
    }
  }
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.searchItem}>
        <Image source={{uri: item?.images[0].url}} style={{width: 100, height: 100}} />
        <View>
        <Text style={styles.productTitle}>{
              (item?.name.length > 20) ? item?.name.slice(0, 20) + ' ...' : item?.name}</Text>
        <Text style={styles.productPrice}>₹{item?.price}</Text>
        </View>
      </TouchableOpacity>
    )
  }
  if(isLoading){
    return (
      <View style={{width:'100%',height:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}>
        <ActivityIndicator size='large' color={Color.PRIMARY}/>
      </View>
    )
  }
  else return (
    <ScrollView>
      <View style={{display:'flex',flexDirection:'row' ,alignItems:'center',backgroundColor:Color.PRIMARY}}>
      <TouchableOpacity style={{padding:4}} onPress={()=>{navigation.navigate('Home')}}>
        <FontAwesome name="arrow-left" size={20} color={Color.WHITE} />
      </TouchableOpacity>
    <SafeAreaView style={styles.searchBarContainer} >
    
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
              onSearch(text)
            }
          }
          />
          <FontAwesome name="search" size={24} color={Color.BLACK} />
        
    </SafeAreaView>
    </View>
      <FlatList 
      data={searchedData}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  searchItem:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
    padding:8,
    borderWidth:1,
    borderColor:Color.PRIMARY,
    borderRadius:10,
    margin:4
  },
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
productTitle: {
  fontWeight: 'bold',
  fontSize: 16,
  padding: 4,
},
productPrice: {
  fontWeight: 'bold',
  fontSize: 16,
  padding: 4,
},
})