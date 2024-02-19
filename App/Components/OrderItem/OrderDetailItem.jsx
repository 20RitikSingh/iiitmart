import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Color from '../../../utils/Color'
import { Ionicons } from '@expo/vector-icons';

export default function OrderDetailItem({ item }) {
    // console.log(item);
    return (
        <View style={styles.container}>
            <Image source={{ uri: item?.product?.images[0].url }} style={styles.image} />
            <View style={styles.rightContainer}>
                <View style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <Text numberOfLines={1} style={styles.name}>{item.product.name}</Text>
                </View>
                <View style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
                    <Text style={styles.quantity}>Qnt: {item.total/item.product.price}</Text>
                    <Text style={styles.price}>Total: ₹ {item.total}</Text>
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
        paddingTop: 5,
        paddingBottom: 4,
        display: 'flex',
        height: '100%',
        flexDirection:'column',
        // alignItems:'center',
        // justifyContent: 'space-between',
    },
    name: {
        color: Color.PRIMARY,
        fontWeight: "bold",
        fontSize: 18,
        marginBottom:8,
        width:'100%'
        // marginTop: -2
    },
    quantity: {
        color: Color.GREY,
        fontSize:15
    },
    price: {
        fontWeight: 'bold',
        fontSize:16
    }
})