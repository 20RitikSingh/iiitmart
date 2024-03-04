import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Color from '../../../utils/Color'
import { Feather } from '@expo/vector-icons';
import { useClerk } from '@clerk/clerk-react';
import addToCart from '../../Screens/CartScreen/addToCart';
import { useNavigation } from '@react-navigation/native';


export default function CakeComp({ item }) {
  const { user } = useClerk();
  const navigation = useNavigation();
  return (

    item?.name ?
      <View style={styles.cakeContainer}>
        <TouchableOpacity style={styles.cakeImageContainer} onPress={() => {
          navigation.navigate("Product", { item });
        }}>
          <Image source={{ uri: item?.images[0]?.url }} style={styles.cakeImage} />
        </TouchableOpacity>
        <Text style={styles.cakeTitle}>{
          (item?.name?.length > 20) ? item?.name.slice(0, 17) + ' ...' : item?.name}
        </Text>
        <Text style={styles.cakeDesc}>{
          (item?.description?.length > 60) ? item?.description.slice(0, 57) + ' ...' : item?.description}
        </Text>
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 4 }}>
          <Text style={styles.cakePrice}>₹{item?.price}</Text>
          <View style={styles.cartCont}>
            <TouchableOpacity style={styles.addToCartText} onPress={() => {
              addToCart(user.id, item, 1)
              console.log(item);
            }}>
              <Text style={{ fontSize: 10 }}>ADD</Text>
              {/* <Feather name="minus" size={14} color={Color.TER} /> */}
            </TouchableOpacity>
            {/* <Text style={{ paddingHorizontal: 5 }}>3</Text> */}
          </View>
          {/* <View style={styles.cartCont}>
          <TouchableOpacity style={styles.addToCart}>
            <Feather name="minus" size={14} color={Color.TER} />
          </TouchableOpacity>
          <Text style={{ paddingHorizontal: 5 }}>3</Text>
          <TouchableOpacity style={styles.addToCart}>
            <Feather name="plus" size={14} color={Color.TER} />
          </TouchableOpacity>
        </View> */}
        </View>
      </View>
      :
      <View style={{ width: '44%', margin: '4%', flex: 1, }}></View>
  )
}

const styles = StyleSheet.create({
  cakeContainer: {
    borderColor: Color.GREY,
    borderWidth: 1,
    borderRadius: 10,
    width: "44%",
    margin: "4%",
    flex: 1,
    height: "auto",
    paddingBottom: 5,
    overflow: "hidden",
  },
  cakeImageContainer: {
    alignItems: "center",
  },
  cakeImage: {
    width: "100%",
    height: 140,
  },
  cakeTitle: {
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "left",
    lineHeight: 20,
    padding: 4,
  },
  quantityContainer: {
    marginLeft: "auto",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 10,
  },
  quantityButton: {
    borderRadius: 50,
    height: 20,
    width: 20,
    fontSize: 10,
    color: Color.WHITE,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: Color.TER,
  },
  quantity: {
    fontSize: 10,
    marginHorizontal: 10,
  },
  cakeDesc: {
    // fontWeight: '',
    marginTop: -4,
    fontSize: 12,
    padding: 2,
    paddingHorizontal: 4,
    lineHeight: 16,
    color: Color.GREY,
  },
  cakePrice: {
    fontWeight: "semibold",
    color: Color.TER,
    padding: 4,
    fontSize: 16,
  },
  addToCart: {
    padding: 1,
    borderColor: Color.TER,
    borderWidth: 1,
    borderRadius: 50,
    marginRight: 5,
    marginLeft: 5,
  },
  addToCartText: {
    padding: 2,
    paddingHorizontal: 5,
    borderColor: Color.TER,
    borderWidth: 1,
    borderRadius: 3,
    marginRight: 5,
    marginLeft: 5,
  },
  cartCont: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
