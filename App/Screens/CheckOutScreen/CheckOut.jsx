
  import React, { useEffect, useState } from 'react';
  import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import Color from '../../../utils/Color';
import { Ionicons } from '@expo/vector-icons';
import { useAuth, useUser } from '@clerk/clerk-react';
import { useNavigation } from '@react-navigation/native';
import Customer from '../../../utils/Customer';
import CartAPI from '../../../utils/CartAPI';
import Payment from './Payment';

  const OrderSummaryPage = ({ route }) => {
    const navigation = useNavigation();
    const [cartData, setCartData] = useState();
    const { user, isLoading } = useUser();
    const { isLoaded, signOut } = useAuth();
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const { name, email } = {"name": user?.fullName,"email":user?.primaryEmailAddress.emailAddress};
    

    useEffect(() => {
      CartAPI.GetCartByClerkID(user.id).then((res) => {
        setCartData(res);
      });

      Customer.getUserbyId(user.id).then((res) => {
          setAddress(res?.customer?.address);
          setPhoneNumber(res?.customer?.number);
          
      })
  }, [])
    const renderProductItem = ({ item }) => (
        <View style={styles.productContainer}>
          <Image source={{ uri: item.product?.images[0].url}} style={styles.productImage} />
          <View style={styles.productDetails}>
            <Text style={styles.productName}>{item.product?.name}</Text>
            <Text style={styles.productPrice}>₹{item.product?.price}</Text>
            <Text style={styles.productQuantity}>Quantity: {item?.quantity}</Text>
          </View>
        </View>
      );

    
      return (
        <View style={styles.container}>
          
        <View style={{ backgroundColor: Color.PRIMARY , paddingTop:10}}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Text style={styles.backButtonText}><Ionicons name="arrow-back" size={24} color={Color.WHITE}/></Text>
            </TouchableOpacity>
            <Text style={styles.header}>Order Summary</Text>
        </View>
        <Text style={styles.userInfoHeaderText}>Delivery Address</Text>
          <View style={styles.userInfoContainer}>
            <View style={styles.userInfoHeader}>
            <View style={styles.userInfo}>
              <Text>Name: {name}</Text>
              <Text>Address: {address}</Text>
              <Text>Phone Number: {phoneNumber}</Text>
              <Text>Email: {email}</Text>
            </View>
              <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                <Text style={styles.editButtonHeader}>Edit</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.itemsHeaderText}>Items ({cartData?.cart?.cartItems?.length})</Text>

          <FlatList
            data={cartData?.cart?.cartItems}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderProductItem}
            style={styles.productList}
          />
          <View style={styles.totalContainer}>
            <View>
            <Text style={styles.totalText}>Total:</Text>
            <Text style={styles.totalPrice}>₹{cartData?.cart?.total}</Text></View>
            <TouchableOpacity style={styles.paymentButton} onPress={()=>Payment(cartData?.cart)}>
              <Text style={styles.paymentButtonText}>Make Payment</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        padding: 0,
      },
      
      backButton: {
        position: 'absolute',
        left: 10,
        top: 20,
        zIndex: 1,
    },
    backButtonText: {
        fontSize: 16,
      },
      header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 5,
        marginLeft: 50,
        color: Color.WHITE,
    },
      userInfoContainer: {
        marginBottom: 20,
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginHorizontal: 15,
      },
      userInfoHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
      },
      userInfoHeaderText: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 10,
        marginLeft: 15,
        marginTop: 20,
        
      },
      editButtonHeader: {
        color: Color.TER,
      },
      userInfo: {
        fontSize: 16,
      },
      itemsHeaderText: {
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 20,
        marginBottom: 10,
      },
        productList: {
        paddingHorizontal: 20,
        },
      productContainer: {
        flexDirection: 'row',
        marginBottom: 20,
        borderWidth: 1,
        borderColor: Color.GREY,
        padding: 10,
        borderRadius: 5,
      },
      productImage: {
        width: 100,
        height: 100,
        marginRight: 10,
        borderRadius: 5,
      },
      productDetails: {
        flex: 1,
        justifyContent: 'space-between',
      },
      productName: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      productPrice: {
        fontSize: 16,
      },
      productQuantity: {
        fontSize: 16,
      },
      totalContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginTop: 20,
        backgroundColor:Color.TER,
        borderTopWidth: 0,
        padding: 15,
        alignItems: 'center',
      },
      totalText: {
        fontSize: 15,
        fontWeight: 'bold',
      },
      totalPrice: {
        fontSize: 15,
        fontWeight: 'bold',
      },
      paymentButton: {
        backgroundColor: Color.WHITE,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 30,
      },
      paymentButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Color.TER,
      },
    });
    
    export default OrderSummaryPage;