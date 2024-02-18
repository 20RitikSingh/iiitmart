import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
// import TopDealsAPI from '../../../utils/TopDealsAPI'
import Color from '../../../utils/Color'

export default function Carousel({ Heading, API }) {
  const [carouselData, setCarouselData] = useState([])
  useEffect(() => {
    API().then((res) => {
      setCarouselData(res?.products)
    })
    // TopDealsAPI.getTopDeals().then((res)=>{
    //   setCarouselData(res?.products)

    // })
  }, [])
  return (
    <View>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>{Heading}</Text>

      </View>
      <FlatList
        data={carouselData}
        renderItem={({ item, index }) => (
          <View style={styles.productContainer}>
            <View style={styles.productImageContainer}>
              <Image source={{ uri: item?.images[0]?.url }} style={styles.productImage} />
            </View>
            <Text style={styles.productTitle}>{
              (item?.name.length > 20) ? item?.name.slice(0, 20) + ' ...' : item?.name}</Text>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Text style={styles.productPrice}>₹{item?.price}</Text>
              <TouchableOpacity style={styles.addToCart}><Text style={{ fontSize: 10 }}>ADD</Text></TouchableOpacity>
            </View>
          </View>
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  headingContainer: {
    padding: 8,
  },
  heading: {
    fontSize: 18,
  },
  productContainer: {
    borderColor: Color.GREY,
    borderWidth: 1,
    borderRadius: 10,
    width: 180,
    margin: 10,
    padding: 10,

  },
  productImageContainer: {
    alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
  },
  productTitle: {
    fontWeight: 'semibold',
    padding: 4,
  },
  productPrice: {
    fontWeight: 'semibold',
    padding: 4,
  },
  addToCart: {
    padding: 4,
    borderColor: Color.GREY,
    borderWidth: 1,
    borderRadius: 4,

  }

})