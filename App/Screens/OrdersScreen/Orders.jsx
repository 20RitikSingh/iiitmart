import { View, Text, ScrollView, StyleSheet, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Color from '../../../utils/Color'
import { useUser } from '@clerk/clerk-expo'
import OrdersAPI from '../../../utils/OrdersAPI';
import OrderItem from '../../Components/OrderItem/OrderItem';


export default function Orders() {

    const [orders, setOrders] = useState([]);
    const { user } = useUser();

    useEffect(() => {

        OrdersAPI.getUserOrders(user.id).then((res) => {
            setOrders(res.orders);
            // console.log(res.orders[0]);
        });
    }, [])


    // console.log(orders.length);
    return (
        <ScrollView>
            <Text style={styles.heading}>Orders</Text>
            {orders.length ?
                <View style={styles.listContainer}>
                    <FlatList
                        data={orders}
                        renderItem={({ item, index }) => {
                            // console.log(item);
                            return <OrderItem item={item} />
                            //    return <Text>{item.date}</Text>
                            // return (
                            //     <View style={styles.container}>
                            //         <Image source={{ uri: item.orderItems[0]?.product?.images[0].url }} style={styles.image} />
                            //         <View style={styles.rightContainer}>
                            //             <View style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', alignItems: 'flex-start' }}>
                            //                 <Text style={styles.delivered}>{item.delivered ? 'Delivered  ' : 'Ordered '}
                            //                     {/* <Ionicons name={item.delivered ? "checkmark-done-sharp" : "checkmark-outline"} size={15} color='blue' /> */}
                            //                 </Text>
                            //                 {/* <Text style={styles.delivered}>{order.delivered ? 'Delivered' : 'Ordered'}</Text> */}
                            //                 <Text style={styles.date}>Delivered on: {item.date}</Text>
                            //             </View>
                            //             <View style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', marginTop: 2 }}>
                            //                 <Text style={styles.quantity}>{item.orderItems.length} items</Text>
                            //                 <Text style={styles.price}>₹ {item.total}</Text>
                            //             </View>
                            //         </View>
                            //     </View>
                            // )
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
        padding: 15
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
    
})