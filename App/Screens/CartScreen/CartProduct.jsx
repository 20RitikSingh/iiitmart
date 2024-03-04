// import {
//     View,
//     Text,
//     StyleSheet,
//     Image,
//     TouchableOpacity,
//   } from "react-native";
//   import React, { useEffect, useState } from "react";
//   import CartAPI from "../../../utils/CartAPI.js";
  
//   import Color from "../../../utils/Color";

// export default function CartProduct({ item }){
//     console.log("printing " ,item)

//     let quantity = item.quantity
//     if(item.product){
//     return (
//     <View style={styles.wrapper}>
//       <View style={styles.product}>
//         <Image source={{ uri: item?.product?.images[0]?.url }} style={styles.productImage} /> 
//           <View style={styles.productDetails}>
//             <Text style={styles.productTitle} numberOfLines={2}>
//               {/* {item?.product.name.length > 40
//                 ? item?.product.name.slice(0, 40) + " ..."
//                 : item?.product.name} */}
//                 {item.product?.name}
//             </Text>
//             <Text style={styles.price}>₹{item?.product?.price}</Text>
//           </View>
//       </View>
//       <View style={styles.quantitySelectorWrapper}>
//             <Text >QTY</Text>
//             <View style={styles.quantitySelector}>
//               <TouchableOpacity
//                 style={styles.button}
//                 onPress={() => {
//                   if(item.quantity>0){
//                     quantity--;
//                     CartAPI.updateCartItemQuantity(item.id,item.quantity-1).then((res) => {
//                       console.log(res)
//                     })
//                     // CartAPI.deleteCartItem(item.id).then((res)=>console.log(res))
//                   }
//                 }}
//               >
//                 <Text style={{fontSize:20}}>-</Text>
//               </TouchableOpacity>
//               <Text style={{fontSize:20,paddingHorizontal:10,borderColor:Color.GREY,borderWidth:1,borderRadius:4}} >{quantity}</Text>
//               <TouchableOpacity
//                 style={styles.button}
//                 onPress={() => {
//                     quantity++;
//                     CartAPI.updateCartItemQuantity(item.id,item.quantity+1).then((res) => {
//                     console.log(res,item.quantity)
//                })
//                 }}
//               >
//                 <Text style={{fontSize:20}} >+</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//       </View>
//     );
//               }
//   };

//   const styles = StyleSheet.create({
//     wrapper:{
//         borderColor:Color.GREY,
//         borderWidth:1,
//         padding:8,
//     },
//   heading: {
//     fontSize: 18,
//     margin: 8,
//   },
//   productDetails:{
//     paddingHorizontal:16,
//     marginHorizontal:10,
//     direction:'flex',
//     flex:2,
//     justifyContent:'flex-start',
//     alignItems:'flex-start',
//     borderRadius:10,
//     borderWidth:1,
//   },
//   product: {
//     display:'flex',
//     flexDirection:'row',
//     justifyContent:'space-around',
//     padding: 8,
   
//   },
//   productImage: {
//     flex:1,
//     width: 100,
//     height: 100,

//   },
//   productTitle:{
//     width:'100%',
//     fontSize: 18,
//     fontWeight:'500'
//   },
//   price:{
//     fontSize: 18,
//     fontWeight:'bold'
//   },
//   quantitySelectorWrapper:{
//     display:'flex',
//     textAlign:'center',
//   },
//   quantitySelector:{
//     alignSelf: 'flex-start',
//     display: "flex",
//     flexDirection: "row",
//     borderColor:Color.GREY,
//     borderWidth:1,
//     borderRadius:10,
//   }
//   ,
//   button: {
//     paddingHorizontal: 10,
//     // paddingVertical: 5,

//     color: Color.WHITE,
//     borderRadius: 4,
//   },
//   fixedBottomView: {
//     position: "fixed",
//     bottom: 0,
//     left: 0,
//     right: 0,
//     backgroundColor: Color.LIGHT_GREY, 
//     display: "flex",
//     justifyContent:'center',
//     padding: 16,
//     borderTopWidth: 1,

//   },
//   checkout: {
//     backgroundColor: Color.PRIMARY,
//     padding: 10,
//     borderRadius: 10,
//     alignItems: "center",
   
//   },
// });