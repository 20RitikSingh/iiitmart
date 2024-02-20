import { FlatList, StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-virtualized-view'
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
      // console.log(res?.cakes)
    })
  }, [])

  const formatData = (data, numColumns) => {
    const amountFullRows = Math.floor(data?.length / numColumns);
    let amountItemsLastRow = data?.length - amountFullRows * numColumns;
  
    while (amountItemsLastRow !== numColumns && amountItemsLastRow !== 0) {
      data.push({key: `empty-${amountItemsLastRow}`, empty: true});
      amountItemsLastRow++;
    }
    // console.log(data);
    return data;
  };



  return (
    <ScrollView style={{ backgroundColor: Color.WHITE }} >
      <SearchBar />
      <CakeBanner />
      <View style={styles.headCont}>
        <Text style={styles.heading}>Cakes & Offers</Text>
      </View>
      <View style={styles.cakeCont}>
        <FlatList
          data={formatData(cakeData, 2)}
          numColumns={2}
          keyExtractor={(item) => item?.id}
          style={{backgroundColor:'ff0000'}}
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
    // backgroundColor:'#ff0000',
    paddingLeft:'2%',
    paddingRight:'2%',
    justifyContent:"space-between", 
    gap:5
  }
})