import { View, Text } from 'react-native'
import { ScrollView } from 'react-native-virtualized-view'
import React, { useEffect } from 'react'
import SearchBar from '../../Components/SearchBar/SearchBar'
import Banner from '../../Components/Banner/Banner'
import TopDeals from './TopDeals'
import Color from '../../../utils/Color'
import Categories from './Categories'
import { useNavigation } from '@react-navigation/native'
import { useUser } from '@clerk/clerk-react'
import Customer from '../../../utils/Customer'
import ProductGroup from '../../Components/ProductGroup/ProductGroup'
import Cakes from '../../../utils/Cakes'
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
      <TopDeals heading="Top Deals" />
      <Categories />
      <TopDeals heading="Previous Orders" />
      <ProductGroup heading={"Product head"} api={Cakes} />
      <TopDeals heading="Top in skin care" />
    </ScrollView>
  )
}