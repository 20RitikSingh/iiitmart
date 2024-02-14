import { View, Text } from 'react-native'
import React from 'react'
import SearchBar from '../../Components/SearchBar/SearchBar'
import Banner from '../../Components/Banner/Banner'
import TopDeals from './TopDeals'
import Color from '../../../utils/Color'

export default function Home() {
  return (
    <View style={{backgroundColor: Color.WHITE}} >
      <SearchBar/>
      <Banner />
      <TopDeals/>
    </View>
  )
}