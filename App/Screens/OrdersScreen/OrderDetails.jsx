import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Color from '../../../utils/Color'
import OrderDetailItem from '../../Components/OrderItem/OrderDetailItem'
import { Ionicons } from '@expo/vector-icons';


const itemw = {
    "date": "2024-02-19",
    "orderItems": [
        {
            "product": {
                "images": [
                    {
                        "url": "https://media.graphassets.com/lF28VhyZQrWySq84Ox6d"
                    }
                ],
                "price": 80,
                "name": "Kissan Mixed Fruit Jam (200 g)"
            },
            "total": 80
        },
        {
            "product": {
                "images": [
                    {
                        "url": "https://media.graphassets.com/qM1vovQOGawoIOdqRImg"
                    }
                ],
                "price": 14,
                "name": "Maggi 2-Minute Instant Noodles Masala 70 g "
            },
            "total": 14
        }
    ],
    "total": 200,
    "id": "clssxcble08ye0bmrn6aqms2s",
    "address": "BH1 Arawali Gwalior, MP",
    "delivered": true
}
export default function OrderDetails({item = itemw}) {


    return (
        <View style={{ height: '100%' }}>
            <View style={styles.headingCont}>
                <Text style={styles.heading}>
                    Order Details
                </Text>
                <TouchableOpacity style={styles.backButton} onPress={{}}>
                    <Text><Ionicons name="arrow-back" size={24} color='white' /></Text>
                </TouchableOpacity>
            </View>
            <View style={styles.topCont}>
                <Text style={styles.price}>Amount:<Text style={{ fontWeight: 'bold' }}> ₹{item.total}</Text></Text>
                <Text style={styles.date}>Date: <Text style={{ fontWeight: 'bold' }}> {item.date}</Text></Text>
            </View>
            <ScrollView>
                <View style={styles.listContainer}>
                    <FlatList
                        data={item.orderItems}
                        renderItem={({ item, index }) => {
                            // console.log(item)
                            return <OrderDetailItem item={item} />
                        }}
                        keyExtractor={(item, index) => item.id}
                    />
                </View>
            </ScrollView>
            <View style={{ position: 'fixed', bottom: 0 }}>
                <View style={styles.address}>
                    <Ionicons name="location-outline" size={24} color="white" />
                    <Text style={{ color: Color.WHITE, letterSpacing: 0.3, fontSize: 15, flex: 1 }}>{item.address}</Text>
                </View>

            </View>
        </View>
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
    topCont: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: Color.TER,
    },
    price: {
        color: Color.WHITE,
        fontSize: 20
    },
    date: {
        color: Color.WHITE,
        fontSize: 18
    },
    address: {
        backgroundColor: Color.TER,
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6
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