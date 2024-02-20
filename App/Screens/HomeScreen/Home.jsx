import { View, Text } from 'react-native'
import { ScrollView } from 'react-native-virtualized-view'
import React from 'react'
import SearchBar from '../../Components/SearchBar/SearchBar'
import Banner from '../../Components/Banner/Banner'
import TopDeals from './TopDeals'
import Color from '../../../utils/Color'
import Categories from './Categories'
import { useNavigation } from '@react-navigation/native'
export default function Home({ route }) {
  const navigation = useNavigation();
  return (
    <ScrollView style={{backgroundColor: Color.WHITE}} >
      <SearchBar navigation={route}/>
      {/* <SearchBar /> */}
      <Banner />
      <TopDeals/>
      <Categories/>
    </ScrollView>
  )
}