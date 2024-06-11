import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import CakeComp from '../../Components/Cake/CakeComp'


export default function ProductGroup({heading, api}) {

  const [productData, setProductData] = useState([])
  useEffect(() => {
    api.getCakes().then((res) => {
      setProductData(res?.products)
    })
  }, [])

  const formatData = (data, numColumns) => {
    const amountFullRows = Math.floor(data?.length / numColumns);
    let amountItemsLastRow = data?.length - amountFullRows * numColumns;

    while (amountItemsLastRow !== numColumns && amountItemsLastRow !== 0) {
      data.pop();
      amountItemsLastRow--;
    }
    // console.log(data);
    return data;
  };


  const colNum = 2;
  return (
    <>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>{heading}</Text>
      </View>
      <View style={styles.cakeCont}>
        <FlatList
          // data={cakeData}
          data={formatData(productData, colNum)}
          numColumns={colNum}
          keyExtractor={(item) => item?.id}
          style={{ backgroundColor: 'ff0000' }}
          renderItem={({ item, index }) => {
            // console.log(item)
            return <CakeComp item={item} desc={false} />
          }}
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  headingContainer: {
    padding: 8,
  },
  heading: {
    fontSize: 18,
  },
  cakeCont: {
    display: 'flex',
    // backgroundColor:'#ff0000',
    paddingLeft: '0.3%',
    paddingRight: '0.3%',
    justifyContent: "space-between",
    gap: 5
  }
})