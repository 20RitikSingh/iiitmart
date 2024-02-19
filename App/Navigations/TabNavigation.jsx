import { View, Text } from 'react-native'
import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/HomeScreen/Home';
import { FontAwesome6 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Color from '../../utils/Color';
import Profile from '../Screens/ProfileScreen/Profile';
import Cake from '../Screens/CakeScreen/Cake';

// import Product from '../Screens/ProductScreen/Product';
import Cart from '../Screens/CartScreen/Cart';

import Product from '../Screens/ProductScreen/Product';
import CheckOut from '../Screens/CheckOutScreen/CheckOut';
import SearchScreen from '../Components/SearchBar/SearchScreen';
import HomeStack from '../Screens/HomeScreen/HomeStack';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
 
  return (
    <Tab.Navigator screenOptions={{
        headerShown:false,
        tabBarActiveTintColor: Color.TER,
        tabBarInactiveTintColor: Color.WHITE,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard:true,
        tabBarStyle:{backgroundColor: Color.PRIMARY}
    }}>
      <Tab.Screen name="Home" component={HomeStack } 
        options={{
            // tabBarLabel: ({ color = 'black' }) => (
            //     <Text style={{color:color, fontSize:12, marginTop:-7}}>HOME</Text>
            // ),
            tabBarIcon:({ color, size }) => (
                // <Feather name="home" size={size} color={color} />
                <MaterialIcons name="home" size={size+8} color={color} />
            )
        }}
      />
      <Tab.Screen name="Cake" component={Cake} 
        options={{
            // tabBarLabel: ({ color = 'black' }) => (
            //     <Text style={{color:color, fontSize:12, marginTop:-7}}>CAKE</Text>
            // ),
            tabBarIcon:({ color, size }) => (
                <FontAwesome6 name="cake-candles" size={size} color={color} />
            )
        }}
      />
      <Tab.Screen name="Profile" component={Profile} 
        options={{
            // tabBarLabel: ({ color = 'black' }) => (
            //     <Text style={{color:color, fontSize:12, marginTop:-7}}>Profile</Text>
            // ),
            tabBarIcon:({ color, size }) => (
                <FontAwesome name="user" size={size} color={color} />
            )
        }}
      />
      {/* <Tab.Screen name="Orders" component={Home} 
        options={{
            // tabBarLabel: ({ color = 'black' }) => (
            //     <Text style={{color:color, fontSize:12, marginTop:-7}}>Orders</Text>
            // ),
            tabBarIcon:({ color, size }) => (
                <Fontisto name="bookmark-alt" size={size-2} color={color} />
            )
        }}
      /> */}

      <Tab.Screen name="Cart" component={Cart} 

        options={{
            // tabBarLabel: ({ color = 'black' }) => (
            //     <Text style={{color:color, fontSize:12, marginTop:-7}}>Cart</Text>
            // ),
            tabBarIcon:({ color, size }) => (
                <FontAwesome name="shopping-cart" size={size} color={color} />
            )
        }}
      />
      
    </Tab.Navigator>

  )
}