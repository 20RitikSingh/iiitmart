import { View, StyleSheet, Text } from 'react-native'
import React from 'react'
import Color from '../../../utils/Color'
import { FontAwesome } from '@expo/vector-icons';

export default function ProfileMenu({ item }) {
    return (
        <View style={styles.container}>
            <View style={styles.innerCont}>
                <FontAwesome name={item.icon} size={27} color={Color.PRIMARY} />
                <Text style={{fontSize:16, color:Color.PRIMARY, fontWeight:600}} >{item.name}</Text>
                <FontAwesome name="angle-right" size={27} color={Color.PRIMARY} />
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
        backgroundColor: Color.WHITE,
        // backgroundColor:'#FFA07A'


    },
    innerCont: {
        width:'90%',
        backgroundColor: Color.LIGHT_GREY,
        padding:10,
        paddingLeft:15,
        paddingRight:15,
        borderRadius:30,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'


    }
})