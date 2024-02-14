import { View, Text } from 'react-native'
import React from 'react'
import Carousel from '../../Components/Carousel/Carousel'

export default function TopDeals() {
  return (
    <View>
      <Carousel props={{Heading:'Top Deals'}}/>
    </View>
  )
}