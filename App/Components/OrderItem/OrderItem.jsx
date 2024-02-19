import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Color from '../../../utils/Color'
import { Ionicons } from '@expo/vector-icons';

export default function OrderItem({ item }) {
    return (
        <View style={styles.container}>
            <Image source={{ uri: item.orderItems[0]?.product?.images[0].url }} style={styles.image} />
            <View style={styles.rightContainer}>
                <View style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <Text style={styles.delivered}>{item.delivered ? 'Delivered  ' : 'Ordered '}
                        <Ionicons name={item.delivered ? "checkmark-done-sharp": "checkmark-outline"} size={15} color='blue' />
                    </Text>
                    {/* <Text style={styles.delivered}>{order.delivered ? 'Delivered' : 'Ordered'}</Text> */}
                    <Text style={styles.date}>Delivered on: {item.date}</Text>
                </View>
                <View style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', marginTop: 2 }}>
                    <Text style={styles.quantity}>{item.orderItems.length} items</Text>
                    <Text style={styles.price}>₹ {item.total}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: Color.WHITE,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        overflow: 'hidden',
        borderBlockColor: Color.PRIMARY,
        borderWidth: 1.5,
        marginBottom: 20
    },
    image: {
        width: '30%',
        height: 80
    },
    rightContainer: {
        flex: 1,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        padding: 14,
        paddingTop: 4,
        paddingBottom: 4,
        display: 'flex',
        // justifyContent: 'space-between',
        height: '100%'
    },
    delivered: {
        color: Color.PRIMARY,
        fontWeight: "bold",
        fontSize: 18,
        marginTop: -2
    },
    date: {
        color: Color.PRIMARY,
        fontWeight: 'normal',
        fontSize: 12,
        marginTop: -5
    },
    quantity: {
        color: Color.GREY
    },
    price: {
        fontWeight: 'bold'
    }
})