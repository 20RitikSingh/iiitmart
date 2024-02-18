import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import SearchBar from '../../Components/SearchBar/SearchBar'
import Banner from '../../Components/Banner/Banner'
import TopDeals from './TopDeals'
import Color from '../../../utils/Color'
import Categories from './Categories'

export default function Home() {
  return (
    <ScrollView style={{backgroundColor: Color.WHITE}} >
      <SearchBar/>
      <Banner />
      <TopDeals/>
      <Categories/>
    </ScrollView>
  )
}