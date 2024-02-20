import { View, Text, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import SearchBar from '../../Components/SearchBar/SearchBar'
import Banner from '../../Components/Banner/Banner'
import TopDeals from './TopDeals'
import Color from '../../../utils/Color'
import Categories from './Categories'
import TabNavigation from '../../Navigations/TabNavigation'
import { useNavigation } from '@react-navigation/native'
import { useUser } from '@clerk/clerk-react'
import Customer from '../../../utils/Customer'
export default function Home({ route }) {

  const { user, isLoading } = useUser();

  useEffect(() => {
    Customer.getUserbyId(user.id).then((res) => {
      if (res.customer == null) {
        Customer.createEmptyUser(user.id).then((res) => {
        })
        Customer.createEmptyCart(user.id).then((res) => {
        })

      }
    })
  }, [])
  const navigation = useNavigation();
  return (
    <ScrollView style={{ backgroundColor: Color.WHITE }} >
      <SearchBar navigation={route} />
      {/* <SearchBar /> */}
      <Banner />
      <TopDeals />
      <Categories />
    </ScrollView>
  )
}