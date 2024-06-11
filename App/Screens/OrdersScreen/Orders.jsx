import { View, Text, ScrollView, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Color from '../../../utils/Color'
import { useUser } from '@clerk/clerk-expo'
import OrdersAPI from '../../../utils/OrdersAPI';
import { Ionicons } from '@expo/vector-icons';
import OrderItem from '../../Components/OrderItem/OrderItem';
import { useNavigation } from '@react-navigation/native';


export default function Orders() {

    const [orders, setOrders] = useState([]);
    const { user } = useUser();
    const navigation = useNavigation();

    useEffect(() => {

        OrdersAPI.getUserOrders(user.id).then((res) => {
            setOrders(res.orders);
            // console.log(res.orders[0]);
        });
    }, [])


    // console.log(orders.length);
    return (
        <ScrollView>
            <View style={styles.headingCont}>
                <Text style={styles.heading}>
                    Order Details
                </Text>
                <TouchableOpacity style={styles.backButton} onPress={() => {
                navigation.goBack();
              }}>
                    <Text><Ionicons name="arrow-back" size={24} color='white' /></Text>
                </TouchableOpacity>
            </View>
            {/* <Text style={styles.heading}>Orders</Text> */}
            {orders.length ?
                <View style={styles.listContainer}>
                    <FlatList
                        data={orders}
                        renderItem={({ item, index }) => {
                            // console.log(item);
                            return <OrderItem item={item} />
                        }}
                        keyExtractor={(item, index) => item.id}
                    />
                </View>
                :
                <View style={styles.blankPage}>
                    <Image source={require('../../../assets/image/noOrders.png')} />
                    {/* <Text style={styles.emptyText}>You haven’t placed any orders yet.</Text> */}
                </View>
            }
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    heading: {
        backgroundColor: Color.PRIMARY,
        color: Color.WHITE,
        fontSize: 30,
        fontWeight: "normal",
        padding: 15,
        paddingLeft: 10,
        flex: 1
    },
    listContainer: {
        width: '100%',
        padding: 20,
    },
    blankPage: {
        height: 620,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    backButton: {
        width: 30,
        backgroundColor: Color.PRIMARY,
        display: 'flex',
        //    alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 4,
        paddingRight: 4

    },
    headingCont: {
        display: 'flex',
        flexDirection: 'row-reverse',
    }
})