import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from 'react-native-virtualized-view'
import React, { useEffect, useState } from "react";
import CartAPI from "../../../utils/CartAPI.js";
import Color from "../../../utils/Color";
import { useClerk } from '@clerk/clerk-react';
import { useIsFocused } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
export default function Cart() {
  const navigation = useNavigation();
  const [cartData, setCartData] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const { user } = useClerk();
  const isFocused = useIsFocused();

//finding the current cart in hygraph db
  function updateCart(){
    CartAPI.GetCartByClerkID(user.id).then((res) => {
    setCartData(res?.cart?.cartItems);
  console.log('cart update hui')
  });  
}
    useEffect(updateCart, [isFocused]);

  useEffect(() => {
    let sum = 0
    cartData.map((item) => {
     console.log(item.quantity) 
      if(item.product && item.quantity){
        sum += item?.product?.price * item?.quantity
      }
      else{
        console.log(item + ' does not exists')
      }
    });
    setTotalAmount(sum)
  }, [cartData]);

 const CartProduct = ({ item })=>{
  if(item.product){
  return (
  <View style={styles.wrapper}>
    <View style={styles.product}>
      <Image source={{ uri: item?.product?.images[0]?.url }} style={styles.productImage} /> 
        <View style={styles.productDetails}>
          <Text style={styles.productTitle} numberOfLines={2}>
        
              {item.product?.name}
          </Text>
          <Text style={styles.price}>₹{item?.product?.price}</Text>
        </View>
    </View>
    <View style={styles.quantitySelectorWrapper}>
          <Text >QTY</Text>
          <View style={styles.quantitySelector}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                if(item.quantity > 1){
                  
                  setCartData(prevCartData => {
                    const updatedCartData = prevCartData.map(cartItem => {
                      if (cartItem.id === item.id) {
                        return {
                          ...cartItem,
                          quantity: cartItem.quantity - 1
                        };
                      }
                      return cartItem;
                    });
                    return updatedCartData;
                  });
                
  
                  CartAPI.updateCartItemQuantity(item.id, item.quantity - 1).then((res) => {
                    setCartData(prevCartData => {
                      const updatedCartData = prevCartData.map(cartItem => {
                        if (cartItem.id === item.id) {
                          return {
                            ...cartItem,
                            quantity: cartItem.quantity - 1
                          };
                        }
                        return cartItem;
                      });
                      return updatedCartData;
                    });
                    console.log(res, item.quantity);
                  });
                }
                else if(item.quantity == 1){
                  setCartData(prevCartData => {
                    const updatedCartData = prevCartData.filter(cartItem => cartItem.id !== item.id);
                    return updatedCartData;
                  });
                  CartAPI.deleteCartItem(item.id).then(res => console.log(res))

                }
              }}
            >
              <Text style={{fontSize:20}}>-</Text>
            </TouchableOpacity>
            <Text 
            style={{fontSize:20,
            paddingHorizontal:10,
            borderColor:Color.GREY,
            borderWidth:1,
            borderRadius:4}}>
            {item.quantity}
            </Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setCartData(prevCartData => {
                  const updatedCartData = prevCartData.map(cartItem => {
                    if (cartItem.id === item.id) {
                      return {
                        ...cartItem,
                        quantity: cartItem.quantity + 1
                      };
                    }
                    return cartItem;
                  });
                  return updatedCartData;
                });
              

                CartAPI.updateCartItemQuantity(item.id, item.quantity + 1).then((res) => {
                  console.log(res, item.quantity);
                });
              }}
            >
              <Text style={{fontSize:20}} >+</Text>
            </TouchableOpacity>
          </View>
        </View>
    </View>
  );
            }
};

  return (
    <ScrollView>
      <Text style={styles.heading}>{user.firstName}'s Cart</Text>
      <FlatList
        data={cartData}
        renderItem={CartProduct}
        showsVerticalScrollIndicator={false}
      />
      <View style={styles.fixedBottomView}>
        <Text>Total Bill - ₹{totalAmount}</Text>
        <TouchableOpacity style={styles.checkout} onPress={()=>navigation.navigate('OrdersDetailsPage',{cartData})}>
        <Text style={{ color:Color.TER,fontWeight:600,fontSize:16}}>Checkout</Text>
        </TouchableOpacity>
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
    width:'100%',
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
    backgroundColor: Color.LIGHT_GREY, 
    display: "flex",
    justifyContent:'center',
    padding: 16,
    borderTopWidth: 1,

  },
  checkout: {
    backgroundColor: Color.PRIMARY,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
   
  },
});
