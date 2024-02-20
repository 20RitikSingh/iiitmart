import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import SearchBar from '../../Components/SearchBar/SearchBar'
import Banner from '../../Components/Banner/Banner'
import TopDeals from './TopDeals'
import Color from '../../../utils/Color'
import Categories from './Categories'
import TabNavigation from '../../Navigations/TabNavigation'
import { useNavigation } from '@react-navigation/native'
export default function Home({ route }) {
  const navigation = useNavigation();
  return (
    <ScrollView style={{backgroundColor: Color.WHITE}} >
      <SearchBar navigation={route}/>
      <Banner />
      <TopDeals/>
      <Categories/>
    </ScrollView>
  )
}