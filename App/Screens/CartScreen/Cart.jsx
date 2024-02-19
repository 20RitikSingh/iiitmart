import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import getTopDeals from "../../../utils/TopDealsAPI";
import getCustomers from "../../../utils/CustomerAPI";
import Color from "../../../utils/Color";
import { useClerk } from '@clerk/clerk-react';
import { SelectList } from "react-native-dropdown-select-list";
import Swiper from "react-native-swiper";
export default function Cart() {
  const [productData, setProductData] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const { user, session } = useClerk();
    
//   useEffect(() => {
//     getTopDeals().then((res) => {
//       const productsWithQuantity = res?.products.map((product) => ({
//         ...product,
//         quantity: 0,
//       }));
//       setProductData(productsWithQuantity);
//     });
//   }, []);


//finding the current user in hygraph db

    useEffect(() => {
        getCustomers().then((res) => {
            const customers = res?.customers;
            const currentUser = customers.find((customer) => customer.clerkId === user.id);
            console.log(currentUser)
        //     const productsWithQuantity = currentUser?.cart?.cartorder.map((product) => ({
        //         ...product,
        //         quantity: 0,
        //     }));
        //     setProductData(productsWithQuantity);
        });
    }, [user]);






  useEffect(() => {
    let sum = 0
    productData.map((product) => {
        sum += product.quantity * product.price
    });
    setTotalAmount(sum)
  }, [productData]);

  const CartProduct = ({ item }) => {
    return (
    <View style={styles.wrapper}>
      <View style={styles.product}>
        <Image source={{ uri: item.images[0].url }} style={styles.productImage} /> 
          <View style={styles.productDetails}>
            <Text style={styles.productTitle}>
              {item?.name.length > 40
                ? item?.name.slice(0, 40) + " ..."
                : item?.name}
            </Text>
            <Text style={styles.price}>₹{item.price}</Text>
          </View>
      </View>
      <View style={styles.quantitySelectorWrapper}>
            <Text >QTY</Text>
            <View style={styles.quantitySelector}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  // Decrease the quantity for the specific product, ensuring it doesn't go below 0
                  setProductData((prevData) =>
                    prevData.map((product) => {
                      if (product.id === item.id && product.quantity > 0) {
                        return { ...product, quantity: product.quantity - 1 };
                      }
                      return product;
                    })
                  );
                }}
              >
                <Text style={{fontSize:20}}>-</Text>
              </TouchableOpacity>
              <Text style={{fontSize:20,paddingHorizontal:10,borderColor:Color.GREY,borderWidth:1,borderRadius:4}} >{item.quantity}</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  setProductData((prevData) =>
                    prevData.map((product) => {
                      if (product.id === item.id) {
                        return { ...product, quantity: product.quantity + 1 };
                      }
                      return product;
                    })
                  );
                }}
              >
                <Text style={{fontSize:20}} >+</Text>
              </TouchableOpacity>
            </View>
          </View>
      </View>
    );
  };
  return (
    <ScrollView>
      <Text style={styles.heading}>{user.firstName}'s Cart</Text>
      <FlatList
        data={productData}
        renderItem={CartProduct}
        showsVerticalScrollIndicator={false}
      />
      <View style={styles.fixedBottomView}>
        <Text>Total Amount - {totalAmount}</Text>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
    wrapper:{
        borderColor:Color.GREY,
        borderWidth:1,
        padding:8,
    },
  heading: {
    fontSize: 18,
    margin: 8,
  },
  productDetails:{
    paddingHorizontal:16,
    marginHorizontal:10,
    direction:'flex',
    flex:2,
    justifyContent:'flex-start',
    alignItems:'flex-start',
    borderRadius:10,
    borderWidth:1,
  },
  product: {
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    padding: 8,
   
  },
  productImage: {
    flex:1,
    width: 100,
    height: 100,

  },
  productTitle:{
    fontSize: 18,
    fontWeight:'500'
  },
  price:{
    fontSize: 18,
    fontWeight:'bold'
  },
  quantitySelectorWrapper:{
    display:'flex',
    textAlign:'center',
  },
  quantitySelector:{
    alignSelf: 'flex-start',
    display: "flex",
    flexDirection: "row",
    borderColor:Color.GREY,
    borderWidth:1,
    borderRadius:10,
  }
  ,
  button: {
    paddingHorizontal: 10,
    // paddingVertical: 5,

    color: Color.WHITE,
    borderRadius: 4,
  },
  fixedBottomView: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "white", // Set background color or styles as needed
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: Color.BLACK, // Add a border if needed
  },
});
