import { View, Text } from 'react-native'
import React from 'react'
import SearchBar from '../../Components/SearchBar/SearchBar'
import Banner from '../../Components/Banner/Banner'
import TopDeals from './TopDeals'
import Color from '../../../utils/Color'
import Categories from './Categories'
import TabNavigation from '../../Navigations/TabNavigation'

export default function Home({navigation}) {
  return (
    <View style={{backgroundColor: Color.WHITE}} >
      <SearchBar navigation={navigation}/>
      <Banner />
      <TopDeals/>
      <Categories/>
    </View>
  )
}