import { View, Text, FlatList, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function Categories() {
    const [showAll, setShowAll] = useState(false);

    const categories = [{
        name: 'slkdfj',
        image: 'https://images.unsplash.com/photo-1614735241165-6756e1df61ab?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }, {
        name: 'Stationary',
        image: 'https://images.unsplash.com/photo-1568871391149-449702439177?q=80&w=3016&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }, {
        name: 'Falana',
        image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        name: 'Dhimaka',
        image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },

    {
        name: 'Alpha',
        image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
    , {
        name: 'Stationary',
        image: 'https://images.unsplash.com/photo-1568871391149-449702439177?q=80&w=3016&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }, {
        name: 'Falana',
        image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
   
    ]
    const viewAll = {
        name: 'View All',
        image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
    const viewLess = {
        name: 'View Less',
        image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity style={styles.category} onPress={() => {
                if ((index === 3 && !showAll) || index === categories.length) {
                    setShowAll(!showAll)
                }
            }}>
                <Image source={{ uri: item.image }} style={styles.categoryImage} />
                <Text style={styles.categoryName}>{item.name}</Text>

            </TouchableOpacity>
        )
    }
    const initialData = [...categories.slice(0, 3), viewAll];
    const completeData = [...categories, viewLess]
    return (

        <View>
            <Text style={{ fontSize: 18, margin: 8 }}>Categories</Text>
            <View >
                <FlatList
                    data={showAll ? completeData : initialData}
                    numColumns={4}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    category: {
        width: Dimensions.get('window').width / 4,
        padding: 4,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    categoryImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        margin: 4,
    },
})