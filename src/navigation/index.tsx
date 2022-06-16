import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import CreateScreen from '../screens/CreateScreen';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'UPayments Store'}}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{title: 'Product Detail', headerBackTitleVisible: false}}
        />
        <Stack.Screen
          name="Create"
          component={CreateScreen}
          options={{title: 'Create Product', headerBackTitleVisible: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
