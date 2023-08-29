import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FoodDetailScreen from './screens/FoodDetailScreen';
import FoodListScreen from './screens/FoodListScreen';
const StackNavigator = () => {

    const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={FoodListScreen} options={{headerShown:false}}/>
        <Stack.Screen name="foodDetails" component={FoodDetailScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})
