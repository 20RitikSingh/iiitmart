import { View,Text, FlatList,Image,StyleSheet } from 'react-native'
import React, { useEffect,useState } from 'react'
import TopDealsAPI from '../../../utils/TopDealsAPI'

export default function Carousel({props}) {
  const [carouselData, setCarouselData] = useState([])
  useEffect(() => {
    TopDealsAPI.getTopDeals().then((res)=>{
      setCarouselData(res?.products)
      console.log(carouselData)
    })
}, [])
  return (
    <View>
       <View style={styles.headingContainer}>
       <Text style={styles.heading}>{props.Heading}</Text> 
       </View>
      <FlatList
      data={carouselData}
      renderItem={({item,index})=>(
        <View style={styles.productContainer}>
         <Image source={{uri:item?.image?.url}} style={styles.productImage}/>
         {console.log(item?.image?.url)}
         <Text style={styles.productTitle}>{
         (item?.name.length > 18 ) ? item?.name.slice(0,18)+' ...' : item?.name}</Text>
         <Text style={styles.productPrice}>{item?.price}</Text>
        </View> 
      )}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}
const styles = StyleSheet.create({
headingContainer:{

},
heading:{

},
productContainer:{
},
productImage:{
width:100,
height:100,
},
})