import { View } from 'react-native'
import React from 'react'
import Carousel from '../../Components/Carousel/Carousel'
import TopDealsAPI from '../../../utils/TopDealsAPI'
export default function TopDeals({heading}) {
  return (
    <View>
      <Carousel Heading={heading} API={TopDealsAPI} />
    </View>
  )
}