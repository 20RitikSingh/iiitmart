import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import SearchScreen from '../../Components/SearchBar/SearchScreen';
import React from 'react'

export default function HomeStack() {
    const Stack = createStackNavigator();
    function MyStack() {
        return (
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Search" component={SearchScreen} />
          </Stack.Navigator>
        );
      }
  return (
    <NavigationContainer independent={true}>
      <MyStack />
    </NavigationContainer>
  )
}