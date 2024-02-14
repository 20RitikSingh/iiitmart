import { View, Text } from 'react-native'
import React from 'react'
import SearchBar from '../../Components/SearchBar/SearchBar'
import Banner from '../../Components/Banner/Banner'
import TopDeals from './TopDeals'

export default function Home() {
  return (
    <View >
      <SearchBar/>
      <Banner />
      <TopDeals/>
    </View>
  )
}