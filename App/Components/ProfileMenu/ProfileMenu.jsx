import { View, StyleSheet, Text } from 'react-native'
import React from 'react'
import Color from '../../../utils/Color'
import { FontAwesome } from '@expo/vector-icons';

export default function ProfileMenu({ item }) {
    return (
        <View style={styles.container}>
            <View style={styles.innerCont}>
                <FontAwesome name={item.icon} size={40} color={Color.PRIMARY} />
                <Text style={{fontSize:20, color:Color.PRIMARY, fontWeight:600}} >{item.name}</Text>
                <FontAwesome name="angle-right" size={40} color={Color.PRIMARY} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 10,
        marginBottom: 10,
        marginLeft:'5%',
        backgroundColor: Color.WHITE

    },
    innerCont: {
        width:'90%',
        backgroundColor: Color.LIGHT_GREY,
        padding:15,
        borderRadius:30,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'


    }
})