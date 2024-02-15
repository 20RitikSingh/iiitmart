import { View } from 'react-native'
import React from 'react'
import Carousel from '../../Components/Carousel/Carousel'
import TopDealsAPI from '../../../utils/TopDealsAPI'
export default function TopDeals() {
  return (
    <View>
      <Carousel Heading='Top Deals' API={TopDealsAPI} />
    </View>
  )
}