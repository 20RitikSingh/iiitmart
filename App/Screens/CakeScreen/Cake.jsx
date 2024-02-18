import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import SearchBar from '../../Components/SearchBar/SearchBar'
import Color from '../../../utils/Color'
import CakeBanner from '../../Components/Banner/CakeBanner'
import Cakes from '../../../utils/Cakes'
import CakeComp from '../../Components/Cake/CakeComp'


export default function Cake() {

  const [cakeData, setCakeData] = useState([])
  useEffect(() => {
    Cakes.getCakes().then((res) => {
      setCakeData(res?.cakes)
      console.log(res?.cakes)
    })
  }, [])



  return (
    <ScrollView style={{ backgroundColor: Color.WHITE }} >
      <SearchBar />
      <CakeBanner />
      <View style={styles.headCont}>
        <Text style={styles.heading}>Cakes & Offers</Text>
      </View>
      <View style={styles.cakeCont}>
        <FlatList
          data={cakeData}
          numColumns={2}
          keyExtractor={(item) => item?.id}
          renderItem={({ item, index }) => {
            // console.log(item)
            return <CakeComp item={item} />
          }}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  headCont: {
    padding: 16
  },
  cakeCont:{
    display:'flex',
  }
})